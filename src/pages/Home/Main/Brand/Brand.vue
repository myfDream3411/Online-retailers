<template>
  <div class="brandContainer">
    <div class="brandTitle">
      <span>品牌制造商提供</span>
      <span>更多
        <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
      </span>
    </div>
    <ul class="brandList">
      <li class="brandLi">
        <span>海外制造商</span>
        <span>9.9元起</span>
        <span>上新</span>
      </li>
      <li class="brandLi">
        <span>CK制造商</span>
        <span>32.9元起</span>
        <span>上新</span>
      </li>
      <li class="brandLi">
        <span>Nine West制造商</span>
        <span>219元起</span>
      </li>
      <li class="brandLi">
        <span>新秀丽制造商</span>
        <span>34.9元起</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Brand"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .brandContainer
    padding  0 20px 20px 28px
    font-size 30px
    background red
    .brandTitle
      display flex
      height 100px
      line-height 100px
      justify-content space-between
      span
        i
          width 30px
          height 30px
          font-size 30px
    .brandList
      overflow hidden
      .brandLi
        margin 0 5px 5px 0
        float left
        width 342px
        height 260px
        background-repeat no-repeat
        background-size 100% 100%
        &:nth-child(1)
          background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
        &:nth-child(2)
          background-image url("http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png")
        &:nth-child(3)
          background-image url("http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png")
        &:nth-child(4)
          background-image url("http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png")
        span
          float left
          &:nth-child(1)
            width 100%
            text-align center
            margin-top 20px
          &:nth-child(2)
            font-size 24px
            color #777
            margin-left 25%
          &:nth-child(3)
            font-size 24px
            width 64px
            height 32px
            color #fff
            text-align center
            border-radius 5px
            background-color #cbb693
            margin-left 10px
</style>
