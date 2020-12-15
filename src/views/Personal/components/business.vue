<template>
    <div class="business" v-if="this.userInfo.name">
        <div>
            <router-link to='/mycollection'>
            <img src="../../../assets/image/myshou.png">
            <p>我的收藏</p>
            </router-link>
        </div>

        <div @click="loGout">
            <img src="../../../assets/image/tuichu.png">
            <p>退出登录</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import cookie from '../../../axios/cookie'
export default {
    name : 'personal-business',
    computed :{
        ...mapState(['userInfo'])
    },
    methods : {
        loGout () {
            //退出登录就清除缓存的数据，但这并不是连注册那里的数据都没有l
            cookie.delCookie('token');
            cookie.delCookie('name');
            //更新vuex的数据
            //更新数据仓库的数据
            this.$store.dispatch('users');
            //跳转到首页
            this.$router.push({name : 'Home'})
        }
    }
}
</script>

<style scoped>
.business{display: flex;
				justify-content: space-between;
				margin: 0.3rem 0.1rem;}
	.business img{width: 0.7rem; padding-bottom: 0.1rem;}
	.business div{background: #3aa4f0;
					text-align: center;
					padding: 0.2rem 0;
					width: 46%;
					border-radius: 3px;
					color: white;
					font-size: 0.2rem;}		
	a{color: white; display: block;}
</style>