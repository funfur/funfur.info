<template lang="pug">
  div#header
    div.container
      div.header__left
        router-link(
          :to="'/'"
          v-tooltip="{content: '맨 위로', delay: {show: 500, hide: 100}}"
          v-scroll-to="'body'"
        )
          img.header__logo(
            src="/src/assets/dist/ic-launcher40.svg"
          )
          span.header__text 모바일 가구거리, <b>{{ $t('generic.title') }}</b>

      div.header__right
        a.header__right--link(
          :href="baseURI"
          target="_blank"
          v-tooltip="{content: '뻔뻐 입점신청 페이지(새 탭)', delay: {show: 500, hide: 100}}"
        ) {{ $t('generic.joinus') }}
        a.header__right--icon(
          :key="key"
          target="_blank"
          aria-hidden="true"
          v-tooltip="{content: value.title, delay: {show: 500, hide: 100}}"
          :href="'https://' + value.href"
          :class="'fa fa-' + value.iconClass"
          v-for="(value, key) in snsIconList"
        )
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'header-el',

  data () {
    return {
      scrolled: false,
      baseURI: globalVar.ceoRegisterWebsiteUrl,
      snsIconList: {
        instagram: {
          href : globalVar.companyInstagram,
          iconID : 'icIcon',
          iconClass : 'instagram',
          title: '뻔뻐 인스타그램(새 탭)'
        },
        facebook: {
          href : globalVar.companyFacebook,
          iconID : 'fbIcon',
          iconClass : 'facebook-square',
          title: '뻔뻐 페이스북(새 탭)'
        }
      }
    }
  }
}
</script>

<style lang="scss">

#header {
  top: 0;
  z-index: 10;
  width: 100%;
  position: fixed;
  height: $grid14x;
  align-items: center;
  background-color: #fff;
  @include box-shadow($grid2x, $grid3x);

  // safari
  @supports (-webkit-appearance:none) {
    background-color: hsla(0,0%,100%,.85);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
            backdrop-filter: saturate(180%) blur(16px);
  }

  // edge
  @supports (-ms-ime-align:auto) {
    background-color: hsla(0,0%,100%,.85);
    -webkit-backdrop-filter: saturate(180%) blur(16px);
            backdrop-filter: saturate(180%) blur(16px);
  }

  @media #{$ie}      { background-color: #fff; }
  @media #{$chrome}  { background-color: #fff; }
  @media #{$firefox} { background-color: #fff; }


  .header__left {
    float: left;

    a {
      outline: none;
      height: $grid14x;
      padding: 0 $grid4x;
      display: inline-block;
      background-color: $brand-yellow;

      .header__logo {
        width: $grid10x;
        @include transform(translate(0, 20%));
      }

      .header__text {
        color: #fff;
        margin-left: $grid3x;
        display: inline-block;
        @include transform(translate(0, -20%));
      }
    }

    @media #{$middle} {
      margin-left: -#{$grid4x};

      a {
        outline: none;
        background-color: transparent;

        .header__logo {
          margin-left: -#{$grid};
        }

        .header__text {
          display: none;
        }
      }
    }
  }

  .header__right {
    float: right;
    @include transform(translate(0, 25%));

    .header__right--link {
      font-weight: 900;
      display: inline-block;
      vertical-align: middle;
      transition: color .25s ease;
    }

    .header__right--icon {
      outline: none;
      color: $text999;
      margin-left: $grid8x;
      vertical-align: middle;
      transition: all .25s ease;
      @include font-size($grid6x);

      @media #{$pablet} {
        margin-left: $grid6x;
      }

      &.fa-instagram {

        &:hover {
          color: $color-ig;
          @include transform(scale(1.1));
        }
      }

      &.fa-facebook-square {

        &:hover {
          color: $color-fb;
          @include transform(scale(1.1));
        }
      }
    }
  }
}
</style>
