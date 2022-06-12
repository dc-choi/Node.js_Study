const onError = (error) => {
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

const notFound =  (err, req, res, next) => {
	const result = {
		code: err.statusCode,
		message: "404 NOT FOUND",
		error: err.message,
	};

	res.send(result);
}

const serverError = (err, req, res, next) => {
	const result = {
		code: err.statusCode,
		message: "500 server Error",
		error: err.message,
	};

	res.send(result);
}

export {
	onError,
	notFound,
	serverError
}