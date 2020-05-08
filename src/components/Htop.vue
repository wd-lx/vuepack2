<template>
  <div class="top">
    <div class="top-content">
      <div class="content-img">
        <el-row>
  <el-button type="primary" round>登录</el-button>
  <a href="/zhuce" class="zhuce"><el-button type="success" round>注册</el-button></a>
</el-row>
      </div>
    <el-menu :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" style="width:900px;">
  <div class="block" v-for="fit in fits" :key="fit">
    <el-image
      style="width: 90px; height: 60px; float: left; cursor: pointer; "
      :src="url"
      :fit="fit"></el-image>
  </div>
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">特色服务</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">找项目</el-menu-item>
  <el-menu-item index="3">程序员</el-menu-item>
  <el-menu-item index="3">成为开发者</el-menu-item>
   <el-submenu index="2-4">
      <template slot="title">帮助中心</template>
      <el-menu-item index="2-4-1">常见问题</el-menu-item>
      <el-menu-item index="2-4-2">我是开发者</el-menu-item>
      <el-menu-item index="2-4-3">我是需求方</el-menu-item>
    </el-submenu>
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
       fits: ['fill'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      };
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
  background-color: palevioletred;
}
.top-content{
  height: 60px;
  width: 1200px;
  background-color: palegoldenrod;
   margin: auto;
}
.content-img{
  height: 60px;
  width: 200px;
  background-color: red;
  float: right;
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
.zhuce{
  text-decoration: none;
  color: #fff;
}
</style>