import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
// https://alligator.io/vuejs/vue-seo-tips/

import Home from '../pages/Home'
import Privacy from '../pages/Privacy'
import TermProduct from '../pages/TermProduct'
import TermSite from '../pages/TermSite'


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
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/term-product',
      name: 'term-product',
      component: TermProduct
    },
    {
      path: '/term-site',
      name: 'term-site',
      component: TermSite
    }
  ]
})


export default router
