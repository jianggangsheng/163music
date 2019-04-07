<template>
  <div id="app">
    <NavbarHeader/>
    <div class="content">
    <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss">

@import "@/scss/base.scss";

</style>
<script>
  import Footer from '@/components/Footer.vue'
  import NavbarHeader from '@/components/NavbarHeader.vue'

export default {
  name: 'home',
  components: {
    NavbarHeader,
    Footer,
  }
}
</script>

