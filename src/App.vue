<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <InfoHeader :detail_info="detail_info"></InfoHeader>
  <BlockC :questions="questionC" :diagnosis="diagnosis_contentC"></BlockC>
  <BlockD :questions="questionD" :diagnosis="diagnosis_contentD"></BlockD>
  <BlockE :questions="questionE" :diagnosis="diagnosis_contentE"></BlockE>
  <BlockF :questions="questionF" :diagnosis="diagnosis_contentF"></BlockF>
  <BlockG :questions="questionG" :diagnosis="diagnosis_contentG"></BlockG>
  <BlockH :questions="questionH" :diagnosis="diagnosis_contentH"></BlockH>
  <BlockI :questions="questionI" :diagnosis="diagnosis_contentI"></BlockI>
  <BlockJ :questions="questionJ" :diagnosis="diagnosis_contentJ"></BlockJ>

  <el-button @click="export_json_data">导出csv文件</el-button>
  <el-button @click="export_pdf">导出pdf文件</el-button>
</template>

<script>
import BlockC from './components/BlockC'
import BlockD from "./components/BlockD";
import BlockE from "./components/BlockE";
import BlockF from "./components/BlockF";
import BlockG from "./components/BlockG";
import BlockH from "./components/BlockH";
import BlockI from "./components/BlockI";
import BlockJ from "./components/BlockJ";
import InfoHeader from "./components/InfoHeader";
import {export_csv} from "../public/scripts/convert"

