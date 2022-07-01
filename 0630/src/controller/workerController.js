// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import workerService from "../service/workerService.js";
import { getSuccessResponse, getCreateResponse, getNoContentResponse, getErrorResponse } from '../middleware/error.js';

const workerController = {};

workerController.read = async(req, res, next) => {
	let sendData;

	try {
		const result = await workerService.read();
		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.detail = async(req, res, next) => {
	let sendData;

	try {
		const { id } = req.params;
		const result = await workerService.detail(id);
		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.write = async(req, res, next) => {
	let sendData;

	try {
		const { name } = req.body;
		const result = await workerService.write(name);
		sendData = getCreateResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.modify = async (req, res, next) => {
	let sendData;

	try {
		const { id } = req.params;
		const { name } = req.body;
		const result = await workerService.modify(id, name);
		sendData = getSuccessResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.remove = async (req, res, next) => {
	let sendData;

	try {
		const { id } = req.params;
		const result = await workerService.remove(id);
		sendData = getNoContentResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

workerController.allow = async(req, res, next) => {
	let sendData;

	try {
		const { workerId, terminalId } = req.body;
		const result = await workerService.allow(workerId, terminalId);
		sendData = getCreateResponse(result);
		res.json(sendData);
	} catch (error) {
		sendData = getErrorResponse(error);
		res.json(sendData);
	}
};

export default workerController;