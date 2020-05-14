<template>
    <div>
    <div class="bjil">
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
          this.$axios.post("/wb/edu/identification/identify",fromDatalist).then(res=>{
              console.log(res);
              if(res.data.code===200){
                   this.$message({
                     message: '恭喜你，验证成功',
                   type: 'success',
                   
                    });
                   this.$router.push('/gerenxinxi')
              }else if(res.data.code===400){
                  this.$message.error('认证错误，请检查信息');
              }

          })
      }

    }
    }
</script>

<style>
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
    height: 1000px;
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