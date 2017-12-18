<template>
  <div style="border-bottom: 1px solid #cccccc;padding:10px 0;">
    <div class="common-avatar"></div>
    <div style="display:block;float:none;margin:5px 0px 0px 68px;">
      <div style="font-size:15px;color:#409EFF;padding:0px 0px 5px 0px;font-weight:bold;">{{review.username}}</div>
      <div style="color:#303133;">
        {{review.context}}
      </div>
      <div style="margin:7px 0 0 0;">
        <img width="20px" src="./../../assets/support.png"/> <span style="position:relative;top:-2px; color:#909399">赞 {{review.support}}</span>
        <div style="display:inline;">
          <img width="20px" src="./../../assets/response.png" style="margin:0px 0px 0px 15px;position:relative;top:1px;"/>
          <span style="position:relative;top:-2px; color:#909399">回复</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'三旬老汉',
      context:'老詹30000分倒计时！ 《得分》29630+20=29650分，距离3W分还差350分！ 《篮板》7959+12=7971，历史69！离68“哈弗里切克”8007还差36个！《助攻》7735+15=7750个，历史12！离11的“斯特里克兰”7987还差237个！ 连续三场外加背靠背三双，真乃神人也！',
      support:266
    }
  },
  props:['review'],
  methods:{}
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

</style>
