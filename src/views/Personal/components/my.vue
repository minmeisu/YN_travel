<template>
    <div>
        <div class="name">
            <router-link to="/login" v-if="!this.userInfo.name">
                <div class="btn">
                    登录
                </div>
            </router-link>
            <!-- 已经登录 -->
            <div  v-else>
                <img src="../../../assets/image/zhangguo.jpg">
                <p>{{this.userInfo.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'	
export default {
    name : 'personl-my',
    computed : {
        ...mapState(['userInfo'])
    }
}
</script>
<style scoped>
.name{
    background: #477bc7;
    padding: 1rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.btn{
    background: yellowgreen;
    width: 2rem;
    padding: 0.2rem 0.1rem;
    color : #fff;
}
.name img{width: 1rem; border-radius: 50%;}
.name p{font-size: 0.3rem; color: white; margin-top: .2rem;}
</style>