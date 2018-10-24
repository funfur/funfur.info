<template lang="pug">
  div#qrcode
    div.qrcode__container
      div.qrcode__each
        h3.qrcode__each--title {{ companyInfo }}
</template>

<script>
import axios from 'axios'
import {globalVar} from '@/globalVar'

export default {
  name: 'qrcode',

  data () {
    return {
      companyInfo: []
    }
  },

  mounted () {
    let baseURI = 'https://api.mockaroo.com/api/d07561b0?count=1&key='
    axios
      .get(baseURI + process.env.API_KEY, {
        transformResponse: (req) => {
          return req
        },
        responseType: 'json'
      })
      .then(response => {
        this.companyInfo = response.data
        console.log(this.companyInfo)
      })
  }
}
</script>

<style lang="scss">
#qrcode {

  .qrcode__container {
    padding: $grid2x $grid4x $grid4x;

    .qrcode__each {

      .qrcode__each--title {
        font-size: $grid4x;
      }
    }
  }
}
</style>
