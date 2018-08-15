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
import {globalVar} from '../globalVar'

export default {
  name: 'kakao-btn',
  methods: {
    plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: globalVar.kakaoID
      })
    }
  }
}
</script>

<style lang="scss">

</style>
