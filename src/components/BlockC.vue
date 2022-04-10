<template>
  <div class="paper">
    <h1>C.躁狂发作</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>
    <!--    <div v-for="question in main_questions" :key="question.id" class="question">-->
    <!--    </div>-->
    <TFRow :question="q[0]" class="question"
           @change="change_hidden_status()"></TFRow>
    <TFRow :question="q[1]" class="question"
           v-if="furtherC1"></TFRow>
    <TFRow :question="q[2]" class="question"
           @change="change_hidden_status()"></TFRow>
    <TFRow :question="q[3]" class="question"
           v-if="furtherC2"></TFRow>


    <div v-if="require_detail_question">
      <hr/>
      <el-row class="question">
        <el-col :span="3">题号</el-col>
        <el-col :span="9">问题</el-col>
        <el-col :span="3" :offset="1">现在发作</el-col>
        <el-col :span="3">既往发作</el-col>
        <el-col :span="5">备注</el-col>
      </el-row>

<!--      C3-->
      <Remider content="如果C1b或C2b=是；则仅需要询问现在发作和既往症状最明显时的情形"></Remider>
      <Remider content="如果C1b和C2b=否；则询问既往症状最明显时的情形"></Remider>
      <PeriodTFRow :question="q[3]" class="question"></PeriodTFRow>
      <Remider content="如果选“是”，请举例子。"></Remider>
      <PeriodTFRow :question="q[4]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[5]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[6]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[7]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[8]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[9]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[10]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[11]" class="question"></PeriodTFRow>

      <OptionRow :question="q[12]" class="question"></OptionRow>

      <PeriodTFRow :question="q[13]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[14]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[15]" class="question"></PeriodTFRow>

      <Remider content="如果既往或当前躁狂发作编码“是”，请问："></Remider>
      <TFRow :question="q[15]" class="question"></TFRow>
      <Remider content="如果既往或当前（轻）躁狂发作编码“是”，请问："></Remider>
      <TFRow :question="q[16]" class="question"></TFRow>
      <Remider content="如果既往“轻躁狂表现”编码“是”，请问："></Remider>
      <TFRow :question="q[17]" class="question"></TFRow>

    </div>
    <!-- 诊断框 -->
    <el-row style="margin: 10px 0">
      <div class="remiders">
        <Remider content="是否C3总结并且C7和（C4或C5或C6或K1-K8任一项精神症状）"></Remider>
        <Remider content="编码“是”并且“排除器质性原因（O2总结）”编码“是”"></Remider>
        <Remider content="标注出这次发作是当前发作和/或既往"></Remider>

      </div>
      <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
    </el-row>

    <!-- 诊断框 -->
    <el-row style="margin: 10px 0">
      <div class="remiders">
        <Remider content="是否C3总结编码“是”，C5和C6编码“否”，C7编码“是”，C4b或C4c编码“是” 并且“排除器质性原因（O2总结）”编码“是”"></Remider>
        <Remider content="并且K1-K8所有精神症状编码“否”"></Remider>
        <Remider content="标注出这次发作是当前发作和/或既往"></Remider>
        <br>
        <Remider content="如果当前躁狂发作编码“是”，则当前轻躁狂发作编码“否”"></Remider>
        <Remider content="如果既往躁狂发作编码“是”，则既往轻躁狂发作编码“不详”"></Remider>
      </div>
      <DiagnosticBox :diagnosis_content="d[1]"></DiagnosticBox>
    </el-row>

    <!-- 诊断框 -->
    <el-row style="margin: 10px 0">
      <div class="remiders">
        <Remider content="是否C3总结和C4a编码“是”，并且C5编码“否”"></Remider>
        <Remider content="标注出这次发作是否是当前发作和/或既往"></Remider>
        <Remider content="如果当前躁狂发作或轻躁狂发作编码“是”，则当前轻躁狂发作编码“否”"></Remider>
        <Remider content="如果既往躁狂发作编码“是”，则既往轻躁狂发作编码“不详”"></Remider>
      </div>
      <DiagnosticBox :diagnosis_content="d[2]"></DiagnosticBox>
    </el-row>
  </div>
</template>

<script>
import TFRow from "./TFRow";
import PeriodTFRow from "./PeriodTFRow";
import OptionRow from "./OptionRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";


export default {
  name: "BlockC",
  components: {OptionRow, PeriodTFRow, TFRow, Remider, DiagnosticBox},
  data() {
    return {
      require_detail_question: false,
      furtherC1: false,
      furtherC2: false,

      q: this.questions,
      d: this.diagnosis
    };
  },
  methods: {

    change_hidden_status() {
      this.furtherC1 = this.q[0].select
      this.furtherC2 = this.q[2].select
      this.require_detail_question = this.q[0].select || this.q[2].select
    },
  },
  computed: {},
  props: {
    questions: Object,
    diagnosis: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.paper {
  margin: 0 auto;
  width: 1000px;
}
.question {
  margin: 30px 50px;
}

.remiders {
  margin: auto 0;
}

</style>
