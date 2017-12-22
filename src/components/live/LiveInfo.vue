<template>
  <div>
    <el-container>
      <el-header style="padding:0;">
        <!-- 顶部导航栏 -->
        <myHeader></myHeader>
      </el-header>

      <el-main style="margin:0 auto;width:1000px;padding:50px 0;">
        <div>
        </div>
        <div>
          <div class="liveStyle">
            <div style="width:100%;height:75px;background-color:green;margin:0 auto;float:left;">
              <div style="margin:0 auto;">
                <div style="width:40%;float:left;">
                  <!--客队-->
                  <img style="position:relative;top:3px;float:right;" width="68" height="68" :src="match.leftTeamBadge">
                  <span style="font-size:23px;position:relative;float:right;top:20px;">{{match.leftTeamName}}</span>
                </div>


                <!-- 比赛性质介绍 -->
                <div style="width:20%;float:left;">
                  <center>
                  <div v-if="match.ifEnd === '1'" style="position:relative;top:15px;">
                    已结束
                    <div>{{match.leftGoal}} - {{match.rightGoal}}</div>
                  </div>
                  <div v-else-if="match.quarter === ''" style="position:relative;top:5px;">
                    未开始
                    <div>{{match.startDate}}</br>{{match.startTime}}</div>
                  </div>
                  <div  v-else>
                    <div style="color:red;">
                      <div>{{match.quarter}} {{match.quarterTime}}</div>
                    </div>
                    <div style>{{match.leftGoal}} - {{match.rightGoal}}</div>
                  </div>
                </center>
                </div>


                <div style="width:40%;float:right;">
                  <!--主队-->
                  <img style="position:relative;top:3px;float:left;" width="68" height="68" :src="match.rightTeamBadge">
                  <span style="font-size:23px;position:relative;float:left;top:20px;">{{match.rightTeamName}}</span>
                </div>
              </div>
            </div>
            <iframe :src="liveUrl" class="iframeStyle"></iframe>
          </div>
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
  width:635px;
  height:435px;
  border:0px;
  border-style: hidden;
  background-color: gray;
  float:left;
}
.liveStyle{
    width:635px;
    float:left;
}
</style>
