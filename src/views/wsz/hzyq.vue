<template>
    <div>

<!-- 导航 -->
<div id="body">
      <div id="body-a">
          <p id="body-1">猿林手机端
              <span id="misl">
                 <img data-v-50a0c7fc="" src="//static.clouderwork.com/static/new/images/header-app.png?4087ee75e95ef528781b508c14b807fa" id="p">
              </span>
          </p>
 
        <p id="kehu">
          客服
        </p>
       
       <div id="ui">
           <ul id="jk">
              <li>我是需求方</li>
              <li>我是服务方</li>
              <li>我的项目</li>
              <li>我的收藏</li>
              <li>通知</li>
           </ul>
        
          <i id="i"></i>

         <ul id="rr">
           <a href="/denglu"><li id="pe">登录</li></a>
           <a href="/zhuce"><li id="pe2">注册</li></a>
         </ul>


       </div>

      </div>
</div>

      <div id="key">
         <div id="key-a">
            <div id="null"></div>


            <ul id="ter">
             <li>首页</li>
             <li>在线商机</li>
             <li>企业版</li>
             <li>黄豆纳才</li>
             <li>解决方案</li>
             <li>合作园区</li>
             <li>估价器</li>
             <li>沃克学院</li>
             <li>资讯</li>
            </ul>

         </div>
      </div>

     <div id="minner">
         <div id="minner-x">
          <span></span>
          <h2>合作园区</h2>
         </div>

         <div id="banner">
            
             <!-- <img src="/src/assets/img/5.jpg" >  -->
             <div id="zhao">
              <h2 id="yunlin">申请猿林合作园区，享自由办公自由红利。</h2>

               <span id="mnb">
                   合作园区是为帮助猿林会员、自由职业者、创业者快速找到发展平台，顺应创新2.0用户创新、<br>
                   大众创新、开放创新、协同创新形式，汇聚全国各地创客空间、众客空间、创业孵化器、创业咖啡馆<br>
                   创业服务中心信息，以及创客空间的政策信息和入驻要求，快速找到最合适的办公场地。
               </span>
               <b id="b">平台入住热线0571-87791652</b>
             </div>
         </div>

     </div>
        
    <div id="diqu">
         <div id="diqu-1">
            <p id="suo">所选地区：</p>
            <!-- 组件  -->
            <el-cascader :options="options" :show-all-levels="false"></el-cascader>
         </div>
    </div>

   <div id="zhi">
         <div id="zhi-a">
           <!-- 接口 -->
            <div class="kong"> 
               <div id="zhi-b">
                <p id="zhi-img"></p>
                <h3 id="h3" title="">接口的数据</h3>
              
                <a id="vc">
                    <p id="hf">
                        <a >查看详情</a>
                    </p>

                   <p id="vc-z">
                     价格：面议
                   </p>
                  
                  <p id="vc-x">
                   接口的地址
                  </p>

                </a>
               </div>
            </div> 


         </div>
   </div>
 <!-- 分页 -->
            <div id="fenye">
                <div id="fenye-a">
                  <div id="anjian">
                        <p id="shang">上一页</p>
                        <p id="xia">下一页</p>
                  </div>
                </div>
            </div>

<!-- 尾部 -->
           <div id="footer">

            <div id="help">
                <div >
                    <span>关于我们</span>
                    <a id="a">认识猿林</a>
                    <a id="a1">猿林简介</a>
                    <a id="a2"></a>
                    <a id="a3"></a>
                </div>

                <div>
                      <span>协议与声明</span>
                    <a id="a">注册协议&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <a id="a1">用户协议&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <a id="a2">知识产权声明</a>
                    <a id="a3"></a>
                </div>

                <div>
                   <span>关于我们</span>
                    <a id="a">【项目众包】相关</a>
                    <a id="a1">【黄豆纳才】相关</a>
                    <a id="a2">【企业版】相关&nbsp;&nbsp;&nbsp;</a>
                    <a id="a3"></a>
                </div>

                <div>
                   <span>发现</span>
                    <a id="a">绩效管理工具</a>
                    <a id="a1">项目协作工具</a>
                    <a id="a2">成功案例&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    <a id="a3">下载App&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                </div>
            </div>
           </div>

           <!-- 版权 -->
           <div id="banquan">
               <p >人力资源服务许可证 京人社[2017] 110105717578号 | 增值电信业务经营许可证 京B2-20192450 | 京ICP备13050812号</p>
                <p >互联网出版许可证 京字第200号 | 高新企业证书 | 软件产品证书 | 软件企业证书 | 质量管理体系认证证书1 | 质量管理体系认证证书2</p>
                <p >网站地图 | © 2020 云族佳科技有限公司版权所有</p>

           </div>



 <!-- 返回顶部 -->





    </div>
