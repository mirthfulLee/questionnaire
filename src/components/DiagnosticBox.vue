<template>
  <el-card class="box-card">
    <template #header>
      <div class="box-header">
        <span>{{ content.target }}</span>
      </div>
    </template>

    <el-radio-group v-model="content.select" @change="reset_options">
      <el-radio-button :label=false
      >否
      </el-radio-button>
      <el-radio-button :label=true
      >是
      </el-radio-button>
    </el-radio-group>

    <div v-for="(choice, i) in content.choices" :key="i" style="display: flex; margin:5px auto">
      <div class="title" v-if="choice.title!==''">{{ choice.title }}</div>
      <div v-if="choice.options.length > 0">
        <el-radio-group v-model="choice.select" class="options">
          <el-radio v-for="(option, i) in choice.options" :key="i" :label=i
          >{{ option }}
          </el-radio>
        </el-radio-group>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "DiagnosticBox",
  data() {
    return {
      content: this.diagnosis_content
    }
  },
  props: {
    diagnosis_content: Object
  },
  methods: {
    reset_options() {
      for (let i = 0; i < this.content.choices.length; i++) {
        this.content.choices[i].select = null
      }
    }
  }
}
</script>

<style scoped>
.box-header {
  font-weight: bold;
  font-size: 18px;
}

.box-card {
  width: 280px;
  float: right;
  /*margin-right: 50px;*/
  margin-left: 50px;
}

.options {
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  width: 130px;
}

.title {
  font-size: 15px;
  font-weight: bold;
  margin: 10px auto;
  width: 60px;
}

/*::v-deep .el-radio__label {*/
/*  width: 100% !important;*/
/*  text-overflow: ellipsis;*/
/*  white-space: normal;*/
/*  line-height: 18px;*/
/*  !*word-wrap: break-word !important;   *!*/
/*}*/
</style>
