import { query } from './conn.js';

const student = {};

student.read = async() => {
	let sql = `SELECT * FROM student`;
	const result = await query(sql);
	return result;
}

student.detail = async(id) => {
	let sql = `SELECT * FROM student WHERE s_code = ?`;
	const result = await query(sql, [id]);
	return result;
}

student.write = async(id, name, age, contact) => {
	let sql = `INSERT INTO student(s_code, s_society_name, s_catholic_name, s_age, s_contact, group_g_code) `;
	sql += `VALUES(?, ?, '안나', ?, ?, '220303-123456')`;
	const result = await query(sql, [id, name, age, contact]);
	return result;
}

student.modify = async(id, name, age, contact) => {
	let sql = `UPDATE student `;
	sql += `SET s_society_name = ?, s_catholic_name = 안나, s_age = ?, s_contact = ?, group_g_code = 220303-123456 `;
	sql += `WHERE s_code = ?`;
	const result = await query(sql, [name, age, contact, id]);
	return result;
}

student.remove = async(id) => {
	let sql = `DELETE FROM student WHERE s_code = ?`;
	const result = await query(sql, [id]);
	return result;
}

export default student;