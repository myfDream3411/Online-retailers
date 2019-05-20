<template>
  <div>
    <KingKong></KingKong>
  </div>
</template>

<script type="text/ecmascript-6">
  import KingKong from './KingKong/KingKong.vue'
  import {reqKingKongModule} from '../../../api'
  export default {
    name: "Main",
    components:{
      KingKong
    },
    mounted(){
      this.$store.dispatch('getKingKongModule')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
