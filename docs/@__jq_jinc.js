var oc=function(n){if(!n)return{};var t=function(){};return t.prototype=n,new t},$it;Object.create=Object.create||oc;Date.prototype.toNowTime=function(){var r=this.getFullYear(),i=this.getMonth()+1,n,t;return i<10&&(i="0"+i),n=this.getDate(),n<10&&(n="0"+n),t=this.getHours(),t<10&&(t="0"+t),""+r+""+i+""+n+""+t};Date.prototype.toLocaleString=function(){return[this.getFullYear(),("0"+(this.getMonth()+1)).slice(-2),("0"+this.getDate()).slice(-2),].join("")+("0"+this.getHours()).slice(-2)+("0"+this.getMinutes()).slice(-2)};$it={$id:function(n){return document.getElementById(n)},$class:function(n){return document.getElementsByClassName(n)},$TagName:function(n){return document.getElementsByTagName(n)},$Name:function(n){return document.getElementsByName(n)},$cText:function(n){return document.createTextNode(n)},$ce:function(n){return document.createElement(n)},$rm:function(n){n.parentNode.removeChild(n)},$Replace:function(n,t){t.parentNode.replaceChild(n,t)},$Before:function(n,t){t.parentNode.insertBefore(n,t)},$qa:function(n){return document.querySelectorAll(n)},$q:function(n){return document.querySelector(n)},$origin:$origin=function(){var i=function(){var i={},r,t,n;if(1<window.location.search.length)for(r=window.location.search.substring(1),t=r.split("&"),n=0;n<t.length;n++){var u=t[n].split("="),f=u[0],e=u[1];i[f]=e}return i}(),n="https://ea-site.github.io/earthark/",o="0"+Math.floor((new Date).getMinutes()/10),t=location.search.length?location.search:"?v="+(new Date).toNowTime()+o,s=i.t===""?"@":"",r='<script type="text/javascript" src="',u='"><\/script>';if(/\/(mbb|mb2)\/u\/[a-z]+(\/.*)$/i.test(location.pathname))var c=n,f=n+s+"__",e=/(\/nt.*|\/se.*)/i.test(RegExp.$2)?new RegExp(RegExp.$1,"i"):e=/\/\d+\/.*$/i;else var c="",f="",e=/writ.+$/i;return document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"><\/script>'),document.write(r+f+(e.test(location.pathname)?"jq_newcheck.js":"jq_newcount.js")+t+u),document.write(r+f+"jq_birthday.js"+t+u),{update:t,query:i,host:/\/(mbb|mb2)\/u\/[a-z]+\/.*/i.test(location.pathname),path:/\/(mbb|mb2)\/u\/[a-z]+\/.*/i.test(location.pathname)?n:"",cpath:/(\/(mb2|mbb)\/u\/[a-z]+\/).*/i.test(location.pathname)?RegExp.$1:/(.+\/).+$/i.test(location.pathname)?RegExp.$1:""}}(),_NEWA:"data:image/gif;base64,R0lGODlhIAAQAOfbAP8AAP4DAv4GBP4GBf4HBv4JCP4PC/4QDP4gGP4iFv4lGP4pH/48M/0+LP1DMP1FMf1GM/1GOP1IOf1LO/1MPP1RO/xTPf1hTPxqSfxyTvxzVP1zXP13XvyIafyLavuQY/2PdvuSZPuSZf2Ue/qZZv2diD3Y8vyvj/uygvu/ivnPh/nQiPrPmPvPpvnZl/3Xuvjdkvjgkvzct/zcvf3ewPrnr/rpsPrrsvbyfPXzfPbze/bzfPbzffbzfvbzf/fzf/fzgPb0fvfzhvfzh/b0hPb0hfb0hvf0hPb0h/f0hfb0iPf0hvf0h/f0iPf0iff0jvf0j/f0kPj0jvf0kff1ifj0kPf1jvf1j/f1kPf1kfj1j/f1kvj1kff1lvj1l/j1mPj1mfj1mvj1m/j1nPryuPj2l/j2mPj2mfj2mvj2m/j2oPj2ofj2ovn2oPj2pPj3ovn3oPj3pPj3pfn3o/n3pPn3pfzy0Pn3q/n3rPn3rfr2tPr3rPr3rfn4qfn4qvn4q/v2uvn4rvr4rvn4tPr4s/r4tPr4tfr4tvr4t/r4vPr5t/r5vPr5vvv5vPv5vfr5wPv5v/v5wPv5xfv5xvv5x/v6wPv6xfv6xvv6x/v6yPz6xvv6yfv6yvz6yfv6zvz6z/z60Pz60fz60vv70Pz7zvz70Pz70fz70/z71/z72Pz72/372f372v373Pz82P381/382f382/383Pz84f384P384f384v384/385P385f785P394f394v394/395P395f795P795f396v396/796v397f796/797P797f797v3+7f3+7v7+7P7+7f7+7v7+8/7+9P7+9f/+8/7+9v/+9P7+9//+9f/+9v/+9/7/9v7/+P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAAAgABAAAAj+AP8JNEGwoMGDCA8KHEjQBxAfEH/46DGxBw8eQS5qxLEjhw4cBQc6oeJESZOTSpggScmk5ZIlQ4wIWVLEiJEkRYgcMfGP4JafW7Jk4TKFy1AsWaJUiaIFyxUoUJ5AsSLFypMnBcekSSMmTZiuaMKIDYPmDJgzZs2Y+cLWTJkvXsp0ISinjps6AEjQmeMGQJw5AAIHZpNgxZsYAWCsUaEAjpo2BAUF4pMHQAMXeSrv4QMAz587d/5gEHFHhIAQdz5k8NPHD0FFiBApAsACgp5DAA4ZAmCot6FCKCwMcqDhAaEKKQgpJxgp0qNKAB556AAJACRGggM7IoOgxoEbBmziLADUaFEigpw4bdoEoBOlCC0AbMoEIBMmSpQwaZqwgcIkCRxccIkkllhC0CkIigKAKKHIwAAAppgCQCkRljIKKCMMMEIpIBBwAimfkOIJQa3IIksrAKgSSywlAMAKK9kBAAssNAAwwyovFGCHK6+gkkpBv+QSjC65+IILLsD44ksvt9zSC5O83GKLLbXMUssus8xCC0E9JZPMMs40o0wzyCBzDDLFIMPMMccMwwwzxhgzTJzGCEMMMTz1RFA12mCDTTbXTDNNoNFYE8000SRqDTXQUPMMNNKEtFBClFbKpUABAQA7",_READING:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==",_SF:"pc",_HEADER_FLAG:"mf",_HEADER_KIND:"sd",_HEADER_KEEP:"sf",_USER_W_FLAG:"rf",_THREAD_IS:"is_thread",_THREAD_ACTIVE:"active_thread",_SIDE_MENU:"sm",_SG_GEAR_NAME:"ig",_NEW_MENU_FLAG:"gf",_CSIZE_FLAG1:"ms",_CSIZE_FLAG2:"mss",_DMF:"",_DF:0,_BF:0,_JISHIN_ID1:"ksn-main-con-jisin",_JISHIN_ID2:"ksn-main-con-jisin-oblong",_JISHIN_CLASS:".ksn-right-link",path:{_ENCODE:this.$origin.path+"js/encoding.js",_TOP_LEFT:this.$origin.path+"g/bg001.gif",_TOP_RIGHT:this.$origin.path+"g/bg002.gif",_TOP_BODY:this.$origin.path+"g/bg003.gif",_INDEX:"db-LazyForum.html",_BG_JSONP:this.$origin.path+"icondata.jsonp",_FAVICON:this.$origin.path+"g/f.ico",_BG1:this.$origin.path+"g/star02.gif",_BG2:this.$origin.path+"g/moyo04.gif",_BG3:this.$origin.path+"g/moyo06.gif",_BG4:this.$origin.path+"g/moyo05.gif",_IE7:"http://dl.dropbox.com/u/122048445/ea/g/new001.gif",_QR_IMAGE:this.$origin.path+"g/QRcode.gif",_GEAR_IMAGE:this.$origin.path+"g/gear.png",_GD1:this.$origin.path+"ea_guide.html",_GD2:this.$origin.path+"ea_rule.html",_GD3:this.$origin.path+"ea_output.html",_GD4:this.$origin.path+"ea_gazou.html",_MB_BG1:this.$origin.path+"g/haikei.gif",_FRAME_BG:this.$origin.path+"g/moyo01.gif",_HELP:this.$origin.path+"ajax-help.html",_MENU:this.$origin.path+"g/menu48.png",_CLOSE_BTN:this.$origin.path+"g/close48.png",_NEWA:this.$origin.path+"g/new001.gif",_RADIO:this.$origin.path+"ajax-radio.html"},MSIE:navigator.userAgent.toLowerCase().indexOf("msie")>=0||navigator.userAgent.toLowerCase().indexOf("trident")>=0?parseInt(/(msie\s|rv:?)([\d\.]+)/.exec(navigator.userAgent.toLowerCase())[2]):0,NF:navigator.userAgent.toLowerCase().indexOf("netfront")!=-1,BC:/browser\/(vf-)?netfront.+midp/i.test(navigator.userAgent.toLowerCase())||navigator.userAgent.toLowerCase().indexOf("docomo")!=-1,SP:this.$origin.query.m==""||navigator.userAgent.toLowerCase().indexOf("mobile")!=-1||navigator.userAgent.toLowerCase().indexOf("iphone")!=-1||navigator.userAgent.toLowerCase().indexOf("android")!=-1||navigator.userAgent.toLowerCase().indexOf("ipad")!=-1,FM:function(){return this.getCookie("sm")==="1"},IM:function(){return this.getCookie("mm")==="1"},FAPI:window.File&&window.FileReader&&window.FileList&&window.Blob,FAPI_W:/firefox/i.test(navigator.userAgent.toLowerCase())||window.requestFileSystem||window.webkitRequestFileSystem,mobj:{_MSG:"PC向け表示またはスマホ向け表示に切り替えられます",_MSGM:"スマホ用表示に切り替える",_MSGP:"PC用表示に切り替える",_JISHIN:'<!-- kusanone-net.com 地震速報 start --><script type="text/javascript" src="http://www.kusanone-net.com/kusanone-quake.js" charset="utf-8"><\/script><!-- kusanone-net.com 地震速報 end -->',_JISHIN_TEST:/(kusanone-quake)/i,css:{".mbhead":"margin-bottom:4px;text-align:center;",".mbinput":"margin:2px 0;padding:3px 3px;"},resize:{textarea:"width:90%;",body:"margin:0 auto;line-height:1.4em;","#content_size":"margin:0;width:100%","div.global_content":"width:100%; margin:0 auto;float:none;",".main_content .box_left":" float:none; width:100%; margin:0.1em 0; border-radius:5px; -webkit-border-radius:5px;",".bg_td":"border-radius:5px; -webkit-border-radius:5px;",".main_content .box_right":"display:none;",".main_content .box_body":"margin:0; padding:0.3em 0.3em;"}},boxInfo:{scrollLeft:window.pageXOffset!==undefined?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,scrollTop:window.pageYOffset!==undefined?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,innerWidth:Math.round(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),innerHeight:Math.round(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight),offsetParent:function(n){return n.offsetParent},offsetTop:function(n){return n.offsetTop},offsetLeft:function(n){return n.offsetLeft},offsetWidth:function(n){return n.offsetWidth},offsetHeight:function(n){return n.offsetHeight},top:function(n){return Math.round(n.getBoundingClientRect().top)},right:function(n){return Math.round(n.getBoundingClientRect().right)},bottom:function(n){return Math.round(n.getBoundingClientRect().bottom)},left:function(n){return Math.round(n.getBoundingClientRect().left)}},jsload:function(n){var t=document.createElement("script");t.setAttribute("src",n);t.setAttribute("type","text/javascript");this.$TagName("head")[0].appendChild(t)},removeListener:function(n,t,i){return n.addEventListener?n.removeEventListener(t,i,!1):n.detachEvent&&n.detachEvent("on"+t,i),!0},addListener:function(n,t,i){return n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent?t!=="DOMContentLoaded"?n.attachEvent("on"+t,i):function(){try{document.documentElement.doScroll("left")}catch(n){setTimeout(arguments.callee,0);return}i()}():window.onload=i,!0},domloaded:function(n,t){if(window.attachEvent)(function(){try{document.documentElement.doScroll("left");$("div")}catch(n){setTimeout(arguments.callee,0);return}t()})();else if(window.addEventListener){var i=this.$id;(function(){try{if(i(n)==null)throw"";}catch(r){setTimeout(arguments.callee,0);return}t()})()}else window.onload=t},addCSS:function(n,t){var i,u,r;typeof t!="undefined"?i=document.styleSheets[t]:document.createStyleSheet?i=document.createStyleSheet():(u=document.createElement("style"),u.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(u),i=u.sheet);for(r in n)if(i.insertRule)i.insertRule(r+"{"+n[r]+";}",i.cssRules.length);else try{i.addRule(r,n[r])}catch(u){}},Today:function(n){var t=new Date,o=t.getFullYear(),f=t.getMonth()+1,i,e,r,u;return f<10&&(f="0"+f),i=t.getDate(),i<10&&(i="0"+i),e=o+"/"+f+"/"+i+["(日)","(月)","(火)","(水)","(木)","(金)","(土)"][t.getDay()],n==!0&&(r=t.getHours(),r<10&&(r="0"+r),u=t.getMinutes(),u<10&&(u="0"+u),e+=" "+r+":"+u),e},Replace:function(n){for(var u=[],f,r=document.getElementsByTagName("table")[n],e,t=r.getElementsByTagName("a"),i=0;i<t.length;i++)u[i]=t[i].href,u[i+t.length]=t[i].innerHTML;for(r.parentNode.removeChild(r),r=document.getElementById("thread").getElementsByTagName("hr"),r=r[r.length-1],f=document.createElement("div"),f.id="hd",f.style.cssText="margin:0.6em 0 0.4em 0;",e=u.length/2,i=0;i<e;i++)t=document.createElement("a"),t.className="ch1",t.style.fontSize="100%",t.href=u[i],t.innerHTML=u[e+i],t.title="レイジーフォーラム",t.onfocus=function(){this.blur()},f.appendChild(t);r.parentNode.replaceChild(f,r)},gradi:function(n,t){return this.MSIE?"":"background: linear-gradient("+n+","+t+");background: -webkit-linear-gradient("+n+","+t+");background: -webkit-gradient(linear, left top, left bottom, from("+n+"), to("+t+"));background: -o-linear-gradient("+n+","+t+")"},charSize:function(n){var t,i=n.type?this.$storage.get(n.name):this.getCookie(n.name);n.rw?((t=parseInt(i,10)-1)<0&&(t=2),n.type?this.$storage.set(n.name,t+"",180):this.setCookie(n.name,t+"",this.$origin.cpath,180)):(t=i)===""&&(n.type?this.$storage.set(n.name,t="2",180):this.setCookie(n.name,t="2",this.$origin.cpath,180),t=parseInt(t,10));this.$id("container").style.fontSize=["90%","95%","100%"][t];this.$id(n.id).innerHTML=n.char+["小","中","大"][t].bold()},isLandscape:function(){return window.innerHeight>window.innerWidth?!0:!1},dm_resize:function(n){var t=window.innerHeight;t<=360?n.css({overflow:"scroll",height:t-80+"px"}):n.css({overflow:"visible",height:"auto"})},set_winsize:function(){$it.addCSS($it.mobj.resize);$it._DF&&$it.dm_resize($it._DMF)},set_mbSize:function(n){var r=this.mobj,t,i,u=document.getElementById(n);return u.className="mbhead",t=document.createElement("input"),t.className="mbinput",t.setAttribute("type","button"),t.setAttribute("title",r._MSG),t.onfocus=function(){this.blur()},$it.getCookie($it._SF)=="1"?(t.setAttribute("value",r._MSGM),i=""):(t.setAttribute("value",r._MSGP),i="1",this.set_winsize()),t.onclick=function(){$it.setCookie($it._SF,i,$it.$origin.cpath,182);location.reload(!0)},u.appendChild(t),i},cssSearch:function(n){for(var t,f=document.styleSheets.length,i=0;i<f;i++){var r=document.styleSheets[i],u=r.rules||r.cssRules,e=u.length;for(t=0;t<e;t++)if(u[t].selectorText==n)return!0}return!1},getCookie:function(n){var t=document.cookie+";",r=t.indexOf(n,0),i,u;return r!=-1?(t=t.substring(r,t.length),t==n+";"&&(t=n+"=;"),i=t.indexOf("=",0)+1,u=t.indexOf(";",i),unescape(t.substring(i,u))):""},setCookie:function(n,t,i,r){var f,u=new Date;f=n+"="+escape(t)+"; ";f+="path="+i;r||r!=0?(f+="; ",u.setTime(u.getTime()+864e5*r),u=u.toGMTString(),/(.+) (GMT|UTC)$/i.test(u),u=RegExp.$1,f+="expires="+u+";"):f+=";";document.cookie=f},clearCookie:function(n,t){document.cookie=n+"=xxx; path="+t+"; expires=Tue, 1-Jan-1980 00:00:00;"},checkCookie:function(){if(!navigator.cookieEnabled)return!1;this.setCookie("aa","1",this.$origin.cpath,1);var n=this.getCookie("aa")=="1"?!0:!1;return this.clearCookie("aa",this.$origin.cpath),n},HasStorage:function(){if(!this.checkCookie())return!1;if("localStorage"in window&&window.localStorage!==null)try{localStorage.setItem("test","test");var n=localStorage.getItem("test");return localStorage.removeItem("test"),n==="test"}catch(t){return!1}else return!1},readData:function(n,t){var i=1;(function(){var r=arguments.callee;$.ajax({type:"GET",url:n,scriptCharset:"UTF-8",dataType:"jsonp",cache:!1,jsonpCallback:"callBackFunction",crossDomain:!0,async:!0,timeout:3e3,statusCode:{200:function(){},404:function(){}},data:{v:this.$origin.update.substring(3)}}).done(function(n,i){t(n,i)}).fail(function(n){try{if(--i)throw i;switch(n.status){case 403:case 404:throw n.status+" "+n.statusText;default:setTimeout(r,0)}}catch(e){modal_open({url:null,text:"タイムアウト：再読込みしてください",width:"240",height:"0",align:"center",button:null,callback:null})}})})()},afterExec:function(){var n=$it.$id,f=$it.$TagName,r,o;if(($it.SP||$it.BC)&&($it.getCookie($it._SF)==""||$it.getCookie($it._SF)=="0")){var t=50,i=6,e={"#top_frame":"z-index:2147483646; width:100%; height:"+(t-i)+"px; padding:"+i+"px 0 0 0; border-bottom:1px #aaa solid; background-color:#eed; color:#fff; left:0px; margin:0; position: fixed; top: 0; background-image:url("+$it.path._MB_BG1+");","#top_frame #sb3g1":"width:240px;","#top_frame h1":"margin:0; padding:0;","#under_frame":"margin:"+t+"px auto; padding: 0;","#dicon":"padding:7px 9px 8px 7px ; background-color: #fff; border:1px #aaa solid; z-index:2147483646; position: absolute; top:8px; left:5px; border-radius:4px;-webkit-border-radius:4px;width:18px; height:18px; background-position: 7px 7px; background-repeat: no-repeat; background-image:url("+$it.path._MENU+");background-size:20px 20px","#dicon img":"widht:20px; height:20px","#dclose":"z-index:2147483646;width:100%; height:100%; position: fixed; background-color:#transparent;","#origin":"z-index:2147483646; background-color:#transparent; position: relative; left: 0px; overflow-x: hidden;","#slide_menu":"z-index:2147483647; font-size:92%; text-align:left; padding:0.3em 0.4em;position: fixed; top: "+t+"; left: -240px; width: 240px; height: auto; background-color: #eeffFF; border: 1px #aaa solid; color:#111;box-sizing:border-box; -ms-box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;box-shadow:rgba(14, 27, 28, 0.44) 3px 3px 3px;-webkit-box-shadow:rgba(14, 27, 28, 0.44) 3px 3px 3px;-moz-box-shadow:rgba(14, 27, 28, 0.33) 3px 3px 3px;","#slide_menu ul":"list-style-type: none; line-height:2.2em;margin:0; padding:0","#slide_menu li":"margin:0; padding:0;","#slide_menu hr":"margin:0; padding:0","#slide_menu a":"color:#222;"};$it.addCSS(e);f("hr")[0].style.cssText="margin:0 0 1em 0; padding:0";$($("body")[0].childNodes[0]).before('<div id="top_frame"><h1><\/h1><\/div><div id="under_frame"><\/div>');r=$("#sb3g1").clone();$(".title_content").remove();$("#top_frame").find("h1:eq(0)").append(r);$("#top_frame").append('<div id="dicon"><\/div>');$it._BF=0;o=/\/(nt.*|nm.*|um.*|dt.*)$/i.test(location.pathname)||/write\.html$/i.test(location.pathname);function u(){var t=function(n){for(var i=[$it.path._GD1,"フォーラムの案内",$it.path._GD2,"フォーラムの規約",$it.path._GD3,"対応機種・PCブラウザについて",$it.path._GD4,"画像アップロードについて","/mbb/u/earthark/nt","新ｽﾚ作成","/mbb/u/earthark/se","スレッド内検索","/mbb/u/earthark/","スレッド一覧ページの再読み込み"],f=document.createDocumentFragment(),e=document.createElement("li"),o=document.createElement("a"),r=n[0],u,t,s=i.length/2;s--;)u=e.cloneNode(),t=o.cloneNode(),t.href=i.shift(),t.title=t.href,t.rel="nofollow",t.innerHTML=i.shift(),u.appendChild(t),f.appendChild(u);r.appendChild(f);$(r).append('<hr><li><a id="bdfunc" href="javascript:void(0);" rel="nofollow" style="color:#0a0">メンバーの誕生日までの日数<\/a><\/li>');$(r).append('<hr><li><a href="http://earthark.9.tool.ms/mail.cgi?earthark" rel="nofollow" style="color:#0aa">レイジーフォーラムお問い合わせ<\/a><\/li>')},n=function(n,t){n.animate({left:-(n.outerWidth()+4)},300,function(){t.remove()})};($it._DF^=1)?($("#top_frame").before($('<p id="dclose"><\/p><div id="orgin"><div id="slide_menu"><ul><\/ul><\/div><\/div>')),t($("#slide_menu ul")),$("#slide_menu").animate({left:0},300),$it.dm_resize($it._DMF=$("#slide_menu")),$("#bdfunc, #dclose").click(function(){$it._DF=0;n($("#slide_menu"),$("#dclose, #orgin"));$(this)[0].id=="bdfunc"&&($it._BF?$it.modal_open({text:"既に表示されています",width:240,height:0,align:"center"}):($it._BF=1,$it.Birthday($("#bp").after())))})):n($("#slide_menu"),$("#dclose, #orgin"))}"ontouchstart"in window?$("#dicon").on({touchstart:u}):$("#dicon").on({click:u})}if($it.checkCookie()&&$it.$storage.get($it._SG_GEAR_NAME)===""&&$it.readData($it.path._BG_JSONP,function(n){$it.$storage.set($it._SG_GEAR_NAME,n.gear,365)}),$it.SP||$it.BC){if($it.set_mbSize("bwsput"),$it.getCookie($it._SF)==""||$it.getCookie($it._SF)=="0")try{n("bgparts").style.display="none";n($it._JISHIN_ID1).style.cssText="width:94%; font-size:70%: line-height:1.8em;";$($it._JISHIN_CLASS).css({"line-height":"1.2em"})}catch(s){}if($it.getCookie($it._SF)=="1")try{n("bp1").style.display="block";n("bp2").style.display="none";n("bp3").style.display="none"}catch(s){}}else{$it.IM()||$it.FM()||(n("bp3").style.display="block");try{n($it._JISHIN_ID2).style.cssText="line-height:1.3em;margin-bottom:0.3em";$($it._JISHIN_CLASS).css({"line-height":"1.3em"})}catch(s){}}}};$it.$storage={has:function(){try{return"localStorage"in window&&window.localStorage!==null}catch(n){return!1}}(),clear:function(){localStorage.clear()},sget:function(n){return sessionStorage.getItem(n)},sset:function(n,t){sessionStorage.setItem(n,t)},nget:function(n){return localStorage.getItem(n)},nset:function(n,t){localStorage.setItem(n,t)},nremove:function(n){localStorage.removeItem(n)},remove:function(n){this.has?(localStorage.removeItem(n),localStorage.removeItem(n+"-time")):$it.clearCookie(n,this.$origin.cpath)},set:function(n,t,i){if(this.has){localStorage.setItem(n,t);var i=i==0?"0":(new Date).getTime()+864e5*i;localStorage.setItem(n+"-time",i)}else $it.setCookie(n,t,this.$origin.cpath,i)},get:function(n){if(this.has){var i=localStorage.getItem(n),t=localStorage.getItem(n+"-time");return t=="0"?i:t==null?"":t-(new Date).getTime()<=0?(this.remove(n),this.remove(n+"-time"),""):i}return $it.getCookie(n)},time:function(n){return b=36e5,da=Math.floor(n/(24*b)),ho=Math.floor(n/b%24),mi=Math.floor(n%b/6e4),se=Math.floor(n%b%6e4/1e3),da+"日"+ho+":"+mi+":"+se},look:function(n){for(var i=[],u=localStorage.length,r="",t=0;t<u;t++)i[t]=localStorage.key(t).indexOf("-time")!=-1?"【"+localStorage.key(t)+"】"+this.time(localStorage.getItem(localStorage.key(t))-(new Date).getTime())+"\r\n":"【"+localStorage.key(t)+"】"+localStorage.getItem(localStorage.key(t))+"\r\n";r=i.sort().join("");$(n).append($("<textarea>",{name:"de",rows:"31",cols:"38"}).css({overflow:"auto",position:"fixed",top:"0",left:"680px"}).text(r))},setobj:function(n,t,i){$storage.set(n,JSON.stringify(t),i)},getobj:function(n){return JSON.parse($storage.get(n))}};$it.his={_TOGGLE:0,sg:{_JSON_CHECK:!1,_ERRM:["名前が未入力です<br>","本文が未入力です<br>","削除/編集パスワードが未入力です<br>","このページを離れると、入力したデータが削除されます。本当に移動しますか？"],_MAXNUM:3,_DATA:"forum-data",_STATUS:"forum-status",_NAME:"forum-name",_TIME:"forum-time",_THREAD:"forum-thread",_CONTENT:"forum-content",_POSITION:"forum-position",_LENGTH:"forum-length"},sgLength:function(){var n=$it.$storage.nget(this.sg._LENGTH);return parseInt(n==null?n="0":n,10)},sgRead:function(n){return this.sg._JSON_CHECK?JSON.parse($it.$storage.nget(this.sg._DATA+n)):{status:$it.$storage.nget(this.sg._STATUS+n),name:$it.$storage.nget(this.sg._NAME+n),time:$it.$storage.nget(this.sg._TIME+n),thread:$it.$storage.nget(this.sg._THREAD+n),content:$it.$storage.nget(this.sg._CONTENT+n)}},sgClear:function(){for(var n=0;n<parseInt($it.$storage.nget(this.sg._LENGTH),10);n++)this.sg._JSON_CHECK?$it.$storage.nremove(this.sg._DATA+n):($it.$storage.nremove(this.sg._NAME+n),$it.$storage.nremove(this.sg._TIME+n),$it.$storage.nremove(this.sg._THREAD+n),$it.$storage.nremove(this.sg._CONTENT+n)),$it.$storage.nremove(this.sg._STATUS+n);$it.$storage.nremove(this.sg._POSITION);$it.$storage.nremove(this.sg._LENGTH)}},function(){if($it.BC)return!1;$it.domloaded("bwsput",$it.afterExec);var i,n,t,r={main:{".main_content .bg_td":"background-image:url("+$it.path._TOP_LEFT+")",".main_content .box_right":"background-image:url("+$it.path._TOP_RIGHT+")",".main_content .box_body":"background-image:url("+$it.path._TOP_BODY+")",a:"outline:none",hr:"border-style:solid; border-color:#aaa;","#container img":"vertical-align: -0.2em;","#container":"line-height:1.3em;","#content_size .line":"margin:0.2em 0;border-top:1px #aaa dotted;","#bp3":"display:none; margin:0.3em 0; width:150px; height:150px; background: url("+$it.path._QR_IMAGE+") no-repeat 0px 0px;"},sub:{textarea:"font-size:90%; width:90%; line-height:1.4em;"}};window.opera&&$it.addCSS({"*":pro});$it.addCSS(r.main);$it.SP||$it.addCSS(r.sub);i=document.createElement("link");i.setAttribute("href",$it.path._FAVICON);i.setAttribute("rel","shortcut icon");document.getElementsByTagName("head")[0].appendChild(i);n=(new Date).getHours();n>=0&&n<=5?t=$it.path._BG1:n>=6&&n<=11?t=$it.path._BG2:n>=12&&n<=17?t=$it.path._BG3:n>=18&&n<=23&&(t=$it.path._BG4);try{document.body.style.backgroundImage="url("+t+")"}catch(i){}($it.MSIE&&$it.MSIE<=7&&($it._NEWA=$it.path._IE7),$it.checkCookie()&&$it.$storage.get($it._SG_GEAR_NAME)!==""&&($it.path._GEAR_IMAGE=$it.$storage.get($it._SG_GEAR_NAME)),$it.SP)&&($it.setCookie($it._SIDE_MENU,"0",$it.$origin.cpath,1),$it.addCSS($it.mobj.css),$it.addListener(window,"resize",$it.set_winsize),($it.getCookie($it._SF)==""||$it.getCookie($it._SF)=="0")&&($it.set_winsize(),document.write($it.$origin.query.j===""?$it.mobj._JISHIN.replace($it.mobj._JISHIN_TEST,"$1-test"):$it.mobj._JISHIN)))}();$it.modal_open=function(n){function e(){var i,n;this.size="77%";$it.SP&&($it.getCookie($it._SF)==""||$it.getCookie($it._SF)=="0")&&(this.width="300",this.size="75%");$(".modal-btn2").html(this.text).css({width:this.width+"px","margin-left":t.widthOffset(this.width),"text-align":this.align,"font-size":this.size});this.add!==!1&&(n=$(".modal-btn2"),n.append(this.add),i={ex1:u(n.find("input:eq(0)").attr("id")),ex2:u(n.find("input:eq(1)").attr("id"))});this.button?$(".modal-btn2").append($('<div class="modal-btn3"><div id="out" class="modal-close modal-close2">'+t._M_CANCEL+'<\/div><div class="modal-btn3 modal-close2"><div id="in" class="modal-close">'+this.button+"<\/div><div>")):$(".modal-btn2").append($('<div class="modal-btn3"><div id="in" class="modal-close">'+t._M_CLOSE+"<\/div><\/div>"));$(".modal-btn2").css({"margin-top":t.heightOffset($(".modal-btn2").height())});o($("#modal-body")[0]);o($("#modal-main")[0]);$("#in, #out, #modal-body").on({click:function(n){n.preventDefault();n.stopPropagation();var t=Object.prototype.toString.call(n.data.call).slice(8,-1),i=$(this).attr("id");if(n.data.button&&i==="in"&&t=="Function"){if($(".modal-btn1, .modal-btn2").remove(),typeof n.data.add=="object"&&t==="Function"){n.data.call(n.data.add.ex1.checked,n.data.add.ex2.checked);return}}else if($(".modal-btn1, .modal-btn2").fadeOut(500,function(){$(this).remove()}),n.data.button&&(i==="out"||i==="modal-body"))return;t==="Function"&&n.data.call()}},{call:this.callback,button:this.button,add:i})}function s(){$(".modal-btn2").html(t._M_ERROR).append($("<span>",{on:{click:function(){return location.reload(),!1}},text:t._M_RELOAD,css:{"text-decoration":"underline",color:"#0044FF"}})).append('<span id="rerror"><\/span>').css({"font-size":"77%","margin-top":t.heightOffset($(".modal-btn2").height()),"margin-left":t.widthOffset($(".modal-btn2").width())});var n=5,i=setInterval(function(){$(".modal-btn2 #rerror").html("&nbsp;..."+n);--n<0&&($(".modal-btn1, .modal-btn2").remove(),clearInterval(i))},1e3);return!1}function o(n){for(var i=["contextmenu","selectstart","dragdrop","drag","drapStart","dragend","copy","cut","past","mouseup","mouseout"],t;t=i.shift();)$it.addListener(n,t,function(n){var t=n||window.event,i=n.target||event.srcElement;return $it.MSIE?(t.cancelBubble=!0,t.returnValue=!0,!1):(t.stopPropagation(),t.preventDefault(),window.getSelection().removeAllRanges(),!1)})}var u=$it.$id,t={widthOffset:function(n){return Math.round(-(n/2)+(document.body.scrollLeft||document.documentElement.scrollLeft))},heightOffset:function(n){return Math.round(-(n/2)+(document.body.scrollTop||document.documentElement.scrollTop))},innerWidth:Math.round(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),innerHeight:Math.round(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight),_M_CLOSE:"閉じる Ｘ",_M_CANCEL:"キャンセル",_M_ERROR:"[エラー]リトライ失敗: ",_M_RELOAD:"ページ再読込 ",_M_RETRY:"[エラー]: 読み込みできません",css:{body:"position:static; top:0; left:0; right:0; bottom:0",".modal-btn1":"z-index:2147483646; width:100%; height:100%; background-color:#000; position:fixed; top:0; left:0; _position:absolute; _top:expression(document.documentElement && document.documentElement.scrollTop || document.body && body.scrollTop || 0 + 'px'); _left:expression(document.documentElement && document.documentElement.scrollLeft || document.body && body.scrollLeft ||  0 + 'px'); opacity:0.45; -moz-opacity:0.45; filter:alpha(opacity=45);",".modal-btn2":"z-index:2147483647; cursor:default; overflow:auto; position:absolute; top:50%; left:50%; height:auto; padding:0.5em 0.7em; line-height:1.6em; color:#111; background-color:#f2f2f2; --border:1px #AAA solid; border-radius:4px; -webkit-border-radius:4px; box-sizing:border-box; -ms-box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;box-shadow:rgba(53, 50, 150, 0.24) 0px 0px 6px 3px inset;-webkit-box-shadow:rgba(14, 27, 28, 0.33) 0px 0px 3px 3px inset;-moz-box-shadow:rgba(14, 27, 28, 0.33) 0px 0px 3px 3px inset;",".modal-btn3":"text-align:center; margin-top:0.8em",".modal-close":"margin:0 auto; text-align:center; width:6em; font-size:100%; border:1px #aaa solid; background-color:#dadada; border-radius:4px; -webkit-border-radius:4px;",".modal-close2":"margin:0 0 0 1em;float:right",".modal-close:hover":"background-color:#E0B6E6;"}},r,i,f;for(u($it._JISHIN_ID2)!=null||u($it._JISHIN_ID1)!=null?$it.addCSS(t.css):$it.cssSearch(".modal-btn1")==!1&&$it.addCSS(t.css),r=["add","url","width","height","align","button","callback"],i=0;i<r.length;i++)(typeof n[r[i]]=="undefined"||n[r[i]]===null||n[r[i]]==="")&&(n[r[i]]=!1);$("body").append('<div id="modal-body" class="modal-btn1"><\/div>');$("body").append('<div id="modal-main" class="modal-btn2"><\/div>');$(".modal-btn2").append('<div style="text-align:center"><img src="'+$it._READING+'">').css({width:n.width+"px","font-size":"70%"});$(".modal-btn2").css({"margin-left":t.widthOffset($(".modal-btn2").width()),"margin-top":t.heightOffset($(".modal-btn2").height())});n.url?(f=0,function(){var i=arguments.callee;$.ajax({type:"GET",url:n.url,scriptCharset:"UTF-8",dataType:"jsonp",cache:!1,jsonpCallback:"callBackFunction",crossDomain:!0,async:!0,timeout:3e3,statusCode:{200:function(){},404:function(){}},data:{v:$it.$origin.update.substring(3)}}).done(function(t,i){t.width=n.width;t.height=n.height;t.align=n.align;t.button=n.button;t.callback=n.callback;e.call(t,i)}).fail(function(n,r,u){try{if(++f>=3)throw f;switch(n.status){case 403:case 404:throw n.status+" "+n.statusText;default:setTimeout(i,0)}}catch(u){u==3?s():e.call({text:t._M_RETRY,width:"240",height:"0",align:"center"})}}).always(function(){})}()):n.text&&e.call(n)}