<template>
  <div class="top">
    <div class="top-content">
      <div class="content-img">
      <div class="block" v-for="fit in fits" :key="fit">
    <el-image style="width: 90px; height: 60px; float: left; cursor: pointer; " :src="url" :fit="fit"></el-image>
  </div>
      </div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  @select="handleSelect" background-color="#545c64" text-color="#fff"
 style="width:500px;float:left;">
  <el-menu-item index="1" >首页</el-menu-item>
  <el-menu-item index="3">云端工作</el-menu-item>
  <el-menu-item index="2">程序员</el-menu-item>
   <el-submenu index="2-4">
      <template slot="title" >更多服务</template>
      <el-menu-item index="2-4-1">解决问题</el-menu-item>
      <el-menu-item index="2-4-2">进制数据</el-menu-item>
      <el-menu-item index="2-4-3">技术圈</el-menu-item>
      <el-menu-item index="2-4-4">兼职招聘</el-menu-item>
    </el-submenu>
</el-menu>
 <el-input placeholder="搜索你感兴趣的程序员" prefix-icon="el-icon-search" v-model="input2" class="el-input"></el-input>
<div class="top-right">
 <a href="/denglu"><p class="top-right1">{{denglu}}</p></a> 
  <a href="/zhuce"><p class="top-right2">{{zhuce}}</p></a> 
</div>
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
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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
.top{
  height: 60px;
  width: 100%;
  background-color:rgb(84, 92, 100);
}
.top-content{
  height: 60px;
  width: 1200px;
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
    color:#fff;
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
  color: #fff;
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
  color: #ffff;
}
</style>