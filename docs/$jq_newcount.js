$it.addListener(window,"DOMContentLoaded",{global_obj:$it,handleEvent:function(){function b(){var i=r("thread").innerHTML,f,u,e;if(i=i.replace(/(<a name="top"><\/a>)/i,'$1<div id="headtop">'),i=i.replace(/(<a name="btm"><\/a>)/i,'$1<div id="headbottom">'),i=i.replace(/(最後<\/a>|\|次\|最後)/i,"$1<\/div>"),i=i.replace(/(設定<\/a>)/i,"$1<\/div>"),i=i.replace(/\[|\]\[|\]/gi,""),i=i.replace(/<font.*>|<\/font>/ig,""),i=i.replace(/(ｽﾚ.+\))<br>/i,t.head),i=i.replace(/<BR>/i,"<\/div>"),r("thread").innerHTML=i,console.log(i),["headtop","headbottom"].forEach(function(n){for(var i=r(n).childNodes,t=0;t<i.length;t++)i[t].nodeName=="#text"&&(i[t].data=""),i[t].nodeName=="A"&&(i[t].onfocus=function(){$(this).blur()},i[t].className="guidelink")}),n.SP&&(n.getCookie(n._SF)==""||n.getCookie(n._SF)=="0"))for(f=r("thb").childNodes,u=0;u<f.length;u++)f[u].nodeName=="A"&&(f[u].remove(),u--);else{for(f=r("thb").childNodes,u=0;u<f.length;u++)f[u].nodeName=="A"&&(f[u].rel="nofollow",f[u].className=t.reload.cn,f[u].onfocus=function(){$(this).blur()},f[u].textContent=="再読"&&(f[u].title=t.reload.msg,f[u].href=location.pathname+"?v="+(new Date).getTime()));t.cookie&&(r("thb").insertAdjacentHTML("beforeend",'<a class="'+t.reload.cn+'" rel="nofollow" id="top_btn" href="#" title="投稿した履歴">投稿履歴<\/a>'),e=["#top_btn","#bp"],n.hisRead($(e[0]),$(e[1])))}}function k(){if(o(f("hr")[6]),o(f("hr")[5]),$("hr").eq(1).replaceWith($(t.onhead).html(t.cookie?t.onbody:t.offcode)),t.cookie){var i=$("#display");n.SP||i.append(t.onframe);i.append(t.onfsreset);i.append(t.onclear);n.SP&&(n.getCookie(n._SF)==""||n.getCookie(n._SF)=="0")&&($(".newcnt").css("float","none"),$("#help").css({"border-right":"1px #AAA solid"}));n.charSize({id:"btn4",char:t.char,name:n._CSIZE_FLAG1,type:!0,rw:!1});c();!n.IM()&&n.FM()&&(t.dispCtrlTag("hr",4),y())}}function d(){t.linePlace("container",3);try{o(f("hr")[1])}catch(r){}t.cookie&&(i.get(n._THREAD_IS)===""&&(i.set(n._THREAD_IS,"lazy",t.EXP),i.set(n._THREAD_ACTIVE,"on",t.EXP)),s(),h())}function s(){i.get(n._THREAD_ACTIVE)==="on"?(r("thon").style.backgroundColor="EB1",r("thoff").style.backgroundColor="#E0DD11"):(r("thon").style.backgroundColor="#E0DD11",r("thoff").style.backgroundColor="#EB1")}function h(){var e=r("container").childNodes,c=document.createElement("span"),s;c.name="sta";c.className="thcss";c.innerHTML="-&nbsp;";s=document.createElement("span");s.id="thid";s.name="sta";s.className="thcol";for(var l=t.cookie?i.get(n._THREAD_ACTIVE)==="on":!1,u,a,v,f=0,w=e.length,y,o,h,p=0;f<w;f++)if(/\/(\d+)\/.+\((\d+)\)<\/a>$|db-w/i.test(e[f].outerHTML)){if(o="th"+RegExp.$1,h=t.ckData[o]=RegExp.$2,e[f].previousSibling.parentNode.replaceChild(l?c.cloneNode(!0):document.createTextNode("●"),e[f].previousSibling),u=e[f].nextSibling,u.nodeName==="BR"){i.set(o,"T"+h,t.EXP);continue}if(/E6D9\.gif/i.test(u.src)){if(u.nextSibling.nodeName==="BR")continue;u.nextSibling.nextSibling.src=n.path._NEWA}else u.nextSibling.src=n.path._NEWA,u.nextSibling.style.width="32px",u.nextSibling.style.height="16px";l&&((a=i.get(o))===""&&i.set(o,a="T"+(h-1),t.EXP),v=s.cloneNode(!0),v.innerHTML=function(){return(y=h-a.substr(1))<=0?(i.set(o,"T"+h,t.EXP),"# "):(p+=y,y+" ")}(),e[f].previousSibling.parentNode.replaceChild(v,e[f].previousSibling))}r("sum").innerHTML=l?p:"×"}function g(){if(t.cookie){for(var u,i=t.idlist2,f=[],e=i.length,r=0;r<e;r++)f[r]="#"+i[r];$(f.join(",")).on({mouseover:function(){if(u=$(this).css("background-color"),$(this).attr("id")===i[7]){if($(this).text().substr(0,1)!=="#")return;$(this).addClass("tt1").css("color","#0044FF").append($("<div>"+t.ctmess+"<\/div>").addClass("plm").show("slow"))}else $(this).addClass("tt2").css("background-color","#E6B0E6").append($("<div>"+$(this).attr("dtext")+"<\/div>").addClass("tooltips").show("slow"))},mouseout:function(){$(this).attr("id")===i[7]?$(this).css({color:"#FF3300"}):$(this).css({"background-color":u});$(this).find("div").remove();s()},click:function(){switch($(this).attr("id")){case i[0]:return a.call(["on",t.cton,t.ctset]);case i[1]:return a.call(["off",t.ctoff,t.ctreset]);case i[2]:return n.modal_open({url:n.path._HELP,text:null,width:380,height:0,align:"left",button:null,callback:null});case i[3]:return n.modal_open({url:null,text:t.fmmenu1,width:240,height:0,align:"center",button:t.fmbotton,callback:y});case i[4]:return n.modal_open({url:null,text:t.fmmenu2,width:240,height:0,align:"center",button:t.fmbotton,callback:function(){v()}});case i[5]:n.charSize({id:this.id,char:"文字:",name:n._CSIZE_FLAG1,type:!0,rw:!0});break;case i[6]:return a.call(["clr",t.ctremove])}}})}}function nt(){t.cookie&&n.IM()!=""&&v()}function v(){n.setCookie("mm","1",u.cpath,1);$(window).scrollTop(Math.round(n.boxInfo.offsetHeight($("#thread")[0])));$(".newcnt").css("float","none");t.dispCtrlId(["btn2","btn3","btn4"],!1);$("table:eq(2)").find("tr:eq(0)").append(t.inlinecd);$("#tbinframe").attr("src",l("_inframe")).css({width:"100%",height:Math.round($("table tr:eq(2)").height())});$("#ncd").after(t.inlinemsg);$("#box6").click(function(){return n.clearCookie("mm",u.cpath),l("_top"),$("table tr:eq(2)").find("td:eq(1)").remove(),$(".newcnt").css("float","left"),t.dispCtrlId(["btn2","btn3","btn4"],!0),$("#box6").remove(),!1})}function c(){(r(t.nmctrl.id2).onclick=function(){i.set(t.nmctrl.fg,"",t.nmctrl.exp);c()},i.get(t.nmctrl.fg)!=="1")&&(t.dispCtrlId([t.nmctrl.id1],!1),t.dispCtrlId([t.nmctrl.id3],!0),r(t.nmctrl.id3).onclick=function(){i.set(t.nmctrl.fg,"1",t.nmctrl.exp);t.dispCtrlId([t.nmctrl.id1],!0);t.dispCtrlId([t.nmctrl.id3],!1)})}function l(n){var t=/\/(\d+)\//i,i=/writing[\d]?\./i;return $("#container a").filter(function(){return t.test($(this).attr("href"))||i.test($(this).attr("href"))}).attr("target",n),$("#thb").find("a:eq(0)").attr("target",n),$("#thb").find("a:eq(1)").attr("target",n),$("[target="+n+"]:eq(2)").attr("href")}function a(){if(this[0]=="clr"){var r=function(r,f){var o=[0,0],l,e=t.sflags,r,a;if(i.has){i.remove(e.shift());i.remove(e.shift());for(key in t.ckData)console.log(key),i.remove(key)}if(r){if(i.has)while(l=e.shift())i.remove(l);for(e=t.cflags;l=e.shift();)n.clearCookie(l,u.cpath);o[0]=1}i.has&&f&&(n.his.sgClear(),o[1]=1);r=t.cbox.msg;a=r.m1+r.m4;o[0]&&(a+="<br>"+r.m2+r.m4);o[1]&&(a+="<br>"+r.m3+r.m4);n.modal_open({text:a,width:200,height:0,align:"center"});s();h();c();return};n.cssSearch(".select-reset")==!1&&n.addCSS(t.cbox.css);n.modal_open({add:t.cbox.html,url:null,text:this[1],width:260,height:0,align:"center",button:"リセット",callback:r})}else i.get(n._THREAD_ACTIVE)===this[0]?n.modal_open({text:this[1],width:200,height:0,align:"center",callback:null}):(i.set(n._THREAD_ACTIVE,this[0],t.EXP),n.modal_open({text:this[2],width:200,height:0,align:"center"}),h())}function y(){var o={main:{"#content_size":"float:none;","#thread":"z-index:1; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;","#container #thb":"margin:0.4em 0;","#container a":"padding:0; line-height:1.2em;","#container a:link":"color:#0055FF;text-decoration:none;","#container a:visited":"color:#0055FF;text-decoration:none;","#container a:hover":"background-color:#FFEE66;text-decoration:none;","#container":"width:100%;","#setframe .framehead":"background-color:#EEEEFF;border:2px #CCC solid; border-radius:7px;-webkit-border-radius:7px;margin:0; padding:0.5em 0;-moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;"+n.gradi("white","#DDD_DFF"),"#setframe .selecthead":"cursor: default; width:9em; vertical-align:middle; padding:0.4em 0.6em; text-align:center; margin:0 auto; color:#FFF; font-weight:bold; font-size:100%; background-color:#FFF; border-radius:4px; -webkit-border-radius:4px;background-color:#60A0D0; box-shadow: 1px 1px 2px black;"},mainIE:{"#display":"font-size:70%;"}},e,f,r;n.MSIE&&n.addCSS(o.mainIE);n.addCSS(o.main);n.setCookie(n._SIDE_MENU,"1",u.cpath,1);t.displayOff();t.dispCtrlId(["btn2","btn3","btn4"],!1);$(window).scrollTop(0);$("body").css("background-image","url("+n.path._FRAME_BG+")");$("hr:first").replaceWith('<div style="border-top:1px #aaa solid; margin:0; padding:0"><\/div>');var i=$("div:first").offset().top+1,r=$("#content_size").offset().left,f=360;$("#setframe").append('<div id="box" class="framehead"><div id="chk" class="selecthead" title="通常画面へ戻る">通常画面へ戻る<\/div>');e=function(n,t,i,r){return{position:"absolute",top:i,left:r,width:n,height:t}};$("#box").css(e(f+"px","auto",i,r));$("#chk").on({mouseover:function(){$(this).css("background-color","#80D0E0")},mouseout:function(){$(this).css("background-color","#60A0D0")},click:function(){return n.clearCookie(n._SIDE_MENU,u.cpath),location.reload(),!1}});$("#thread").css(e(f+"px",n.boxInfo.innerHeight-8-(i-n.boxInfo.scrollTop)-n.boxInfo.offsetHeight($("#box")[0])+"px",n.boxInfo.bottom($("#box")[0])+2,r));f=n.boxInfo.right($("#content_size")[0])-n.boxInfo.right($("#thread")[0]);r=n.boxInfo.right($("#thread")[0])+2,function(r,u,f){$("#onframe").attr({src:l("_frame"),width:r,height:n.boxInfo.innerHeight-8-(i-n.boxInfo.scrollTop),frameBorder:"0",scrolling:"auto",style:"display:block; position:absolute; border-radius:7px; -webkit-border-radius:7px; top:"+u+"; left:"+f}).on("load",function(){var n=$("#thread")[0];if(n!=""&&n!=null){n=t.getStyle(n);n=n.borderTopWidth+" "+n.borderTopStyle+" "+n.borderTopColor;var u=2,i=$("#thread")[0].style,r=0,f=setInterval(function(){(i.border=(r=~r)?n:"3px #0A0 solid",u--)||(i.border=n,clearInterval(f))},200);return!1}})}(f,i,r)}var n=this.global_obj,u=n.$origin,i=n.$storage,r=n.$id,tt=n.$class,f=n.$TagName,it=n.$Name,rt=n.cText,p=n.$ce,o=n.$rm,w=n.$Replace,ut=n.$Before,e,t;if(n.BC)return!1;e={css:{".guidelink":"display: inline-block; text-align:center; width: 2.2em; line-height:1.4em; margin:0 0.4em 0 0; padding:0 0.4em;font-size:80%; background-color:#E1F7F7; border:1px #BBB solid; border-radius:5px;-webkit-border-radius:5px;","#headtop a:hover":"text-decoration:none;background-color:#FFEE44;","#headbottom a:hover":"text-decoration:none;background-color:#FFEE44;","#thread .gm":"float:right; width:16px; height:24px; background: url("+n.path._GEAR_IMAGE+") no-repeat 0px 3px;","#display":"margin:0; padding:0.3em;color:#555;font-size:70%;background-color:#E3E3EE;border:1px #aaa solid;border-radius:5px;-webkit-border-radius:5px;"+n.gradi("#F1F1F1","#D0E0E0"),"#display .newcnt":"width:76px;  margin:0.1em 0; padding:0.1em 0.3em; background-color:#B2f2B4; text-align:center; float:left;","#display .guide":"color:#0044FF; margin:0.1em 0; padding:0.1em 0.7em; background-color:#E0e011; border-left:1px #AAA solid; text-align:center; float:left;","#display .fmcss":"color:#eee; margin:0.1em 0 0.2em 0.5em; padding:0.1em 0.7em; background-color:#00A090; border-radius:5px; -webkit-border-radius:5px; text-align:center; float:left;","#display .rscss":"background-color:#2290E4;","#display .thsum":"color:#EE5500;","#container .tt1":"position:relative; cursor:pointer;","#container .plm":"z-index:1000;_line-height:1.5em; cursor: default; color: #FFF; white-space: nowrap; font-size:80%; position:absolute; top: 1.5em; left:3.4em; background-color: #2266FF; padding: 0.3em 0.6em; border-radius: 5px; box-shadow: 1px 1px 2px silver;","#container .plm:after":"width: 100%; content:''; display: block; position: absolute; left: 0.5em; top: -8px; border-top:8px solid transparent; border-left:8px solid #2266FF;","#display .tt2":"position:relative; cursor:pointer;","#display .tooltips":"z-index:10;_line-height:1.5em; cursor: default; color: #FFF; white-space: nowrap; font-size:100%; position:absolute; top: 2.4em; left:0.7em; background-color: #2266FF; padding: 0.4em 0.7em; border-radius: 5px; box-shadow: 1px 1px 2px silver;","#display .tooltips:after":"width: 100%; content:''; display: block; position: absolute; left: 0.5em; top: -8px; border-top:8px solid transparent; border-left:8px solid #2266FF;","#container #nop":"float:right;font-size:75%;background-position:-0px 7px","#container #tht":"float:left; margin:0.2em 0.4em 0.3em 0; padding:0 0; font-size:90%; text-align:center; background-color:#B2f2B4;border-radius:5px;-webkit-border-radius:5px;","#container .thcss":"color:#11BB11;",".thcol":"font-size:90%;color:#FF3300;","#thb .ta":"text-decoration:none; margin:0 0.3em 0 0; padding:0.0em 0.4em; font-size:80%; background-color:#FFFFCC; border:1px #BBB solid; border-radius:5px;-webkit-border-radius:5px;","#thb a:hover":"background-color:#FFEE44;",".hiscss":"text-align:left; margin:0.3em 0; padding:0.4em; line-height:1.2em; font-size:90%; border:1px #aaa solid;  color:#111; border-radius:7px; -webkit-border-radius:7px; background-color:#eafaFF;",".btncss1":"padding:0.2em 0.6em 0 0.6em; margin-top:0.1em; font-size:100%; background-color:#AFA; border-radius:7px; -webkit-border-radius:7px;",".btncss2":"position:absolute; z-index:2; top:auto; background-color:#ec3;"},opera:{"#display":"font-size:70%;margin:0.2em","#display .guide":"margin:0.2em 0; padding:0.2em 0.7em;","#display .newcnt":"margin:0.2em 0; padding:0.2em 0.3em;","#display .fmcss":"margin:0.1em 0 0.2em 0.5em; padding:0.2em 0.7em;"}};t={init_css:function(){n.addCSS(e.css);window.opera&&n.addCSS(e.opera)},linePlace:function(n,t){for(var i,u=p("div"),f=r(n);t--;)(i=u.cloneNode(!0)).className="line",w(i,f.getElementsByTagName("hr")[0])},getStyle:function(n){return n.currentStyle||document.defaultView.getComputedStyle(n,"")},dispCtrlTag:function(n,t){f(n)[t].style.display="none"},dispCtrlId:function(n,t){for(var i;(i=n.shift())!==undefined;)try{r(i).style.display=t?"block":"none"}catch(u){continue}},displayOff:function(){n.FM()&&t.dispCtrlId(this.idlist1,!1)},css:e,ckData:{},EXP:"14",cookie:n.checkCookie(),cflags:[n._SIDE_MENU,n._CSIZE_FLAG2,n._SF],sflags:[n._THREAD_IS,n._THREAD_ACTIVE,n._NEW_MENU_FLAG,n._HEADER_FLAG,n._USER_W_FLAG,n._CSIZE_FLAG1,n._HEADER_KIND,n._HEADER_KEEP,n._SG_ISIMGFLAG,n._SG_GEAR_NAME,n._SG_NEWIMG_NAME,n._SG_LOADING_NAME],idlist1:["pr","gd","contact","sb3g1","ac","mnavi","ana","bgparts","inelem"],idlist2:["thon","thoff","help","btn2","btn3","btn4","btn5","thid"],nmctrl:{fg:n._NEW_MENU_FLAG,id1:"display",id2:"ncd",id3:"nop",exp:365},head:'<div id="tht"><span class="intht">$1<\/span><\/div><div id="nop" class="gm" style="display:none"><\/div><div id="thb" style="clear:both">',onhead:'<dl id="display" class="guide"><\/dl>',onbody:'<dd class="newcnt">新着件数: <span id="sum" class="thsum"><\/span><\/dd><dd id="thon" class="guide" dtext="新着通知の開始">有効<\/dd><dd id="thoff" class="guide" dtext="新着通知の停止">無効<\/dd><dd id="help" class="guide" dtext="詳しい説明">説明<\/dd>',onframe:'<dd id="btn2" class="fmcss" dtext="スレッドと投稿を同時表示(Type-A)">分割表示A<\/dd><dd id="btn3" class="fmcss" dtext="スレッドと投稿を同時表示(Type-B)">分割表示B<\/dd>',onfsreset:'<dd id="btn4" class="fmcss" dtext="文字サイズ">文字<\/dd><dd id="btn5" class="fmcss rscss" dtext="新着/設定リセット">リセット<\/dd><div id="ncd" class="gm"><\/div>',offcode:'<dd style="color:#D00" class="ckcss">※ブラウザのCookie(クッキー)が無効です。有効にすると新着通知機能が利用できます。<\/dd>',onclear:'<dd style="clear:both;"><\/dd>',cton:"既に有効になっています",ctset:"新着件数通知を有効にしました",ctoff:"既に無効になっています",ctreset:"新着件数通知を無効にしました",ctremove:"新着件数をリセットします<br>[NEW]表示がある時は1件になります",ctmess:"投稿後に削除またはロックされています",fmmenu1:"分割画面のスタイルで表示します<br>【画面一杯に表示します(Type-A)】",fmmenu2:"分割画面のスタイルで表示します<br>【スレッド真横に表示します(Type-B)】<br><br>現在、試験運用中です",fmbotton:"移行する",char:"文字:",inlinecd:'<td style="width:56%;"><iframe src="" id="tbinframe" frameborder="0" name="_inframe"><\/iframe><\/div>',inlinemsg:'<dd id="box6" class="fmcss" style="clear:both; width:7em; margin:0;cursor:pointer">標準に戻す<\/dl>',reload:{cn:"ta",msg:"常に最新の状態で再読込します"},cbox:Object.create({css:{".select-reset":"text-align:left; margin-top:1em; line-height:1.8em",".recss":"vertical-align:0.2em"},html:'<div class="select-reset"><input value="" name="ren1" id="re1" type="checkbox"> <span class="recss">設定情報もリセットする<\/span><br><input value="" name="ren2" id="re2" type="checkbox"> <span class="recss">投稿履歴もリセットする<\/span><\/div>',msg:{m1:"新着件数",m2:"設定情報",m3:"投稿履歴",m4:"をリセットしました"}}),is:null};t.init_css();b();k();d();g();nt()}})