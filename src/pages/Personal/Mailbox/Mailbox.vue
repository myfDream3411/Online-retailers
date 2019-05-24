<template>
  <div>
    <Header></Header>
    <div class="login_content">
      <div class="login_logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
      </div>
      <section class="login_message">
        <input type="tel" maxlength="11" placeholder="邮箱帐号"
               v-model="email" name="邮箱"
               v-validate="{required:true,regex:/^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/}">
        <span style="color: red; display: block;">{{errors.first('邮箱')}}</span>
        <input type="tel" maxlength="6" placeholder="密码"
               v-model="pwd" name="密码"
               v-validate="{required:true,regex:/^.\{6}$/}">
        <span style="color: red; display: block;">{{errors.first('密码')}}</span>
        <input type="tel" maxlength="11" placeholder="注册帐号？">
        <div class="psg">
          <a href="javascript:;">忘记密码</a>
        </div>
        <div class="mainContent">
          <div class="btnSign" @click="login">
            <span>登录</span>
          </div>
          <div class="btnRegister" @click="$router.push('./personal')">
            <span>其他登录方式</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../Header/Header.vue'
  export default {
    name: "Mailbox",
    data(){
      return{
        email:'',
        pwd:'',
      }
    },
    methods:{
      async login(){
        const success =  await this.$validator.validateAll()
        console.log(success)
      }
    },
    components:{
      Header
    }
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
