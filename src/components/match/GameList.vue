<template>
  <div>
    <!-- 顶部导航栏 -->
    <myHeader></myHeader>
    <div style="margin:0 auto;width:1200px;">
      <!-- 侧边战绩排行榜 -->
      <div style="float:left;">
        <rankingList></rankingList>
      </div>
      <!-- 一周内比赛列表+日期时间 -->
      <div style="float:right;">
        <!-- 日期栏 -->
        <div style="padding:10px 0;">
          <el-button-group>
            <el-button type="primary" icon="arrow-left" style="height:60px;" @click="showLastWeek()"></el-button>

              <div style="float:left;height:60px;" v-for="esingle in timeList">
                <el-button :plain="true" type="info" class="dateClass" @click="showMatch(esingle)" plain>{{esingle}}</el-button>
              </div>

            <el-button type="primary" icon="arrow-right" style="height:60px;" @click="showNextWeek()"></el-button>
          </el-button-group>

        <!-- <div>
          {{timedate}}
        </div> -->

        </div>
        <!-- 比赛列表 -->
        <div v-if="gameList == ''" style="font-size:20px;"><center>没有比赛</center></div>
        <div>
          <div v-for="esingle in gameList">
            <router-link :to="'/LiveInfo/' + esingle.matchId" target="_blank"><game :match="esingle"></game></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import config from './../../router/config'
import game from './Game'
import myHeader from './../public/Header'
import searchByDate from './../public/SearchByDate'
import rankingList from './../public/RankingList'
export default{
  components:{
    game,
    myHeader,
    searchByDate,
    rankingList
  },
  data(){
    return{
      rootURL: config.rootURL,
      activeIndex:1,
      matchList:[],
      weekDate:new Date(),
      timedate:[],
      gameList:[
        {
          time:'08:30',
          homeTeam:'骑士',
          visitTeam:'勇士',
          homeScore: '199',
          visitScore:'198',
          homeUrl:'/static/nba/CLE.png'
        },
        {
          time:'10:30',
          homeTeam:'马刺',
          visitTeam:'勇士',
          homeScore: '-',
          visitScore:'-',
          homeUrl:'/static/nba/SAS.png'
        }
      ],
      timeList:[

      ],
    }
  },
  methods:{
    getTodayMatch(){
      let that = this ;
      axios.post(that.rootURL+'/getTodayMatch.do').then(function(res){
        var match={};
        that.gameList=[];
        for(that.idx of res.data){
          match=[];
          match.matchId=that.idx.matchId;
          match.matchDesc=that.idx.matchDesc;
          match.leftId=that.idx.leftId;
          match.leftGoal=that.idx.leftGoal;
          match.leftTeamBadge=that.idx.leftTeam.teamBadge;
          match.leftTeamName=that.idx.leftTeam.teamName;

          match.rightId=that.idx.rightId;
          match.rightGoal=that.idx.rightGoal;
          match.rightTeamBadge=that.idx.rightTeam.teamBadge;
          match.rightTeamName=that.idx.rightTeam.teamName;

          match.startDate=that.idx.startTime.substr(0,10);
          match.startTime=that.idx.startTime.substr(11,5);
          match.quarter=that.idx.quarter;
          match.quarterTime=that.idx.quarterTime;
          match.ifEnd=that.idx.ifEnd;

          that.gameList.push(match);
        }
      })
    },
    getWeekMatch(weekDate){
      let that = this ;
      var tmp={time:'',
          children:[]
      };
      var date=that.getFormatDate(weekDate);
      axios.get(that.rootURL+'/getWeekMatch.do?date='+date).then(function(res){
        that.timeList=[];
        that.matchList=[];
        for(var key in res.data){
          tmp={};
          tmp.time=key;
          console.log(key);
          that.timeList.push(key);

          var m={};
          for(that.idx of res.data[key]){
            m=[];
            m.matchId=that.idx.matchId;
            m.matchDesc=that.idx.matchDesc;
            m.leftId=that.idx.leftId;
            m.leftGoal=that.idx.leftGoal;
            m.leftTeamBadge=that.idx.leftTeam.teamBadge;
            m.leftTeamName=that.idx.leftTeam.teamName;

            m.rightId=that.idx.rightId;
            m.rightGoal=that.idx.rightGoal;
            m.rightTeamBadge=that.idx.rightTeam.teamBadge;
            m.rightTeamName=that.idx.rightTeam.teamName;

            m.startDate=that.idx.startTime.substr(0,10);
            m.startTime=that.idx.startTime.substr(11,5);
            m.quarter=that.idx.quarter;
            m.quarterTime=that.idx.quarterTime;
            m.ifEnd=that.idx.ifEnd;
            // console.log(that.idx.matchId);
            that.matchList.push(m);
          }
        }
        that.timeList.sort();

        console.log("时间"+date.substr(5,5));
        that.showMatch(date.substr(5,5));
      });
    },
    getFormatDate(date) {
        // var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },
    showMatch(esingle){
      console.log("该天的比赛"+esingle);
      let that=this;
      that.timedate=esingle.substr(0,2)+'月'+esingle.substr(3,2)+'号的比赛';
      that.gameList=[];
      for(that.idx of that.matchList){
        if(that.idx.startDate.substr(5,5) === esingle){
          console.log('比赛'+that.idx.matchId);
          that.gameList.push(that.idx);
        }
      }
    },
    showLastWeek(){
      let that=this;
      that.weekDate.setDate(that.weekDate.getDate()-7);
      that.getWeekMatch(that.weekDate);
    },
    showNextWeek(){
      let that=this;
      that.weekDate.setDate(that.weekDate.getDate()+7);
      that.getWeekMatch(that.weekDate);
    },
  },
  created(){
    let that =this;
    this.getFormatDate(that.weekDate);
    this.getTodayMatch();
    this.getWeekMatch(that.weekDate);
  },
}
</script>

<style scoped>
.sidebar{
  float: left;
  width: 250px;
  margin-right:10px;
}
.dateClass{
  float:left;
  height:60px;
  width: 111px;
  padding: 5px 0px;
  margin: 1px 1px;
  border: 5px;
  border-color: black;
  background-color: #EBEEF5;
}
</style>
