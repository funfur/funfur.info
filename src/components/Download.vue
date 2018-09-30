<template lang="pug">
  div#download
    div.container
      h1.download__title 어플로 간편하게 즐겨보세요

      div.download__badge.global__cta
        button.global__cta--btn.download__badge--link(
          @click="detectServe"
          v-tooltip.bottom="{content: '뻔뻐 다운받기 (모바일 전용)', delay: {show: 500, hide: 100}}"
        )  {{ $t('generic.download') }}

      div.download__mockup
        img.download__mockup--img(
          src="/src/assets/dist/main.png"
        )
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'download',

  data () {
    return {
      os: undefined,
    }
  },

  mounted() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera

    if (/windows phone/i.test(userAgent)) {
      this.os = "Windows Phone"
    }
    else if (/android/i.test(userAgent)) {
      this.os = "Android"
    }
    else if (/iPad|iPhone|iPod/.test(userAgent) || navigator.appVersion.indexOf("Mac")!=-1 && !window.MSStream) {
      this.os = "iOS"
    }
    else this.os = "unknown"
  },

  methods: {
    detectServe() {
      if (this.os == "Android") {
        window.open(globalVar.androidStore)
      }
      else if (this.os == "iOS") {
        window.open(globalVar.iosStore)
      }
      else if (this.os == "Windows Phone") {
        alert("지원하지 않는 스마트폰입니다.")
      }
      else alert("모바일 환경이 아니거나, 지원하지 않는 스마트폰입니다.")
    }
  },

}
</script>

<style lang="scss">

#download {
  height: 640px;
  overflow-y: hidden;
  // border-top: 1px solid $texteee;

  @media #{$pablet} {
    height: 560px;
  }

  .download__title {
    font-weight: 300;
    margin-bottom: $grid8x;
  }

  .download__badge {

    .download__badge--link {
      margin: 0 0 $grid12x;
      @include box-shadow(0, 0, transparent);
    }
  }

  .download__mockup {
    text-align: center;

    .download__mockup--img {
      width: 360px;
      margin: 0 auto;

      @media #{$pablet} {
        width: 280px;
      }
    }
  }
}
</style>
