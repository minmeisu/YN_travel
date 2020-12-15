<template>
  <!-- 相册轮播组件 -->
  <div class="sliding" v-show="showswiper" @click="disAppear">
      <div class="sliding-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in images" :key="item.id">
        <img :src="item.image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
      </div>
  </div>
</template>

<script>
import Bus from '../../../bus/bus.js'	
export default {
  name: "sliding",
  props: {
    images: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction"
      },
      showswiper:false
    };
  },
  methods : {
      disAppear () {
          this.showswiper = false;
      }
  },
  mounted () {
      //把showswiper发送到covers组件
      Bus.$emit('val', this.showswiper);
      //接受过来的this.showimg
      Bus.$on('val', (data) => {
          this.showswiper = data;
      })
  },
};
</script>

<style scoped>
.sliding {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.sliding-swiper {
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 100%;
}
.swiper-pagination {
  color: white;
  position: fixed;
  bottom: 1rem;
}
</style>