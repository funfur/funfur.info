<template lang="pug">
  div#app
    router-view
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    title: '모바일 가구거리, 뻔뻐',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      {property: 'og:title', content: '모바일 가구거리, 뻔뻐'},
      {property: 'og:type', content: 'website'},
      // {property: 'og:url', content: 'https://funfur-info.github.io'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: '모바일 가구거리, 뻔뻐'},
    ],
    // links: [
    //   {rel: 'canonical', href: 'https://funfur-info.github.io'}
    // ]
  }
}
</script>
