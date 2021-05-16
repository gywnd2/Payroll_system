[UC 1, 3 (추가, 삭제)]
====================

1. Extracting the Responsibilities
-----------------------------------
| Responsibility description | Type | Concept name |
| :------------------------- | :--: | :----------: |
| 변경된 직원 정보를 내보내고 외부 정보를 받는 동작을 조절한다. | D | Controller |
| Database 간의 정보를 연결한다. | D | database connection |
| 관리자(user)로부터 입력 받는 데이터 | K | input data |
| 관리자 계정으로 로그인 되어 있는지 확인한다. | D | login checker |
| 명령 수행을 위해 필요한 웹 페이지를 띄운다. | D | page maker |
| 명령 수행을 위해 사용되는 웹 페이지 | K | interface page |
| 변경된 정보를 직원에게 전송 | K | Sender to worker |
| 추가/검색 버튼을 누른다 | D | request |


2. Extracting the Association
-----------------------------
| Concept pair | Association description | Association name |
| :----------: | :---------------------- | :--------------: |
|request <-> controller |	수행할 request가 controller에게 전달한다 | Convey request
|Controller <-> Login checker	| Login checker는 controller에게 관리자 계정으로 로그인이 되어있는지 확인하기 위한 request를 보낸다. |	convey request
|Login checker <-> controller	| 로그인이 되어있는지 확인한 결과를 controller에게 보낸다. |	verify
|Controller <-> Page Maker	| Input data를 입력 받기 위한 창을 화면에 띄우기 위해 Controller는 page maker에게 request를 보낸다.	| convey request
|Page maker <-> interface page	| Page maker는 interface page를 준비한다. |	prepare
|Input data <-> controller	| 사용자로부터 입력 받은 데이터를 controller에게 전달한다. |	receive data
|Controller <-> database connection |	Controller는 입력 받은 정보를 database connection에 전달한다. |	receive data
|Controller <-> sender to worker	| Controller는 저장된 정보를 직원에게 전송하기 위해 sender to worker 에게 명령을 전달한다. |	Convey request
|Database connection <-> sender to worker	| Database connection은 저장된 ID와 비밀번호를 직원에게 전송하기 위해 sender to worker에게 정보를 전달한다. |	Provide data
|Database connection <-> page maker	| Database connection은 저장되어 있는 정보를 화면에 띄우기 위해 page maker 에게 정보를 전달한다. |	Provide data


3. Extracting the Attributes
----------------------------
| Concept |	Attributes |	Attribute description |
| :-----: | :--------: | :--------------------  |
|request |	수행할 명령 |	(추가, 수정) 중 실행할 명령을 매개변수로 가지고 있다.
|Input data |	수행할 명령 |	(추가, 수정) 중 실행할 명령을 매개변수로 가지고 있다.
|           |	명령 수행에 사용되는 직원 정보	| UC 1 추가 ) 직원의 이름, ID, 비밀번호, 전화번호, 급여옵션 <br>UC 3 수정 ) 수정할 직원 정보 (이름, 비밀번호, 전화번호, 급여옵션)
|Page maker	| 수행할 동작 | 수행할 동작에 따라 인터페이스 페이지가 달라지므로 명령을 매개변수로 받아야 한다.
|Sender to worker |	수행한 명령 |	수행한 명령에 따라 전송할 정보가 달라지므로 수행한 명령을 매개변수로 받아야 한다.
| 	              | 직원에게 전송할 정보 |	직원에게 전송할 변경된 정보를 담고 있다. <br>( 추가 – ID, 비밀번호 / 수정 – 비밀번호 )


