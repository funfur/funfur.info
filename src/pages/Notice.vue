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
          p.accordion__container--text(
            v-if="value[2]"
          ) {{ value[2] }}
          p.accordion__container--text(
            v-if="value[3]"
          ) {{ value[3] }}
          p.accordion__container--text(
            v-if="value[4]"
          ) {{ value[4] }}
          p.accordion__container--text(
            v-if="value[5]"
          ) {{ value[5] }}
</template>

<script>
export default {
  name: 'notice',

  data () {
    return {
      noticeList: [
        [
          '[공지] 카카오톡 로그인 장애 안내',
          '2018. 12. 02',
          '안녕하세요? 12월 2일, 18시 30분부터 22시 00분까지 약 3시간 30분동안 카카오톡을 통한 뻔뻐 서비스 로그인에 장애가 있었습니다.',
          '현재는 해당 문제를 해결하였으며, 재발 방지를 위한 대책 강구 후 추후 같은 문제가 발생하지 않도록 업데이트를 진행했습니다.',
          '앞으로는 동일한 문제가 발생하지 않도록 더욱 노력하는 뻔뻐가 되겠습니다. 불편을 끼쳐드려 죄송합니다.',
          '뻔뻐 드림',
        ],
        [
          '[공지] 뻔뻐 앱 오픈!',
          '2018. 10. 03',
          '우리가 모바일 가구거리 뻔뻐를 만든 이유는 원목가구 그 자연스러운 매력을 거짓없이 조금 더 쉽게, 조금 더 빠르게 여러분에게 전달드리고 싶었기 때문이에요.',
          '이제 여러분도 엄선된 나무만으로 선별된, 디자이너가 만든 작품 원목가구의 아름다움을 경험해보세요.',
        ],
      ]
    }
  },

  metaInfo: {
    title: '공지사항',
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
