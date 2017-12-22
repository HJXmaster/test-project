<template>
  <div class="css-top">
    <div style="width:1100px;margin:0 auto;">
      <div class="css-top-left ">
        <router-link to="/" class="router-link">
          <img src="./../../assets/YM.jpg" class="logo">
          <div class="css-top-left-title">YM base</div>
        </router-link>
      </div>
      <div class="css-top-center">
        <!-- <div class="line"></div> -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
          <el-menu-item index="0">
            <router-link class="router-link" to="/"><span class="header_guide">首页</span></router-link>
          </el-menu-item>

          <el-menu-item index="1">
            <router-link class="router-link" to="/GameList"><span class="header_guide">比赛</span></router-link>
            <!-- <router-link to="/GameList"></router-link> -->
          </el-menu-item>

          <el-menu-item index="2">
            <router-link class="router-link" to="/NewsList">
              <span class="header_guide">新闻</span>
            </router-link>
          </el-menu-item>

          <el-menu-item index="3">
            <router-link class="router-link" to="/">
              <span class="header_guide">讨论区</span>
            </router-link>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title" ><span class="header_guide">联系客服</span></template>
            <el-menu-item index="4-1">帮助中心</el-menu-item>
            <el-menu-item index="4-2">意见建议</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <div v-show="!login" class="css-top-right">
        <div class="loginstyle" style="float:left;">
          <el-button @click="dialogVisible = true"  style="margin:0;padding:0;background-color:gray;border-color:gray;border-radius: 50%;height:50px;width:50px;float:left;color:white;">登录
          </el-button>
        </div>
          <div style="float:left;padding:0px 0px 0px 10px;width:80px;font-size: 16px;color:white;line-height: 40px;">登录享特权</div>
          <div>
            <el-dialog
          title="请登录"
          :visible.sync="dialogVisible"
          width="25%"
          >
            <center>
              <div style="width:280px;">
                <span style="font-size:18px;">账号密码登录</span>
                <el-input placeholder="支持账号/手机号/邮箱登录" style="margin:10px 0;" v-model="userId" clearable></el-input>
                <el-input placeholder="密码" style="margin:10px 0;" type="password" v-model="password" clearable></el-input>
                <el-button type="success" style="width:100%;" @click="loginUser()" :loading="loading">登录</el-button>
              </div>
            </center>

            <span slot="footer" class="dialog-footer">

              <el-button type="text">忘了密码？</el-button>
              <span style="color:gray;"> | </span>
              <el-button type="text">注册新账号</el-button>
            </span>
          </el-dialog>
        </div>
      </div>

      <div v-show="login" class="css-top-right1">
        <el-popover placement="bottom-start" trigger="hover" style="" width="250">
          <div slot="reference" style="height:35px;">
            <img src="./../../assets/icon/icon1.jpg" class="common-avatar"/>
          <!-- <router-link to="/userIndex"> -->
            <!-- <el-button @click="getUserInfo()">个人中心</el-button> -->
            <!-- <img src="./../../../assets/img/TOF.jpg" id="pic"> -->
            <div style="float:left;padding:0px 0px 0px 10px;width:80px;" class="css-top-right-username">{{username}}</div>
          <!-- </router-link> -->
          </div>

          <div style="">
            <el-container style="padding:0 auto;width:250;margin:8px auto;">
              <el-header style="padding:0 0;height:40px;
                border-bottom: 1px solid #cccccc;">
                <el-tooltip :content="username" placement="bottom">
                  <span style="width:50%;float:left;padding-right:20px;font-size:15px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;" >{{username}}</span>
                </el-tooltip>
                <router-link to="/CenterIndex/UserInfoManager" style="color:black;">
                  <el-tooltip content="个人中心" placement="bottom">
                    <i class="el-icon-setting" style="float:right;width:40;font-size:25px;margin-left:10px;"></i>
                  </el-tooltip>
                </router-link>
              </el-header>
              <el-main style="padding:0 auto;
                border-bottom: 1px solid #cccccc; font-size:19px;float:left;text-align:center;margin:0 auto 10px auto;">
                <div style="float:left;">
                  <div style="float:left;width:51px;border-right: 1px solid #cccccc;">
                    <router-link to="/CenterIndex/replyManager">
                      <el-button type="text" style="color:gray;margin:auto;width:100%;">回帖</el-button>
                    </router-link>
                    <span style="font-size:11px;">1235</span>
                  </div>
                  <div style="float:left;width:51px;border-right: 1px solid #cccccc;">
                    <router-link to="/CenterIndex/ReviewManager">
                      <el-button type="text" style="color:gray;margin:auto;width:100%;">评论</el-button>
                    </router-link>
                    <span style="font-size:11px;">1235</span>
                  </div>
                  <div style="float:left;width:51px;border-right: 1px solid #cccccc;">
                    <router-link to="/CenterIndex/MyTopicManager">
                      <el-button type="text" style="color:gray;margin:auto;width:100%;">发帖</el-button>
                    </router-link>
                    <span style="font-size:11px;">1235</span>
                  </div>
                  <div style="float:left;width:51px;">
                    <router-link to="/CenterIndex/MyTopicManager">
                      <el-button type="text" style="color:gray;margin:auto;width:100%;">推荐</el-button>
                    </router-link>
                    <span style="font-size:11px;">1235</span>
                  </div>
                </div>
              </el-main>
              <el-footer style="padding:0;margin:0 auto;height:40px;">
                <div style="margin:10 0;">
                  <el-button type="info" style="" >切换账号</el-button>
                  <el-button type="danger" style="" >退出登录</el-button>
                </diV>
              </el-footer>
            </el-container>
          </div>

        </el-popover>
      </div>

    </div>
  </div>


