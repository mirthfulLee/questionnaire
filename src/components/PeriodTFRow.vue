<template>
  <div>
    <el-row>
      <el-col :span="3">
          <span>
            {{ question.id }}
          </span>
      </el-col>
      <el-col :span="9">
          <span>
            {{ question.desc }}
          </span>
      </el-col>
      <el-col :span="3" style="border-right: 1px solid black" :offset="1">
        <el-radio-group v-model="q.having">
          <el-radio-button :label=false
          >否
          </el-radio-button>
          <el-radio-button  :label=true
          >是
          </el-radio-button>
        </el-radio-group>
      </el-col>

      <el-col :span="3">
        <el-radio-group v-model="q.had">
          <el-radio-button :label=false
          >否
          </el-radio-button>
          <el-radio-button :label=true
          >是
          </el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :span="5">
        <el-input
            v-model="q.remark"
            style="width: 80%"
            clearable
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: this.question
    }
  },
  props: {
    question: Object
  }
}
</script>

<style>

</style>
