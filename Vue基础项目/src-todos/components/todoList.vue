<template>
    <ul class="todo-main">
       <TodoItem v-for="(todo, index) in todos" :key="index" 
       :index='index' :todo='todo' />
      </ul>
</template>
<script>
import TodoItem from './todoItem'
export default {
    components:{TodoItem},
    props:{
      todos:Array,
      // todoDelete:Function
    }
}
</script>
<style lang="">
    /*List*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>