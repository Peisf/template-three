<template>
  <div class="home">
    <div>
      <el-row>
        <el-col :sm="12" :lg="6">
          <el-result
            icon="success"
            title="3D"
            sub-title="粮仓3D可视化系统"
          >
            <template #extra>
              <router-link to="/three/granary">
                <el-button type="primary">进入</el-button>
              </router-link>
            </template>
          </el-result>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home'
})
</script>
<style scoped>
</style>
