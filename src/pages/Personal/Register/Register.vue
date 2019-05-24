<template>
  <div>
    <Header></Header>
    <div class="login_content">
      <div class="login_logo">
        <span>手机号注册</span>
      </div>
      <section class="login_message">
        <input type="tel" maxlength="11" placeholder="请输入手机号"
               v-model="phone" name="phone"
               v-validate="{required:true,regex:/^1\d{10}$/}">
        <span style="color: red; display: block;">{{errors.first('phone')}}</span>
        <input type="tel" maxlength="6" placeholder="请输入短信验证码"
               name="验证码" v-model="code"
               v-validate="{required:true,regex:/^.{6}$/}">
        <div class="message" @click.prevent="sendCode"
             :disabled="!isRightPhone ||computeTime>0">
          <a href="javascript:;">{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</a>
        </div>
        <span style="color: red; display: block">{{errors.first('验证码')}}</span>
        <input type="tel" maxlength="6" placeholder="请输入密码"
               v-model="pwd" name="密码"
               v-validate="{required:true,regex:/^.\{6}$/}">
        <span style="color: red; display: block;">{{errors.first('密码')}}</span>
        <div class="mainContent">
          <div class="btnSign" @click="login">
            <span>注册</span>
          </div>
          <div class="tips">
            <input type="checkbox">
            <span>我同意</span>
            <span >《服务条款》</span>
            <span>和</span>
            <span>《网易隐私策略》</span>
          </div>
          <div class="phone" @click="$router.push('/email')">
            <span>邮箱账号注册</span>
            <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '.././Header/Header.vue'
  export default {
    name: "Register",
    data(){
      return{
        phone: '', // 手机号
        code: '', // 一次性短信验证码
        name: '', // 用户名
        pwd: '', // 密码
        captcha: '', // 一次性图形验证码
        computeTime: 0,// 倒计时剩余的时间
        isShowPwd: false, // 是否显示密码
        isShow:false
      }
    },
    methods:{
      sendCode(){
        this.computeTime = 30
        const intervalId = setInterval(()=>{
          this.computeTime--
          if (this.computeTime<=0){
            clearInterval(intervalId)
          }
        },1000)
      },
      async login(){
        const success =  await this.$validator.validateAll()
        console.log(success)
      }
    },
    components:{
      Header
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login_content
    width 100%
    .login_logo
      text-align center
      margin-top 56px
      span
        font-size 36px
        line-height 52px
        color #333
    .login_message
      margin-top 150px
      margin-left 80px
      position relative
      input
        width 620px
        height 80px
        font-size 30px
        line-height 80px
        margin 30px 0
        padding-left 0
        border-bottom 1px solid #d9d9d9
        letter-spacing: normal
        &:focus
          outline none
      .message
        position absolute
        right 58px
        top 178px
        width 173px
        height 56px
        text-align center
        font-size 30px
        background #fff
        line-height:57px
        border: 1px solid #7F7F7F;
        border-radius: 5px
        z-index 99
        a
          color #333
      .mainContent
        margin-right 70px
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
        .tips
          width 100%
          input
            float left
            margin-top 0
            margin-right 5px
            display inline-block
            width 34px
            height 34px
            border 1px solid #999
          span
            float left
            &:nth-child(2n+1)
              color #007AFF
        .phone
          margin-top 80px
          color #333
          font-size 28px
          text-align center
          i
            font-size 30px
</style>
