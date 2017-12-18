<template>
  <div id="app">
    <el-container>
      <el-header style="padding:0 0;">
        <!--头部菜单-->
        <div >
          <myHeader></myHeader>
        </div>
      </el-header>
      <el-main>
    <div style="margin:40px auto;width:1200px;">
      <!--走马灯-->
      <div style="margin:20px auto;">
        <el-carousel :interval="4000" type="card" height="360px" width="680px">
          <el-carousel-item v-for="(item,key) in pics" :key="item">
            <img :src="item.pic" height="360px" width="554px" style="border-radius:8px"/>
            <span>{{ item.title }}</span>
          </el-carousel-item>
        </el-carousel>
      </div>


      <!--今日热门比赛-->
      <div style="margin:20px 0px;">
        <el-card>
          <div style="width:100%;float:left;">
            <div style="float:left;font-size:21px; font-weight:bold;">今日热门比赛</div>
            <router-link to="/GameList" class="router-link">
            <div style="float:right;border-bottom: 1px solid #cccccc; color:#379be9;">
                查看完整赛程
                <i class="el-icon-d-arrow-right" style="float:right;position:relative;top:4px; left:-5px;"></i>
                <i class="el-icon-d-arrow-right" style="float:right;position:relative;top:4px;"></i>
            </div>
            </router-link>
          </div>
          <div v-for="match in gameList">
            <el-card style="width:250px;float:left; margin:10px 10px;">
              <div v-if="match.ifEnd === '1'">
                <table>
                  <tr>
                    <td>已结束</td><td></td>
                  </tr>
                  <tr>
                    <td class="teamNmae">{{match.leftTeamName}}</td><td> {{match.leftGoal}}</td>
                  </tr>
                  <tr>
                    <td class="teamNmae">{{match.rightTeamName}}</td><td> {{match.rightGoal}}</td>
                  </tr>
                </table>
              </div>

              <div v-else-if="match.quarter === ''">
                <table>
                  <tr>
                    <td>未开始</td><td> 视频直播</td>
                  </tr>
                  <tr>
                    <td class="teamNmae">{{match.leftTeamName}}</td><td> {{match.startDate}}</td>
                  </tr>
                  <tr>
                    <td class="teamNmae">{{match.rightTeamName}}</td><td> {{match.startTime}}</td>
                  </tr>
                </table>
              </div>

              <div v-else>
                <table>
                  <tr style="color:red;">
                    <td>{{match.quarter}}</td><td> {{match.quarterTime}}</td>
                  </tr>
                  <tr>
                    <td class="teamNmae">{{match.leftTeamName}}</td><td> {{match.leftGoal}}</td>
                  </tr>
                  <tr>
                    <td class="teamNmae">{{match.rightTeamName}}</td><td> {{match.rightGoal}}</td>
                  </tr>
                </table>
              </div>


            </el-card>
          </div>
        </el-card>
      </div>

      <!-- 侧边战绩排行榜 -->
      <el-card style="float:left;">
        <rankingList></rankingList>
      </el-card>
    </div>
  </el-main>
  <el-footer>
<!--尾部信息-->
    <div >
      <myFooter></myFooter>
    </div>
  </el-footer>
  </el-container>
  </div>
</template>

<script>
import axios from 'axios'
import config from './../router/config'
import myHeader from './public/Header'
import myFooter from './public/Footer'
import rankingList from './public/RankingList'
export default {
  name: 'app',
  components:{
    myHeader,
    rankingList,
    myFooter,
  },
  data(){
    return{
      rootURL:config.rootURL,
      pics: [
		  	 {
           pic:require('./../assets/img/index0.jpg'),
           title:'詹姆斯带队胜湖人'
         },
         {
           pic:require('./../assets/img/index1.png'),
           title:'紫金科比球衣退役'
         },
         {
           pic:require('./../assets/img/index2.jpg'),
           title:'詹姆斯带队胜湖人'
         },
         {
           pic:require('./../assets/img/index3.jpg'),
           title:'伦纳德付出，德州双雄火拼'
         }
      ],
      gameList:[],
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

          match.startDate=that.idx.startTime.substr(5,5);
          match.startTime=that.idx.startTime.substr(11,5);
          match.quarter=that.idx.quarter;
          match.quarterTime=that.idx.quarterTime;
          match.ifEnd=that.idx.ifEnd;

          that.gameList.push(match);
        }
      })
    },
  },
  created(){
    let that =this;
    this.getTodayMatch();
  },
}
</script>

<style>
.el-carousel__item span {
  background: rgba(16,16,16,0.8);
  /*opacity: 0.8;*/
  color: white;
  position: absolute;
  left: 0px;
  top: 324px;
  font-size: 20px;
  min-width:543px;
  border-radius:0 0 8px 8px;
  padding: 5px 5px;
}
.teamNmae{
  width: 130px;
}
.router-link{
  text-decoration: none;
  color: black;
}
</style>
