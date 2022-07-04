import { query, transactionQuery } from './conn.js';

const terminal = {};

terminal.read = async() => {
	let sql = `SELECT * FROM terminal`;
	const result = await query(sql);
	return result;
}

terminal.detail = async(terminalId) => {
	let sql = `SELECT * FROM terminal WHERE terminal_id = ?`;
	const result = await query(sql, [terminalId]);
	return result;
}

terminal.write = async(terminalName, supervisorId) => {
	let sql = `INSERT INTO terminal(terminal_name, supervisor_supervisor_id) `;
	sql += `VALUES(?, ?)`;
	const result = await transactionQuery(sql, [terminalName, supervisorId]);
	return result;
}

terminal.modify = async(terminalId, terminalName, supervisorId) => {
	let sql = `UPDATE terminal `;
	sql += `SET terminal_name = ?, supervisor_supervisor_id = ? `;
	sql += `WHERE terminal_id = ?`;
	const result = await transactionQuery(sql, [terminalName, supervisorId, terminalId]);
	return result;
}

terminal.remove = async(terminalId) => {
	let sql = `DELETE FROM terminal WHERE terminal_id = ?`;
	const result = await transactionQuery(sql, [terminalId]);
	return result;
}

terminal.entry = async(workerId, terminalId) => {
	let sql = `SELECT * FROM teminal_worker WHERE terminal_terminal_id = ? AND worker_worker_id = ?`;
	const result = await query(sql, [terminalId, workerId]);
	return result;
}

export default terminal;