<template>
  <div class="paper">
    <h1>K. 伴精神病性特征的精神障碍及心境障碍</h1>
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
    <TFRow :question="q[0]" class="question"/>
    <Remider content="（注：请患者举例以排除实际跟踪）"/>
    <div v-if="q[0].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[1]" class="question"/>
    </div>
    <!--K2-->
    <TFRow :question="q[2]" class="question"/>
    <div v-if="q[2].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[3]" class="question"/>
    </div>
    <!--    K3-->
    <TFRow :question="q[4]" class="question"/>
    <div v-if="q[4].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[5]" class="question"/>
    </div>
    <!--    K4-->
    <TFRow :question="q[6]" class="question"/>
    <div v-if="q[6].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[7]" class="question"/>
    </div>
    <!--    K5-->
    <TFRow :question="q[8]" class="question"/>
    <Remider content="（注：请患者举例，不包括K1至K4中所问到的妄想，例如宗教、死亡、疾病或躯体妄想，或夸大、
嫉妒、罪恶、失败、不足、毁灭、贫穷妄想等，或虚无主义妄想，才编码“是”。）"/>
    <div v-if="q[8].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[9]" class="question"/>
    </div>
    <!--    K6-->
    <TFRow :question="q[10]" class="question"/>
    <div v-if="q[10].select">
      <Remider content="如果患者承认出现过语音类的幻觉，则继续问"/>
      <TFRow :question="q[11]" class="question"/>
      <Remider content="如果K6a的编码为“是”，则继续问"/>
      <TFRow :question="q[12]" class="question"/>
      <div v-if="q[12].select">
        <Remider content="如果患者承认最近一个月出现语音类幻觉，则继续问"/>
        <TFRow :question="q[13]" class="question"/>
      </div>
    </div>
    <!--    K7-->
    <TFRow :question="q[14]" class="question"/>
    <Remider content="（注：注意患者看到的东西是否与当前文化相称）"/>
    <div v-if="q[14].select">
      <Remider content="如果“是”，继续问"/>
      <TFRow :question="q[15]" class="question"/>
    </div>
<!--    K8-->
    <TFRow :question="q[16]" class="question"/>
    <TFRow :question="q[17]" class="question"/>
    <TFRow :question="q[18]" class="question"/>
    <TFRow :question="q[19]" class="question"/>
    <TFRow :question="q[20]" class="question"/>
    <Remider content="例如：明显的情感淡漠、言语贫乏、或不能主动开始及保持有目的的行动（意志减退）"/>
    <TFRow :question="q[21]" class="question"/>
    <Remider content="例如：明显的情感淡漠、言语贫乏、或不能主动开始及保持有目的的行动（意志减退）"/>
<!--    K11-->
    <Remider content="从K1到K7题，有一项及以上的“a”回答为“是”吗？"/>
    <Remider content="并且以下两项有任何一项编码为“是”吗"/>
    <Remider content="1）重度抑郁发作（现患、复发或既往）"/>
    <Remider content="2）躁狂或轻躁狂（现患或既往）"/>
    <Remider content="并且询问"/>
    <InputRow :question="q[22]" class="question"/>
    <InputRow :question="q[23]" class="question"/>
    <Remider content=""/>
    <TFRow :question="q[24]" class="question"/>
    <Remider content="如果K11a编码为“否”，且心境障碍发作时间少于精神病性症状
发作的总时间，则在伴有精神病性特征的心境障碍诊断框里圈
“否”然后跳到K13"/>
    <!-- 诊断框K11b -->
    <el-row style="margin: 10px 0">
      <div class="remiders">
        <Remider content="你之前讲过，你曾经有过一段时间感到（抑郁/情绪高涨/持续的易激惹）"/>
        <Remider content="你刚刚谈到的这些信念及经历（K1a-K7a编码“是”的症状）仅仅发生在你感到抑郁/情绪高涨/持续的易激惹的时候吗？"/>
        <Remider content="如果患者在没有感到抑郁/情绪高涨/易激惹的情况下，至少
有两周拥有这些信念或经历（精神病性症状），那么对这种疾病编码“否”。"/>
        <Remider content="如果这组疾病编码为否，则直接在K12 中圈“否”然后跳到K13"/>
      </div>
      <DiagnosticBox :diagnosis_content="d[0]"></DiagnosticBox>
    </el-row>

    <!-- 诊断框K12a -->
    <el-row style="margin: 10px 0">
      <div class="remiders">
        <Remider content="从K1到K7题，有一项及以上的“b”回答为“是”吗？"/>
        <Remider content="并且以下两项任何一项编码为“是”吗？"/>
        <Remider content="1）重度抑郁发作（现患）"/>
        <Remider content="2）躁狂或轻躁狂发作（现患）"/>
        <br>
        <Remider content="如果答案为“是”（终生或现患），则直接在K13和K14中圈“否”然后跳到下一题组"/>
      </div>
      <DiagnosticBox :diagnosis_content="d[1]"></DiagnosticBox>
    </el-row>

    <!-- 诊断框K13 -->
    <el-row style="margin: 10px 0">
      <div class="remiders">
        <Remider content="从K1到K7题，有一项及以上的“b”回答为“是”吗？"/>
        <Remider content="并且"/>
        <Remider content="从K1到K10题，有两项及以上的“b”回答为“是”吗？"/>
        <Remider content="（需要确认至少两个症状是否发生在过去同一个月内）"/>
        <Remider content="并且"/>
        <Remider content="该患者在“排除有机物质导致的精神病性症状(O2 总结)”中编码为“是”吗？"/>
      </div>
      <DiagnosticBox :diagnosis_content="d[2]"></DiagnosticBox>
    </el-row>

    <!-- 诊断框K14 -->
    <el-row style="margin: 10px 0">
      <div class="remiders">
        <Remider content="该患者K13编码为“是”吗"/>
        <Remider content="或者"/>
        <Remider content="（从K1到K8题，有一项及以上的“a”回答为“是”吗？"/>
        <Remider content="并且 从K1到K10题，有两项及以上的“a”回答为“是”吗？同时需要确认至少两个症状是否发生在过去同一个月内）"/>
        <Remider content="并且 该患者在“排除有机物质导致的精神病性症状(O2 总结)”中编码为“是”吗？"/>
      </div>
      <DiagnosticBox :diagnosis_content="d[3]"></DiagnosticBox>
    </el-row>

  </div>
</template>

<script>
import TFRow from "./TFRow";
import Remider from "./Remider";
import DiagnosticBox from "./DiagnosticBox";
import InputRow from "./InputRow";


export default {
  name: "BlockK",
  components: {InputRow, DiagnosticBox, Remider, TFRow},
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
