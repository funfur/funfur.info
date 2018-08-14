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
      {name: 'description', content: '모바일 가구거리, 뻔뻐'},
      {property: 'og:title', content: '모바일 가구거리, 뻔뻐'},
      {property: 'og:description', content: '모바일 가구거리, 뻔뻐'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://funfur-info.github.io'},
      {property: 'og:image', content: '/src/assets/dist/metacard.png'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: '모바일 가구거리, 뻔뻐'},
      {name: 'twitter:description', content: '모바일 가구거리, 뻔뻐'},
      {name: 'twitter:image:src', content: '/src/assets/dist/metacard.png'},
      {itemprop: 'name', content: '모바일 가구거리, 뻔뻐'},
      {itemprop: 'description', content: '모바일 가구거리, 뻔뻐'},
      {itemprop: 'image', content: '/src/assets/dist/metacard.png'}
    ],
    links: [
      {rel: 'canonical', href: 'https://funfur-info.github.io'}
    ]
  }
}
</script>
