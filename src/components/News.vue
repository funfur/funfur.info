<template lang="pug">
  div#news
    div.container
      h1.news__title 뻔뻐 관련기사
      p.news__text 신뢰가 가는 가구구매 플랫폼
      p.news__subtext 창업일보기획: 스타트업列傳
      div.global__cta
        a.global__cta--link(
          :href="baseURI"
          target="_blank"
          title="창업일보(새 탭)"
        )
          button.global__cta--btn.ghost__white 자세히 보기
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      baseURI: 'http://www.news33.net/news/articleView.html?idxno=20850'
    }
  }
}
</script>

<style lang="scss">

</style>
