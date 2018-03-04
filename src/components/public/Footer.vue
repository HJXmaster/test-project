<template>
	<div id="topBlock">
		<div id="footer">
			<h5>地址：广东省广州市天河区华南农业大学华山区18栋308室</h5>
			<h6>YMbase 版权所有<span>© 2017 ymbase.com, All Rights Reserved</span> 粤
			    <span>ICP</span>备
			    <span>0000000</span>号
			    <span>-0</span>
			</h6>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#topBlock{
	width: 100%;
	margin:0;
	padding: 0;
  background-color:#545c64;
	/*background-color: black;*/
	opacity: 0.9;


}
#footer{
	width:1210px;
  margin: 0 auto;
	margin-top: 0px;
	padding: 20px;
	background-color: #545c64;
	text-align: center;
}
#footer h5,#footer h6{

	color: white;
	font-size: 16px;
	font-family: Apple LiSung Light;
	font-weight: normal;
	line-height: 30px;
	margin:0 auto;
}
</style>
