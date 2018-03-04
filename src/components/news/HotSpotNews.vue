<template>
  <div style="float:left;">

    <div class="hotspot">24小时新闻排行榜</div>
    <div style="margin:0 auto;width:250px;">
      <div v-for="esingle in newsList">
        <!-- 新闻标题 -->
        <div style="padding:3px 0;">
          <router-link :to="'/NewsInfo/' + esingle.publishId" target="_blank" style="text-decoration:none">
            <div v-if="esingle.num <4">
              <span style="width:50px;font-weight: 700;font-style: italic; float:inline; color:#ad0007">{{esingle.num}}</span>
              <span style="float:inherit; color:gray;">{{esingle.title}}</span>
            </div>
            <div v-else>
              <span style="width:50px;font-weight: 700;font-style: italic; float:inline; color:#545454">{{esingle.num}}</span>
              <span style="float:inherit; color:gray;">{{esingle.title}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      activeIndex:0,
      newsList:[
        {
          num: 1,
          publishId:2229318,
          publishTime:'2017-10-31 19:17:00',
          publisher:'圣安东尼奥新闻快报',
          title:'阿德：伦纳德是主要角色，他回来后我会改变角色'
        },
        {
          publishId:2229318,
          num: 2,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'坎特：我没有吸引前场篮板的磁场，就是靠直觉'
        },
        {
          publishId:2229318,
          num: 3,
          publishTime:'2017-11-31 19:30:00',
          publisher:'纽约邮报',
          title:'阿德托昆博比赛期间和球队助教发生争执'
        },
        {
          publishId:2229318,
          num: 4,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'NBA官方评出今日最佳数据：哈登37+10当选'
        },
        {
          publishId:2229318,
          num: 5,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'保罗火箭生涯前5场共送出51助攻，队史第一人'
        },
        {
          publishId:2229318,
          num: 6,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'骑士会考虑用特里斯坦-汤普森换小乔丹？'
        },
        {
          publishId:2229318,
          num: 7,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'泰伦-卢：希望罗斯一切都好，希望他归队'
        },
        {
          publishId:2229318,
          num: 8,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'詹姆斯27+16+13收获赛季个人第2次三双'
        },
        {
          publishId:2229318,
          num: 9,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'勇士全场比赛得到143分创球队赛季新高'
        },
        {
          publishId:2229318,
          num: 10,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'会玩！工作人员在世界杯预选赛上演花式擦地'
        },
        {
          publishId:2229318,
          num: 11,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'雷吉-杰克逊强调：对阵雷霆只是又一场比赛'
        },
        {
          publishId:2229318,
          num: 12,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'阿杜因脚踝伤势将缺席今日对公牛比赛，格林轮休'
        },
        {
          publishId:2229318,
          num: 13,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'阿德托昆博晒灿烂微笑图：你们微笑，我也微笑'
        },
        {
          publishId:2229318,
          num:14,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'韦德转推骑士最近几个赛季的替补得分对比'
        },
        {
          publishId:2229526,
          num: 15,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'泰伦-卢：我不想使用超过10人的轮转阵容'
        },
      ]
    }
  }
}
</script>

<style scoped>
.sidebar{
  float: left;
  width: 250px;
  margin-right:10px;
}
.hotspot{
  border-bottom: 1px solid #cccccc;
  font-size: 20px;

}
</style>
