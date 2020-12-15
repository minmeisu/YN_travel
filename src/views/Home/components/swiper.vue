<template>
  <div>
      <swiper :options="swiperOption">
      <swiper-slide v-for="item in banner" :key="item.id">
        <img :src="item.image" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
//引入接口的文件
import { banner } from "../../../api/api";
export default {
  name: "swiperhome",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 2000
      },
      banner: []
    }
  },
  mounted() {
    banner({})
      .then(res => {
        console.log(res);
        this.banner = res.data;
      })
      .catch(error => {
        console.log(console.error);
      });
  }
};
</script>

<style scoped>
</style>