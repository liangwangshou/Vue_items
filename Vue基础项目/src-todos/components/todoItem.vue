<template>
   <li @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{background:bgColor}">
          <label>
            <input type="checkbox" v-model="todo.complete"/>
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" style="display:none" v-show="isShow" @click="remove(index)">删除</button>
        </li>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
    data() {
        return {
            bgColor:'white',
            isShow:false
        }
    },
    props:{
        todo:Object,
        index:Number,
        // todoDelete:Function
    },
    methods: {
        handleShow(enter){
          if(enter){
            this.bgColor='#ccc'
            this.isShow=true
          }else{
            this.bgColor='white'
            this.isShow=false
          }
        },
        remove(index){
          // this.todoDelete(index)
           PubSub.publish('todoDelete',this.index)
        }
    },
}
</script>
<style lang="">
    /*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>