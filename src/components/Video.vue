<template lang="pug">
  div#video
    div.container
      h1.video__title {{ $t('generic.title') }}{{ title }}
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
      title: ' × 공방 작가님',
      subtitle: globalVar.youtubeTitle
    }
  },
  components: {
    VueYoutube
  }
}
</script>

<style lang="scss">

#video {
  border-bottom: 1px solid $texteee;

  .video__title {
    font-weight: 300;
    margin-bottom: -#{$grid2x};
  }

  .video__subtitle {
    text-align: center;
    margin-bottom: $grid16x;

    &::before {
      content: "'";
    }

    &::after {
      content: "' 편";
    }
  }

  iframe {
    width: 100%;
    height: 480px;
    margin: 0 auto;
    display: inline-block;

    @media #{$pablet} {
      height: 240px;
    }
  }
}
</style>
