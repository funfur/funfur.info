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
export default {
  name: 'footer-el',
  data () {
    return {
      year: '',
      companyName: process.env.COMPANY_NAME,
      infoList: [
        '사업자등록번호: ' + process.env.COMPANY_ID,
        '대표이사: ' + process.env.CEO_NAME,
        '대표전화: ' + process.env.CALL_TO,
        '팩스: ' + process.env.FAX_TO,
        '주소: ' + process.env.COMPANY_ADDRESS
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
