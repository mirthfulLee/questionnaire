<template>
  <div class="paper">
    <h1>I.酒精使用障碍</h1>
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
      <TFRow :question="q[1]" class="question"></TFRow>
      <TFRow :question="q[2]" class="question"></TFRow>
      <TFRow :question="q[3]" class="question" ></TFRow>
      <TFRow :question="q[4]" class="question" ></TFRow>
      <TFRow :question="q[5]" class="question" ></TFRow>
      <TFRow :question="q[6]" class="question" ></TFRow>
      <TFRow :question="q[7]" class="question" ></TFRow>
      <TFRow :question="q[8]" class="question" ></TFRow>
      <TFRow :question="q[9]" class="question" ></TFRow>
      <TFRow :question="q[10]" class="question" ></TFRow>
<!--      k-->
      <MultiOptionRow :question="q[11]" class="question"></MultiOptionRow>
      <TFRow :question="q[12]" class="question"></TFRow>
      <TFRow :question="q[13]" class="question"></TFRow>


    </div>
    <!-- 诊断框 -->
    <el-row>
      <div class="remiders">
        <Remider content="从I2a到I2K总结中有两项或两项以上的答案为“是”吗？"></Remider>
        <Remider content="（I2K1和I2K2不重复计算）"></Remider>
        <br>
        <Remider content="酒精使用障碍说明:"></Remider>
        <Remider content="轻度=二到三项I2中的症状"></Remider>
        <Remider content="中度=四到五项I2中的症状"></Remider>
        <Remider content="重度=六项或六项以上I2中的症状"></Remider>
        <br>
        <Remider content="早期缓解 = 3到12个月未达到标准"></Remider>
        <Remider content="持续缓解 =12个月或12个月以上未达到标准"></Remider>
        <Remider content="(两项都除外以上的d[渴求]标准.)"></Remider>
        <br>
        <Remider content="在受控制的环境中 =酒精接触受到限制."></Remider>

      </div>
      <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
    </el-row>
  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";
import MultiOptionRow from "./MultiOptionRow";

export default {
  name: "BlockI",
  components: {MultiOptionRow, TFRow, Remider, DiagnosticBox},
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
