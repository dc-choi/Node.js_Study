// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import workerRepo from "../model/workerRepo.js";
import { apiCode } from "../middleware/apiCode.js";
import { ApiError } from '../middleware/error.js';

const workerService = {};

workerService.read = async() => {
	try {
		const result = await workerRepo.read();
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.detail = async(workerId) => {
	try {
		const result = await workerRepo.detail(workerId);
		if (result.length === 0) throw new ApiError(apiCode.NOT_FOUND, 'NOT_FOUND');
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.write = async(workerName) => {
	try {
		const result = await workerRepo.write(workerName);
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.modify = async (workerId, workerName) => {
	try {
		await workerService.detail(workerId); // detail에서 예외처리 됨.
		// if (check.length === 0) throw new ApiError(apiCode.NOT_FOUND, 'NOT_FOUND');
		const result = await workerRepo.modify(workerId, workerName);
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.remove = async (workerId) => {
	try {
		await workerService.detail(workerId); // detail에서 예외처리 됨.
		// if (check.length === 0) throw new ApiError(apiCode.NOT_FOUND, 'NOT_FOUND');
		const result = await workerRepo.remove(workerId);
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.approval = async(workerId, terminalId) => {
	try {
		const check = await workerRepo.checkAllow(workerId, terminalId);
		if (check.length > 0) throw new ApiError(apiCode.CONFLICT, 'CONFLICT');
		const result = await workerRepo.approval(workerId, terminalId);
		return result;
	} catch (error) {
		throw error;
	}
};

export default workerService;