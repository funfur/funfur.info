import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
// https://alligator.io/vuejs/vue-seo-tips/

import Home from '../pages/Home'
import Privacy from '../tos/Privacy'
import TermProduct from '../tos/TermProduct'
import TermSite from '../tos/TermSite'


Vue.use(VueRouter)
Vue.use(Meta)


const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
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
      path: '/tos/term-product',
      name: 'term-product',
      component: TermProduct
    },
    {
      path: '/tos/term-site',
      name: 'term-site',
      component: TermSite
    }
  ]
})


export default router
