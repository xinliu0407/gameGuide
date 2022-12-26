<!--
 * @description: 
 * @Author: xinliu
 * @Date: 2022-12-26 10:33:07
 * @LastEditors: xinliu
 * @LastEditTime: 2022-12-26 14:02:41
-->
<script setup></script>
<template>
  <van-cell to="/about">
    <template #title>
      <img class="gameLogo" src="../assets/images/wzry.png" alt="" />
    </template>
    <template #value>
      <div>
        <span class="custom-title">王者荣耀</span>
      </div>
    </template>
  </van-cell>
</template>
<style scoped>
.van-cell {
  margin: 20px;
  padding: 0px;
  height: 60px;
  line-height: 60px;
  background: none !important;
  width: calc(100% - 40px);
}
:deep() .van-cell__title {
  flex: 0;
  margin-right: 20px;
}
:deep() .van-cell__value {
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  text-align: left;
  padding-left: 13px;
  color: #333;
  cursor: pointer;
}
.gameLogo {
  width: 60px;
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
  line-height: 40px;
  font-size: 16px;
}
</style>
