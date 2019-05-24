<template>
  <div class="mainlist">
    <div class="mainli" v-for="(item,index) in categoryModule" :key="index">
      <img :src="item.titlePicUrl">
      <div class="active">
        <ul class="activeList" >
          <li class="activeLi" v-for="(c,index) in item.itemList"
              :key="index">
            <img :src="c.listPicUrl" alt="">
            <div class="textPrice">
              <span class="name">{{c.name}}</span>
              <span class="price">￥{{c.retailPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "Mainlist",
    data(){
      return{
        itemList:[]
      }
    },
    computed:{
      ...mapState({
        categoryModule:state=>state.categoryModule
      })
    },
    watch:{
      categoryModule(){
        this.$nextTick(()=>{
          let lists = document.querySelectorAll('.active')
          console.log(lists)
          Array.from(lists).forEach((list,index)=>{
            new BScroll(list,{
              click:true,
              scrollX:true,
              eventPassthrough:'vertical'
            })
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .mainlist
    .mainli
      img
        width 100%
        height 370px
        margin-bottom 30px
      .active
        width 100%
        padding: 0 30px 20px
        box-sizing border-box
        .activeList
          width 1508px
          display flex
          .activeLi
            margin-right 20px
            img
              width 200px
              height 200px
              margin-bottom 10px
              background-color #f4f4f4

            .textPrice
              .name
                display block
                width 200px
                padding-bottom 10px
              .price
                color #b4282d
</style>
