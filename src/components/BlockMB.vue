<template>
  <div class="paper">
    <h1>MB. 暴食障碍</h1>
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
        <TFRow :question="q[2]" class="question" @change="change_hidden_status2()" jumpable></TFRow>
        <div v-if="var3">
          <TFRow :question="q[3]" class="question" @change="change_hidden_status3()" jumpable></TFRow>
          <div v-if="var4">
            <TFRow :question="q[4]" class="question" @change="change_hidden_status4()" jumpable></TFRow>
            <div v-if="var5">
              <Remider content="如果M4在M题组（神经性贪食症）中被跳过，则现在问M4来编码MB5"></Remider>
              <Remider content="在过去3个月的暴食经历中"></Remider>
              <TFRow :question="q[5]" class="question"></TFRow>
              <TFRow :question="q[6]" class="question"></TFRow>
              <TFRow :question="q[7]" class="question"></TFRow>
              <TFRow :question="q[8]" class="question"></TFRow>
              <TFRow :question="q[9]" class="question"></TFRow>
              <TFRow :question="q[10]" class="question" @change="change_hidden_status5()" jumpable></TFRow>
              <div v-if="var6">
                <TFRow :question="q[11]" class="question" @change="change_hidden_status6()" jumpable></TFRow>
                <div v-if="var7">
                  <InputRow :question="q[12]" class="question"></InputRow>
                  <InputRow :question="q[13]" class="question"></InputRow>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 诊断框 -->
    <div>
      <el-row>
        <Remider content="患者的MB7编码为“是”吗？"></Remider>
        <br>
        <Remider content="进食障碍分类：轻度： 1-3次不适当的补偿行为;中度：4-7次不当补偿行为;重度：8-13次不当补偿行为;
        极重度：14次或更多次不当补偿行为"></Remider>
        <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
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
  name: "BlockMB",
  components: {InputRow, DiagnosticBox, Remider, TFRow},
  data() {
    return {
      var1: false,
      var2: false,
      var3: false,
      var4: false,
      var5: false,
      var6: false,
      var7: false,
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
    change_hidden_status4() {
      this.var4 = (this.q[4].select)
    },
    change_hidden_status5() {
      let cnt = 0
      for (let i=5;i<=9;i++) {
        cnt += this.q[i].select
      }
      this.var6 = (cnt >= 3)
    },
    change_hidden_status6() {
      this.var7 = (this.q[11].select)
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