<template>
    <div>

    <div class="bjil">

    <div class="intro">
        <h3>完善个人简历后，才能申请签约开发者进行接单</h3>
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
    <!-- <div class="verify">
        <div class="verify-top">
        <h4>实名认证</h4>
        <a href=""><span>去认证</span></a>
        </div>
    </div> -->

        <div class="snmity">
            <p class="titerz">实名个人信息</p>
        
        
        <el-form ref="form" :model="form" label-width="80px">
           <div class="namexm"> <el-form-item label="名字">
             <el-input v-model="form.name"></el-input>
           </el-form-item></div>
            <div class="namexm"> <el-form-item label="身份证号">
             <el-input v-model="form.namecard"></el-input>
           </el-form-item></div>
           
        <div class="zhengm">请上传身份证正面：</div>
       <div class="namexmtw"> 
           <el-upload
        class="upload-demo"
        action :http-request="fileupload"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip" >只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        </div>

        <!-- <div class="zhengml">请上传身份证反面：</div> -->
       <!-- <div class="namexmtw"> <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
           :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload></div> -->

         <el-form-item size="large">
         <el-button class="yanzng" type="primary" @click="onSubmit">立即验证</el-button>
        </el-form-item>
        </el-form>


        </div>
    </div>
    </div>
</template>

<script>
    export default {
       data() {
      return {
          fileList: {},
        form: {
          name: '',
          namecard:'',
          
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      fileupload(params){
          this.fileList=params.file;
      },
      onSubmit(){
          let fromDatalist=new FormData();
          fromDatalist.append("file",this.fileList)
          fromDatalist.append("username",this.form.name)
          fromDatalist.append("idnumber",this.form.namecard)
          this.$axios.post("/mhy/pro/identification/identify",fromDatalist).then(res=>{
              console.log(res);
              if(res.data.code===200){
                   this.$message({
                     message: '恭喜你，验证成功',
                   type: 'success',
                   
                    });
                   this.$router.push('/jianjie')
              }else if(res.data.code===400){
                  this.$message.error('认证错误，请检查信息');
              }

          })
      }

    }
    }
</script>

<style>
.intro{
    height: 310px;
    width: 800px;
    margin: 20px auto;
    background-color: white;
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
.titerz{
    width: 740px;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin-left: 30px;
    padding: 0;
    line-height: 80px;
    font-weight: 700;
    /* line-height: 1.33em; */
    color: rgba(0, 0, 0, .8);
}
.snmity{
    width: 800px;
    height: 600px;
    margin: 30px auto;
    background: white;
    overflow: hidden;
}
.bjil{
    background: #f7f7f7;
    width: 100%;
    overflow: hidden;
}
.namexm{
    width: 350px;
    margin-top: 20px;
    margin-left: 30px;
    /* border: 1px solid red; */
}
.namexmtw{
    width: 500px;
    margin-top: 10px;
    margin-left: 30px;
    height: 200px;
    border: 1px solid #948a8a;
}
.el-button--small {
    font-size: 12px;
    border-radius: 3px;
    margin-left: 210px;
    margin-top: 30px;
}
.el-upload__tip {
    font-size: 12px;
    color: #606266;
    margin-top: 7px;
    text-align: center;
}
.zhengm{
    margin-left: 30px;
    font-size: 14px;
    color:#606266;
}
.zhengml{
    margin-left: 30px;
    font-size: 14px;
    color:#606266;
    margin-top: 10px;
}
.yanzng {
    margin-left: -50px;
    margin-top: 34px;
}
.el-upload__tip {
    font-size: 12px;
    color: #606266;
    margin-top: 16px;
    text-align: center;
}
</style>