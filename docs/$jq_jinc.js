var oc=function(n){if(!n)return{};var t=function(){};return t.prototype=n,new t};Object.create=Object.create||oc;Date.prototype.toNowTime=function(){var r=this.getFullYear(),i=this.getMonth()+1,n,t;return i<10&&(i="0"+i),n=this.getDate(),n<10&&(n="0"+n),t=this.getHours(),t<10&&(t="0"+t),""+r+""+i+""+n+""+t};Date.prototype.toLocaleString=function(){return[this.getFullYear(),("0"+(this.getMonth()+1)).slice(-2),("0"+this.getDate()).slice(-2),].join("")+("0"+this.getHours()).slice(-2)+("0"+this.getMinutes()).slice(-2)};$it={$id:function(n){return document.getElementById(n)},$class:function(n){return document.getElementsByClassName(n)},$TagName:function(n){return document.getElementsByTagName(n)},$Name:function(n){return document.getElementsByName(n)},$cText:function(n){return document.createTextNode(n)},$ce:function(n){return document.createElement(n)},$rm:function(n){n.parentNode.removeChild(n)},$Replace:function(n,t){t.parentNode.replaceChild(n,t)},$Before:function(n,t){t.parentNode.insertBefore(n,t)},$qa:function(n){return document.querySelectorAll(n)},$q:function(n){return document.querySelector(n)},$input:function(n,t,i){var r=this.$ce("input");return r.type=n,r.value=t,r.title=i,r.onfocus=function(){this.blur()},r},$origin:$origin=function(){var o=function(){var i={},r,t,n;if(1<window.location.search.length)for(r=window.location.search.substring(1),t=r.split("&"),n=0;n<t.length;n++){var u=t[n].split("="),f=u[0],e=u[1];i[f]=e}return i}(),r="https://ea-site.github.io/earthark/",s="0"+Math.floor((new Date).getMinutes()/10),t=location.search.length?location.search:"?v="+(new Date).toNowTime()+s,h=o.t===""?"@":"$",u='<script type="text/javascript" src="',f='"><\/script>',n,i,e;return/\/(mbb|mb2)\/u\/[a-z]+(\/.*)$/i.test(location.pathname)?(n=r+h,i=/(\/nt.*|\/se.*)/i.test(RegExp.$2)?new RegExp(RegExp.$1,"i"):i=/\/\d+\/.*$/i):(n="",i=/writ.+$/i),e=i.test(location.pathname)?"jq_newcheck.js":"jq_newcount.js",document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"><\/script>'),document.write(u+n+e+t+f),document.write(u+n+"jq_birthday.js"+t+f),document.write(u+n+"jq_addition.js"+t+f),{jsnow:e,update:t,query:o,base:r,host:/\/(mbb|mb2)\/u\/[a-z]+\/.*/i.test(location.pathname),path:/\/(mbb|mb2)\/u\/[a-z]+\/.*/i.test(location.pathname)?r:"",cpath:/(\/(mb2|mbb)\/u\/[a-z]+\/).*/i.test(location.pathname)?RegExp.$1:/(.+\/).+$/i.test(location.pathname)?RegExp.$1:""}}(),_HEADER_FLAG:"mf",_HEADER_KIND:"sd",_HEADER_KEEP:"sf",_USER_W_FLAG:"rf",_THREAD_IS:"is_thread",_THREAD_ACTIVE:"active_thread",_SIDE_MENU:"sm",_NEW_MENU_FLAG:"gf",_CSIZE_FLAG1:"ms",_CSIZE_FLAG2:"mss",_DMF:"",_SG_ISIMGFLAG:"ea-isajaximg",_SG_GEAR_NAME:"ea-gear",_SG_NEWIMG_NAME:"ea-new",_SG_LOADING_NAME:"ea-loading",_TOP_MENU_POS:50,_DROPMENU_FLAG:0,_BIRTHDAY_FLAG:0,path:{_ENCODE:this.$origin.path+"js/encoding.js",_TOP_LEFT:this.$origin.path+"g/bg001.gif",_TOP_RIGHT:this.$origin.path+"g/bg002.gif",_TOP_BODY:this.$origin.path+"g/bg003.gif",_INDEX:"db-LazyForum.html",_BG_:this.$origin.path+"icondata.jsonp",_FAVICON:this.$origin.path+"g/f.ico",_BG1:this.$origin.path+"g/star02.gif",_BG2:this.$origin.path+"g/moyo04.gif",_BG3:this.$origin.path+"g/moyo06.gif",_BG4:this.$origin.path+"g/moyo05.gif",_IE7:"http://dl.dropbox.com/u/122048445/ea/g/new001.gif",_QR_IMAGE:this.$origin.path+"g/QRcode.gif",_GEAR_IMAGE:this.$origin.path+"g/gear.png",_GD1:this.$origin.path+"ea_guide.html",_GD2:this.$origin.path+"ea_rule.html",_GD3:this.$origin.path+"ea_output.html",_GD4:this.$origin.path+"ea_gazou.html",_MB_BG1:this.$origin.path+"g/haikei.gif",_FRAME_BG:this.$origin.path+"g/moyo01.gif",_HELP:this.$origin.path+"ajax-help.html",_MENU:this.$origin.path+"g/menu48.png",_CLOSE_BTN:this.$origin.path+"g/close48.png",_NEWA:this.$origin.path+"g/new001.gif",_RADIO:this.$origin.path+"ajax-radio.html",_READING:this.$origin.path+"g/ajax-loader.gif"},MSIE:navigator.userAgent.toLowerCase().indexOf("msie")>=0||navigator.userAgent.toLowerCase().indexOf("trident")>=0?parseInt(/(msie\s|rv:?)([\d\.]+)/.exec(navigator.userAgent.toLowerCase())[2]):0,NF:navigator.userAgent.toLowerCase().indexOf("netfront")!=-1,BC:/browser\/(vf-)?netfront.+midp/i.test(navigator.userAgent.toLowerCase())||navigator.userAgent.toLowerCase().indexOf("docomo")!=-1,SP:this.$origin.query.m==""||navigator.userAgent.toLowerCase().indexOf("mobile")!=-1||navigator.userAgent.toLowerCase().indexOf("iphone")!=-1||navigator.userAgent.toLowerCase().indexOf("android")!=-1||navigator.userAgent.toLowerCase().indexOf("ipad")!=-1,FM:function(){return this.getCookie("sm")==="1"},IM:function(){return this.getCookie("mm")==="1"},FAPI:window.File&&window.FileReader&&window.FileList&&window.Blob,FAPI_W:/firefox/i.test(navigator.userAgent.toLowerCase())||window.requestFileSystem||window.webkitRequestFileSystem,MobileResize:{textarea:"width:90%;",body:"margin:0 auto;line-height:1.4em;","#content_size":"margin:0;width:100%;margin-top:0px;","#content_size .right_content":"margin:0;","div.global_content":"width:100%; margin:0 auto;float:none;",".main_content .box_left":" float:none; width:100%; margin:0.1em 0; border-radius:5px; -webkit-border-radius:5px;",".bg_td":"border-radius:5px; -webkit-border-radius:5px;",".main_content .box_right":"display:none;",".main_content .box_body":"margin:0; padding:0.3em 0.3em;"},boxInfo:{scrollLeft:window.pageXOffset!==undefined?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,scrollTop:window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,innerWidth:Math.round(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),innerHeight:Math.round(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight),offsetParent:function(n){return n.offsetParent},offsetTop:function(n){return n.offsetTop},offsetLeft:function(n){return n.offsetLeft},offsetWidth:function(n){return n.offsetWidth},offsetHeight:function(n){return n.offsetHeight},top:function(n){return Math.round(n.getBoundingClientRect().top)},right:function(n){return Math.round(n.getBoundingClientRect().right)},bottom:function(n){return Math.round(n.getBoundingClientRect().bottom)},left:function(n){return Math.round(n.getBoundingClientRect().left)}},jsload:function(n){var t=document.createElement("script");t.setAttribute("src",n);t.setAttribute("type","text/javascript");this.$TagName("head")[0].appendChild(t)},removeListener:function(n,t,i){return n.addEventListener?n.removeEventListener(t,i,!1):n.detachEvent&&n.detachEvent("on"+t,i),!0},addListener:function(n,t,i){return n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent?t!=="DOMContentLoaded"?n.attachEvent("on"+t,i):function(){try{document.documentElement.doScroll("left")}catch(n){setTimeout(arguments.callee,0);return}i()}():window.onload=i,!0},domloaded:function(n,t){if(window.attachEvent)(function(){try{document.documentElement.doScroll("left");$("div")}catch(n){setTimeout(arguments.callee,0);return}t()})();else if(window.addEventListener){var i=this.$id;(function(){try{if(i(n)==null)throw"";}catch(r){setTimeout(arguments.callee,0);return}t()})()}else window.onload=t},addCSS:function(n,t){var i,u,r;typeof t!="undefined"?i=document.styleSheets[t]:document.createStyleSheet?i=document.createStyleSheet():(u=document.createElement("style"),u.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(u),i=u.sheet);for(r in n)if(i.insertRule)i.insertRule(r+"{"+n[r]+";}",i.cssRules.length);else try{i.addRule(r,n[r])}catch(u){}},Today:function(n){var t=new Date,o=t.getFullYear(),f=t.getMonth()+1,i,e,r,u;return f<10&&(f="0"+f),i=t.getDate(),i<10&&(i="0"+i),e=o+"/"+f+"/"+i+["(日)","(月)","(火)","(水)","(木)","(金)","(土)"][t.getDay()],n==!0&&(r=t.getHours(),r<10&&(r="0"+r),u=t.getMinutes(),u<10&&(u="0"+u),e+=" "+r+":"+u),e},Replace:function(n){for(var u=[],f,r=document.getElementsByTagName("table")[n],e,t=r.getElementsByTagName("a"),i=0;i<t.length;i++)u[i]=t[i].href,u[i+t.length]=t[i].innerHTML;for(r.parentNode.removeChild(r),r=document.getElementById("thread").getElementsByTagName("hr"),r=r[r.length-1],f=document.createElement("div"),f.id="hd",f.style.cssText="margin:0.6em 0 0.4em 0;",e=u.length/2,i=0;i<e;i++)t=document.createElement("a"),t.className="ch1",t.style.fontSize="100%",t.href=u[i],t.innerHTML=u[e+i],t.title="レイジーフォーラム",t.onfocus=function(){this.blur()},f.appendChild(t);r.parentNode.replaceChild(f,r)},gradi:function(n,t){return this.MSIE?"":"background: linear-gradient("+n+","+t+");background: -webkit-linear-gradient("+n+","+t+");background: -webkit-gradient(linear, left top, left bottom, from("+n+"), to("+t+"));background: -o-linear-gradient("+n+","+t+")"},charSize:function(n){var t,i=n.type?this.$storage.get(n.name):this.getCookie(n.name);n.rw?((t=parseInt(i,10)-1)<0&&(t=2),n.type?this.$storage.set(n.name,t+"",180):this.setCookie(n.name,t+"",this.$origin.cpath,180)):(t=i)===""&&(n.type?this.$storage.set(n.name,t="2",180):this.setCookie(n.name,t="2",this.$origin.cpath,180),t=parseInt(t,10));this.$id("container").style.fontSize=["90%","95%","100%"][t];this.$id(n.id).innerHTML=n.char+["小","中","大"][t].bold()},isLandscape:function(){return window.innerHeight>window.innerWidth?!0:!1},dm_resize:function(n){var t=window.innerHeight;t<=360?n.css({overflow:"scroll",height:t-80+"px"}):n.css({overflow:"visible",height:"auto"})},cssSearch:function(n){for(var t,f=document.styleSheets.length,i=0;i<f;i++){var r=document.styleSheets[i],u=r.rules||r.cssRules,e=u.length;for(t=0;t<e;t++)if(u[t].selectorText==n)return!0}return!1},getCookie:function(n){var t=document.cookie+";",r=t.indexOf(n,0),i,u;return r!=-1?(t=t.substring(r,t.length),t==n+";"&&(t=n+"=;"),i=t.indexOf("=",0)+1,u=t.indexOf(";",i),unescape(t.substring(i,u))):""},setCookie:function(n,t,i,r){var f,u=new Date;f=n+"="+escape(t)+"; ";f+="path="+i;r||r!=0?(f+="; ",u.setTime(u.getTime()+864e5*r),u=u.toGMTString(),/(.+) (GMT|UTC)$/i.test(u),u=RegExp.$1,f+="expires="+u+";"):f+=";";document.cookie=f},clearCookie:function(n,t){document.cookie=n+"=xxx; path="+t+"; expires=Tue, 1-Jan-1980 00:00:00;"},checkCookie:function(){return navigator.cookieEnabled?!0:!1},HasStorage:function(){if(!this.checkCookie())return!1;if("localStorage"in window&&window.localStorage!==null)try{localStorage.setItem("test","test");var n=localStorage.getItem("test");return localStorage.removeItem("test"),n==="test"}catch(t){return!1}else return!1},readData:function(n,t){var i=1,r=this;(function(){var u=arguments.callee;$.ajax({type:"GET",url:n,scriptCharset:"UTF-8",dataType:"jsonp",cache:!1,jsonpCallback:"callBackFunction",crossDomain:!0,async:!0,timeout:3e3,statusCode:{200:function(){},404:function(){}},data:{v:this.$origin.update.substring(3)}}).done(function(n,t){r(n,t)}).fail(function(n){try{if(--i)throw i;switch(n.status){case 403:case 404:throw n.status+" "+n.statusText;default:setTimeout(u,0)}}catch(e){t&&t()}})})()},$storage:{has:function(){try{return"localStorage"in window&&window.localStorage!==null}catch(n){return!1}}(),clear:function(){localStorage.clear()},sget:function(n){return sessionStorage.getItem(n)},sset:function(n,t){sessionStorage.setItem(n,t)},nget:function(n){return localStorage.getItem(n)},nset:function(n,t){localStorage.setItem(n,t)},nremove:function(n){localStorage.removeItem(n)},remove:function(n){this.has?(localStorage.removeItem(n),localStorage.removeItem(n+"-time")):$it.clearCookie(n,this.$origin.cpath)},set:function(n,t,i){if(this.has){localStorage.setItem(n,t);var i=i==0?"0":(new Date).getTime()+864e5*i;localStorage.setItem(n+"-time",i)}else $it.setCookie(n,t,this.$origin.cpath,i)},get:function(n){if(this.has){var i=localStorage.getItem(n),t=localStorage.getItem(n+"-time");return t=="0"?i:t==null?"":t-(new Date).getTime()<=0?(this.remove(n),this.remove(n+"-time"),""):i}return $it.getCookie(n)},time:function(n){return b=36e5,da=Math.floor(n/(24*b)),ho=Math.floor(n/b%24),mi=Math.floor(n%b/6e4),se=Math.floor(n%b%6e4/1e3),da+"日"+ho+":"+mi+":"+se},look:function(n){for(var i=[],u=localStorage.length,r="",t=0;t<u;t++)i[t]=localStorage.key(t).indexOf("-time")!=-1?"【"+localStorage.key(t)+"】"+this.time(localStorage.getItem(localStorage.key(t))-(new Date).getTime())+"\r\n":"【"+localStorage.key(t)+"】"+localStorage.getItem(localStorage.key(t))+"\r\n";r=i.sort().join("");$(n).append($("<textarea>",{name:"de",rows:"31",cols:"38"}).css({overflow:"auto",position:"fixed",top:"0",left:"680px"}).text(r))},setobj:function(n,t,i){$storage.set(n,JSON.stringify(t),i)},getobj:function(n){return JSON.parse($storage.get(n))}}}||{},function(){if($it.BC)return!1;$it.domloaded("bwsput",function(){var f=$it.$id,e=$it.$TagName,r,t;if($it.SP||$it.BC){var n=$it._TOP_MENU_POS,i=6,o={"#top_frame":"z-index:2147483646; width:100%; height:"+(n-i)+"px; padding:"+i+"px 0 0 0; border-bottom:1px #aaa solid; background-color:#eed; color:#fff; left:0px; margin:0; position: fixed; top: 0; background-image:url("+$it.path._MB_BG1+");","#top_frame #sb3g1":"width:240px;","#top_frame h1":"margin:0; padding:0;","#under_frame":"margin:"+n+"px auto; padding: 0;","#dicon":"padding:7px 9px 8px 7px ; background-color: #fff; border:1px #aaa solid; z-index:2147483646; position: absolute; top:8px; left:5px; border-radius:4px;-webkit-border-radius:4px;width:18px; height:18px; background-position: 7px 7px; background-repeat: no-repeat; background-image:url("+$it.path._MENU+");background-size:20px 20px","#dicon img":"widht:20px; height:20px","#dclose":"z-index:2147483646;width:100%; height:100%; position: fixed; background-color:#transparent;","#origin":"z-index:2147483646; background-color:#transparent; position: relative; left: 0px; overflow-x: hidden;","#slide_menu":"z-index:2147483647; font-size:92%; text-align:left; padding:0.3em 0.4em;position: fixed; top: "+n+"; left: -240px; width: 240px; height: auto; background-color: #eeffFF; border: 1px #aaa solid; color:#111;box-sizing:border-box; -ms-box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;box-shadow:rgba(14, 27, 28, 0.44) 3px 3px 3px;-webkit-box-shadow:rgba(14, 27, 28, 0.44) 3px 3px 3px;-moz-box-shadow:rgba(14, 27, 28, 0.33) 3px 3px 3px;","#slide_menu ul":"list-style-type: none; line-height:2.2em;margin:0; padding:0","#slide_menu li":"margin:0; padding:0;","#slide_menu hr":"margin:0; padding:0","#slide_menu a":"color:#222;"};$it.addCSS(o);e("hr")[0].style.cssText="margin:0 0 1em 0; padding:0";$($("body")[0].childNodes[0]).before('<div id="top_frame"><h1><\/h1><\/div><div id="under_frame"><\/div>');r=$("#sb3g1").clone();$(".title_content").remove();$("#top_frame").find("h1:eq(0)").append(r);$("#top_frame").append('<div id="dicon"><\/div>');$it._BIRTHDAY_FLAG=0;t=$it.checkCookie()&&(/\/(nt.*|nm.*|um.*|dt.*)$/i.test(location.pathname)||/write\.html$/i.test(location.pathname));function u(){var r=function(n){for(var u=[$it.path._GD1,"フォーラムの案内",$it.path._GD2,"フォーラムの規約",$it.path._GD3,"対応機種・PCブラウザについて",$it.path._GD4,"画像アップロードについて","/mbb/u/earthark/nt","新ｽﾚ作成","/mbb/u/earthark/se","スレッド内検索","/mbb/u/earthark/","スレッド一覧ページの再読み込み"],e=document.createDocumentFragment(),o=document.createElement("li"),s=document.createElement("a"),r=n[0],f,i,h=u.length/2;h--;)f=o.cloneNode(),i=s.cloneNode(),i.href=u.shift(),i.title=i.href,i.rel="nofollow",i.innerHTML=u.shift(),f.appendChild(i),e.appendChild(f);r.appendChild(e);$(r).append('<hr><li><a id="bdfunc" href="javascript:void(0);" rel="nofollow" style="color:#0a0">メンバーの誕生日までの日数<\/a><\/li>');t||$(r).append('<hr><li><a id="hisbtn" href="#" rel="nofollow" style="color:#0a0">投稿履歴<\/a><\/li>');$(r).append('<hr><li><a href="http://earthark.9.tool.ms/mail.cgi?earthark" rel="nofollow" style="color:#0aa">レイジーフォーラムお問い合わせ<\/a><\/li>')},n=function(n,t){n.animate({left:-(n.outerWidth()+4)},300,function(){t.remove()})},i;($it._DROPMENU_FLAG^=1)?($("#top_frame").before($('<p id="dclose"><\/p><div id="orgin"><div id="slide_menu"><ul><\/ul><\/div><\/div>')),r($("#slide_menu ul")),$("#slide_menu").animate({left:0},300),t||$it.his._TOGGLE!=0||(i=["#hisbtn","#bp"],$it.hisRead($(i[0]),$(i[1]),function(){$it._DROPMENU_FLAG=0;n($("#slide_menu"),$("#dclose, #orgin"))})),$it.dm_resize($it._DMF=$("#slide_menu")),$("#bdfunc, #dclose").click(function(){$it._DROPMENU_FLAG=0;n($("#slide_menu"),$("#dclose, #orgin"));$(this)[0].id=="bdfunc"&&($it._BIRTHDAY_FLAG?$it.modal_open({text:"既に表示されています",width:240,height:0,align:"center"}):($it._BIRTHDAY_FLAG=1,$it.Birthday($("#bp").after())))})):n($("#slide_menu"),$("#dclose, #orgin"))}"ontouchstart"in window?$("#dicon").on({touchstart:u}):$("#dicon").on({click:u})}($it.checkCookie()&&$it.$storage.get($it._SG_ISIMGFLAG)===""&&$it.readData.call(function(n){$it.$storage.set($it._SG_ISIMGFLAG,"true",365);$it.$storage.set($it._SG_GEAR_NAME,n.gear,365);$it.$storage.set($it._SG_NEWIMG_NAME,n.newicon,365);$it.$storage.set($it._SG_LOADING_NAME,n.loading,365);$it.path._GEAR_IMAGE=n.gear;$it.path._NEWA=n.newicon;$it.path._READING=n.loading},$it.path._BG_,function(){$it.modal_open({url:null,text:"タイムアウト：再読込みしてください",width:"240",height:"0",align:"center",button:null,callback:null})}),$it.SP||$it.BC)||$it.IM()||$it.FM()||(f("bp3").style.display="block")});var i,n,t,r={main:{".global_content #ac":"margin:0.3em 0;",".global_content .ft":"padding:0.2em 0.4em; background-color:#555;color:#EEE",".main_content .bg_td":"background-image:url("+$it.path._TOP_LEFT+");padding:0.2em 0.5em;","#gd":"border: 1px solid #aaa; border-collapse: separate; border-spacing: 0; border-radius: 10px; overflow: hidden;",".box_right":"background-color:#FFF border:solid 1px #aaa; border-radius:10px;",".main_content .box_right":"background-image:url("+$it.path._TOP_RIGHT+");",".main_content .box_body":"background-image:url("+$it.path._TOP_BODY+")",a:"outline:none",hr:"border-style:solid; border-color:#aaa;","#container img":"vertical-align: -0.2em;","#container":"line-height:1.3em;","#content_size .line":"margin:0.2em 0;border-top:1px #aaa dotted;","#bp3":"display:none; margin:0.3em 0; width:150px; height:150px; background: url("+$it.path._QR_IMAGE+") no-repeat 0px 0px;"},sub:{textarea:"font-size:90%; width:90%; line-height:1.4em;"}};window.opera&&$it.addCSS({"*":pro});$it.addCSS(r.main);$it.SP||$it.addCSS(r.sub);i=document.createElement("link");i.setAttribute("href",$it.path._FAVICON);i.setAttribute("rel","shortcut icon");document.getElementsByTagName("head")[0].appendChild(i);n=(new Date).getHours();n>=0&&n<=5?t=$it.path._BG1:n>=6&&n<=11?t=$it.path._BG2:n>=12&&n<=17?t=$it.path._BG3:n>=18&&n<=23&&(t=$it.path._BG4);try{document.body.style.backgroundImage="url("+t+")"}catch(i){}($it.MSIE&&$it.MSIE<=7&&($it.path._NEWA=$it.path._IE7),$it.checkCookie()&&$it.$storage.get($it._SG_ISIMGFLAG)!==""&&($it.path._GEAR_IMAGE=$it.$storage.get($it._SG_GEAR_NAME),$it.path._NEWA=$it.$storage.get($it._SG_NEWIMG_NAME),$it.path._READING=$it.$storage.get($it._SG_LOADING_NAME),$it.$storage.get("if")!==""&&$it.$storage.remove("if"),$it.$storage.get("ig")!==""&&$it.$storage.remove("ig")),$it.SP)&&($it.setCookie($it._SIDE_MENU,"0",$it.$origin.cpath,1),$it.addCSS($it.MobileResize),$it._DROPMENU_FLAG&&$it.dm_resize($it._DMF))}()