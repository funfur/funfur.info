<template lang="pug">
  div#header
    div.container
      div.header__left
        router-link(
          :to="'/'"
          v-tooltip="{content: '맨 위로', delay: {show: 500, hide: 100}}"
          v-scroll-to="'body'"
        )
          img.header__logo(src="/src/assets/dist/ic-launcher40.svg")
          span.header__text 모바일 가구거리, <b>뻔뻐</b>

      div.header__right
        a.header__right--link(
          :href="baseURI"
          target="_blank"
          v-tooltip="{content: '뻔뻐 입점신청 페이지(새 탭)', delay: {show: 500, hide: 100}}"
        ) 입점신청하기
        a.header__right--icon(
          :key="key"
          target="_blank"
          aria-hidden="true"
          v-tooltip="{content: value.title, delay: {show: 500, hide: 100}}"
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
      baseURI: globalVar.ceoRegisterWebsiteUrl,
      snsIconList: {
        instagram: {
          href : globalVar.companyInstagram,
          iconID : 'icIcon',
          iconClass : 'instagram',
          title: '뻔뻐 인스타그램(새 탭)'
        },
        facebook: {
          href : globalVar.companyFacebook,
          iconID : 'fbIcon',
          iconClass : 'facebook-square',
          title: '뻔뻐 페이스북(새 탭)'
        }
      }
    }
  }
}
</script>
