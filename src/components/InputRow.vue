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

      <el-col :span="10" :offset="1">
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
  props: {
    question: Object,
  },
  data() {
    return {
      q: this.question,
    }
  }
}
</script>

<style>
.jump {
  float: left;
  margin-left: 45px;
  margin-top: -15px;
}
</style>
