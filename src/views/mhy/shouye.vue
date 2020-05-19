<template>
  <div>
    <div class="tbtu">
      <p class="titley">近43万优秀开发者 , 您的专属云端开发团队</p>
      <p class="titleyl">BAT级别的开发者 , 标准化的服务和交付</p>
      <div class="senqingxuqiu">
        <a class="btnxq" href="#">免费发布需求</a>
        <a class="btnjd" href="#">申请签约接单</a>
      </div>
    </div>

    <div class="kffu">开发服务方案</div>

    <div class="langang"></div>

    <div class="zhongjian">
      <div class="zhongjian1">
        <div class="backueop1">
          <div class="xlgimg1"></div>
          <p class="service">需求梳理</p>
        </div>
        <div class="seced">产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。</div>
        <div class="third1">严选资深产品专家 更懂用户的需求</div>
        <div class="third2">标准产品文档 节约40%开发成本</div>
        <div class="third3">免费提供开发工期、报价评估服务</div>
        <a href="#" class="third-boz">
          <div class="third-bow">了解详情</div>
        </a>
      </div>

      <div class="zhongjian2">
        <div class="backueop2">
          <div class="xlgimg2"></div>
          <p class="service">整包项目</p>
        </div>
        <div class="seced">一站式软件开发服务，智能匹配优质开发者，五星级的过程体验和交付质量。</div>
        <div class="third1">专属项目经理全程跟进 轻松高效</div>
        <div class="third2">标准化开发流程 可视化在线监管</div>
        <div class="third3">按阶段付款 平台托管担保</div>
        <a href="#" class="third-boz">
          <div class="third-bow">了解详情</div>
        </a>
      </div>
      <div class="zhongjian3">
        <div class="backueop3">
          <div class="xlgimg3"></div>
          <p class="service">云端工作</p>
        </div>
        <div class="seced">按月聘用程序员，最快一天到岗，节省55%的人力成本。</div>
        <div class="third1">优选5年+经验的资深开发者</div>
        <div class="third2">可选全职兼职，支持定制每周工时</div>
        <div class="third3">每天提交日报，进度可控</div>
        <a href="#" class="third-boz">
          <div class="third-bow">了解详情</div>
        </a>
      </div>
    </div>

    <div class="lunbo">
      <template>
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>

    <div class="kffu">解决方案专属客服</div>
    <div class="langang"></div>

    <div class="xmaz">
      专属客服通过您的开发需求，给你提供最合适的开发服务方案，提高问题解决效率。
      <br />请填写真实信息，专属客服将在2个小时内联系您，程序员客栈不会将您的信息分享、售卖，或交给第三方公司。
    </div>

    <div class="cotan">
      <input placeholder="请输入姓名" class="conta" maxlength="10" name="user_name" id="user_name" />
    </div>
    <div class="cotae">
      <input
        placeholder="请输入手机号"
        class="conta"
        pattern="d*"
        maxlength="11"
        name="user_phone"
        id="user_phone"
      />
    </div>
    <div class="yuwla">
      <button class="conta-btn">与我联系</button>
    </div>

    <div class="kffu" >优秀程序员推荐</div>
    <div class="langang"></div>
    <div class="huiy" >
      <div class="readuny" v-for="(item,index) in readunylist" :key="index">
        <div class="cebil"></div>
        <div class="zuicur">
          <div class="xiaotoup">
            <img :src="dilists" alt />
          </div>
          <div class="neiran">
            <div class="vopljf">
              <a href="#">
                <p class="nyuv">{{item.userName}}</p>
              </a>
              <a href="#">
                <p class="nyuvop">500元/天</p>
              </a>
            </div>
            <p class="zuixio">{{item.label}}</p>
          </div>
        </div>
        <a href="#">
          <div class="rigylp">预约</div>
        </a>
      </div>

      <div class="ckgduo">
        <a class="callnv" href="excellent">查看更多</a>
      </div>
    </div>

    <div class="shuj">
      <div class="shuji">
        <div class="shuji1">
          <p class="mun">429105</p>
          <p class="mnu">优秀程序员</p>
        </div>
        <div class="shuji1">
          <p class="mun">7855</p>
          <p class="mnu">优秀企业方</p>
        </div>
        <div class="shuji2">
          <p class="mun">16039</p>
          <p class="mnu">已交易项目数</p>
        </div>
      </div>
    </div>

    <div class="nidexq">
      <div class="senqingxuqiu11">
        <a class="xxq" href="#">免费发布需求</a>
        <a class="jjd" href="#">申请签约接单</a>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "../../components/dibu";
