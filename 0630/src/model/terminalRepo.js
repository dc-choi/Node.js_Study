import { query } from './conn.js';

const terminal = {};

terminal.read = async() => {
	let sql = `SELECT * FROM terminal`;
	const result = await query(sql);
	return result;
}

terminal.detail = async(id) => {
	let sql = `SELECT * FROM terminal WHERE terminal_id = ?`;
	const result = await query(sql, [id]);
	return result;
}

terminal.write = async(name, supervisorId) => {
	let sql = `INSERT INTO terminal(terminal_name, supervisor_supervisor_id) `;
	sql += `VALUES(?, ?)`;
	const result = await query(sql, [name, supervisorId]);
	return result;
}

terminal.modify = async(id, name, supervisorId) => {
	let sql = `UPDATE terminal `;
	sql += `SET terminal_name = ?, supervisor_supervisor_id = ? `;
	sql += `WHERE terminal_id = ?`;
	const result = await query(sql, [name, supervisorId, id]);
	return result;
}

terminal.remove = async(id) => {
	let sql = `DELETE FROM terminal WHERE terminal_id = ?`;
	const result = await query(sql, [id]);
	return result;
}

terminal.enter = async(workerId, terminalId) => {
	let sql = `SELECT * FROM teminal_worker WHERE terminal_terminal_id = ? AND worker_worker_id = ?`;
	const result = await query(sql, [terminalId, workerId]);
	return result;
}

export default terminal;