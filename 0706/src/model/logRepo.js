import { query, transactionQuery } from './conn.js';

const log = {};

log.write = async(workerId, terminalId, logDescription) => {
	let sql = `INSERT INTO log(log_worker, log_terminal, log_description, log_date) `;
	sql += `VALUES(?, ?, ?, now())`;
	const result = await transactionQuery(sql, [workerId, terminalId, logDescription]);
	return result;
}

export default log;