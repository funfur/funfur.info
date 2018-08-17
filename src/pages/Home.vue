<template lang="pug">
  div#home
    Header
    Hero
    Service.section__each
    Stats.section__each
    Video.section__each
    Customer.section__each
    News.section__each
    Download.section__each
    Contact.section__each
    Footer
    Kakao
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import Stats from '@/components/Stats'
import Video from '@/components/Video'
import Customer from '@/components/Customer'
import News from '@/components/News'
import Download from '@/components/Download'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Kakao from '@/components/Kakao'

export default {
  name: 'home',
  components: {
    Header,
    Hero,
    Service,
    Stats,
    Video,
    Customer,
    News,
    Download,
    Contact,
    Footer,
    Kakao
  }
}
</script>

<style lang="scss">
.section__each {
  padding: 48px 0 80px;
}
</style>
