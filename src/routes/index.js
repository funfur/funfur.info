import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/pages/Home'
import Privacy from '@/pages/tos/Privacy'
import TermsProduct from '@/pages/tos/TermsProduct'
import TermsSite from '@/pages/tos/TermsSite'

import Qrcode from '@/pages/Qrcode'
import Notice from '@/pages/Notice'
import RedirectDL from '@/pages/RedirectDL'


Vue.use(VueRouter)
Vue.use(Meta)


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/tos/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/tos/terms-product',
      name: 'term-product',
      component: TermsProduct,
    },
    {
      path: '/tos/terms-site',
      name: 'term-site',
      component: TermsSite,
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: Qrcode,
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
    },
    {
      path: '/app',
      component: RedirectDL,
    },
    {
      path: '/redirectdl',
      redirect: '/app',
    },
  ]
})
