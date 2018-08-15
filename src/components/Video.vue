<template lang="pug">
  div#video
    div.container
      h1.video__title {{ title }}
      h3.video__subtitle {{ subtitle }}
      youtube.video__body(
        :video-id="videoID"
      )
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import {globalVar} from '../globalVar'

Vue.use(VueYoutube)

export default {
  name: 'video-el',
  data () {
    return {
      videoID: globalVar.youtubeID,
      url: 'https://youtu.be/' + globalVar.youtubeID,
      title: '뻔뻐 × 공방 작가님',
      subtitle: 'D.Blik 가구 디자이너 이영찬'
    }
  },
  components: {
    VueYoutube
  }
}
</script>

<style lang="scss">

</style>
