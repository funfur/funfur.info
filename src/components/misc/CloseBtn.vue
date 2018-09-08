<template lang="pug">
  div#closebtn
    a.global__cta--link(
      @click="closeWindow"
    )
      button.global__cta--btn(
      ) {{ $t('generic.close') }}
        //- v-scroll-reveal="{ delay: 200 }"
</template>

<script>
export default {
  name: 'closebtn',

  methods: {
    closeWindow () {
      window.open("about:blank","_self").close()
      window.postMessage('close')
    }
  },
}
</script>

<style lang="scss">

</style>
