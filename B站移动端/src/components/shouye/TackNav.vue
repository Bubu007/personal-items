<template>
    <div class="root">
        <!--{{list[0]}}-->
        <!--排行榜-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon hot"></div>
                <span style="line-height: 35px">热门推荐</span>
            </div>
            <div style="display: flex">
                <div class="icon pai"></div>
                <span style="color:#FFC133;line-height: 35px">排行榜</span>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <!--:src="list[0].pic" 传值-->
                <img :src="list[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{list[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{list[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{list[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="list[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{list[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{list[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{list[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="list[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{list[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{list[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{list[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="list[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{list[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{list[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{list[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>
      

      <!--直播-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon live"></div>
                <span style="line-height: 35px">正在直播</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多直播</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img src="../../assets/img/1.jpg"
                     alt=""
                     id="tu">
                <div style="display: flex;">
                    <div>
                        <img src="../../assets/img/tou1.jpg"
                             alt=""
                             style="width: 38px;height: 38px;border-radius: 50%;margin-top: -2.2rem;margin-left: 4px;">
                        <div style="width: 3.5rem;height: 2rem;background-color: #ccc;border-radius: 8px;text-align: center;line-height: 2rem;font-size: 1.1rem;color:white">4.1万</div>
                    </div>
                    <div style="font-size: 1.1rem;margin-left: 1rem;">
                        <div>宫本狗雨</div>
                        <div style="color:#aaa;">(つД`)菜狗要发飙了</div>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../assets/img/2.jpg"
                     alt=""
                     id="tu">
                <div style="display: flex;">
                    <div>
                        <img src="../../assets/img/tou2.jpg"
                             alt=""
                             style="width: 38px;height: 38px;border-radius: 50%;margin-top: -2.2rem;margin-left: 4px;">
                        <div style="width: 3.5rem;height: 2rem;background-color: #ccc;border-radius: 8px;text-align: center;line-height: 2rem;font-size: 1.1rem;color:white">7137</div>
                    </div>
                    <div style="font-size: 1.1rem;margin-left: 1rem;">
                        <div>啾啾❤安安</div>
                        <div style="color:#aaa;">声控小姐姐</div>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../assets/img/3.jpg"
                     alt=""
                     id="tu">
                <div style="display: flex;">
                    <div>
                        <img src="../../assets/img/tou3.jpg"
                             alt=""
                             style="width: 38px;height: 38px;border-radius: 50%;margin-top: -2.2rem;margin-left: 4px;">
                        <div style="width: 3.5rem;height: 2rem;background-color: #ccc;border-radius: 8px;text-align: center;line-height: 2rem;font-size: 1.1rem;color:white">4.1万</div>
                    </div>
                    <div style="font-size: 1.1rem;margin-left: 1rem;">
                        <div>Nino学长</div>
                        <div style="color:#aaa;">随便唱几首</div>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../assets/img/4.jpg"
                     alt=""
                     id="tu">
                <div style="display: flex;">
                    <div>
                        <img src="../../assets/img/tou4.jpg"
                             alt=""
                             style="width: 38px;height: 38px;border-radius: 50%;margin-top: -2.2rem;margin-left: 4px;">
                        <div style="width: 3.5rem;height: 2rem;background-color: #ccc;border-radius: 8px;text-align: center;line-height: 2rem;font-size: 1.1rem;color:white">2725</div>
                    </div>
                    <div style="font-size: 1.1rem;margin-left: 1rem;">
                        <div>米饭</div>
                        <div style="color:#aaa;">妮可妮可妮</div>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--番剧更新-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon fan"></div>
                <span style="line-height: 35px">番剧更新</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <div class="geshi" >
                <img src="../../assets/img/tu1.jpg" alt="" id="tu1">
                <span>自由之翼 第二季...</span>
                <span style="color:#E792AC;line-height: 0.5rem;">更新至第5话</span>
            </div>
            <div class="geshi" >
                <img src="../../assets/img/tu2.jpg" alt="" id="tu1">
                <span>甜甜私房猫 第三...</span>
                <span style="color:#E792AC;line-height: 0.5rem;">更新至第7话</span>
            </div>
            <div class="geshi" >
                <img src="../../assets/img/tu3.jpg" alt="" id="tu1">
                <div>埃罗芒老师</div>
                <span style="color:#E792AC;line-height: 0.5rem;">更新至第4话</span>
            </div>
            <div class="geshi" style="margin-top: 25px;">
                <img src="../../assets/img/tu4.jpg" alt="" id="tu1">
                <div>阿童木起源</div>
                <span style="color:#E792AC;line-height: 0.5rem;">更新至第3话</span>
            </div>
            <div class="geshi" style="margin-top: 25px;">
                <img src="../../assets/img/tu5.jpg" alt="" id="tu1">
                <div>Re:CREATORS</div>
                <span style="color:#E792AC;line-height: 0.5rem;">更新至第4话</span>
            </div>
            <div class="geshi" style="margin-top: 25px;">
                <img src="../../assets/img/tu1.jpg" alt="" id="tu1">
                <span>热诚传说 第二季...</span>
                <span style="color:#E792AC;line-height: 0.5rem;">更新至第26话</span>
            </div>
        </ul>
        <div style="height:30px"></div>
        </div>


        <!--国创-->
        <!--{{body.guochuang}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img src="../../assets/img/guo.png" alt="">
                </div>
                <span style="line-height: 35px">国创区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.guochuang[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.guochuang[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.guochuang[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.guochuang[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.guochuang[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.guochuang[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.guochuang[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.guochuang[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.guochuang[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.guochuang[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.guochuang[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.guochuang[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.guochuang[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.guochuang[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.guochuang[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.guochuang[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>

        <!--动画-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon dong"></div>
                <span style="line-height: 35px">动画区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img src="../../assets/img/dong1.jpg"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">几分钟了解 科普Saber众多形态,深度解析Fate小知识</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;3.9万</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;1414</span>
                    </div>
                </div>
            </li>
           <li>
                <img src="../../assets/img/dong2.jpg"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">【阴阳师手书】数 【历史向】</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                         <span>&nbsp;2.6万</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;450</span>
                    </div>
                </div>
            </li>
           <li>
                <img src="../../assets/img/dong4.jpg"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">【黑执事】来自23世纪的托兰西竟然是夏尔和塞巴斯的？？？伊克斯哭死米？？？？</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;2.7万</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;1150</span>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../assets/img/dong3.jpg"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">『全职高手见面会-成都站』宝木老师好害羞啊</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;3089</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;22</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>

        <!--音乐区-->
        <!--{{body.music}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon music"></div>
                <span style="line-height: 35px">音乐区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.music[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.music[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.music[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.music[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.music[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.music[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.music[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.music[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.music[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.music[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.music[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.music[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.music[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.music[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.music[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.music[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>

        <!--舞蹈区-->
        <!--{{body.dance}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon dance"></div>
                <span style="line-height: 35px">舞蹈区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.dance[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.dance[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.dance[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.dance[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.dance[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.dance[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.dance[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.dance[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.dance[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.dance[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.dance[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.dance[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.dance[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.dance[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.dance[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.dance[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--游戏区-->
        <!--{{body.game}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon game"></div>
                <span style="line-height: 35px">游戏区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.game[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.game[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.game[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.game[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.game[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.game[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.game[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.game[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.game[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.game[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.game[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.game[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.game[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.game[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.game[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.game[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--科技区-->
        <!--{{body.technology}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon technology"></div>
                <span style="line-height: 35px">科技区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.technology[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.technology[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.technology[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.technology[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.technology[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.technology[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.technology[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.technology[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.technology[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.technology[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.technology[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.technology[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.technology[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.technology[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.technology[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.technology[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--生活区-->
        <!--{{body.life}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img src="../../assets/img/life.png" alt="" style="height: 20px;width: 20px;">
                </div>&nbsp;
                <span style="line-height: 35px">生活区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.life[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.life[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.life[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.life[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.life[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.life[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.life[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.life[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.life[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.life[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.life[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.life[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.life[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.life[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.life[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.life[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--时尚区-->
        <!--{{body.fashion}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img src="../../assets/img/fashion.png" alt="" style="height: 20px;width: 20px;">
                </div>&nbsp;
                <span style="line-height: 35px">时尚区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.fashion[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.fashion[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                   <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.fashion[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.fashion[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.fashion[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.fashion[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.fashion[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.fashion[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.fashion[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.fashion[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.fashion[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.fashion[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.fashion[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.fashion[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.fashion[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.fashion[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--娱乐区-->
        <!--{{body.ent}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img src="../../assets/img/ent.png" alt="" style="height: 20px;width: 20px;">
                </div>&nbsp;
                <span style="line-height: 35px">娱乐区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.ent[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.ent[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.ent[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.ent[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.ent[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.ent[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.ent[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.ent[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.ent[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.ent[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.ent[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.ent[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.ent[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.ent[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.ent[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.ent[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--电视剧区-->
        <!--{{body.teleplay}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon teleplay"></div>
                <span style="line-height: 35px">电视剧区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.teleplay[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.teleplay[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.teleplay[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.teleplay[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.teleplay[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.teleplay[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.teleplay[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.teleplay[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.teleplay[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.teleplay[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.teleplay[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.teleplay[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.teleplay[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.teleplay[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.teleplay[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.teleplay[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--电影区-->
        <!--{{body.movie}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div class="icon movie"></div>
                <span style="line-height: 35px">电影区</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.movie[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.movie[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.movie[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.movie[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.movie[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.movie[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.movie[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.movie[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.movie[2].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.movie[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.movie[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.movie[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.movie[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.movie[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.movie[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.movie[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </div>


        <!--广告区-->
        <!--{{body.ad}}-->
        <div class="bg">
            <div class="head">
            <div style="display: flex;margin-left: 10px;">
                <div  style="display: flex;align-items: center;">
                    <img src="../../assets/img/ad.png" alt="" style="height: 20px;width: 20px;">
                </div>&nbsp;
                <span style="line-height: 35px">广告</span>
            </div>
            <div style="display: flex">
                <div style="color:#aaa;line-height: 35px">查看更多更新</div>
                <div class="icon more"></div>
                <div style="width:10px;"></div>
            </div>
        </div>
        <ul>
            <li>
                <img :src="body.ad[0].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.ad[0].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.ad[0].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.ad[0].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.ad[1].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.ad[1].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.ad[1].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.ad[1].video_review | number}}</span>
                    </div>
                </div>
            </li>
           <li>
                <img :src="body.ad[2].pic"
                     alt=""
                     id="tu" >
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.ad[2].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.ad[2].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.ad[2].video_review | number}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img :src="body.ad[3].pic"
                     alt=""
                     id="tu">
                <p style="width: 14rem;height:3rem;font-size: 1.3rem;overflow: hidden;line-height: 1.5rem;">{{body.ad[3].title}}</p>
                <div style="display: flex;align-items: center;font-size: 1.1rem;color:#aaa">
                    <div class="wenben">
                        <div class="tu i1"></div>
                        <span>&nbsp;{{body.ad[3].play | number}}</span>
                    </div>
                    <div class="wenben">
                        <div class="tu i2"></div>
                        <span>&nbsp;{{body.ad[3].video_review | number}}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div style="height:3rem"></div>
        </div>







        <!--底部-->
        <div class="di">
            <div class="di1">
                <img src="../../assets/img/pc.png" alt="" id="di2">
                &nbsp;
                <div style="">电脑版</div>
            </div>
            <div class="shuxian"></div>
            <div class="di1">
                <img src="../../assets/img/phone.png" alt="" id="di2">
                &nbsp;
                <div>客户端</div>
            </div>
            <div class="shuxian"></div>
            <div class="di1">
                <a href="javascript:window.scrollTo( 0, 0 );" class="di1">
                    <img src="../../assets/img/top .png" alt="" id="di2">
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
import { Rater, Group, Cell, Range } from 'vux'
import Vue from 'vue'
 // 全局过滤器
Vue.filter('number',function(value){
    if(value >= 10000){
        return (value/10000).toFixed(1)+'万'
    }else{
        return value
    }
});
export default {
    name: 'reco-shops',
    props: ['list','body'],
    components: {
        Rater,
        Group,
        Cell,
        Range
    },
    data() {
        return {

        }
    },
}

</script>
<style scoped>
.icon {
    background: url(../../assets/img/index@2x.png);
    width: 30px;
    height: 30px;
    background-size: 100% 1550%;
    
}
.bg{
    background-color: white;
}
.head {
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.hot {
    background-position: 0 -700%;
}

.pai {
    background-position: 0 -200%;
}

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
}

li {
    width: 14rem;
    height: 14rem;
    margin-top: 10px;
    border-radius: 8px;
}

#tu {
    width: 14rem;
    border-radius: 8px;
    height:8rem;
}

.tu {
    width: 20px;
    height: 15px;
}

.i1 {
    background: url(../../assets/img/i2.png);
    background-size: 100% 100%;
}

.i2 {
    background: url(../../assets/img/i1.png);
    background-size: 100% 100%;
}
.wenben{
    display: flex;
    width: 9rem;
    align-items: center;
}
.live {
    background-position: 0 -500%;
}

.more {
    background-position: 0 -1300%;
}
.fan{
    background-position: 0 -1200%;
}
.geshi{
    width: 9.5rem;
    height: 16.2rem;
    border-radius: 8px;
    text-align: center;
    margin-top: 10px;
    font-size: 1.1rem;
}
#tu1{
    width: 9.5rem;
    border-radius: 8px;
}

.dong{
    background-position: 0 -1000%;
}
.music{
    background-position: 0 -300%;
}
.dance{
    background-position: 0 -1100%;
}
.game{
    background-position: 0 -800%;
}
.technology{
    background-position: 0 -100%;
}
.movie{
    background-position: 0 -400%;
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