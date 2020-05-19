<template>
    <div class="zhuce">
      <!-- <div class="zhuce-top">
       <div class="zhuce-img"></div>
       <p>互联网外包平台项目</p>
       <div class="zhuce-right">
        <p class="zhuce-right-span">已有帐号?</p>
        <a href="/denglu"><p class="zhuce-right-denglu">登录</p></a> 
       </div>
      </div> -->
        <div class="zhuce-box">
            <h3>注册一个新帐户</h3>
         <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="" class="demo-ruleForm">
  <el-form-item prop="email" class="el-form">
    <el-input v-model="ruleForm.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
  </el-form-item>
  <el-form-item  prop="yzm"  class="el-form">
    <el-input  v-model="ruleForm.yzm" autocomplete="off" placeholder="请输入验证码" class="el-input"></el-input>
     <el-button  type="button" class="vcode-btn" @click="getyzm()"> 获取验证码</el-button>
  </el-form-item>
   <el-form-item  prop="username"  class="el-form">
    <el-input  v-model="ruleForm.username" autocomplete="off" placeholder="请输入用户"></el-input>
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
       <a href="/denglu" class="zhuce"> <span class="change-style" >已有云账号?立即登录</span></a>
    </p>
</el-form>
        </div>
        </div>
    
    </template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          email:'',
          pass: '',
          checkPass: '',
          yzm:'',
          username:''
        },
         checkList: ['选中且禁用','复选框 '],
      };
    },
    methods: {
      getyzm(){
        this.axios.post('/wd/user/addusers',{email:this.ruleForm.email}).then(res=>{
          console.log(res);
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post('/wd /user/addusers',{
              email:this.ruleForm.email,
              code:this.ruleForm.yzm,
              userName:this.ruleForm.username,
              userPassword:this.ruleForm.pass
            }).then(res=>{
              console.log(res);
              if(res.data.code!==this.ruleForm.yzm){
                    this.$message.error('验证码不正确')  
                  }else if(res.data.email!==this.ruleForm.emai){
                    this.$message.error('邮箱不正确')  
                  }else  if(res.data.code!==this.ruleForm.pass){
                  this.$message.error('密码错误')
                  }else{
                   sessionStorage.setItem('ss',JSON.stringify(res.data.extend.user))
                   this.$router.push('/denglu')
                    }
             })
          } 
        });
      },
    }
  }
</script>

<style>
  .zhuce-top{
    height: 50px;
    width: 1200px;
    margin: auto;
  }
  .zhuce-img{
    height: 50px;
    width: 100px;
    background-color: pink;
    float: left;
  }
  .zhuce-top p{
    height: 50px;
    line-height: 50px;
    color: #333333;
    width: 300px;
    text-align: center;
    float: left;
    font-size: 14px;
  }
  .zhuce-right{
    height: 50px;
    width:200px;
    float: right;
  }
  .zhuce-right .zhuce-right-span{
    line-height: 50px;
    width: 70px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
  .zhuce-right .zhuce-right-denglu{
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #4289dc;
    color: #4289dc;
    font-size: 12px;
    text-align: center;
    width: 68px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .vcode-btn {
    background: none;
    border: 0;
    color: #409EFF;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 1.79px;
    line-height: 40px;
    padding: 0 17px 0 0;
    right: 10px;
    position: absolute;
    top: 0px;
}
  .zhuce-right .zhuce-right-denglu:hover{
    background-color: #4289dc;
    color: #fff;
  }
    .zhuce-box{
    -webkit-box-shadow: 0 1px 10px 2px rgba(0,0,0,.05);
    -webkit-box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 10px 2px rgba(0,0,0,.05);
    box-sizing: border-box;
    text-align: center;
    width: 400px;
    height:600px;
    position: absolute;
    left: 50%; 
    top: 80px;
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
    right: -10px;
    position:absolute;
    height: 0px;
}
.vcode-btn:hover{
  color: #1989fa;;
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
    font-size: 12px;
    line-height: 19px;
}
.change-status a{
  text-decoration:none;
}
.change-status{
 margin-left: 30px;
 height: 19px;
 width: 300px;
 text-align: center;
}
</style>