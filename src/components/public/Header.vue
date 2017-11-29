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
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
        <router-link to="/">
          <el-button>登录</el-button>
        </router-link>
        <router-link to="/">
        <el-button type="primary">注册</el-button>
        </router-link>
      </div>

      <div v-show="login" class="css-top-right">
        <!-- <router-link to="/userIndex"> -->
          <!-- <el-button @click="getUserInfo()">个人中心</el-button> -->
          <!-- <img src="./../../../assets/img/TOF.jpg" id="pic"> -->
          <div style="float:left;padding:0px 0px 0px 10px"><span class="css-top-right-username">你好！{{username}}</span></div>
        <!-- </router-link> -->
        <!-- <router-link to="/login"> -->
          <div style="float:right"><el-button type="danger" >退出</el-button></div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.css-top {
	width: 100%;
  height:60px;
  padding: 0px 0px;
  margin: 0 auto;
  border-bottom: 1px solid #cccccc;
  /*box-shadow: 0 0 0px #888;*/

}

.css-top-left {
  float: left;
  width: 200px;
  height: 50px;
}
.css-top-left-title {
  display: block;
  position: relative;
  top:-75px;
  left:90px;
  font-size: 30px;
  text-decoration: none;
}



.css-top-center {
  padding-left: 60px;
  float: left;
  width: 45%;
  font-size: 20px;
  background-color: white;
}



.css-top-right {
  float: right;
  width: ;
  height:60px;
  padding-top: 10px;
  padding-right: 15px;
}
.css-top-right-username {
  margin-right: 0px;
  font-weight: bold;
  margin-top: 10px;
  font-size: 16px;
  color:#fc7701;
  line-height: 40px;
}

.el-menu-demo{
  background-color: white;
}

.el-menu-item .header_guide,.el-submenu .header_guide{
  font-size: 18px;
  color:black;
  letter-spacing: 3px;
  text-shadow: 2px 2px 10px #999;
}

.logo{
  width: 80px;
  position: relative;
  top: -10px;
  -webkit-animation: clockwise 2s  ;
  animation: clockwise 2s linear   ;
  transform-origin: 10px 10px;
}

.router-link{
  text-decoration: none;
  color: black;
}
</style>
