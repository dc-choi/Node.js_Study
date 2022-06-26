import { apiCode } from "./apiCode.js";

export const onError = (error) => {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

export const getSuccessResponse = (result) => {
	const payload = {
		code: apiCode.OK,
		message: 'OK',
		result: result
	}
	return payload;
}

export const getCreateResponse = (result) => {
	const payload = {
		code: apiCode.CREATED,
		message: 'CREATED',
		result: result
	}
	return payload;
}

export const getNoContentResponse = (result) => {
	const payload = {
		code: apiCode.NO_CONTENT,
		message: 'NO_CONTENT',
		result: result
	}
	return payload;
}

export const getNotFoundResponse = (result) => {
	const payload = {
		code: apiCode.NOT_FOUND,
		message: 'NOT_FOUND',
		result: result
	}
	return payload;
}

export const getErrorResponse = (error) => {
	const payload = {
		code: apiCode.INTERNAL_SERVER_ERROR,
		message: error,
		result: {}
	}
	return payload;
}
