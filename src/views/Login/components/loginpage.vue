<template>
    <div>
        <!-- 登录注册切换 -->
        <div class="switchs">
            <router-link to="/loginend">
            <div>登录 </div>
            </router-link>
            <router-link to="/register">
            <div>注册</div>
            </router-link>
        </div>
        <!-- 二级路由渲染 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name : 'loginpage'
}
</script>
<style scoped>
    .switchs{display: flex; justify-content: space-around;
			margin: 0.5rem 0;}
	.switchs div{font-size: 0.3rem;}
</style>