</template>

<script>
  export default {
    //   组件
    data() {
      return {
        options: [{
          value: 'quanbu',
          label: '全部',
              children: [{
            value: 'beijing',
            label: '北京'
          }, {
            value: 'tianjin',
            label: '天津'
          }, {
            value: 'neimenggu',
            label: '内蒙古'
          },{
            value: 'hebei',
            label: '河北'
          },{
            value: 'shanxi',
            label: '山西'
          },{
            value: 'liaoning',
            label: '辽宁'
          }]
        }, 
        {
          value: 'beijing',
          label: '北京',

          children: [{
            value: 'beijing',
            label: '北京',
          }, ]

        },
         {
          value: 'tianjing',
          label: '天津',

          children: [{
            value: 'tianjing',
            label: '天津',
          }, ]

        },
        {
          value: 'hebei',
          label: '河北',
          children: [{
            value: 'shijiazhuang',
            label: '石家庄'
          }, {
            value: 'tangshan',
            label: '唐山'
          }, {
            value: 'qinhuangdao',
            label: '秦皇岛'
          }, {
            value: 'handan',
            label: '邯郸'
          }, {
            value: 'xingtai',
            label: '邢台'
          }, {
            value: 'baoding',
            label: '保定'
          }, {
            value: 'zhangjiakou',
            label: '张家口'
          }
          , {
            value: 'chengde',
            label: '承德'
          }, {
            value: 'langfang',
            label: '廊坊'
          }, {
            value: 'hengshui',
            label: '衡水'
          }, {
            value: 'cangzhou',
            label: '沧州'
          }
          
          
          ]
        }]
      };
    }
  };

</script>


<style>

/* 返回顶部 */
	


/* 返回顶部 */


#body{
    width: 100%;
    height: 40px;
    background: #fafafa;
}
#body-a{
        width: 1200px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    /* background-color: turquoise; */
}
#body-1{
    float: left;
    font-size: 12px;
    color: #666;
    letter-spacing: 2.25px;
    padding-left: 21px;
    /* background: url(//static.clouderwork.com/static/new/images/header-icon-app.png?23d7315…) no-repeat 0; */
    position: relative;
    width: 105px;
    height: 40px;
}
#body-1:hover{
    color:#409EFF ;
}
#misl{
     display: none;
    position: absolute;
    left: 0;
    top: 50px;
    border: 1px solid #ebebeb;
    padding: 10px;
    background: #fff;
    z-index: 3;
}
#p{
    width: 150px;
    height: 150px;
    display: block;
}
#body-1:hover #misl{
    display: block;
}
#kehu{
    margin-left: 29px;
    padding-left: 16px;
    background: url(//static.clouderwork.com/static/new/images/header-icon-service.png?111aafb…) no-repeat 0;
    width: 45px;
    height: 40px;
    color: #666;
    font-size: 12px;
    float: left;
    cursor: pointer;
}
 #kehu:hover{
    color:#409EFF ;
} 
#ui{
    float: right;
    width: 560px;
    height: 40px;
    /* background-color: yellowgreen; */
} 
#ui #jk{
 overflow: hidden;
    float: left;
    list-style: none;
    width: 402px;
    height: 40px;
    /* background-color: blanchedalmond; */
}
  #ui #jk li{
      list-style: none;
  }
  #ui #jk li:nth-child(1){
    float: left;
    font-size: 12px;
    color: #666;
    letter-spacing: 2.25px;
    cursor: pointer;
  } 
    #ui #jk li:nth-child(2){
       float: left;
    margin-left: 18px;
    font-size: 12px;
    color: #666;
    letter-spacing: 2.25px;
    cursor: pointer;
  }
      #ui #jk li:nth-child(3){
       float: left;
    margin-left: 18px;
    font-size: 12px;
    color: #666;
    letter-spacing: 2.25px;
    cursor: pointer;
  }
      #ui #jk li:nth-child(4){
       float: left;
    margin-left: 18px;
    font-size: 12px;
    color: #666;
    letter-spacing: 2.25px;
    cursor: pointer;
  }
        #ui #jk li:nth-child(5){
       float: left;
    margin-left: 18px;
    font-size: 12px;
    color: #666;
    letter-spacing: 2.25px;
    cursor: pointer;
    padding-left: 13px;
    background: url(//static.clouderwork.com/static/new/images/header-icon-notify.png?8f8f364…) no-repeat 0;
  }
    #ui #jk li:hover{
        color:#409EFF ;
    }
    #i{
    width: 1px;
    height: 14px;
    display: inline-block;
    /* float: left; */
    background: #999;
    margin: 13px 20px;
    margin-left: -10px;
    }
  #ui #rr{
    
    overflow: hidden;
    float: left;
    width: 115px;
    height: 40px;
    /* background-color: darkkhaki; */
    font-size: 12px;
    font-size: 12px;
    color: #666;
    letter-spacing: 2.25px;
    list-style: none;
    }
   #pe{
   float: left;
    width: 30px;
    height: 40px;
    cursor: pointer;
    }
      #pe:hover{
          color:#409EFF ;
      }
 #pe2{
    float: left;
    width: 30px;
    height: 40px;
    cursor: pointer;

    }