export default {
  name: 'App',
  components: {
    InfoHeader,
    BlockJ,
    BlockI,
    BlockH,
    BlockG,
    BlockF,
    BlockD,
    BlockC,
    BlockE
  },
  data() {
    return {
      detail_info: {
        patient_name: '',
        patient_id: '',
        birthday: '',
        start_time: '',
        end_time: '',
        assessor_name: '',
        assess_date: '',
        assess_duration: ''
      },

      questionC: [
        {
          id: "C1a",
          desc: "你是否曾有一段时间，感觉“情绪高涨”或精力充沛，或遇到麻烦时仍充满自信，或其他人认为你和平时不一样？（使用酒精或其他精神活性药物除外）",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "C1b",
          desc: "你现在感到“情绪高涨”或者精力充沛？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "C2a",
          desc: "你是否曾有一段时间，有几天特别容易激惹，并因此经常与人发生言语争执或肢体冲突吗？或者冲你家庭成员以外的人大声喊叫吗？即使在你认为在合乎情理的处境下，你或你周围的人注意到你比其他人更容易激惹或者反应过分强烈吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "C2b",
          desc: "你现在仍然感觉容易激惹或发脾气吗？",
          type: "TF",
          select: null,
          remark: "",
        },

        {
          id: "C3a1",
          desc: "你是否感觉你能做别人做不了的事、或者你是一个特别重要的人？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C3a2",
          desc: "这些例子是否和妄想内容一致？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C3b",
          desc: "你是否只需要很少的睡眠（如“你感觉睡几个小时便休息好了”）？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C3c",
          desc: "你是否非常健谈、难以打断，或者语速很快，以致别人难以理解？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C3d",
          desc: "你是否感到思考问题的速度很快或者能从一个话题很快跳到另一个话题？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C3e",
          desc: "你是否觉得注意力很容易分散，任何一点很小的刺激都能分散你的注意力？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C3f",
          desc: "你是否感到活动或动力明显增多，无论是在工作、学业、人际交往或是性方面，或者感到生理或精神上不需要休息？此类活动增多可以是有意识或无意识。",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C3g",
          desc: "你是否热衷于参与一些使你感到很快乐的活动，而不考虑风险或后果（如花很多时间狂欢、莽撞驾驶或性活动轻率）？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C3总结",
          desc: "规则：情绪高涨需要C3有3项“是”的编码，而激惹则需要有4项“是”的编码",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },

        {
          id: "C4",
          desc: "这些症状最长可持续多久呢？（一天中大部分时间或几乎所有时间）",
          type: "OptionRow",
          select: null,
          options: ["持续时间不足3天", "持续时间超过4天，但不足7天", "持续时间7天及以上"],
          remark: "",
        },

        {
          id: "C5",
          desc: "你是否因这些问题住过院？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C6",
          desc: "这些症状是否给你的家庭生活、工作学习、人际交往等某些方面带来严重问题?",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },
        {
          id: "C7a",
          desc: "你言行方式的明显变化是否与这些症状有关，并且这种新的言行方式和平时的你不同？",
          type: "PeriodTF",
          having: null,
          had: null,
          remark: "",
        },

        {
          id: "C8a",
          desc: "在你一生中是否有过2次及以上这样的（躁狂）发作，持续时间7天及以上",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "C8b",
          desc: "在你一生中是否有过2次及以上这样的（躁狂）发作，持续时间4天及以上",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "C8c",
          desc: "在你一生中是否有过2次及以上这样的轻躁狂症状，持续时间为1-3天",
          type: "TF",
          select: null,
          remark: "",
        }
      ],
      questionD: [
        {
          id: "D1a",
          desc: "你是否曾在不同的处境或场合中，突然有焦虑、恐惧、不适或者紧张不安发作？这种处境大多数人都不会有这种感觉？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D1b",
          desc: "这种发作在10分钟内达到最严重的程度吗?",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D2",
          desc: "是否以前这些发作都是在你意料之外的自发出现，或者没有诱因？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D3",
          desc: "以前这种发作时，是否在超过一个月的时间始终担心再次发作，或者担心发作所造成的后果？ （比如，避免到不熟悉的场所、避免离家或独自购物、避免做诱发惊恐发作的事或更频繁地去急诊室、看病）",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4a",
          desc: "你是否有心脏漏跳、心跳加快或心悸？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4b",
          desc: "你是否有出汗或手心潮湿？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4c",
          desc: "你是否有震颤或发抖？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4d",
          desc: "你是否有喘不过气或呼吸困难，甚至是窒息？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4e",
          desc: "你是否有梗塞感或咽部异物感？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4f",
          desc: "你是否有胸痛、胸部压迫感或不适？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4g",
          desc: "你是否有恶心、胃部不适或者突然腹泻？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4h",
          desc: "你是否有感觉头晕、站立不稳、头重脚轻或晕厥？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4i",
          desc: "你是否感觉潮热或寒战？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4j",
          desc: "你是否身体的某个部位有刺痛感或麻木感？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4k",
          desc: "你是否感觉周围的事物变得很奇怪、不真实、遥远或陌生，或觉得自己与身体的部分或全部分离？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4i",
          desc: "你是否害怕自己会失去控制或发疯？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D4m",
          desc: "当时你是否害怕自己要死了？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D5",
          desc: "D3和D4中的4项及以上是否编码“是”？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "D6",
          desc: "在过去一个月内，你是否持续担心再发，或者担心发作造成的后果？\n你的行为是否由于这些发作发生了改变？",
          type: "TF",
          select: null,
          remark: "",
        },
      ],
      questionE: [
        {
          id: "E1",
          desc: "你在下列的场合中，比如在排队的人群中、旷地上、过桥时、密闭空间、独自离家或独自呆在家、过桥乘坐公共汽车、火车或小汽车，是否会感觉到紧张或焦虑不安，因为你担心在这些场合里面一旦出现惊恐发作或类惊恐发作、以及其他的窘迫表现，可能得不到帮助或者很难逃生。",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "E1a",
          desc: "E1是否有2个及以上地方编码“是”",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "E2",
          desc: "这些场所是否经常给你带来恐惧和不安",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "E3",
          desc: "你是否非常害怕这些处境，因而回避这些处境，或者在这些处境中需承受很多痛苦，或者需要他人陪伴才可以面对？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "E4",
          desc: "这些恐惧不不安是否过度或与实际危险不成比例？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "E5",
          desc: "这些回避、恐惧或不安是都至少持续6个月？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "E6",
          desc: "这些症状是否给你的家庭、工作、社交、学习或其他某些重要方面带来严重问题或痛苦呢？",
          type: "TF",
          select: null,
          remark: "",
        },
      ],
      questionF: [
        {
          id: "F1",
          desc: "在过去的一个月内，当你被别人注视、或者成为别人注意的焦点，你会持续感到不安或者害怕被嘲笑/耻笑/排挤吗？包括当众讲话、当众进食或与他人一起进食、在他人注视下写字/表演，或参与社交活动。",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "F2",
          desc: "这些社交场所是否经常给你带来恐惧和不安",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "F3",
          desc: "你是否非常害怕这些社交场所，想要回避，或者在这些处境中需要承受很多痛苦，需要他人陪伴才可以面对？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "F4",
          desc: "这些恐惧不不安是否过度或与实际危险不成比例？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "F5",
          desc: "这些回避、恐惧或不安是都至少持续6个月？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "F6",
          desc: "这些症状是否给你的家庭、工作、社交、学习或其他某些重要方面带来严重问题或痛苦呢？",
          type: "TF",
          select: null,
          remark: "",
        },
      ],
      questionG: [
        {
          id: "G1a",
          desc: "在过去一个月内，你是否被一些重复出现的想法、冲动行为或影像所" +
              "困扰，而且这些事是你不想要的、令人不快的、不适宜的、突然冒出来的" +
              "或令人痛苦的？（如认为自己肮脏、受到细菌污染、害怕传染他人的想" +
              "法，或害怕伤害他人，或害怕自己在冲动之下采取行动，或害怕自己会" +
              "为某些错误承担责任，或是有关性或宗教方面的想法、影像、冲动不断" +
              "出现。）",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "G1b",
          desc: "在过去一个月内，你是否压制或减少过这些想法、冲动行为或影像？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "G2",
          desc: "甚至当你试图忽略或摆脱它们时，这些想法仍然会控制不住出现在脑海中？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "G3a",
          desc: "在过去一个月内，你是否会因一些强迫的想法或规则而无法抗拒地反复" +
              "做某种事情，如过度洗涤或清洗，没完没了地检查、计数，或重复整理、" +
              "摆放物品，或其他迷信仪式？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "G3b",
          desc: "这些仪式性的行为是否是为了减少不安和痛苦或者为了阻止不好的事情" +
              "发生？你会不会认为这些仪式性行为是过分并且是不合理的？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "G3c",
          desc: "（G1a并且G1b并且G2）或（G3a并且G3b）是否编码“是”？",
          type: "TF",
          select: null,
          remark: "",
        },
        // {
        //   id: "G4",
        //   desc: "这些强迫性思维或强迫行为给你带来很多的痛苦，或明显干扰你的" +
        //       "正常生活、职业功能、日常社交关系？每天持续时间超过1小时？",
        //   type: "TF",
        //   select: null,
        //   remark: "",
        // },
      ],
      questionH: [
        {
          id: "H1",
          desc: "你曾经是否经历、目睹或处理某件极其严重的创伤性事件，包括真实的死亡、或有死亡危险或对自己或他人造成严重损伤或性暴力的威胁?",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H2",
          desc: "从创伤事件发生后开始，你是否会反复再次经历这件事，而且这种体" +
              "验是痛苦的、让人讨厌的 (例如与此事件相关的反复出现的梦境，强" +
              "烈的往事或回忆，闪回或好像事件重复发生) 或当你被提醒或经历类" +
              "似事情时你是否有强烈的生理或心理反应?",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H3a",
          desc: "你是否总是试图避免想起或记起与该事件相关的令人痛苦的细节和感觉？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H3b",
          desc: "你是否总是试图避免那些能勾起你痛苦回忆的人、对话、地点、情形、活动？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "",
          desc: "H3中有一项或一项以上回答为“是”吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H4a",
          desc: "你是否难以回忆创伤中的重要部分?(但不是因为头部创伤，酒精或药物).",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H4b",
          desc: "你是否一直对自己、他人或世界持有不合理地消极态度？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H4c",
          desc: "你是否把这个创伤不合理地归咎到自己和他人头上？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H4d",
          desc: "你的感觉总是消极的吗 (例如害怕、恐惧、愤怒、内疚或羞愧)?",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H4e",
          desc: "你是否对那些以前对你有意义的活动不感兴趣了？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H4f",
          desc: "你是否觉得自己和别人变得疏远或陌生?",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H4g",
          desc: "你是否无法体验任何好的感觉(例如幸福，满足，或爱的感觉）？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "",
          desc: "H4中有二项或二项以上回答为“是”吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H5a",
          desc: "你是否特别容易发火或者在没有人挑衅的情况下大发脾气",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H5b",
          desc: "你是否不顾后果或者有自我毁灭倾向",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H5c",
          desc: "你是否觉得紧张或者经常处于戒备状态",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H5d",
          desc: "你是否更容易受惊吓？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H5e",
          desc: "你是否更难集中注意力？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H5f",
          desc: "你是否有睡眠困难？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "",
          desc: "H5中有二项或二项以上回答为“是”吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "H6",
          desc: "是否所有这些问题都开始于创伤事件发生后并且持续超过一个月？",
          type: "TF",
          select: null,
          remark: "",
        },
      ],
      questionI: [
        {
          id: "I1",
          desc: "在过去12个月内你是否有3次或3次以上，在3小时内喝了3个标准杯或以上的含酒精饮品?",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2a",
          desc: "在喝酒期间，你实际喝的酒量超出原先预计的酒量？",
          type: "TF",
          select: null,
          remark: "",
        }, {
          id: "I2b",
          desc: "你是否反复想要减少或控制酒精使用?\n你是否尝试减少或控制酒精使用，但是没有成功?",
          type: "TF",
          select: null,
          remark: "",
        }, {
          id: "I2c",
          desc: "在饮酒的日子里，你是否花大量的时间找酒、饮酒或醒酒？",
          type: "TF",
          select: null,
          remark: "",
        }, {
          id: "I2d",
          desc: "你是否渴求或有使用酒精的强烈欲望或冲动?",
          type: "TF",
          select: null,
          remark: "",
        }, {
          id: "I2e",
          desc: "你是否因为喝酒而减少了在工作、学校或家庭履行责任的时间？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2f",
          desc: "如果喝酒使你与家人或他人的关系出现问题,你仍然继续喝酒吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2g",
          desc: "你是否不止一次在醉酒后从事有生命危险的活动，如开车、骑摩托车、操作机器、划船等？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2h",
          desc: "即使你清楚饮酒给自己造成了身体或精神问题，你仍然继续喝酒吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2i",
          desc: "你是否因为喝酒而减少或放弃重要的工作或娱乐活动？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2j",
          desc: "你是否需要喝更多的酒来达到你最初喝酒的感觉或者你持续使用相同的量达不到之前的效果？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2k1",
          desc: "在大量饮酒或者长期饮酒后，一旦减少饮酒，你会不会出现如下症状:",
          type: "MultiOptionRow",
          options: [
            '大量出汗或心率加快', '手震颤或“手抖”', '睡眠困难', '恶心或呕吐',
            '听见或看见别人听不见或看不见的东西或者皮肤无明显原因出现感觉',
            '激越状态', '焦虑', '癫痫发作'],
          select: [false, false, false, false, false, false, false, false],
          remark: "",
        },
        {
          id: "",
          desc: "以上八项如果有二项或二项以上为“是”，则编码k1为“是”",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2k2",
          desc: "你是否用喝酒减少或避免戒断症状或避免宿醉？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "I2k 总结",
          desc: "总结：如果I2K1或I2K2为“是”，则为“是”",
          type: "TF",
          select: null,
          remark: "",
        },
      ],
      questionJ: [
        {
          id: "J1a",
          desc: "在过去12个月内，你是否使用过1次以上其中某种药物, 以达到“飘”的感觉，让自己感觉兴奋，获得“上头”的感觉或改变自己的心情？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J1b",
          desc: "注明使用最多的药物",
          type: "InputRow",
          remark: "",
        },
        {
          id: "J1c",
          desc: "哪个药物造成最大的问题?",
          type: "InputRow",
          remark: "",
        },
        {
          id: "J2a",
          desc: "在使用(所选药物或药物类别的名称)时，你是否发现实际用量比当初预计用量多？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2b",
          desc: "你是否反复想要减少或控制(所选药物或药物类别的名称)的使用？\n" +
              "你是否尝试减量或停止使用(所选药物或药物类别的名称)，但是没有成功？\n" +
              "如果两个中有一个答案为“是”，则为“是”.",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2c",
          desc: "在使用(所选药物或药物类别的名称)的日子里，你是否花了" +
              "大量的时间, 获取(所选药物或药物类别的名称)、使用它，" +
              "或者从它效应中恢复过来？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2d",
          desc: "你是否渴求或有使用(所选药物或药物类别的名称)的强烈" +
              "欲望或冲动？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2e",
          desc: "你是否因为反复使用(所选药物或药物类别的名称)而减少" +
              "了在工作、学校或家庭履行责任的时间?",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2f",
          desc: "如果使用(所选药物或药物类别的名称)使你与家人或他人的关系出现问题，你仍然继续使用吗?",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2g",
          desc: "你是否不止一次在使用药物后从事有生命危险的活动，如" +
              "开车、骑摩托车、操作机器、划船等？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2h",
          desc: "即使你清楚(所选药物或药物类别的名称)给自己造成了身体或精神问题，你仍然继续使用(所选药物或药物类别的名称)吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2i",
          desc: "你是否因为使用(所选药物或药物类别的名称)而减少或放弃重要的工作或娱乐活动？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2j",
          desc: "你是否需要使用更多的(所选药物或药物类别的名称)来达到你最初使用时的感觉或者你持续使用相同的量达不到之前的效果？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2k1",
          desc: "在大量使用或者长期使用药物后，一旦减少使用，你会不会出现如下戒断症状：",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2k1a",
          desc: "镇静剂、催眠药或抗焦虑药 (2个或2个以上戒断症状)",
          type: "MultiOptionRow",
          options: ['大量出汗或心率加快', '手震颤或“手抖”', '睡眠困难', '恶心或呕吐',
            '听见或看见别人听不见或看不见的东西，或者皮肤无明显原因出现感觉', '激越状态', '焦虑', '癫痫发作'],
          select: [false, false, false, false, false, false, false, false],
          remark: "",
        },
        {
          id: "J2k1b",
          desc: "阿片类(3个或3个以上戒断症状)",
          type: "MultiOptionRow",
          options: ['感到压抑', '恶心或呕吐', '肌肉疼痛', '流鼻涕或流泪',
            '瞳孔散大，鸡皮疙瘩或毛发竖立或出汗', '腹泻', '打哈欠', '潮热', '睡眠困难'],
          select: [false, false, false, false, false, false, false, false, false],
          remark: "",
        },
        {
          id: "J2k1c",
          desc: "兴奋剂和可卡因(2个或2个以上戒断症状)",
          type: "MultiOptionRow",
          options: ['乏力', '生动或不愉快的梦', '睡眠困难或睡眠过多', '食欲增加',
            '感觉或看起来生理或心理反应减慢了'],
          select: [false, false, false, false, false],
          remark: "",
        },
        {
          id: "J2k1d",
          desc: "大麻(3个或3个以上戒断症状)",
          type: "MultiOptionRow",
          options: ['易怒、愤怒或有攻击性', '紧张或焦虑', '睡眠困难', '食欲或体重下降',
            '不安', '感到压抑', '“肚子疼”或震颤或 “抖”或出汗或潮热寒颤或头疼'],
          select: [false, false, false, false, false, false, false],
          remark: "",
        },
        {
          id: "J2k2",
          desc: "你是否使用(所选药物或药物类别的名称)来减少或避免戒断症状？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "J2k 总结",
          desc: "如果 J2k1或 J2k2为“是”,则为“是”.",
          type: "TF",
          select: null,
          remark: "",
        },

      ],
      questionK: [
        {
          id: "K1a",
          desc: "你曾经相信有人在监视你，或者计划要害你，或者试图伤害你？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K1b",
          desc: "你现在还相信这些事吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K2a",
          desc: "你曾经相信，即使你不说出来也有人能读出或听到你的想法吗？或者你曾经相信自己能读出或听到别人正在想的事情吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K2b",
          desc: "你现在还相信这些事吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K3a",
          desc: "你曾经相信有人或外界的某种力量，将一些根本不是你自己的想" +
              "法输入到你的大脑中，或迫使你做出和日常行为习惯不同的举动吗？" +
              "你曾经感到自己被附体了？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K3b",
          desc: "你现在还相信这些事情吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K4a",
          desc: "你曾经相信电视、收音机、网络、报纸、书或杂志正在给你" +
              "播送特别的信息吗？或者是你不认识的人特别注意你吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K4b",
          desc: "你现在还相信这些事情吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K5a",
          desc: "你的亲戚或朋友曾经觉得你的想法很奇怪或不寻常吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K5b",
          desc: "他们现在还认为你的想法奇怪或不寻常吗？",
          type: "TF",
          select: null,
          remark: "",
        },

        {
          id: "K6a",
          desc: "你有没有听过别人听不到的声音？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K6a1",
          desc: "你听到的声音是在评论你的想法或行为，或是你听到两个" +
              "或两个以上的声音在相互交谈吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K6b",
          desc: "最近一个月内，还能听到这些声音吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K6b1",
          desc: "你听到的声音是在评论你的想法或行为，或是你听到两个或两个以上的声音在相互交谈吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K7a",
          desc: "你曾经在清醒的时候看到过特别的东西，或看到别人看不到的事物？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K7b",
          desc: "最近一个月内，你还能看到这些吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K8a",
          desc: "患者曾经表现出语无伦次、言语瓦解、或明显的思维松弛吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K8b",
          desc: "患者目前表现出语无伦次、言语瓦解、或明显的思维松弛吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K9a",
          desc: "患者曾经表现出行为瓦解或有紧张症表现吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K9b",
          desc: "患者目前表现出行为瓦解或有紧张症表现吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K10a",
          desc: "患者曾经表现出精神分裂症阴性症状吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "K10b",
          desc: "访谈时患者有表现出明显的精神分裂症阴性症状吗？",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "",
          desc: "",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "",
          desc: "",
          type: "TF",
          select: null,
          remark: "",
        },
        {
          id: "",
          desc: "",
          type: "TF",
          select: null,
          remark: "",
        },
      ],


      diagnosis_contentC: [
        {
          target: '躁狂发作',
          select: null,
          choices: [
          ],
          confirms: [
            {
              title: '',
              select: [false, false],
              options: [
                '目前发作',
                '既往发作'
              ]
            },
          ]
        },
        {
          target: '轻躁狂发作',
          select: null,
          choices: [
            {
              title: '目前发作',
              select: null,
              options: [
                '否',
                '是'
              ]
            },
            {
              title: '既往发作',
              select: null,
              options: [
                '否',
                '是',
                '不详'
              ]
            },
          ]
        },
        {
          target: '轻躁狂症状',
          select: null,
          choices: [
            {
              title: '目前发作',
              select: null,
              options: [
                '否',
                '是'
              ]
            },
            {
              title: '既往发作',
              select: null,
              options: [
                '否',
                '是',
                '不详'
              ]
            },
          ]
        },
      ],
      diagnosis_contentD: [
        {
          target: '惊恐障碍',
          select: null,
          choices: [
          ],
          confirms: [
            {
              title: '',
              select: [null, null],
              options: [
                '终身',
                '现患'
              ]
            },
          ]
        },
      ],
      diagnosis_contentE: [
        {
          target: '广场恐怖症',
          select: null,
          choices: [
          ],
          confirms: [
            {
              title: '',
              select: [null, null],
              options: [
                '终身',
                '现患'
              ]
            },
          ]
        },
      ],
      diagnosis_contentF: [
        {
          target: '社交焦虑障碍（社交恐惧症）',
          select: null,
          choices: [
            {
              title: '现患',
              select: null,
              options: []
            },
          ],
          confirms: [
            {
              title: '',
              select: [null],
              options: [
                '仅在公共场所演讲或表演时出现恐惧',
              ]
            },
          ]
        },
      ],
      diagnosis_contentG: [
        {
          target: '强迫症',
          select: null,
          choices: [
            {
              title: '现患',
              select: null,
              options: []
            },
            {
              title: '自知力',
              select: null,
              options: [
                '好或正常', '部分存在', '不全', '妄想性', '抽动相关疾病'
              ]
            },
          ]
        },
      ],
      diagnosis_contentH: [
        {
          target: '创伤后应激障碍',
          select: null,
          choices: [
            {
              title: '现患',
              select: null,
              options: []
            },
          ],
          confirms: [
            {
              title: '伴有',
              select: [null, null, null],
              options: [
                '人格解体', '非真实感', '延迟性发作'
              ]
            },
          ]
        },
      ],
      diagnosis_contentI: [
        {
          target: '酒精使用障碍 过去12个月',
          select: null,
          choices: [
            {
              title: '标注',
              select: null,
              options: [
                '轻度', '中度', '重度'
              ]
            },
            {
              title: '',
              select: null,
              options: [
                '早期缓解', '持续缓解', '在受控制的环境中'
              ]
            },
          ]
        },
      ],
      diagnosis_contentJ: [
        {
          target: '物质(药物或药物类别的名称)使用障碍 过去12个月',
          select: null,
          choices: [
            {
              title: '标注',
              select: null,
              options: [
                '轻度', '中度', '重度'
              ]
            },
            {
              title: '',
              select: null,
              options: [
                '早期缓解', '持续缓解', '在受控制的环境中'
              ]
            },
          ]
        },
      ],
    }
  },
  methods: {
    finish_questionnaire(){
      const cur = new Date()
      this.detail_info.end_time = `${cur.getHours()}:${cur.getMinutes()}`
      const duration = (cur.getTime() - this.detail_info.assess_date.getTime()) / 1000
      this.detail_info.assess_duration = `${Math.ceil(duration/60)}`
    },
    export_json_data() {
      this.finish_questionnaire()
      const json_data = this.$data
      export_csv(json_data)
    },
    export_pdf(){
      print()
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
