<template>
  <div class="flashContainer">
    <div class="head">
      <div class="title">
        <span>限时购</span>
        <div class="time">
          <span>02</span>
          <span>:</span>
          <span>40</span>
          <span>:</span>
          <span>22</span>
        </div>
      </div>
      <span class="right">
        更多
        <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
      </span>
    </div>
    <ul class="contentList">
      <li class="contentLi" v-for="(item,index) in flashSaleModule.itemList" :key="index">
        <img :src="item.picUrl" alt="">
        <div class="price">
          <span>￥{{item.activityPrice}}</span>
          <span>￥{{item.originPrice}}</span>
        </div>

      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "",
    data(){
      return{
        itemList:[]
      }
    },
    computed:{
      ...mapState({
        flashSaleModule:state=>state.flashSaleModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .flashContainer
    .head
      height 100px
      line-height 100px
      font-size 30px
      padding 0 30px
      display flex
      justify-content space-between
      .title
        display flex
      .time
        span
          &:nth-child(2n+1)
            padding 5px
            border-radius 5px
            margin 0 10px
            color #fff
            background-color #000

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
          height 40px
          line-height 40px
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
