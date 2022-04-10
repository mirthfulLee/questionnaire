<template>
  <div class="paper">
    <h1>D.惊恐障碍</h1>
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
           v-if="furtherD1"></TFRow>


    <div v-if="require_detail_question">
      <hr/>
      <TFRow :question="q[2]" class="question"></TFRow>
      <TFRow :question="q[3]" class="question"></TFRow>
      <!-- D4 -->
      <Remider content="在你能记起的最严重的发作期间，是否有下列情形">
      </Remider>
      <TFRow :question="q[4]" class="question"></TFRow>
      <TFRow :question="q[5]" class="question"></TFRow>
      <TFRow :question="q[6]" class="question"></TFRow>
      <TFRow :question="q[7]" class="question"></TFRow>
      <TFRow :question="q[8]" class="question"></TFRow>
      <TFRow :question="q[9]" class="question"></TFRow>
      <TFRow :question="q[10]" class="question"></TFRow>
      <TFRow :question="q[11]" class="question"></TFRow>
      <TFRow :question="q[12]" class="question"></TFRow>
      <TFRow :question="q[13]" class="question"></TFRow>
      <TFRow :question="q[14]" class="question"></TFRow>
      <TFRow :question="q[15]" class="question"></TFRow>
      <TFRow :question="q[16]" class="question"></TFRow>
      <!-- D5, D6 -->
      <TFRow :question="q[17]" class="question" jumpable></TFRow>
      <TFRow :question="q[18]" class="question"></TFRow>
    </div>

    <!-- 诊断框 -->
    <el-row>
      <div class="remiders">
        <Remider content="D5或D6是否编码“是”"></Remider>
        <Remider content="并且“排除器质性原因（O2总结）”编码“是”"></Remider>
        <Remider content="标注出这次发作是现患和/或终身"></Remider>
      </div>
      <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
    </el-row>

  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";


export default {
  name: "BlockD",
  components: {DiagnosticBox, Remider, TFRow},
  data() {
    return {
      require_detail_question: false,
      furtherD1: false,

      q: this.questions,
      d: this.diagnosis
    };
  },
  methods: {

    change_hidden_status() {
      this.furtherD1 = this.q[0].select
      this.require_detail_question = this.q[0].select
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

</style>
