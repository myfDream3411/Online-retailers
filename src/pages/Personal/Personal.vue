<template>
  <div id="personal">
    <Header></Header>
    <div class="personalMain">
      <div class="mainLogo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
      </div>
      <div class="mainContent">
        <div class="btnSign" @click="$router.replace('/login')" >
          <i class="iconfont iconshouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btnRegister" @click="$router.replace('/mailbox')">
          <i class="iconfont iconyoujian"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="phone" @click="$router.replace('/register')">
          <span>手机号快速注册</span>
          <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
        </div>
        <div class="footer">
          <div class="footerMain">
            <div class="footerChat">
              <i class="iconfont iconweixin"></i>
              <span>微信</span>
            </div>
            <div class="footerChat">
              <i class="iconfont iconqq"></i>
              <span>QQ</span>
            </div>
            <div class="footerChat">
              <i class="iconfont iconweibo"></i>
              <span>微博</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Header from './Header/Header.vue'
  export default {
    name: "Personal",
    components:{
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personal
    .personalMain
      position fixed
      width 100%
      height 100%
      /*background yellow*/
      background-color #F2F5F4
      .mainLogo
        padding-top 160px
        padding-bottom  160px
        text-align center
        img
          width 270px
          height 90px
      .mainContent
        padding 40px
        .btnSign
          width 100%
          height 95px
          line-height 95px
          background-color #b4282d
          border 1px solid #b4282d
          margin-bottom 32px
          font-size 30px
          text-align center
          i
            font-size 30px
        .btnRegister
          width 100%
          height 95px
          line-height 95px
          border 1px solid #b4282d
          margin-bottom 32px
          font-size 30px
          text-align center
          i
            font-size 30px

        .phone
          color #333
          font-size 30px
          text-align center
          i
            font-size 30px
        .footer
          width 100%
          height 100%
          padding-top 100px
          padding-bottom 230px
          .footerMain
            padding-left 20px
            bottom 80px
            height 40px
            text-align center
            .footerChat
              margin-right 40px
              height: 40px
              font-size 30px
              line-height 40px
              border-right 1px solid #979797
              padding-right 40px
              display inline-block
              text-align center
              i
                font-size 30px
</style>
