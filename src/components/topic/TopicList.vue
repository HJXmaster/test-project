<template>
  <div>
    <el-container>

      <el-header style="padding:0;">
        <!-- 顶部导航栏 -->
        <myHeader></myHeader>
      </el-header>

      <el-main>
        <el-container style="margin-top:30px;">
          <el-aside width="200px" style="margin-left:100px;margin-right:30px;">
            <el-menu
            router
              default-active="1"
              style="height:100%;"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#DCDFE6"
              text-color=""
              active-text-color="black">

              <el-menu-item index="1" :route="{path:'/CenterIndex/UserInfoManager'}">NBA专区</el-menu-item>
              <el-menu-item index="2" :route="{path:'/CenterIndex/ReviewManager'}">CBA专区</el-menu-item>
              <el-menu-item index="3" :route="{path:'/CenterIndex/ReviewManager'}">足球专区</el-menu-item>
              <el-menu-item index="4" :route="{path:'/'}">街球专区</el-menu-item>
              <el-menu-item index="5" :route="{path:'/'}">更多</el-menu-item>

            </el-menu>
          </el-aside>

          <el-main style="padding:0;margin-right:100px; min-height:600px;">
            <el-card style="margin:0 auto;">
              <!-- <el-table
                :data="topicList"
                style="width: 100%"
                header-row-style="background-color:#E4E7ED;color:#303133;"
                @row-click="selectTopic">
                <el-table-column
                  prop="title"
                  width="385"
                  label="话题">
                </el-table-column>
                <el-table-column
                  prop="publisher"
                  label="作者/发布时间"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="replyAndLook"
                  label="回复/浏览"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="replyTime"
                  label="最后回复">
                </el-table-column>
              </el-table> -->
                <div v-for="esingle in topicList">
                  <router-link :to="'/TopicInfo/' + esingle.topicId" target="_blank">
                    <topic :topic="esingle"></topic>
                  </router-link>
                </div>
            </el-card>
          </el-main>
        </el-container>
      </el-main>
      <el-footer style="padding:0;">
        <myFooter></myFooter>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import topic from './Topic'
import axios from 'axios'
import config from './../../router/config'
import myHeader from './../public/Header'
import myFooter from './../public/Footer'
import hotSpotNews from './HotSpotTopic'
export default{
  components:{
    topic,
    myHeader,
    myFooter,
    hotSpotNews,
  },
  data(){
    return{
      rootURL: config.rootURL,
      activeIndex:0,
      topicList:[
        {
          publishId:123,
          publishTime:'2017-10-31 19:17:00',
          publisher:'圣安东尼奥新闻快报',
          title:'阿德：伦纳德是主要角色，他回来后我会改变角色',
          replyAndLook:'123/8796',
        },
        {
          publishId:124,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'坎特：我没有吸引前场篮板的磁场，就是靠直觉',
          replyAndLook:'42/954',
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods:{
    timeago(time){   //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
            var minute=1000*60;      //把分，时，天，周，半个月，一个月用毫秒表示
            var  hour=minute*60;
            var day=hour*24;
            var week=day*7;
            var halfamonth=day*15;
            var month=day*30;

            var  now=new Date().getTime();   //获取当前时间毫秒
            var dateTimeStamp = Date.parse(new Date(time));

            console.log('timeago时间戳：'+now);
            console.log('timeago时间戳：'+dateTimeStamp);
            var diffValue=now-dateTimeStamp;//时间差

            if(diffValue<0){return;}

            var  minC=diffValue/minute;  //计算时间差的分，时，天，周，月
            var  hourC=diffValue/hour;
            var  dayC=diffValue/day;
           var  weekC=diffValue/week;
            var  monthC=diffValue/month;
            var result;
            console.log(minC);
           if(monthC>=1){
             result=" "+parseInt(monthC)+"月前"
              }

         else  if(weekC>=1){
             result=" "+parseInt(weekC)+"周前"
              }
        else    if(dayC>=1){
             result=" "+parseInt(dayC)+"天前"
              }
       else    if(hourC>=1){
             result=" "+parseInt(hourC)+"小时前"
              }
       else    if(minC>=1){
             result=" "+parseInt(minC)+"分钟前"
              }
        else{
        result="刚刚";
        }
let that=this;
that.time=result;
     return result;
   },
    getTopicList(){
      let that = this ;
      axios.post(that.rootURL+'/getTopic.do').then(function(res){
        var topic={};
        that.topicList=[];
        for(that.idx of res.data){
          topic=[];
          topic.topicId=that.idx.topicId;
          topic.replyTime=that.idx.topicReplyTime;
          topic.publisher=that.idx.username
          topic.publishTime=that.timeago(that.idx.topicPublishTime);
          topic.title=that.idx.topicTitle;
          topic.readNum=that.idx.topicReadNum;
          topic.replyNum=that.idx.topicReplyNum;
          that.topicList.push(topic);
        }
      })
    },

  },
  created(){
    let that=this;
    that.getTopicList();
  }
}
</script>

<style scoped>
.sidebar{
  float: left;
  width: 250px;
  margin-right:10px;
}
.el-pager li {
    margin: 5px;
    padding: 10px;
}
</style>
