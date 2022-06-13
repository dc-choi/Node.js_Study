import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const query = async(sql) => {
	const connection = await mysql.createConnection({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USERNAME,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE
	});

	await connection.connect();
	const result = await connection.query(sql);
	await connection.end();
	return result[0];
}

export default query;