<template>
    <div>
        <Header></Header>
        <Swiperhome></Swiperhome>
        <Ticket></Ticket>
        <Content></Content>
        <Nav></Nav>
    </div>
</template>
<script>
//先引入小组件
import Nav from './components/nav'
import Header from './components/header'
import Swiperhome from './components/swiper'
import Ticket from './components/ticket'
import Content from './components/content'
export default {
    name : 'home',
    components : {
        Nav,
        Header,
        Swiperhome,
        Ticket,
        Content
    }
}
</script>
<style scoped>

</style>