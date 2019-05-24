<template>
  <div class="searchContainer">
    <div class="head">
      <div class="headClick">
        <i class="iconfont iconicon-test1"></i>
        <input type="text" placeholder="马卡龙色 多功能早餐机"  v-model="haha"
               @keyup="handleUp">
      </div>
      <div class="cancel" @click="$router.push('home')">取消</div>
    </div>
    <ul class="search">
      <li v-for="(item,index) in search" :key="index">{{item}}</li>
    </ul>
    <div class="main" v-show="isShow">
      <p class="title">热门搜索</p>
      <ul class="minList">
        <li class="mainLi">
          粽子礼盒 限时8折
        </li>
        <li class="mainLi">
          女鞋
        </li>
        <li class="mainLi">
          爆款 行李箱
        </li>
        <li class="mainLi">
          杯子
        </li>
        <li class="mainLi">
          日本挂式驱蚊网
        </li>
        <li class="mainLi">
          床垫
        </li>
        <li class="mainLi">
          9.9元爆品超值购
        </li>
        <li class="mainLi">
          枕头
        </li>
        <li class="mainLi">
          直流风扇199元
        </li>
        <li class="mainLi">
          睡衣
        </li>
        <li class="mainLi">
          烟台大樱桃
        </li>
        <li class="mainLi">
          收纳
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqSearch} from '../../api'
  import {mapState} from 'vuex'
  export default {
    name: "Sarch",
    data(){
      return{
        haha:'',
        isShow:true
      }
    },
    methods:{
      handleUp(){
        if(this.search.length){
          this.isShow = !this.isShow
        }
        setTimeout(()=>{
          this.$store.dispatch('getSearch',this.haha)
        },500)

      }
    },
    computed:{
      ...mapState(['search'])
    },
//    watch:{
//
//    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    height 100%
    background-color #f4f4f4
    .head
      position relative
      padding-left 30px
      width 100%
      background #fff
      /*height 87px*/
      line-height 87px
      text-align center
      display flex
      .headClick
        border
        i
          position absolute
          left 50px
          font-size 40px
        input
          padding-left 60px
          font-size 30px
          width 500px
          height 56px
          line-height 56px
          background-color #f4f4f4
          border-radius 6px
      .cancel
        width 80px
        height 50px
        margin-left 30px
        font-size 30px
    .search
      li
        background #fff
        height 80px
        line-height 80px
        border-bottom 1px solid #eee
        padding-left 30px
    .main
      padding 0 30px 30px
      background-color #fff
      .title
        height 90px
        font-size 30px
        color #999
        padding-top 30px
        margin-top 30px
      .minList
        overflow hidden
        .mainLi
          float left
          padding 15px
          margin-right 32px
          margin-bottom 32px
          line-height 46px
          border 1px solid #999;
          border-radius 4px
          color #333
</style>
