<template>
    <div>
        <top></top>
    <div class="content">
 <el-aside class="content-left">
     <div class="content-left-img">
         <img src="">
     </div>
     <p class="content-left-name">啦啦啦啦啦</p>
     <p class="content-left-yunduan">云端工作者</p>
     <div class="introduction">
         <i class="el-icon-location"></i>
         西安市雁塔区
     </div>
     <div class="hire-info">
         <p class="hire-work">
             <i class="el-icon-location"></i>
             可工作地点：</p>
     </div>
     <div class="hire-info">
         <p class="hire-time">
             <i class="el-icon-time"></i>
             可工作时间 : 工作日10:00-20:00、周末10:00-20:00</p>
     </div>
      <el-button type="primary">预约沟通</el-button>
 </el-aside>
 <el-main class="main">
     <div class="panel">
         <i class="el-icon-s-custom"></i>
         <h3 class="header">个人介绍</h3>
         <div class="panel-con">
             <p>1.公司核心前端</p>
             <p>2.主导多个项目开发如后台管理系统，android和ios APP，微信小程序等</p>
             <p>3.良好的开发流程及代码规范</p>
             <p>4.拥有自己的个人网站及github开源项目</p>
             <p>5.前端技术涉猎广泛，掌握常用框架及库，能快速上手各种框架及库</p>
         </div>
     </div>
     <div class="Experiences">
    <i class="el-icon-s-custom"></i>
   <h3 class="header">工作经历</h3>
   <div class="history-list">
       <ul class="J_Works">
           <li>
            <p class="title"><span>2019-04-01 - 至今</span><span>菲比斯团队</span>
            <span>高级前端工程师</span><span class="work-certify" data-content="已提供工作经历证明">已认证</span></p>
            <p class="summary">
1.【菲比斯团队】技术负责人
2.【CORIFAN】客户端及管理端架构及开发
3.【UNICOIN】客户端及管理端架构及开发</p></li>
<li>
    <p class="title"><span>2015-08-01 - 2019-03-08</span><span>深圳林辰展华科技有限公司</span>
    <span>高级前端工程师</span><span class="work-certify" data-content="已提供工作经历证明">已认证</span></p>
    <p class="summary">
1.【智慧校园系统】【代理商管理平台】维护，二次开发和重构
2.【车友记】【一动出行】管理后台、微信公众号及APP维护，二次开发及重构
3.【无人售货柜】小程序及APP架构和开发
4.【去哪儿锂电】APP架构和开发
5.【米机】客户端和运维端小程序架构和开发</p></li></ul></div>
     </div>
     <div class="jineng">
          <i class="el-icon-thumb"></i>
   <h3 class="header">技能</h3>
   <label class="lable">flutter</label>
   <el-progress :percentage="50"></el-progress>
    <label class="lable">flutter</label>
<el-progress :percentage="100" :format="format"></el-progress>
 <label class="lable">flutter</label>
<el-progress :percentage="70" ></el-progress>
 <label class="lable">flutter</label>
<el-progress :percentage="90"></el-progress>
 <label class="lable">flutter</label>
<el-progress :percentage="80"></el-progress>
<div class="zuopin">
<i class="el-icon-thumb"></i>
<h3 class="header">技能</h3>
  <div class="work-list">
    <ul>
    <li>
    <div class="work-plus">
    <a class="plus_button " data-widget="works_plus_btn">
    <i>赞</i>
    <em>2</em>
    </a></div>
   <a class="media" href="">
    <div class="thumb">
    <img src="">
    </div>
    <div class="info">
    <p class="title">客户数据中心</p>
    <p class="desc">本项目为公司内部使用，为客户提供一些在线办理的渠道，后台人员审核办理的系统，该系统是用Hui-admin+thinkphp开发，数据库使用mysql。</p>
    </div></a>
    </li>
     <li>
      <div class="work-plus">
       <a class="plus_button " data-widget="works_plus_btn">
       <i>赞</i>
         <em>1</em>
         </a></div>
     <a class="media" href="">
   <div class="thumb">
    <img src="">
    </div>
    <div class="info">
    <p class="title">程序自动化控制中心</p>
   <p class="desc">该系统以python为引擎，以网页为界面，以数据库为媒介的一个虚拟员工办理业务系统。客户通过前台申请业务，数据写入数据库，并且向任务表写入一条任务，python程序监控任务表，调用自己的程序，自动办理业务。</p>
    </div></a></li>
     <li>
  <div class="work-plus">
 <a class="plus_button " data-widget="works_plus_btn">
  <i>赞</i><em>1</em></a></div>
   <a class="media" href="">
  <div class="thumb">
 <img src="">
 </div>
   <div class="info">
 <p class="title">视频上传</p>
<p class="desc">由于期货公司开特殊户时，需要拍视频保存，故开发该系统，该系统可以上传视频，支持多视频上传，断点续传功能。后台可以播放视频，在线审核。</p></div></a>
  </li>
   </ul>
    </div>
    </div>
     </div>
 </el-main>
    </div>
    <bottom></bottom>
    </div>
</template>

<script>
import bottom from "../../components/dibu";
import top from "../../components/toubu1";
    export default {
          components: {
                 bottom,
                 top
  },
        data() {
            return {
            }
        },
         methods: {
      format(percentage) {
        return percentage === 100 ? '100%' : `${percentage}%`;
      }
    }
    }
