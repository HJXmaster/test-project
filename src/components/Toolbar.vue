<template>
    <div id="toolbar">
        工具栏
        <i @click="addNote">添加</i>
        <i @click="tooglefavorite" >收藏</i>
        <i @click="deleteNote">删除</i>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  },
  methods:{
    addNote(){
      console.log('addNote')
    },
    tooglefavorite(){
      console.log('addNote')
    },
    deleteNote(){
      console.log('addNote')
    }
  }
}
</script>

<style>
  #toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
}
</style>
