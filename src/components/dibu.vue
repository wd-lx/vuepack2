<template>
    <div>

<!-- 底部 -->
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








    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

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