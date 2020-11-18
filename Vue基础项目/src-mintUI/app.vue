<template>
    <mt-button type='primary' @click.native="handleTest" style="width:100%">test</mt-button>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    methods:{
        handleTest(){
               Toast('点击了测试')
        }
    }
}
</script>
<style lang="">
    
</style>