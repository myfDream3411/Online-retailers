<template>
  <div class="shop">
    <div class="shopHeader">
      <div class="goShopping">购物车</div>
      <div class="Securities" @click="$router.replace('/Personal')">
        <a href="">领劵</a>
      </div>
    </div>
    <div class="shopMain">
      <div class="mainText">
        <div class="text">
          <i class="iconfont iconanniu"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="text">
          <i class="iconfont iconanniu"></i>
          <span>48小时快速退款</span>
        </div>
        <div class="text">
          <i class="iconfont iconanniu"></i>
          <span>满88元免邮费</span>
        </div>
      </div>
      <div class="mainBg">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      </div>
      <div class="btn">
        <span>去添加点什么吧</span>
        <div class="btnSign" @click="$router.replace('/Personal')">登录</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Shopping"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shop
    position fixed
    width 100%
    height 100%
    .shopHeader
      width 100%
      height 90px
      line-height 90px
      font-size 36px
      display flex
      text-align center
      padding 0 30px
      .Securities
        position absolute
        top 0
        right 30px
        a
          color #B4282D
          font-size 30px
    .shopMain
      height 100%
      background-color #f4f4f4
      .mainText
        display flex
        align-items center
        width 100%
        height 70px
        line-height 70px
        justify-content space-around
        .text
          color #666
          font-size 24px


      .mainBg
        position absolute
        top -50px
        right 0
        bottom 0
        left 0
        height 300px
        text-align center
        margin auto
        img
          width 248px
          height 248px
      .btn
        font-size 30px
        line-height 1
        color #7f7f7f
        text-align center
        margin-top 460px
        .btnSign
          margin 50px auto  0
          width 480px
          height 92px
          font-size 30px
          line-height 92px
          color #fff
          background-color #b4282d
          border-radius 3px
</style>
