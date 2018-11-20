<template lang="pug">
  div#news
    div.container
      h1.news__title 뻔뻐 관련기사
      p.news__text {{newsTitle}}
      p.news__subtext @ {{newsProvider}}
      div.global__cta
        a.global__cta--link(
          :href="newsUrl"
          target="_blank"
        )
          button.global__cta--btn.ghost__white(
          ) 자세히 보기
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'news',

  data () {
    return {
      newsUrl: globalVar.newsUrl,
      newsTitle: globalVar.newsTitle,
      newsProvider: globalVar.newsProvider,
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
