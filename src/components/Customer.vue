<template lang="pug">
  div#service
    div.container
      h1.service__title {{ $t('generic.title') }}의 가구들은

      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in serviceList"
          :key="key"
        )
          h3.service__card--title {{ value.title }}
          p.service__card--text {{ value.desc }}
</template>

<script>
export default {
  name: 'customer',

  data () {
    return {
      serviceList: {
        upload: {
          title: '평생 AS 관리 시스템',
          desc: "'쓰다가 버린다'가 아니라 시간이 지남에 따라 나이든 멋으로 함께하도록. 뻔뻐가구는 구매 후 평생 AS 관리가 가능합니다."
        },
        costs: {
          title: '가구장인, 전문가들이 만든 가구',
          desc: '나무를 알고, 쓰는 사람의 용도를 아는 장인들이 만드는 가구. 가장 오래 머무르는 나만의 공간만큼은 그런 가구들로 채워보세요.'
        },
        corporate: {
          title: '나만을 위해 맞춰진 가구',
          desc: "'와, 어디서 샀어? 맞춘거야?' 나의 공간에, 나만을 위해 맞춰진 가구. 아무데서나 볼 수 없는 한정수량의 가구. 뻔뻐에서 만나보세요."
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.service__card {
  grid-gap: $grid12x !important;

  .service__card--each {
    text-align: center;
  }
}
</style>
