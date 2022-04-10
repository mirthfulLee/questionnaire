<template>
  <div class="paper">
    <h1>G.强迫症</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>
    <!--    <div v-for="question in main_questions" :key="question.id" class="question">-->
    <!--    </div>-->
    <Remider content="若为否，跳至G3a"></Remider>
    <TFRow :question="q[0]" class="question" jumpable></TFRow>
    <Remider content="若为否，跳至G3a"></Remider>
    <TFRow :question="q[1]" class="question" jumpable></TFRow>
    <Remider content="（不包括单纯对现实生活问题的过分担忧。不包括囤积、拔毛、皮肤
    采摘、身体畸形障碍、进食障碍、性偏离、病态赌博或酒药物滥用直接相关的强迫观念，
    因为病人可以从这些活动中获得快感，想克服它只是因为它带来负面结果。）"></Remider>
    <TFRow :question="q[2]" class="question"></TFRow>

    <TFRow :question="q[3]" class="question"></TFRow>
    <TFRow :question="q[4]" class="question"></TFRow>

    <TFRow :question="q[5]" class="question" jumpable></TFRow>

    <!-- 诊断框 -->
    <el-row>
      <div class="remiders">
        <Remider content="这些强迫性思维或强迫行为给你带来很多的痛苦，或明显干扰你的正常生活、职业功能、日常社交关系？每天持续时间超过1小时？"></Remider>
        <Remider content="并且“排除根器质性病因（O2总结）”编码“是”"></Remider>
        <Remider content="（确认并非在感染3周内开始出现的强迫症状）"></Remider>
        <Remider content="标注自知力水平及是否有抽动相关疾病（TIC-related）"></Remider>
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
  name: "BlockG",
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
<style scoped>

</style>
