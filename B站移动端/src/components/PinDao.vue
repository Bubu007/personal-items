<template>
<div>
    <!--头部-->
        <div class="header">
            <img src="../assets/img/logo.png" style="height:25px;margin-top:7px;margin-left:20px;">
            <div class="tubiao">
                <img src="../assets/img/seach.png" alt="" style="width:22px;height:22px">
                <img src="../assets/img/history.png" alt="" style="width:22px;height:22px">
            </div>
            <!--下边分类-->
            <ul style="">
                <li>
                    <div class="icon i1"></div>
                    <div class="name">
                        直播
                    </div>
    
                </li>
                <li>
                    <div class="icon i2">
                        <div class="biaozhu">80</div>
                    </div>
                    <div class="name">番剧</div>
                </li>
                <li>
                    <div class="guochuang">
                        <div class="biaozhu1">99+</div>
                    </div>   
                    <div>
                        国创
                    </div>
                </li>
                <li>
                    <div class="icon i3">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div class="name">动画</div>
                </li>
                <li>
                    <div class="icon i4">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div class="name">音乐</div>
                </li>
                <li>
                    <div class="icon i5">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div class="name">舞蹈</div>
                </li>
                <li>
                    <div class="icon i6">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div class="name">游戏</div>
                </li>
                <li>
                    <div class="icon i7">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div class="name">科技</div>
                </li>
                <li>
                    <div class="life">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div>生活</div>
                </li>
                <li>
                    <div class="icon i8">
                        <div class="biaozhu">84</div>
                    </div>
                    <div class="name">鬼畜</div>
                </li>
                <li>
                    <div class="fun">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div>娱乐</div>
                </li>
                <li>
                    <div class="icon i9">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div class="name">电影</div>
                </li>
                <li>
                    <div class="icon i10">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div class="name">电视剧</div>
                </li>
                <li>
                    <div class="icon i11">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div class="name">时尚</div>
                </li>
                <li>
                    <div class="ad">
                        <div class="biaozhu1">99+</div>
                    </div>
                    <div>广告</div>
                </li>



                <div class="di">
            <div class="di1">
                <img src="../assets/img/pc.png" alt="" id="di2">
                &nbsp;
                <div style="">电脑版</div>
            </div>
            <div class="shuxian"></div>
            <div class="di1">
                <img src="../assets/img/phone.png" alt="" id="di2">
                &nbsp;
                <div>客户端</div>
            </div>
            <div class="shuxian"></div>
            <div class="di1">
                <a href="javascript:window.scrollTo( 0, 0 );" class="di1">
                    <img src="../assets/img/top .png" alt="" id="di2">
                    &nbsp;
                    <div>返回顶部</div>
                </a>
            </div>
        </div>


        <div class="wen">
                哔哩哔哩 沪ICP备13002172号-3
         </div>
         <div class="wen">
            信息网络传播视听节目许可证：0910417
         </div>








                <div style="height:7rem"></div>
            </ul>
            
        </div>
    
      















</div>
</template>
<script>
import {Group,Cell} from 'vux'
export default {
    name:'news',
    components:{
        Group,
        Cell,
    }
}
</script>
<style scoped>
    .header {
    height: 40px;
    background-color: white;
    border-bottom: 1px solid #ccc;
}

.tubiao {
        height: 100%;
        width: 80px;
        float:right;
        display: flex;
        justify-content: space-around;
        align-items: center;
}

i {
    margin-top: 3px;
    color: #ccc;
}

ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

li {
    width: 33%;
    height: 33%;
    text-align: center;
    margin-top: 15px;
    font-size: 0.8rem
}

.icon {
    background: url(../assets/img/ui_3@2x.png);
    width: 70px;
    height: 70px;
    background-size: 400% 330%;
    margin: 0 auto;
}

#icon {
    width: 70px;
    height: 70px;
    margin: 0 auto;
}

.name {
    margin-top: 7px;
}

.i1 {
    background-position: -200% 0;
}

.i2 {
    background-position: -300% -200%;
}

.i3 {
    background-position: -300% 0;
}

.i4 {
    background-position: 0 -100%;
}

.i5 {
    background-position: -300% -100%;
}

.i6 {
    background-position: 0 -201%;
}

.i7 {
    background-position: -100% 0;
}

.i8 {
    background-position: -200% -100%;
}

.i9 {
    background-position: -100% -100%;
}

.i11 {
    background-position: -100% -201.2%;
}
.guochuang{
    background: url(../assets/img/channel_guoman@2x.png);
    width: 70px;
    height: 70px;
    background-size: 100% 100%;
    margin: 0 auto;
}
.life{
    background: url(../assets/img/channel_life@2x.png);
    width: 70px;
    height: 70px;
    background-size: 100% 100%;
    margin: 0 auto;
}
.fun{
    background: url(../assets/img/channel_ent@2x.png);
    width: 70px;
    height: 70px;
    background-size: 100% 100%;
    margin: 0 auto;
}
.ad{
    background: url(../assets/img/channel_advertise@2x.png);
    width: 70px;
    height: 70px;
    background-size: 100% 100%;
    margin: 0 auto;
}
.biaozhu{
    background-color: #ccc;
    color: #fff;
    width: 2rem;
    border-radius: 8px;
    height: 1.3rem;
    line-height: 1.3rem;
    margin-left: 4rem
}
.biaozhu1{
    background-color: #ccc;
    color: #fff;
    width: 2.6rem;
    border-radius: 8px;
    height: 1.3rem;
    line-height: 1.3rem;
    margin-left: 3.2rem
}
/*底部样式*/
.di{
    display: flex;
    height: 4.2rem;
    justify-content: space-between;
    text-align: center;
    margin-top: 20px;
    font-size: 1.1rem;
    align-items: center;
}
.di1{
    width: 10rem;
    height: 4.2rem;
    line-height: 4.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
#di2{
    width: 20px;
    height: 20px;
}
.shuxian{
    height: 1.4rem;
    width: 1px;
    background-color: gray;
}
.wen{
    width: 100%;
    color:#aaa;
    text-align: center;
    margin: 15px 0 15px 0;
    margin-top: 0;
}
</style>