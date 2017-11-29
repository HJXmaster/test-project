<template>
  <div style="float:left;">

    <div class="hotspot">24小时新闻排行榜</div>
    <div style="margin:0 auto;width:300px;">
      <div v-for="esingle in newsList">
        <!-- 新闻标题 -->
        <div>
          <span style="width:50px;font-weight: 700;font-style: italic; float:inline; color:#ad0007">{{esingle.num}}</span>
          <span style="float:inherit; color:gray;">{{esingle.title}}</span>
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
          publishTime:'2017-10-31 19:17:00',
          publisher:'圣安东尼奥新闻快报',
          title:'阿德：伦纳德是主要角色，他回来后我会改变角色'
        },
        {
          num: 2,
          publishTime:'2017-10-31 19:30:00',
          publisher:'纽约邮报',
          title:'坎特：我没有吸引前场篮板的磁场，就是靠直觉'
        }
      ]
    }
  }
}
</script>

<style>
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
