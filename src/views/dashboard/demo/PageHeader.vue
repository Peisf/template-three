<template>
  <div style="
      /* background: url(./head_bg.png); */
      /* background-size: 100% 100%; */
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      /* background: rgba(0, 0, 0, 0.2); */
    ">
    <!-- background:rgba(255, 0, 0, 0.0);用来辅助测试观察布局效果 -->
    <div style="
        /* background: rgba(255, 255, 255, 0); */
        color: #ffffff;
        width: 50px;
        height: 50px;
        padding: 10px 20px;
      ">
      <img src="@/assets/logo.png" alt="" style="height: 100%" />
    </div>
    <!-- color: rgb(150, 205, 91); -->
    <div style="
        color:#ffffff;
        width: 400px;
        height: 70px;
        line-height: 70px;
        margin-left: 10px;
        font-size: 20px;
        /* margin-left: 800px; */

      ">
      全球航班大屏可视化
    </div>
    <!-- flex嵌套flex布局 -->
    <!-- background: rgba(0, 0, 0, 0.25); -->
    <div style="
        display: flex;
        flex-direction: row;
        align-items: center;

        border-radius: 40px;
        padding: 10px 20px;
        margin-left: 1170px;
      ">
      <div style="
          background: rgba(255, 0, 0, 0);
          color: #ffffff;
          width: 32px;
          height: 32px;
        ">
        <img src="@/assets/UI/多云.png" alt="" style="height: 100%" />
      </div>
      <div style="
          height: 30px;
          width: 1px;
          background: rgba(0, 160, 200, 0.4);
          margin-left: 10px;
        "></div>
      <div style="
          background: rgba(255, 0, 0, 0);
          color: #ffffff;
          margin-left: 10px;
          height: 28px;
        ">
        <img src="@/assets/UI/PM2.5.png" alt="" style="height: 28px" />
      </div>

      <div style="
          background: rgba(255, 0, 0, 0);
          color: #ffffff;
          margin-left: 10px;
        ">
        57.0
      </div>
      <div style="
          height: 30px;
          width: 1px;
          background: rgba(0, 160, 200, 0.4);
          margin-left: 10px;
        "></div>
      <div style="
          background: rgba(255, 0, 0, 0);
          color: #ffffff;
          margin-left: 0px;
          height: 32px;
        ">
        <img src="@/assets/UI/温度.png" alt="" style="height: 32px" />
      </div>
      <div style="background: rgba(255, 0, 0, 0); color: #ffffff; margin-left: 0px">
        36.5
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>

</style>
