<template>
    <div>
        <top></top>
    <div class="intro">
        <h3>完善个人认证后，才能申请签约开发者进行接单</h3>
        <p>
    成为程序员客栈签约开发者后，才能在平台接单，包括平台派单类项目、雇佣项目等，并
    享受交易担保等服务。
    <br>申请签约需要满足以下条件：
    <br>1.三年及以上正规互联网工作经验
    <br>2.按签约规则如实填写个人简历
    <br>3.具有契约精神、服务意识，能按约定高效完成开发
    <br>4.不在程序员客栈黑名单（无开发黑历史）
  </p>
    </div>
    <div class="verify">
        <div class="verify-top">
        <h4>实名认证</h4>
        <a href=""><span>去认证</span></a>
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
    top,
    bottom
  },
      data() {
        return {
          
        }
      },
    }
</script>

<style>
.intro{
    height: 310px;
    width: 1000px;
    margin: 20px auto;
    background-color: whitesmoke;
}
.intro h3{
    padding: 12px 0 18px;
    text-align: center;
    border-bottom: 2px solid rgba(1,1,1,.06);
    font-size: 22px;
    font-weight: 500;
    color: #222;
}
.intro p {
    margin: 24px 0 20px;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    font-size: 14px;
    line-height: 30px;
    padding-left: 20px;
}
.verify{
    height: 50px;
    width: 1000px;
    margin: auto;
    background-color: whitesmoke;
}
.verify-top{
    height: 50px;
    width: 100%;
    /* background-color: pink; */
    /* margin-bottom: 20px; */
}
.verify h4{
    line-height: 50px;
    font-size: 14px;
    float: left;
    padding-left: 20px;
    color: #1d2a3a;
}
.verify span{
    line-height: 50px;
    float: right;
    font-size: 14px;
    color: #308eff;
    padding-right: 20px;
}

</style>