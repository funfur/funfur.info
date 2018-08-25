<template lang="pug">
  div#video
    div.container
      h1.video__title {{ title }}
      h3.video__subtitle {{ subtitle }}
      youtube.video__body(
        :video-id="videoId"
      )
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import {globalVar} from '@/globalVar'

Vue.use(VueYoutube)

export default {
  name: 'video-el',
  data () {
    return {
      videoId: globalVar.youtubeId,
      url: 'https://youtu.be/' + globalVar.youtubeId,
      title: '뻔뻐 × 공방 작가님',
      subtitle: globalVar.youtubeTitle
    }
  },
  components: {
    VueYoutube
  }
}
</script>
