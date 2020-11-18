<template>
     <section class="jumbotron">
      <h3 class="jumbotron-heading">携程搜索</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="handleSearch">Search</button>
      </div>
    </section>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
    data() {
      return {
        searchName:''
      }     
    },
    methods: {
      handleSearch(){
PubSub.publish('search',this.searchName)
      }
    },
}
</script>
<style lang="">
    
</style>