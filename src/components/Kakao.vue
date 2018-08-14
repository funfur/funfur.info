<template lang="pug">
  div#plusfriend-addfriend-button
    button(
      title="카카오톡 문의하기"
      @click="plusFriendChat"
    )
      img(
        src="/src/assets/dist/kakao.svg"
      )
</template>

<script>
export default {
  name: 'kakao-btn',
  methods: {
    plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: '_Xcxblxl'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
