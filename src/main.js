import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局引入css初始化的文件
import './assets/style/reset.css'
//引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入轮播插件的样式
//轮播css
import 'swiper/dist/css/swiper.css'

//引入弹窗组件
import popupToast from './popup/popup.js'

Vue.use(popupToast)

//使用轮播
Vue.use(VueAwesomeSwiper)

//全局使用拦截器
import './axios';
import Axios from 'axios';
Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
