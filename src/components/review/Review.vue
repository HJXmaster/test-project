<template>
  <div style="border-bottom: 1px solid #cccccc;padding:10px 0;">
    <div class="common-avatar"></div>
    <div style="display:block;float:none;margin:0px 0px 0px 68px;">
      <div style="padding:0px 0px 5px 0px;">
        <span style="font-size:16px;color:#409EFF;font-weight:bold;">{{review.username}}</span>
        <span style="color:#C0C4CC;font-size:13px;">{{review.nrTime}}</span>
      </div>

      <div style="color:#303133;">
        {{review.context}}
      </div>
      <el-card  v-if="replyList !=''" style="margin:10px 0 10px 0px ;  background-color:#f7f7f7;">

        <div v-for="esingle in replyList" style="border-bottom: 1px solid #cccccc;padding:2px 0;">
          <!-- <div class="common-avatar"></div> -->
          <div style="display:block;float:none;margin:0px 0px 0px 0px;">
            <span style="font-size:15px;padding:0px 0px 5px 0px;font-weight:bold;">{{esingle.username}} :</span>

            <span style="color:#4b4b4b;">
              {{esingle.context}}
            </span>
            <div style="margin:7px 0 0 0;">
              <img width="20px" src="./../../assets/support.png"/> <span style="position:relative;top:-2px; color:#909399">赞 {{esingle.support}}</span>
              <div style="display:inline;">
                <el-button type="text" style="padding:0 0;" @click="reply1(esingle)">
                  <img width="20px" src="./../../assets/response.png" style="margin:0px 0px 0px 15px;position:relative;top:1px;"/>
                  <span style="position:relative;top:-2px; color:#909399">回复</span>
                </el-button>
                <span style="color:#C0C4CC;font-size:13px;position:relative;top:-2px;">{{esingle.nrTime}}</span>
              </div>
            </div>
            <div style="margin:5px auto;width:100%;" :class="{'show': esingle.replyOrNot}">
              <el-input
                type="textarea"
                :autosize="{ minRows: 1, maxRows: 6}"
                placeholder="请输入内容"
                v-model="textarea3"
                style="display:inline;">
              </el-input>
              <el-button type="primary" style="width:10%;position:relative;left:90%;margin:3px 0 0 0;padding:9px;">回复</el-button>
            </div>
          </div>
        </div>
        <!--查看更多评论-->
        <div style="margin:5px 0px 0px 0px;">
          <el-button @click="getNewsReplyByReplyId(review.nrId)" style="width:100%" type="info" plain>查看更多回复</el-button>
        </div>

      </el-card>

      <div style="margin:7px 0 0 0;">
        <img width="20px" src="./../../assets/support.png"/> <span style="position:relative;top:-2px; color:#909399">赞 {{review.support}}</span>
        <div style="display:inline;">
          <el-button type="text" style="padding:0 0;" @click="reply()">
            <img width="20px" src="./../../assets/response.png" style="margin:0px 0px 0px 15px;position:relative;top:1px;"/>
            <span style="position:relative;top:-2px; color:#909399">回复</span>
          </el-button>
        </div>
      </div>


      <div style="margin:5px auto;width:100%;" :class="{'show': replyOrNot}">
        <el-input
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 6}"
          placeholder="请输入内容"
          v-model="textarea3"
          style="display:inline;">
        </el-input>
        <el-button type="primary" style="width:10%;position:relative;left:90%;margin:3px 0 0 0;padding:9px;">回复</el-button>
      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from './../../router/config'
import { Message } from 'element-ui';

export default {
  component:{

  },
  data(){
    return{
      rootURL:config.rootURL,
      username:'三旬老汉',
      context:'老詹30000分倒计时！ 《得分》29630+20=29650分，距离3W分还差350分！ 《篮板》7959+12=7971，历史69！离68“哈弗里切克”8007还差36个！《助攻》7735+15=7750个，历史12！离11的“斯特里克兰”7987还差237个！ 连续三场外加背靠背三双，真乃神人也！',
      support:266,
      replyList:[],
      startOfReply:0,
      replyOrNot:true,
    }
  },
  props:['review'],
  methods:{
    getNewsReplyByReplyId(nrId){
      let that=this;
      axios.get(that.rootURL+'/getNewsReplyByReplyId.do?nrReplyId='+nrId+'&startOfReply='+that.startOfReply).then(function(res){
        var newsReply={};
        for(that.idx of res.data){
          newsReply=[];
          newsReply.username=that.idx.username;
          newsReply.context=that.idx.nrContext;
          newsReply.support=that.idx.nrSupport;
          newsReply.nrId=that.idx.nrId;
          newsReply.nrReplyId=that.idx.nrReplyId;
          newsReply.nrTime=that.idx.nrTime.substr(11,5);
          newsReply.replyOrNot=true;

          that.replyList.push(newsReply);
        }
        that.startOfReply+=res.data.length;
        if(that.startOfReply!=0 && res.data.length==0){
          that.$message('没有更多回复了');
        }
      });
    },
    reply(){
      let that=this;
      if(that.replyOrNot==true)that.replyOrNot=false;
      else that.replyOrNot=true;
    },
    reply1(esingle){
      let that=this;
      that.replyList.forEach(reply=>{
        if(reply.nrId== esingle.nrId){
          if(reply.replyOrNot==true)reply.replyOrNot=false;
          else reply.replyOrNot=true;
        }
      })
      that.replyList.push();

    },
  },
  created(){
    let that = this ;
    that.getNewsReplyByReplyId(that.review.nrId);
  },
}
</script>

<style>
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
.support {
    background: url("./../../assets/support.png");
}
.show{
    display:none;
}
</style>
