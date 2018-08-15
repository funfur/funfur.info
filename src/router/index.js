import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
// https://alligator.io/vuejs/vue-seo-tips/

import Home from '../pages/Home'
import Privacy from '../components/tos/Privacy'
import TermsProduct from '../components/tos/TermsProduct'
import TermsSite from '../components/tos/TermsSite'


Vue.use(VueRouter)
Vue.use(Meta)


const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/tos/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/tos/terms-product',
      name: 'term-product',
      component: TermsProduct
    },
    {
      path: '/tos/terms-site',
      name: 'term-site',
      component: TermsSite
    }
  ]
})


export default router
