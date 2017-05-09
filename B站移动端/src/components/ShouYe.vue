<template>
    <div>
       <div class="header">
            <img src="../assets/img/logo.png" style="height:25px;margin-top:7px;margin-left:20px;">
            <div class="tubiao">
                <img src="../assets/img/seach.png" alt="" style="width:22px;height:22px">
                <img src="../assets/img/history.png" alt="" style="width:22px;height:22px">
            </div>
        </div>
        <!--轮播图-->
        <swiper auto loop dots-position="center" style="height:10rem">
            <SwiperItem><img :src=" pic[0].pic" alt="" style="width:100%"></SwiperItem>
            <SwiperItem><img :src=" pic[1].pic" alt="" style="width:100%"></SwiperItem>
            <SwiperItem><img :src=" pic[2].pic" alt="" style="width:100%"></SwiperItem>
            <SwiperItem><img :src=" pic[3].pic" alt="" style="width:100%"></SwiperItem>
            <SwiperItem><img :src=" pic[4].pic" alt="" style="width:100%"></SwiperItem>
        </swiper>
        
        <tack-nav :list="list" :body="body"></tack-nav>
    </div>
</template>
<script>
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider,Scroller } from 'vux'
    import TackNav from './shouye/TackNav.vue'
    export default {
        name: 'tack-out',
        components: {
            Scroller,
            TackNav,
            Swiper,
            SwiperItem
        },
        data() {
            return {
               list:[],
               pic:[],
               body:[]
            }
        },


        methods: {
            hot() {
                console.log('获取地址');
                this.$http.get('http://www.bilibili.com/index/ranking-3day.json')
                    .then(function (res) {
                        console.log(res);
                        this.list=res.data.recommend.list
                    }, function (err) {
                        console.log(err);
                    })
            },
            // 轮播图数据
            lun(){
                console.log('获取地址');
                this.$http.get('http://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695')
                    .then(function (res) {
                        console.log(res);
                        this.pic=res.body.data
                    }, function (err) {
                        console.log(err);
                    })
            },
            much(){
                // http://m.bilibili.com/index/ding.html
                console.log('获取地址');
                this.$http.get('http://m.bilibili.com/index/ding.html')
                    .then(function (res) {
                        console.log(res);
                        this.body=res.body
                    }, function (err) {
                        console.log(err);
                    })
            }
    
        },
        mounted() {
            this.hot(),
            this.lun(),
            this.much()
        },

    }

</script>
<style scoped>
   .header{
        height: 40px;
        background-color:white;
        border-bottom: 1px solid #ccc;
    }
    .tubiao{
        height: 100%;
        width: 80px;
        float:right;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    i{
        margin-top: 3px;
        color: #ccc;
    }
    .remen{
        background-color: white;
        margin-top: 5px;
        line-height: 40px;
    }
    .tou{
        font-size: 0.9em;
    }
    .icon{
        background-image: url(../assets/img/ui_3@2x.png);
    }
    .i1{
        background-size: 274px 228px;
        height: 40px;
        width: 35px;
    }
</style>