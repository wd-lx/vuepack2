<template>
    <div>

  <form>
      <div id="app">
        <div id="logo">
          <a href="" id="logo-link"></a>
        </div>
       
       <div id="work">
         <div id="work-div">
          <h3 id="h3"> 找回密码</h3>
          <p id="tips">请使用您的邮箱找回密码</p>

          <div id="data">
              

<el-form :model="forRuleForm" status-icon :rules="rules" ref="forRuleForm"  class="demo-ruleForm" >
    <el-form-item  prop="femail">
        <el-input v-model="forRuleForm.femail" placeholder="邮箱" ></el-input>
    </el-form-item>
  <el-form-item  prop="fyzm">
    <el-input  v-model="forRuleForm.fyzm" autocomplete="off" placeholder="验证码">
    </el-input>
    <el-button  @click="getum" id="mlo">获取验证码</el-button>
  </el-form-item>
    <el-form-item  prop="pass">
    <el-input type="password" v-model="forRuleForm.pass" autocomplete="off" placeholder="新密码" ></el-input>
  </el-form-item>

  <el-form-item  prop="qrpass">
    <el-input type="password" v-model="forRuleForm.qrpass" autocomplete="off" placeholder="确认密码" ></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('forRuleForm')" class="xyb">下一步</el-button>
  </el-form-item>
</el-form>




             <!-- <a id="src" > 下一步</a> -->


               <a id="tvb" href="denglu">已有云沃客帐号，立即登录</a>

               <p class="sign-footer footer-margin92">Copyright© 2020,北京云族佳科技有限公司版权所有</p>
          </div>



         </div>
       </div>


      </div>

    </form>



    </div>
</template>
 
<script>
  export default {
    data() {
      return {
        forRuleForm: {
            femail:'',
          pass: '',
          qrpass:'',
          fyzm: ''
        },
      };
    },

    methods: {
        getum(){
              this.axios.post('/wb/sendEmail',{email:this.forRuleForm.femail}).then(res=>{
                  console.log(res);
              })
        },


      submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.axios.post('/wb/changePassword',{
                  email:this.forRuleForm.femail,
                  code:this.forRuleForm.fyzm,
                  password:this.forRuleForm.pass
              }).then(res=>{
                  console.log(res);
                  if(res.data.code!==this.forRuleForm.fyzm){
                    this.$message.error('验证码不正确')  
                  }else if(res.data.email!==this.forRuleForm.femail){
                    this.$message.error('邮箱不正确')  
                  } else if(res.data.password===this.forRuleForm.pass) {
                      this.$router.push('/dengshu')
                  }
              })
              
            // alert('submit!');
          } 
          else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.xyb{
    width: 100%;
}
#mlo {
    background-color: white;
    width: 100px;
    height: 40px;
    
    display: inline-block;
    z-index: 45555555555;
    margin-left: -100px;
    position: absolute;
    font-size: 12px;
}
#tgb{
    width: 50px;
    height: 40px;
    background-color: yellow;
}




.sign-footer {
    color: #333;
    font-size: 14px;
    font-weight: lighter;
    margin-top: 55px;
    text-align: center;
}
#tvb{
    width: 335px;
    height: 20px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #ff6710;
    cursor: pointer;
    font-size: 14px;
    line-height: 19px;
    margin-top: 20px;
}
#mlo {
    background-color: white;
    width: 100px;
    height: 40px;
    display: inline-block;
    z-index: 45555555555;
    margin-left: -100px;
    position: absolute;
    left: 335px;
    top: 0;
    font-size: 12px;
}
/* #src{
    width: 335px;
    height: 45px;
    background-color:#ff6710 ;
    display: inline-block;
    border: 0;
    border-radius: 4px;
    clear: right;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    height: 45px;
    letter-spacing: 4.57px;
    margin-top: 30px;
    padding: 0;
    text-align: center;
    line-height: 45px;
    text-decoration: none;
} */
#img-text{
    height: 10px;
    width: 80px;
    font-size: 10px;
    text-align: center;
    line-height: 10px;
    color:#666 ;
    display: inline-block;
        position: absolute;
    margin: auto;
    margin-left: 8px;
    margin-top:2px;
    cursor: pointer;
}
#img-text:hover{
    color: blue;
    
}
#yanzheng{

    border-radius: 4px;
    box-sizing: border-box;
    color: #666;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    width: 335px;
}
#pop{
     -webkit-box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-sizing: border-box;
    color: #666;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 45px;
    line-height: 45px;
       background-color: white;
    overflow: hidden;
    position: relative;
    width: 200px;
    outline: none;
    padding: 0 0 0 20px;
    vertical-align: middle;
    width: 100%;
}
#ing{
    width:130px ;
    height: 45px;
   
    float: left;
}
#ing-ma{
    width: 80px;
    height: 30px;
    background-color: violet;
    margin: auto;
}
/* 滑块 */

/* 滑块 */

#app{
    width: 100%;
    height: 670px;

    float: left;
}
#logo{
     width: 1200px;
    height: 50px;

    margin: 0 auto;
    position: relative;
}
#logo-link{
        background: url(//static.clouderwork.com/passport/static/img/logo-signin.8c0ca75.png) no-repeat 50%;
    height: 57px;
    left: 0;
    position: absolute;
    top: 21px;
    width: 216px;
    /* background-color: thistle; */
}
#work{
     width: 100%;
    height: 500px;
    /* background-color: mediumorchid; */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-top: 120px;
}
#work-div{
    box-shadow: none;
    
    position: relative;
    margin: 0px auto;
    width: 1200px;
    height: 500px;
    background-color:white;
}
#h3{
        color: #333;
    font-size: 20px;
    letter-spacing: 3px;
    line-height: 27px;
    padding-bottom: 10px;
    text-align: center;
    font-weight: 300;
}
#tips{
    color: #999;
    font-size: 14px;
    letter-spacing: 2.09px;
    line-height: 19px;
    padding-bottom: 25px;
    text-align: center;
    }
    #data{
        width: 335px;
        height: 405px;
        margin: 0px auto;
        /* background-color: orange; */
    }
.el-form-item_content {
    margin-left: 0px;
}


.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    width: 300px;
    height: 40px; 
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
/* 
验证 */
    /* dl{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 335px;
    height: 175px;
  
    }
    #input{  
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-sizing: border-box;
    color: #666;
    display: flex;
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    }
      #yonghu{  
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-sizing: border-box;
    color: #666;
    display: flex;
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    }
    #text{
    background-color: #fff;
    border: 0;
    box-sizing: border-box;
    color: #666;
    font-size: 14px;
    line-height: 20px;
    padding: 0 0 0 20px;
    vertical-align: middle;
    width: 100%;
    outline: none;
    }
     #red{
    background-color: #fff;
    border: 0;
    box-sizing: border-box;
    color: #666;
    font-size: 14px;
    line-height: 20px;
    padding: 0 0 0 20px;
    vertical-align: middle;
    width: 100%;
    outline: none;
    } */

    /* 
验证 */

</style>