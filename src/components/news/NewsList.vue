<template>
  <div>
    <el-container>

      <el-header style="padding:0;">
        <!-- 顶部导航栏 -->
        <myHeader></myHeader>
      </el-header>

      <el-main>

        <div style="margin:0 auto;width:1150px;">
          <div style="float:left;margin:0 auto;width:850px;">
            <el-container style="float:left;margin:0 auto;width:820px;">
              <el-header>
                <div><h2>体育新闻</h2></div>
              </el-header>
              <el-main style="">
                <!-- 新闻列表 -->
                <div v-for="esingle in newsList">
                  <router-link :to="'/NewsInfo/' + esingle.publishId" target="_blank"><news :news="esingle"></news></router-link>
                </div>
              </el-main>
              <el-footer style="margin:0 auto;">
                  <!--分页-->
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    page-size="20"
                    :total="100">
                  </el-pagination>
              </el-footer>
            </el-container>
          </div>
          <div style="float:right;">
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
import news from './News'
import axios from 'axios'
import config from './../../router/config'
import myHeader from './../public/Header'
import hotSpotNews from './HotSpotNews'
export default{
  components:{
    news,
    myHeader,
    hotSpotNews,
  },
  data(){
    return{
      rootURL: config.rootURL,
      activeIndex:0,
      newsList:[
        {
          publishId:123,
          publishTime:'2017-10-31 19:17:00',
          publisher:'圣安东尼奥新闻快报',
          title:'阿德：伦纳德是主要角色，他回来后我会改变角色',
          pic:''
        },
        {
          publishId:124,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'坎特：我没有吸引前场篮板的磁场，就是靠直觉'
        }
      ]
    }
  },
  methods:{
    getNewsList(){
      let that = this ;
      axios.post(that.rootURL+'/getNews.do').then(function(res){
        var news={};
        that.newsList=[];
        for(that.idx of res.data){
          news=[];
          news.publishId=that.idx.newsId;
          news.publishTime=that.idx.newsPublishTime;
          news.publisher=that.idx.newsPublisher;
          news.title=that.idx.newsTitle;
          news.newsPic=that.idx.newsPic;
          news.newsReadNum=that.idx.newsReadNum;
          that.newsList.push(news);
        }
      })
    },
  },
  created(){
    let that=this;
    that.getNewsList();
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
