<template>
    <div>

   
      <div id="app">
        <div id="logo">
          <a href="" id="logo-link"></a>
        </div>
       <p id="h3">登录开启云工作</p>
       <div id="work">
         <div id="work-div">
          
         

          <div id="data">
            <dl>
                <p class="zhangdeng">账号登录</p>
 <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
 <el-form-item   prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入用户名" ></el-input>
  </el-form-item>
  <el-form-item  prop="passwrd">
    <el-input placeholder="请输入密码" v-model="ruleForm.passwrd" show-password></el-input>
   </el-form-item>
   <el-form-item class="wangjimi">
     <a href="zhucu.vue" class="wangmi" ><p class="wangji">忘记密码</p></a>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class="lidengl">立即登录</el-button>
    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
  </el-form-item>          
                <!-- <a href="#" id="srrt"> 登录</a> -->
                <a href="zhuce.vue" class="lice"><p class="lizhu">还没有云账号?立即注册</p></a>        
         </el-form>  
            </dl>          
          </div>
         </div>
       </div>
         <p class="banquan">Copyright© 2020,北京云族佳科技有限公司版权所有</p>
      </div>
    </div>
</template>

<script>
    export default {
       data() {
           var validdataRouter=(rule,value,callback)=>{
          if(value===''){
              callback(new Error("请输入正确的用户名"));
          }else{
             if (value !== '') {
            var reg=/^[a-zA-Z0-9_-]{0,30}$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的用户名'));
            }
          }
          callback();
          }
      };
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入正确的密码'));
        }else{

       if(value!==''){
            var regs = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
            if(!regs.test(value)){
              callback(new Error('密码格式不正确'));
            }
        }
          callback();
        }

      };
      return {
        input: '',
        inpute:'',
        ruleForm: {
          name: '',
          passwrd:'',
         },
          rules: {
        //   name: [
        //     { validator: validdataRouter, trigger: 'blur',required: true  },
           
        //   ],
          passwrd: [
            // { validator: validatePass, trigger: 'blur',required: true   },
            
          ],
          },
      }
      
    },
     methods: {
      
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/wb/login',{
                 email:this.ruleForm.name,
                 password:this.ruleForm.passwrd,
            }).then(res=>{
                console.log(res);
                if(res.data.code===400){
                  this.$message.error('用户名不存在！')
          }else if(res.data.code===200) {
                sessionStorage.setItem('ss',JSON.stringify(res.data.extend.user))
                this.$router.push('/shouye')
          }
            })
             
          } 
         
              
          
        });
      },
     
     }
    
}
    
    
</script>

<style>
.wangjimi{
    height: 10px;
}
.lidengl{
    width: 100%;
    height: 45px;
}
.banquan {
    margin: -28px auto;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #ccc;
    font-weight: lighter;
}
.lizhu{
    font-size: 12px;
    margin: 25px auto;
    width: 200px;
    text-align: center;
}
.lice{
    text-decoration: none;
    color: #ff6710;
    
}
.wangji{
    font-size: 12px;
    color: #ff6710;
    float: right;
    margin-top: -5px;
}
.zhangdeng{
    margin: 40px auto;
    width: 80px;
    color: #ff6710;
    font-size: 20px;
}
.wangmi{
    height: 10px;
}
.el-form-item__content {
    line-height: 12px;
    position: relative;
    font-size: 14px;
}
.el-button{
    margin-top: 0px;
}
.el-input__inner{
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
    height: 45px;
    line-height: 45px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    margin-top: 10px;
}
.el-icon-view:before {
    content: "\E6CE";
    position: absolute;
    margin-top: 15px;
}
#right{
    display: inline-block;
}
.block{
  background-color: #e8e8e8;
    height: 45px;
    line-height: 45px;
    position: relative;
    text-align: center;
    width: 100%;
        color: #9c9c9c;
        font-size: 12px;
    margin-top: 20px;
}

/* 滑块 */

#app{
    width: 100%;
    height: 670px;
    /* background-color: chartreuse; */
    float: left;
}
#logo{
     width: 1200px;
    height: 50px;
    /* background-color:rosybrown; */
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
    margin-top:30px;
}
#work-div{
    box-shadow: none;
    
    position: relative;
    margin: 0px auto;
    width: 400px;
    height: 420px;
    background-color:white;
    /* border: 1px solid red; */
    box-shadow:0 1px 10px 2px rgba(0,0,0,.05);
    overflow: hidden;
}
#h3{
        color: #333;
    font-size: 30px;
    letter-spacing: 3px;
    /* line-height: 27px; */
    padding-bottom: 10px;
    text-align: center;
    /* font-weight: 300; */
    font-weight: 100px;
    color: #999999;
    margin-top: 60px;
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
    dl{
            box-sizing: border-box;
    margin: auto;
    padding: 0;
    width: 300px;
    height: 400px;
    /* background-color: cornsilk; */
    overflow: hidden;
    }
    #srrt{
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
}
</style>