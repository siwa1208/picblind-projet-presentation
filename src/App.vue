<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
//import LoadingScreen from '@/components/SplashScreen.vue'

export default {
  components: {
    Header,
    Footer,
    //LoadingScreen,
  },
}
</script>
<style>
#app {
   display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>