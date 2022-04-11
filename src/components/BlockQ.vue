<template>
  <div class="paper">
    <h1>Q. 心境障碍:诊断程序</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>

    <div>
      <br>
      <Remider content="查询模块: A 抑郁发作; C（轻度）躁狂发作; K 精神分裂"/>
      <Remider content="查询模块K："/>
      <TFRow :question="q[0]" class="question"></TFRow>
      <TFRow :question="q[1]" class="question"></TFRow>
      <Remider content="模块A并且C："/>
      <PeriodTFRow :question="q[2]" class="question"></PeriodTFRow>
      <PeriodTFRow :question="q[3]" class="question"></PeriodTFRow>
      <TFRow :question="q[4]" class="question"></TFRow>
    </div>

    <!-- 诊断框 -->
    <el-row>
      <div class="remiders">
        <Remider content="抑郁发作编码为是(当前或者既往)? 和 躁狂发作编码为否(当前或者既往)? 和 (轻度)躁狂发作编码为否(当前并且既往发作)?
        和 排除器质性原因(O2总结)编码为“是”?"></Remider>
        <br>
        <Remider content="如果抑郁发作是当前的或过去的或两者兼而有之："></Remider>
        <Remider content="伴随精神病特征, 当前: 如果1b 或者 2a(当前)编码为“是”"></Remider>
        <Remider content="伴随精神病特征, 既往: 如果1a 或者 2a(既往)编码为“是”"></Remider>
      </div>
      <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
    </el-row>
    <el-row>
      <div class="remiders">
        <Remider content="d	躁狂发作编码为“是”(当前或者过去) 并且 排除器质性原因(O2总结)编码为“是”？"></Remider>
        <br>
        <Remider content="详细说明："></Remider>
        <Remider content="如果双相I型障碍是当前的或过去的或两者兼有："></Remider>
        <Remider content="•	伴随单次狂躁发作: 如果狂躁发作(当前或者过去)编码为“是” 且重度抑郁发作(当前和过去)编码为“ 否”"></Remider>
        <br>
        <Remider content="伴随精神病症状: 当前: 如果1b或者2a(当前)或者2b(当前)编码为“是”;
        过去: 如果1a或者2a(过去)或者2b(过去)编码为“是”"></Remider>
        <Remider content="如果最近的发作是躁狂、抑郁或轻度躁狂(相互排斥)"></Remider>
        <Remider content="如果最近的情绪发作是混合型，焦虑型或精神病性特征; 混合特征的低/躁狂=低/躁狂+患者有至少3种A3选项中的症状;
        混合性抑郁=重度抑郁发作+患者有至少3种C3选项中的症状; 焦虑不安=患者有至少3种N3选项中的症状"></Remider>
      </div>
      <DiagnosticBox :diagnosis_content="d[1]"></DiagnosticBox>
    </el-row>

  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";


export default {
  name: "BlockQ",
  components: {DiagnosticBox, Remider, TFRow},
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