<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from './components/Footer/Footer.vue'
  export default {
    name: "App",
    components:{
      Footer
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%

</style>