</template>

<script>
import axios from 'axios'
import config from './../../router/config'
import { Notification } from 'element-ui'

  export default {
    data() {
      return {
        rootURL:config.rootURL,
        activeIndex: '0',
        login:false,
        username:'富强民主文明和谐法制友善',
        dialogVisible: false,
        userId:'',
        password:'',
        visible:false,
        loading:false,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        let that=this;
        that.activeIndex=key;
        // console.log('菜单栏'+key);
        // console.log(key, keyPath);
      },
      loginUser(){
        let that=this;
        that.dialogVisible = false;
        if(that.userId==''){

        }
        that.loading=true;
        axios.get(that.rootURL+'/loginUser.do?uid='+that.userId+'&upassword='+that.password).then(function(res){
          if(res.data.status==false){
            Notification.error({
                    title: '登录失败！',
                    message: res.data.msg,
                    offset: 65,
                    duration:2000
                  });
            that.login=false;
          }else{
            Notification.success({
                    title: '登录成功！',
                    message: res.data.msg,
                    offset: 65,
                    duration:2000
                  });
            that.username=res.data.user.unickname;
            that.login=true;
          }
        });
        that.loading=false;
      },
      getUserInfo(){
        let that=this;
        axios.get(that.rootURL+'/getUserInfo.do?').then(function(res){
          if(res.data.status==true){
            that.login=true;
          }else {
            that.login=false;
          }
        });
      },
    },
    created(){
      let that=this;
      that.getUserInfo();
    }
  }
</script>

<style scoped>
.css-top {
	width: 100%;
  height:60px;
  padding:10px 0;

  margin: 0;
  border-bottom: 1px solid #cccccc;
  /*background-color: #005894;*/
  background-color: #545c64;
  /*box-shadow: 0 0 0px #888;*/
  position: fixed;
  z-index:999;
  /*opacity: 0.9;*/
}

.css-top-left {
  float: left;
  width: 23%;
  height: 50px;
  margin-right: 20px;

}
.css-top-left-title {
  position: relative;
  top:-72px;
  left:90px;
  font-size: 30px;
  text-decoration: none;
}



.css-top-center {
  /*padding-left: 60px;*/
  float: left;
  width: 50%;
  font-size: 20px;
}



.css-top-right {
  float: left;

  height:60px;
  padding-top: 10px;
  padding-right: 15px;
  margin-left: 100px;
}

.css-top-right1 {
  float: left;
  height:60px;
  padding-top: 10px;
  padding-right: 15px;
  margin-left: 100px;
}
.css-top-right-username {
  margin-right: 0px;
  margin-top: 10px;
  font-size: 16px;
  color:#fc7701;
  line-height: 40px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.el-menu-demo{
  /*background-color: #005894;*/
  background-color: #545c64;
  /*border-bottom: 1px solid #cccccc;*/
  border-style: none;
}
.el-menu-demo :hover{
  background-color: black;
}

.el-menu-item .header_guide,.el-submenu .header_guide{
  font-size: 18px;
  /*color:white;*/
  letter-spacing: 3px;
  text-shadow: 2px 2px 10px #999;
}

.logo{
  width: 80px;
  position: relative;
  top: -10px;
  /*background-color: blue;*/
}

.loginstyle :hover{
  color: black;
}
.router-link{
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
  text-shadow: 2px 2px 10px #999;
  font-family: Century Gothic;
}
.common-avatar {
    float:left;
    width: 50px;
    height: 50px;
    font-size: 0;
    border-radius: 50%;
    position: relative;
    bottom: 5px;
}
.fixednav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;
}
</style>
