<template>
  <div>
    <el-container>
      <el-header style="padding:0;">
        <!-- 顶部导航栏 -->
        <myHeader></myHeader>
      </el-header>

      <el-main style="margin:0 auto;width:100%;padding:10px 0 0 0; background-color:#545c64;height:1000px;">
          <div class="liveStyle">
            <div>
              <div style="width:100%;height:120px;background-color:rgb(0, 0, 0);margin:0 auto;">
                <div style="margin:0 auto;">
                  <div style="width:33%;float:left;">
                    <!--客队-->
                    <div style="position:relative;height:100%;">

                      <div style="transform-origin:0% 100%;float:left;transform: skew(-42deg);background-color: rgb(21, 137, 204);width:80px;height:120px;"></div>

                      <div style="transform-origin:0% 100%;float:left;transform: skew(-42deg);width:20px;height:120px;background-color: rgb(41, 157, 224);"></div>
                      <div style="transform-origin:0% 100%;float:left;transform: skew(-42deg);width:180px;height:120px;background: linear-gradient(to right, rgb(10, 68, 102), rgb(0, 0, 0));"></div>

                    </div>
                    <!-- <span style="font-size:23px;position:relative;float:right;top:20px;">{{match.leftTeamName}}</span> -->

                  </div>



                  <div style="width:33%;float:right;">
                    <!--主队-->
                    <div style="height:100%;float:right;">
                      <div style="transform-origin:0% 100%;float:left;transform: skew(42deg);width:180px;height:120px;background: linear-gradient(to left, rgb(89, 18, 32), rgb(0, 0, 0));"></div>
                      <div style="transform-origin:0% 100%;float:left;transform: skew(42deg);width:20px;height:120px;background-color: rgb(199, 57, 85);"></div>
                      <div style="transform-origin:0% 100%;float:left;transform: skew(42deg);background-color: rgb(179, 37, 65);width:80px;height:120px;"></div>
                    </div>


                    <!-- <span style="font-size:23px;position:relative;float:left;top:20px;">{{match.rightTeamName}}</span> -->
                  </div>
                </div>
              </div>

              <div style="position:relative;top:-120px;width:100%;float:left;">
                <div style="width:33%;float:left;">
                  <img style="float:left;position:relative;padding-left:50px;" width="120" height="120" :src="match.leftTeamBadge">
                  <el-button style="float:left;position:relative;border-style:none;background-color:rgba(34, 71, 137, 0.3);color:white;font-size:20px;position:relative;float:right;top:35px;width:150px" round>{{match.leftTeamName}}</el-button>
                </div>
                  <!-- 比赛性质介绍 -->
                <div style="width:34%;float:left;color:white;">
                  <center>
                  <div v-if="match.ifEnd === '1'" style="position:relative;top:15px;">
                    <div>{{match.startDate}} {{match.startTime}}</div>
                    <div style="font-size:35px;">{{match.leftGoal}} - {{match.rightGoal}}</div>
                    已结束
                  </div>
                  <div v-else-if="match.quarter === ''" style="position:relative;top:20px;">

                    <div style="font-size:25px;">{{match.startDate}} {{match.startTime}}</div>
                    未开始
                  </div>
                  <div  v-else>
                    <div>{{match.quarter}} {{match.quarterTime}}</div>
                    <div style="font-size:35px;">{{match.leftGoal}} - {{match.rightGoal}}</div>
                    正在直播
                  </div>
                </center>
                </div>
                <div style="width:33%;float:left;">
                  <img style="float:right;padding-right:50px;z-index:999" width="120" height="120" :src="match.rightTeamBadge">
                  <el-button style="float:right;border-style:none;background-color:rgba(179, 37, 65, 0.3);color:white;font-size:20px;position:relative;float:left;top:35px;width:150px" round>{{match.rightTeamName}}</el-button>
                </div>

                </div>
              </div>
              <div style="position:relative;top:-120px;">
                <iframe :src="liveUrl" class="iframeStyle"></iframe>
              </div>
            </div>

            <!-- <div style="background-color:blue;width:270px; height:510px;float:left;border-radius:4px;margin-left:5px;">
              <div style="margin:5px auto; width:100%;">
                <div style="width:80%; float:left;">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div style="float:left;margin:5px 0px;width:20%;">
                  <el-button type="primary" style="padding-left:9px;padding-right:9px;margin:0 2px;">发送</el-button>
                </div>
              </div>
            </div> -->
      </el-main>

      <el-footer style="padding:0;">
        <myFooter></myFooter>
      </el-footer>

    </el-container>
  </div>
</template>
<script>
import myHeader from './../public/Header'
import myFooter from './../public/Footer'
import config from './../../router/config'
import axios from 'axios'
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
      matchId:'',
      match:{
        leftTeamName:'凯尔特人',
        leftTeamBadge:'static/nba/GSW.png',
        leftGoal:'1',
        rightTeamName:'湖人',
        rightTeamBadge:'static/nba/LAL.png',
        rightGoal:'119',
        matchId:'1231648',
        matchDesc:'常规赛',
        leftId:11,

        rightId:22,

        startDate:'2017-12-19',
        startTime:'11:30',
        quarter:'第4节',
        quarterTime:'8:24',
        ifEnd:'',
      },
    }
  },
  methods:{
    getMatchById(matchId){
      let that = this ;

      axios.get(that.rootURL+'/getMatchById.do?matchId='+matchId).then(function(res){
        that.match={};
            that.match.matchId=res.data.matchId;
            that.match.matchDesc=res.data.matchDesc;
            that.match.leftId=res.data.leftId;
            that.match.leftGoal=res.data.leftGoal;
            that.match.leftTeamBadge=res.data.leftTeam.teamBadge;
            that.match.leftTeamName=res.data.leftTeam.teamName;

            that.match.rightId=res.data.rightId;
            that.match.rightGoal=res.data.rightGoal;
            that.match.rightTeamBadge=res.data.rightTeam.teamBadge;
            that.match.rightTeamName=res.data.rightTeam.teamName;

            that.match.startDate=res.data.startTime.substr(0,10);
            that.match.startTime=res.data.startTime.substr(11,5);
            that.match.quarter=res.data.quarter;
            that.match.quarterTime=res.data.quarterTime;
            that.match.ifEnd=res.data.ifEnd;
      });
    },
  },
  created(){
    let that=this;
    that.liveUrl=that.rootURL+'/live/liveInfo.html'

    that.matchId= that.$route.params.matchId;
    console.log("比赛编号："+that.$route.params.matchId);
    that.getMatchById(that.$route.params.matchId);
  },
}
</script>

<style>
.iframeStyle{
  width:100%;
  height:607px;
  border:0px;
  border-style: hidden;
  background-color: #282828;
  float:left;
}
.liveStyle{
    width:80%;
    margin: 0 auto;
}
</style>
