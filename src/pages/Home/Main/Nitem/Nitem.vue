<template>
  <div class="nitemContainer">
    <div class="head">
      <div class="title">
        <span>新品首发</span>
      </div>
      <span class="right">
        更多
        <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
      </span>
    </div>
    <ul class="contentList">
      <li class="contentLi" v-for="(item, index) in newItemList" :key="index">
        <img :src="item.scenePicUrl" alt="">
        <div class="price">
          <span>{{item.name}}</span>
          <span>￥{{item.counterPrice}}</span>
        </div>

      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "Category",
    computed:{
      ...mapState({
        newItemList:state=>state.newItemList
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .nitemContainer
    .head
      height 100px
      line-height 100px
      font-size 30px
      padding 0 30px
      display flex
      justify-content space-between
      .title
        display flex
      .right
        i
          width 30px
          height 30px
          font-size 30px
    .contentList
      height 100%
      padding 0 10px 0 20px
      .contentLi
        float left
        margin-right 20px
        padding-bottom 30px
        height 270px
        width 215px
        img
          width 215px
          height 215px
          background-color #f5f5f5
        .price
          height 72px
          line-height 35px
          padding 0 0 0 10px
          margin-top 10px
          span
            &:nth-child(1)
              color #b4282d
              font-size 28px
            &:nth-child(2)
              color #777
              font-size 24px
</style>
