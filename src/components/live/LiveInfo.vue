<template>
  <div>
    <!-- 顶部导航栏 -->
    <myHeader></myHeader>
    <div id="a1">aaa</div>
  </div>
</template>
<script>
import myHeader from './../public/Header'
import CKobject from './ckplayer/ckplayer.js' //注意路径
// import barrage from './barrage.js' //注意路径
// import websocket from './websocket.js' //注意路径

export default{
  components:{
    myHeader,
  },
  data(){
    return{

    }
  },
  methods:{
  },
  created(){

  },
}
</script>

<style>

</style>
