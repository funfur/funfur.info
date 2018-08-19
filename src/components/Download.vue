<template lang="pug">
  div#download
    div.container
      h1.download__title 어플로도 간편하게 즐겨보세요

      div.download__badge
        a.download__badge--link(
          v-for="(value, key) in badges"
          :key="key"
          target="_blank"
          :href="value.href"
          v-tooltip.bottom="value.title"
        )
          img.download__badge--each(
            :src="value.src"
          )

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
      badges: {
        ios: {
          src: '/src/assets/dist/appstore.svg',
          title: 'iPhone 앱스토어 다운받기',
          href: globalVar.iosURI
        },
        android: {
          src: '/src/assets/dist/playstore.svg',
          title: 'Android 구글 플레이스토어 다운받기',
          href: globalVar.androidURI
        }
      }
    }
  }
}
</script>
