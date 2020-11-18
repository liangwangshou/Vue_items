<template>
   <div class="todo-footer">
     <label>
          <!-- <input type="checkbox" v-model="isAllCheck"/> -->
          <slot name="checkAll"></slot>
      </label>         
        <span>
          <!-- <span>已完成 {{completeSize}}  / 全部 {{todos.length}}</span> -->
        <slot name="count"></slot>
        </span>
        <!-- <button class="btn btn-danger" v-show="completeSize" @click="deleteNow">清除已完成任务</button> -->
        <slot name="delete"></slot>
      </div>
</template>
<script>

export default {
    props:{
      // deleteCompletedTodos:Function,
      // isSelectAlltodos:Function,
      // todos:Array
    },
    // computed: {
    //   completeSize(){
    //     return this.todos.reduce((preTotal,todo)=>preTotal+(todo.complete?1:0),0)
    //   },
    //  isAllCheck:{
    //     get(){
    //       return this.completeSize===this.todos.length
    //     },
    //     set(value){//value是当前checkbox最新的值
    //       this.isSelectAlltodos(value)
    //     }
    //   }
    // },
    methods: {
      // deleteNow(){
      //   this.deleteCompletedTodos()
      // }
    },
}
</script>
<style lang="">
    
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>