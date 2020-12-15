<template>
    <div>
        <Header></Header>
        <Loginpage></Loginpage>
    </div>
    
</template>

<script>
import Header from './components/header'
import Loginpage from './components/loginpage'
export default {
    name : 'Login',
    components : {
        Header,
        Loginpage,

    }
}
</script>

<style scoped>

</style>