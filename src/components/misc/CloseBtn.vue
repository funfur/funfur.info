<template lang="pug">
  div#closebtn
    a.global__cta--link(
      @click="closeWindow"
      title="창 닫기"
    )
      button.global__cta--btn 창 닫기
</template>

<script>
export default {
  name: 'closebtn',
  methods: {
    closeWindow () {
      window.open("about:blank","_self").close()
    }
  }
}
</script>
