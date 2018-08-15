<template lang="pug">
  div#video
    div.container
      h1.video__title {{ title }}
      h3.video__subtitle {{ subtitle }}
      youtube.video__body(
        :video-id="'_Zl1pThOZBs'"
      )
</template>

<script>
export default {
  name: 'video-el',
  data () {
    return {
      videoID: '_Zl1pThOZBs',
      url: 'https://youtu.be/_Zl1pThOZBs',
      title: '뻔뻐 × 공방 작가님',
      subtitle: 'D.Blik 가구 디자이너 이영찬'
    }
  }
}
</script>

<style lang="scss">

</style>
