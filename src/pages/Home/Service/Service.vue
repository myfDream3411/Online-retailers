<template>
  <div class="serviceContainer">
    <ul class="serviceList">
      <li class="serviceLi" v-for="(policyDescLi,index) in policyDescList" :key="policyDescLi.desc">
        <a href="javascript:;">
          <img :src="policyDescLi.icon">
          <span>{{policyDescLi.desc}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "Service",
    data(){
      return{
      }
    },
    computed:{
      ...mapState({
        policyDescList:state=>state.policyDescList
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .serviceContainer
    width 100%
    background-color #FFFFFF

    .serviceList
      width 100%
      height 72px
      line-height 72px
      display flex
      justify-content space-around
      align-items center
      .serviceLi
        a
          /*display inline-block*/
          font-size 24px
          color #B4282D
          img
            vertical-align middle
            height 30px
</style>
