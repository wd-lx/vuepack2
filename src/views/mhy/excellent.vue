<template>
    <div>
        <top></top>
       <div class="dabbn">
        
        <div class="leain"><a href="yuanlin"><div class="liean">返回程序员列表</div></a></div>
       
        <div class="naeon" >
            
             <div class="iimg">
                 <img :src="dilist" alt="">
                 <!-- <p class="silou">已签约</p> -->
                 </div>
             <div class="suirty">
             <div class="tyopil">
                 <a href="#"><p class="tyokp">名字</p></a>
                 <span >2020.05.13 10:43</span>
             </div>
             <div class="tyopiler"><span>UI设计</span> </div>
             <div class="xamgtu">沟通非常顺利，非常专业，效率很高。期待下次继续合作。</div>

             </div>
             
             <div class="readuny">
                 <div class="cebil"></div>
                 <div class="zuicur">
                     <div class="xiaotoup"><img :src="dilists" alt=""></div>
                     <div class="neiran">
                    <div class="vopljf">
                    <a href="#"> <p class="nyuv">名字</p></a>
                    <a href="#"> <p class="nyuvop">500元/天</p></a></div>
                     <p class="zuixio">亚讯星科股份UI/UE自由设计师</p>
                     </div>
                 </div>
                 <a href="#"><div class="rigylp">预约</div></a>
             </div>
             

        </div>

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
          

          dilist:require("../mhy/img/01.jpg"), 
          dilists:require("../mhy/img/01.jpg"),
    }
    }
    
    }
</script>
  
<style>
.rigylp{
    width: 80px;
    height: 26px;
    background: #37a1f9;
    text-align: center;
    float: left;
    line-height: 26px;
    margin-top: 37px;
    font-size: 14px;
    color: white;
}
.vopljf{
    width: 300px;
    height: 30px;
}
.zuixio{
    margin-top: 15px;
}
.nyuvop{
    width: 80px;
    float: left;
    height: 23px;
    background: #37a1f9;
    text-align: center;
    line-height: 23px;
    border-radius: 13px;
    font-size: 14px;
    color: white;
    margin-left: 15px;
    margin-top: 10px;
}
.nyuv{
    float: left;
    font-size: 20px;
    color: #333333;
    margin-top: 8px;
}
.neiran{
    width: 290px;
    height: 80px;
    float: left;
    /* border: 1px solid red; */
    overflow: hidden;
    margin-left: 15px;
}
.xiaotoup img{
    width: 50px;
    height: 50px;
    margin-top: 10px;
    border-radius: 50%;
}
.xiaotoup{
    width: 50px;
    height: 100px;
    float: left;
}
.zuicur{
    width: 360px;
    height: 80px;
    margin-top: 10px;
    /* border: 1px solid red; */
    float: left;
    margin-left: 30px;
}
.cebil{
    width: 3px;
    height: 101px;
    background: #37a1f9;
    margin-top: -1px;
    float: left;
}
.readuny{
    width: 500px;
    height: 100px;
    float: left;
    border: 1px solid #eee;
    margin-top: 25px;
    margin-left: 45px;
}
.xamgtu{
    width: 300px;
    height: 40px;
    /* border: 1px solid red; */
    float: left;
    margin-top: 15px;
    font-size: 14px;
}
.tyopiler span{
    font-size: 12px;
    background: #f1f1f1;
    padding: 3px 8px 3px 8px;
}
.tyopiler{
    width: 300px;
    height: 25px;
    float: left;
    /* border: 1px solid red; */
    margin-top: 5px;
    line-height: 25px;
}
.tyopil span{
    display: inline-block;
    font-size: 14px;
    color: #999999;
    margin-left: 15px;
    margin-top: 7px;
}
.tyokp{
    float: left;
    font-size: 20px;
    color: #333333;
}
.suirty{
    width: 300px;
    height: 150px;
    /* border: 1px solid red; */
    margin-left: 15px;
    float: left;
}
.tyopil{
    width: 300px;
    height: 25px;
    float: left;
    /* border: 1px solid red; */
    margin-top: 20px;
}
.iimg img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    /* background-color: saddlebrown; */
    margin-top: 20px;
}
.iimg{
    width: 80px;
    height: 100px;
    /* border:1px solid red; */
    float: left;
    margin-left: 20px;
}
.naeon{
    width: 1000px;
    height: 150px;
    background: white;
    margin: 20px auto;
}
a{
    text-decoration: none;
}
.liean{
    width: 130px;
    height: 30px;
    background-color: #37a1f9;
    border-radius: 13px;
    text-align: center;
    line-height: 30px;
    color: white;
    font-size: 14px;
}
.leain{
    width: 1000px;
    height: 30px;
    margin:auto;
    margin-top: 30px;
}
.dabbn{
    width: 100%;
    background: #f7f7f7;
    overflow: hidden;
}
</style>