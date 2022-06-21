// router callback에 직접 controller 로직을 짜는게 아닙니다.
// router의 목적은 데이터를 받고 그 데이터를 다음 장치로 보내는 역할입니다.
// 그 다음 장치가 controller 이며 로직을 분리하는게 좋습니다.
// 참고: https://development-crow.tistory.com/31

import studentRedo from "../model/student.js";

const indexController = {};

indexController.read = async(req, res, next) => {
	try {
		const result = await studentRedo.read();
		res.send(result);
	} catch (error) {
		next(error);
	}
};

indexController.detail = async(req, res, next) => {
	try {
		const { id } = req.params;
		const result = await studentRedo.detail(id);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

indexController.write = async(req, res, next) => {
	try {
		const { code, name, age, contact } = req.body;
		const result = await studentRedo.write(code, name, age, contact);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

indexController.modify = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name, age, contact } = req.body;
		const result = await studentRedo.modify(id, name, age, contact, groupCode);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

indexController.remove = async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await studentRedo.remove(id);
		res.send(result);
	} catch (error) {
		next(error);
	}
};

export default indexController;