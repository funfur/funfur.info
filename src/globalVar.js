import Vue from 'vue'

export const globalVar = new Vue ({
  data: {
    // funfur info
    baseURI: 'https://ceo.funfur.kr/',
    registerURI: 'https://ceo.funfur.kr/register',
    callTo: '050-6591-6200',
    faxNumb: '0504-433-6202',

    // app dl link
    // TODO: fix link
    iosURI: 'https://ceo.funfur.kr/',
    androidURI: 'https://ceo.funfur.kr/',

    // youtube info
    youtubeID: '_Zl1pThOZBs',
    youtubeTitle: 'D.Blik 가구 디자이너 이영찬',

    // kakao api
    kakaoKey: process.env.KAKAO_KEY,
    kakaoID: process.env.KAKAO_ID
  }
})
