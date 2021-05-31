var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(37.504403, 126.955348),
    level: 5
};
// 예시 GPS 마커
var examplePositions=[
    {
        lat:37.504486,
        lng:126.955123
    },
    {
        lat:37.454897,
        lng:126.900450
    },
    {
        lat:37.512495,
        lng:126.999457
    },
    {
        lat:37.576963,
        lng:126.957264
    },
    {
        lat:37.557390,
        lng:126.947746
    },
    {
        lat:37.519212,
        lng:126.890976
    },
    {
        lat:37.527098,
        lng:126.930379
    }
]

// 맵 컨트롤 도구 추가
var map = new kakao.maps.Map(container, options);
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 접속위치 추가
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude,
            lon = position.coords.longitude;
        var locPosition = new kakao.maps.LatLng(lat, lon),
            message = '<div style="padding:5px;">여기에 계신가요?!</div>';
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
    });
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    var locPosition = new kakao.maps.LatLng(37.504403, 126.955348),
        message = 'geolocation을 사용할수 없어요..'
    displayMarker(locPosition, message);
}
// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
    });
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;
    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
    });
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);
}

// 예시 데이터의 좌표값을 points에 추가
var points = [];
for (var i=0; i<examplePositions.length;i++){
    points.push(new kakao.maps.LatLng(examplePositions[i].lat,examplePositions[i].lng));
}


// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
var bounds = new kakao.maps.LatLngBounds();

var i, marker;
for (i = 0; i < points.length; i++) {
    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
    marker = new kakao.maps.Marker({
        position: points[i]
    });
    marker.setMap(map);

    // LatLngBounds 객체에 좌표를 추가합니다
    bounds.extend(points[i]);
}

function setBounds() {
    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
    map.setBounds(bounds);
}