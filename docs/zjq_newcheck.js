$it.addListener(window,$it.FM()?"load":"DOMContentLoaded",{global_obj:$it,handleEvent:function(){function k(n,t){var i=$it.$id("ax").innerHTML.length;console.log(i);g(n,function(){if($it.$id("ax").innerHTML.length==i){t();return}setTimeout(function(){$it.$id("ax").innerHTML.length==i?setTimeout(arguments.callee,0):(console.log($it.$id("ax").innerHTML.length),console.log("Chrome"),t())},0)})}function g(n,t){var i=0,r=function(){if(i++,i>=n){t&&t();return}clearTimeout(u);u=setTimeout(r,20)},u=setTimeout(r,20)}function l(t){var i={a:'<div><span class="zaq">',b:"<\/span><\/div>",css:{cursor:"pointer",margin:"1.4em 0","text-align":"right",border:"none","background-color":"transparent"},css2:{"text-align":"right",cursor:"pointer"},headerSet:function(t){var r=$(t.id).html("").css(this.css);r.append($(this.a+t.on+this.b).find("span").on({focus:function(){$(this).blur()},click:function(){$(this).parent().remove();n.set(t.cf,"1",90);t.exec();i.headerReset(t)}}))},headerReset:function(t){$(t.id).append($(this.a+t.off+this.b).css(this.css2));$(t.id).find("span:last").on({focus:function(){$(this).blur()},click:function(){n.set(t.cf,"",90);i.headerSet(t)}})}};$it.$id("radioid")==null&&$("#newout").append(t.html);n.get(t.cf)===""?i.headerSet(t):i.headerReset(t)}function a(){if(n.get($it._HEADER_FLAG)!=""){var r,t={id1:"rd1",id2:"rd2",id3:"rec",file:$it.path._RADIO,CookieFlag:$it._HEADER_KEEP,CookieData:$it._HEADER_KIND,mess3:function(n){return"【"+n+"】に設定しました"},arr:["rd1","sel","1","checked","見出し1 ","rd2","sel","2","","見出し2 ","rec","sel","","","設定を長期記憶"],body:'<div id="radioid" class="radiobtn"><input type="radio" /><span><\/span><input type="radio" /><span><\/span><input type="checkbox" /><span><\/span><\/div>',guide:'<a id="help" title="見出しの説明です" href="javascript:void(0)" class="subject">説明<\/a>',mem6:"記憶される期間は2年間です",mem1:"記憶される期間は90日間です",err:'<div id="radioid" class="radioerr">※ブラウザのCookie(クッキー)が無効です。有効にすると見出し拡張機能が利用できます。<\/div>'};if(!$it.checkCookie())return $("#newout").append($(t.err)),1;$("#newresid")[0]!=null?$("#newresid").before($(t.body).append(t.guide)):$("#newout").append($(t.body).append(t.guide));$("#radioid input").each(function(){$(this).attr({id:r=t.arr.shift(),name:t.arr.shift(),value:t.arr.shift(),checked:t.arr.shift()}).focus(function(){$(this).blur()}).next().text(t.arr.shift())});$("#radioid,#help").on({focus:function(){return this.id=="help"&&this.blur(),!1},click:function(r){var u=r.target;if(u.id==="help")return $it.modal_open({url:t.file,text:null,width:330,height:0,align:"left",button:null,callback:null}),!1;switch(u.type){case"radio":if(n.get(t.CookieData)==u.value)break;n.set(t.CookieData,u.value,i(t.id3).checked?730:90);$it.modal_open({url:null,text:t.mess3(i(u.id).nextSibling.innerHTML),width:200,height:0,align:"center",button:null,callback:function(){location.reload()}});break;case"checkbox":n.set(t.CookieFlag,u.checked,u.checked?730:90);n.set(t.CookieData,n.get(t.CookieData),u.checked?730:90);$it.modal_open({url:null,text:u.checked?t.mem6:t.mem1,width:200,height:0,align:"center",button:null,callback:null})}}});n.get(t.CookieFlag)===""&&(i(t.id3).checked="",n.set(t.CookieFlag,"false",90));n.get(t.CookieData)===""&&(i(t.id1).checked="checked",i(t.id2).checked="",n.set(t.CookieData,"1",90));i(t.id3).checked=n.get(t.CookieFlag)==="true"?"checked":"";(d=n.get(t.CookieData))=="2"?(i(t.id1).checked="",i(t.id2).checked="checked"):d=="1"&&(i(t.id1).checked="checked",i(t.id2).checked="")}}function nt(){var s;return;var t,f}function v(){var n="fsi",t="文字サイズ";$it.$class("post-guide")[0].insertAdjacentHTML("afterend",'<div id="fcid"><span id="fsi" title="文字サイズの変更">'+t+"<\/span><\/div>");$it.checkCookie()&&($it.charSize({id:n,char:t,name:$it._CSIZE_FLAG2,type:!1,rw:!1}),e=$it.$id(n),e.onfocus=function(){$(this).blur()},e.onclick=function(){$it.charSize({id:n,char:t,name:$it._CSIZE_FLAG2,type:!1,rw:!0})})}function tt(){var u,e,f,t,n;if($it.addCSS({".main_content":"margin-top: 38px",".zaq":"color:#FFF; background-color:#0A0; border-radius:6px;padding:0.3em 0.6em; box-shadow: 1px 1px 2px black;"+($it.MSIE()?"":$it.gradi("#1C1","#381")),"#newout #fsi":"cursor:pointer; color:#FFF; background-color:#0a0; border-radius:6px;padding:0.3em 0.6em; box-shadow: 1px 1px 2px black;"+$it.gradi("#1C1","#381"),"#newout #fcid":"text-align:right; margin:1em 0; padding:0.2em 0.4em;background-color:transparent","#newout #newresid":"margin:0.4em 0 0.8em 0;padding:0.4em 0.4em;font-size:94%;border:1px #AAA solid;background-color:#FFD;border-radius:5px;-webkit-border-radius:5px;","#newout #radioid":"font-size:94%; margin:0 0 0.5em 0;padding:0.2em 0.4em; background-color:#FFEEEE; border:1px solid #AAA;border-radius:5px;-webkit-border-radius:5px;",".sw":"font-size:80%;margin:0.1em 0; padding:0 0.6em; font-weight:normal; border:1px #088 solid;background-color:#00A090;color:#EEE;border-radius:5px; -webkit-border-radius:5px; box-shadow: 1px 1px 2px black;","#newout .post-guide":"line-height:2.0em;text-align:center;font-size:100%;margin:0.2em 0 0.6em 0;padding:0.4em;background-color:#DFEEFF; border-radius:7px; -webkit-border-radius:7px;"+$it.gradi("#e9e9e9","#D0e1e1"),"#newout .postting":"cursor:pointer; width: 5em;margin:0.3em auto;padding:0.5em 0.4em; line-height:1em; background-color:#11A0D4; color:#FFF; font-size:1.2em; vertical-align:middle;  border-radius:9px; box-shadow: 1px 1px 2px black;","#newout .postting:hover":"background-color:#E0B6E0;","#radioid input":"vertical-align: -0.1em;","#newout .subject":"display:block; cursor:pointer;text-decoration:none;  vertical-align:middle; width:36px; margin:0.2em; padding:0.1em 0.1em; color:#0044FF; font-size:90%; text-align:center; border:1px #aaa solid; background-color:#F2E0a2; border-radius:5px; -webkit-border-radius:5px;","#newout .radioerr":"text-align:center;color:#C00","#radioid span":"margin-left:0.3em","#container .ch1":"display:inline-block; vertical-align:middle; line-height:1.0em;line-height:1.4em; font-size:1.1em; margin:0 0.5em 0 0; padding:0.3em 1em; text-decoration:none;cursor:pointer; background-color:#11A0D4; color:#FFF; border-radius:5px;-webkit-border-radius:5px; box-shadow: 1px 1px 2px black;"+$it.gradi("#1CE","#17A"),"#container .ch1:hover":"background-color:#E0B6E0;","#container .ch2":"vertical-align:middle; font-size:120%; text-align:center; font-weight:bold; margin:0.5em 0; padding:0.6em 0.2em; background-color:#DDDDEE;border-radius:5px;-webkit-border-radius:5px;",".hiscss":"text-align:left; margin:0.3em 0; padding:0.4em; line-height:1.2em; font-size:90%; border:1px #aaa solid;  color:#111; border-radius:7px; -webkit-border-radius:7px; background-color:#eafaFF;",".btncss1":"padding:0.2em 0.6em 0 0.6em; margin-top:0.1em; font-size:100%; background-color:#AFA; border-radius:7px; -webkit-border-radius:7px;",".btncss2":"position:absolute; z-index:2; top:auto; background-color:#ec3;"}),$it.SP()&&$it.addCSS({"input[type=submit]":"padding: 0.5em;","#newout .postting":"font-weight:bold; margin:0.4em auto;padding: 0.5em 1.2em;","#newout #newresid":"line-height:1.9em;"}),$it.MSIE()?$it.addCSS({input:"font-size:86%; margin-top:0.2em;pading:0em 0.2em;line-height:-1.3em; vertical-align: -0.4em;",select:"margin-top:0.2em;",textarea:"margin-bottom:0.2em;"}):$it.addCSS({"input,select,textarea":"margin:0.1em 0.4em 0.2em 0em; padding:0 0.4em;border-radius:7px; -webkit-border-radius:7px;box-shadow: 1px 1px 3px silver;"}),$it._NEWA=$it.path._NEWA,u=$it.FM(),u){try{i("inelem").style.display="none"}catch(f){}try{i("bgparts").style.display="none"}catch(f){}$it.addCSS($it.MobileResize)}for(e={exec:u?$("#binf").remove():function(){try{$it.Replace(1)}catch(n){return function(){}}}(),event:u?function(){return window.parent.location.href=s.host?s.cpath:$it.path._INDEX,!1}:""},$("hr:eq(1)").remove(),e.exec,t=i("container").childNodes,n=0;t[n].nodeName!=="HR";n++)t[n].nodeName==="A"&&/一覧/i.test(t[n].textContent||t[n].innerText)?(t[n].href=t[n].href+"?v="+(new Date).toLocaleString(),t[n].className="ch1",t[n].title="レイジーフォーラム",t[n].onfocus=function(){this.blur()},t[n].onclick=e.event,t[n+1].parentNode.removeChild(t[n+1])):t[n].nodeName==="A"&&/┗/i.test(t[n-1].nodeValue)?(t[n].className="ch1",t[n].title=t[n].innerHTML,t[n].onfocus=function(){this.blur()},t[n-1].parentNode.removeChild(t[n-1]),/検索/i.test(t[n+2].textContent||t[n+2].innerText)&&(t[+n].parentNode.removeChild(t[+n]),--n)):t[n].nodeType===3&&/┗(.+)/i.test(t[n].nodeValue)&&(f=r("div"),f.className="ch2",f.innerHTML=RegExp.$1,t[n].parentNode.replaceChild(f,t[n]),t[n+1].parentNode.removeChild(t[n+1]))}function it(){$it.$id("newout").insertAdjacentHTML("beforeend",'<div class="post-guide">このボタンで新規投稿できます<br>※レスは各投稿欄の[レス投稿]ボタンで可能です<br><\/div>');c=r("div");c.type="button";c.textContent="新規投稿";c.title="このボタンで新規投稿できます";c.className="postting";c.onfocus=function(){$(this).blur()};c.onclick=function(){location.href=/(\/(mbb|mb2)\/u\/[a-z]+\/\d+\/).*$/i.test(location.pathname)?RegExp.$1+"nm":"db-write.html"};$it.$class("post-guide")[0].appendChild(c)}function rt(){$it.jsload($it.path._ENCODE);var n=ut();(et($("textarea[name]")),$it.HasStorage())&&(ft(),$it.hisRead($("#"+n[0]),$("#"+n[1])))}function ut(){var e,o,n;$it.MSIE()||$it.addCSS({"input,textarea,select":"outline:0px none black;","input:focus[name=name],input:focus[name=email],input:focus[name=pass],textarea:focus[name],select:focus":"background-color:#f8FFf8;border: 2px #FA0 solid; box-shadow:rgba(53, 50, 150, 0.74) 0px 0px 6px 4px outside; border-radius:7px; -webkit-border-radius:7px;","input[type='text'],textarea,select":"margin:0; background-color:#dfdfff"});$it.SP()&&$it.addCSS({textarea:"width:98%;"});$it.addCSS({"#container .whelp":"cursor:default; margin:0.4em 0.2em; padding:0.0em 0.2em; _padding:0.1em 0.4em;border:1px #0A0 solid;background-color:#FFA; font-size:"+($it.SP()?"100%":"80%")+";border-radius:9px;-webkit-border-radius:9px;","#container .writehelp":"line-height:1.6em; margin:0.3em 0.2em; padding:0.4em 0.9em; font-size:80%; color:#333; background-color: #ffc; border-radius:7px; -webkit-border-radius:7px; box-shadow: 1px 1px 3px silver;",form:"line-height: 1.8em","form .mcount_mb":"z-index:2147483647; line-height:1.4em; font-size:14px; text-align:left; margin:0; padding:0.1em 0.4em; width:100%; border:1px #111 solid;background-color:#222;color:#eee;position: fixed; top: 0px; left:0;opacity: 0.89;-moz-transition: opacity 1s linear;-o-transition: opacity 1s linear;-webkit-transition: opacity 1s linear;","form .mnum_mb":"color:#ea0;font-size:16px;font-weight:bold;","form .mcount_pc":"z-index:2147483647; line-height:1.4em; font-size:85%; text-align:left; margin:0; padding:0em 0.2em; width:25%; border:1px #111 solid;background-color:#333;color:#fff;border-radius:7px; -webkit-border-radius:7px;opacity: 0.74;-moz-transition: opacity 1s linear;-o-transition: opacity 1s linear;-webkit-transition: opacity 1s linear;","form .mnum_pc":"color:#ea0;font-size:100%;font-weight:bold;","form .fbtn1":"display:none","form .fbtn2":"margin:0.3em 0; padding:0.1em 0; font-weight:bold; font-size:86%; color:#333; background:#e1e1e1; border-radius: 7px; width:260px; height:auto;","form .upresult":"display:none; width:90%; font-size:90%; margin:0.1em;padding:0.2em; border:1px #aaa solid; background:#ededed; line-height:1.3","form .onresult":"display:block;","form .offresult":"display:none;","form .tarea":"border: 2px #d00 dotted; box-shadow:rgba(53, 50, 150, 0.74) 0px 0px 6px 4px dotted;","form .warning":"margin:0.3em 0; line-height:1.2em; font-size:72%; color:#800"});var c=["初回あるいは前回で使用されたハンドル名(名前)を使ってください<br><b>【トリップが使用できます】<\/b><br>※成り済まし防止や同一名の識別に効果的です<br>(例)名前が「さくら」であれば⇒「さくら#ソメイヨシノ」と入力<br>「ソメイヨシノ」がトリップキーとなり、実際には自分が決めたお好きな文字を半角6文字(全角3文字)以上で入力してください<br>#は半角文字です<br>トリップキーは他人と被らないような推測されにくい文字が理想です","sage&nbsp;でスレッドがトップ(最上位置)に移動しません<br>スレッドを上げたくない時にお使いください<br>・盛り上がっているスレッドの邪魔をしたくない<br>・トップに移動させるほどではない時など","投稿本文を入力してください<br><b>【絵文字】<\/b><br>絵文字入力できます<br><b>【投稿履歴】(対応ブラウザはボタン表示)<\/b><br>あなたが前回投稿した履歴が3件まで確認できます<br>※投稿履歴機能バージョンアップ等により履歴が削除される場合があります<br><b>【アップロード】(対応ブラウザはボタン表示)<\/b><br>テキストファイル(*.txt)から本文に読み込みます(ドラッグ＆ドロップ対応)<br>予め作成しておいた文書を本文で使いたい時に便利です<br><b>【ダウンロード】(対応ブラウザはボタン表示)<\/b><br>本文をテキストファイルとして保存します<br>保存される文字コードはUTF-8となります<br><b style='color:#a00'>※アップロード／ダウンロードはお使いのブラウザの種類やバージョンによっては正しく動作しない場合があります<\/b>","好きなバンドは任意です。空欄でも大丈夫です","本文削除と本文編集を行う際に必要です<br>セキュリティの観点から最低8文字以上の半角英数字で入力してください<br>パスワードの使い回しを極力避けてサイト毎に異なるパスワードを用いることを強く勧めます"],s=["his","hisput"],u=h("hr")[1];if(u.parentNode.removeChild(u),/ﾚｽ投稿が完了しました。/i.test(i("container").innerHTML))return!1;var l=$it.HasStorage(),a=[/名前/i,/ｽﾚｯﾄﾞ/i,/本文/i,/好き/i,/編集/i],t=i("container").childNodes;for(n=0;n<t.length;n++)if(t[n].nodeName==="A"&&/(\?rc=)/i.test(t[n].href)){u=$it.$input("button","引用",t[n].href);u.onclick=/write\./i.test(location.pathname)?function(){alert("引用")}:function(){return location.href=this.title,!1};t[n+0].parentNode.replaceChild(u,t[n+0]);t[n-1].parentNode.removeChild(t[n-1]);t[n+0].parentNode.removeChild(t[n+0]);u=h("hr")[1];e=r("div");e.className="line";u.parentNode.replaceChild(e,u);break}for(t=i("container").getElementsByTagName("form")[0].childNodes,o=0,n=0;n<t.length;n++)if(t[n].nodeType===3&&a[o].test(t[n].nodeValue)){if(o===1)u=r("span"),e=$it.$input("button","sage入力","sageを入力できます"),e.onclick=function(){f("email")[0].value="sage"},u.appendChild(e),e=$it.$input("button","sage取消","sageを取消します"),e.onclick=function(){f("email")[0].value=""},u.appendChild(e),t[n+2].parentNode.insertBefore(u,t[n+2]),t[n+3].parentNode.insertBefore(r("br"),t[n+3]),f("email")[0].onchange=function(){this.value!==""&&this.value!=="sage"&&$it.modal_open({text:"'sage'または空白(空欄)にしてください",width:240,height:0,align:"center"})};else if(o===2){for(t[n+0].nodeValue=t[n+0].nodeValue.substr(0,t[n+0].nodeValue.length-1),u=$it.$input("button","絵文字","絵文字が入力できます"),u.onclick=/write\./i.test(location.pathname)?function(){alert("絵文字")}:goEmoji,t[n+1].parentNode.replaceChild(u,t[n+1]),t[n+2].parentNode.removeChild(t[n+2]),t[n+2].parentNode.insertBefore(r("span"),t[n+2]),l&&(u=$it.$input("button","投稿履歴","前回の投稿履歴です"),u.id=s[0],t[n+2].parentNode.insertBefore(u,t[n+2]),u=r("div"),u.id=s[1],t[n+5].parentNode.insertBefore(u,t[n+5])),ot(t[n+6]);t[n].nodeName!=="BR";n++);--n}if(u=r("span"),u.id="h"+o,u.className="whelp",u.innerHTML="？",u.onfocus=function(){this.blur()},u.onmouseover=function(){this.style.backgroundColor="#Fa0";e=r("div");e.id="inf2"+this.id.substring(1);e.className="writehelp";e.innerHTML=c[this.id.substring(1)];i("inf"+this.id.substring(1)).appendChild(e)},u.onmouseout=function(){(this.style.backgroundColor="#FFa",u=i("inf2"+this.id.substring(1)),u!==null)&&u.parentNode.removeChild(u)},t[n+1].parentNode.insertBefore(u,t[n+1]),u=r("div"),u.id="inf"+o,t[n+2].parentNode.insertBefore(u,t[n+2]),t[n+3].parentNode.removeChild(t[n+3]),++o>=5)break}return s}function ft(){var i=$it.his;$("input, textarea, select").on("keyup change",function(){$(window).on("beforeunload",function(n){return n.originalEvent.returnValue=i.sg._ERRM[3],i.sg._ERRM[3]})});$("input[name=smt],input[name=sbmt],input[name=prev],input[name=correct]").click(function(){var r,u,f;if($(window).off("beforeunload"),/連続投稿/i.test($("#container font:eq(0)").text()))return!1;if(r="",$("input[name=name]").val()==""&&(r+=i.sg._ERRM[0]),(t=$("[name=content]").val())==""&&(r+=i.sg._ERRM[1]),$("input[name=pass]").val()==""&&(r+=i.sg._ERRM[2]),r)return $it.modal_open({text:r,width:220,height:0,align:"left"}),!1;if(r=$(this).attr("name"),r!="prev"&&r!="correct"){for(t=t.replace(/\</gi,"&lt;"),t=t.replace(/\>/gi,"&gt;"),t=t.replace(/(\"|\'|\\|\f|\b|\t|\f|\r)/gi,"$1"),t=t.replace(/\n/gi,"<br>\n"),u={status:"1",name:$("[name=name]").val(),time:$it.Today(!0),thread:$("#container").find("a:eq(1)").attr("title"),content:t},(d=n.nget(i.sg._POSITION))==null&&(d="0"),i.sg._JSON_CHECK?n.nset(i.sg._DATA+d,JSON.stringify(u)):(n.nset(i.sg._NAME+d,u.name),n.nset(i.sg._TIME+d,u.time),n.nset(i.sg._THREAD+d,u.thread),n.nset(i.sg._CONTENT+d,u.content)),n.nset(i.sg._STATUS+d,u.status),d=parseInt(d,10),++d,d>=i.sg._MAXNUM&&(d="0"),n.nset(i.sg._POSITION,d),f=0;n.nget(i.sg._STATUS+f)!=null;f++);n.nset(i.sg._LENGTH,f)}})}function et(n){var i='<div id="sout">入力文字数: <span id="mout"><\/span>/2000<\/div><div id="maxchar">文字数制限<\/div>',t=function(n,t){var i=n.val().length,r=(n.val().match(/\n/g)||[]).length;t.text(i+r)};n.on({focus:function(){$it.SP()&&$("#top_frame").css("display","none");$(this).before($(i).addClass($it.SP()?"mcount_mb":"mcount_pc"));t($(this),$("#mout").addClass($it.SP()?"mnum_mb":"mnum_pc"));$("#maxchar").css("display","none")},blur:function(){$it.SP()?$("#top_frame").css("display","block")&&$(".mcount_mb").remove():$(".mcount_pc").remove()},"keyup change paste":function(){t($(this),$("#mout"));var n=$(this).val().length+($(this).val().match(/\n/g)||[]).length;n<2e3&&$("#maxchar").text().length&&$("#maxchar").text("").css("display","none")},keypress:function(){var n=$(this).val().length+($(this).val().match(/\n/g)||[]).length;if(n>=2e3)return $("#maxchar").text("文字数制限").css("display","block"),!1}})}function ot(n){function o(n){if(n.length==0)return!1;var u=n[0];if(!u.type.match(/text/))return $it.modal_open({text:r[0],width:240,height:0,align:"center"}),!1;s(u,function(n){var e,o;if(n[0]=n[0].replace(/(\r\n|\r)/gi,"\n"),e=n[0].length,e>t.CHAR_MAXSIZE)return $(f).removeClass("onresult"),$(f).html("").addClass("offresult"),$it.modal_open({text:e-t.CHAR_MAXSIZE+r[1],width:240,height:0,align:"center"}),$(i).val(""),!1;o=t[0]+u.name+"<br>"+t[1]+u.size+"<br>"+t[2]+n[1]+"<br>"+t[3]+e;$(f).removeClass("offresult");$(f).html(o).addClass("onresult");setTimeout(function(){$(".upresult").html("").removeClass("onresult")},3e3);$(i).val(n[0])})}function s(n,t){var i=new FileReader;i.onabort=function(){alert("キャンセルされました")};i.onprogress=function(){};i.onloadstart=function(){};i.onload=function(n){t(h(n.target.result))};i.readAsArrayBuffer(n)}function h(n){var t=new Uint8Array(n),i=Encoding.detect(t),r,u;switch(i){case"UTF16":t=new Uint16Array(n);break;case"UTF32":t=new Uint32Array(n)}return r=Encoding.convert(t,"UNICODE"),u=Encoding.codeToString(r),[u,i]}var e;if($it.FAPI){var t={IEVER:11,CHAR_MAXSIZE:2e3,0:"<b>Filename：<\/b>",1:"<b>Filesize：<\/b>",2:"<b>CharCode：<\/b>",3:"<b>Textsize：<\/b>",name:"レイジーフォーラム本文-",btn:"保存",10:"予め作成した文書を使いたい時に便利です(2000文字まで)",11:"アップロード(ファイルから本文に読み込む)",20:"ファイルに保存できます",21:"ダウンロード(本文をファイルに保存)",30:"アップロード",31:"はお使いのブラウザの種類やバージョンによっては正しく動作しない場合があります"},r=["テキストファイルを選択してください"," 文字オーバー<br>文字数が多すぎます<br>※改行を含めた2000文字以内","本文が空欄です","本文をファイルに保存しますか？"],e="";$(n).before('<div><input type="file" class="fbtn1" accept=".txt"><button id="upload" class="fbtn2" title="'+t[10]+'">'+t[11]+"<\/button><\/div>");($it.MSIE()>=t.IEVER||$it.FAPI_W)&&($(n).prev().append('<button id="download1" class="fbtn2" title="'+t[20]+'">'+t[21]+'<\/button><a id="download2"><\/a>'),e="/ダウンロード");$(n).prev().append($('<div class="warning">'+t[30]+e+t[31]+"<\/div>"));$(n).prev().append('<div class="upresult"><\/div>');var u="#download2",i="textarea[name]",f=".upresult";if($it.MSIE()>=t.IEVER||$it.FAPI_W){$("#download1").on({focus:function(){this.blur()},click:function(){var n=$(i).val().length;return n==0?($it.modal_open({text:r[2],width:240,height:0,align:"center"}),!1):n>t.CHAR_MAXSIZE?($it.modal_open({text:r[1],width:240,height:0,align:"center"}),!1):($it.modal_open({text:r[3],width:240,height:0,align:"center",button:t.btn,callback:function(n){var n=$(u),t;n[0].fireEvent?n[0].fireEvent("onclick"):(t=document.createEvent("MouseEvents"),t.initEvent("click",!1,!0),n[0].dispatchEvent(t))}}),!1)}});$(u).on({click:function(){var r=t.name+(new Date).toLocaleString()+".txt",f,n;$(u).attr("download",r);f=$(i).val();n=new Blob([f],{type:"text/plain"});window.navigator.msSaveBlob?(window.navigator.msSaveBlob(n,r),window.navigator.msSaveOrOpenBlob(n,r)):$(u).attr("href",window.URL.createObjectURL(n))}})}$("#upload").on({focus:function(){$(this).blur()},click:function(){return $(".fbtn1").click(),!1}});$(".fbtn1").on({change:function(n){$(i).val("");var t=n.target.files;return o(t),!1}});$(i).on("drop",function(n){n.preventDefault();$(i).removeClass("tarea");var t=n.originalEvent.dataTransfer.files;return o(t),!1}).on("dragenter",function(){return $(i).addClass("tarea"),!1}).on("dragover",function(){return $(i).addClass("tarea"),!1}).on("dragleave",function(){return $(i).removeClass("tarea"),!1})}}var o;if($it=this.global_obj,$it.BC())return!1;var s=$it.$origin,n=$it.$storage,i=$it.$id,st=$it.$class,h=$it.$TagName,f=$it.$Name,u=$it.$cText,r=$it.$ce,ht=$it.$rm,ct=$it.$Replace,lt=$it.$Before,y=/\/\d+\/(;.+|dj.*|v.*)?$/i.test(location.pathname)||/writing[2]?\.html$/i.test(location.pathname),p=/\/(tse.*|se.*)$/i.test(location.pathname)||/db-write-se.html$/i.test(location.pathname),w=/\/(nt.*|nm.*|um.*|dt.*)$/i.test(location.pathname)||/write\.html$/i.test(location.pathname),b=/\/\d+\/\d+$/i.test(location.pathname)||/up.html|writing[2]?\.html$/i.test(location.pathname),at=/\/va.*$/i.test(location.pathname)||/image\.html$/i.test(location.pathname);o={mobj:{id:"#radioid",exec:a,cf:$it._HEADER_FLAG,off:"見出し解除",on:"見出し設定",html:'<div id="radioid" class="radiobtn"><\/div>'},robj:{id:"#newresid",exec:nt,cf:$it._USER_W_FLAG,off:"新投稿者リスト解除",on:"新投稿者リスト表示",html:'<div id="newresid"><\/div>'}};tt();y?(it(),a(),$it.SP()&&k(1,function(){v();l(o.mobj)})):b||p||w&&rt();$it.SP()||(v(),l(o.mobj))}})