<template>
  <div class="paper">
    <h1>N. 广泛性焦虑障碍</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>
    <Remider content="选项上方的‘→’意为：转到诊断框，在相应的诊断判断项上圈“否”，然后转到下一题组"></Remider>
    <TFRow :question="q[0]" class="question" @change="change_hidden_status()" jumpable></TFRow>
    <div v-if="var1">
      <TFRow :question="q[1]" class="question" @change="change_hidden_status1()" jumpable></TFRow>
      <div v-if="var2">
        <Remider content="如果为“是”，直接到诊断框圈“否”，然后转到下一题组: "></Remider>
        <TFRow :question="q[2]" class="question" @change="change_hidden_status2()"></TFRow>
        <div v-if="var3">
          <TFRow :question="q[3]" class="question" @change="change_hidden_status3()" jumpable></TFRow>
          <div v-if="var4">
            <Remider content="对于以下情况，如果症状仅限于在此之前研究过的任何障碍的特征，则代码为否"></Remider>
            <Remider content="在过去的6个月里，当你焦虑的时候，你大部分时间:"></Remider>
            <TFRow :question="q[4]" class="question"></TFRow>
            <TFRow :question="q[5]" class="question"></TFRow>
            <TFRow :question="q[6]" class="question"></TFRow>
            <TFRow :question="q[7]" class="question"></TFRow>
            <TFRow :question="q[8]" class="question"></TFRow>
            <TFRow :question="q[9]" class="question"></TFRow>
<!--            <Remider content="转到诊断框，在相应的诊断判断项上圈“否”，然后转到下一题组"></Remider>-->
            <TFRow :question="q[10]" class="question" jumpable></TFRow>
          </div>
        </div>
      </div>
    </div>
    <!-- 诊断框 -->
    <div>
      <el-row>
        <Remider content="这些焦虑和担忧是否严重影响了你的工作能力、社交能力、人际关系或生活中其他重要领域的能力，或者导致了重大的痛苦?
        而且是排除器质性原因(O2总结)编码“是”?"></Remider>
        <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
      </el-row>
    </div>
  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";

export default {
  name: "BlockN",
  components: { DiagnosticBox, Remider, TFRow},
  data() {
    return {
      var1: false,
      var2: false,
      var3: false,
      var4: false,
      var5: false,
      q: this.questions,
      d: this.diagnosis
    };
  },
  methods: {
    change_hidden_status() {
      this.var1 = this.q[0].select
    },
    change_hidden_status1() {
      this.var2 = this.q[1].select
    },
    change_hidden_status2() {
      this.var3 = !(this.q[2].select)
    },
    change_hidden_status3() {
      this.var4 = (this.q[3].select)
    },
    // change_hidden_status4() {
    //   let cnt = 0
    //   for (let i=4;i<=9;i++) {
    //     cnt += this.q[i].select
    //   }
    //   this.var5 = (cnt >= 3)
    // },
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