<template>
    <div>
        <span v-if="!repoUrl">Loading</span>
        <span v-else>click on right <a :href="repoUrl">{{repoName}}</a></span>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            repoUrl:'',
            repoName:''
        }
    },
    mounted(){
    const url='https://m.ctrip.com/restapi/h5api/globalsearch/search?action=online&source=globalonline&keyword=1'
    this.$http.get(url).then(response=>{
    const result=response.data.data[0]
    this.repoUrl=url;
    this.repoName=result.word},(response)=>{
        alert("请求失败")
    })
    // axios.get(url).then(response=>{
    // const result=response.data.data[0]
    // this.repoUrl=url;
    // this.repoName=result.word}).catch(err=>alert("请求失败"))
    }
}
</script>
<style lang="">
    
</style>