<template>
    <div> 
    <div class="beijing">
     <div class="titex">
         <p class="titex1">平台程序员兼职</p>
         <div class="titex2">共有 <p class="titex3">417982</p> 位程序员符合条件</div>
     </div>
     
     <div class="scvyul">
         <div class="scv-lef">
             <ul>
                 <li>角色</li>
                 <li>地点</li>
                 <li>行业</li>
                 <li>其他</li>
             </ul>
         </div>
         <div class="zhongda">
         <div class="scv-zhj">
             <ul>
                 <a href="#"><li class="beidian">全部</li></a>
                 <a href="#"><li>产品经理</li></a>
                 <a href="#"><li>设计师</li></a>
                 <a href="#"><li>前端</li></a>
                 <a href="#"><li>移动端</li></a>
                 <a href="#"><li>小程序</li></a>
                 <a href="#"><li>游戏</li></a>
                 <a href="#"><li>后端</li></a>
                 <a href="#"><li>测试</li></a>
                 <a href="#"><li>DBA</li></a>
                 <a href="#"><li>运维</li></a>
                 <a href="#"><li>其他</li></a>
                 
             </ul>
         </div>
         <div class="scv-zhj">
             <ul>
                 <a href="#"><li class="beidian">全部</li></a>
                 <a href="#"><li>北京</li></a>
                 <a href="#"><li>上海</li></a>
                 <a href="#"><li>深圳</li></a>
                 <a href="#"><li>杭州</li></a>
                 <a href="#"><li>广州</li></a>
                 <a href="#"><li>成都</li></a>
                 <a href="#"><li>武汉</li></a>
                 <a href="#"><li>南京</li></a>
                 <a href="#"><li>西安</li></a>
                 <a href="#"><li>重庆</li></a>
                 <a href="#"><li>长沙</li></a>
                 <a href="#"><li>厦门</li></a>
                 
             </ul>
         </div>
         <div class="scv-zhj">
             <ul>
                 <a href="#"><li class="beidian">全部</li></a>
                 <a href="#"><li>电子商务</li></a>
                 <a href="#"><li>设社交</li></a>
                 <a href="#"><li>人工智能</li></a>
                 <a href="#"><li>媒体门户</li></a>
                 <a href="#"><li>工具软件</li></a>
                 <a href="#"><li>消费生活</li></a>
                 <a href="#"><li>金融</li></a>
                 <a href="#"><li>医疗健康</li></a>
                 <a href="#"><li>企业服务</li></a>
                 
                 
             </ul>
         </div>
         <div class="scv-zhj1">
             <div class="scv-zhj2">
             <el-form :model="ruleForm"  ref="ruleForm" label-width="58px" class="demo-ruleForm">
              <el-form-item label="排序" prop="region">
              <el-select v-model="ruleForm.region" placeholder="默认" class="paixu">
              <el-option label="默认" value="moren"></el-option>
              <el-option label="评价从高到低" value="pijgd"></el-option>
              <el-option label="价格从高到低" value="jiggd"></el-option>
              <el-option label="价格从低到高" value="jigdg"></el-option>
              <el-option label="最近有空" value="youkong"></el-option>
             </el-select>
             </el-form-item>
             </el-form>
             </div>
             <div class="scv-zhj3">
             <el-form :model="ruleForm"  ref="ruleForm" label-width="70px" class="demo-ruleForm">
              <el-form-item label="自由职业" prop="region">
              <el-select v-model="ruleForm.regiony" placeholder="不限" class="paixu">
              <el-option label="不限" value="buxian"></el-option>
              <el-option label="是" value="shi"></el-option>
              
             </el-select>
             </el-form-item>
             </el-form>
             </div>
             <div class="scv-zhj4">
             <el-form :model="ruleForm"  ref="ruleForm" label-width="85px" class="demo-ruleForm">
              <el-form-item label="认证开发者" prop="region">
              <el-select v-model="ruleForm.regionl" placeholder="不限" class="paixu">
              <el-option label="不限" value="bx"></el-option>
              <el-option label="产品经理" value="cpjl"></el-option>
              <el-option label="项目经理" value="xmjl"></el-option>
              <el-option label="自由工作者" value="zygzz"></el-option>
              <el-option label="云端工作者" value="ydgzz"></el-option>
              <el-option label="整包协作开发者" value="zbxfkfz"></el-option>
              <el-option label="驻场开发者" value="zckfz"></el-option>
             </el-select>
             </el-form-item>
             </el-form>
             </div>
         </div>
         </div>
     </div>

    
    <div class="sertyli">
        <div class="sertyli1">首页>平台程序员兼职</div>
        <div class="sertyle2">
           <a href="#"> <div class="sertyle3">整包项目</div></a>
            <a href="#"><div class="sertyle3">按月雇佣</div></a>
           <a href="#"> <div class="sertyle3">最新好评</div></a>
        </div>
        </div>
   
         <div class="erirng">
             <div class="iimg">
                 <img :src="dilist" alt="">
                 <p class="silou">已签约</p>
                 </div>
             
             <div class="szilv">
             <div class="szitile">
                 <a href="#"><span class="btny">猎豹移动</span></a>
                 <a href="#"><span class="btny">高级服务端研发工程师</span></a>
                 <p class="xcery">北京</p>
                 <p class="xcery">游戏</p>
                 <p class="xcery">五年</p>
             </div>
             
            <div class="tylop"><p>名字</p></div>
            
             <div class="tylnm"><p class="tylinm1">技能：</p>
                 <p class="tylinm">分布式 微服务</p>
                 </div>
            
            <div class="tylnmo"><p class="tylinm1">分布式：</p>
                 <p class="tylinm">跨境进销存系统,梦马心选拼多多小程序,泰合联盟微信公众号</p>
                 </div>
            
            <div class="ircety">
               <div class="ritq">可工作地点：<span>远程</span></div>
               <div class="ritq1">可预约时间：<span>工作日19:00-22:00、周末10:00-19:00</span></div>
            </div>

             </div>

             <div class="crtlrt">
                 <p class="manry"><span>400</span> 元/天</p>
                 <a href="#"><p class="youe">按天预约</p></a>
                 <a href="#" ><p class="antty">按月雇佣(荐)</p></a>
             </div>

         </div>

       








     </div>
    </div>
</template>

<script>
    export default {
         data() {
      return {
          dilist:require("../mhy/img/01.jpg"),
        ruleForm: {
          region: '',
          regiony: '',
          regionl: '',
          
        },
    }
    }
    }
</script>

<style>
a{
    text-decoration: none;
}
.antty{
    width: 100px;
    height: 35px;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    background-color: #2994f2;
    color: white;
    margin: 20px auto;
}
.youe{
    width: 100px;
    height: 35px;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    background-color: #2994f2;
    color: white;
    margin: 20px auto;
}
.manry span{
    font-size: 20px;
}
.manry{
    font-size: 14px;
    color:#2994f2;
    text-align: center;
    margin-top:8px;
}
.crtlrt{
    width: 180px;
    height: 160px;
    border-left: 1px solid #ccc;
    float: left;
    margin-top: 40px;
    margin-left: 5px;
}
.ritq{
    width: 180px;
    /* border: 1px solid red; */
    float: left;
}
.ritq1{
    width: 390px;
    /* border: 1px solid red; */
    float: left;
}
.ircety{
    width: 680px;
    height: 25px;
    /* border: 1px solid red; */
    margin-top: 10px;
    color: #848589;
    font-size: 14px;
    line-height: 25px;
}
.tylinm{
    float: left;
}
.tylinm1{
    float: left;
    font-weight: bold;
}
.tylnmo{
    width:680px;
    height: 25px;
    /* border: 1px solid red; */
    font-size: 14px;
    line-height: 25px;
    /* margin-top: 5px; */
}
.tylnm{
    width:680px;
    height: 25px;
    /* border: 1px solid red; */
    font-size: 14px;
    line-height: 25px;
    margin-top: 5px;
    
}
.tylop p{
    font-size: 14px;
    line-height: 20px;
}
.tylop{
    margin-top: 5px;
    width: 680px;
    height: 20px;
    /* border: 1px solid red; */
}
.xcery{
    float: left;
    height: 20px;
    background:#e8e8e8;
    padding: 2px 10px;
    border-radius: 5px;
    font-size: 14px;
    color: rgba(0, 0, 0, .6);
    font-weight: 550;
    margin-top: 1px;
    margin-left: 15px;
}
.btny{
    
    /* display: inline-block; */
    padding-right: 10px;
    max-width: 380px;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    overflow: hidden;
    font-size: 20px;
    float: left;
    color: #333333;
}
.szitile{
    width: 680px;
    overflow: hidden;
    height: 25px;
    /* border: 1px solid red; */

}
.szilv{
    width: 690px;
    height: 160px;
    /* border: 1px solid red; */
    float: left;
    margin-top: 40px;
    margin-left: 20px;
    /* overflow: hidden; */
    /* border-right: red; */
}
.silou{
    width: 48px;
    height: 18px;
    font-size: 12px;
    line-height: 18px;
    color: #2994f2;
    border: 1px solid #2994f2;
    text-align: center;
    margin-left: 15px;
    margin-top: 5px;
}
.iimg img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    /* background-color: saddlebrown; */
    margin-top: 40px;
}
.iimg{
    width: 80px;
    height: 225px;
    /* border:1px solid red; */
    float: left;
    margin-left: 20px;
}
.erirng{
    width: 1000px;
    height: 225px;
    margin: 10px auto;
    background-color: white;
}
.sertyle3{
    width: 100px;
    height: 38px;
    border: 1px solid rgba(231, 231, 231, 1);
    border-radius: 3px;
    float: left;
    margin-left: 1px;
    color: #666;
    text-align: center;
    line-height: 38px;
    font-size: 14px;
}
.sertyle2{
    width: 309px;
    height: 38px;
    float: right;
    /* border: 1px solid red; */
}
.sertyli{
    width: 1000px;
    height: 38px;
    margin:20px auto;
    /* border: 1px solid red; */
    background-color: white;
    
}
.sertyli1{
    float: left;
    font-size: 14px;
    line-height: 38px;
    color: #919aa7
}
.beijing{
    background: #f7f7f7;
    overflow: hidden;
}
.titex{
    width: 1000px;
    height: 54px;
    margin: 20px auto;
    /* border: 1px solid red; */
    background-color: #ffffff;
}
.titex1{
    font-size: 14px;
    color: #258fe6;
    line-height: 54px;
    display: inline-block;
    margin-left: 10px;
}
.titex2{
    width: 210px;
    height: 54px;
    float: right;
    font-size: 14px;
    line-height: 54px;
    color: #919aa7;
    /* border: 1px solid red; */
}
.titex3{
    display: inline-block;
    color: #258fe6;
    font-size: 14px;
}
.scvyul{
    width: 1000px;
    height: 240px;
    background: #ffffff;
    margin: 10px auto;
}
.scv-lef{
    float: left;
    width: 50px;
    height: 200px;
    margin-top: 15px;
    margin-left: 15px;
    /* border: 1px solid red; */
    text-align: center;
}
.scv-lef ul{
    list-style: none;
    
}
.scv-lef ul li{
    font-size: 14px;
    color: #555555;
    line-height:50px;
}
.zhongda{
    width: 840px;
    height: 200px;
    float: left;
    margin-top: 15px;

}
.scv-zhj{
    /* float: left; */
    width: 840px;
    height: 50px;
    /* margin-top: 15px; */
    /* border: 1px solid red; */

}
.scv-zhj1{
    /* float: left; */
    width: 840px;
    height: 40px;
    /* margin-top: 15px; */
    /* border: 1px solid red; */
    margin-top: 4px;
}
.scv-zhj2{
    width: 200px;
    height: 40px;
    float: left;
    /* border: 1px solid red; */

}
.scv-zhj3{
    width: 240px;
    height: 40px;
    float: left;
    margin-left: 20px;
    /* border: 1px solid red; */

}
.scv-zhj4{
    width: 240px;
    height: 40px;
    float: left;
    /* border: 1px solid red; */

}
.scv-zhj ul{
    list-style: none;
}
.scv-zhj ul li{
    width: 64px;
    height: 28px;
    font-size: 14px;
    color: #555555;
    line-height:28px;
    float: left;
    text-align: center;
    margin-top: 11px;
}
.beidian{
    background: #dcefff;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    outline: 0;
    /* padding: 0 15px; */
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 140px;
}
.el-select-dropdown__item {
    font-size: 12px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
}
.el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    /* padding: 0 12px 0 0; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0px 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.el-input__inner{
        padding: 8px 9px;
}
</style>