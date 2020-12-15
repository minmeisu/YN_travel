<template>
    <div>
        <div class="header-fixed">
        <router-link to='/personal'>
        <div class="header-fixed-back">
            <img src="../../../assets/image/fanhui.png">
        </div>
        </router-link>
        登录
        </div>

        <div class="login-img">
            <img src="../../../assets/image/fengmian.jpeg"/>
        </div>
    </div>

    
</template>

<script>
export default {
    naem : 'login-header',

}
</script>

<style scoped>
    @import '../../../assets/style/public.css';
	.login-img img{width: 100%;}
</style>