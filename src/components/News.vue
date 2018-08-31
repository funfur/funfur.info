<template lang="pug">
  div#news
    div.container
      h1.news__title {{newsTitle}}
      p.news__text {{newsText}}
      p.news__subtext {{newsSubtext}}
      div.global__cta
        a.global__cta--link(
          :href="baseURI"
          target="_blank"
        )
          button.global__cta--btn.ghost__white(
          ) 자세히 보기
</template>

<script>
export default {
  name: 'news',

  data () {
    return {
      baseURI: 'http://www.news33.net/news/articleView.html?idxno=20850',
      newsTitle: '뻔뻐 관련기사',
      newsText: '신뢰가 가는 가구구매 플랫폼',
      newsSubtext: '창업일보기획: 스타트업列傳'
    }
  }
}
</script>
