<template>
  <div>
    <el-dialog
  title="请登录"
  :visible.sync="dialogVisible"
  width="25%"
  >
  <center>
    <div style="width:280px;">
      <span style="font-size:18px;">账号密码登录</span>
      <el-input placeholder="支持账号/手机号登录" style="margin:10px 0;"></el-input>
      <el-input placeholder="密码" style="margin:10px 0;" type="password"></el-input>
      <el-button type="success" style="width:100%;" @click="dialogVisible = false">登录</el-button>
    </div>
  </center>

  <span slot="footer" class="dialog-footer">

    <el-button type="text">忘了密码？</el-button>
    <span style="color:gray;"> | </span>
    <el-button type="text">注册新账号</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible:true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
