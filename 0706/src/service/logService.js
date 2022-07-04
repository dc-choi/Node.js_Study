// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import logRedo from "../model/logRepo.js";

const logService = {};

logService.write = async(workerId, terminalId, logDescription) => {
	try {
		const result = await logRedo.write(workerId, terminalId, logDescription);
		return result;
	} catch (error) {
		throw error;
	}
};

export default logService;