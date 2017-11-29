<template>
  <div>
    <myHeader></myHeader>
    <div style="margin:0 auto;width:1100px; ">
    <div style="margin:0 auto;width:800px; float:left;">
      <!-- 新闻标题，信息 -->
      <div style="border-bottom: 1px solid #cccccc;">
        <div>
            <h2>
                {{news.title}}
            </h2>
        </div>
        <div style="margin:5px">
            <span class="other-left">
                <span>{{news.publishTime}}</span>
                 来自 {{news.publisher}}
            </span>
        </div>
      </div>

      <!-- 新闻配图 -->
      <div>
        <center>
          <img :src="news.newsPic" :alt="news.title" style="margin:5 auto;max-width: 660px;">
        </center>
      </div>

      <!-- 新闻正文 -->
      <div class="artical-main-content" v-html="news.context">
      </div>
    </div>
    <div>
      <hotSpotNews></hotSpotNews>
    </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
import myHeader from './../public/Header'
import hotSpotNews from './HotSpotNews'
import config from './../../router/config'
export default{
  components:{
    myHeader,
    hotSpotNews,
  },
  data(){
    return{
      rootURL: config.rootURL,
      publishId:'',
      news:{
        publishId:'',
        publishTime:'2017-10-31 19:17:00',
        publisher:'圣安东尼奥新闻快报',
        title:'阿德：伦纳德是主要角色，他回来后我会改变角色'
      },
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
   getNewsById(){
     let that = this ;

     axios.get(that.rootURL+'/getNewsById.do?newsId='+that.publishId).then(function(res){
         that.news={};
         that.news.publishId=res.data.newsId;
         that.news.publishTime=res.data.newsPublishTime;
         that.news.publisher=res.data.newsPublisher;
         that.news.title=res.data.newsTitle;
         that.news.newsPic=res.data.newsPic;
         that.news.context=res.data.newsContext;
     });
   }
 },
 created() {
   let that = this ;
   that.publishId= that.$route.params.publishId;
   console.log(that.$route.params.publishId);
   that.getNewsById();
   //that.hsytt();
 },
 // watch:{
 //   '$route':'hsytt'
 // }
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
.artical-main-content{
  color: #1a2939;
line-height: 24px;
font-size: 14px;
}

</style>
