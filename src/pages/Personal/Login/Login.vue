<template>
  <div>
    <Header></Header>
    <div class="login_content">
      <div class="login_logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
      </div>
      <section class="login_message" v-if="!isShow">
        <input type="tel" maxlength="11" placeholder="请输入手机号"
               name="phone" v-model="phone" v-validate="{required:true,regex:/^1\d{10}$/}">
        <span style="color: red; display: block;">{{errors.first('phone')}}</span>
        <input type="tel" maxlength="6" placeholder="请输入短信验证码"
               name="验证码" v-model="code"
               v-validate="{required:true,regex:/^.{6}$/}">
        <div class="message" @click.prevent="sendCode"
             :disabled="!isRightPhone ||computeTime>0">
          <a href="javascript:;">{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</a>
        </div>
        <span style="color: red; display: block">{{errors.first('验证码')}}</span>
        <input type="tel" maxlength="11" placeholder="遇到问题？">
        <div class="psg" @click="isShowFn">
          <a href="javascript:;">使用密码验证登录</a>
        </div>
        <div class="mainContent">
          <div class="btnSign" @click.prevent="login">
            <span>登录</span>
          </div>
          <div class="btnRegister" @click="$router.replace('/personal')">
            <span>其他登录方式</span>
          </div>
          <div class="phone" @click="$router.replace('/register')">
            <span>注册帐号</span>
            <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
          </div>
        </div>
      </section>
      <section class="login_message" v-if="isShow">
        <input type="tel" maxlength="11" placeholder="请输入手机号"
               v-model="phone" name="phone"
               v-validate="{required:true,regex:/^1\d{10}$/}">
        <span style="color: red; display: block;">{{errors.first('phone')}}</span>
        <input type="tel" maxlength="6" placeholder="请输入密码"
               v-model="密码" name="pwd"
               v-validate="{required:true,regex:/^.\{6}$/}">
        <span style="color: red; display: block;">{{errors.first('密码')}}</span>
        <input type="tel" maxlength="11" placeholder="忘记密码">
        <div class="psg" @click="isShowFn">
          <a href="javascript:;">使用短信验证登录</a>
        </div>
        <div class="mainContent">
          <div class="btnSign" @click.prevent="login">
            <span>登录</span>
          </div>
          <div class="btnRegister" @click="$router.push('/personal')">
            <span>其他登录方式</span>
          </div>
          <div class="phone" @click="$router.replace('/register')">
            <span>注册帐号</span>
            <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '.././Header/Header.vue'
  import {MessageBox,Toast} from 'mint-ui'
  export default {
    name: "Login",
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
      isShowFn(){
        this.isShow = !this.isShow
      },
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
//    methods:{
//      handlePersonal(){
//        this.isShow = !this.isShow
//      }
//    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login_content
    width 100%
    .login_logo
      text-align center
      margin-top 56px
      img
        width 192px
        height 64px
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

      .psg
        position absolute
        top 330px
        right 0
        width 300px
        a
          background none
          color #333
          font-size 30px
          height 45px
          padding 0
          line-height 45px
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
</style>
