<template>
  <div class="paper">
    <h1>O. 排除所有疾病的医疗、器质性或药物原因</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>

    <Remider content="如果患者对当前的任何障碍或重度抑郁发作或躁狂或轻躁狂发作的诊断呈阳性请询问: "></Remider>
    <Remider content="在这些症状出现之前:"></Remider>
    <OptionRow :question="q[0]" class="question"></OptionRow>
    <OptionRow :question="q[1]" class="question"></OptionRow>
    <OptionRow :question="q[2]" class="question"></OptionRow>
    <OptionRow :question="q[3]" class="question"></OptionRow>
  </div>
</template>

<script>
import Remider from "./Remider";
import OptionRow from "./OptionRow";

export default {
  name: "BlockO",
  components: {OptionRow,  Remider},
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