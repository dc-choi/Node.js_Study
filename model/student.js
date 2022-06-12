import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});

const student = {};

student.read = async() => {
	const sql = `select * from student`;
	await connection.connect();
	const result = await connection.query(sql);
	console.log(result[0]);
	await connection.end();
	return result[0];
}

student.detail = async(id) => {
	const sql = `select * from student where s_code = ${id}`;
	await connection.connect();
	const result = await connection.query(sql);
	await connection.end();
	return result[0];
}

student.write = async(code, name, age, contact) => {
	const sql = `insert into student(s_code, s_society_name, s_catholic_name, s_age, s_contact, group_g_code)
				values(${code}, ${name}, '안나', ${age}, ${contact}, '220303-123456')`;
	await connection.connect();
	const result = await connection.query(sql);
	await connection.end();
	return result[0];
}

student.modify = async(id, name, age, contact) => {
	const sql = `update student
				set s_society_name = ${name}, s_catholic_name = '안나', s_age = ${age}, s_contact = ${contact}, group_g_code = '220303-123456'
				where s_code = ${id}`;
	await connection.connect();
	const result = await connection.query(sql);
	await connection.end();
	return result[0];
}

student.remove = async(id) => {
	const sql = `delete from student
				where s_code = ${id}`;
	await connection.connect();
	const result = await connection.query(sql);
	await connection.end();
	return result[0];
}

export default student;