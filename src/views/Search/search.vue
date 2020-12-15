<template>
   <div>
       <div class="search">
           <input type="text" placeholder="请输入目的地/攻略" v-model="keyworld" @keyup.enter="submit">
           <router-link to="/">
                <p>取消</p>
           </router-link>
       </div>
       <!-- 搜索出来的内容 -->
       
        <div v-if="issearch">
            <router-link to="/container">
            <div v-for="item in result" :key="item.id">
                <router-link :to="'/container/' + item.id">
                <div class="content">
                        <div class="content-image">
                            <img :src="item.name.image"/>
                        </div>
                        <div class="content-list">
                            <div class="content-name">{{item.name.name}}</div>
                            <div class="content-biao">
                                <p>{{item.name.title}}</p>
                            </div>
                        </div>
                </div>
                </router-link>
            </div>
              </router-link>
        </div>
      
       <!-- 没有搜索到 -->
       <div class="nosearch" v-else>
           <img src="../../assets/image/rekong.png">
       </div>
   </div>
</template>

<script>
import { seachIng } from '../../api/api'
export default {
    name : 'Search',
    data () {
        return{
            keyworld : '',
            result : [],
            issearch : true,
        }
    },
    methods : {
        submit () {
            seachIng(this.keyworld)
                .then((res) => {
                    // console.log(res)
                    var searchdata = res.data;
                    if (searchdata.length !== 0) {
                        this.result = searchdata;
                        this.issearch = true;
                    }else{
                        this.issearch = false;
                    }
                }).catch((error) => {
                    console.log(error)
                })
        }
    }

}
</script>

<style scoped>
    @import '../../assets/style/public.css';
    .search{
        display :flex;
        height: 1rem;
        align-items: center;
        padding: 0 0.2rem;
    }
    .search input{
        height: 0.5rem;
        width: 100%;
        border-radius: 0.1rem;
        padding: 0.06rem 0.2rem;
        font-size: 0.26rem;
        background: #ececec;
    }
    .search p{
        width: 1.2rem;
        height:0.5rem;
        text-align: center;
        line-height: 0.5rem;
        color: #f39c11;
        margin-right: 0.2rem;
    }
    .nosearch{
        text-align: center;
    }
    .nosearch img{
        width: 60%;
    }
    a{
        color: black;
    }
</style>