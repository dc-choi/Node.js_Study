import query from './conn.js';

const student = {};

student.read = async() => {
	const sql = `select * from student`;
	const result = query(sql);
	return result;
}

student.detail = async(id) => {
	const sql = `select * from student where s_code = ${id}`;
	const result = query(sql);
	return result;
}

student.write = async(code, name, age, contact) => {
	const sql = `insert into student(s_code, s_society_name, s_catholic_name, s_age, s_contact, group_g_code)
				values(${code}, ${name}, '안나', ${age}, ${contact}, '220303-123456')`;
	const result = query(sql);
	return result;
}

student.modify = async(id, name, age, contact) => {
	const sql = `update student
				set s_society_name = ${name}, s_catholic_name = '안나', s_age = ${age}, s_contact = ${contact}, group_g_code = '220303-123456'
				where s_code = ${id}`;
	const result = query(sql);
	return result;
}

student.remove = async(id) => {
	const sql = `delete from student
				where s_code = ${id}`;
	const result = query(sql);
	return result;
}

export default student;