<template lang="pug">
  div#service
    div.container
      h1.service__title 뻔뻐에 입점한다면

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
        )
          button.global__cta--btn(
          ) 입점신청하기
            //- v-tooltip.bottom="'뻔뻐 입점신청 페이지(새 탭)'"
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'service',

  data () {
    return {
      baseURI: globalVar.ceoRegisterWebsiteUrl,
      serviceList: {
        upload: {
          title: '5분만에 끝내는 제품업로드',
          desc: '제품당 평균 업로드 시간이 기존 약 60분에서 단 5분으로. 가구전문 플랫폼 뻔뻐에서 최소시간으로 최대효과를 누려보세요.'
        },
        costs: {
          title: '판매수수료, 입점비용 무료',
          desc: '판매수수료와 입점비용이 없습니다. 무료 회원가입 후 제품을 올리는 동시에 소비자는 앱으로 제품을 구매할 수 있습니다.'
        },
        corporate: {
          title: '함께하는 공방 플랫폼 마케팅',
          desc: "직접 만들기에는 바쁘고 어떻게 하는지도 몰랐던 홍보. 이제 모두가 함께 모여서, '우리'가 홍보됩니다."
        }
      }
    }
  }
}
</script>

<style lang="scss">

#service {

  .service__title {
    font-weight: 300;
    margin-bottom: $grid8x;
  }

  .service__card {
    @include grid-layout(3, 100px, $grid8x);

    @media #{$landsc} {
      @include grid-layout(1, 100px, $grid8x);
    }

    .service__card--each {

      .service__card--img {
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;

        // set each images
        $BaseURI: '/src/assets/dist/service_img';

        @for $i from 0 through 2{
          &.img-#{$i} {
            background-image: url('#{$BaseURI + $i}.jpg');
          }
        }
      }

      .service__card--title,
      .service__card--text {
        margin-top: $grid8x;

        @media #{$pablet} {
          margin-top: $grid4x;
        }
      }

      .service__card--title {
        margin: $grid4x 0 $grid6x;
      }

      .service__card--text {
        margin: -#{$grid4x} 0 $grid6x 0;
      }
    }
  }

  .global__cta--btn {
    @include box-shadow(0, 0, transparent);
  }
}
</style>
