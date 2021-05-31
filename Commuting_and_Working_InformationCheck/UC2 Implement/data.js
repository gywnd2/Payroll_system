var Example = [{
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

function requirePageInfo(inputID, order) {
    var idx
    switch (inputID) {
        case "ID1":
            idx=0
            break
        case "ID2":
            idx=1
            break
        case "ID3":
            idx=2
            break
    }
    switch(order){
        case "id":
            return Example[idx].inputID
        case "date":
            return Example[idx].dateInfo
        case "img" :
            return Example[idx].img
        case "pos":
            return Example[idx].LatLng
    }
}