<template lang="pug">
  div#footer
    div.container
      p.footer__copyright
        | © {{thisYear}}. (주){{companyName}}. All Rights Reserved.

      p.footer__info
        span.footer__info-each(
          v-for="info in infoList"
        ) {{ info }}

      p.footer__terms
        router-link.footer__terms-each(
          :key="key"
          :to="'tos/' + value"
          target="_blank"
          v-tooltip.bottom="{content: key + '(새 탭)', delay: {show: 500, hide: 100}}"
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
      companyName: globalVar.companyName,
      infoList: [
        '사업자등록번호: ' + globalVar.companyId,
        '대표이사: ' + globalVar.ceoName,
        '대표전화: ' + globalVar.callTo,
        '팩스: ' + globalVar.faxTo,
        '주소: ' + globalVar.companyAddress
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
