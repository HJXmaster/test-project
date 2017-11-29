<template>
  <div style="padding:10px 0;">
    <el-button-group>
      <el-button type="primary" icon="arrow-left" style="height:60px;"></el-button>

        <div style="float:left;height:60px;" v-for="esingle in timeList">
          <el-button :plain="true" type="success" class="dateClass">{{esingle}}</el-button>
        </div>

      <el-button type="primary" style="height:60px;"><i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>


  </div>
</template>
<script>
export default{
  data(){
    return{
      timeList:[
        '10-01',
        '10-02',
        '10-03',
        '10-04',
        '10-05',
        '10-06',
        '10-07'
      ]
    }
  }
}
</script>
<style>
.dateClass{
  float:left;
  height:60px;
  width: 102px;
  padding: 0 10px;
  margin: 0 5px;
  border: 1px;
}
</style>
