// client/public/js/home.js

"use strict";

const mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.597191, 127.051774), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
const map = new kakao.maps.Map(mapContainer, mapOption);
