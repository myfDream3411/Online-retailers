<template>
  <div class="kingKongContainer">
    <!--<img :src="kingKongModule.background">-->
    <ul class="kingKongList">
      <li class="kingKongLi"
          v-for="(kingKongLi,index) in kingKongModule.kingKongList" :key="index">
        <a :href="kingKongLi.schemeUrl">
          <img :src="kingKongLi.picUrl">
          <span>{{kingKongLi.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "KingKong",
    data(){
      return{
        kingKongList:[]
      }
    },
    computed:{
      ...mapState({
        kingKongModule:state=>state.kingKongModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .kingKongContainer
    width 100%
    height 372px
    background yellow
    .kingKongList
      display flex
      flex-wrap wrap
      .kingKongLi
        height 156px
        width 110px
        background red
        margin 10px 20px
        a
          width 110px
          height 110px
          img
            height 110px
            width 110px
          span
            font-size 24px


</style>
