<template>
  <div class="homeContainer">
    <header class="header">
      <div class="headerLogo">
        <div class="headerBg"></div>
        <div class="headerSearch" @click="$router.push('search')">
          <i class="iconfont iconicon-test1"></i>
          <span class="text">网红爆款安瓶 升级特惠</span>
        </div>
        <button>登录</button>
      </div>
      <div class="headerNav">
        <ul class="navList">
          <li class="navLi">
            <a href="javascript:;">推荐</a>
          </li>
          <li class="navLi">
            <a href="javascript:;">居家生活</a>
          </li>
          <li class="navLi">
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li class="navLi">
            <a href="javascript:;">美食酒水</a>
          </li>
          <li class="navLi">
            <a href="javascript:;">个护清洁</a>
          </li>
          <li class="navLi">
            <a href="javascript:;">限时购</a>
          </li>
          <li class="navLi">
            <a href="javascript:;">母婴亲子</a>
          </li>
          <li class="navLi">
            <a href="javascript:;">运动旅行</a>
          </li>
          <li class="navLi">
            <a href="javascript:;">数码家电</a>
          </li>
        </ul>
        <div class="iconBox">
          <div class="iconText " @click="showMsakFn" :class="{trast:maskShow}">
            <i class="iconfont iconicon-test2"></i>
          </div>
        </div>
        <div class="mask clearFix" v-show="maskShow" >
          <div class="title">全部频道</div>
          <ul class="maskList">
            <li class="maskLi">
              <a href="javascript:;">推荐</a>
            </li>
            <li class="maskLi">
              <a href="javascript:;">居家生活</a>
            </li>
            <li class="maskLi">
              <a href="javascript:;">服饰鞋包</a>
            </li>
            <li class="maskLi">
              <a href="javascript:;">美食酒水</a>
            </li>
            <li class="maskLi">
              <a href="javascript:;">个护清洁</a>
            </li>
            <li class="maskLi">
              <a href="javascript:;">母婴亲子</a>
            </li>
            <li class="maskLi">
              <a href="javascript:;">运动旅行</a>
            </li>
            <li class="maskLi">
              <a href="javascript:;">数码家电</a>
            </li>
            <li class="maskLi">
              <a href="javascript:;">全球特色</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="homeMain">
      <div class="homeScroll">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127
.net/8db54c351c497620aff3b0e65dd5f95c.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/a7b08e3aed13787da15c58879963be01.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/68f443a9bcc78b0c46a414a633f66c47.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127
.net/8db54c351c497620aff3b0e65dd5f95c.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/a7b08e3aed13787da15c58879963be01.jpg">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/68f443a9bcc78b0c46a414a633f66c47.jpg">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <Service></Service>
        <Main></Main>
      </div>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper/dist/js/swiper'
  import 'swiper/dist/css/swiper.css'

  import BScroll from 'better-scroll'
  import {reqPolicyDescList} from '../../api'

  import Service from './Service/Service.vue'
  import Main from './Main/Main.vue'
  export default {
    name: "Home",
    data(){
      return{
        maskShow:false
      }
    },
    components:{
      Service,
      Main
    },
    async mounted(){
      this.$nextTick(()=>{
        if (!this.picScroll){
          this.picScroll = new BScroll('.headerNav', {
            click:true,
            scrollX:true,

            eventPassthrough:'vertical'   //忽略竖直方向的滚动
          })
        }
        new BScroll('.homeMain',{
          click:true,
          scrollY:true

        })

        new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          }
        })
      })

      this.$store.dispatch('getPolicyDescList')



    },
    methods:{
      showMsakFn(){
        this.maskShow = !this.maskShow;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .homeContainer
    height 100%
    .header
      width 100%
      .headerLogo
        height 80px
        line-height 80px
        display flex
        .headerBg
          width 150px
          height 80px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
          background-size 120px 40px
          background-repeat no-repeat
          background-position center
        .headerSearch
            width 480px
            height 60px
            border-radius 10px
            background-color rgba(0,0,0,0.1)
            text-align center
            line-height 60px
            margin 10px 3px
            i
              font-size 24px
            .text
              font-size 32px
        button
          width 80px
          height 40px
          border-radius 10px
          border 1px solid #b4282d
          font-size 24px
          margin auto
          outline none
          color #b4282d
          background-color #fff
      .headerNav
        position relative
        width 100%
        .navList
          width 1600px
          height 70px
          line-height 70px

          &.avtive
            border-bottom 5px solid #b4282d
          .navLi
            height 70px
            font-size 36px
            float left
            margin-right 40px
            &:first-child
              margin-left 30px
        .iconBox
          width 70px
          height 70px
          position absolute
          top 0
          right  0
          background white
          text-align center
          z-index 999
          .iconText
            margin-top 15px
            width 50px
            height 50px
            transition  transform 0.5s
            &.trast
              transform rotate(180deg)
            i
              font-size 48px
        .mask
          position absolute
          top 0
          left 0
          width 750px
          height 1334px
          background-color rgba(0,0,0,.4)
          z-index 10
          .title
            height 70px
            line-height 70px
            font-size 36px
            padding-left 28px
            background white
          .maskList
            position absolute
            width 100%
            height 300px
            background white
            .maskLi
              float left
              width 150px
              height 50px
              border 1px solid #CCC
              border-radius 1px
              font-size 28px
              margin-left 28px
              text-align center
              line-height 50px
              margin-top 20px
              background-color #FAFAFA
            .homeMain
              height 100%
              .homeScroll
                .swiper-container
                  width 100%
                  height 400px
                  .swiper-wrapper
                    zoom 1
                    .swiper-slide
                      img
                        width 750px
                        height 400px
    .homeMain
      .homeScroll
        .swiper-container
          img
            width 100%
            height 341px
</style>
