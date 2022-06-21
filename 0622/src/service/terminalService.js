// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import terminalRepo from "../model/terminalRepo.js";

const terminalService = {};

terminalService.read = async() => {
	try {
		const result = await terminalRepo.read();
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.detail = async(id) => {
	try {
		const result = await terminalRepo.detail(id);
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.write = async(name, supervisorId) => {
	try {
		const result = await terminalRepo.write(name, supervisorId);
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.modify = async (id, name, supervisorId) => {
	try {
		const result = await terminalRepo.modify(id, name, supervisorId);
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.remove = async (id) => {
	try {
		const result = await terminalRepo.remove(id);
		return result;
	} catch (error) {
		throw error;
	}
};

terminalService.enter = async(workerId, terminalId) => {
	try {
		let str;
		const result = await terminalRepo.enter(workerId, terminalId);

		if (result != null) {
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