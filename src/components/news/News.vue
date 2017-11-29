<template>
  <div style="float:left;border: 2px solid #cccccc; margin-bottom:3px;">
    <div class="news">
      <!-- 新闻标题 -->
      <div class="list-hd">
          <h3>
              {{news.title}}
          </h3>
      </div>
      <div class="otherInfo">
          <span class="other-left">
              <span :onload="timeago(news.publishTime)">{{time}}</span>
               来自 {{news.publisher}}
          </span>
      </div>
  </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      time:'2017-10-31 17:17:00',
      homeTeam:'骑士',
      visitTeam:'勇士'
    }
  },
  props:['news'],
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
 },
}
</script>

<style>
.news{
  float:left;
  width:740px;
  height: 90px;
  margin: 5px;
  /*border-style: inherit;*/
}
.other-left{
  color: gray;
}
</style>
