<!--
 * @description: 
 * @Author: xinliu
 * @Date: 2022-12-26 10:33:07
 * @LastEditors: xinliu
 * @LastEditTime: 2022-12-26 15:47:28
-->
<template>
  <div class="about">
    <van-nav-bar title="扫码登录" left-arrow @click-left="back()" fixed />
    <div class="content">
      <p>请使用手机微信扫描下方二维码</p>
      <p>授权登录王者荣耀</p>
      <img :src="qrCodeUrl" alt="" />
      <p style="font-size: 14px; font-weight: normal">
        二维码将在
        <span style="color: aliceblue">{{ mins }}</span>
        后自动刷新
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "aboutPage",
  data() {
    return {
      qrCodeUrl: "",
      mins: "05分00秒",
      minSecond: 5 * 1000 * 60,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getUuid() {
      axios({
        url: "http://demo.tiddd.com/api/gltask/helper/getUuid",
        method: "post",
        data: {
          id: 99,
        },
      }).then((res) => {
        this.qrCodeUrl = res.data.data.qrCode;
        this.minSecond = 5 * 1000 * 60;
      });
    },
    timeInterval() {
      let self = this;
      setInterval(function () {
        self.minSecond -= 1000;
        let minsStr = "";
        minsStr += "0" + Math.floor((self.minSecond / (1000 * 60)) % 60) + "分";
        minsStr +=
          Math.floor((self.minSecond / 1000) % 60) < 10
            ? "0" + Math.floor((self.minSecond / 1000) % 60) + "秒"
            : Math.floor((self.minSecond / 1000) % 60) + "秒";
        self.mins = minsStr;
        if (self.minSecond <= 0) {
          self.getUuid();
        }
      }, 1000);
    },
  },
  mounted() {
    this.getUuid();
    this.timeInterval();
  },
};
</script>
<style scoped>
.about :deep(.van-nav-bar) {
  background: rgba(255, 255, 255, 0.5);
}
.content {
  text-align: center;
  padding-top: 60px;
}
.content p {
  font-size: 16px;
  font-weight: bold;
}
.content img {
  width: 120px;
  margin-top: 20px;
}
</style>