export default {
   components: {
     bottom
   },
  data() {
    return {
      dilists: require("../mhy/img/01.jpg"),       
      readunylist:[],
    }
  },
  created(){
       this.getALL();
     },
  methods: {
     getALL(){
     this.$axios.post("mhy/pro/project/findExcellentProgrammers",).then(res=>{
      //  console.log(res);
       this.readunylist=res.data.data.myProjectQueries;
       console.log(this.readunylist)
     })
     }
  },
}
</script>

<style >
.ckgduo {
  width: 150px;
  margin: auto;
  display: inline-block;
  /* margin: 0px 0px 20px 0px; */
  /* height: 38px; */
}
.callnv {
  display: inline-block;
  width: 150px;
  padding: 8px 0;
  border-radius: 19px;
  line-height: 21px;
  text-align: center;
  color: #000;
  border: 1px solid #9b9b9b;
  font-size: 14px;
  height: 20px;
  position: absolute;
  text-decoration: none;
  margin-top: 370px;
  margin-left: -75px;
}
.huiy {
  width: 1000px;
  height: 550px;
  margin: auto;
  margin-top: 50px;
  border: 1px solid red;
}
.rigylp {
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
.vopljf {
  width: 300px;
  height: 30px;
}
.zuixio {
  margin-top: 15px;
}
.nyuvop {
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
.nyuv {
  float: left;
  font-size: 20px;
  color: #333333;
  margin-top: 8px;
}
.neiran {
  width: 290px;
  height: 80px;
  float: left;
  /* border: 1px solid red; */
  overflow: hidden;
  margin-left: 15px;
}
.xiaotoup img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50%;
}
.xiaotoup {
  width: 50px;
  height: 100px;
  float: left;
}
.zuicur {
  width: 360px;
  height: 80px;
  margin-top: 10px;
  /* border: 1px solid red; */
  float: left;
  margin-left: 20px;
}
.cebil {
  width: 3px;
  height: 101px;
  background: #37a1f9;
  margin-top: -1px;
  float: left;
}
.readuny {
  width: 480px;
  height: 100px;
  float: left;
  border: 1px solid #eee;
  margin-top: 15px;
  margin-left: 10px;
}
.tbtu {
  width: 100%;
  height: 550px;
  background-image: url("../mhy/img/01.jpg");
  background-size: 100% 100%;
  overflow: hidden;
}
.titley {
  margin-top: 150px;
  font-size: 48px;
  text-align: center;
  color: white;
}
.titleyl {
  margin-top: 30px;
  text-align: center;
  font-size: 24px;
  color: #ddd;
}
.btnxq {
  display: inline-block;
  width: 190px;
  /* padding: 16px 0; */
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
  background: linear-gradient(to right, #289eff, #0075e0);
  height: 50px;
  text-decoration: none;
}
.btnjd {
  display: inline-block;
  width: 188px;
  /* padding: 16px 0; */
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
  /* background: linear-gradient(to right, #289EFF, #0075E0); */
  border: 1px solid white;
  height: 48px;
  text-decoration: none;
  /* float: right; */
  margin-left: 33px;
}
.btnjd:hover {
  background-color: white;
  color: black;
}
.senqingxuqiu {
  width: 420px;
  height: 50px;
  margin: 50px auto;
  /* border: 1px solid red; */
}
.kffu {
  position: relative;
  padding-bottom: 15px;
  margin-top: 80px;
  font-size: 32px;
  text-align: center;
}
.langang {
  width: 44px;
  height: 3px;
  background-color: #44a0ff;
  margin: 0px auto;
}
.zhongjian {
  width: 1000px;
  height: 500px;
  margin: 20px auto;
  /* border: 1px solid red; */
}
.zhongjian1 {
  width: 308px;
  height: 493px;
  /* margin: 20px auto; */
  /* border: 1px solid red; */
  border: 1px solid #ebeff5;
  float: left;
  box-shadow: 0 4px 14px 0 rgba(239, 243, 248, 0.84);
}
.zhongjian1:hover {
  border: 2px solid #258fe6;
}
.zhongjian2:hover {
  border: 2px solid #258fe6;
}
.zhongjian3:hover {
  border: 2px solid #258fe6;
}
.zhongjian1:hover .backueop1 {
  background-image: none;
  background-color: #258fe6;
}
.zhongjian2:hover .backueop2 {
  background-image: none;
  background-color: #258fe6;
}
.zhongjian3:hover .backueop3 {
  background-image: none;
  background-color: #258fe6;
}
.zhongjian2 {
  width: 308px;
  height: 493px;
  /* margin: 20px auto; */
  /* border: 1px solid red; */
  border: 1px solid #ebeff5;
  float: left;
  margin-left: 33px;
  box-shadow: 0 4px 14px 0 rgba(239, 243, 248, 0.84);
}
.zhongjian3 {
  width: 308px;
  height: 493px;
  /* margin: 20px auto; */
  /* border: 1px solid red; */
  border: 1px solid #ebeff5;
  float: left;
  margin-left: 31px;
  box-shadow: 0 4px 14px 0 rgba(239, 243, 248, 0.84);
}
.backueop1 {
  width: 308px;
  height: 194px;
  background-image: url("../mhy/img/02.png");
  background-size: 100% 100%;
  margin: 0 auto;
  overflow: hidden;
}
.backueop2 {
  width: 308px;
  height: 194px;
  background-image: url("../mhy/img/03.png");
  background-size: 100% 100%;
  margin: 0 auto;
  overflow: hidden;
}
.backueop3 {
  width: 308px;
  height: 194px;
  background-image: url("../mhy/img/04.png");
  background-size: 100% 100%;
  margin: 0 auto;
  overflow: hidden;
}
.xlgimg1 {
  width: 55px;
  height: 55px;
  background-image: url("../mhy/img/05.png");
  background-size: 100% 100%;
  margin: auto;
  margin-top: 50px;
}
.xlgimg2 {
  width: 55px;
  height: 55px;
  background-image: url("../mhy/img/06.png");
  background-size: 100% 100%;
  margin: auto;
  margin-top: 50px;
}
.xlgimg3 {
  width: 55px;
  height: 55px;
  background-image: url("../mhy/img/07.png");
  background-size: 100% 100%;
  margin: auto;
  margin-top: 50px;
}
.service {
  font-family: PingFangSC-Semibold;
  line-height: 29px;
  letter-spacing: 5px;
  color: #ffffff;
  font-size: 21px;
  margin-top: 28px;
  margin-left: 7px;
  text-align: center;
}
.seced {
  width: 255px;
  font-size: 14px;
  color: #1d2a3a;
  letter-spacing: 0;
  text-align: left;
  line-height: 25px;
  margin: 40px auto auto 28px;
}
.third1 {
  font-size: 13px;
  color: #858e9b;
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 20px;
  margin-left: 50px;
}
.third2 {
  font-size: 13px;
  color: #858e9b;
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 0px;
  margin-left: 50px;
}
.third3 {
  font-size: 13px;
  color: #858e9b;
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 0px;
  margin-left: 50px;
}
.third-bow {
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 150px;
  height: 40px;
  margin: 28px auto 29px auto;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #465364;
}
.zhongjian1:hover .third-bow {
  color: white;
  background-color: #258fe6;
}
.zhongjian2:hover .third-bow {
  color: white;
  background-color: #258fe6;
}
.zhongjian3:hover .third-bow {
  color: white;
  background-color: #258fe6;
}
.third-boz {
  text-decoration: none;
}

.lunbo {
  width: 1000px;
  height: 300px;
  margin: auto;
  margin-top: 60px;
  border: 1px solid red;
}
.xmaz {
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(145, 154, 167, 1);
  line-height: 20px;
  text-align: center;
  margin-top: 20px;
}
.conta {
  width: 414px;
  height: 52px;
  border-radius: 2px;
  border: 1px solid rgba(229, 229, 229, 1);
  padding-left: 20px;
}
.cotan {
  margin: auto;
  width: 414px;
  height: 52px;
  margin-top: 20px;
}
.cotae {
  margin: auto;
  width: 414px;
  height: 52px;
  margin-top: 10px;
}
.yuwla {
  width: 174px;
  /* height: 46px; */
  margin: 30px auto;
}
.conta-btn {
  width: 174px;
  height: 46px;
  background: rgba(48, 142, 255, 1);
  color: white;
  border-radius: 23px;
  margin-top: 40px;
  border: none;
  outline: none;
  margin: auto;
}
.huiy {
  width: 1000px;
  height: 440px;
  margin: auto;
  margin-top: 50px;
  border: 1px solid red;
}
.shuj {
  width: 100%;
  height: 189px;
  background-color: #fafafa;
  overflow: hidden;
}
.shuji {
  width: 1000px;
  height: 89px;
  margin: auto;
  /* border: 1px solid red; */
  margin-top: 50px;
}
.shuji1 {
  width: 333px;
  height: 89px;
  float: left;
  border-right: 1px solid rgb(182, 173, 173);
  /* background-color: saddlebrown; */
}
.shuji2 {
  width: 332px;
  height: 89px;
  float: left;
  /* background-color: saddlebrown; */
}
.mun {
  margin-bottom: 5px;
  font-size: 48px;
  text-align: center;
}
.mnu {
  font-size: 16px;
  color: #4a4a4a;
  text-align: center;
}
.nidexq {
  width: 100%;
  height: 200px;
  background: url("../mhy/img/20.png") #189df6;
  overflow: hidden;
}
.senqingxuqiu11 {
  width: 420px;
  height: 50px;
  margin: 75px auto;
  /* border: 1px solid red; */
}
.xxq {
  display: inline-block;
  width: 188px;
  /* padding: 16px 0; */
  border-radius: 25px;
  background-color: white;
  text-align: center;
  line-height: 50px;
  color: #189df6;
  font-size: 18px;
  /* background: linear-gradient(to right, #289EFF, #0075E0); */
  border: 1px solid white;
  height: 48px;
  text-decoration: none;
  /* float: right; */
  /* margin-left: 33px; */
}
.jjd:hover {
  background-color: #189df6;
  /* color: black; */
}
.jjd {
  display: inline-block;
  width: 188px;
  /* padding: 16px 0; */
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
  /* background: linear-gradient(to right, #289EFF, #0075E0); */
  border: 1px solid white;
  height: 48px;
  text-decoration: none;
  /* float: right; */
  margin-left: 33px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(n) {
  background-image: url("../mhy/img/08.png");
}
.el-carousel__item:nth-child(2n) {
  background-image: url("../mhy/img/09.png");
}
.el-carousel__item:nth-child(2n + 1) {
  background-image: url("../mhy/img/10.jpg");
}
.el-carousel__item:nth-child(4n) {
  background-image: url("../mhy/img/11.png");
}
</style>
