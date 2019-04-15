<template>
    <div class="index">
        <NavbarHeader/>
        <div class="content">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  import NavbarHeader from '@/components/NavbarHeader.vue'

export default {
  name: 'index',
  components: {
    NavbarHeader,
    Footer,
  }
}
</script>

<style>

</style>
