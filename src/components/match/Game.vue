<template>
  <div style="float:left;border: 2px solid #cccccc; margin-bottom:3px;">
    <div class="game">
      <!-- 比赛时间 -->
      <div style="float:left;width:130px;" class="txt">
        {{match.startTime}}
      </div>

      <!-- 主场球队 -->
      <div style="float:left;">
        <!-- 分数,未开赛时用-表示 -->
        <div class="score" style="float:right;">
          <span v-if="match.quarter === ''">-</span>
          <span v-else>{{match.leftGoal}}</span>
        </div>
        <a href="https://nba.hupu.com/teams/celtics" target="_blank">
          <img style="float:right;position:relative;top:6px;" width="50" height="50" :src="match.leftTeamBadge">
          <div class="txt"><span style="float:right;">{{match.leftTeamName}}</span></div>
        </a>
      </div>


      <!-- 比赛性质介绍 -->
      <div class="describe">
        <div>{{match.matchDesc}}</div>
        <div v-if="match.ifEnd === '1'">已结束</div>
        <div v-else-if="match.quarter === ''">未开始</div>
        <div v-else><div style="color:red;">{{match.quarter}} {{match.quarterTime}}</div></div>
      </div>


      <!-- 客场球队 -->
      <div style="float:left;">
        <!-- 分数,未开赛时用-表示 -->
        <div class="score" style="float:left;">
          <span v-if="match.quarter === ''">-</span>
          <span v-else>{{match.rightGoal}}</span>
        </div>
        <a href="https://nba.hupu.com/teams/celtics" target="_blank">
          <img style="float:left;position:relative;top:6px;" width="50" height="50" :src="match.rightTeamBadge">
          <div class="txt" ><span style="float:left;">{{match.rightTeamName}}</span></div>
        </a>
      </div>

      <!-- 直播信息 -->
      <div style="float:left;">
        <a href="http://kbs.sports.qq.com/#nba" target="_blank" class="live">
          <span style="float:right;">腾讯体育</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      time:'08:30',
      homeTeam:'骑士',
      visitTeam:'勇士'
    }
  },
  props:['match']
}
</script>

<style>
.game{
  float:left;
  width:860px;
  height: 60px;
  margin: 10px;
  /*border-style: inherit;*/
}
.txt{
  /*display: inline;*/
  float: left;
  font-size: 28px;
  color: black;
  position: relative;
  top: 12px;
  width: 120px;
}
.score{
  /*float: left;*/
  display: inline;
  margin: 0 auto;
  font-size: 26px;
  color: black;
  position: relative;
  top: 14px;
  width: 70px;
  text-align: center;
}
.describe{
  float:left;
  position: relative;
  top: 8px;
  color: #8e8e8e;
  text-align: center;
  width:130px;
}
.live{
  float:left;
  font-size: 18px;
  color: black;
  position: relative;
  top: 15px;
  width: 100px;
}
</style>
