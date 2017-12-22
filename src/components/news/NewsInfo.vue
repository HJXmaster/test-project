<template>
  <div>
    <el-container>
      <el-header style="padding:0;">
        <myHeader></myHeader>
      </el-header>
      <el-main>
        <div style="margin:0 auto;width:1250px; ">
          <!--热点新闻-->
          <div>
            <hotSpotNews></hotSpotNews>
          </div>

          <!--新闻相关内容、评论-->
          <div style="margin:0 auto;width:700px; float:left; padding:0 10px;">
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
            <div style="margin:10px 0;">
              <center>
                <img :src="news.newsPic" :alt="news.title" style="margin:5 auto;max-width: 660px;">
              </center>
            </div>

            <!-- 新闻正文 -->
            <div class="artical-main-content" v-html="news.context">
            </div>

            <!--新闻评论-->
            <div>
              <el-container style="width:700px;">
                <el-main style="margin:25px 0px 10px -5px; padding:0px;">
                  <el-card>
                    <div>
                      <div style="margin:0 0 20px 0;">
                        <span style="font-Size:25px;margin-right:10px;">网友评论</span>
                        <span style="color:#C0C4CC">文明上网理性发言，请遵守新闻评论服务协议</span>
                      </div>
                      <div style="margin:5px auto;">
                        <div class="common-avatar"></div>
                        <div style="width:596px; float:left;">
                          <el-input
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 6}"
                            placeholder="请输入内容"
                            v-model="textarea3">
                          </el-input>
                        </div>
                        <div style="float:right;margin:5px 0;">
                          <el-button type="primary" @click="reviewNews('')" round>确认评论</el-button>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-main>
                <el-main style="margin:25px 0px 10px -5px; padding:0px;">
                  <el-card>
                    <div style=" width:100%;float:left;margin:0 0 20px 0;">
                      <div>
                        <span style="float:left;font-Size:22px;margin-right:10px;">全部评论</span>
                        <span style="float:left;margin-right:2px;position:relative;top:3px;">/</span>
                      </div>
                      <div style="float:left;border-bottom: 1px solid #cccccc; color:#379be9;position:relative;top:3px;">
                          我的评论
                      </div>
                      <div style="float:right;position:relative;top:3px;">
                        <el-radio-group v-model="radio" size="small" @change="getReply()">
                          <el-radio label="1" border>热评</el-radio>
                          <el-radio label="2" border>新评</el-radio>
                        </el-radio-group>
                      </div>
                    </div>
                    <div v-if="reviewList !=''">
                      <div v-for="esingle in reviewList">
                        <review :review="esingle"></review>
                      </div>

                      <!--查看更多评论-->
                      <div style="margin:20px 0px 0px 0px;">
                        <el-button @click="getMoreReply()" style="width:100%" type="info" plain>查看更多评论</el-button>
                      </div>
                    </div>
                    <div v-else>暂无评论，发表你的看法吧!!!</div>
                  </el-card>
                </el-main>
                <el-footer>
                </el-footer>
              </el-container>
            </div>
          </div>

          <!--热点新闻-->
          <div>
            <hotSpotNews></hotSpotNews>
          </div>

        </div>
      </el-main>

      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>
<script>
import axios from 'axios'
import myHeader from './../public/Header'
import review from './../review/Review'
import hotSpotNews from './HotSpotNews'
import config from './../../router/config'
import { Message } from 'element-ui'
import { Notification } from 'element-ui'
export default{
  components:{
    myHeader,
    hotSpotNews,
    review,
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
      reviewList:[],
      startOfReview:0,
      radio:'1',
      textarea3:'',
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
   },
   getNewsReplyByNewsId(){
     let that = this ;
     axios.get(that.rootURL+'/getNewsReplyByNewsId.do?newsId='+that.publishId+'&startOfReview='+that.startOfReview).then(function(res){
       var newsReply={};
       for(that.idx of res.data){
         newsReply=[];
         newsReply.username=that.idx.username;
         newsReply.context=that.idx.nrContext;
         newsReply.support=that.idx.nrSupport;
         newsReply.nrId=that.idx.nrId;
         newsReply.nrReplyId=that.idx.nrReplyId;
         newsReply.nrTime=that.idx.nrTime.substr(11,5);

         that.reviewList.push(newsReply);
       }
       that.startOfReview+=res.data.length;
       if(res.data.length==0){
         that.$message('没有更多评论了');
       }
     });
   },
   getHotNewsReplyByNewsId(){
     let that = this ;
     axios.get(that.rootURL+'/getHotNewsReplyByNewsId.do?newsId='+that.publishId+'&startOfReview='+that.startOfReview).then(function(res){
       var newsReply={};
       for(that.idx of res.data){
         newsReply=[];
         newsReply.username=that.idx.username;
         newsReply.context=that.idx.nrContext;
         newsReply.support=that.idx.nrSupport;
         newsReply.nrId=that.idx.nrId;
         newsReply.nrReplyId=that.idx.nrReplyId;
         newsReply.nrTime=that.idx.nrTime.substr(11,5);

         that.reviewList.push(newsReply);
       }
       that.startOfReview+=res.data.length;
       if(res.data.length==0){
         that.$message('没有更多评论了');
       }
     });
   },
   getReply(){
     let that=this;
     that.reviewList=[];
     that.startOfReview=0;
     if(that.radio=='1'){
       that.getHotNewsReplyByNewsId();
     }else{
       that.getNewsReplyByNewsId();
     }
   },
   getMoreReply(){
     let that=this;
     console.log("radio"+that.radio);
     if(that.radio=='1'){
       that.getHotNewsReplyByNewsId();
     }else{
       that.getNewsReplyByNewsId();
     }
   },
   reviewNews(nrId){
     let that =this;
     axios.get(that.rootURL+'/reviewNews.do?newsId='+that.publishId+'&nrContext='+that.textarea3+'&nrReplyId='+nrId).then(function(res){
       if(res.data.status==false){
         Notification.error({
                 title: '评论失败！',
                 message: res.data.msg,
                 offset: 65,
                 duration:2000
               });
       }else {
         Notification.success({
                 title: '评论成功！',
                 message: res.data.msg,
                 offset: 65,
                 duration:2000
               });
               that.textarea3='';
       }
     })
   }
 },
 created() {
   let that = this ;
   that.publishId= that.$route.params.publishId;
   console.log(that.$route.params.publishId);
   that.getNewsById();
   that.getHotNewsReplyByNewsId();
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
border-bottom: 1px solid #cccccc;
}
.artical-main-content img{
  margin:5 auto;
  width: 600px;
}
.common-avatar {
  display: block;
    float:left;
    width: 50px;
    height: 50px;
    font-size: 0;
    border-radius: 50%;
    background: url("./../../assets/head_icon.jpg") 0 0 no-repeat;

    margin: 0px 7px;
}
</style>