#pe2:hover{
    color:#409EFF ;
}
#key{
    width: 100%;
    height: 70px;
    /* background-color: khaki; */
    box-shadow: 0 1px 4px 0 hsla(0,0%,93%,.5);
}
#key-a{
    width:1200px;
    height: 70px;
    /* background-color:antiquewhite; */
    margin: 0px auto;
}
#null{
width: 152px;
    height: 57px;
    background-color: red;
    float: left;
    margin-top: 1px;
}
#ter{
   float: left;
    overflow: hidden;
    margin-left: 20px;
    width: 1028px;
    height: 70px;
    /* background-color: darkmagenta; */
    list-style: none;
}
#ter li:hover{
       color:#409EFF ;
}
#ter li{
    font-size: 14px;
    color: #333;
    letter-spacing: 1px;
    padding: 0 30px;
    cursor: pointer;
    display: block;
    position: relative;
    list-style: none;
    
    height: 70px;
    display: inline-block;
    text-align: center;
    line-height: 70px;
}
    /* 合作园区 */
#minner{
    width: 100%;
    height: 373px;
    /* background-color: turquoise; */
    position: relative;
    overflow: hidden;
}
#minner-x{
    width: 1200px;
    height: 33px;
    /* background-color: yellowgreen; */
    line-height: 33px; 
    margin-bottom: 30px;
    margin: 20px auto;
}
#minner-x span{
    width: 10px;
    height: 19px;
    background-color: #409EFF;
    display: inline-block;
}
#minner-x h2{
font-size: 26px;
    color: #409EFF;
    display: inline-block;
    margin-left: 10px;
    font-weight: 300;
}
#banner{
    width: 1200px;
    height: 300px;
    margin-bottom: 30px;
    background: url("../wsz/5.jpg") no-repeat; 
 
    /* background-color: orange; */
    background-size: cover;
    margin: auto
}   
#zhao{
   width: 1000px;
   height: 250px;
   background: rgba(0,0,0,.6);
   display: inline-block;
   margin-left: 100px;
   margin-top: 25px;
}
#yunlin{
   width: 800px;
   height: 50px;
   /* background-color: red; */
   display: inline-block;
   margin: auto;
   color: white;
   font-weight: 300;
    margin-left: 100px;
    text-align: center;
    line-height: 50px;
        margin-top: 35px;
}
#mnb{
   width: 650px;
   /* background-color: #409EFF; */
   color: white;
   margin-left: 175px;
   display: inline-block;
   font-size: 14px;
   line-height: 2;
   font-weight: 500;
   height: 100px;
}
#b{
 width: 650px;
   /* background-color: yellow; */
   color: white;
   margin-left: 175px;
   display: inline-block;
   font-size: 14px;
   line-height: 2;
   font-weight: 500;
   height: 30px;
    text-align: right;
    font-weight: 600;
}
#diqu{
    width: 100%;
    height: 40px;
    /* background-color: #999; */
}
#diqu-1{
    width: 1200px;
    height: 40px;
    /* background-color: hotpink; */
    margin:  30px auto;
}
#suo{
    font-size: 16px;
    color: #666;
    letter-spacing: 0;
    margin-right: 16px;
    display: inline-block;
    width: 80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: 300;
}
   /* 组件 */
