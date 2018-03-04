<template>
  <div>
    <div style="font-size:20px; font-weight:bold; padding:5px 10px; border-bottom: 1px solid #cccccc; margin:0px 0px 10px 0px;">排行榜</div>
    <el-tabs type="border-card" style="width:300px; ">
  <el-tab-pane>
    <span slot="label"><center><div style="width:110px; color:#006BB7; font-weight:bold; ">东部排名</div></center></span>
      <el-table
          :data="eastData"
          style="width: 300px;height:650px;overflow:hidden;"
          width="300px"
          height="650px"
          align="center"
          cell-class-name="tablecell"
          :row-style="tableRowClassName">
            <el-table-column
              prop="rank"
              label="排名"
              width="40"
              class-name="eastStyle"
              align="center">
            </el-table-column>
            <el-table-column
              prop="team"
              label="球队"
              align="center"
              width="100"
              class-name="teamStyle"
              label-class-name="ts">
            </el-table-column>
            <el-table-column
              prop="win"
              label="胜"
              align="center"
              width="45">
            </el-table-column>
            <el-table-column
              prop="fail"
              label="败"
              align="center"
              width="45">
            </el-table-column>
            <el-table-column
              prop="rate"
              label="胜率"
              align="center"
              width="60">
            </el-table-column>
      </el-table>
    </el-tab-pane>

    <el-tab-pane>
      <span slot="label"><center><div style="width:110px; color:#D33556; font-weight:bold">西部排名</div></center></span>
      <el-table
          :data="westData"
          style="width: 300px;height:650px;overflow:hidden;"
          width="300px"
          height="650px"
          align="center">
            <el-table-column
              prop="rank"
              label="排名"
              width="40"
              class-name="westStyle"
              align="center">
            </el-table-column>
            <el-table-column
              prop="team"
              label="球队"
              align="center"
              width="100"
              class-name="teamStyle"
              label-class-name="ts">
            </el-table-column>
            <el-table-column
              prop="win"
              label="胜"
              align="center"
              width="45">
            </el-table-column>
            <el-table-column
              prop="fail"
              label="败"
              align="center"
              width="45">
            </el-table-column>
            <el-table-column
              prop="rate"
              label="胜率"
              align="center"
              width="60">
            </el-table-column>
      </el-table>
      </el-tab-pane>
      </el-tabs>
  </div>

</template>

<script>
import axios from 'axios'
import config from './../../router/config'
  export default {
    data() {
      return {
        rootURL:config.rootURL,
        eastData:[
          {
            rank:'01',
            team:'凯尔特人',
            win:24,
            fail:4,
            rate:'79%'
          },
          {
            rank:'02',
            team:'骑士',
            win:20,
            fail:8,
            rate:'79%'
          },
          {
            rank:'03',
            team:'猛龙',
            win:18,
            fail:8,
            rate:'79%'
          },
          {
            rank:'04',
            team:'步行者',
            win:17,
            fail:9,
            rate:'79%'
          },
          {
            rank:'05',
            team:'凯尔特人',
            win:24,
            fail:4,
            rate:'79%'
          },
          {
            rank:'06',
            team:'骑士',
            win:20,
            fail:8,
            rate:'79%'
          },
          {
            rank:'07',
            team:'猛龙',
            win:18,
            fail:8,
            rate:'79%'
          },
          {
            rank:'08',
            team:'步行者',
            win:17,
            fail:9,
            rate:'79%'
          },
          {
            rank:'09',
            team:'凯尔特人',
            win:24,
            fail:4,
            rate:'79%'
          },
          {
            rank:'10',
            team:'骑士',
            win:20,
            fail:8,
            rate:'79%'
          },
          {
            rank:'11',
            team:'猛龙',
            win:18,
            fail:8,
            rate:'79%'
          },
          {
            rank:'12',
            team:'步行者',
            win:17,
            fail:9,
            rate:'79%'
          },
          {
            rank:'13',
            team:'凯尔特人',
            win:24,
            fail:4,
            rate:'79%'
          },
          {
            rank:'14',
            team:'骑士',
            win:20,
            fail:8,
            rate:'79%'
          },
          {
            rank:'15',
            team:'猛龙',
            win:18,
            fail:8,
            rate:'79%'
          },
        ],
        westData:[
          {
            rank:'01',
            team:'火箭',
            win:24,
            fail:4,
            rate:'79%'
          },
          {
            rank:'02',
            team:'勇士',
            win:20,
            fail:8,
            rate:'79%'
          },
          {
            rank:'03',
            team:'马刺',
            win:18,
            fail:8,
            rate:'79%'
          },
          {
            rank:'04',
            team:'森林狼',
            win:17,
            fail:9,
            rate:'79%'
          },
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      tableRowClassName (row, rowIndex) {
        // console.log('index的值'+rowIndex);
      if (rowIndex>=8 ) {
        return 'info-row'
      } else {
        return 'eastStyle'
      }
    }
  },
  created(){
    let that=this;
    axios.get(that.rootURL+'/getRankingList.do').then(function(res){
      that.eastData=[];
      that.westData=[];
      var team={};
      var i=1;
      for(that.idx of res.data.east){
        team=[];
        team.rank=''+i++;
        team.team=that.idx.teamName;
        team.win=that.idx.win;
        team.fail=that.idx.fail;
        if(that.idx.fail=='0')team.rate='100%';
        else {
          team.rate=that.idx.win/(that.idx.win+that.idx.fail)*100;
          team.rate=team.rate.toFixed(2)+'%';
        }
        that.eastData.push(team);
      }
      i=1;
      for(that.idx of res.data.west){
        team=[];
        team.rank=''+i++;
        team.team=that.idx.teamName;
        team.win=that.idx.win;
        team.fail=that.idx.fail;
        if(that.idx.fail=='0')team.rate='100%';
        else {
          team.rate=that.idx.win/(that.idx.win+that.idx.fail)*100;
          team.rate=team.rate.toFixed(2)+'%';
        }
        that.westData.push(team);
      }
    });
  }
  }
</script>

<style scope>
.el-table .cell{
  padding: 0px 0px;
}
.tablecell{
  padding: 0px 0px;
}
.el-tabs--border-card>.el-tabs__content{
  padding: 0px;
}

.el-table td{
  padding: 8px 0;
}
.eastStyle{
  padding: 4px 2px;
  background-color: #006BB7;
  color: white;
}
.info-row{
  padding: 4px 2px;
  background-color: white;
  color: black;
}
.westStyle{
  padding: 4px 2px;
  background-color: #D33556;
  color: white;
}
</style>
