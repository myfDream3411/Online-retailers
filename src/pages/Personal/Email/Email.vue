<template>
  <div class="emailcontainer">
    <div class="emailHeader">
      <div class="number">
        <input type="text" maxlength="18" placeholder="6-18位字母数字组合">
      </div>
      <div class="com">
        @163.com
        <i class="iconfont iconxiangxia"></i>
      </div>
    </div>
    <div class="emailMain">
      <input type="text" maxlength="18" placeholder="6-18位字母数字字符组合密码"
             v-model="email" name="邮箱"
             v-validate="{required:true,regex:/^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/}">
      <span style="color: red; display: block;">{{errors.first('邮箱')}}</span>
      <div class="icon">
        <i class="iconfont iconyanjing1"></i>
      </div>
    </div>
    <div class="mainContent" @click="validateFn">
      <button>点击进行验证</button>
      <div class="btnSign" @click="nextFn">
        <span>下一步</span>
      </div>
      <div class="tips">
        <input type="checkbox">
        <span>我同意</span>
        <a href="javascript:;">《服务条款》</a>
        <span>和</span>
        <a href="javascript:;">《网易隐私策略》</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState}  from 'vuex'
  export default {
    name: "Email",
    data(){
      return{
        email:''
      }
    },
    computed:{
      ...mapState({
        errors:state => state.errors
      })
    },
    methods:{
      async validateFn(){
        const success =  await this.$validator.validateAll()
        console.log(success)
      },
      nextFn(){
        if(!this.errors){
          alert('成功')
        }else{
          alert('信息错误')
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .emailcontainer
    position relative
    margin auto
    /*background yellow*/
    padding-top 120px
    width 86%
    .emailHeader
      display flex
      height 120px
      .number
        margin-right 10px
        width 270px
        height 90px
        line-height 90px
        font-size 32px
        input
          width 330px
          height 90px
          border-radius 6px
          border 1px solid #d0d0d0
          padding-left 30px
          &:focus
            outline none
      .com
        text-align center
        border-radius 6px
        border 1px solid #d0d0d0
        margin-left 120px
        width 240px
        height 90px
        line-height 90px
        font-size 32px
        i
          font-size 32px

    .emailMain
      height 120px
      margin-top 20px
      input
        width 620px
        height 90px
        border-radius 6px
        border 1px solid #d0d0d0
        padding-left 30px
        &:focus
          outline none
      .icon
        position fixed
        top 280px
        right 100px
        i
          font-size 32px

    .mainContent
      width 620px
      height 100%
      button
        font-size 32px
        width 620px
        height 90px
      .btnSign
        margin-top 40px
        margin-bottom 40px
        line-height 90px
        text-align center
        font-size 32px
        background-color #b7272d
        width 620px
        height 90px

</style>
