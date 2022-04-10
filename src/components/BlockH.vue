<template>
  <div class="paper">
    <h1>H.创伤后应激障碍</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>
    <!--    <div v-for="question in main_questions" :key="question.id" class="question">-->
    <!--    </div>-->
    <TFRow :question="q[0]" class="question" jumpable
           @change="change_hidden_status()"></TFRow>
    <TFRow :question="q[1]" class="question" jumpable
           @change="change_hidden_status()"></TFRow>

    <div v-if="require_detail_question">
      <hr/>
<!--      H3-->
      <Remider content="在过去一个月内:"></Remider>
      <TFRow :question="q[2]" class="question" ></TFRow>
      <TFRow :question="q[3]" class="question" ></TFRow>
      <TFRow :question="q[4]" class="question" jumpable></TFRow>

<!--      H4-->
      <Remider content="在过去一个月内:"></Remider>
      <TFRow :question="q[5]" class="question" ></TFRow>
      <TFRow :question="q[6]" class="question" ></TFRow>
      <TFRow :question="q[7]" class="question" ></TFRow>
      <TFRow :question="q[8]" class="question" ></TFRow>
      <TFRow :question="q[9]" class="question" ></TFRow>
      <TFRow :question="q[10]" class="question" ></TFRow>
      <TFRow :question="q[11]" class="question"></TFRow>
      <TFRow :question="q[12]" class="question" jumpable></TFRow>

<!--      H5-->
      <Remider content="在过去一个月内:"></Remider>
      <TFRow :question="q[13]" class="question" ></TFRow>
      <TFRow :question="q[14]" class="question" ></TFRow>
      <TFRow :question="q[15]" class="question" ></TFRow>
      <TFRow :question="q[16]" class="question" ></TFRow>
      <TFRow :question="q[17]" class="question" ></TFRow>
      <TFRow :question="q[18]" class="question" ></TFRow>
      <TFRow :question="q[19]" class="question" jumpable></TFRow>

<!--      H6-->
      <TFRow :question="q[20]" class="question" ></TFRow>

    </div>
    <!-- 诊断框 -->
    <el-row>
      <div class="remiders">
        <Remider content="在过去一个月内,这些问题是否造成明显痛苦, 或者干扰你在家庭、学校、工作、社交、人际关系或者其他重要方面的功能?"></Remider>
        <Remider content="且“排除器质性原因 (O2 总结)” 为“是”吗?"></Remider>
        <br>
        <Remider content="标注是否有人格解体，非真实感，或延迟性发作。"></Remider>
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
  name: "BlockH",
  components: {TFRow, Remider, DiagnosticBox},
  data() {
    return {
      require_detail_question: false,
      q: this.questions,
      d: this.diagnosis
    };
  },
  methods: {

    change_hidden_status() {
      this.require_detail_question = this.q[0].select && this.q[1].select
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
<style scoped>

</style>
