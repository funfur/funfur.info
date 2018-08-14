<template lang="pug">
  div#video
    div.container
      h1.video__title 뻔뻐 X 공방 작가님
      youtube.video__body(
        video-id="videoId"
        ref="youtube"
      )
</template>

<script>
export default {
  name: 'video-el',
  data () {
    return {
      videoID: '_Zl1pThOZBs',
      url: 'https://youtu.be/_Zl1pThOZBs'
    }
  }
}
</script>

<style lang="scss">

</style>
