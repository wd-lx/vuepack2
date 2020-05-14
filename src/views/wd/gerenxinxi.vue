<template>
    <div>
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
    <div class="verify">
        <div class="verify-top">
        <h4>实名认证</h4>
        <a href=""><span>去认证</span></a>
        </div>
    </div>
    <div class="info">
        <header class="info-header">
            <h4>工作信息</h4>
            <el-button type="primary">保存</el-button>
        </header>
        <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="工作方式" prop="name">
    <el-checkbox-group v-model="checkList">
    <el-checkbox label="远程工作"></el-checkbox>
    <el-checkbox label="驻场工作"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="工作状态" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择">
      <el-option label="求职" value="shanghai"></el-option>
      <el-option label="自由职业" value="beijing"></el-option>
      <el-option label="正常工作" value="zhengchang"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="职业方向" prop="type">
   <el-cascader :options="options" :show-all-levels="false"></el-cascader>
  </el-form-item>
  <el-form-item label="所在地区" prop="type">
   <el-cascader :options="optionss" :show-all-levels="false"></el-cascader>
  </el-form-item>
  <el-form-item label="日薪" prop="desc">
    <el-input-number v-model="num" @change="handleChange" :min="300" :max="1000" label="描述文字"></el-input-number>
  </el-form-item>
   <el-form-item label="工作时间" prop="timer">
     <el-checkbox-group v-model="checkList">
    <el-checkbox label="工作日">
      工作：
      <el-time-picker is-range v-model="value1" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
  </el-time-picker>
  </el-checkbox>
    <el-checkbox label="非工作日">
      周末：
      <el-time-picker is-range v-model="value1" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
  </el-time-picker></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="工作时长" prop="desc">
    <el-input-number v-model="nums" @change="handleChanges" :min="10" :max="100" label="描述文字"></el-input-number>
  </el-form-item>
</el-form>
    </div>
    <div class="jianli">
      <div class="jianli-top">
        <h4>个人简历</h4>
        <span>编辑</span>
      </div>
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="姓名：">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <!-- <el-form-item label="活动性质">
    <el-checkbox-group v-model="sizeForm.type">
      <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
      <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
      <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item> -->
