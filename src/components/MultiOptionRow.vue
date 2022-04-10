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
      <el-col :span="6" :offset="1">
        <div>
          <div v-for="(option, i) in q.options" :key="option">
            <el-checkbox :label="option" v-model="q.select[i]"/>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    question: Object
  },
  data() {
    return{
      q: this.question
    }
  }
}
</script>

<style>

</style>
