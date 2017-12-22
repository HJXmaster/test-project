<template>
  <div>
    <el-container >
      <el-header style="padding:0;">
        <myHeader></myHeader>
      </el-header>

      <el-main style="">
        <el-container style="margin-top:30px;">
          <el-aside width="200px" style="margin-left:150px;margin-right:30px;">
            <el-menu
            router
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">

              <el-menu-item index="1" :route="{path:'/CenterIndex/UserInfoManager'}">我的信息</el-menu-item>
              <el-menu-item index="2" :route="{path:'/CenterIndex/ReviewManager'}">我的回帖</el-menu-item>
              <el-menu-item index="3" :route="{path:'/CenterIndex/ReviewManager'}">我的评论</el-menu-item>
              <el-menu-item index="4" :route="{path:'/'}">我的发帖</el-menu-item>
              <el-menu-item index="5" :route="{path:'/'}">我的推荐</el-menu-item>

            </el-menu>
          </el-aside>

          <el-main style="padding:0;margin-right:150px;">
            <el-card style="background-color:#F2F6FC;margin:0 auto;">
              <transition name="slide-user" mode="out-in">
                <router-view class="child-view"></router-view>
              </transition>
            </el-card>
          </el-main>
        </el-container>
      </el-main>

      <el-footer  style="padding:0;">
        <myFooter></myFooter>
      </el-footer>

    </el-container>
  </div>
</template>
<script>
import axios from 'axios'
import config from './../../router/config'
import myHeader from './../public/Header'
import myFooter from './../public/Footer'
export default{
  components:{
    myHeader,
    myFooter,
  },
  data(){
    return{
      rootURL: config.rootURL,
    }
  },
  methods:{
    handleOpen(){

    },
    handleClose(){

    },
  },
  created(){
    let that =this;

  },
}
</script>

<style scoped>

</style>
