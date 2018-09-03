<template lang="pug">
  div#stats
    div.container
      div.stats__wrapper(
        v-for="(value, key) in statsList"
      )
        h3.stats__count {{ value.count | numberFormat }}
        p.stats__title {{ value.title }}
      //- p(
      //-   style="color:red"
      //- ) {{ user.id }}
</template>

<script>
import numberFormat from '@/filters/numberFormat'
// import axios from 'axios'

export default {
  name: 'stats',

  data () {
    return {
      statsList: {
        storeInfo: {
          count: 192,
          title: '제휴 및 입점 공방 수'
        },
        itemsInfo: {
          count: 1080,
          title: '입점 공방 제품 수'
        },
        mockInfo: {
          count: 4.5,
          title: '앱스토어 평점'
        }
      },
      // user: []
    }
  },
  filters: {
    numberFormat,
    // formatting(num) {
    //   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
  },
  // mounted () {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .then(response => {
  //       this.user = response.data[0]
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       this.errored = true
  //     })
  // }
}
</script>

<style lang="scss">

</style>
