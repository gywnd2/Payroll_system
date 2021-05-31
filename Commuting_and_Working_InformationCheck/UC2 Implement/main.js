"use strict";
// 예시 데이터 ID1, 2, 3의 ID, 날짜, 촬영사진, GPS마커
const dataExample = [{
    inputID: "ID1",
    dateInfo: "2021-05-01",
    img: "./img/test.png",
    LatLng: [{
            lat: 37.504486,
            lng: 126.955123
        },
        {
            lat: 37.454897,
            lng: 126.900450
        },
        {
            lat: 37.512495,
            lng: 126.999457
        },
        {
            lat: 37.576963,
            lng: 126.957264
        },
        {
            lat: 37.557390,
            lng: 126.947746
        },
        {
            lat: 37.519212,
            lng: 126.890976
        },
        {
            lat: 37.527098,
            lng: 126.930379
        }
    ]
},
{
    inputID: "ID2",
    dateInfo: "2021-05-02",
    img: "./img/test2.png",
    LatLng: [{
            lat: 37.504486,
            lng: 126.955123
        },
        {
            lat: 37.454897,
            lng: 126.900450
        },
        {
            lat: 37.512495,
            lng: 126.999457
        },
        {
            lat: 37.576963,
            lng: 126.957264
        },
        {
            lat: 37.557390,
            lng: 126.947746
        },
        {
            lat: 37.519212,
            lng: 126.890976
        },
        {
            lat: 37.527098,
            lng: 126.930379
        }
    ]
},
{
    inputID: "ID3",
    dateInfo: "2021-05-03",
    img: "./img/test3.png",
    LatLng: [{
            lat: 37.504486,
            lng: 126.955123
        },
        {
            lat: 37.454897,
            lng: 126.900450
        },
        {
            lat: 37.512495,
            lng: 126.999457
        },
        {
            lat: 37.576963,
            lng: 126.957264
        },
        {
            lat: 37.557390,
            lng: 126.947746
        },
        {
            lat: 37.519212,
            lng: 126.890976
        },
        {
            lat: 37.527098,
            lng: 126.930379
        }
    ]
}

]

// DB에서 조회할 입력 데이터를 가정
var input=
    {
        inputID: "ID1",
        dateInfo: "2021-05-01"
}

class Alert {
    static prompt() {
        alert("선택한 날짜에 데이터가 없습니다.")
    }
}

class pageMaker {
    static showResultPage() {
        window.location.href = './showResult.html'
    }
}

class DatabaseConnection {
    static isExist(dateInfo, inputID) {
        for (var i=0; i < dataExample.length; i++) {
            if ((dateInfo === dataExample[i].dateInfo) && (inputID === dataExample[i].inputID))
                return true
            else return false
        }
    }
}

class Controller {
    static isAvailableID = false;
    static requestMakePage() {
        if (this.isAvailableID && DatabaseConnection.isExist(input.dateInfo, input.inputID))
            pageMaker.showResultPage()
        else this.alert()
    }
    static alert() {
        Alert.prompt()
    }
}

//UC1에서 입력한 ID가 유효한지 확인 받았음을 가정 하는 함수
function goNextfromUC1() {
    alert('UC1에서 유효한 식별번호임이 확인 되었을 시 이동됩니다.');
    Controller.isAvailableID = true;
    getInput()
}

// 사용자의 입력 데이터를 저장
function getInput() {
    if (Controller.isAvailableID) {
        input.inputID = document.getElementById("inputID").value;
        input.dateInfo = document.getElementById("calendar").value;
        Controller.requestMakePage();
    }
}