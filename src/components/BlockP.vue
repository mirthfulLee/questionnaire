<template>
  <div class="paper">
    <h1>P. 反社会人格障碍</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>

    <Remider content="在15岁以前，你是否："></Remider>
    <TFRow :question="q[0]" class="question"></TFRow>
    <TFRow :question="q[1]" class="question"></TFRow>
    <TFRow :question="q[2]" class="question"></TFRow>
    <TFRow :question="q[3]" class="question"></TFRow>
    <TFRow :question="q[4]" class="question"></TFRow>
    <TFRow :question="q[5]" class="question"></TFRow>
    <Remider content="若为否，跳过剩余的P2问题，转到诊断框圈“否”，然后进入下一题组："></Remider>
    <TFRow :question="q[6]" class="question" @change="change_hidden_status1()" jumpable></TFRow>

    <div v-if="require_detail_question">
      <br>
      <Remider content="如果下面的行为完全是出于政治或宗教动机，则不要勾“是”。"/>
      <Remider content="从15岁以后，你是否："/>
      <TFRow :question="q[7]" class="question"></TFRow>
      <TFRow :question="q[8]" class="question"></TFRow>
      <TFRow :question="q[9]" class="question"></TFRow>
      <TFRow :question="q[10]" class="question"></TFRow>
      <TFRow :question="q[11]" class="question"></TFRow>
      <TFRow :question="q[12]" class="question"></TFRow>
      <TFRow :question="q[13]" class="question"></TFRow>
    </div>
    <!-- 诊断框 -->
    <el-row>
      <Remider content="有3项或以上回答编码“是”吗？"></Remider>
      <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
    </el-row>



  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";

export default {
  name: "BlockP",
  components: {DiagnosticBox, Remider, TFRow},
  data() {
    return {
      require_detail_question: false,
      q: this.questions,
      d: this.diagnosis
    };
  },
  methods: {
    change_hidden_status1() {
      let cnt = 0
      for (let i=0;i<=5;i++){
        cnt += this.q[i].select
      }
      this.require_detail_question = (cnt >= 2)
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