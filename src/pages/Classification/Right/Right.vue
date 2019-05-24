<template>
  <div class="classRight">
    <div class="rightMain" >
      <img :src="item.bannerUrl" alt="">
      <ul class="subList">
        <li class="subLi" v-for="(li,index) in item.subCateList" :key="index">
          <img :src="li.bannerUrl" alt="">
          <span>{{li.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: "",
    props: {
      item: Object,
      index: Number
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll('.classRight', {
          click: true,
          scrollY: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classRight
    float left
    height 100%
    /*padding-top 70px*/
    .rightMain
      height 100%
      margin-left 162px
      padding 30px 30px 120px
      img
        width 528px
        height 190px
      .subList
        display flex
        flex-wrap wrap
        width 100%
        .subLi
          text-align center
          width 144px
          margin-right 30px
          img
            width 144px
            height 144px
          span
            margin-top 10px
</style>
