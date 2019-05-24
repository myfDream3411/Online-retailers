<template>
  <div class="classWrap">
    <div class="classLeft">
        <ul class="leftList">
          <li class="leftLi" v-for="(item,index) in categoryL1List" :key="index"
              @click="handleFn(item,index)" :class="{on:index===itemIndex}">
            <span>{{item.name}}</span>
          </li>
        </ul>
    </div>
    <Right :item="item"></Right>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Right from '../Right/Right.vue'
  export default {
    name: "",
    data(){
      return{
        item:{},
        itemIndex:0
      }
    },
    components:{
      Right
    },
    watch:{
      categoryL1List(){
        this.item = this.categoryL1List[0]
        this.$nextTick(()=>{
          new BScroll ('.classLeft',{
            click :true,
            scrollY:true
          })
        })
      },
    },
    computed:{
      ...mapState({
        categoryL1List: state => state.categoryL1List
      })
    },
    methods:{
      handleFn(item,index){
        this.item = item
        this.itemIndex= index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.classWrap
  height 100%
  width 100%
  padding-top 100px
  .classLeft
    float left
    height 100%
    position relative
    .leftList
       position absolute
       top 100px
       left 0
       padding 20px 0
       width 162px
       display flex
       flex-direction column
       .leftLi
         width 160px
         height 50px
         line-height 50px
         text-align center
         font-size 28px
         margin 15px 0;
         >span
           line-height 50px
           text-align center
           font-size 28px
         &.on
           color red
           border-bottom 3px solid red
</style>
