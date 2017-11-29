<template>
<div class="list_box">
  <div class="border_a">
    <div class="team_vs">
      <div class="team_vs_a" >
        <div class="team_vs_a_1 clearfix" >
          <div class="img">
            <a href="https://nba.hupu.com/teams/celtics" target="_blank">
              <img width="50" height="50" src="https://gdc.hupucdn.com/gdc/nba/team/logo/e59350a5bc97aa5c.png">
            </a>
          </div>
          <div class="txt">
            <span>
              <a href="https://nba.hupu.com/teams/celtics" target="_blank">凯尔特人</a>
            </span>
          </div>
        </div>
        <div class="team_vs_a_2 clearfix">
          <div class="img">
            <a href="https://nba.hupu.com/teams/cavaliers" target="_blank">
              <img width="50" height="50" src="https://gdc.hupucdn.com/gdc/nba/team/logo/CLE.png">
            </a>
          </div>
          <div class="txt">
            <span>
              <a href="https://nba.hupu.com/teams/cavaliers" target="_blank">骑士</a>
            </span>
          </div>
        </div>
      </div>
      <div class="team_vs_b">
        <span class="a"></span>
        <span class="b">
        未开始<p>08:00</p>
        </span>
      </div>
    </div>
    <p class="tips">
    <a href="https://goto.hupu.com/?a=goClick&amp;id=2845" target="_blank">凯尔特人vs骑士手机直播</a>
    </p>
    <div class="table_choose clearfix">
      <a class="d" href="https://nba.hupu.com/games/boxscore/153036" target="_self"><s></s>比赛前瞻</a>
      <span class="b_1"><s></s>文字直播</span>
      <a class="e" href="https://goto.hupu.com/?a=goClick&amp;id=3727" target="_blank"><s></s>视频直播</a>
    </div>
    <div class="table_data">
      <table class="itinerary_table itinerary_table-top ">
        <tbody>
          <tr class="title">
            <td width="50" class="left"></td>
              <td>一</td>
              <td>二</td>
              <td>三</td>
              <td>四</td>
            <td>总分</td>
          </tr>
          <tr>
            <th class="left">
              <a href="https://nba.hupu.com/teams/celtics" target="_blank">
              凯尔特人
              </a>
            </th>
            <td></td>
          </tr>
          <tr>
            <th class="left">
              <a href="https://nba.hupu.com/teams/cavaliers" target="_blank">
              骑士
              </a>
            </th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default{
  name: 'matchList',
  data () {
    return {

    }
  }

}

</script>
<style>
.list_box {
    width: 349px;
    height: 350px;
    margin-bottom: 7px;
    float: left;
    background-color: #f6f6f6;
    border: 1px #e7e7e7 solid;
}

.border_a{
    border: 1px #d1d1d1 solid;
    padding: 6px;
    height: 335px;
    overflow: hidden;
}
.team_vs {
    height: 127px;
    border: 1px #d6d6d6 solid;
}
.img{
    width: 50px;
    height: 50px;
    float: left;
}
.txt{
    float: left;
    width: 150px;
    font-size: 16px;
    font-weight: 700;
    margin: 15px 0 0 10px;
}

.team_vs_a {
    float: left;
    width: 227px;
    height: 127px;
    background-color: #fff;
}

.team_vs_a_1, .team_vs_a_2 {
    padding: 5px;
    border-bottom: 1px #f2f2f2 solid;
}

</style>
