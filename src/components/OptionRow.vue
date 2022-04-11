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
        <el-radio-group v-model="q.select">
          <div>
            <div v-for="(option, i) in q.options" :key="option">
              <el-radio :label="i">{{option}}</el-radio>
            </div>
          </div>
        </el-radio-group>
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
