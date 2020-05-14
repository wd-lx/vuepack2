<template>
<div>
  <div class="top-bg">
    <top :navlist="toplist"></top>
    <div class="content">
      <div class="first-div">
        <h1>云端工作</h1>
        <div>按月聘用程序员，最快一天到岗</div>
      </div>
      <el-button type="primary" class="push-btn">
        <i class="el-icon-edit"></i>
        发布需求</el-button>
    </div>
  </div>
  <section class="intro-talent ">
    <span class="title">高效的技术员工招聘解决方案</span>
    <div class="short-line"></div>
    <span class="desc">
        帮助互联网中小企业快速补充技术人员，按需灵活用工，大幅节省招聘、用人成本
      </span>
      <div class="three-part">
        <div class="first">
          <img src="">
          <ul>
            
            <li><i class="el-icon-success"></i>严格筛选，0.5%通过率确保一线水准</li>
            <li><i class="el-icon-success"></i>5年以上工作经验的资深开发者</li>
            <li><i class="el-icon-success"></i>客栈项目5星好评，能力真实可靠</li>
            </ul>
            </div>
            <div class="sec">
              <img src="">
              <ul>
                <li><i class="el-icon-success"></i>1小时内对接专属顾问，全程协助</li>
                <li><i class="el-icon-success"></i>海量人才库, 智能匹配最佳技术人才</li>
                <li><i class="el-icon-success"></i>随时可面试，最快当天到岗</li>
                </ul>
                </div>
                <div class="third">
                  <img src="">
                  <ul>
                    <li><i class="el-icon-success"></i>按月聘用，灵活适应用人需求</li>
                    <li><i class="el-icon-success"></i>可选全职兼职，定制每周工时</li>
                    <li><i class="el-icon-success"></i>支持随时更换或结束合作</li>
                    </ul>
                    </div>
                    </div>
  </section>
  <section class="intro-dev">
    <span class="title">
          优秀云端开发者，客户满意度100%
        </span>
        <div class="short-line"></div>
        <div class="devs">
          <div class="dev-box" v-for="(item,index) in navlist" :key="index">{{item.name}} 
            <img src="" class="src-header">
            <span class="dev-nickname">NimoNimo</span>
            <h4>自由设计</h4>
            <div class="stat-tag">
              <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
              <span class="tag">5年经验</span>
            </div>
            <p class="dev-comment">客户评价：王工态度很负责，专业能力强，任务完成也很及时，值得...</p>
          </div>
           <!-- <div class="dev-box">
            <img src="" class="src-header">
            <span class="dev-nickname">NimoNimo</span>
            <h4>自由设计</h4>
            <div class="stat-tag">
              <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
              <span class="tag">5年经验</span>
            </div>
            <p class="dev-comment">客户评价：王工态度很负责，专业能力强，任务完成也很及时，值得...</p>
          </div>
           <div class="dev-box">
            <img src="" class="src-header">
            <span class="dev-nickname">NimoNimo</span>
            <h4>自由设计</h4>
            <div class="stat-tag">
              <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
              <span class="tag">5年经验</span>
            </div>
            <p class="dev-comment">客户评价：王工态度很负责，专业能力强，任务完成也很及时，值得...</p>
          </div>
           <div class="dev-box">
            <img src="" class="src-header">
            <span class="dev-nickname">NimoNimo</span>
            <h4>自由设计</h4>
            <div class="stat-tag">
              <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
              <span class="tag">5年经验</span>
            </div>
            <p class="dev-comment">客户评价：王工态度很负责，专业能力强，任务完成也很及时，值得...</p>
          </div> -->
        </div>
  </section>
  
  </div>
</template>

<script>
import top from "@/components/Htop"
export default {
 data() {
   return {
      toplist:[{
     name:"首页",
   },{
     name:"云端工作",
   },
   {
     name:"程序员",
   }],
   value: 4,
   navlist:[{
     name:'',
   },{
     name:'',
   },{
     name:'',
   },{
     name:'',
   }]
   }
 },
 components:{
   top,
 }
}
</script>

<style>
.top-bg{
  height: 428px;
  widows: 100%;
  background-color:blueviolet;
}
.content{
  background-color: pink;
  top: 84px;
  width: 100%;
  color: #fff;
  text-align: center;
  height: calc(100% - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.first-div{
  width: 757px;
  /* height: 72px; */
  font-size: 51px;
  font-weight: 200;
  color: rgba(255, 255, 255, 1);
  line-height: 72px;
  letter-spacing: 3px;
  text-align: center;
  background-color: palegreen;
}
.first-div h1{
  font-size: 51px;
    margin: 0;
    color: #FFFFFF;
    display: block;
    font-weight: 400;
}
.push-btn{
  margin-top: 43px;
  width: 220px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-button--primary {
    color: #FFF;
    font-size: 16px;
}
.el-icon-edit:before {
    content: "\E78C";
     padding-right: 10px;;
}
.intro-talent {
  height: 537px;
  width: 1200px;
  background-color: palegreen;
  margin: 30px auto;
}
span.title {
    font-size: 32px;
    color: #323232;
    text-align: center;
    display: block;
}
.short-line {
    width: 44px;
    height: 3px;
    background: #43A0FF;
    margin: 17px auto;
}
span.desc {
    font-size: 14px;
    color: #919AA7;
    letter-spacing: 0;
    text-align: center;
    margin: 21px auto;
    display: block;
    line-height: 25px;
}
.three-part {
    margin: 72px auto;
    font-size: 14px;
    color: #464646;
    letter-spacing: 0;
    line-height: 36px;
    width: 1000px;
    /* border-bottom: 1px solid #EEEEEE; */
}
.three-part>div {
    float: left;
    text-align: center;
    margin-left: 62px;
    padding-right: 36px;
    /* border-right: 1px solid #EEEEEE; */
}
.three-part img {
    width: 54px;
    height: 144px;
}
.three-part ul {
    margin-top: 21.8px;
    text-align: left;
}
.three-part ul li{
  list-style: none;
}
.el-icon-success:before {
    content: "\E79C";
    color:#43A0FF;
    width: 17px;
    height: 17px;
    margin: 0px auto auto -28px;
}
.intro-dev{
  height: 493px;
  width: 945px;
  background-color: red;
  margin: auto;
}
.devs {
    display: flex;
    justify-content: center;
    margin: 40px 0 0;
    height: 330px;
    width: 945px;
    background-color: palegreen;
}
.dev-box {
    position: relative;
    width: 240px;
    height: 330px;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(231, 231, 231, 1);
    text-align: left;
    padding-left: 10px;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0 7px 0 8px;
    cursor: pointer;
}
.src-header {
    display: block;
    width: 240px;
    height: 182px;
    transform: translate(-8px, 0);
    border: 1px solid black;
}
.dev-nickname {
    position: absolute;
    left: 10px;
    top: 148px;
    color: white;
    font-size: 14px;
}
.dev-box h4{
margin: 10px 0 0;
color: rgba(0, 0, 0, 0.8);
font-size: 16px;
}
.star-tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
}
.el-rate {
    height: 26px;
    line-height: 1;
    float: left;
}
.tag {
    width: 71px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    color: rgba(0, 147, 253, 1);
    float: right;
}
.dev-comment{
    padding: 18px 0 0;
    margin: 35px 0 0;
    border-top: 1px solid rgba(240, 240, 240, 1);
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
}
</style>
