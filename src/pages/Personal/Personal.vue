<template>
  <div id="personal">
    <div class="personHeader">
      <div class="personalHome" @click="$router.replace('/Home')">
        <a href="">
          <i class="iconfont iconshouye"></i>
        </a>
      </div>
      <div class="personalLogo">
        <a href=""></a>
      </div>
      <div class="personalRight">
        <a href="" class="search">
          <i class="iconfont iconicon-test1"></i>
        </a>
        <a href="javascript:;" @click="$router.replace('/Shopping')">
          <i class="iconfont iconicon-test"></i>
        </a>
      </div>
    </div>
    <div class="login_content">
    </div>
    <Login></Login>
    <div class="personalMain">
      <div class="mainLogo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
      </div>
      <div class="mainContent">
        <div class="btnSign" :class="{on: loginType===0}" @click="loginType=0">
          <i class="iconfont iconshouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btnRegister" :class="{on: loginType===1}" @click="loginType=1">
          <i class="iconfont iconyoujian"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="phone" :class="{on: loginType===2}" @click="loginType=2">
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
  import Login from './Login/Login.vue'
  export default {
    name: "Personal",
    data () {
      return {
        loginType: 0, // 标识登陆方式: 0-手机号登陆, 1-邮箱登陆，2-手机号快速登录
//        phone: '', // 手机号
//        code: '', // 一次性短信验证码
//        name: '', // 用户名
//        pwd: '', // 密码
//        captcha: '', // 一次性图形验证码
//        computeTime: 0,// 倒计时剩余的时间
//        isShowPwd: false, // 是否显示密码
      }
   },
    components:{
      Login
    }
//
//    computed: {
//      // 是否是一个正确手机号
//      isRightPhone () {
//        return /^1\d{10}$/.test(this.phone)
//      }
//    },
//
//    methods: {
//      // 发送验证码
//      async sendCode () {
//        // alert('----')
//        // 指定最大时间
//        this.computeTime = 30
//        // 启动循环定时器每隔1s减少1
//        const intervalId = setInterval(() => {
//          this.computeTime--
//          // 一旦变为0, 停止计时
//          if(this.computeTime<=0) {
//            clearInterval(intervalId)
//          }
//        }, 1000)
//
//        // 发ajax请求, 发送短信验证码
//        const result = await reqSendCode(this.phone)
//        if(result.code===0) {
//          // alert('发送验证成功')
//          Toast('发送验证成功')
//        } else {
//          // 停止计时
//          this.computeTime = 0
//          // alert(result.msg)
//          MessageBox.alert(result.msg)
//        }
//      },
//
//      // 登陆
//      async login () {
//
//        let names
//        let result
//        const {loginType, phone, code, name, pwd, captcha} = this
//        if(loginType) {
//          names = ['phone', 'code']
//        } else {
//          names = ['用户名', '密码', '验证码']
//        }
//
//        const success = await this.$validator.validateAll(names)
//        if(success) {
//          // 如果验证通过, 发登陆的请求
//          if(loginType) {
//            result = await reqSmsLogin(phone, code)
//          } else {
//            result = await reqPwdLogin({name, pwd, captcha})
//          }
//          // 根据处理的结果, 做响应
//          if(result.code===0) { // 登陆成功
//            const user = result.data
//            // 保存user到state中去
//            this.$store.commit(RECEIVE_USER, user)
//            // 路轨到个人中心
//            this.$router.replace('/profile')
//          } else { // 登陆失败
//            MessageBox.alert(result.msg)
//          }
//
//        }
//      },
//
//      // 更新图形验证码
//      updateCaptcha () {
//        // 只要给img指定一个新的src值, 浏览器自动发请求显示新的图片(携带一个时间戳的参数)
//        this.$refs.captcha.src = 'http://localhost:5000/captcha?time=' + Date.now()
//      }
//    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personal
    .personHeader
      position relative
      width 100%
      height 87px
      /*background yellow*/
      display flex
      align-items center
      /*background-color #fafafa*/
      border-bottom 1px solid #d9d9d9
      .personalHome
        margin-left 24px
        i
         font-size 46px
      .personalLogo
        z-index 1
        width 172px
        height 54px
        line-height 54px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        margin 0 auto
      .personalRight
        margin-right 24px
        .search
          margin-right 10px
        i
          font-size 46px

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
