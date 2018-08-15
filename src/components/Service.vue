<template lang="pug">
  div#service
    div.container
      h1.service__title 뻔뻐와 함께한다면

      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in serviceList"
          :key="key"
        )
          div.service__card--img(:class="'img-' + index")
          h3.service__card--title {{ value.title }}
          p.service__card--text {{ value.desc }}

      div.global__cta
        a.global__cta--link(
          :href="baseURI"
          target="_blank"
          title="뻔뻐 입점신청 페이지(새 탭)"
        )
          button.global__cta--btn 입점신청하기
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'service',
  data () {
    return {
      baseURI: globalVar.registerURI,
      serviceList: {
        upload: {
          img: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab5846a70b2ce31cf27899249b229b1e&auto=format&fit=crop&w=900&q=60',
          title: '5분만에 끝내는 제품업로드',
          desc: '기존 오픈마켓의 제품당 평균 업로드 시간이 약 60분이었던 반면, 가구전문 플랫폼 뻔뻐의 업로드 시간은 단 5분 입니다. 최소시간으로 최대효과를 누려보세요.'
        },
        costs: {
          img: 'https://images.unsplash.com/photo-1521540216272-a50305cd4421?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5433224431f2cb232741669ea1a89dca&auto=format&fit=crop&w=900&q=60',
          title: '판매수수료, 입점비용 무료',
          desc: '모바일 가구거리 뻔뻐에는 판매수수료, 입점비용이 전혀 없습니다. 무료 회원가입 후 제품을 업로드하는 즉시, 소비자는 앱을 통해 제품을 확인 및 주문할 수 있습니다.'
        },
        corporate: {
          img: 'https://images.unsplash.com/photo-1519636125090-67a506cc7c74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64aa8466f29a7d1e867267f658b42ee6&auto=format&fit=crop&w=900&q=60',
          title: '함께하는 공방 플랫폼 마케팅',
          desc: "대규모 자본을 가진 대기업이 아닌 일반 가구공방이 마케팅을 하기는 현실적으로 불가능했습니다. 이제 모두가 함께 모여서, '우리'를 홍보하겠습니다."
        }
      }
    }
  }
}
</script>

<style lang="scss">

</style>
