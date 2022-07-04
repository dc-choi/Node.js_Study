import { query, transactionQuery } from './conn.js';

const worker = {};

worker.read = async() => {
	let sql = `SELECT * FROM worker`;
	const result = await query(sql);
	return result;
}

worker.detail = async(workerId) => {
	let sql = `SELECT * FROM worker WHERE worker_id = ?`;
	const result = await query(sql, [workerId]);
	return result;
}

worker.write = async(workerName) => {
	let sql = `INSERT INTO worker(worker_name) `;
	sql += `VALUES(?)`;
	const result = await transactionQuery(sql, [workerName]);
	return result;
}

worker.modify = async(workerId, workerName) => {
	let sql = `UPDATE worker `;
	sql += `SET worker_name = ? `;
	sql += `WHERE worker_id = ?`;
	const result = await transactionQuery(sql, [workerName, workerId]);
	return result;
}

worker.remove = async(workerId) => {
	let sql = `DELETE FROM worker WHERE worker_id = ?`;
	const result = await transactionQuery(sql, [workerId]);
	return result;
}

worker.checkAllow = async(workerId, terminalId) => {
	let sql = `SELECT * FROM teminal_worker `;
	sql += `WHERE worker_worker_id = ? `;
	sql += `AND terminal_terminal_id = ?`;
	const result = await query(sql, [workerId, terminalId]);
	return result;
}

worker.approval = async(workerId, terminalId) => {
	let sql = `INSERT INTO teminal_worker(worker_worker_id, terminal_terminal_id) `;
	sql += `VALUES(?, ?)`;
	const result = await transactionQuery(sql, [workerId, terminalId]);
	return result;
}

export default worker;