<template>
  <form>
    <div class="login_content">
      <div class="login_logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
      </div>
      <section class="login_message">
        <input type="tel" maxlength="11" placeholder="请输入手机号">
        <input type="tel" maxlength="6" placeholder="请输入短信验证码">
        <button>获取验证码</button>
        <input type="tel" maxlength="11" placeholder="遇到问题？">
        <button>使用密码验证登录</button>
        <button>登录</button>
        <button>其他登录方式</button>
        <span>注册账号></span>
      </section>
    </div>
    <!--<div>-->
      <!--<section class="login_verification">-->
        <!--<input type="tel" maxlength="11" placeholder="邮箱账号">-->
        <!--<input type="tel" maxlength="6" placeholder="密码">-->
        <!--<input type="tel" maxlength="11" placeholder="注册账号  忘记账号">-->
        <!--<button>登录</button>-->
        <!--<button>其他登录方式</button>-->
      <!--</section>-->
    <!--</div>-->
    <!--<div>-->
      <!--<section class="login_verification">-->
        <!--<input type="tel" maxlength="11" placeholder="请输入手机号">-->
        <!--<input type="tel" maxlength="6" placeholder="请输入短信验证码">-->
        <!--<button>获取验证码</button>-->
        <!--<input type="tel" maxlength="6" placeholder="请输入密码">-->
        <!--<button>注册</button>-->
      <!--</section>-->
      <!--<section class="login_hint">-->
        <!--<a href="javascript:;">我同意《服务条款》和《网易隐私策略》</a>-->
        <!--<span>邮箱账号注册</span>-->
      <!--</section>-->
    <!--</div>-->
  </form>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Login"
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
</style>