</script>

<style>
.content{
    margin: auto;
    width: 1000px;
    padding: 0 30px 0 10px;
    height: 1200px;
}
.content-left{
    /* height: 260px; */
    /* background-color: pink; */
    /* position: fixed; */
    z-index: 1;
    width: 260px!important;
    max-width: 260px;
    padding: 0;
    border: 1px solid #eee;
    float: left;
}
.content-left-img{
    position: relative;
    margin-top: 18px;
    text-align: center;
    display: block;
}
.content-left-img img{
    width: 104px;
    height: 104px;
    border-radius: 50%;
    border: 1px solid black;
}
.content-left-name{
    margin-top: 10px;
    font-size: 18px;
    color: #333;
    text-align: center;
    font-size: 14px;
}
.content-left-yunduan{
    margin: 10px auto;
    font-size: 12px;
    /* border: 1px solid #009fda; */
    padding: 3px 5px;
    height: 23px;
    width: 73px;
    line-height: 23px;
    color: #009fda;
    text-align: center;
    cursor: pointer;
}
.el-rate{
    text-align: center;
}
.introduction {
    margin-top: 10px;
    /* padding: 0 2rem; */
    /* text-align: center; */
    font-size: 12px;
    color: #a8a8a8;
    line-height: 20px;
    padding: 0 0 0 20px;
}
.hire-info{
    padding-top: 20px;
}
.hire-work{
    font-size: 12px;
    padding: 0 0 0 20px;
    color: #96989c;
    text-align: left;
}
.hire-time{
    font-size: 12px;
    padding: 0 0 0 20px;
    color: #96989c;
    text-align: left;
}
.el-button--primary {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    width: 200px;
    margin-top: 20px;
    margin-left: 30px;
    margin-bottom: 20px;
}
.main{
    padding: 0;
    min-height: 578px;
    margin-left: 20px;
    position: absolute;
    width: 800px;
    display: inline-block;
    text-align: left;
    font-size: 1rem;
}
.panel{
    border: 1px solid #eee;
    margin-bottom: 10px;
    background-color: #fff;
    text-align: left;
    font-size: 1rem;
}
.el-icon-s-custom{
    float: left;
    padding: 10px 5px 7px 20px;
}
.header{
    margin: 0;
    padding: 7px 5px 7px 20px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0, 0.8);
    /* float: left; */
}
.panel-con{
    font-size: 14px;
    color: #2b303c;
    line-height: 26px;
    overflow: hidden;
    padding: 12px 20px 20px;
}
.Experiences{
    border: 1px solid #eee;
    margin-bottom: 10px;
    background-color: #fff;
    text-align: left;
    font-size: 1rem
}
.history-list {
    padding: 20px 0;
}
.history-list li {
    position: relative;
    padding: 15px 15px 15px 60px;
    font-size: 14px;
}
.history-list li .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 7px;
    font-size: 14px;
    color: #4ba8f9;
    margin-left: 20px;
}
 .history-list li .title .work-certify {
    position: relative;
    top: -1px;
    left: -15px;
    display: inline-block;
    padding: 1px 3px;
    background-color: #ffc340;
    color: #fff;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    margin-left: 20px;
}
 li .summary {
    color: #626c76;
}
.jineng{
    border: 1px solid #eee;
    margin-bottom: 10px;
    background-color: #fff;
    text-align: left;
    font-size: 1rem;
}
.el-icon-thumb{
     float: left;
    padding: 10px 5px 7px 20px;
}
.el-progress {
    position: relative;
    line-height: inherit;
}
.el-progress {
    position: relative;
    line-height: inherit;
    margin-left: 20px;
}
.el-progress-bar {
    padding-right: 50px;
    width: 100%;
    margin-right: -55px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 20px;
}
.lable{
    margin-left: 20px;
    font-size: 14px;
    color:  #9b9b9e;;
}
.zuopin{
    /* border: 1px solid #eee; */
    margin-bottom: 10px;
    background-color: #fff;
    text-align: left;
    font-size: 1rem
}
.work-list ul {
    height: auto;
    overflow: hidden;
}
.work-list li {
    position: relative;
    padding: 20px 0 0 80px;
    list-style: none;
}
.work-plus {
    position: absolute;
    left: 20px;
}
.work-list li .plus_button {
    cursor: pointer;
    border: 1px solid #409EFF;;
    color:#409EFF;;
    border-radius: 3px;
    text-align: center;
    min-width: 40px;
    padding: 3.5px 0;
    display: inline-block;
}
.work-list li .plus_button i {
    font-style: normal;
    font-size: 12px;
    width: 40px;
    display: block;
}
.work-list li .plus_button em {
    display: block;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
}
.work-list li .media {
    display: block;
    overflow: hidden;
    /* border-bottom: 1px solid #eee; */
    padding-bottom: 20px;
    color: #555;
}
.ui.button, .ui.menu .item, a {
    text-decoration: none;
}
.work-list li .thumb {
    float: left;
    overflow: hidden;
    margin-right: 20px;
    width: 100px;
    height: 75px;
    border: 1px solid black;
}
.thumb img {
    width: 100%;
}
.title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
    color: #4ba8f9;
    font-size: 14px;
}
.desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 14px;
}
</style>