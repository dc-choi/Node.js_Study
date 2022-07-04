// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import terminalRepo from "../model/terminalRepo.js";
import { apiCode } from "../middleware/apiCode.js";
import { ApiError } from '../middleware/error.js';

const terminalService = {};

terminalService.read = async() => {
	try {
		const result = await terminalRepo.read();
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.detail = async(terminalId) => {
	try {
		const result = await terminalRepo.detail(terminalId);
		if (result.length === 0) throw new ApiError(apiCode.NOT_FOUND, 'NOT_FOUND');
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.write = async(terminalName, supervisorId) => {
	try {
		const result = await terminalRepo.write(terminalName, supervisorId);
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.modify = async (terminalId, terminalName, supervisorId) => {
	try {
		await terminalService.detail(terminalId); // detail에서 예외처리 됨.
		// if (check.length === 0) throw new ApiError(apiCode.NOT_FOUND, 'NOT_FOUND');
		const result = await terminalRepo.modify(terminalId, terminalName, supervisorId);
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.remove = async (terminalId) => {
	try {
		await terminalService.detail(terminalId); // detail에서 예외처리 됨.
		// if (check.length === 0) throw new ApiError(apiCode.NOT_FOUND, 'NOT_FOUND');
		const result = await terminalRepo.remove(terminalId);
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.entry = async(workerId, terminalId) => {
	try {
		let str;
		const result = await terminalRepo.entry(workerId, terminalId);
		
		if (result.length > 0) {
			str = 'SUCCESS';
		} else {
			str = 'FAIL';
		}
		
		return str;
	} catch (error) {
		throw error;
	}
};

export default terminalService;