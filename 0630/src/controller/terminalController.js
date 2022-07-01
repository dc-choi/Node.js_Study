// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import terminalService from "../service/terminalService.js";
import logService from "../service/logService.js";
import { getSuccessResponse, getCreateResponse, getNoContentResponse, getErrorResponse } from '../middleware/error.js';

const terminalController = {};

terminalController.read = async(req, res, next) => {
	let sendData;

	try {
		const result = await terminalService.read();
		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.detail = async(req, res, next) => {
	let sendData;

	try {
		const { id } = req.params;
		const result = await terminalService.detail(id);
		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.write = async(req, res, next) => {
	let sendData;

	try {
		const { name, supervisorId } = req.body;
		const result = await terminalService.write(name, supervisorId);
		sendData = getCreateResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.modify = async (req, res, next) => {
	let sendData;

	try {
		const { id } = req.params;
		const { name, supervisorId } = req.body;
		const result = await terminalService.modify(id, name, supervisorId);
		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.remove = async (req, res, next) => {
	let sendData;

	try {
		const { id } = req.params;
		const result = await terminalService.remove(id);
		sendData = getNoContentResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

terminalController.enter = async(req, res, next) => {
	let sendData;

	try {
		const { workerId, terminalId } = req.body;

		const enterResult = await terminalService.enter(workerId, terminalId);
		const logResult = await logService.write(workerId, terminalId, enterResult);

		sendData = {
			enterResult: getCreateResponse(enterResult),
			logResult: getCreateResponse(logResult)
		};
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

export default terminalController;