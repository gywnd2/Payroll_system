[ Summary of USE CASE ]
------------------------

| Actor |                        Actor's Goal                             | Use Case Name |
| :---: | --------------------------------------------------------------  | ------------- |
|  관리자 | 아이디와 비밀번호를 입력하여 관리자 계정으로 로그인                          | UC5 – 로그인   |  
|  관리자 | 이름, 아이디, 비밀번호, 전화번호, 급여 옵션을 입력하여 새로운 직원 데이터를 추가   | UC1 – 추가    |
|  관리자 | 더이상 필요 없는 직원 데이터를 삭제                                      | UC2 – 삭제    |
|  관리자 | 직원의 정보가 변경되었을 시 수정 가능 <br>(이름, 전화번호, 급여옵션, 비밀번호)   | UC3 – 수정    |
|  관리자 | 이름이나 아이디로 검색하여 각 직원의 정보 확인 가능 <br>(이름, 아이디, 비밀번호, 급여옵션, 전화번호, 근무시간, 급여) | UC4 – 검색    |
|  관리자 | 전체 직원 리스트에서 직원의 이름 아이디 근무시간 급여를 확인 가능               | UC4          |
|  서버  | 직원 데이터가 새롭게 추가되었을 시 입력된 아이디와 비밀번호를 직원에게 전송        | UC1          |
|  서버  | 직원의 비밀번호가 수정되었을 시 바뀐 비밀번호를 직원에게 전송	                  | UC3          |
|  계산기 | 직원의 급여 옵션과 근무 시간을 바탕으로 직원의 급여를 계산                    | UC6 - 급여계산  |

<br>

[ USE CASE Diagram ]
---------------------