.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 150px;
}
   /* 套接口 */
   #zhi{
       width: 100%;
       /* height: 500px; */
       margin-top:30px;
   }
   #zhi-a{
       width: 1200px;
       /* height: 500px; */
       margin: 0px auto;
       background-color: mediumpurple;
   }
   #zhi-b{
    display: inline-block;
    width: 275px;
    height: 294px;
    margin-right: 28px;
    position: relative;
    margin-bottom: 34px;
    border-radius: 4px;
    background-color: blanchedalmond;
   }
   #zhi-img{
    width: 275px;
    height: 252px;
    border-radius: 4px;
    background-color: turquoise;
   }
   #h3{
           text-align: center;
    width: 275px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 18px;
    color: #333;
    line-height: 22px;
    height: 22px;
    margin-top: 20px;
    font-weight: 300;
   }
   #vc{
    position: absolute;
    left: 0;
    top: 0;
     display: none; 
    width: 275px;
    height: 252px;
    background: rgba(0,0,0,.6);
    border-radius: 4px;
    cursor: pointer;
   }
   #hf{
        color: #fff;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    padding: 0 36px;
    margin-top: 70px;
   }
   #hf a{
       color: #409EFF;
    font-size: 16px;
   }
   #vc-z{
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    padding: 0 36px; 
    margin-top: 28px;
    margin-bottom: 20px;
    text-align: center;
   }
    #vc-x{
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    padding: 0 36px;
    }
    #zhi-b:hover #vc{
        display: block;
    }

    /* 分页 */
   #fenye{
       width:100%;
       height: 40px;
       /* background-color: turquoise; */
       margin-top: 30px;
   }
   #fenye-a{
       width: 1200px;
       height: 40px;
       margin: 0px auto;
       /* background-color: mediumvioletred; */
   }
   #anjian{
       width: 120px;
       height: 40px;
       color:#aaa;
       margin: auto;
       /* background-color: blanchedalmond; */
   }
   #shang{
       height: 30px;
       width: 50px;
       text-align: center;
       line-height: 30px;
        display: inline-block;
        margin-top: 5px;
        border: 1px solid #e4e4e4;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
   }
     #shang:hover{
         color: white;
         background-color: #409EFF
     }
    #xia{
       height: 30px;
       width: 50px;
       text-align: center;
       line-height: 30px;
       display: inline-block;
       margin-left: 10px;
       margin-top: 5px;
       border: 1px solid #e4e4e4;
       border-radius: 5px;
       font-size: 14px;
       cursor: pointer;
    }
    #xia:hover{
       color: white;
       background-color: #409EFF;

     }
    /* 尾部 */
      #footer{
    width: 100%;
    background-color: #fafafa;
    bottom: 0;  
    border-top: 1px solid #f8f8f8;
   height: 300px;
    margin-top: 50px;
      }
      #help{
         width: 1200px;
    margin: auto;
    overflow: hidden;
    /* padding: 55px 0 60px; */
    box-sizing: border-box;
    /* background-color: darkorange; */
        margin-top: 55px;
  height: 200px;
      }
   #help div{
       width: 295px;
       height: 200px;
       /* background-color: navajowhite; */
       border-right: 1px dashed #d0cdcd;
       display: inline-block;
   }
   /* 1 */
    #help div span{
    /* background-color: yellow; */
    font-size: 20px;
    width: 295px;
    color: #409EFF;
    /* margin-bottom: 35px; */
    text-align: center;
    display: inline-block;
    position: absolute;
    }
     #help div #a{
    display: inline-block;
    font-size: 14px;
    color: #666;
    margin-top: 18px;
    width: 295px;
    height: 20px;
    /* background-color: brown; */
    position: absolute;
    text-align: center;
    line-height: 20px;
    margin-top: 60px;
    cursor: pointer;
     }
     #help div #a:hover{
       color: #409EFF;
     }
    #help div #a1{
    display: inline-block;
    font-size: 14px;
    color: #666;
    margin-top: 18px;
    width: 295px;
    height: 20px;
    /* background-color: brown; */
    position: absolute;
    text-align: center;
    line-height: 20px;
        margin-top: 100px;
    cursor: pointer;
     }
      #help div #a1:hover{
       color: #409EFF;
     }
      #help div #a2{
    display: inline-block;
    font-size: 14px;
    color: #666;
    margin-top: 18px;
    width: 295px;
    height: 20px;
    /* background-color: brown; */
    position: absolute;
    text-align: center;
    line-height: 20px;
        margin-top: 140px;
    cursor: pointer;
     }
      #help div #a2:hover{
       color: #409EFF;
     }
      #help div #a3{
    display: inline-block;
    font-size: 14px;
    color: #666;
    margin-top: 18px;
    width: 295px;
    height: 20px;
    /* background-color: brown; */
    position: absolute;
    text-align: center;
    line-height: 20px;
        margin-top: 180px;
    cursor: pointer;
     }
      #help div #a3:hover{
       color: #409EFF;
     }
     /* 1 */
     #banquan{
           width: 100%;
    background-color: #333;
    color: #999;
    font-size: 12px;
    text-align: center;
    height: 130px;
    overflow: hidden;
     }
      #banquan p{
    font-family: MicrosoftYaHei;
    letter-spacing: 0;
    line-height: 16px;
    /* padding-top: 20px; */
    height: 16px;
    /* background-color: thistle; */
    margin-top: 20px;
    cursor: pointer;
      }
  
</style>