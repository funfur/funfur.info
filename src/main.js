import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueScrollTo from 'vue-scrollto'
import VueYoutube from 'vue-youtube'
// https://github.com/anteriovieira/vue-youtube

import './style/style.scss'


Vue.use(VueScrollTo)
Vue.use(VueYoutube)
Kakao.init('8ad5f734330e2b0064960eb3c5e70b91')
Vue.prototype.$http = axios


export const globalVar = new Vue({
  data: {
    baseURI: 'https://ceo.funfur.kr/',
    registerURI: 'https://ceo.funfur.kr/register',
    callTo: '050-6591-6200'
  }
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
