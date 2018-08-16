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
        router-link.footer__terms-each(
          :key="key"
          :to="value"
          target="_blank"
          :title="key + '(새 탭)'"
          v-for="(value, key) in tos"
        ) {{ key }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'footer-el',
  data () {
    return {
      year: '',
      infoList: [
        '사업자등록번호: 435-15-00646',
        '대표이사: 유덕열',
        '대표전화: ' + globalVar.callTo,
        '팩스: ' + globalVar.faxNumb,
        '주소: 서울특별시 성동구 왕십리로 222 한양대학교 HIT관 B234호 (04763)'
      ],
      tos: {
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
