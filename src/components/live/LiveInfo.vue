<template>
  <div>
    <el-container>
      <el-header>
        <!-- 顶部导航栏 -->
        <myHeader></myHeader>
      </el-header>

      <el-main style="margin:0 auto;width:1000px;">
        <div>
        </div>
        <div>
            <iframe :src="liveUrl" class="iframeStyle">dsaf</iframe>
            <div style="background-color:blue;width:270px; height:435px;float:left;">
              <div style="margin:5px auto; width:100%;">
                <div style="width:80%; float:left;">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div style="float:left;margin:5px 0px;width:20%;">
                  <el-button type="primary" style="padding-left:9px;padding-right:9px;margin:0 2px;">发送</el-button>
                </div>
              </div>
            </div>
        </div>
      </el-main>

      <el-footer>
        <myFooter></myFooter>
      </el-footer>

    </el-container>
  </div>
</template>
<script>
import myHeader from './../public/Header'
import myFooter from './../public/Footer'
import config from './../../router/config'
// import barrage from './barrage.js' //注意路径
// import CKobject from './ckplayer/ckplayer.js' //注意路径
// import websocket from './websocket.js' //注意路径

export default{
  components:{
    myHeader,
    myFooter,
  },
  data(){
    return{
      rootURL: config.rootURL,
      liveUrl:'http://localhost:8080/ymbase/live/liveInfo.html',
    }
  },
  methods:{
  },
  created(){
    let that=this;
    that.liveUrl=that.rootURL+'/live/liveInfo.html'
  },
}
</script>

<style>
.iframeStyle{
  width:635px;
  height:435px;
  border:0px;
  border-style: hidden;
  background-color: gray;
  float:left;
}
</style>
