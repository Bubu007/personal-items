

import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

import ShouYe from './components/ShouYe.vue'
import ZhiBo from './components/ZhiBo.vue'
import PinDao from './components/PinDao.vue'
import Mine from './components/Mine.vue'
import PaiHang from './components/PaiHang.vue'
import Second from './components/Second.vue'
import QuanZhan from './components/QuanZhan.vue'
import DongHua from './components/DongHua.vue'
import Fan from './components/Fan.vue'
import GuoChuang from './components/GuoChuang.vue'

import './assets/font-awesome/css/font-awesome.css'
import './assets/base.css'
import VueResource from 'vue-resource'
Vue.use(VueResource)




// 导入actionsheet, alert 
import {Actionsheet,AlertPlugin} from 'vux'
// 注册为全局组件
Vue.component('Actionsheet',Actionsheet)
// alert 是以插件的形式导入,所以要use
Vue.use(AlertPlugin);

/*使用路由*/
Vue.use(VueRouter)

const routes = [
     {path:'/shou-ye',component:ShouYe},
     { path: '/pin-dao', component: PinDao },
     { path: '/zhi-bo', component: ZhiBo},
     { path: '/mine', component: Mine},
     { path: '/pai-hang', component: PaiHang},
     { path: '/pai-hang/second', component: Second },
     { path: '/quan-zhan', component: QuanZhan},
     { path: '/pai-hang/dong-hua', component: DongHua},
     { path: '/pai-hang/fan', component: Fan},
     { path: '/pai-hang/guo-chuang', component: GuoChuang}
]
// 配置路由
const router = new VueRouter({
  routes
});
// 程序初始运行时,路由的初始设置
// 在这里初始去加载 主页面
router.push('/shou-ye')

// 快速点击
FastClick.attach(document.body)

// 创建vue实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

var html=document.documentElement;
var calcRem=function(){
  // 获取可是页面的宽度
  var w=html.clientWidth;
  if(w<=320){
     html.style.fontSize='10px';
  }else if(w<640){
     html.style.fontSize=w/32+'px';
  }else{
     html.style.fontSize='20px';
  }
  console.log('w='+w+' fontSize='+html.style.fontSize);
}
calcRem()
// 根据屏幕的大小设置html文字的大小，在页面中设置视图大小，文字大小时
// 采用rem为单位，适配不同大小屏幕的手机
// rem：相对于html标签文字的大小
// 当屏幕宽度大小发生变化时。重新计算html标签的文字大小
window.onresize=function(){
     calcRem()
}
