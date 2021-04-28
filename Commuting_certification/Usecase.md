# Usecase

Actor | Actor’s   Goal | Use   Case Name
-- | -- | --
Employee | 고용주에게 전달받은 아이디와 비밀번호를 입력한다 | UC-1: 로그인
Employee | 카메라를 얼굴에 맞추고 촬영 버튼을 눌러서 사진을 찍는다 | UC-2: 출근 인증   UC-3: 퇴근 인증
Employee | 얼굴 사진을 확인하고 전송 버튼이나 재촬영 버튼을 클릭해 원하는 처리를 진행한다. | UC-2: 출근 인증   UC-3: 퇴근 인증
Employee | 로그아웃 버튼을 클릭해 근무를 끝낸다 | UC-3: 퇴근 인증
Mobile | 5분 간격으로 위치 정보를 자동 전송한다 | UC-4: 실시간 위치 전송
Mobile | 촬영된 사진과 함께 촬영한 순간의 위치 좌표를 저장한다 | UC-2, UC-3
Online Server | 사진과 위치 좌표를 시스템으로 업로드한다 | UC-2, UC-3


# Traceability Matrix

Req't | PW | UC1 | UC2 | UC3 | UC4
-- | -- | -- | -- | -- | --
1 | 2 | X |  |  |   
2 | 3 |  | X |  |   
3 | 4 |  | X | X |  
4 | 5 |  | X | X |  
5 | 5 |  | X |  |  
6 | 5 |  |  | X | 
7 | 1 |  | X |  |  
8 | 4 |  |  |  | X 
9 | 2 |  |  | X |  
10 | 3 |  |  | X |  
Max PW |  | 2 | 5 | 5 | 5 
Total PW |  | 2 | 18 | 17 | 5 


# Detailed Use Cases

Use Case UC-1 | 로그인
-- | --
Related Requirements | FR1
Initiating   Actor | Employee
Actor’s Goal | 로그인하여 출퇴근 인증을 한다.
Participating   Actors | Server
Preconditions | - 직원 계정이 만들어져 있어야 한다.
Postconditions | - 출퇴근 인증을 할 수 있다.
Flow of Events   for Main Success Scenario | → 1. 아이디와 비밀번호를 입력한다.        ← 2. 시스템이 사용자의 아이디와 비밀번호의 유효성을 검사한다.        ← 3. 일치할 경우, 로그인 되고 카메라를 킨다.
Flow of Events   for Extensions (Alternate Scenarios) | 2a. 입력받은 아이디 또는 비밀번호가 일치하지 않은 경우:    ←1. 아이디 혹은 비밀번호가 잘못되었다는 오류 메세지를 표시한다.    ← 1a. 사용자는 비밀번호 찾기를 할 수 있다.   1.→아이디와 전화번호 인증을 한다.   2.← 시스템이 사용자의 아이디와 비밀번호의 유효성을 검사한다.   3.일치할 경우, 비밀번호를 변경할 수 있다.   → 2. 사용자는 다시 아이디와 비밀번호를 입력한다.    → 3. 위의 3번째 단계와 같다.


Use Case UC-2 | 출근 인증
-- | --
Related Requirements | FR2, FR3, FR4,  FR5
Initiating   Actor | Employee
Actor’s Goal | 로그인하여 출퇴근 인증을 한다.
Participating   Actors | Mobile Camera, Mobile GPS, Mobile Server
Preconditions | - 로그인이 되어 있어야 한다
Postconditions | - 출근을 인증한다.   - 사용자의 위치 정보가 저장된다.
Flow of Events   for Main Success Scenario | → 1. 자신의 사진을 촬영한다.   ← 2. 사진 저장 버튼과 재촬영 버튼을 표시한다.   → 3. 사진 저장 버튼을 선택한다.   ← 4. 사진과 사진 제출 버튼이 있는 화면을 표시한다.   → 5. 사진 제출 버튼을 선택해 사진을 제출하면 사진과 함께 위치 정보가 전송된다.   ← 6. 해당 직원이 출근을 했다는 정보와, 위치 정보를 저장한다.   ← 7. 사용자 아이디, 위치 정보, 로그아웃 버튼이 있는 화면을 표시한다.
Flow of Events   for Extensions (Alternate Scenarios) | 3a. 사진을 잘못 촬영했을 경우:   → 1. 화면의 재촬영 버튼을 선택한다   ← 2. 위의 1번째 단계와 같다.   5a. 위치 정보가 전달되지 않을 경우:   ← 1. 온라인 상태인지, 위치 권한이 켜져 있는지 확인해 달라는 알림을 표시한다.   → 위의 4번째 단계와 같다.
 
 
 Use Case UC-3 | 퇴근 인증
-- | --
Related Requirements | FR3, FR4, FR6, FR9, FR10
Initiating   Actor | Employee
Actor’s Goal | 퇴근을 인증하고 로그아웃   한다.
Participating   Actors | Mobile Camera, Mobile GPS, Mobile Server
Preconditions | - 로그인이 되어 있어야 한다. - 출근인증이 되어 있어야 한다.
Postconditions | - 퇴근을 인증한다.   - 로그아웃을 완료한다.
Flow of Events   for Main Success Scenario | → 1. 로그아웃 버튼을 클릭한다.   ← 2. 카메라를 킨다.   → 3. 자신의 사진을 촬영한다.   ← 4. 사진 저장 버튼과 재촬영 버튼을 표시한다.   → 5. 사진 저장 버튼을 선택한다.   ← 6. 사진과 사진 제출 버튼이 있는 화면을 표시한다.   → 7. 사진 제출 버튼을 선택해 사진을 제출하면 사진과 함께 위치 정보가 전송된다.   ← 8. 해당 직원이 퇴근을 했다는 정보와, 마지막 위치 정보를 저장한다.   ← 9. 로그인 화면을 표시한다.
Flow of Events   for Extensions (Alternate Scenarios) | 4a. 사진을 잘못 촬영했을 경우:   → 1. 화면의 재촬영 버튼을 선택한다   ← 2. 위의 2번째 단계와 같다.   7a. 위치 정보가 전달되지 않을 경우:   ← 1. 온라인 상태인지, 위치 권한이 켜져 있는지 확인해 달라는 알림을 표시한다.   → 위의 6번째 단계와 같다.


Use Case UC-4 | 실시간 위치 전송
-- | --
Related Requirements | FR7, FR8
Initiating Actor |  Employee
Actor’s Goal | 5분마다 사용자의 현재 위치를 전송한다.
Participating Actors | Server, Mobile GPS
Preconditions | - 로그인 후 첫 출근 정보 전송이 되어있다.
Postconditions | - 직원의 위치 정보가 업데이트 된다. 
Flow of Events for Main Success Scenario | → 1. 직원의 위치 정보가 전송된다 ← 2. 직원의 현재 위치 정보가 데이터베이스에 업데이트 된다.
Flow of Events for Extensions (Alternate Scenarios) | 1a. 위치 정보가 전달되지 않을 경우:   ← 1. 온라인 상태인지, 위치 권한이 켜져 있는지 확인해 달라는 알림을 표시한다.  → 위의 1번째 단계와 같다.
