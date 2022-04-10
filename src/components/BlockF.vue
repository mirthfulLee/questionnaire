<template>
  <div class="paper">
    <h1>F. 社交焦虑障碍（社交恐惧症）</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>
    <!--    <div v-for="question in main_questions" :key="question.id" class="question">-->
    <!--    </div>-->
    <TFRow :question="q[0]" class="question" jumpable
           @change="this.require_detail_question = this.q[0].select"></TFRow>

    <div v-if="require_detail_question">
      <hr/>
      <TFRow :question="q[1]" class="question" jumpable></TFRow>
      <TFRow :question="q[2]" class="question" jumpable></TFRow>
      <TFRow :question="q[3]" class="question" jumpable></TFRow>
      <TFRow :question="q[4]" class="question" jumpable></TFRow>
      <TFRow :question="q[5]" class="question" jumpable></TFRow>
    </div>
    <!-- 诊断框 -->
    <el-row>
      <div class="remiders">
        <Remider content="F6是否编码“是”？"></Remider>
        <Remider content="并且“排除器质性原因（O2总结）”编码“是”"></Remider>
        <br>
        <Remider content="给临床医生的提示：请标注出患者是否仅限于公共场所的演讲或表演带来的恐惧"></Remider>

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
  name: "BlockF",
  components: {TFRow, Remider, DiagnosticBox},
  data() {
    return {
      require_detail_question: false,
      q: this.questions,
      d: this.diagnosis
    };
  },
  methods: {
  },
  computed: {},
  props: {
    questions: Object,
    diagnosis: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