![image](https://user-images.githubusercontent.com/70556633/115992999-8ae44980-a60b-11eb-9edb-b91cd5ac1903.png)

<br>

[ Traceability Matrix ]
------------------------

|  REQ  |  PW   |  UC1  |  UC2  |  UC3  |  UC4  |  UC5  |  UC6  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   1   |   1   |     	|	      |      	|      	|  	X   |       |
|   2   |   5   |      	|      	|      	|      	|  	X   |       |
|   3   |  	1   |      	|      	|      	|  	X   |  	X   |       |
|   4   |  	3   |  	X  	|      	|      	|      	|   X   |       |
|   5   |  	3   |  	X  	|      	|      	|      	|   X   |       | 
|   6   |  	3   |  	X   |      	|  	X   |      	|  	X   |       |
|   7   |  	3   |      	|  	X   |      	|      	|	  X   |       |
|   8   |  	4   |      	|  	X  	|  	    |	      |   X   |       |  
|   9  	|   3  	|      	|      	|      	|   X   |  	X   |       |
|   10  |   3   |       |       |      	|  	X   |	  X   |       |
|   11  |   1   |   X   |       |   X   |   X   |	      |       |
|   12  |   3   |       |	      |	  X   |	      |	  X   |       |
|   13  |   4   |       |	      |	  X   |       |	      |       |
|   14  |   4   |   X   |       |	      |	      |	      |	      |
|   15  |   3   |	      |	      |	      |	  X   |	  X   |   X   |
|   16  |   1   |   X   |   X   |   X   |   X   |   X   |       |
| Max PW |      |	  4   |   4   |   4   |   3   |   5   |   3   |
|Total PW|      |  15   |	  8   |	 12   | 	12  |	  36  |   3   |

<br> 

[ Detailed USE CASE ]
-----------------------

|Use Case UC-1       |	직원 추가|
|:-------------------|:-------|
|Related Requirements|	FR4, FR5, FR6, FR11, FR14|
|Initiating Actor    |	관리자|
|Actor’s Goal        |	새로운 직원 데이터 추가|
|Participating Actors|	Database, Server|
|Preconditions       |	- 관리자 계정으로 로그인 되어있어야 한다.|
|Postconditions      |	- 입력한 직원 정보가 데이터베이스에 추가된다. <br>- 직원 리스트에 해당 직원 정보가 찾을 수 있다.|
|Flow of Events for Main Success Scenario|→ 1. 추가 버튼을 누른다. <br>← 2. 상세 정보(이름, id, 비밀번호, 전화번호, 급여옵션) 입력 창을 화면에 표시한다. <br>→ 3. 관리자는 직원 정보(이름, id, 비밀번호, 전화번호, 급여옵션)을 입력한다. <br>← 4. 시스템은 입력 받은 정보를 데이터베이스에 추가한다. <br>← 5. 시스템은 서버를 통해 설정된 ID와 비밀번호를 직원에게 전송한다. <br>← 6. 저장된 직원 정보를 화면에 표시한다.|
|Flow of Events for Extensions (Alternate Scenarios)|3a. 이름, id, 비밀번호, 전화번호, 급여옵션 중 입력 받지 않은 정보가 있을 경우 <br>← 1. 시스템은 이를 관리자에게 알린다. <br>→ 2. 관리자는 모든 정보를 입력한다. <br>← 3. 위 4번째 단계와 같다.|


|Use Case UC-2       |	직원 삭제 |
|:-------------------|:---------|
|Related Requirements|	FR7, FR8, FR16|
|Initiating Actor    |	관리자|
|Actor’s Goal        |	직원 데이터 삭제|
|Participating Actors|	Database|
|Preconditions       | - 관리자 계정으로 로그인 되어있어야 한다. <br>- 삭제하고자 하는 직원 정보가 데이터베이스에 저장되어 있어야 한다.
|Postconditions      | - 해당 직원 정보가 데이터베이스에서 제거된다 <br>- 직원 리스트에서 해당 직원 정보가 삭제되어 찾을 수 없다.
|Flow of Events for Main Success Scenario|→ 1. 삭제하고자 하는 직원을 검색한 후 해당 직원을 클릭한다. <br>← 2. 시스템은 해당 직원의 상세정보와 수정 버튼 삭제 버튼을 화면에 표시한다. <br>→ 3. 관리자는 상세정보가 삭제하고자 하는 직원의 정보와 일치하는지 확인한 후, 일치한다면 삭제 버튼을 누른다. <br>← 4. 시스템은 정말 삭제할 것인지 관리자로부터 재차 확인하기 위한 창을 화면에 표시한다. <br>→ 5. 관리자는 삭제하고자 한다면 ‘yes’ 버튼을 누른다. <br>← 6. 시스템은 해당 직원의 데이터를 데이터베이스에서 제거한다.
|Flow of Events for Extensions (Alternate Scenarios)|3a. 관리자는 상세정보가 삭제하고자 하는 직원의 정보와 일치하지 않는 경우, <br>→ 1. ‘돌아가기’ 버튼을 누른다. <br>← 2. 이전 페이지(직원 상세정보가 나와있는 페이지)로 돌아간다. <br>5a. 관리자는 삭제하고자 하는 직원 정보가 아니라면 ‘no’ 버튼을 누른다. <br>← 1. 직원의 상세정보 페이지로 돌아간다.


|Use Case UC-3       |직원 정보 수정|
|:-------------------|:----------|
|Related Requirements|	FR6, FR11, FR12, FR13, FR16|
|Initiating Actor    |	관리자|
|Actor’s Goal        |	직원 데이터 수정|
|Participating Actors|	Database, Server|
|Preconditions       | - 관리자 계정으로 로그인 되어있어야 한다. <br>- 수정을 원하는 직원 정보가 Database에 저장되어 있다.  <br>- 관리자로부터 수정할 정보를 입력 받는다.
|Postconditions      | - 정보 입력을 완료하면 해당 직원의 정보가 수정된다. <br>- 비밀번호가 수정되었을 시 서버가 해당 직원에게 바뀐 비밀번호를 전송한다.
|Flow of Events for Main Success Scenario|→ 1. 관리자가 직원을 선택한다. <br>→ 2. 관리자가 수정 버튼을 누른다. <br>← 3. 수정 정보를 입력할 창을 표시한다. <br>→ 4. 관리자가 수정할 정보를 입력한다. <br>← 5. 해당 직원의 정보가 수정된다. <br>← 6. 비밀번호가 수정되었을 경우 시스템은 서버를 통해 직원에게 변경된 비밀번호를 전송한다.


|Use Case UC-4.      |직원 검색    |
|:-------------------|:----------|
|Related Requirements|	FR3, FR9, FR10, FR11, FR15, FR16
|Initiating Actor    |	관리자|
|Actor’s Goal        |	직원 검색|
|Participating Actors|	Database |
|Preconditions       |- 관리자 계정으로 로그인 되어있어야 한다. <br>- 직원 정보가 Database에 저장되어 있다.  <br>- 관리자로부터 검색할 정보를 입력 받는다.|
|Postconditions      | - 관리자가 정보를 입력하고 검색하면, 해당 정보에 해당하는 직원들을 볼 수 있다.
|Flow of Events for Main Success Scenario|→ 1. 관리자가 검색할 정보를 입력한다. <br>→ 2. 관리자가 검색 버튼을 누른다. <br>← 3. 해당 정보에 해당하는 직원들이 표시된다


|Use Case UC-5       |	로그인 (sub-use case) |
|:-------------------|:---------------------|
|Related Requirements|	FR1 ~ 10, FR12, FR15 ~ 16
|Initiating Actor    |	관리자|
|Actor’s Goal        |	관리 권한이 있는 자로서, 직원 정보를 추가, 삭제, 검색, 수정한다.|
|Participating Actors|	Database|
|Preconditions       | - 관리자 계정이 만들어져 있어야 한다. (id, password)
|Postconditions      | - 직원 정보에 접근할 수 있다.
|Flow of Events for Main Success Scenario|← 1. 직원 관리 접속 시 시스템은 로그인 페이지를 화면에 띄운다. <br>→ 2. 로그인 페이지에서 아이디와 비밀번호를 입력한다. <br>← 3. 시스템은 입력 받은 아이디와 비밀번호가 관리자 계정과 일치하는지 확인한다. <br>← 4. 일치할 경우, 로그인이 되고, 홈 페이지를 화면에 보인다.
|Flow of Events for Extensions (Alternate Scenarios)|3a. 입력 받은 아이디와 비밀번호가 관리자 계정과 일치하지 않는다면, <br>←-- 1. 이를 관리자에게 알린다. <br> ----→1a. 관리자는 아이디 찾기를 선택할 수 있다. <br>←------ 1. 시스템은 관리자 이름과 전화번호를 입력 받고, 관리자 계정 정보와 일치하는지 확인한 후, 일치할 경우 아이디를 관리자에게 알려준다. <br>----→ 1b. 관리자는 비밀번호 재발급 받기를 선택할 수 있다. <br>←------ 1. 시스템은 관리자 계정의 아이디, 이름, 전화번호를 입력 받고, 관리자 계정 정보와 일치하는지 확인한 후, 일치할 경우 임시 비밀번호를 관리자에게 전송한다. <br>←---- 1c. 시스템은 틀린 횟수가 설정된 max 값을 넘겼는지 확인하고, 넘겼을 경우 계정이 닫혔음을 관리자에게 알린다.  <br>------→ 1. 관리자는 비밀번호 재발급 받기를 통해 닫힌 계정을 풀 수 있다. <br>←------  2. ‘1b’의 첫번째 단계와 같다. <br>--→ 2. 관리자는 알맞은 아이디와 비밀번호를 입력한다. <br>←-- 3. 위 2번째 단계와 같다.


|Use Case UC-6       |급여 계산    |
|:-------------------|:----------|
|Related Requirements|	  FR15    |
|Initiating Actor    |	 계산기    |
|Actor’s Goal        |  급여 계산   |
|Participating Actors|	Database |
|Preconditions       |- 급여 옵션과 근무시간이 데이터베이스에 저장되어 있어야 한다. |
|Postconditions      | - 계산된 급여가 직원의 급여 정보에 저장된다.
|Flow of Events for Main Success Scenario|← 1. 데이터베이스에서 직원의 급여 옵션과 근무 시간 정보를 가져온다.  <br>← 2. 가져온 정보를 바탕으로 급여를 계산한다.  <br>← 3. 계산된 급여 정보를 직원의 '급여'에 저장한다.