</el-form>
    </div>
    <div class="jineng">
      <div class="jineng-top">
        <h4>个人技能</h4>
      <span>编辑</span>
      </div>
      <div class="zhengshu">
        <p>技能证书</p>
      </div>
      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea2"></el-input>
      <div class="ziping">
        <p>个人自评</p>
        <span class="demonstration">自评</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
      </div>    
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               value2: null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                activeName: '1',
                num: 1,
                nums:1,
                textarea2: '',
                value1: [new Date(2020, 5, 10, 8, 40), new Date(2020, 5, 10, 9, 40)],
                 checkList: ['',''],
                ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                type: [],
                resource: '',
                desc: '',
                timer:'',
                },
                 sizeForm: {
          name: '',
          sex: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
          options: [{
          value: 'chanpinjingli',
          label: '产品经理',
          children: [{
            value: 'chanpinjingli',
            label: '产品经理'
          },
           {
            value: 'xianmujingli',
            label: '项目经理',
          },{
            value: 'chanpinqita',
            label: '产品其他',
          }
          ]
        }, {
          value: 'shejishi',
          label: '设计师',
          children: [{
            value: 'uishejishi',
            label: 'UI设计师',
          }, {
             value: 'ueshejishi',
            label: 'UE设计师',
          }, {
            value: 'yuanhuashi',
            label: '原画师',
          }, {
             value: 'shejiqita',
            label: '设计其他',
          }],
        }, 
        {
          value: 'yidongduan',
          label: '移动端',
          children: [{
            value: 'ios',
            label: 'ios',
          }, {
             value: 'Android',
            label: 'Android',
          }, {
            value: 'yidongqita',
            label: '移动其他',
          }],
        }, 
        {
          value: 'qianduan',
          label: '前端',
          children: [{
            value: 'qianduan',
            label: '前端'
          }],
        },{
          value: 'houduan',
          label: '后端',
          children: [{
            value: 'ceshi',
            label: '测试'
          }],
        },{
          value: 'ceshi',
          label: '测试',
          children: [{
            value: 'qianduan',
            label: '前端'
          }],
        },{
          value: 'DBA',
          label: 'DBA',
          children: [{
            value: 'DBA',
            label: 'DBA'
          }],
        },{
          value: 'yunwei',
          label: '运维',
          children: [{
            value: 'yunwei',
            label: '运维'
          }],
        },{
          value: 'qita',
          label: '其他',
          children: [{
            value: 'qita',
            label: '其他'
          }],
        }
        ],
        optionss: [{
          value: 'beijing',
          label: '北京',
          children: [{
            value: 'beijing',
            label: '北京'
          }]
        }, {
          value: 'shanghai',
          label: '上海',
          children: [{
            value: 'shanghai',
            label: '上海',
          }],
        }, 
        {
          value: 'tianjing',
          label: '天津',
          children: [{
            value: 'tianjin',
            label: '天津',
          }],
        }, 
        {
          value: 'chongqing',
          label: '重庆',
          children: [{
            value: 'chongqing',
            label: '重庆'
          }],
        },{
          value: 'neimenggu',
          label: '内蒙古',
          children: [{
            value: 'huhehaote',
            label: '呼和浩特'
          }],
        },{
          value: 'shanxi',
          label: '山西',
          children: [{
            value: 'taiyuan',
            label: '太原'
          }],
        },{
          value: 'liaoning',
          label: '辽宁',
          children: [{
            value: 'dalian',
            label: '大连'
          },{
            value:'shenyang',
            label:'沈阳',
          },
          ],
        },{
          value: 'yunnan',
          label: '云南',
          children: [{
            value: 'kunming',
            label: '昆明'
          }],
        },{
          value: 'shanxii',
          label: '陕西',
          children: [{
            value: 'xian',
            label: '西安'
          },{
            value:'xianyang',
            label:'咸阳'
          },{
            value:'baoji',
            label:'宝鸡',
          },{
            value:'hanzhong',
            label:'汉中',
          }],
        }
        ],
      };
      },
       methods: {
      handleChange(value) {
        console.log(value);
      },
      handleChanges(value){
        console.log(value);
      },
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
.info{
    width: 1000px;
    height:600px;
    margin:20px auto;
    background-color:whitesmoke
}
.info-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 20px;
    border-bottom: 1px solid #ebeef5;
}
.info-header h4{
   line-height: 30px;
   font-size: 14px;
   float: left;
  color: #1d2a3a;
}
.el-form{
    padding-left: 40px;
    padding-top: 20px;
}
.el-form-item {
    width: 400px;
}
.el-form-item__label {
    text-align: left;
    padding-left: 20px;
}
.el-input--suffix .el-input__inner {
    width: 300px;
}
.el-cascader-menu__list {
    width: 300px;
}
.jianli{
  height: 400px;
  width: 1000px;
  margin: 20px auto;
  background-color: whitesmoke;
}
.jianli-top{
    height: 50px;
    width: 100%;
    /* background-color: pink; */
    /* margin-bottom: 20px; */
}
.jianli h4{
    line-height: 50px;
    font-size: 14px;
    float: left;
    padding-left: 20px;
    color: #1d2a3a;
}
.jianli span{
    line-height: 50px;
    float: right;
    font-size: 14px;
    color: #308eff;
    padding-right: 20px;
}
.jineng{
  height: 330px;
  width: 1000px;
  margin: 20px auto;
  background-color:whitesmoke;
}
.jineng-top{
    height: 50px;
    width: 100%;
    /* background-color: pink; */
    /* margin-bottom: 20px; */
}
.jineng h4{
    line-height: 50px;
    font-size: 14px;
    float: left;
    padding-left: 20px;
    color: #1d2a3a;
}
.jineng span{
    line-height: 50px;
    float: right;
    font-size: 14px;
    color: #308eff;
    padding-right: 20px;
}
.zhengshu{
  height: 30px;
  width: 1000px;
  /* background-color: red; */
}
.zhengshu p{
  font-size: 14px;
  line-height: 30px;
  padding-left: 20px;
  color: #1d2a3a
}
.el-textarea__inner{
  width: 400px;
  margin-top: 20px;
  margin-left: 20px;
}
.ziping{
  height: 30px;
  width: 1000px;
  /* background-color: red; */
  margin-top: 20px;
}
.ziping p{
  font-size: 14px;
  line-height: 30px;
  padding-left: 20px;
  color: #1d2a3a
}
.jineng .demonstration {
    line-height: 50px;
    float: right;
    font-size: 14px;
    color: #308eff;
    padding-right: 20px;
    float: left;
    padding-left: 20px;
}
.el-rate {
    float: left;
}
</style>