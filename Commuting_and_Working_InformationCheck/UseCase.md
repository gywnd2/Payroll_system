# Use Cases from System Requirements

| Actor  |               Actor's Goal               |      Use Case Name      |
| :----: | :--------------------------------------: | :---------------------: |
|관리자|입력한 직원식별번호가 맞는지 검증한다.|직원식별번호 검증, 확인 (UC-1)|
| 관리자 | 직원이 전송한 사진과 GPS마커를 확인한다. | 직원별 기록 확인 (UC-2) |
# Traceability Matrix

| Req't    | PW  | UC1 | UC2 |
| :------- | :-: | :-: | :-: |
| FR1      |  1  |  X  |  X  |
| FR2      |  1  |  X  |  X  |
| FR3      |  2  |  X  |     |
| FR4      |  3  |  X  |     |
| FR5      |  5  |     |  X  |
| FR6      |  5  |     |  X  |
| Max PW   |     |  3  |  5  |
| Total PW |     |  7  |  12  |

# Use Cases

| Use Case UC-1                                         | 직원식별번호 검증, 확인                                                                                                                                                                                                                                   |
| :---------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Related Requirements                                  | FR1, FR2, FR3, FR4                                                                                                                                                                                                                                        |
| Initiating Actor                                      | 관리자                                                                                                                                                                                                                                                    |
| Actor's Goal                                          | 직원식별번호 관리를 위한 검증, 확인절차                                                                                                                                                                                                                   |
| Participating Actors                                  | Database, Timer, Counter                                                                                                                                                                                                                                  |
| Preconditions                                         | 직원식별번호가 Database에 미리 저장 되어 있다.<br> "뒤로가기" 버튼을 누르지 않는 한, 관리자로부터 입력을 기다린다.<br> Timer는 초기화 되어있다.                                                                                                           |
| Postconditions                                        | 입력한 식별번호가 맞으면 선택했던 메뉴의<br> 다음화면으로 진행할 수 있다.                                                                                                                                                                                 |
| Flow of Events for Main Success Scenario <br><br><br> | → &nbsp;&nbsp;1. 관리자가 이용하고자 하는 메뉴를 선택한다. <br>← &nbsp;&nbsp;2. 식별번호를 입력할 칸을 표시한다.<br>→ &nbsp;&nbsp;3. 관리자가 식별번호를 입력한다. <br>←&nbsp;&nbsp; 4. 입력값이 타당하다면, 관리자에게 입력값이 타당함을 신호로 보낸다|
|Flow of Events For Extension(Alternate Scenarios):|<br>3a. 입력한 식별번호가 타당한 값이 아닐 경우:<br>← 1. Counter를 1 증가시키고, 타당한 값이 아님을 관리자에게 전달한다.<br>← 1a. Counter가 5번이 넘어갈 시, 경고음과 함께 5분동안 입력할 수 없다.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Timer 시간측정을 시작한다.<br>→ 2. 관리자로부터 다시 식별번호를 입력받는다.<br>← 3. 위의 4번으로 이동한다.



| Use Case UC-2     | 직원별 기록 (GPS, 출퇴근 사진)   |
| :----------------------- | :--------------- |
| Related Requirements   | FR1, FR2, FR5, FR6 |
| Initiating Actor| 관리자      |
| Actor's Goal          | 직원이 전송한 GPS마커와 출퇴근 사진기록을 확인  |
| Participating Actors                                      | Database                                                                                                                                                                                                       |
| Preconditions                                             | 직원이 전송한 GPS마커와 출퇴근 사진기록이<br>시스템에 저장되어 있다.                                                                                                                                           |
| Postconditions                                            | 입력한 식별번호가 맞으면 선택했던 메뉴의<br>다음화면으로 진행할 수 있다.                                                                                                                                       |
|<br> Flow of Events for Main Success Scenario <br><br><br><br> | → &nbsp;&nbsp;1. <U>직원식별번호 검증, 확인 (UC-1) 포함</U><br>← &nbsp;&nbsp;2. 저장된 GPS마커는 지도에 동선으로 표시하고<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사진을 함께 표시한다. |
