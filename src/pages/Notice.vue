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
          '공지사항 제목',
          '2018. 10. 30',
          '지혜는 위하여서, 어디 거선의 너의 싸인 약동하다. 가치를 위하여서 소금이라 품으며, 청춘의 이것이다. 품고 얼마나 찾아다녀도, 붙잡아 그들은 역사를 생의 끓는다.',
        ],
        [
          '공지사항 제목',
          '2018. 10. 30',
          '인생에 얼음과 광야에서 찬미를 위하여서, 운다. 거친 설산에서 피는 끝까지 보라. 열매를 몸이 꾸며 아름다우냐?',
        ],
        [
          '공지사항 제목',
          '2018. 10. 30',
          '아니더면, 그러므로 피어나기 봄날의 인생에 것이다. 긴지라 꽃이 찬미를 칼이다. 목숨이 사람은 하였으며, 더운지라 작고 과실이 살 싸인 황금시대다. 실로 얼음 어디 우리의 약동하다.',
        ],
      ]
    }
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

<style lang="scss">

</style>
