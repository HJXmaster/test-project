<template>
  <div >
    <div style="width:400px;float:left;margin-left:40px;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户编号">
          <el-input v-model="form.uid"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称">
          <el-input v-model="form.unickname"></el-input>
        </el-form-item>
        <el-form-item label="绑定手机">
          <el-input v-model="form.uphone"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱">
          <el-input v-model="form.uemail"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.uidcard"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="form.uname"></el-input>
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
import { Message } from 'element-ui'
export default{
  components:{

  },
  data(){
    return{
      rootURL: config.rootURL,
      form:{
        uid:'188192593570',
        unickname:'大师',
        uphone:'18819259357',
        uemail:'fds_dfg@fg.com',
        uidcard:'5146815325564222',
        uname:'铁柱',
      }
    }
  },
  methods:{
    onSubmit() {
        console.log('submit!');
      },
      getUserInfo(){
        let that=this;

        axios.get(that.rootURL+'/getUserInfo.do?').then(function(res){
          that.form={};
          if(res.data.status===true){
            that.form.uid=res.data.user.uid;
            that.form.unickname=res.data.user.unickname;
            that.form.uphone=res.data.user.uphone;
            that.form.uemail=res.data.user.uemail;
            that.form.uidcard=res.data.user.uidcard;
            that.form.uname=res.data.user.uname;
          }else {
            that.$message('请先登录');
          }
        });
      },
  },
  created(){
    let that =this;
    that.getUserInfo();
  },
}
</script>

<style scoped>

</style>
