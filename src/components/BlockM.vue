<template>
  <div class="paper">
    <h1>M. 神经性贪食症</h1>
    <el-row class="question">
      <el-col :span="3">题号</el-col>
      <el-col :span="9">问题</el-col>
      <el-col :span="4" :offset="1">选择</el-col>
      <el-col :span="7">备注</el-col>
    </el-row>
    <Remider content="选项上方的‘→’意为：转到诊断框，在神经性贪食和暴食／清除型神经性厌食诊断判断项上圈“否”。如果神经性厌食
（见L题组）编码为“是”，继续这些问题以确定是否为限制型神经性厌食"></Remider>
    <TFRow :question="q[0]" class="question" @change="change_hidden_status0()" jumpable></TFRow>
    <div v-if="var1">
      <TFRow :question="q[1]" class="question" @change="change_hidden_status1()" jumpable></TFRow>
      <div v-if="var2">
        <Remider content="在过去三个月内："></Remider>
        <TFRow :question="q[2]" class="question" @change="change_hidden_status2()"></TFRow>
        <div v-if="var3">
          <TFRow :question="q[3]" class="question" @change="change_hidden_status3()" jumpable></TFRow>
          <div v-if="var4">
            <InputRow :question="q[4]" class="question"></InputRow>
            <InputRow :question="q[5]" class="question"></InputRow>
            <TFRow :question="q[6]" class="question" @change="change_hidden_status4()" jumpable></TFRow>
            <div v-if="var5">
              <Remider content="如果为“否”，跳到诊断框1："></Remider>
              <TFRow :question="q[7]" class="question" @change="change_hidden_status5()"></TFRow>
              <div v-if="var6">
                <Remider content="参考神经性厌食题组的标准身高体重，记录符合患者身高的标准体重: "></Remider>
                <InputRow :question="q[8]" class="question"></InputRow>
                <TFRow :question="q[9]" class="question"></TFRow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 诊断框 -->
    <div>
      <el-row>
        <Remider content="该患者M5编码“是”且M6或M7编码“否”吗？"></Remider>
        <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
        <Remider content="该患者M7编码为“是”吗？"></Remider>
        <DiagnosticBox :diagnosis_content="d[1]"></DiagnosticBox>
        <Remider content="该患者达到神经性厌食的标准并且M2或M4的编码为“否”吗？"></Remider>
        <DiagnosticBox :diagnosis_content="d[2]"></DiagnosticBox>
        <Remider content="进食障碍分类：;轻度： 1-3次不当的补偿行为;中度：4-7次不当的补偿行为;
        重度：8-13次不当的补偿行为;极重度：14次或更多次不当的补偿行为"></Remider>
        <DiagnosticBox :diagnosis_content="d[3]"></DiagnosticBox>
      </el-row>
    </div>
  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";
import InputRow from "./InputRow";

export default {
  name: "BlockM",
  components: {InputRow, DiagnosticBox, Remider, TFRow},
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
    change_hidden_status0() {
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
    change_hidden_status4() {
      this.var5 = (this.q[6].select)
    },
    change_hidden_status5() {
      this.var6 = (this.q[7].select)
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