# Node.js Study

## 소개
* 참여 인원: donchoi, euhong, sangjeon
* 스터디 목표: Node.js 및 백엔드 전반적인 지식에 대해 공부 후 프론트와 협업하여 프로젝트 진행
* 빔 프로젝트로 서로의 코드를 보며 리뷰하는 식으로 진행

## 6월 15일

<details>
<summary>자세히 보기</summary>

1. 과제 요구사항
	1. 여러 DB의 장단점 파악해 프로젝트에 따른 DB 선택
	2. restful api를 적용한 게시판 api 개발

2. 필요한 기능
	1. Create
	2. Read
	3. Update
	4. Delete

3. 구현 내용
	1. 자세한 내용은 코드 참고...

</details>

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
	1. 에러 처리
	2. 클린 아키텍쳐에 대해서 알아오기

2. 필요한 기능
	1. 500 에러를 뱉어내지 않는 에러처리 (500 에러를 지양하라고 함.)
	2. 적절한 아키텍쳐

3. 구현 내용
	1. ![에러처리 미들웨어](https://github.com/dc-choi/Node.js_Study/blob/master/img/%EC%97%90%EB%9F%AC%EC%B2%98%EB%A6%AC%20%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4.PNG)
	2. ![컨트롤러 에러처리](https://github.com/dc-choi/Node.js_Study/blob/master/img/%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC%20%EC%97%90%EB%9F%AC%EC%B2%98%EB%A6%AC.PNG)
	3. 결론: 클린 아키텍쳐를 구현하기 위해서는 어느정도 구조를 정형화해주는 프레임워크로 넘어가는것이 맞다고 생각함. 그 이유는... 만나서 설명

</details>

## 7월 6일

<details>
<summary>자세히 보기</summary>

1. 과제 요구사항
	1. 코드 리뷰 후 나온 문제점 수정
	2. API 명세서 작성
	3. 로깅 라이브러리 조사 후 적용

2. 필요한 기능
	1. 코드리뷰 후 개선사항
		1. 변수 선언 위치 통일성 필요
		2. 여러 케이스에 대한 예외처리 추가
		3. envSample 작성
		4. orm 도입하기
		5. 터미널 진입, 근로자 승인에 대한 로직 작성
		6. 쓰이지 않는 함수 제거
	2. [API 명세서 참고](https://github.com/lightpurple/gatepass/wiki/API)
	3. 로깅 라이브러리 적용

3. 구현 내용
	1. 여러 케이스에 대한 400, 404, 409 예외처리 추가
	2. envSample 작성
	3. 쓰이지 않는 함수 제거
	4. [API 명세서 작성](https://github.com/dc-choi/Node.js_Study/wiki/0706-API-Document)
	5. [로깅 라이브러리 장단점](https://songjang.tistory.com/14)
	6. 204 No content에 관하여...
		* 일단 결론적으로 이야기하면 응답하는 본문이 없으면 204 응답이 맞고 응답하는 본문이 있다면 200 응답이 맞음.
		* 명령을 수행했고 응답 메시지가 이후의 상태를 설명하는 경우 200 (OK) 상태 코드.
		* 명령을 수행했고 더 이상 제공할 정보가 없는 경우 204 (No Content) 상태 코드.
		* REST API Tutorial에서도 둘중 어떤 것을 써도 상관없다고 함.
		---
		참고
		* [REST API HTTP별 요청 메서드](https://www.restapitutorial.com/lessons/httpmethods.html)
		* [200 응답코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/200)
		* [204 응답코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/204)
		* [PUT 메서드](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/PUT)
		* [DELETE 메서드](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/DELETE)

</details>