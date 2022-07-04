// createPool 적용 성공
// 참고: https://holywater-jeong.github.io/2018/06/08/node-mysql-async-await

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
	connectionLimit: 10,
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});

const connection = await pool.getConnection(async(err, conn) => {
	if (!err)
		return conn;
	return err;
});

// 트랜잭션 사용하지않는 쿼리
export const query = async(sql, params = null) => {
	let data;

	try {
		if (params !== null) data = await connection.query(sql, params);
		else data = await connection.query(sql);
	} catch (error) {
		console.log(`Query Error: ${error}`);
		throw error;
	} finally {
		connection.release();
	}

	return data[0];
};

// 트랜잭션 사용하는 쿼리
export const transactionQuery = async(sql, params = null) => {
	let data;

	try {
		await connection.beginTransaction(); // 트랜잭션 시작

		if (params !== null) data = await connection.query(sql, params);
		else data = await connection.query(sql);

		await connection.commit(); // 커밋
	} catch (error) {
		await connection.rollback(); // 실패시 롤백
		console.log(`Query Error: ${error}`);
		throw error;
	} finally {
		connection.release();
	}

	return data[0];
};
