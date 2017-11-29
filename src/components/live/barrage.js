var isOpen=true;
var bgArr=[];//已存在的弹幕内容
var bgTime=15000;//15秒读取一次弹幕
var nTime=-1;
var getBarrageTime=null;
var liveNum=0;//直播时用来记录已发送过的弹幕的最新编号






// var cksarr=parseInt(ckstyle()['cpt_barrage'].split('|')[4])==1?isOpen=true:isOpen=false;
function loadedHandler(){
	if(!CKobject.getObjectById('ckplayer_a1').getType()){//只有在flash播放器情况下使用该监听
		console.log('只有在flash播放器情况下使用该监听');
//		CKobject.getObjectById('ckplayer_a1').addListener('barrageShow','barrageShowHandler');
		if(!isLive){//不是直播才需要来监听时间
			CKobject.getObjectById('ckplayer_a1').addListener('time','timeHandler');
		}
	}
//	CKobject.ajax('post','utf-8','http://localhost:8080/ymbase/getDm.do?path='+bgPath,function(data){
//		if(data){
//			console.log(data);
////			bgArr=data.ckplayer;
//
//			var obj=eval('(' + data + ')');
//			bgArr=obj['ckplayer'];
//			console.log(bgArr);
//		}
//	});
	if(isOpen){
		console.log('弹幕默认打开');
//		openOrclose(true);
	}
}
function barrageShowHandler(b){
	if(b){//如果是关闭的现在需要开启则开始调用弹幕
		openOrclose(true);
	}
	else{
		openOrclose(false);
	}
	isOpen=b;
}
function barrage(s){//写弹幕，写完同时把所有的读取出来
//	var nt=parseInt(nTime);
//	if(!nt)nt=0;
//	if(nt<0)nt=0;
//	CKobject.ajax('post','utf-8','http://localhost:8080/ymbase/getDm.do?path='+bgPath+'&s='+encodeURIComponent(s)+'&j='+nt,function(data){
//		if(data){
//			var obj=eval('(' + data + ')');
//			bgArr=obj['ckplayer'];
//		}
//		if(s && !isLive){
//			console.log('您刚刚发布的弹幕内容是：'+s);
//			CKobject.getObjectById('ckplayer_a1').loadBarrage('您刚刚发布的弹幕内容是：'+s);
//		}
//		console.log(bgArr[1]+' '+bgArr[1].length);
//		if(isLive && bgArr[1].length>0 && bgArr[1].length-1>liveNum){//如果是直播，则把所有最新的结果发送给播放器
//			if(liveNum>0){
//				for(var i=liveNum+1;i<bgArr[1].length;i++){
//					CKobject.getObjectById('ckplayer_a1').loadBarrage(bgArr[1][i]);
//				}
//			}
//			liveNum=bgArr[1].length-1;
//		}
//	});
	websocket.send(s);
}
function analysisBarrage(){
	barrage('');
}
function openOrclose(b){
	if(b){
		if(getBarrageTime){
			window.clearInterval(getBarrageTime);
			getBarrageTime=null;
		}
		barrage('');
		getBarrageTime=window.setInterval(analysisBarrage,bgTime);
	}
	else{
		if(getBarrageTime){
			window.clearInterval(getBarrageTime);
			getBarrageTime=null;
		}
	}
}
function timeHandler(t){
	if(isOpen && t>0 && nTime!=parseInt(t) && bgArr){
		nTime=parseInt(t);
		var j=bgArr[0];
		var s=bgArr[1];
		var nj=getNewArr(j,nTime);
		for(var i=0;i<nj.length;i++){
			CKobject.getObjectById('ckplayer_a1').loadBarrage(s[parseInt(nj[i])]);
		}
	}
}
function getNewArr(arr,value){
	var str = arr.toString();
	var index = str.indexOf(value);
	if(index >= 0){
		var reg1 = new RegExp("((^|,)"+value+"(,|$))","gi");
		str = str.replace(reg1,"$2@$3").replace(reg1,"$2@$3").replace(/[^,@]/g,"");
		if(str.match(/@/g).length>1){
			var newarr = [];
			for(var i=0; i<arr.length; i++){
				var n=str.indexOf('@');
				//alert(n+'+'+str);
				if(n>-1){
					newarr.push(n);
					str=str.replace('@','');
				}
				else{
					break;
				}
			}
			return newarr;
		} else {
			return [str.indexOf('@')];
		}
	}
	else{
		return [];
	}
}




var websocket=null;
var _top=80;
var index=0;
var host=window.location.host;
//判断当前浏览器是否支持WebSocket
if('WebSocket' in window){
websocket=new WebSocket("ws://"+"localhost:8080"+"/ymbase/websocket");
}
else{
alert("Not Support WebSocket!");
}


//连接发生错误的回调方法
websocket.onerror = function(){
    setMessageInnerHTML("error");
};

//连接成功建立的回调方法
websocket.onopen = function(event){
    setMessageInnerHTML("open");
}

//接收到消息的回调方法
websocket.onmessage = function(){
    setMessageInnerHTML(event.data);
}

//连接关闭的回调方法
websocket.onclose = function(){
    setMessageInnerHTML("close");
}


//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function(){
    websocket.close();
}


//将消息显示在网页上
function setMessageInnerHTML(innerHTML){
//$(".d_show").append("<div id='"+index+"'>"+ innerHTML + "</div>");
//launch();
	CKobject.getObjectById('ckplayer_a1').loadBarrage(innerHTML);
}


////发送消息
//function send(){
//    //var message = document.getElementById('text').value;
//    var message = $(".s_text").val();
//    $(".s_text").val("");
//    websocket.send(message);
//}
