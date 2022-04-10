<template>
  <el-row class="content">
      {{c}}
  </el-row>
</template>

<script>
export default {
  name: "Remider",
  data() {
    return {
      c: this.content
    }
  },
  props:{
    content: String
  }
}
</script>

<style scoped>
.content {
  font-style: italic;
  font-weight: bolder;
  width: 450px;
  margin: 10px 0 10px 130px;
}
</style>
