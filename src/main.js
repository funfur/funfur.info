import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import VueScrollTo from 'vue-scrollto'
import {globalVar} from '@/globalVar'

import '@/style/style.scss'


Vue.use(VueScrollTo)
Kakao.init(globalVar.kakaoKey)
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
