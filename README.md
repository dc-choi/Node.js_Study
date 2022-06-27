# Node.js Study

## 6월 22일

<details>
<summary>자세히 보기</summary>

1. 과제 요구사항
	1. 현재 supervisor, worker 2가지 보안등급을 가진 유저가 존재합니다
	2. supervisor은 모든 터미널에 대해 관리 권한을 가지고 있으며 터미널을 이용하지는 못합니다.
	3. worker는 supervisor가 허가해준 터미널을 이용할 수 있으며 worker가 터미널을 이용할 경우 로그가 생성됩니다.

2. 필요한 기능
	1. User CRUD
	2. Terminal CURD
	3. Log CRD
	4. Restful api naming

3. 구현 내용
	1. ![ERD](https://github.com/dc-choi/Node.js_Study/blob/master/img/gate_pass.PNG)
	2. 요구사항 추가로 인해 Service 추가
	3. 핵심 비즈니스 로직을 Service에 작성
	4. Controller는 요청에 대한 처리를 작성
	5. route는 요청을 받아오는 처리만 함.

</details>

## 6월 30일

<details>
<summary>자세히 보기</summary>

1. 과제 요구사항
	1. 클린 아키텍쳐에 대해서 알아오기
	2. 에러 처리

2. 필요한 기능
	1. 적절한 아키텍쳐
	2. 500 에러를 뱉어내지 않는 에러처리 (500 에러를 지양하라고 함.)

3. 구현 내용
	1. ![에러처리 미들웨어](https://github.com/dc-choi/Node.js_Study/blob/master/img/%EC%97%90%EB%9F%AC%EC%B2%98%EB%A6%AC%20%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4.PNG)
	2. ![컨트롤러 에러처리](https://github.com/dc-choi/Node.js_Study/blob/master/img/%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC%20%EC%97%90%EB%9F%AC%EC%B2%98%EB%A6%AC.PNG) 

</details>