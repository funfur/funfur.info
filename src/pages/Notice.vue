<template lang="pug">
  div#notice
    div.accordion__container
      div.accordion__container--wrapper(
        v-for="(value, key) in noticeList"
        :key="key"
      )
        button.accordion__container--header
          div.accordion__container--icon
          div.accordion__container--title {{ value[0] }}
            span.accordion__container--date {{ value[1] }}
        div.accordion__container--box
          p.accordion__container--text {{ value[2] }}
</template>

<script>
export default {
  name: 'notice',

  data () {
    return {
      noticeList: [
        [
          '뻔뻐 앱 오픈!',
          '2018. 10. 03',
          '우리가 모바일 가구거리 뻔뻐를 만든 이유는 원목가구 그 자연스러운 매력을 거짓없이 조금 더 쉽게, 조금 더 빠르게 여러분에게 전달드리고 싶었기 때문이에요.'
          + ' 이제 여러분도 엄선된 나무만으로 선별된, 디자이너가 만든 작품 원목가구의 아름다움을 경험해보세요.',
        ],
      ]
    }
  },

  metaInfo: {
    title: '모바일 가구거리, 뻔뻐 - 공지사항',
    titleTemplate: '%s',
  },

  mounted () {
    let accordion = document.getElementsByClassName('accordion__container--header');
    [...accordion].forEach(notice => {
      notice.addEventListener('click', function() {
        this.classList.toggle('active')
        let panel = this.nextElementSibling
        if (panel.style.maxHeight)
          panel.style.maxHeight = null
        else
          panel.style.maxHeight = panel.scrollHeight + 'px'
      })
    })
  }
}
</script>
