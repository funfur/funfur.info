import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/pages/Home'
import Privacy from '@components/tos/Privacy'
import TermsProduct from '@components/tos/TermsProduct'
import TermsSite from '@components/tos/TermsSite'


Vue.use(VueRouter)
Vue.use(Meta)


const router = new VueRouter({
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
      path: '/terms-product',
      name: 'term-product',
      component: TermsProduct
    },
    {
      path: '/terms-site',
      name: 'term-site',
      component: TermsSite
    }
  ]
})


export default router
