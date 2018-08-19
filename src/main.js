import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import VueScrollTo from 'vue-scrollto'
import VTooltip from 'v-tooltip'
import {globalVar} from '@/globalVar'
import '@/style/style.scss'


Vue.prototype.$http = axios
Vue.use(VueScrollTo)
Vue.use(VTooltip)
Kakao.init(process.env.KAKAO_KEY)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
