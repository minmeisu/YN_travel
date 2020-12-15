<template>
    <div>
        <My></My>
        <Business></Business>
        <Nav></Nav>
    </div>
</template>
<script>
import Nav from './components/nav'
import My from './components/my'
import Business from './components/business'
export default {
    name : 'personal',
    components : {
        Nav,
        My,
        Business
    }
}
</script>
<style scoped>

</style>