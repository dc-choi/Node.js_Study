// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import workerRepo from "../model/workerRepo.js";

const workerService = {};

workerService.read = async() => {
	try {
		const result = await workerRepo.read();
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.detail = async(id) => {
	try {
		const result = await workerRepo.detail(id);
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.write = async(name) => {
	try {
		const result = await workerRepo.write(name);
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.modify = async (id, name) => {
	try {
		const result = await workerRepo.modify(id, name);
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.remove = async (id) => {
	try {
		const result = await workerRepo.remove(id);
		return result;
	} catch (error) {
		throw error;
	}
};

workerService.allow = async(workerId, terminalId) => {
	try {
		const result = await workerRepo.allow(workerId, terminalId);
		return result;
	} catch (error) {
		throw error;
	}
};

export default workerService;