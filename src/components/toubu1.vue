<template>
  <div class="top">
    <div class="top-content">
      <div class="content-img">
      <div class="block" v-for="fit in fits" :key="fit">
   <a href="/shouye1"> <el-image style="width: 60px; height: 60px; float: left; cursor: pointer; " :src="url" :fit="fit"></el-image>
    <p class='yl'>猿  林</p>
  <p class='en'>Apes Lin</p>
  </a>
  </div>
      </div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  @select="handleSelect" background-color="white" text-color="black"
 style="width:365px;float:left;">
  <el-menu-item index="1"   style="color: black; border-bottom-color: transparent; background-color: white;"><a href="/shouye" id="heihei3">首页</a></el-menu-item>
  <el-menu-item index="3">云端工作</el-menu-item>
  <el-menu-item index="2">程序员</el-menu-item>

   <el-submenu index="2-4">
      <template slot="title" >更多服务</template>
      <el-menu-item index="2-4-1">技术圈</el-menu-item>
      <el-menu-item index="2-4-2">进制数据</el-menu-item>
      <el-menu-item index="2-4-3">技术圈</el-menu-item>
      <el-menu-item index="2-4-4">兼职招聘</el-menu-item>
    </el-submenu>
    
</el-menu>

 <el-input placeholder="搜索你感兴趣的程序员" prefix-icon="el-icon-search" v-model="input2" class="el-input"></el-input>

 <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  @select="handleSelect" background-color="white" text-color="black"
 style="width:305px;float:left;">

<el-menu-item index="1" style="color: black; border-bottom-color: transparent; background-color: white;">APP下载</el-menu-item>
 <el-menu-item index="3"><a href="/denglu" id="heihei2">登录</a></el-menu-item>
  <el-menu-item index="2"><a href="/zhuce" id="heihei">注册</a></el-menu-item>
</el-menu>
</div>
  </div>
</template>

<script>
  export default {
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input2:"",
       fits: ['fill'],
        url:require("../components/logo.png"),
        denglu:"登录",
        zhuce:"注册",
      };
    },
    props:{
      navlist:{
        type:Array,
        require:true,
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.yl{
  font-size:24px;
  padding-left:7px;
  display: inline-block;
  color: #00adef;
  padding-top: 13px;
}
.en{
  font-size:13px;
  display: inline-block;
  color: #00adef;
  margin-left: -53px;
  margin-top: 41px;
  position: absolute;
}
#heihei{
    text-decoration: none;
     color: #303133;
}
#heihei2{
    text-decoration: none;
     color: #303133;
}
#heihei3{
    text-decoration: none;
     color: #303133;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background-color: white;
}

 
#touxiang{
    width: 90px;
    height:30px;
    background-color: thistle;
    float: right;
    margin-top: 15px;
}
#axc{
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: 100%;
}
/* 搜索框 */
.el-input__prefix {
    left: 5px;
    -webkit-transition: all .3s;
    transition: all .3s;
    margin-left: 260px;
    cursor: pointer;
}
.el-input--prefix .el-input__inner {
     padding-left: 15px; 
}

.top{
  height: 60px;
  width: 100%;
  /* background-color:rgb(84, 92, 100); */
  background-color: white;
}
.top-content{
  height: 60px;
  width: 1140px;
  /* background-color: palegoldenrod; */
   margin: auto;
}
.content-img{
  height: 60px;
  width: 140px;
  /* background-color: red; */
  float: left;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
    color: #303133;
}
.el-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
    margin-top: 10px;
}
.el-menu.el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6;
}
.zhuce{
  text-decoration: none;
  color: #fff;
}
.el-input{
  float: left;
  width: 300px;
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 20px;
}
.el-input__inner{
  border-radius: 20px;
}
.el-input__inner:focus {
    border-color: #DCDFE6;
    outline: 0;
}
.el-menu--horizontal>.el-menu-item.is-active {
    color:black;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: 0;
    color:#fff;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom: none;
    color: #fff;
}
.top-right{
  height: 60px;
  width: 180px;
  /* background-color: red; */
  float: right;
}
.top-right1{
  color:black;
  text-align: center;
  line-height: 60px;
  width: 90px;
  float: left;
  font-size: 14px;
}
.top-right2{
  text-align: center;
  line-height: 60px;
  width: 90px;
  float: left;
  font-size: 14px;
  color: black;
}
</style>
