<template>
<!--  <div class="common-layout">-->
<!--    <ElContainer>-->
<!--      <ElAside width="250px">-->
<!--        <el-row class="tac">-->
<!--          <el-col :span="24">-->
<!--            <h5 class="mb-2">标题</h5>-->
<!--            <el-menu-->
<!--              default-active="1"-->
<!--              class="el-menu-vertical-demo"-->
<!--            >-->
<!--              <el-menu-item index="1">案例1</el-menu-item>-->
<!--              <el-menu-item index="2">案例2</el-menu-item>-->
<!--              <el-menu-item index="3">案例3</el-menu-item>-->
<!--            </el-menu>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </ElAside>-->
<!--      <ElContainer>-->
<!--        <ElHeader>-->
<!--          header-->
<!--        </ElHeader>-->
<!--        <ElMain>-->
<!--          <RouterView>-->
<!--            <template #default="{ Component, route }">-->
<!--              <transition-->
<!--                mode="out-in"-->
<!--                appear-->
<!--              >-->
<!--                <keep-alive>-->
<!--                  <component :is="Component" :key="route.fullPath"/>-->
<!--                </keep-alive>-->
<!--              </transition>-->
<!--            </template>-->
<!--          </RouterView>-->
<!--        </ElMain>-->
<!--        &lt;!&ndash;          <ElFooter>Footer</ElFooter>&ndash;&gt;-->
<!--      </ElContainer>-->
<!--    </ElContainer>-->
<!--  </div>-->
    <RouterView>
      <template #default="{ Component, route }">
        <transition
          mode="out-in"
          appear
        >
          <keep-alive>
            <component :is="Component" :key="route.fullPath"/>
          </keep-alive>
        </transition>
      </template>
    </RouterView>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.common-layout {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  flex-direction: column;

  > .ant-layout {
    min-height: 100%;
  }

  &-main {
    width: 100%;
    margin-left: 1px;
  }

}
</style>
