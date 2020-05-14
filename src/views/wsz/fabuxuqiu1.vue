<template>
    <div>  
       
        <div id="section">
              <div id="section-1">
                <div id="put">
                  <p>1、请提供详细的项目资料，以便于我们为您推荐合适的开发者</p>
                  <p>2、整包项目收费标准：报价含14%的平台服务费，如需开票另收税费9.36%</p>
                 <p>3、项目发布之后，客栈工作人员将在半个工作日内联系您</p>
                </div>
      
                <div id="liaojie">
                    第一步：项目名称
                    <a href="">(了解更多)</a>
                </div>
                  
                <div id="kuang">
                 <!-- 项目组件 -->
                   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                       <el-form-item  prop="name">
                       <el-input v-model="ruleForm.name" placeholder="请输入项目名称，1到20个字内"></el-input>
                        </el-form-item>
                   <div id="liaojie-2">
                    第二步：我的项目类型
                    <a href="">(可多选)</a>
                   </div>
                    <!-- 项目类型多选组件 -->
                    <div id="ios"> 
                        <el-form-item  prop="duoxuan">
                      <el-checkbox-group v-model="checkList">
                      <el-checkbox label="Android">Android</el-checkbox>
                      <el-checkbox label="iOS">iOS</el-checkbox>
                      <el-checkbox label="PC网站">PC网站</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>

                    </div>

                    <!-- 项目介绍 -->
                     <div id="liaojie-3">
                    第一步：项目预算
                    <a href="">(元)</a>
                   </div>
                    
                    <!-- 预算组件  -->
                     <div id="shuilv">
                      <el-form-item  prop="shuilv">
                      <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10" ></el-input-number>
                       <el-checkbox label="需要开发票  税率(9.36%)" ></el-checkbox>
                      </el-form-item>
                     </div>
                    </el-form>
                    
                    <!-- 项目介绍 -->
                    <div id="liaojie-4">
                    第四步：我的项目介绍
                    <a href=""></a>
                   </div>
                    
                     
                   <el-input
                       type="textarea"
                       :rows="2"
                       placeholder="请输入内容"
                       v-model="textarea">
                    </el-input>
                    


                  <!-- 上传文件 -->
                  <div id="wenjian">
                    <!-- 上传文件组件 -->
                    <el-upload  class="upload-demo" action multiple :limit="3" :http-request="uploadfile">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                  </div>    
                 <el-button type="primary" @click="submitForm" id="fabu">发布</el-button>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        //   复选框
          checkList: [],
          //   税率
          num: 1,
        //   介绍框
          textarea: '',
        //   上传文件
            fileList: {},      
        ruleForm: {
          // name: '',
          //  duoxuan: '',
           shuilv: '',
        //    dianji: '',
        //   delivery: false,
        //   type: [],
        //   resource: '',
        //   desc: ''
        },
        rules: {
          // name: [
          //   { required: true, message: '请输入项目名称', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          // ],

          //   duoxuan: [
          //    { required: true, message: '请最少选择一个项目类型', trigger: 'change' }
          //  ],
        //    shuilv: [
        //      { type: 'date', required: true, message: '请输入项目预算', trigger: 'change' }
        //    ],
        //     dianji: [
        //       { type: 'date', required: true, message: '请上传文件', trigger: 'change' }
        //    ],
        //    wenjian: [
        //      { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        //    ],
        //   resource: [
        //     { required: true, message: '请选择活动资源', trigger: 'change' }
        //   ],
        //   desc: [
        //     { required: true, message: '请填写活动形式', trigger: 'blur' }
        //   ]
        }
      };
    },
    methods: {
        uploadfile(aa){
            console.log(aa);
            this.fileList=aa.file;
        },
      submitForm(formName) {
      
              console.log(this.checkList)
            let fromdata=new FormData();
            fromdata.append('demandFile',this.fileList)
            fromdata.append('demandBudget',this.num)
            fromdata.append('demandDetail',this.textarea)
            fromdata.append('demandName',this.ruleForm.name)
            fromdata.append('demandType',this.checkList)
            this.$axios.post('/wsz/demand/demand',fromdata).then(res=>{
                console.log(res);
            })
      
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    //   税率
     handleChange(value) {
        console.log(value);
      },
    //  上传文件
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
     
    }
  }
</script>

<style>
#section{
    background-color: #F7F7F7; 
    /* background-color: red; */
    width: 100%;
    overflow: hidden;
    height: 980px;
}
#section-1{
     background-color:white; 
   
    width: 1000px;
    height: 929px;
    margin: 20px auto;
    overflow: hidden;
    border: 1px solid #eee;
}
#put{
   margin: 0 25px 25px;
    padding: 10px 20px;
    background-color: #ebf5fe;
    border: 1px solid #badefb;
    color: #73afe0;
    font-size: 12px;
    width: 900px;
    height: 65px;
    margin:  20px auto;
}
#put p{
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
} 
#liaojie{
   height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #19222e;
      width: 942px;
      /* background-color: blanchedalmond; */
        margin:  30px auto;
}
#liaojie a{
        color: #258fe6;
        cursor: pointer;
        text-decoration: none;
}  

#kuang{
     height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #19222e;
      width: 942px;
      /* background-color: red; */
        margin:   auto;
}
 /* 项目组件  */
 .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 535px;
    height: 40px;
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
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    margin-left: -100px;
}
.el-form-item__error {
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 0;
    margin-left: -100px;
}
/* 多选 */
#liaojie-2{
   height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #19222e;
      width: 942px;
      /* background-color: blanchedalmond; */
        margin:  10px auto;
}
#liaojie-2 a{
         color: #19222e;
        cursor: pointer;
        text-decoration: none;
} 
  /* 项目类型多选组件  */
  #ios{
      height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #19222e;
    width: 942px;
     /* background-color: blanchedalmond;  */
    /* margin: 10px auto; */
  }
  .el-checkbox-group {
    font-size: 0;
    margin-left: -100px;
}

/* 项目介绍 */
#liaojie-3{
   height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #19222e;
    width: 942px;
    /* background-color: blanchedalmond;  */
    margin:  30px auto;
}
#liaojie-3 a{
color: #19222e;
cursor: pointer;
text-decoration: none;
}  
/* 预算组件 */
#shuilv{
       height: 40px;
    line-height: 30px;
    font-size: 13px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #19222e;
    width: 942px;
    /* background-color: blanchedalmond; */
}
.el-input-number.is-controls-right .el-input__inner {
    padding-left: 15px;
    padding-right: 50px;
    width: 280px;
    margin-left: -100px;
}
 /* 项目介绍   */
#liaojie-4{
   height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #19222e;
    width: 942px;
     /* background-color: blanchedalmond;   */
    margin:  30px auto;
}
#liaojie-4 a{
color: #19222e;
cursor: pointer;
text-decoration: none;
}  
.el-textarea {
    position: relative;
    display: inline-block;

    vertical-align: bottom;
    font-size: 14px;
    background-color: #f7f9fb;
    width: 742px;
    height: 166px;
}
.el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
   
    box-sizing: border-box;
    width: 742px;
    height: 166px;;
    font-size: inherit;
    color: #606266;
    background-color: #FFF;
    background-image: none;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    background-color: #f7f9fb;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
/* 上传文件 */
#wenjian{
    width: 738px;
    height: 90px;
    border: 2px dashed #ccc;
    margin-top: 20px;
}
.el-upload {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    outline: 0;
    margin-left: 331px;
    margin-top: 10px;
}
#chuan{
    text-align: center;
    color: #AAA;
    width: 742px;
}

#fabu{
    margin-top: 30px;
   
}

</style>