// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import workerService from "../service/workerService.js";

const workerController = {};

workerController.read = async(req, res, next) => {
	try {
		const result = await workerService.read();
		res.send(result);
	} catch (error) {
		next(error);
	}
};

workerController.detail = async(req, res, next) => {
	try {
		const { id } = req.params;
		const result = await workerService.detail(id);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

workerController.write = async(req, res, next) => {
	try {
		const { id } = req.body;
		const result = await workerService.write(id);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

workerController.modify = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name } = req.body;
		const result = await workerService.modify(id, name);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

workerController.remove = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await workerService.remove(id);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

workerController.allow = async(req, res, next) => {
	try {
		const { workerId, terminalId } = req.body;
		const result = await workerService.allow(workerId, terminalId);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

export default workerController;