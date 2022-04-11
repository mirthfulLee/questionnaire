<template>
  <div class="paper">
    <h1>J.物质使用障碍 (非酒精类)</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>
    <!--    <div v-for="question in main_questions" :key="question.id" class="question">-->
    <!--    </div>-->
    <Remider content="现在我将问你一些其他人可能也经历过的不同寻常的体验"/>
<!--    K1-->
    <TFRow :question="q[0]" class="question" jumpable/>
    <Remider content="（注：请患者举例以排除实际跟踪）"/>
    <div v-if="q[0].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[1]" class="question" jumpable />
    </div >
    <!--K2-->
    <TFRow :question="q[2]" class="question" jumpable/>
    <div v-if="q[2].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[3]" class="question" jumpable />
    </div >
<!--    K3-->
    <TFRow :question="q[4]" class="question" jumpable/>
    <div v-if="q[4].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[5]" class="question" jumpable />
    </div >
<!--    K4-->
    <TFRow :question="q[6]" class="question" jumpable/>
    <div v-if="q[6].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[7]" class="question" jumpable />
    </div >
<!--    K5-->
    <TFRow :question="q[8]" class="question" jumpable/>
    <Remider content="（注：请患者举例，不包括K1至K4中所问到的妄想，例如宗教、死亡、疾病或躯体妄想，或夸大、
嫉妒、罪恶、失败、不足、毁灭、贫穷妄想等，或虚无主义妄想，才编码“是”。）"/>
    <div v-if="q[8].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[9]" class="question" jumpable />
    </div >
<!--    K6-->
    <TFRow :question="q[10]" class="question" jumpable/>
    <div v-if="q[10].select">
      <Remider content="如果患者承认出现过语音类的幻觉，则继续问"/>
      <TFRow :question="q[11]" class="question" jumpable/>
      <Remider content="如果K6a的编码为“是”，则继续问"/>
      <TFRow :question="q[12]" class="question" jumpable/>
      <div v-if="q[12].select">
        <Remider content="如果患者承认最近一个月出现语音类幻觉，则继续问"/>
        <TFRow :question="q[13]" class="question" jumpable/>
      </div>
    </div>

    <!-- 诊断框 -->
    <el-row>
      <div class="remiders">

        <Remider content="在受控制的环境中 =物质/药物接触受到限制."/>
      </div>
      <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
    </el-row>

  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";
import InputRow from "./InputRow";
import MultiOptionRow from "./MultiOptionRow";


export default {
  name: "BlockJ",
  components: {MultiOptionRow, InputRow, DiagnosticBox, Remider, TFRow},
  data() {
    return {
      require_detail_question: false,

      q: this.questions,
      d: this.diagnosis
    };
  },
  methods: {

    change_hidden_status() {
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
