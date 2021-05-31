'use strict';
var DataBase=[
    {
        ID:"ID1",
        PW:"PW1"
    },{
        ID:"ID2",
        PW:"PW2"
    },{
        ID:"ID3",
        PW:"PW3"
    }
]
class Controller{
    static available=true;
    static NumOfAttempt=0;
    static MaxNum=5;
    static signal=false;
    static goNext(){
        // 다음 단계(UC-2)로 진행 신호
        return Controller.signal;
    }
    static activate(){
        
        alarmDev.alarm();
        alarmDev.timeCheck();
        
        //AlarmDev실행(시도횟수 5회 초과한 경우)
    }
}

class alarmDev{
    
    static alarm(){
        var beepsound = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');   
        beepsound.play();
        //알람을 울리는 기능
    }
    static timeCheck(){
        setTimeout(function(){
            Controller.available=true;
            Controller.NumOfAttempt=0;
        },3000);
        // 시간을 측정하는 기능
    }
}
class Checker{
    static compareID(ID,PW){
        var found=false;
        for (var i=0;i<DataBase.length;i++){
            if (ID===DataBase[i].ID && PW===DataBase[i].PW){
                console.log(ID+ " is logged in!");
                found=true;
            }
        }
        if (found){
            return true;
        }else{
            return false;
        }
    }
}


function getInfo(){
    if (Controller.available==true){            // ID, PW 입력 권한이 있는 경우
        var employee_ID=document.getElementById("ID").value;    // ID, PW값을 받는다.
        var employee_PW=document.getElementById("PW").value;
        console.log("your ID: "+employee_ID+" your PW : "+employee_PW);
        console.log(Checker.compareID(employee_ID,employee_PW));
        if (Checker.compareID(employee_ID,employee_PW)){    // ID, PW 값 맞는지 확인
            Controller.signal=true;                         
            console.log("success");
        }
        else{                                               // 맞지 않다면 시도횟수+1
            Controller.NumOfAttempt++;
            console.log(Controller.NumOfAttempt);
            if (Controller.NumOfAttempt<=Controller.MaxNum){    // 5회 이하인 경우 잘못된 입력횟수와 함께 경고
                alert("Wrong ID, PW ("+Controller.NumOfAttempt+"/"+Controller.MaxNum+")");
            }
            else if (Controller.NumOfAttempt>Controller.MaxNum){    // 5회 초과 시, 알람음과 함께 일정시간 동안 입력 권한 없음
                alert("You are not available");
                Controller.available=false;
                Controller.activate();
            }
        }
    }
    else{                               // 입력 권한이 없는 경우 경고창
        alert("You are not available");
    }
    
}