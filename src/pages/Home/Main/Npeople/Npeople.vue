<template>
  <div class="nPeople">
    <div class="title">
      <span>-</span>
      新人专享礼
      <span>-</span>
    </div>
    <div class="content">
      <div class="left">
        <span>新人专享礼包</span>
        <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
      </div>
      <div class="right">
        <div class="right-top">
          <div class="descript">
            <p>福利社</p>
            <span>近日特价</span>
          </div>
          <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="福利社">
        </div>
        <div class="right-down">
           <div class="descript">
             <p>新人拼团</p>
             <span>1元起包邮</span>
           </div>
          <img data-v-56f0d932="" src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ""
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .nPeople
    width 100%
    .title
      margin 0 30px
      font-size 32px
      height 90px
      line-height 90px
      text-align: center
    .content
      margin 0 30px
      display flex
      font-size 32px
      .left
        flex 5
        text-align center
        margin-right 5px
        background-color #f9e9cf
        span
          display block
          margin-top 30px
        img
          margin 20px auto
      .right
        flex 5
        .right-top
          margin-bottom 5px
          background-color #fbe2d3
          display flex
          .descript
            display flex
            font-size 32px
            flex-direction column
            margin-right 30px
            span
              font-size 24px
              margin-top 10px
              color #777
          img
            display block
            width 200px
            height 200px

        .right-down
          background-color: #ffecc2
          display flex
          .descript
            display flex
            font-size 32px
            flex-direction column
            margin-right 30px
            span
              font-size 24px
              margin-top 10px
              color #777
          img
            display block
            width 200px
            height 200px

</style>
