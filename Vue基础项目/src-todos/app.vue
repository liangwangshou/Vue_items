<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <TodoHeader @todosAdd='todosAdd'/>
     <TodoList :todos='todos'/>
     <!-- <TodoFooter :isSelectAlltodos='isSelectAlltodos' :deleteCompletedTodos='deleteCompletedTodos' :todos='todos'/> -->
     <TodoFooter>
     <input slot="checkAll" type="checkbox" v-model="isAllCheck"/>
     <span slot="count">已完成 {{completeSize}}  / 全部 {{todos.length}}</span>
     <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteNow">清除已完成任务</button>
      </TodoFooter>          
    </div>
  </div>
</template>
<script>
import util from './util/util'
import TodoHeader from './components/todoHeader'
import TodoList from './components/todoList'
import TodoFooter from './components/todoFooter'
import PubSub from 'pubsub-js'
export default {
  // data() {
  //   return {
  //     todos:
  //     [{title:'吃饭',complete:false},
  //     {title:'睡觉',complete:true},
  //     {title:'打代码',complete:false}
  //     ]
  //   }
  // },
  mounted(){
    PubSub.subscribe('todoDelete',(msg,index)=>{
      this.todoDelete(index)
    })
  },
  data() {
    return {
      todos:util.readTodos()
    }
  },
  watch:{
    todos:{
      deep:true,
      // handler:function(value){
      //   util.saveTodos(value)
      // }
      handler:util.saveTodos
    }
  },
    components:{
        TodoHeader,
        TodoList,
        TodoFooter
    },
    methods: {
      todosAdd(todo){
        this.todos.unshift(todo)
      },
      todoDelete(index){
        this.todos.splice(index,1)
      },
      deleteCompletedTodos(){
       this.todos= this.todos.filter((todo)=>!todo.complete)
      },
      isSelectAlltodos(check){
        this.todos.forEach((todo)=>todo.complete=check)
      },
      deleteNow(){
        this.deleteCompletedTodos()
      }
    },
    computed: {
      completeSize(){
        return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
      },
     isAllCheck:{
        get(){
          return this.completeSize===this.todos.length
        },
        set(value){//value是当前checkbox最新的值
          this.isSelectAlltodos(value)
        }
      }
    },
}
</script>
<style lang="">
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>