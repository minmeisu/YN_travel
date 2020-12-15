import Vue from 'vue'
import axios from 'axios'

//引入vuex
import store from '../store/index'


// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.userInfo.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `JWT ${store.state.userInfo.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

//http response拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                  console.log('错误了，没有登录')
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });