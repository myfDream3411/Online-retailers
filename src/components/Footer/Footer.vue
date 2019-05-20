<template>
  <footer class="footer">
    <router-link to="/home" class="guide_item">
      <div>
        <i class="iconfont iconshouye"></i>
        <span>首页</span>
      </div>
    </router-link>
    <router-link to="/classification" class="guide_item">
      <div>
        <i class="iconfont iconclassifi-copy"></i>
        <span>分类</span>
      </div>
    </router-link>
    <router-link to="know" class="guide_item">
      <div>
        <i class="iconfont iconshiwu"></i>
        <span>识物</span>
      </div>
    </router-link>
    <router-link to="shopping" class="guide_item">
      <div>
        <i class="iconfont iconicon-test item_icon" ></i>
        <span>购物车</span>
      </div>
    </router-link>
    <router-link to="personal" class="guide_item">
      <div>
        <i class="iconfont iconnickname"></i>
        <span>个人</span>
      </div>
    </router-link>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Footer"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    background white
    width 100%
    height 85px
    position fixed
    bottom 0
    left 0
    text-align center
    display flex
    justify-content space-around
    margin-top -5px
    .guide_item
      display flex
      justify-content space-around
      font-size 24px
      text-align center
      &.active
        color #b4282d
      div
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        i
          font-size 36px
        span
          font-size 24px



</style>
