<template>
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
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

</style>
