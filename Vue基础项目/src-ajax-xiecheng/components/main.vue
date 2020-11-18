<template>
    <div class="row">
      <h2 v-if="searchBefore">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入关键字搜索</h2>
      <h2 v-if="searchLoading">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Loading...</h2>
      <div class="card" v-for="(arr, index) in arrs" :key="index">
        <a :href="arr.url" target="_blank">
          {{arr.word}}
        </a>
        <p class="card-text">{{arr.districtName}}</p>
      </div>  
      <h2 v-if="searchError">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;没有找到相关数据</h2>    
    </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
    data() {
      return {
        url:'',
        arrs:[],
        searchBefore:true,
        searchLoading:false,
        searchError:false
      }
    },
    mounted(){
      PubSub.subscribe('search',(msg,SearchName)=>{
        if(!SearchName){
          this.searchBefore=true
          this.arrs=null
        }else{
        this.searchLoading= this.searchError?false:true
        this.searchBefore=false   
        this.arrs=null     
        this.url=`https://m.ctrip.com/restapi/h5api/globalsearch/search?action=online&source=globalonline&keyword=${SearchName}`
        this.$http.get(this.url).then(response=>{
          const result=response.data;
          const dataArr=result.data;
          this.arrs=dataArr.map((arrOne,index)=>({
            url:arrOne.url,
            word:arrOne.word,
            districtName:arrOne.districtName
          }))
          this.searchLoading=false
          this.searchError=false
             
          if(this.arrs.length===0){
            this.searchError=true
          }
        },response=>{
           this.searchError=true 
        })
        }
        
      })
    }
}
</script>
<style lang="">
        .card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>