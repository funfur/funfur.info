<template lang="pug">
  div#footer
    div.container
      p.footer__copyright
        | © {{thisYear}}. (주)뻔뻔한친구들. All Rights Reserved.

      p.footer__info
        span.footer__info-each(
          v-for="info in infoList"
        ) {{ info }}

      p.footer__terms
        a.footer__terms-each(
          :key="key"
          :href="'https://funfur.github.io/html/' + value + '.html'"
          target="_blank"
          :title="key + '(새 탭)'"
          v-for="(value, key) in tos"
        ) {{ key }}
</template>

<script>
import {globalVar} from '../main.js'

export default {
  name: 'footer-el',
  data () {
    return {
      year: '',
      infoList: [
        '사업자등록번호: 435-15-00646',
        '대표이사: 유덕열',
        '대표전화: ' + globalVar.callTo,
        '팩스: 0504-433-6202',
        '주소: 서울특별시 성동구 왕십리로 222 한양대학교 HIT관 B234호 (04763)'
      ],
      tos: {
        // TODO: temp URI
        개인정보처리방침: 'privacy',
        제품판매이용약관: 'terms-product',
        사장님사이트이용약관: 'terms-site'
      }
    }
  },
  computed: {
    thisYear () {
      return this.year = new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">

</style>
