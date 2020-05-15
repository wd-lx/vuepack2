<template>
    <div class="tem">
    <div class="box">
        <div class="box-top">请详细描述您的岗位要求，以便于平台为您推荐合适的开发者</div>
        <div class="box-hd">
           发布云端工作
            <a href="./yunduangongzuo" target="_blank">（了解更多）</a>
        </div>
        <el-form ref="form" :model="form" class="box-form">
            <h4>开发职位类型</h4>
            <el-radio-group v-model="radio">
    <el-radio :label="3">后端工程师</el-radio>
    <el-radio :label="9">移动工程师</el-radio>
    <el-radio :label="2">DBA工程师</el-radio>
    <el-radio :label="4">测试工程师</el-radio>
    <el-radio :label="5">运维工程师</el-radio>
    <el-radio :label="13">APP小程序</el-radio>
    <el-radio :label="10">前端工程师</el-radio>
    <el-radio :label="11">游戏工程师</el-radio>
    <el-radio :label="12">设计工程师</el-radio>
    <el-radio :label="14">其他</el-radio>
  </el-radio-group>
  <h4>语言技能</h4>
  <el-input placeholder="如 php，vue 等最多五项" v-model="input" clearable></el-input>
   <h4>每周工作时间</h4>
<el-radio v-model="radio" label="1">12-18个小时</el-radio>
<el-radio v-model="radio" label="2">18-24个小时</el-radio>
<el-radio v-model="radio" label="3">24-30个小时</el-radio>
<el-radio v-model="radio" label="4">30-36个小时</el-radio>
<span class="wenzi">具体时间安排，可与开发者协商，如：周一~周五每天工作4小时，周末每天工作2小时，每周累计24小时。</span>
 <h4>工作内容说明</h4>
 <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请描述需要开发者日常完成的工作内容，越详细越有助于接单。" v-model="textarea2">
</el-input>
<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<el-checkbox v-model="checked">试用期7天（试用期免押金，满意后再正式合作）</el-checkbox>
<el-checkbox v-model="checked1">需要开发票（税率9.36%）</el-checkbox>
<div class="bottom-tip">
    <ul>
        <li>温馨提示：</li>
        <li>1、云端工作的协作方式，包括远程、驻场两种工作方式；</li>
        <li>2、云端工作收费：服务费率为每月薪资的6%，如需开票另收税费9.36%；</li>
        </ul>
        </div>
        <div class="btn">
        <el-button type="info">取消</el-button>
        <el-button type="primary">发布需求</el-button>
        </div>
        </el-form>
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
        form: {
        },
         radio: 3,
         radio:1,
         input: '',
        textarea2: '',
         checked: true,
         checked1:true,
      }
    },
    }
</script>

<style>
.box{
    width: 600px;
    margin: 110px auto 0;
    border: 1px solid #eee;
    background-color: #fff;
}
.box-top{
    color: gray;
    font-size: 14px;
    background: #ffffcc;
    line-height: 36px;
    text-align: center;
}
.box-hd{
    border-bottom: 1px solid #eee;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 16px;
    color: #666;
    font-weight: 700;
}
.box-hd a{
    color: #258fe6;
    text-decoration: none;
}
.box-form{
   position: relative;
    max-width: 100%;
    /* background-color: red; */
    padding: 25px 65px;
}
.box-form h4{
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 16px;
}
.el-radio {
    color: #606266;
    cursor: pointer;
    margin-right: 30px;
    padding-top: 20px;
}
.el-radio {
    color: #606266;
    cursor: pointer;
    margin-right: 30px;
    margin-bottom: 20px;
    padding-top: 0px;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;
}
.wenzi{
    font-size: 12px;
    float: left;
    color: #aaaaaa;
    margin-bottom: 15px;
}
.el-textarea__inner{
    margin-bottom: 15px;
}
.el-upload__tip {
    font-size: 12px;
    color: #606266;
    margin-top: 7px;
    margin-bottom: 15px;
}
.bottom-tip {
    margin-top: 20px;
}
.bottom-tip li {
    margin-top: 6px;
    list-style: none;
    font-size: 12px;
}
.btn{
    margin-top: 15px;
}
</style>