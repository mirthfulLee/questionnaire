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
      <el-col :span="4" :offset="1">
        <el-icon v-if="jumpable" class="jump">
          <right />
        </el-icon>
        <el-radio-group v-model="q.select">
          <el-radio-button :label=0
          >否
          </el-radio-button>
          <el-radio-button :label=1
          >是
          </el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :span="7">
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
import {Right} from '@element-plus/icons-vue'
export default {
  props: {
    question: Object,
    jumpable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Right
  },
  data() {
    return {
      q: this.question,
      // p: this.jumpable
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
