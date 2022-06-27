import { query } from './conn.js';

const log = {};

log.detail = async(id) => {
	let sql = `SELECT * FROM log WHERE log_id = ?`;
	const result = await query(sql, [id]);
	return result;
}

log.write = async(workerId, terminalId, logDescription) => {
	let sql = `INSERT INTO log(log_worker, log_terminal, log_description, log_date) `;
	sql += `VALUES(?, ?, ?, now())`;
	const result = await query(sql, [workerId, terminalId, logDescription]);
	return result;
}

export default log;