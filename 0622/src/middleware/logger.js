import fs from 'fs';

const logger = async(workerId, terminalId, logDescription) => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	const now = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	fs.appendFileSync(`../../log/${year}${month}${day}.log`, `workerId: ${workerId}, terminalId: ${terminalId}, logDescription: ${logDescription} \n ${now} \n`, 'utf8');
}

export default logger;