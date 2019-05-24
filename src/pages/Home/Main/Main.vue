<template>
  <div>
    <KingKong></KingKong>
    <Npeople></Npeople>
    <Brand></Brand>
    <Category></Category>
    <Popular></Popular>
    <Flash></Flash>
    <Nitem></Nitem>
    <Mainlist></Mainlist>
  </div>
</template>

<script type="text/ecmascript-6">
  import KingKong from './KingKong/KingKong.vue'
  import Npeople from './Npeople/Npeople.vue'
  import Brand from './Brand/Brand.vue'
  import Category from './Category/Category.vue'
  import Popular from './Popular/Popular.vue'
  import Flash from './Flash/Flash.vue'
  import Nitem from './Nitem/Nitem.vue'
  import Mainlist from './Mainlist/Mainlist.vue'
  import {reqKingKongModule,reqCategoryHotSellModule,reqPopularItemList,reqFlashSaleModule,reqNewItemList,reqCategoryModule} from '../../../api'
  export default {
    name: "Main",
    components:{
      KingKong,
      Npeople,
      Brand,
      Category,
      Popular,
      Flash,
      Nitem,
      Mainlist
    },
    mounted(){
      this.$store.dispatch('getKingKongModule');
      this.$store.dispatch('getCategoryHotSellModule');
      this.$store.dispatch('getPopularItemList');
      this.$store.dispatch('getFlashSaleModule');
      this.$store.dispatch('getNewItemList');
      this.$store.dispatch('getCategoryModule')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
