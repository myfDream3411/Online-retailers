<template>
  <div class="categoryContainer">
    <p>类目热销榜</p>
    <div class="category-top">
      <ul class="topList">
        <li class="topLi" v-for="(twoLi,index) in twoList" :key="index">
          <span class="text">
            {{twoLi.categoryName}}
            <span class="line"></span>
          </span>
          <img :src="twoLi.picUrl" alt="">
        </li>
      </ul>
    </div>
    <div class="category-bottom">
      <ul class="categoryList">
        <li class="categoryLi" v-for="(botLi,index) in botList" :key="index">
          <span>{{botLi.categoryName}}</span>
          <img :src="botLi.picUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "Category",
//    data(){
//      return {
//      }
//    },
    computed: {
      ...mapState({
        categoryHotSellModule: state => state.categoryHotSellModule.categoryList
      }),
      twoList(){
        if (this.categoryHotSellModule){
          return this.categoryHotSellModule.slice(0, 2)
        }
      },
      botList(){
        if (this.categoryHotSellModule){
          return this.categoryHotSellModule.slice(2, 10)
        }
      },
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryContainer
    height 800px
    background darkkhaki
    padding 0 20px 20px 30px
    p
      font-size 32px
      height 100px
      line-height 100px
    .category-top
      .topList
        display flex
        .topLi
          margin 0 10px 10px 0;
          background-color #f9f3e4
          width 340px
          height 200px
          display flex
          align-items center
          font-size 28px
          span
            width 100px
            height 40px
            margin-left 20px
            span
              display: block;
              width 50px
              height 4px
              background-color #000
              margin-top 10px
          img
            width 200px
            height 200px
            margin-left 20px
    .category-bottom
      .categoryList
        width 100%
        .categoryLi
          float left
          width 163px
          height 180px
          margin 0 10px 10px 0;
          background-color: #f5f5f5;
          text-align center
          padding-top 10px
          box-sizing border-box
          span
            text-align center
          img
            width 95px
            height 120px
</style>
