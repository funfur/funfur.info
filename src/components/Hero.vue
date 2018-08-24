<template lang="pug">
  div#hero
    div.container
    div.hero__dim
    div.hero__wrapper
      p.hero__subtitle
        | 스토리가 있는
        span.hero__title--nbsp &nbsp;
        span.hero__br
        | 디자이너 가구, <b>뻔뻐</b>
      h1.hero__title
        | 공방가구의 새로운 판로
        br
        | 모바일 가구거리
        span.hero__title--nbsp &nbsp;
        span.hero__br
        | 뻔뻐가 함께합니다

      div.global__cta
        <a class="global__cta--link" v-scroll-to="{el:'#download', offset: -54}">
          button.global__cta--btn.brand--bg 어플다운로드
        </a>
      div.global__cta
        a.global__cta--link(
          :href="baseURI"
          target="_blank"
          title="뻔뻐 입점신청 페이지(새 탭)"
        )
          button.global__cta--btn 입점신청하기
</template>

<script>
export default {
  name: 'hero',
  data () {
    return {
      baseURI: process.env.CEO_REGISTER_URL
    }
  }
}
</script>
