<template lang="pug">
  div#closebtn
    a.global__cta--link(
      @click="closeWindow"
    )
      button.global__cta--btn(
      ) {{ $t('generic.close') }}
</template>

<script>
export default {
  name: 'closebtn',

  methods: {
    closeWindow () {
      window.open("about:blank","_self").close()
      window.close()
      window.postMessage('close')
    }
  },
}
</script>

<style lang="scss">

</style>