![1,3](https://user-images.githubusercontent.com/76227569/115994727-2331fc80-a613-11eb-82a8-6328c75bb3b6.png)


UC 2, 4 (삭제, 검색)
==================

1. Extracting the Responsibilities
-----------------------------------
| Responsibility Description |	Type |	Concept name |
| :------------------------- | :---: | :-----------: |
|변경된 직원 정보를 내보내고 외부 정보를 받는 동작을 조절한다. | D |	Controller
|Database 간의 정보를 연결한다. |	D	| Database connection
|입력 받은 정보(검색할 정보), 수행할 명령	| K	| request
|관리자 계정으로 로그인 되어 있는지 확인한다.	| D |	Login checker
|명령 수행을 위해 필요한 웹 페이지를 띄운다. |	D	| Page Maker
|명령 수행을 위해 사용되는 웹 페이지 |	K |	Interface page


2. Extracting the Association
-----------------------------
| Concept pair |	Association description |	Association name |
| :----------: | :----------------------- | :--------------: |
|Request <-> controller |	수행할 request가 controller에게 전달된다.	| Convey request
|Login checker <-> controller	| Login checker는 controller에게 관리자 계정으로 로그인이 되어있는지 확인하기 위한 request를 보낸다. |	Login check request
|Login checker <-> controller	| 로그인이 되어있는지 확인한 결과를 controller에게 보낸다. |	verify
|Controller <-> Page Maker	| Input data를 입력 받기 위한 창을 화면에 띄우기 위해 Controller는 page maker에게 request를 보낸다.	| Input request
|Page maker <-> interface page	| Page maker는 interface page를 준비한다. |	prepare
|Controller <-> database connection |	Controller는 request를 database connection에 전달한다. |	Convey request
|Database connection <-> page maker	| Database connection은 저장되어 있는 정보를 화면에 띄우기 위해 page maker 에게 정보를 전달한다. |	Provide data


3. Extracting the Attributes
-----------------------------
| Concept |	Attributes |	Attribute description |
| :-----: | :--------: | :--------------------  |
| request	| 수행할 명령	| (삭제, 검색) 중 실행할 명령을 담고 있다.
|         |	Search key	| 직원 검색을 위해 직원의 이름 또는 ID 
|Page maker|	수행할 동작	| 수행할 동작에 따라 인터페이스 페이지가 달라지므로 명령을 매개변수로 받아야 한다. <br>(삭제 – confirm message / 검색 – 검색한 직원 상세 정보 )


![2,4](https://user-images.githubusercontent.com/76227569/115994741-2e852800-a613-11eb-9437-93fe23fe3b0e.png)


UC 5 로그인
==========

1. Extracting the Responsibilities
----------------------------------
| Responsibility Description | Type	| Concept name |
| :------------------------- | :--: | :----------: |
|시스템 내부와 외부 request를 받고 결과를 내보내는 동작을 조절한다. |	D |	Controller
|Database 간의 정보를 연결한다. |	D |	Database connection
|로그인을 위한 ID와 비밀번호를 입력 받는다. |	K	| Input data
|로그인을 위해 필요한 웹 페이지를 띄운다. |	D	| Page Maker
|로그인을 위해 사용되는 웹 페이지	| K	| Interface page
|입력한 로그인 정보가 관리자 계정과 일치하는지 확인한다. |	D |	verifier
|로그인 성공 여부 (관리자 계정과 일치 여부)|	K |	Login status


2. Extracting the Association
-----------------------------
| Concept pair |	Association description |	Association name |
| :----------: | :----------------------- | :--------------: |
|Input data <-> controller	| Input data를 controller에게 전달한다. |	Receive data
|Controller <-> Page Maker	| 로그인 페이지를 화면에 띄우기 위해 Controller는 page maker에게 request를 보낸다.	| Convey request
|Page maker <-> interface page	| Page maker는 interface page를 준비한다. |	prepare
|Controller <-> database connection |	관리자 계정인지를 확인하기 위해 Controller는 database connection에게 request를 전달한다. |	Convey request
|Controller <-> verifier	| 관리자 계정인지를 확인하기 위해 verifier에게 request를 전달한다.	| Convey request
|Database connection <-> verifier	| 관리자 계정인지를 확인하기 위해 관리자 계정 정보를 verifier에게 전달한다. |	Provide data
|Verifier <-> login status	| 로그인 일치 확인 결과를 전달한다. |	verify


3. Extracting the Attributes
-----------------------------
| Concept |	Attributes |	Attribute description |
| :-----: | :--------: | :--------------------  |
|Input data |	로그인 정보 |	관리자가 입력한 ID와 비밀번호이다.
|Page maker	| 수행할 동작	| 로그인 페이지를 화면에 띄우기 위해 수행할 동작 ‘로그인’을 가지고 있어야 한다.
|verifier	| input data	| 비교를 위해 입력 받은 로그인 정보를 매개변수로 갖는다.


![5](https://user-images.githubusercontent.com/76227569/115994750-3644cc80-a613-11eb-8279-0e3c40a1caf8.png)


UC 6 급여 계산
============

1. Extracting the Responsibilities
----------------------------------
| Responsibility Description | Type	| Concept name |
| :------------------------- | :--: | :----------: |
|시스템 내부와 외부 request를 받고 결과를 내보내는 동작을 조절한다. |	D |	Controller
|급여 계산 request를 보낸다.	| D |	request
|Database 간의 정보를 연결한다.	| D |	Database connection
|직원의 정보를 바탕으로 급여를 계산한다. |	D |	calculate
|계산된 급여 |	K |	Salary data


2. Extracting the Association
-----------------------------
| Concept pair |	Association description |	Association name |
| :----------: | :----------------------- | :--------------: |
|Request <-> controller	| 급여 계산 request를 controller 에게 전달한다.	| Convey request
|Controller <-> calculate	| 급여 계산 request를 controller 에게 전달한다.	| Convey request
|Database connection <-> calculate	| 급여를 계산하기 위해 필요한 정보를 Info에 전달한다.	| Provide data
|calculate<-> salary data	| 계산 결과를 salary data에 저장한다.	| calculate
|Salary data <-> database connection |	Data를 database에 저장하기 위해 database connection에 전달한다. |	Receive data


3. Extracting the Attributes
-----------------------------
| Concept |	Attributes |	Attribute description |
| :-----: | :--------: | :--------------------  |
|calculate |	직원 정보	| 급여 계산을 위해 필요한 직원 정보를 가지고 있어야 한다. (근무시간, 급여 옵션)


![6](https://user-images.githubusercontent.com/76227569/115994761-3d6bda80-a613-11eb-80ea-1069d53c315d.png)

