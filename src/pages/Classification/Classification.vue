<template>
  <div class="classContainer">
    <div class="Class">
      <div class="classHead">
        <input type="text" placeholder="搜索商品，共2000多款好物">
        <div class="search">
          <i class="iconfont iconicon-test1"></i>
        </div>
      </div>
      <div class="line"></div>
      <Left></Left>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqCategoryL1List} from '../../api'
  import Left from './Left/Left.vue'
  export default {
    name: "Classification",
    components:{
      Left,
    },
    mounted(){
      this.$store.dispatch('getCategoryL1List')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classContainer
    height 100%
    width 100%
    .Class
      height 100%
      width 100%
      .classHead
        position fixed
        top 0
        background #FFF
        width 100%
        height 75px
        z-index 10
        margin 0 auto
        line-height 75px
        text-align center
        border-bottom 1px solid #eee
        input
          border-radius 10px
          line-height 56px
          height 56px
          width 90%
          font-size 30px
          margin  0 20px
          color #666
          text-align center
          background-color rgba(0,0,0,0.1)
        .search
          position absolute
          top 10px
          left 22%
          i
            font-size 30px
      .line
        margin-bottom 10px
        width 100%
        height 2px
        background-color #eee

</style>
