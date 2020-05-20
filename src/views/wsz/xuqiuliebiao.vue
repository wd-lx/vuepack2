<template>
    <div>

<div id="neirong">
  <div id="neirong-1">

    <div id="left">

        <div id="jindu">

           <div id="jindu-a">
              <div id="mk">项目类型：</div>
              <div id="mk-right">
                 <div class="quanbu">全部</div>
                    <div class="quanbu">Android</div>
                     <div class="quanbu">iOS</div>
                      <div class="quanbu">PC网站</div>
              </div>
           </div>

           <div id="jindu-a">
              <div id="mk">项目进度：</div>
              <div id="mk-right">
                 <div class="quanbu">全部</div>
                    <div class="quanbu">招募中</div>
                     <div class="quanbu">开发中</div>
                      <div class="quanbu">已结束</div>
              </div>
           </div>



         <!-- 项目角色 -->
            <div id="jindu-b">
              <div id="mk-b">项目进度：</div>
              <div id="mk-right-b">
                 <div class="quanbu-b">全部</div>
                  <div class="quanbu-b">项目顾问</div>
                  <div class="quanbu-b">项目经理</div>
                  <div class="quanbu-b">产品经理</div>
                   <div class="quanbu-b">设计师</div>
                  <div class="quanbu-b">Android开发</div>
                  <div class="quanbu-b">iOS开发</div>
                  <div class="quanbu-b">前端开发</div>
                   <div class="quanbu-b">后端开发</div>
                  <div class="quanbu-b">全栈开发</div>
                  <div class="quanbu-b">应用开发</div>
                  <div class="quanbu-b">开发团队</div>
                   <div class="quanbu-b">测试工程师</div>
              </div>
           </div>
        </div>
    </div>

      
  <div id="power" >
    <div id="power-ft">


<!-- 接口数据 -->
  <div id="shuju" v-for="(item,index) in datalist" :key="index" @click="getData(item.projectId)">
     <div id="shuju-i">
     <img src="./5.jpg" id="img">
      <div id="xiangqing">
            <p id="mingcheng">
              <span id="axz" >项目名称:{{item.projectName}}</span>
              <!-- <span id="" > 项目简介:{{item.projectId}}</span> -->
            </p>
            <p id="mingcheng-1">
              <span id="axz-1" >项目类型:{{item.technique}}</span>
            </p>  
             <p id="mingcheng-2">
              <span id="axz-2" >项目预算:{{item.projectBdjet}}</span> 
            </p>
      </div>
     </div>
  </div>


    <!-- 分页组件 -->
    <div id="ye">
  <el-pagination
  :page-size="20"
  :pager-count="5"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>

    </div>
  </div>

  </div>
</div>

<bottom> </bottom>

    </div>
</template>

<script>
import  bottom from "../../components/dibu";
import  top from "../../components/toubu1";

  export default {
    components:{
     bottom,
     top
    },
    data () {
   
       return{
         datalist:[],
         projectName:"",
         projectId:"",
         technique:"",
         projectBdjet:"",
       }
     
   },
   
    mounted () {
      this.$axios.post("/aa/pro/basicinformation/getProjectInformation").then(res=>{
        console.log(res);
        this.datalist=res.data.data.msg;
        console.log(this.datalist);
      })
    },

  methods:{
    getData(aa) {
      console.log(aa);
     this.$router.push("/xiangxiliebiao?info="+aa);
      
    }
  },

      
   
   
  } 
</script>

<style>


#neirong{
    width: 100%;
    /* height: 650px; */
    background-color: #f0f2f5;
    overflow: hidden;
}
#neirong-1{
    width: 900px;
    /* height: 600px; */
    background-color: white;
    margin: 20px auto;
}
#left{
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(31,45,61,.1);
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 900px;
     height: 285px; 
}
#jindu{
 width: 804px;
 height: 285px; 
 margin: auto;
 overflow: hidden;
}
#jindu-a{
  border-bottom: 1px solid #eff2f7;  
 width: 750px;
    height: 40px;
 /* background-color: honeydew; */
  margin: 20px auto;
}  
#mk{
    /* display: inline-block; */
    float: left; 
    font-size: .9rem;
    line-height: 1.35rem;
    padding: .32rem 1.2rem;
    color: #727f8f;  
    width: 75px;
    height: 30px;
    text-align: center;
    /* background-color: thistle; */
    line-height: 30px;
    font-size: 13px;
}

