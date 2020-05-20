<template>
    <div>
<div class="top-content">
      <div class="content-img">
      <div class="block" v-for="fit in fits" :key="fit">
   <a href="/shouye"> <el-image style="width: 60px; height: 60px; float: left; cursor: pointer; " :src="url" :fit="fit"></el-image>
    <p class='yl'>猿  林</p>
  <p class='en'>Apes Lin</p>
  </a>
  </div>
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
        url:require("../components/logo.png"),
        denglu:"登录",
        zhuce:"注册",
            }
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
.block{
    background-color: white;
    height: 45px;
    line-height: 45px;
    position: relative;
    text-align: center;
    width: 100%;
    color: #9c9c9c;
    font-size: 12px;
    margin-top: 20px;
}
</style>