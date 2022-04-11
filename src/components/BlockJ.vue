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
    <TFRow :question="q[0]" class="question"
           @change="change_hidden_status" jumpable></TFRow>
    <Remider content="圈出曾服用过的每种药物:"/>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">兴奋剂:</span>
      </el-col>
      <el-col :span="21"  style="text-align: left">
        <span>安非他明、“见效快”、冰毒、硫酸右旋苯丙胺、哌甲酯（利他林）、减肥药.</span>
      </el-col>
    </el-row>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">可卡因:</span>
      </el-col>
      <el-col :span="21" style="text-align: left">
        <span>“哼气”, 四号,自由基,快克, “快速球”.</span>
      </el-col>
    </el-row>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">阿片类:</span>
      </el-col>
      <el-col :span="21"  style="text-align: left">
        <span>海洛因,吗啡, 盐酸氢吗啡酮、鸦片, 杜冷丁,美沙酮, 达尔丰, 可待因, 复方羟可酮, 维柯丁, 盐酸丙氧芬.</span>
      </el-col>
    </el-row>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">致幻剂:</span>
      </el-col>
      <el-col :span="21"  style="text-align: left">
        <span>LSD (“酸”), 麦司卡林、仙人球碱, 裸盖菇素, STP, “蘑菇”, “狂喜”, MDA, MDMA.</span>
      </el-col>
    </el-row>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">分离药物:</span>
      </el-col>
      <el-col :span="21"  style="text-align: left">
        <span>PCP (苯环己哌啶 ,“天使尘”, “平静丸”, “Hog”)，或氯胺酮 (“K粉”).</span>
      </el-col>
    </el-row>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">吸入剂:</span>
      </el-col>
      <el-col :span="21"  style="text-align: left">
        <span>“强力胶”,氯化乙醇,“快速”, 氮氧化物 (“笑气”), 戊烷基或丁基硝酸盐 (“爆破”).</span>
      </el-col>
    </el-row>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">大麻:</span>
      </el-col>
      <el-col :span="21"  style="text-align: left">
        <span>大麻毒品, hashish (“噪声”), THC,“大麻叶”,“大麻草”,“大麻烟”, “大麻卷烟”.</span>
      </el-col>
    </el-row>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">镇静剂、催眠药或抗焦虑药: </span>
      </el-col>
      <el-col :span="21"   style="text-align: left">
        <span>甲喹酮,速可眠 (“红中”), 烦宁（Valium,一种安定），赞安诺, 氯氮卓, 安定文, 盐酸氟胺安定, 海乐神, 盐酸巴比妥, 眠尔通（Miltown）, 丙种羟基丁酸盐GHB, Roofinol, “迷奸药”.</span>
      </el-col>
    </el-row>
    <el-row class="question">
      <el-col :span="3">
        <span style="font-weight: bold">其他:</span>
      </el-col>
      <el-col :span="21"  style="text-align: left">
        <span>类固醇、非处方催眠、减肥药或感冒药等任何其它药物</span>
      </el-col>
    </el-row>


    <InputRow :question="q[1]" class="question"/>
    <InputRow :question="q[2]" class="question"/>
    <Remider content="首先探讨能导致最大问题和最可能达到标准的药物类别"/>
    <Remider content="物质使用障碍。如果有几种药物被滥用，尽可能多地或按协议要求尽可能少地探讨。"/>



    <div v-if="require_detail_question">
      <br>
      <Remider content="想一想你过去12个月内使用(所选药物或药物类别的名称):"/>
      <TFRow :question="q[3]" class="question"></TFRow>
      <TFRow :question="q[4]" class="question"></TFRow>
      <TFRow :question="q[5]" class="question"></TFRow>
      <TFRow :question="q[6]" class="question"></TFRow>
      <TFRow :question="q[7]" class="question"></TFRow>
      <TFRow :question="q[8]" class="question"></TFRow>
      <TFRow :question="q[9]" class="question"></TFRow>
      <TFRow :question="q[10]" class="question"></TFRow>
      <TFRow :question="q[11]" class="question"></TFRow>
      <TFRow :question="q[12]" class="question"></TFRow>
<!--      k-->
      <TFRow :question="q[13]" class="question"></TFRow>
      <Remider content="如果“是”达到每类戒断症状的所需数量，则编码 J2k1 为 “是”."/>
      <Remider content="如果药物是医生开的或者是在适当的医疗监督下使用的，则此标准为“否”"/>
      <MultiOptionRow :question="q[14]" class="question"></MultiOptionRow>
      <MultiOptionRow :question="q[15]" class="question"></MultiOptionRow>
      <MultiOptionRow :question="q[16]" class="question"></MultiOptionRow>
      <MultiOptionRow :question="q[17]" class="question"></MultiOptionRow>
      <TFRow :question="q[18]" class="question"></TFRow>
      <TFRow :question="q[19]" class="question"></TFRow>

    </div>

    <!-- 诊断框 -->
    <el-row>
      <div class="remiders">
        <Remider content="从J2a到J2K总结中有两项或两项以上的答案为“是”吗？(J2k1和J2k2不重复计算.)"></Remider>
        <br>
        <Remider content="物质使用障碍说明:"></Remider>
        <Remider content="轻度=二到三项J2中的症状"></Remider>
        <Remider content="中度=四到五项J2中的症状"></Remider>
        <Remider content="重度=六项或六项以上J2中的症状"></Remider>
        <br>
        <Remider content="早期缓解 = 3到12个月未达到标准"></Remider>
        <Remider content="持续缓解 =12个月或12个月以上未达到标准"></Remider>
        <Remider content="(两项都除外以上的d[渴求]标准.)"></Remider>
        <br>
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
