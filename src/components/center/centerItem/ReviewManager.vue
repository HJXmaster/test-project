<template>
  <div>
    <div v-for="esingle in reviewList">
      <el-card style="width:100%;margin:10px auto;">
        <div style="color:gray;">
          <span>{{esingle.nrTime}}</span>
          <span style="margin-left:50px;">赞({{esingle.support}})</span>
        </div>
        <div>
          {{esingle.context}}
        </div>
        <div>
          来自：<el-button type="text">{{esingle.title}}</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import config from './../../../router/config'
import { Message } from 'element-ui'
export default{
  components:{

  },
  data(){
    return{
      rootURL: config.rootURL,
      reviewList:[

      ],
      startOfReview:0,
    }
  },
  methods:{
    getMyReviews(){
      let that = this ;
      // that.reviewList=[];
      axios.post(that.rootURL+'/getMyReviews.do').then(function(res){
        var newsReply={};
        for(that.idx of res.data.review){
          newsReply=[];
          newsReply.username=that.idx.username;
          newsReply.context=that.idx.nrContext;
          newsReply.support=that.idx.nrSupport;
          newsReply.nrId=that.idx.nrId;
          newsReply.nrReplyId=that.idx.nrReplyId;
          newsReply.nrTime=that.idx.nrTime;
          newsReply.title=that.idx.title;

          that.reviewList.push(newsReply);
        }
        that.startOfReview+=res.data.length;
        if(res.data.status==false){
          that.$message('没有更多评论了');
        }
      })
    }
  },
  created(){
    let that =this;
    that.getMyReviews();
  },
}
</script>

<style scoped>

</style>
