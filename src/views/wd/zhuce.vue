<template>
    <div class="zhuce">
        <div class="zhuce-box">
            <h3>注册一个新帐户</h3>
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="" class="demo-ruleForm">
  <el-form-item prop="eamil" class="el-form">
    <el-input v-model="ruleForm.eamil" autocomplete="off" placeholder="请输入邮箱"></el-input>
  </el-form-item>
  <el-form-item  prop="yzm"  class="el-form">
    <el-input  v-model="ruleForm.yzm" autocomplete="off" placeholder="请输入验证码" class="el-input"></el-input>
     <button disabled="disabled" type="button" class="vcode-btn"> 获取验证码</button>
  </el-form-item>
  <el-form-item  prop="pass"  class="el-form">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
  </el-form-item>
   <el-form-item  prop="checkPass"  class="el-form">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
  </el-form-item>
   <p class="agree-content">
       <el-checkbox-group v-model="checkList" class="checklist">
    <el-checkbox label="" class="checklable">我已阅读并同意
    <a>《程序员用户协议》</a>
      </el-checkbox>
  </el-checkbox-group>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class="btn">注册</el-button>
  </el-form-item>
    <p class="change-status">
       <a href="/denglu" class="zhuce"> <span class="change-style" >已有帐号，立即登录</span></a>
    </p>
</el-form>
        </div>
        </div>
    
    </template>
<script>
  export default {
    data() {
      var validdataEamil=(rule,value,callback)=>{
          if(value===''){
              callback(new Error("请输入正确的邮箱"));
          }else{
             if (value !== '') {
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
          }
      };
       var validdataYzm=(rule,value,callback)=>{
          if(value===''){
              callback(new Error("请输入正确的验证码"));
          }else{
             if (value !=='') {
           var regs =/^[\s\S]{6,12}/;
           if(!regs.test(value)){
               callback(new Error('验证码不正确'));
           }
          }
          callback();
          }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入正确的密码'));
        }else if(value.length < 6){
          callback(new Error('密码长度最小6位'));
        }else{
          callback();
        }

      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          eamil:'',
          pass: '',
          checkPass: '',
          yzm:'',
        },
         checkList: ['选中且禁用','复选框 '],
        rules: {
         eamil:[
         { validator: validdataEamil, trigger: 'blur',required: true }
            ],
        yzm:[
         { validator: validdataYzm, trigger: 'blur',required: true }
            ],
          pass: [
            { validator: validatePass, trigger: 'blur',required: true }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur',required: true}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (!valid) {
           this.$message.error('注册失败');
          } else {
            this.$message.success('注册成功');
          }
        });
      },
     
    }
  }
</script>

<style>
    .zhuce-box{
    -webkit-box-shadow: 0 1px 10px 2px rgba(0,0,0,.05);
    -webkit-box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 10px 2px rgba(0,0,0,.05);
    box-sizing: border-box;
    text-align: center;
    width: 400px;
    height: 556px;
    position: absolute;
    left: 50%; 
    top: 50px;
    transform: translate(-50%);
}
.zhuce h3{
    color: #999;
    font-size: 20px;
    font-weight: 400;
    font-weight: lighter;
    letter-spacing: 3px;
    padding-bottom: 30px;
    text-align: center;
    padding: 20px; 
}
.el-form{
 height: 40px;
 width: 300px;
 padding-left: 30px;
 margin-top: 30px;
}
.vcode-btn:disabled {
    color: #cbcbcb;
}
.vcode-btn {
    background: none;
    border: 0;
    color:#409EFF;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 1.79px;
    line-height: 40px;
    padding: 0 22px 0 0;
    right: 10px;
    position:absolute;
}
.btn{
   height: 40px;
   width: 300px;
   margin-left: 30px;
   margin-top: 20px;
}
.agree-content {
    color: #535353;
    font-size: 12px;
    line-height: 14px;
    margin-top: 30px;
}
.checklist{
    text-align: left;
    margin-left: 30px;
}
.el-checkbox__label{
     font-size: 12px;
}
.agree-content a{
    text-decoration: none;
    font-size: 12px;
    color:#409EFF;
}
.change-style {
    color:#409EFF;
    cursor: pointer;
    font-size: 14px;
    line-height: 19px;
}
.change-status a{
  text-decoration:none;
}
</style>