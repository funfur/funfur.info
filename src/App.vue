<template lang="pug">
  div#app
    router-view
    vue-progress-bar
</template>

<script>
import Vue from 'vue'
import {globalVar} from '@/globalVar'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#CAA888',
  height: '2px'
})

export default {
  name: 'app',

  metaInfo: {
    title: globalVar.tagline,
    titleTemplate: '%s',
    meta: [
      {
        name: 'keywords',
        content: '뻔뻐, funfur, 가구, 공방, 공방가구, 앱, 스토리, 디자이너, 인테리어, 원목',
      },
    ],
  },

  mounted () {
    this.$Progress.finish()
  },

  // load progressbar
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
}
</script>

<style lang="scss">

</style>
