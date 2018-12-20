<template lang="pug">
  div#stats
    div.container
      div.stats__wrapper(
        v-for="(value, key) in statsList"
      )
        h3.stats__count {{ value.count | numberFormat }}
        p.stats__title {{ value.title }}
</template>

<script>
import numberFormat from '@/filters/numberFormat'

export default {
  name: 'stats',

  data () {
    return {
      statsList: {
        storeInfo: {
          count: 18,
          title: '제휴 및 입점 공방 수'
        },
        itemsInfo: {
          count: 387,
          title: '입점 공방 제품 수'
        },
        mockInfo: {
          count: 4.5,
          title: '앱스토어 평점'
        }
      },
    }
  },

  filters: {
    numberFormat,
  },

}
</script>

<style lang="scss">

</style>
