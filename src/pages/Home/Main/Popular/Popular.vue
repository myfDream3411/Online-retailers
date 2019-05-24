<template>
  <div class="popular">
    <div class="title">
      <span>人气推荐</span>
      <span>更多
        <i class="iconfont icontiaozhuanqianwangyoujiantouxiangyouxiayibuxianxing"></i>
      </span>
    </div>
    <div class="content">
      <div class="containerHead">
        <img src="http://yanxuan.nosdn.127.net/2ff4c3a1227a5f08f917e2318fe720f6.png" alt="好物推荐">
        <div class="descript">
          <span>APP特惠</span>
          <p>21s素暖轻磨毛四件套</p>
          <p>厚实粗犷肌理感，越睡越舒适</p>
          <p>￥399</p>
        </div>
      </div>
      <ul class="contentList">
        <li class="contentLi">
          <img src="http://yanxuan.nosdn.127.net/06e5818658707bc182acabe92cae3d34.png" alt="商品图">
          <div class="text">
            <span>30包 谷风一木软抽面巾纸囤货装</span>
            <span>￥75</span>
          </div>
        </li>
        <li class="contentLi">
          <img src="http://yanxuan.nosdn.127.net/77b7e8586397dc27613e6c5c6da7a85a.png" alt="商品图">
          <div class="text">
            <span>男式轻薄无缝羽绒服</span>
            <span>￥239</span>
          </div>
        </li>
        <li class="contentLi">
          <img src="http://yanxuan.nosdn.127.net/6b21b6c208d7c4ffd4c74e094014219f.png" alt="商品图">
          <div class="text">
            <span>真皮毛女童系结雪地靴</span>
            <span>￥244</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "Popular",
    computed:{
      ...mapState({
        popularItemList:state => state.popularItemList
      }),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .popular
    padding 0 0 20px
    .title
      display flex
      justify-content space-between
      align-items center
      font-size 30px
      height 100px
      padding 0 30px
      span
        i
          font-size 30px
    .content
      .containerHead
        display flex
        justify-content space-around
        align-items center
        margin 0 30px 20px
        img
          width 280px
          height 280px
        .descript
          width 350px
          span
            font-size 20px
            padding 0 5px
            text-align center
            color #b4282d
            border 1px solid #b4282d;
            background-color: #fff
          >p
            &:nth-child(2)
              font-size 30px
            &:nth-child(3)
              font-size 24px
              color #666
              margin 5px 0
            &:nth-child(4)
              color #b4282d
      .contentList
        width 100%
        height 100%
        /*padding-left 10px*/
        .contentLi
          float left
          width 216px
          height 354px
          font-size 24px
          margin-left 20px
          padding-bottom 20px
          text-align center
          img
            width 216px
            height 216px
            background-color #f5f5f5
          .text
            height 72px
            line-height 35px
            /*margin-top 10px*/
            span
              font-size 24px
              &:nth-child(2)
                color #b4282d
</style>
