<template>
    <div>
        <div class="header">
            <img src="../assets/img/logo.png" style="height:25px;margin-top:7px;margin-left:20px;">
            <div class="tubiao">
                <img src="../assets/img/seach.png"
                     alt=""
                     style="width:22px;height:22px">
                <img src="../assets/img/history.png"
                     alt=""
                     style="width:22px;height:22px">
            </div>
        </div>

        <div class="message">
            <img src="../assets/img/touxiang.png" alt="" style="width:60px;height:60px">
            <div class="message1">
                <div class="youke">
                    <b>游客</b>
                </div>
                <div style="line-height: 3rem">硬币:-</div>
            </div>
        </div>
        
        <div class="yangshi">
            <a href="" class="lishi">
                <img src="../assets/img/history1.png" alt="" style="width:22px;height:22px">
                <div style="width:24rem;margin-left: 1rem;">历史记录</div>
                <i class="fa fa-angle-right" style="font-size: 2rem;color:#ccc"></i>
            </a>
        </div>
        <div class="wenzi">登陆后可以同步播放记录哦~</div>
        <div class="yangshi" style="line-height:4rem;font-size: 1.4rem;text-align: center;margin-top:40px">
            登&#x3000;录
        </div>
        <div class="yangshi" style="line-height:4rem;font-size: 1.4rem;text-align: center;color:#de698c">
            注&#x3000;册
        </div>
        <div class="wenzi">据说用客户端注册可以减少答题哟~</div>


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







        <div style="height:4.2rem"></div>

        </div>
</template>
<script>
export default {

    name: 'message',
    data() {
        return {
            show: false,
        }
    },
    methods: {


    }
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
    .message{
        margin-top: 20px;
        height: 8rem;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .message1{
        margin-left: -30px;

        height: 60px;
        width: 21rem;
    }
    .youke{
        font-size: 1.5rem;   
    }
    .yangshi{
        margin-top: 15px;
        height: 4rem;
        background-color: white;
    }
    .lishi{
        margin: 0 auto;
        display: block;
        width: 27rem;
        height: 4rem;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
    }
    .wenzi{
        color: gray;
        font-size: 1.2rem;
        text-align: center;
        margin-top: 15px;
    }
    /*底部样式*/
.di{
    display: flex;
    height: 4.2rem;
    justify-content: space-between;
    text-align: center;
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
    color:#aaa;
    text-align: center;
    margin: 15px 0 15px 0;
    margin-top: 0;
    font-size: 1.1rem;
}
</style>