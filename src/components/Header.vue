<template lang="pug">
  div#header
    div.container
      div.header__left
        router-link(
          :to="'/'"
          title="맨 위로"
          v-scroll-to="'body'"
        )
          img.header__logo(src="/src/assets/dist/ic-launcher40.svg")
          span.header__text 모바일 가구거리, <b>뻔뻐</b>

      div.header__right
        a.header__right--link(
          :href="baseURI"
          target="_blank"
          title="뻔뻐 입점신청 페이지(새 탭)"
        ) 입점신청하기
        a.header__right--icon(
          :key="key"
          target="_blank"
          aria-hidden="true"
          :title="value.title"
          :href="'https://' + value.href"
          :class="'fa fa-' + value.iconClass"
          v-for="(value, key) in snsIconList"
        )
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'header-el',
  data () {
    return {
      scrolled: false,
      baseURI: globalVar.registerURI,
      snsIconList: {
        Twitter: {
          href : 'www.instagram.com/funfurofficial/',
          iconID : 'icIcon',
          iconClass : 'instagram',
          title: '뻔뻐 인스타그램(새 탭)'
        },
        GitHub: {
          href : 'www.facebook.com/funfur0fficial/',
          iconID : 'fbIcon',
          iconClass : 'facebook-square',
          title: '뻔뻐 페이스북(새 탭)'
        }
      }
    }
  }
}
</script>
