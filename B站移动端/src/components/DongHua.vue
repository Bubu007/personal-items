<template>
<div class="root">
    <div class="header">
        <a href="shou-ye" class="fa fa-angle-left"></a> 
        <p class="wenzi">排行榜</p>
        <div class="box">下载客户端</div>
    </div>
    <div style="height:5rem"></div>
    <!--前3个-->
    <div class="model">
        <div class="count">
            <img src="../assets/img/rank1.png" alt="" id="san">
        </div>
        <img :src="san[0].pic" alt="" id="tu">
        <div class="wenben">
            <div class="title">{{san[0].title}}</div>
            <div class="name">
                <img src="../assets/img/ico_up.png" alt="" id="up">
                {{san[0].author}}
            </div>
            <div class="shuju">
                <div class="shuju1">
                    <img src="../assets/img/ico_play.png" alt="" id="up">
                    {{san[0].play | number}}
                </div>
                <div class="shuju1">
                    <img src="../assets/img/ico_danmu.png" alt="" id="up">
                    {{san[0].video_review | number}}
                </div>
            </div>
        </div>
    </div>
    <div class="model">
        <div class="count">
            <img src="../assets/img/rank2.png" alt="" id="san">
        </div>
        <img :src="san[1].pic" alt="" id="tu">
        <div class="wenben">
            <div class="title">{{san[1].title}}</div>
            <div class="name">
                <img src="../assets/img/ico_up.png" alt="" id="up">
                {{san[1].author}}
            </div>
            <div class="shuju">
                <div class="shuju1">
                    <img src="../assets/img/ico_play.png" alt="" id="up">
                    {{san[1].play | number}}
                </div>
                <div class="shuju1">
                    <img src="../assets/img/ico_danmu.png" alt="" id="up">
                    {{san[1].video_review | number}}
                </div>
            </div>
        </div>
    </div>
    <div class="model">
        <div class="count">
            <img src="../assets/img/rank3.png" alt="" id="san">
        </div>
        <img :src="san[2].pic" alt="" id="tu">
        <div class="wenben">
            <div class="title">{{san[2].title}}</div>
            <div class="name">
                <img src="../assets/img/ico_up.png" alt="" id="up">
                {{san[2].author}}
            </div>
            <div class="shuju">
                <div class="shuju1">
                    <img src="../assets/img/ico_play.png" alt="" id="up">
                    {{san[2].play | number}}
                </div>
                <div class="shuju1">
                    <img src="../assets/img/ico_danmu.png" alt="" id="up">
                    {{san[2].video_review | number}}
                </div>
            </div>
        </div>
    </div>

    <!--后27个-->
    <div v-for="(item,index) in all" class="model">
        <div class="count">
            {{index+4}}
        </div>
        <img :src="item.pic" alt="" id="tu">
        <div class="wenben">
            <div class="title">{{item.title}}</div>
            <div class="name">
                <img src="../assets/img/ico_up.png" alt="" id="up">
                {{item.author}}
            </div>
            <div class="shuju">
                <div class="shuju1">
                    <img src="../assets/img/ico_play.png" alt="" id="up">
                    {{item.play | number}}
                </div>
                <div class="shuju1">
                    <img src="../assets/img/ico_danmu.png" alt="" id="up">
                    {{item.video_review | number}}
                </div>
            </div>
        </div>
    </div>
    <div class="anniu">
        下载bilibili客户端，查看完整榜单
    </div>
    <a v-if="xianshi == 'true'" href="javascript:window.scrollTo( 0, 0 );" class="totop"><img src="../assets/img/toTop.png" alt="" style="width:3rem;height:3rem"></a>





















        <div style="height:4.2rem"></div>

        <!--导航-->
        <transition name="tabbar">
      <tabbar v-show="show" style="position: fixed;bottom: 0;background-color:white" >
        <!--selected 默认选中wechat-->
        <tabbar-item link="/pai-hang/second" icon-class="info">
          <span slot="label">全站</span>
        </tabbar-item>
        <tabbar-item selected link="/pai-hang/dong-hua">
          <span slot="label">动画</span>
        </tabbar-item>
        <tabbar-item link="/pai-hang/fan">
          <span slot="label">番剧</span>
        </tabbar-item>
        <tabbar-item link="/pai-hang/guo-chuang">
          <span slot="label">国创</span>
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
    name:'second',
    // props: ['xianshi'],
    components: {
      Tabbar,
      TabbarItem
    },
    data(){
      return{
        // 从一级到二级、三级、...页面是否显示tabbar
        show:'true',
        all:[],
        san:[],
        xianshi:''
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
         console.log('toLevel='+toLevel);
         console.log('fromLevel='+fromLevel);

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
    },
    methods: {
        quanzhan() {
                console.log('获取地址');
                this.$http.get('http://m.bilibili.com/rank/all-3-1.json')
                    .then(function (res) {
                        console.log(res);
                        this.all=res.body.rank.list.slice(3,30)
                        this.san=res.body.rank.list.slice(0,3)
                    }, function (err) {
                        console.log(err);
                    })
            },
            // 页面滑动隐藏出现返回顶部图标
            scroll(){
                 var bodyH = document.body.clientHeight
                //顶部偏移量
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                //获取页面可是高度
                var windowH = document.documentElement.clientHeight
                 if (scrollTop > windowH) {
                    this.xianshi = 'true';
                    console.log(this.xianshi)
                } else {
                    this.xianshi = 'false'
                }

            }
    },
    mounted () {
        this.quanzhan(),
        this.scroll(),
        // 监听页面变化
        window.onscroll = this.scroll
    }
    
  }
  
</script>

<style scoped>
.root{
    width: 100%;
}
.header{
    width: 100%;
    background-color: white;
    height: 5rem;
    font-size: 1.2rem;
    color: #fb7299;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
}
.fa{
    font-size: 3rem;
    margin-left: 2rem;
    width: 20%;
}
.wenzi{
    width: 15rem;
    line-height: 5rem;
    text-align: center;
}
.box{
    border: 1px solid #fb7299;
    height: 2.5rem;
    width: 7rem;
    border-radius: 5px;
    text-align: center;
    line-height: 2.5rem;
}
/*模板*/
.model{
    height: 6.5rem;
    margin-top: 20px;
    display: flex;
}
#san{
    width: 2rem;
}
.count{
    width: 4rem;
    text-align: center;
    line-height: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
#tu{
    height: 6.5rem;
    border-radius: 5px;
}
.wenben{
    width: 14rem;
    margin-left: 1rem;
}
.title{
    font-size: 1.1rem;
    height: 3.2rem;
    overflow: hidden;
}
.name{
    height: 1.5rem;
    margin-top: 0.5rem;
    color: #999;
}
.shuju{
    height: 1.1rem;
    color: #999;
    display: flex;
}
#up{
    width: 1.1rem;
}
.shuju1{
    width: 7rem;
}
.anniu{
    background-color: #fb7299;
    color: #fff;
    height: 3rem;
    width:29rem;
    margin: 0 auto;
    border-radius: 3px;
    text-align: center;
    line-height: 3rem;
    margin-top: 20px;
    margin-bottom: 10px;
}
.totop{
    position: fixed;
    bottom: 94px;
    right:20px;
}
</style>