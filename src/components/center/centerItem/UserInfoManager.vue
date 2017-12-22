<template>
  <div >
    <div style="width:400px;float:left;margin-left:40px;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户编号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="绑定手机">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img width="150px" height="150px" style="float:left;margin-left: 100px;" src="./../../../assets/head_icon.jpg"></img>
  </div>
</template>
<script>
import axios from 'axios'
import config from './../../../router/config'
export default{
  components:{

  },
  data(){
    return{
      rootURL: config.rootURL,
      form:{
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods:{
    onSubmit() {
        console.log('submit!');
      }
  },
  created(){
    let that =this;

  },
}
</script>

<style scoped>

</style>
