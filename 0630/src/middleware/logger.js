import fs from 'fs';
import path from 'path';

const __filename = path.resolve();
const __dirname = path.dirname(__filename);

const logger = async(workerId, terminalId, logDescription) => {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	if (month < 9) month = month.toString().padStart(2, '0');
	let day = date.getDate();
	let now = `${date.getHours()}/${date.getMinutes()}/${date.getSeconds()}`;

	const dir = `${__dirname}\\0622\\log\\`;
	const file = `${year}${month}${day}.log`;

	if (!fs.existsSync(dir))
		fs.mkdirSync(dir);
	fs.appendFileSync(`${dir}${file}`, `workerId: ${workerId}, terminalId: ${terminalId}, logDescription: ${logDescription} time: ${year}/${month}/${day}/${now} \n`, 'utf8');
}

export default logger;