// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import terminalService from "../service/terminalService.js";
import logService from "../service/logService.js";

const terminalController = {};

terminalController.read = async(req, res, next) => {
	try {
		const result = await terminalService.read();
		res.send(result);
	} catch (error) {
		next(error);
	}
};

terminalController.detail = async(req, res, next) => {
	try {
		const { id } = req.params;
		const result = await terminalService.detail(id);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

terminalController.write = async(req, res, next) => {
	try {
		const { name, supervisorId } = req.body;
		const result = await terminalService.write(name, supervisorId);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

terminalController.modify = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name, supervisorId } = req.body;
		const result = await terminalService.modify(id, name, supervisorId);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

terminalController.remove = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await terminalService.remove(id);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

terminalController.enter = async(req, res, next) => {
	try {
		const { workerId, terminalId } = req.body;

		const enterResult = await terminalService.enter(workerId, terminalId);
		const logResult = await logService.write(workerId, terminalId, enterResult);

		res.send({
			enterResult,
			logResult
		});
	} catch (error) {
		next(error);
	}
};

export default terminalController;