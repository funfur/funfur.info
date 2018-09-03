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

<style lang="scss">

#news {
  background-color: $brand-yellow;

  .news__title {
    color: #fff;
    font-weight: 300;
  }

  .news__text,
  .news__subtext {
    color: #fff;
    text-align: center;
  }

  .news__text {
    font-weight: 900;
    margin: -#{$grid2x} 0 0;
    @include font-size($grid8x);
    @include line-height($grid8x);

    &::after,
    &::before {
      content: '"';
    }
  }

  .news__subtext {
    font-weight: 900;
    margin: $grid4x 0 -#{$grid2x};
    @include font-size($grid4x);
  }
}
</style>
