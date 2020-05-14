<template>
    <div>

<div id="neirong">
  <div id="neirong-1">

    <div id="left">

       
    </div>

      
  <div id="power">
    <div id="power-ft">
<!-- 接口数据 -->
  <div id="shuju" >
     <div id="shuju-i">
         <div id="lol">项目名称</div>
         <div id="xing">项目类型</div>
         <div id="perq">预算
             <div id="jiedan">接单</div> 
         </div>
     </div>
  </div>

    </div>

   <div id="min">
          <div id="min-1">
          <div id="max">项目介绍</div>
           
           <div id="shu">详细描述</div>

           <div id="max-2">参考网站或产品</div>
           
           <div id="shu-2">https://github.com/davidmball/ratslam</div>
            
            <div id="max-k">项目规划</div>

            <div id="max-x">项目周期</div>

            <div id="shu-ec">周期时间：（天）</div>
          </div>
  </div>

  </div>





  </div>

</div>





    </div>
</template>

<script>
  export default {
   

  }
</script>

<style>


#neirong{
    width: 100%;
    height: 950px;
    background-color: #f0f2f5;
    overflow: hidden;
}
#neirong-1{
    width: 900px;
    /* height: 600px; */
    /* background-color: white; */
    margin: 20px auto;
}
#left{
    background: url("../wsz/project.png");
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 1rem;
    width: 900px;
     height: 122px; 
}


/* 搜索 */

#power{
    background: #F7FAFC; 
    box-shadow: 0 1px 2px 0 rgba(31,45,61,.1);
    border-radius: 4px;
    margin-bottom: 1rem;
    width: 900px;
    height: 440px;
}
#power-ft {
    width: 900px;
    height: 162px;
    background-color: #F7FAFC; 
    margin: auto;
    overflow: hidden;
    border-bottom: 1px solid #ededed;
}

#shuju {
    /* border-bottom: 1px solid #eff2f7; */
    width: 750px;
    height: 143px;
    margin: 20px auto;
    /* background-color: orange;  */
    overflow: hidden;
}
/* 接口数据 */
#shuju-i{
  width: 750px;
  height: 140px;
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
#lol{
    width: 750px;
    height: 40px;
    /* background-color: blanchedalmond; */
    font-size: 28px;
    color: #2D3238;
    word-break: break-all;
    line-height: 40px;
}
#xing{
    width: 750px;
    height: 30px;
    /* background-color: olive; */
    font-size: 14px;
    color: #2D3238;
    word-break: break-all;
    line-height: 28px;
    margin-top: 10px;
}
#perq{
     width: 750px;
    height: 30px;
    /* background-color: olive; */
    font-size: 14px;
    color: #979FA8;
    word-break: break-all;
    line-height: 28px;
    margin-top: 10px;
}
#jiedan{
box-shadow: 0 2px 2px 0 rgba(0,0,0,.2);
    border-radius: 4px;
    margin: 0 7px;
    width: 92px;
    height:30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    color: white;
    font-size: 14px;
    display: inline-block;
    background-color: #5191bd;
        margin-left: 615px;
}
#min{
    width: 900px;
    height: 577px;
    background-color: white;
}    
#min-1{
    width: 750px;
    height: 277px;
    /* background-color: violet; */
    margin: auto;
}  
#max{
    width: 750px;
    height: 70px;
    font-size: 2rem;
    padding-top: 2rem;
    line-height: 70px;
    font-weight: lighter;
}
#shu{
color: #464b52;
font-size: 12px;
}
#max-2{
    width: 750px;
    height: 70px;
    font-size: 2rem;
    padding-top: 2rem;
    line-height: 70px;
    font-weight: lighter;
}
#shu-2{
color: #464b52;
font-size: 12px;
}
#max-k{
    width: 750px;
    height: 70px;
    font-size: 2rem;
    padding-top: 2rem;
    line-height: 70px;
    font-weight: lighter;
}
#max-x{
    width: 750px;
    height: 70px;
    font-size: 1.5rem;
    padding-top: 2rem;
    line-height: 70px;
    font-weight: lighter;
    margin-top: -20px;

}
#shu-ec{
color: #464b52;
font-size: 12px;
}
</style>