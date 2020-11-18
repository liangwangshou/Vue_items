<template>
   <div class="container">
       <Search/>
       <UserMain/>       
   </div>
</template>
<script>

import Main from './components/main'
import Search from './components/search'

export default {
    components:{
        Search,
        UserMain:Main
    }
}
</script>
<style lang="">

</style>