#mk-right{
    width: 636px;
    height: 40px;
    /* background-color: khaki; */
     margin-left: 114px;
}

/* 全部  */
.quanbu{
  height: 20px;
  line-height: 20px;
    display: inline-block;
    padding: .32rem 1.2rem;
    color: #273444;
    line-height: 1.35rem;
    cursor: pointer;
    margin: 0 .1rem 1rem;
    font-size: 12px;
    text-align: center;
    /* background-color:red; */
    margin-top: 5px;
    border-radius: 2px;
    margin-left: 30px;
}

 .quanbu:hover{
      border-radius: 2px;
    background: #4289dc;
    color: #fff;
} 

/* 项目角色 */

#jindu-b{
 
 width: 750px;
    height: 40px;
 /* background-color: honeydew; */
  margin: 20px auto;
}  
#mk-b{
    /* display: inline-block; */
    float: left;
    font-size: .9rem;
    line-height: 1.35rem;
    padding: .32rem 1.2rem;
    color: #727f8f;  
    width: 75px;
    height: 30px;
    text-align: center;
    /* background-color: thistle; */
    line-height: 30px;
    font-size: 13px;
}
#mk-right-b{
    width: 636px;
        height: 120px;
    /* background-color: khaki; */
     margin-left: 114px;
}
/* 全部  */
.quanbu-b{
  height: 20px;
  width: 71px;
 
    display: inline-block;
    padding: .32rem 1.2rem;
    color: #273444;
    line-height: 1.35rem;
    cursor: pointer;
    margin: 0 .1rem 1rem;
    font-size: 12px;
    text-align: center;
    /* background-color:red; */
 
    border-radius: 2px;
    margin-left: 10px;
}

 .quanbu-b:hover{
      border-radius: 2px;
    background: #4289dc;
    color: #fff;
} 

/* 搜索 */

#power{
    background: white; 
    box-shadow: 0 1px 2px 0 rgba(31,45,61,.1);
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 900px;
    /* height: 285px; */
}
#power-ft {
    width: 804px;
    /* height: 285px; */
    /* background-color: yellow; */
    margin: auto;
    overflow: hidden;
}

#shuju {
    border-bottom: 1px solid #eff2f7;
    width: 750px;
    height: 120px;
    margin: 20px auto;
    /* background-color: orange; */
    overflow: hidden;
}
/* 接口数据 */
#shuju-i{
  width: 750px;
  height: 100px;
  /* background-color: khaki; */
  margin-top: 10px;
}
#img{
  width: 150px;
  height: 90px;
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 3px;
  margin-top: 5px;
  display: inline-block;
  position: absolute;
}
#xiangqing{
  width:550px;
  height: 90px;
  float: left;
  /* background-color: yellow; */
   /* display: inline-block; */
   margin-top: 5px;
   margin-left: 175px;
}
#mingcheng{
  width: 550px;
  height: 25px;
  /* background-color: mediumpurple; */
  font-size: 16px;
}
#axz{
 
  height: 25px;
  cursor: pointer;
line-height: 25px;
}

#mingcheng-1{
  width: 550px;
  height: 25px;
  /* background-color: mediumpurple; */
  font-size: 14px;
  margin: 5px auto;
}
#axz-1{
 
  height: 25px;
  cursor: pointer;
line-height: 25px;
}

#mingcheng-2{
  width: 550px;
  height: 25px;
  /* background-color: mediumpurple; */
  font-size: 14px;
}
#axz-2{
  color: #f75288;
  height: 25px;
  cursor: pointer;
line-height: 25px;
}


/* 分页 */
#ye {
    /* border-bottom: 1px solid #eff2f7; */
    width: 750px;
    height: 30px;
    margin: 30px auto;
    /* background-color: orange;  */
    overflow: hidden;
}
.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    display: inline-block;
    margin-left: 210px;
}
</style>