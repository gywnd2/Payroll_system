# Domain Model <br><br>

## Use Case UC-1<br>

---

<br>
 1. Extracting the Responsibilities<br><br>

| Responsibility Description                                         | Type | Concept Name  |
| :----------------------------------------------------------------- | :--- | :------------ |
| 시스템 내부와 외부 request를 받고 결과를 내보내는 동작을 조절한다. | D    | Controller    |
| 직원식별번호를 입력받는다.                                         | D    | ID Input      |
| 입력받은 정보를 담고 있다.                                         | K    | Info         |
| 타당한 직원 식별번호를 담고 있다.                                  | K    | ID Storage    |
| 직원 식별번호가 타당한 지 확인한다.                                | D    | ID Checker    |
| 알람이 울리도록 신호를 조정한다.                                   | D    | AlarmOperator |
| 시간을 측정한다.                                                   | D    | TimeOperator  |
| 관리자의 잘못 입력한 횟수를 센다.                                  | D    | CountOperator |
| 관리자의 입력 권한을 주거나, 제한한다.                             | D    | Controller    |
| 입력 횟수를 초과할 경우 알람을 울린다.                             | D    | Controller    |


<br><br> 2. Extracting the Associations<br><br>

| Concept pair                   | Association description                                             | Association name    |
| :----------------------------- | :------------------------------------------------------------------ | :------------------ |
| ID Input < - > Info         | ID를 입력받는다.                  | 확인할 ID 입력      |
| Info < - > ID Checker          | 정보가 타당한 지 확인하기 위한 정보를 전달 받는다.                  | 확인할 ID 전달      |
| Controller < - > ID Checker    | 정보를 확인하기 위한 요청을 보낸다.                                 | 요청 보내기         |
| ID Checker < - > ID Storage    | 올바른 정보인지 확인하기 위해 데이터 저장소를 활용한다.             | 데이터 제공         |
| CountOperator < - > Controller | 일정한 횟수 이상 잘못 입력하였을 시, 관리자의 입력 권한을 제한한다. | 입력 허가, 제한     |
| Controller < - > AlarmOperator | 일정한 횟수 이상 잘못 입력하였을 시, 알람이 울린다.                 | 경고음 발생         |
| Controller < - > TimeOperator  | 일정한 횟수 이상 잘못 입력하였을 시, 입력이 정지될 시간을 측정한다. | 입력 정지 시간 측정 |

<br><br> 3. Extracting the Attributes<br><br>
| Concept | Attributes | Attribute Description |
| :----- | :---------- | :-------------------- |
| Info | 직원 식별번호 | 관리자가 입력한 직원의 식별번호이다. |
| Controller | 시도 횟수, 최대 시도 횟수 | 입력 제한 유무를 판단한다. |
| Controller | 현재 경과 시간, 최대 제한 시간 | 일정 시간동안 입력 제한 유무를 판단한다. |
<br><br>

## Use Case UC-2 <br>

---

<br>
1. Extracting the Responsibilities<br><br>

| Responsibility Description                                                  | Type | Concept Name        |
| :-------------------------------------------------------------------------- | :--- | :------------------ |
| 조회할 날짜를 선택한다.       | D    | Calendar          |
| 선택한 날짜 정보를 담고 있다.          | K    | DateInfo          |
| 시스템 내부와 외부 request를 받고 결과를 내보내는 동작을 조절한다.          | D    | Controller          |
| 입력값에 해당하는 정보를 가져오도록 요청한다.                               | D    | Search Request      |
| 입력값에 해당하는 정보를 추출한다.                                          | D    | Database Connection |
| 웹 페이지 상에서 정보들이 어떻게 배치되어야 하는 지 나타내는 HTML 문서이다. | K    | Interface Page      |
| HTML 문서를 가져와 웹 상에 보여준다.                                        | D    | PageMaker           |

<br><br> 2. Extracting the Associations<br><br>
| Concept pair | Association description | Association name |
| :------------ | :--------------------- | :------------ |
| Calendar < - > DateInfo | 날짜를 선택하여 전달한다. | 날짜 선택 |
| DateInfo < - > Search Request | 선택한 날짜를 조회 요청에 포함시킨다. | 날짜 전달 |
| Controller < - > Search Request | 요청된 요구를 받아들이고 보낸다. | 요청 전달 |
| Controller < - > Database Connection | 직원 식별번호 별로 저장되어 있는 데이터에서 관리자가 입력한 직원의 식별번호에 해당하는 정보를 가져온다. | 해당 데이터 요청 |
| PageMaker < - > Interface Page | HTML 문서에 맞게 웹 페이지 화면을 구성한다. | 웹 페이지 준비 |
| Database Connection < - > Page Maker | 웹 페이지 상에 올릴 데이터들을 제공한다. | 조회 데이터 제공 |
| Controller <- > Interface Page | 웹 페이지를 게시하도록 신호를 보낸다. | 게시 |

<br><br> 3. Extracting the Attributes<br><br>
| Concept | Attributes | Attribute Description |
| :----- | :---------- | :-------------------- |
| Search Request | 검증된 직원 식별번호 | 관리자 또는 직원이 출퇴근 기록을 확인할 직원의 식별번호이다.<br>(From UC-1) |
| DateInfo | 날짜 | 직원의 출퇴근 기록을 확인할 날짜이다. |
| Search Request | 날짜 | 조회를 요청받은 날짜이다. |

<br><br>
## Traceability Matrix <br>
---
| Use Case | PW | ControllerUC1 | ID Input |     Info    |   ID Storage   |      ID Checker     |  AlarmOperator | TimeOperator | CountOperator |
|:--------:|:--:|:-----------:|:--------:|:-----------:|:--------------:|:-------------------:|:--------------:|:------------:|:-------------:|
| UC1      | 7  | X           | X        | X           | X              | X                   | X              | X            | X             |
| UC2      | 12 | X           |          |             |                |                     |                |              |               |

|     Use Case     |  PW  |   DateInfo  | Calendar | ControllerUC2 | Search Request | Database Connection | Interface Page |   PageMaker  |
|:--------:|:--:|:-----------:|:--------:|:-----------:|:--------------:|:-------------------:|:--------------:|:------------:|
| UC1      | 7  |             |          |             |                |                     |                |              |
| UC2      | 12 | X           | X        | X           | X              | X                   | X              | X            |

<br><br>
## Contracts
---
| Operation |     직원식별번호 검증, 확인    |
|:---------:|:------------------------------:|
| Preconditions       | 입력한 직원식별번호가 유효한 번호인지 알 수 없다.                              |
| Postconditions       | 입력한 번호가 유효하다면 다음 화면으로 진행할 수 있고, 아니라면 진행할 수 없다.                 |

| Operation | 직원별 기록 (GPS, 출퇴근 사진) |
|:---------:|:------------------------------:|
| Preconditions       | None                              |
| Postconditions       | UC1을 통해 입력한 직원 식별번호가 유효한지 검증하고, <br>그렇다면 선택한 날짜의 출퇴근 기록(사진, 위치)을 보여준다.                              |