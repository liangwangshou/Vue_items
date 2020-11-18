<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment='addComment'/>
      <List :comments="comments" :deleteComment='deleteComment'/>
    </div>
  </div>
</template>
<script>
import Add from './components/add'
import List from './components/list'

export default {
  data() {
    return {
      comments:[{name:'Tom',content:'梁'},{name:'Jom',content:'玉'},{name:'Mary',content:'涛'}]
    }
  },
  components:{
    Add,
    List
  },
  methods:{
    addComment(comment){
      this.comments.unshift(comment)
    },
    deleteComment(index){
      this.comments.splice(index,1)
    }
  }
}
</script>
<style lang="">
  .logo{
    width: 200px;
    height: 200px;
  }
</style>