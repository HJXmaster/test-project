<template>
  <div id="app">
    <el-container>
      <el-header style="padding:0;"><myHeader></myHeader></el-header>
      <el-main>Main</el-main>
      <el-footer style="padding:0;"><myFooter></myFooter></el-footer>
    </el-container>


  </div>
</template>

<script>
// import toolbar from './components/Toolbar'
import myHeader from './components/public/Header'
import axios from 'axios'
import config from './router/config'
import myFooter from './components/public/Footer'
export default {
  name: 'app',
  components:{
    myHeader,
    myFooter,
  }
}
</script>

<style>

</style>
