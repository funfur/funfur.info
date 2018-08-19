<template lang="pug">
  div#contact
    h1.contact__title 무엇이든 물어보세요
    div.container

      a.contact__each(
        v-for="(value, key) in contactList"
        :key="key"
        target="_blank"
        :href="value.href"
        )
        i.contact__info.fa(
          aria-hidden="true"
          :class="'fa-' + value.class"
        )
          p.contact__text(
          ) {{ value.text }}

      a.contact__each#plusfriend-addfriend-button(
        @click="plusFriendChat"
      )
        i.contact__info.fa(
          aria-hidden="true"
          :class="'fa-' + kakao.class"
        )
          p.contact__text(
          ) {{ kakao.text }}
</template>

<script>
import {globalVar} from '@/globalVar'

export default {
  name: 'contact',
  data () {
    return {
      contactList: {
        call: {
          class: 'phone',
          href: 'tel:' + globalVar.callTo,
          text: globalVar.callTo
        },
        link: {
          class: 'globe',
          href: globalVar.baseURI,
          text: '사장님 사이트 방문하기'
        }
      },
      kakao: {
        class: 'comments-o',
        text: '카카오톡 문의하기'
      }
    }
  },
  methods: {
    plusFriendChat() {
      Kakao.PlusFriend.chat({
        plusFriendId: process.env.KAKAO_ID
      })
    }
  }
}
</script>
