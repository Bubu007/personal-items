<template>
  <div id="app">
    <transition name="tabbar">
      <tabbar v-show="show" style="position: fixed;bottom: 0;background-color:white" >
        <!--selected 默认选中wechat-->
        <tabbar-item selected link="/shou-ye" icon-class="info">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/pin-dao">
          <span slot="label">频道</span>
        </tabbar-item>
        <tabbar-item link="/zhi-bo">
          <span slot="label">直播</span>
        </tabbar-item>
        <tabbar-item link="/pai-hang/second">
          <span slot="label">排行</span>
        </tabbar-item>
        <tabbar-item link="/mine">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </transition>
    <transition :name="animateType">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {Tabbar,TabbarItem} from 'vux'
  export default{
    name:'app',
    components: {
      Tabbar,
      TabbarItem
    },
    data(){
      return{
        // 从一级到二级、三级、...页面是否显示tabbar
        show:'true',
      }
    },
    watch:{
      // 监听路由的变化,并执行回调函数
      // 参数1:新路由对象;参数2:旧路由对象
      $route(to,from){
         console.log(to);
         console.log(from);
         let toLevel = to.path.split('/').length;
         let fromLevel = from.path.split('/').length
         

         if(toLevel == fromLevel){
          //  同级页面之间的切换
          this.animateType = 'level'
         }else if(toLevel > fromLevel){
          //  进入:1-->2,2-->3
          this.animateType = 'in'
         }else{
          //  回退:2->1,3->2
          this.animateType = 'out'
         }
         if(toLevel > 2){
          //  进入下一级页面,隐藏tabbar
          this.show = false
         }else{
          //  回到一级页面,显示tabbar
          this.show = true
         }
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

</style>
