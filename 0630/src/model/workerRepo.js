import { query } from './conn.js';

const worker = {};

worker.read = async() => {
	let sql = `SELECT * FROM worker`;
	const result = await query(sql);
	return result;
}

worker.detail = async(id) => {
	let sql = `SELECT * FROM worker WHERE worker_id = ?`;
	const result = await query(sql, [id]);
	return result;
}

worker.write = async(name) => {
	let sql = `INSERT INTO worker(worker_name) `;
	sql += `VALUES(?)`;
	const result = await query(sql, [name]);
	return result;
}

worker.modify = async(id, name) => {
	let sql = `UPDATE worker `;
	sql += `SET worker_name = ? `;
	sql += `WHERE worker_id = ?`;
	const result = await query(sql, [name, id]);
	return result;
}

worker.remove = async(id) => {
	let sql = `DELETE FROM worker WHERE worker_id = ?`;
	const result = await query(sql, [id]);
	return result;
}

worker.allow = async(workerId, terminalId) => {
	let sql = `INSERT INTO teminal_worker(worker_worker_id, terminal_terminal_id) `;
	sql += `VALUES(?, ?)`;
	const result = await query(sql, [workerId, terminalId]);
	return result;
}

export default worker;