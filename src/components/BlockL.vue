<template>
  <div class="paper">
    <h1>L. 神经性厌食症</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>
    <Remider content="选项上方的‘→’意为：转到诊断框，在相应的诊断判断项上圈“否”，然后转到下一题组"></Remider>
    <InputRow :question="q[0]" class="question"></InputRow>
    <InputRow :question="q[1]" class="question"></InputRow>
    <TFRow :question="q[2]" class="question" jumpable></TFRow>
    <div v-if="q[2].select">
      <Remider content="在过去的三个月里："></Remider>
      <TFRow :question="q[3]" class="question" jumpable></TFRow>
      <div v-if="q[3].select">
        <TFRow :question="q[4]" class="question"></TFRow>
        <div v-if="q[4].select">
          <TFRow :question="q[5]" class="question"></TFRow>
          <TFRow :question="q[6]" class="question"></TFRow>
          <TFRow :question="q[7]" class="question"></TFRow>
          <TFRow :question="q[8]" class="question"></TFRow>
        </div>
      </div>
    </div>

    <!-- 诊断框 -->
    <el-row style="margin: 10px 0">
      <div class="remiders">
        <Remider content="L5的编码为“是”吗？"></Remider>
      </div>
      <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
    </el-row>
    <!--    ref table-->
    <Remider content="表：成人标准身高/体质量（体重）参考阈值（身高—不含鞋；体质量—不含衣服）"></Remider>
    <div style="margin: auto; width: 360px">
      <el-table :data="tableData" border width="360" height="200">
        <el-table-column prop="height" label="身高（cm）" width="180"/>
        <el-table-column prop="weight" label="体质量（kg）" width="180"/>
      </el-table>
    </div>
    <Remider content="以上的体重是使用疾控预防中心身体质量指数（BMI）计算器根据不同身高BMI等于或低于17.0kg/m^2
      (根据DSM-5规定的神经性厌食症标准)计算出的阈值"></Remider>
  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";
import InputRow from "./InputRow";

export default {
  name: "BlockL",

  components: {InputRow, DiagnosticBox, Remider, TFRow},
  data() {
    return {
      q: this.questions,
      d: this.diagnosis,
      tableData: [
        {
          height: '145',
          weight: '36',
        },
        {
          height: '147',
          weight: '37',
        },
        {
          height: '150',
          weight: '38.5',
        },
        {
          height: '152',
          weight: '39.5',
        },
        {
          height: '155',
          weight: '41',
        },
        {
          height: '158',
          weight: '42.5',
        },
        {
          height: '160',
          weight: '43.5',
        },
        {
          height: '163',
          weight: '45.5',
        },
        {
          height: '165',
          weight: '46.5',
        },
        {
          height: '168',
          weight: '48',
        },
        {
          height: '170',
          weight: '49',
        },
        {
          height: '173',
          weight: '51',
        }, {
          height: '175',
          weight: '52',
        },
        {
          height: '178',
          weight: '54',
        },
        {
          height: '180',
          weight: '55',
        },
        {
          height: '183',
          weight: '57',
        },
        {
          height: '185',
          weight: '58.5',
        },
        {
          height: '188',
          weight: '60',
        },
        {
          height: '191',
          weight: '62',
        },
      ],
    };
  },
  methods: {},
  computed: {},
  props: {
    questions: Object,
    diagnosis: Object
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/deep/.el-table--border th.gutter:last-of-type {
  display: table-cell !important;
}
</style>
