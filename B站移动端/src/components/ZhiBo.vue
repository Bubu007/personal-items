<template>
    <div>
        <div class="header">
            <img src="../assets/img/logo.png" style="height:25px;margin-top:7px;margin-left:20px;">
        </div>
        <!--轮播图-->
        <swiper auto loop dots-position="center" style="height:10rem">
            <SwiperItem><img :src=" banner[0].img" alt="" style="width:100%"></SwiperItem>
            <SwiperItem><img :src=" banner[1].img" alt="" style="width:100%"></SwiperItem>
            <SwiperItem><img :src=" banner[2].img" alt="" style="width:100%"></SwiperItem>
        </swiper>

        <!--绘画专区-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[0].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">绘画专区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="hua[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{hua[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{hua[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{hua[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="hua[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{hua[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{hua[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{hua[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="hua[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{hua[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{hua[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{hua[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="hua[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{hua[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{hua[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{hua[3].online}}</span>
                </div>
            </li>
        </ul>
        </div>


        <!--生活娱乐-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[1].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">生活娱乐</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="fun[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{fun[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{fun[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{fun[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="fun[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{fun[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{fun[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{fun[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="fun[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{fun[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{fun[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{fun[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="fun[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{fun[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{fun[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{fun[3].online}}</span>
                </div>
            </li>
        </ul>
        </div>


        <!--唱见舞见-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[1].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">唱见舞见</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="dance[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{dance[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{dance[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{dance[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="dance[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{dance[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{dance[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{dance[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="dance[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{dance[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{dance[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{dance[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="dance[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{dance[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{dance[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{dance[3].online}}</span>
                </div>
            </li>
        </ul>
        </div>


        <!--手游直播-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[3].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">手游直播</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="shouyou[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{shouyou[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{shouyou[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{shouyou[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="shouyou[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{shouyou[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{shouyou[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{shouyou[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="shouyou[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{shouyou[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{shouyou[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{shouyou[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="shouyou[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{shouyou[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{shouyou[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{shouyou[3].online}}</span>
                </div>
            </li>
        </ul>
        </div>


        <!--单机联机-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[3].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">网络游戏</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="danji[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{danji[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{danji[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{danji[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="danji[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{danji[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{danji[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{danji[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="danji[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{danji[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{danji[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{danji[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="danji[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{danji[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{danji[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{danji[3].online}}</span>
                </div>
            </li>
        </ul>
        </div>


        <!--网游-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[2].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">单机联机</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="wangyou[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{wangyou[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{wangyou[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{wangyou[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="wangyou[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{wangyou[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{wangyou[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{wangyou[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="wangyou[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{wangyou[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{wangyou[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{wangyou[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="wangyou[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{wangyou[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{wangyou[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{wangyou[3].online}}</span>
                </div>
            </li>
        </ul>
        </div>

        <!--电竞-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[4].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">电子竞技</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="dianjing[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{dianjing[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{dianjing[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{dianjing[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="dianjing[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{dianjing[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{dianjing[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{dianjing[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="dianjing[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{dianjing[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{dianjing[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{dianjing[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="dianjing[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{dianjing[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{dianjing[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{dianjing[3].online}}</span>
                </div>
            </li>
        </ul>
        </div>

        <!--御宅文化-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[1].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">御宅文化</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="zhai[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{zhai[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{zhai[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{zhai[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="zhai[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{zhai[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{zhai[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{zhai[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="zhai[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{zhai[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{zhai[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{zhai[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="zhai[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{zhai[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{zhai[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{zhai[3].online}}</span>
                </div>
            </li>
        </ul>
        </div>

        <!--放映厅-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img :src="icon[1].entrance_icon.src" alt="" style="width:20px;height:20px">
                </div>
                &nbsp;
                <span style="line-height: 35px">放映厅</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">进去看看</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="fangying[0].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{fangying[0].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{fangying[0].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{fangying[0].online}}</span>
                </div>
            </li>
           <li>
                <img :src="fangying[1].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{fangying[1].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{fangying[1].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{fangying[1].online}}</span>
                </div>
            </li>
           <li>
                <img :src="fangying[2].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{fangying[2].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{fangying[2].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{fangying[2].online}}</span>
                </div>
            </li>
            <li>
                <img :src="fangying[3].cover.src"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{fangying[3].title}}</p>
                <div style="display: flex;align-items: center;font-size:0.8rem;color:#fff;margin-top: -5.5rem;">
                    <div style="width:0.5rem"></div>
                    <div style="height:1.5rem;width:8.5rem;overflow:hidden;">{{fangying[3].owner.name}}</div>
                    <div class="tu i2" style=""></div>
                    <span>&nbsp;{{fangying[3].online}}</span>
                </div>
            </li>
        </ul>
        <div class="anniu">
            <div class="anniu1">
                全部直播
            </div>
            <div class="anniu1">
                全部分类
            </div>
        </div>
        <div style="height:0.5rem"></div>
        </div>

        <div class="di">
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
import { Swiper, GroupTitle, SwiperItem, XButton, Divider,Scroller } from 'vux'
export default {
    name: 'order',
    components: {
        Swiper,
        SwiperItem
    },
    data() {
        return {
            banner:[],
            icon:[],
            hua:[],
            fun:[],
            dance:[],
            shouyou:[],
            danji:[],
            wangyou:[],
            dianjing:[],
            zhai:[],
            fangying:[]
        }
    },


    methods: {
        live() {
            console.log('获取地址');
            this.$http.get('http://api.live.bilibili.com/AppIndex/home?device=phone&platform=ios&scale=3&build=10000')
                .then(function (res) {
                    console.log(res);
                    this.banner=res.body.data.banner
                    this.icon=res.body.data.entranceIcons
                    this.hua=res.body.data.partitions[0].lives
                    this.fun=res.body.data.partitions[1].lives
                    this.dance=res.body.data.partitions[2].lives
                    this.shouyou=res.body.data.partitions[3].lives
                    this.danji=res.body.data.partitions[4].lives
                    this.wangyou=res.body.data.partitions[5].lives 
                    this.dianjing=res.body.data.partitions[6].lives
                    this.zhai=res.body.data.partitions[7].lives
                    this.fangying=res.body.data.partitions[8].lives
                }, function (err) {
                    console.log(err);
                })
        }

    },
    mounted() {
        this.live()
    },

}
</script>
<style scoped>
.header {
    height: 40px;
    background-color: white;
    border-bottom: 1px solid #ccc;
    
}
.head {
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.icon {
    background: url(../assets/img/index@2x.png);
    width: 30px;
    height: 30px;
    background-size: 100% 1550%;
    
}
.bg{
    background-color: white;
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
}

li {
    width: 14rem;
    height: 12.2rem;
    margin-top: 10px;
}

#tu {
    width: 14rem;
}

.tu {
    width: 20px;
    height: 15px;
}
.more {
    background-position: 0 -1300%;
}
.i2 {
    background: url(../assets/img/i2.png);
    background-size: 100% 100%;
}
.anniu{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.anniu1{
    height: 3rem;
    width: 14rem;
    border: 1px solid #eee;
    text-align: center;
    line-height: 3rem;
    border-radius: 5px;
    font-size: 1.1rem;
    color: #FB7299;
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
    width: 16rem;
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

