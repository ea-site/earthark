$it.newcount=function(){function b(){var f,t,o,u;if($it.SP&&($it.getCookie($it._SF)==""||$it.getCookie($it._SF)=="0"))$("#container a").eq(0).remove(),$("#container a").eq(0).remove(),$("#container a").eq(0).remove(),t=i("thread").innerHTML,t=t.replace(/\[|\]\[|\]/gi,""),t=t.replace(/<font.*>|<\/font>/ig,""),t=t.replace(/(ｽﾚ.+\))<br>/i,n.head),t=t.replace(/<BR>/i,"<\/div>"),i("thread").innerHTML=t,i("tht").style.cssText="width:"+($("#tht").find("span").width()+16)+"px";else for(f=function(){$(this).attr("href",(/.+\/(\w+\.\w+)$/i.test($(this).attr("href")),r.base+RegExp.$1))},f.call($(".bg_td").find("a")),$("#mnavi").find("a").each(function(){f.call($(this))}),t=i("thread").innerHTML,t=t.replace(/<font.*>|<\/font>/ig,""),t=t.replace(/(ｽﾚ.+\))<br>/i,n.head),t=t.replace(/<BR>/i,"<\/div>"),i("thread").innerHTML=t,i("tht").style.cssText="width:"+($("#tht").find("span").width()+16)+"px",o=$("#container a"),u=3;u--;)e=o[u],e.className=n.reload.cn,e.onfocus=function(){this.blur()},e.previousSibling.parentNode.removeChild(e.previousSibling),e.nextSibling.nodeValue==="]"&&e.nextSibling.parentNode.removeChild(e.nextSibling),u>=2&&(e.title=n.reload.msg,e.href="javascript:void(0)",e.onclick=function(){location.href=location.pathname+"?v="+(new Date).getTime()})}function k(){if(a(f("hr")[5]),$("hr").eq(1).replaceWith($(n.onhead).html(n.cookie?n.onbody:n.offcode)),n.cookie){var t=$("#display");$it.SP||t.append(n.onframe);t.append(n.onfsreset);t.append(n.onclear);$it.SP&&($it.getCookie($it._SF)==""||$it.getCookie($it._SF)=="0")&&($(".newcnt").css("float","none"),$("#help").css({"border-right":"1px #AAA solid"}));$it.charSize({id:"btn4",char:n.char,name:$it._CSIZE_FLAG1,type:!0,rw:!1});h();!$it.IM()&&$it.FM()&&(n.dispCtrlTag("hr",4),y())}}function d(){n.linePlace("container",3);try{a(f("hr")[1])}catch(i){}n.cookie&&(t.get($it._THREAD_IS)===""&&(t.set($it._THREAD_IS,"lazy",n.EXP),t.set($it._THREAD_ACTIVE,"on",n.EXP)),o(),s())}function o(){t.get($it._THREAD_ACTIVE)==="on"?(i("thon").style.backgroundColor="EB1",i("thoff").style.backgroundColor="#E0DD11"):(i("thon").style.backgroundColor="#E0DD11",i("thoff").style.backgroundColor="#EB1")}function s(){var f=i("container").childNodes,h=document.createElement("span"),o;h.name="sta";h.className="thcss";h.innerHTML="-&nbsp;";o=document.createElement("span");o.id="thid";o.name="sta";o.className="thcol";for(var c=n.cookie?t.get($it._THREAD_ACTIVE)==="on":!1,r,l,a,u=0,p=f.length,v,e,s,y=0;u<p;u++)if(/\/(\d+)\/.+\((\d+)\)<\/a>$|db-w/i.test(f[u].outerHTML)){if(e="th"+RegExp.$1,s=n.ckData[e]=RegExp.$2,f[u].previousSibling.parentNode.replaceChild(c?h.cloneNode(!0):document.createTextNode("●"),f[u].previousSibling),r=f[u].nextSibling,r.nodeName==="BR"){t.set(e,"T"+s,n.EXP);continue}if(/E6D9\.gif/i.test(r.src)){if(r.nextSibling.nodeName==="BR")continue;r.nextSibling.nextSibling.src=$it._NEWA}else r.nextSibling.src=$it._NEWA,r.nextSibling.style.width="32px",r.nextSibling.style.height="16px";c&&((l=t.get(e))===""&&t.set(e,l="T"+(s-1),n.EXP),a=o.cloneNode(!0),a.innerHTML=function(){return(v=s-l.substr(1))<=0?(t.set(e,"T"+s,n.EXP),"# "):(y+=v,v+" ")}(),f[u].previousSibling.parentNode.replaceChild(a,f[u].previousSibling))}i("sum").innerHTML=c?y:"×"}function g(){if(n.cookie){for(var r,t=n.idlist2,u=[],f=t.length,i=0;i<f;i++)u[i]="#"+t[i];$(u.join(",")).on({mouseover:function(){if(r=$(this).css("background-color"),$(this).attr("id")===t[7]){if($(this).text().substr(0,1)!=="#")return;$(this).addClass("tt1").css("color","#0044FF").append($("<div>"+n.ctmess+"<\/div>").addClass("plm").show("slow"))}else $(this).addClass("tt2").css("background-color","#E6B0E6").append($("<div>"+$(this).attr("dtext")+"<\/div>").addClass("tooltips").show("slow"))},mouseout:function(){$(this).attr("id")===t[7]?$(this).css({color:"#FF3300"}):$(this).css({"background-color":r});$(this).find("div").remove();o()},click:function(){switch($(this).attr("id")){case t[0]:return l.call(["on",n.cton,n.ctset]);case t[1]:return l.call(["off",n.ctoff,n.ctreset]);case t[2]:return $it.modal_open({url:$it.path._HELP,text:null,width:380,height:0,align:"left",button:null,callback:null});case t[3]:return $it.modal_open({url:null,text:n.fmmenu1,width:240,height:0,align:"center",button:n.fmbotton,callback:y});case t[4]:return $it.modal_open({url:null,text:n.fmmenu2,width:240,height:0,align:"center",button:n.fmbotton,callback:function(){v()}});case t[5]:$it.charSize({id:this.id,char:"文字:",name:$it._CSIZE_FLAG1,type:!0,rw:!0});break;case t[6]:return l.call(["clr",n.ctremove])}}})}}function nt(){n.cookie&&$it.IM()!=""&&v()}function v(){$it.setCookie("mm","1",r.cpath,1);$(window).scrollTop(Math.round($it.boxInfo.offsetHeight($("#thread")[0])));$(".newcnt").css("float","none");n.dispCtrlId(["btn2","btn3","btn4"],!1);$("table:eq(2)").find("tr:eq(0)").append(n.inlinecd);$("#tbinframe").attr("src",c("_inframe")).css({width:"100%",height:Math.round($("table tr:eq(2)").height())});$("#ncd").after(n.inlinemsg);$("#box6").click(function(){return $it.clearCookie("mm",r.cpath),c("_top"),$("table tr:eq(2)").find("td:eq(1)").remove(),$(".newcnt").css("float","left"),n.dispCtrlId(["btn2","btn3","btn4"],!0),$("#box6").remove(),!1})}function h(){(i(n.nmctrl.id2).onclick=function(){t.set(n.nmctrl.fg,"",n.nmctrl.exp);h()},t.get(n.nmctrl.fg)!=="1")&&(n.dispCtrlId([n.nmctrl.id1],!1),n.dispCtrlId([n.nmctrl.id3],!0),i(n.nmctrl.id3).onclick=function(){t.set(n.nmctrl.fg,"1",n.nmctrl.exp);n.dispCtrlId([n.nmctrl.id1],!0);n.dispCtrlId([n.nmctrl.id3],!1)})}function c(n){var t=/\/(\d+)\//i,i=/writing[\d]?\./i;return $("#container a").filter(function(){return t.test($(this).attr("href"))||i.test($(this).attr("href"))}).attr("target",n),$("#thb").find("a:eq(0)").attr("target",n),$("#thb").find("a:eq(1)").attr("target",n),$("[target="+n+"]:eq(2)").attr("href")}function l(){if(this[0]=="clr"){var u=function(i,u){var e=[0,0],c,f=n.sflags,i,l;if(t.has){t.remove(f.shift());t.remove(f.shift());for(key in n.ckData)console.log(key),t.remove(key)}if(i){if(t.has)while(c=f.shift())t.remove(c);for(f=n.cflags;c=f.shift();)$it.clearCookie(c,r.cpath);e[0]=1}t.has&&u&&($it.his.sgClear(),e[1]=1);i=n.cbox.msg;l=i.m1+i.m4;e[0]&&(l+="<br>"+i.m2+i.m4);e[1]&&(l+="<br>"+i.m3+i.m4);$it.modal_open({text:l,width:200,height:0,align:"center"});o();s();h();return};i($it.jishin_id2)!=null||i($it.jishin_id1)!=null?$it.addCSS(n.cbox.css):$it.cssSearch(".select-reset")==!1&&$it.addCSS(n.cbox.css);$it.modal_open({add:n.cbox.html,url:null,text:this[1],width:260,height:0,align:"center",button:"リセット",callback:u})}else t.get($it._THREAD_ACTIVE)===this[0]?$it.modal_open({text:this[1],width:200,height:0,align:"center",callback:null}):(t.set($it._THREAD_ACTIVE,this[0],n.EXP),$it.modal_open({text:this[2],width:200,height:0,align:"center"}),s())}function y(){var e={main:{"#content_size":"float:none;","#thread":"z-index:1; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;","#container #thb":"margin:0.4em 0;","#container a":"padding:0; line-height:1.2em;","#container a:link":"color:#0055FF;text-decoration:none;","#container a:visited":"color:#0055FF;text-decoration:none;","#container a:hover":"background-color:#FFEE66;text-decoration:none;","#container":"width:100%;","#setframe .framehead":"background-color:#EEEEFF;border:2px #CCC solid; border-radius:7px;-webkit-border-radius:7px;margin:0; padding:0.5em 0;-moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;"+$it.gradi("white","#DDD_DFF"),"#setframe .selecthead":"cursor: default; width:9em; vertical-align:middle; padding:0.4em 0.6em; text-align:center; margin:0 auto; color:#FFF; font-weight:bold; font-size:100%; background-color:#FFF; border-radius:4px; -webkit-border-radius:4px;background-color:#60A0D0; box-shadow: 1px 1px 2px black;"},mainIE:{"#display":"font-size:70%;"}},f,u,i;$it.MSIE&&$it.addCSS(e.mainIE);$it.addCSS(e.main);$it.setCookie($it._SIDE_MENU,"1",r.cpath,1);n.displayOff();n.dispCtrlId(["btn2","btn3","btn4"],!1);$(window).scrollTop(0);$("body").css("background-image","url("+$it.path._FRAME_BG+")");$("hr:first").replaceWith('<div style="border-top:1px #aaa solid; margin:0; padding:0"><\/div>');var t=$("div:first").offset().top+1,i=$("#content_size").offset().left,u=360;$("#setframe").append('<div id="box" class="framehead"><div id="chk" class="selecthead" title="通常画面へ戻る">通常画面へ戻る<\/div>');f=function(n,t,i,r){return{position:"absolute",top:i,left:r,width:n,height:t}};$("#box").css(f(u+"px","auto",t,i));$("#chk").on({mouseover:function(){$(this).css("background-color","#80D0E0")},mouseout:function(){$(this).css("background-color","#60A0D0")},click:function(){return $it.clearCookie($it._SIDE_MENU,r.cpath),location.reload(),!1}});$("#thread").css(f(u+"px",$it.boxInfo.innerHeight-8-(t-$it.boxInfo.scrollTop)-$it.boxInfo.offsetHeight($("#box")[0])+"px",$it.boxInfo.bottom($("#box")[0])+2,i));u=$it.boxInfo.right($("#content_size")[0])-$it.boxInfo.right($("#thread")[0]);i=$it.boxInfo.right($("#thread")[0])+2,function(i,r,u){$("#onframe").attr({src:c("_frame"),width:i,height:$it.boxInfo.innerHeight-8-(t-$it.boxInfo.scrollTop),frameBorder:"0",scrolling:"auto",style:"display:block; position:absolute; border-radius:7px; -webkit-border-radius:7px; top:"+r+"; left:"+u}).on("load",function(){var t=$("#thread")[0];if(t!=""&&t!=null){t=n.getStyle(t);t=t.borderTopWidth+" "+t.borderTopStyle+" "+t.borderTopColor;var u=2,i=$("#thread")[0].style,r=0,f=setInterval(function(){(i.border=(r=~r)?t:"3px #0A0 solid",u--)||(i.border=t,clearInterval(f))},200);return!1}})}(u,t,i)}var r=$it.$origin,t=$it.$storage,i=$it.$id,tt=$it.$class,f=$it.$TagName,it=$it.$Name,rt=$it.cText,p=$it.$ce,a=$it.$rm,w=$it.$Replace,ut=$it.$Before,u,n;if($it.BC)return!1;u={css:{"#thread .gm":"float:right; width:16px; height:24px; background: url("+$it.path._GEAR_IMAGE+") no-repeat 0px 3px;","#display":"margin:0; padding:0.3em;color:#555;font-size:70%;background-color:#E3E3EE;border:1px #aaa solid;border-radius:5px;-webkit-border-radius:5px;"+$it.gradi("#F1F1F1","#D0E0E0"),"#display .newcnt":"width:76px;  margin:0.1em 0; padding:0.1em 0.3em; background-color:#B2f2B4; text-align:center; float:left;","#display .guide":"color:#0044FF; margin:0.1em 0; padding:0.1em 0.7em; background-color:#E0e011; border-left:1px #AAA solid; text-align:center; float:left;","#display .fmcss":"color:#eee; margin:0.1em 0 0.2em 0.5em; padding:0.1em 0.7em; background-color:#00A090; border-radius:5px; -webkit-border-radius:5px; text-align:center; float:left;","#display .rscss":"background-color:#2290E4;","#display .thsum":"color:#EE5500;","#container .tt1":"position:relative; cursor:pointer;","#container .plm":"z-index:1000;_line-height:1.5em; cursor: default; color: #FFF; white-space: nowrap; font-size:80%; position:absolute; top: 1.5em; left:3.4em; background-color: #2266FF; padding: 0.3em 0.6em; border-radius: 5px; box-shadow: 1px 1px 2px silver;","#container .plm:after":"width: 100%; content:''; display: block; position: absolute; left: 0.5em; top: -8px; border-top:8px solid transparent; border-left:8px solid #2266FF;","#display .tt2":"position:relative; cursor:pointer;","#display .tooltips":"z-index:10;_line-height:1.5em; cursor: default; color: #FFF; white-space: nowrap; font-size:100%; position:absolute; top: 2.4em; left:0.7em; background-color: #2266FF; padding: 0.4em 0.7em; border-radius: 5px; box-shadow: 1px 1px 2px silver;","#display .tooltips:after":"width: 100%; content:''; display: block; position: absolute; left: 0.5em; top: -8px; border-top:8px solid transparent; border-left:8px solid #2266FF;","#container #nop":"float:right;font-size:75%;background-position:-0px 7px","#container #tht":"float:left; margin:0.2em 0.4em 0.3em 0; padding:0 0; font-size:90%; text-align:center; background-color:#B2f2B4;border-radius:5px;-webkit-border-radius:5px;","#container .thcss":"color:#11BB11;",".thcol":"font-size:90%;color:#FF3300;","#thb .ta":"text-decoration:none; margin:0 0.3em 0 0; padding:0.0em 0.4em; font-size:80%; background-color:#FFFFCC; border:1px #BBB solid; border-radius:5px;-webkit-border-radius:5px;","#thb a:hover":"background-color:#FFEE44;"},opera:{"#display":"font-size:70%;margin:0.2em","#display .guide":"margin:0.2em 0; padding:0.2em 0.7em;","#display .newcnt":"margin:0.2em 0; padding:0.2em 0.3em;","#display .fmcss":"margin:0.1em 0 0.2em 0.5em; padding:0.2em 0.7em;"}};n={init_css:function(){$it.addCSS(u.css);window.opera&&$it.addCSS(u.opera)},linePlace:function(n,t){for(var r,u=p("div"),f=i(n);t--;)(r=u.cloneNode(!0)).className="line",w(r,f.getElementsByTagName("hr")[0])},getStyle:function(n){return n.currentStyle||document.defaultView.getComputedStyle(n,"")},dispCtrlTag:function(n,t){f(n)[t].style.display="none"},dispCtrlId:function(n,t){for(var r;(r=n.shift())!==undefined;)try{i(r).style.display=t?"block":"none"}catch(u){continue}},displayOff:function(){$it.FM()&&n.dispCtrlId(this.idlist1,!1)},css:u,ckData:{},EXP:"14",cookie:$it.checkCookie(),cflags:[$it._SIDE_MENU,$it._CSIZE_FLAG2,$it._SF],sflags:[$it._THREAD_IS,$it._THREAD_ACTIVE,"if",$it._SG_GEAR_NAME,$it._NEW_MENU_FLAG,$it._HEADER_FLAG,$it._USER_W_FLAG,$it._CSIZE_FLAG1,$it._HEADER_KIND,$it._HEADER_KEEP],idlist1:["pr","gd","contact","sb3g1","ac","mnavi","ana","bgparts","inelem"],idlist2:["thon","thoff","help","btn2","btn3","btn4","btn5","thid"],nmctrl:{fg:$it._NEW_MENU_FLAG,id1:"display",id2:"ncd",id3:"nop",exp:365},head:'<div id="tht"><span class="intht">$1<\/span><\/div><div id="nop" class="gm" style="display:none"><\/div><div id="thb" style="clear:both">',onhead:'<dl id="display" class="guide"><\/dl>',onbody:'<dd class="newcnt">新着件数: <span id="sum" class="thsum"><\/span><\/dd><dd id="thon" class="guide" dtext="新着通知の開始">有効<\/dd><dd id="thoff" class="guide" dtext="新着通知の停止">無効<\/dd><dd id="help" class="guide" dtext="詳しい説明">説明<\/dd>',onframe:'<dd id="btn2" class="fmcss" dtext="スレッドと投稿を同時表示(Type-A)">分割表示A<\/dd><dd id="btn3" class="fmcss" dtext="スレッドと投稿を同時表示(Type-B)">分割表示B<\/dd>',onfsreset:'<dd id="btn4" class="fmcss" dtext="文字サイズ">文字<\/dd><dd id="btn5" class="fmcss rscss" dtext="新着/設定リセット">リセット<\/dd><div id="ncd" class="gm"><\/div>',offcode:'<dd style="color:#D00" class="ckcss">※ブラウザのCookie(クッキー)が無効です。有効にすると新着通知機能が利用できます。<\/dd>',onclear:'<dd style="clear:both;"><\/dd>',cton:"既に有効になっています",ctset:"新着件数通知を有効にしました",ctoff:"既に無効になっています",ctreset:"新着件数通知を無効にしました",ctremove:"新着件数をリセットします<br>[NEW]表示がある時は1件になります",ctmess:"投稿後に削除またはロックされています",fmmenu1:"分割画面のスタイルで表示します<br>【画面一杯に表示します(Type-A)】",fmmenu2:"分割画面のスタイルで表示します<br>【スレッド真横に表示します(Type-B)】<br><br>現在、試験運用中です",fmbotton:"移行する",char:"文字:",inlinecd:'<td style="width:56%;"><iframe src="" id="tbinframe" frameborder="0" name="_inframe"><\/iframe><\/div>',inlinemsg:'<dd id="box6" class="fmcss" style="clear:both; width:7em; margin:0;cursor:pointer">標準に戻す<\/dl>',reload:{cn:"ta",msg:"常に最新の状態で再読込します"},cbox:Object.create({css:{".select-reset":"text-align:left; margin-top:1em; line-height:1.8em",".recss":"vertical-align:0.2em"},html:'<div class="select-reset"><input value="" name="ren1" id="re1" type="checkbox"> <span class="recss">設定情報もリセットする<\/span><br><input value="" name="ren2" id="re2" type="checkbox"> <span class="recss">投稿履歴もリセットする<\/span><\/div>',msg:{m1:"新着件数",m2:"設定情報",m3:"投稿履歴",m4:"をリセットしました"}}),is:null};n.init_css();b();k();d();g();nt()};$it.addListener(window,"DOMContentLoaded",$it.newcount)