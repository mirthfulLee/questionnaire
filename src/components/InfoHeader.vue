<template>
  <div class="paper">
    <h1>M.I.N.I.诊断记录表</h1>
    <div class="question">
      <el-row :gutter="2">
        <el-col :span="3">
          <span>病人姓名</span>
        </el-col>
        <el-col :span="7">
          <el-input v-model="info.patient_name" clearable style="width: 220px"></el-input>
        </el-col>
        <el-col :span="3">
          <span>编号</span>
        </el-col>
        <el-col :span="7">
          <el-input v-model="info.patient_id" clearable style="width: 220px"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="question">
      <el-row :gutter="2" class="question">
        <el-col :span="3">
          <span>出生日期</span>
        </el-col>
        <el-col :span="7">
          <el-date-picker v-model="info.birthday"></el-date-picker>
        </el-col>
        <el-col :span="3">
          <span>评定开始时间</span>
        </el-col>
        <el-col :span="7">
          <el-time-picker
              v-model="info.start_time"
              format='HH:mm'
              value-format="HH:mm"
          >
          </el-time-picker>
        </el-col>
      </el-row>
    </div>
    <div class="question">
      <el-row :gutter="2" class="question">
        <el-col :span="3">
          <span>评定者姓名</span>
        </el-col>
        <el-col :span="7">
          <el-input v-model="info.assessor_name" clearable style="width: 220px"></el-input>
        </el-col>
        <el-col :span="3">
          <span>评定结束时间</span>
        </el-col>
        <el-col :span="7">
          <el-time-picker
              v-model="info.end_time"
              format='HH:mm'
              value-format="HH:mm"
          >
          </el-time-picker>
        </el-col>
      </el-row>
    </div>
    <div class="question">
      <el-row :gutter="2" class="question">
        <el-col :span="3">
          <span>评定日期</span>
        </el-col>
        <el-col :span="7">
          <el-date-picker v-model="info.assess_date"></el-date-picker>
        </el-col>
        <el-col :span="3">
          <span>评定时间</span>
        </el-col>
        <el-col :span="7">
          <el-input v-model="info.assess_duration" disabled>
            <template #append>分钟</template>
          </el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoHeader",
  data() {
    return {
      info: this.detail_info
    }
  },
  mounted() {
    const cur = new Date()
    this.info.start_time = `${cur.getHours()}:${cur.getMinutes()}`
    this.info.assess_date = cur
  },
  props: {
    detail_info: Object
  }
}
</script>

<style scoped>

</style>
