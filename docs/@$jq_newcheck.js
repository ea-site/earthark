$it.newcheck=function(){function p(t){var i={a:'<div><a href="javascript:void(0)">',b:"<\/a><\/div>",css:{"text-align":"right",border:"none","background-color":"transparent"},css2:{"text-align":"right"},headerSet:function(t){$("#"+t.id).html("").css(this.css).append($(this.a+t.on+this.b).find("a").on({focus:function(){$(this).blur()},click:function(){$(this).parent().remove();n.set(t.cf,"1",90);t.ex();i.headerReset(t);return}}))},headerReset:function(t){$("#"+t.id).append($(this.a+t.off+this.b).css(this.css2));$("#"+t.id).find("a:last").on({focus:function(){$(this).blur()},click:function(){n.set(t.cf,"",90);i.headerSet(t)}})}};n.get(t.cf)==""?i.headerSet(t):i.headerReset(t)}function tt(){var u,e,f,t,n;if($it.addCSS({"#font-chg":"margin:0 4px;text-align:right;","#font-chg .fsc":"font-size:75%; cursor:pointer;  margin:0; margin:0.2em 0; padding:0 0.7em; font-weight:normal; border:1px #088 solid;background-color:#00A090;color:#EEE;text-decoration: none;border-radius:5px; -webkit-border-radius:5px; box-shadow: 1px 1px 2px black;","#font-chg a:hover":"background-color:#E0B6E0;",".sw":"font-size:80%;margin:0.1em 0; padding:0 0.6em; font-weight:normal; border:1px #088 solid;background-color:#00A090;color:#EEE;border-radius:5px; -webkit-border-radius:5px; box-shadow: 1px 1px 2px black;","#fcg a:hover":"background-color:#E0B6E0; text-decoration:none;","#newout .post-guide":"line-height:2.0em;text-align:center;font-size:85%;margin:0.2em 0 0.6em 0;padding:0.4em;background-color:#DFEEFF; border-radius:7px; -webkit-border-radius:7px;"+$it.gradi("#e9e9e9","#D0e1e1"),"#newout .posting":"font-size:100%;display:inline-block; margin:0.4em 0;padding:3px 6px;","#newout #radioid":"font-size:90%; margin:0 0 0.5em 0;padding:0.2em 0.4em; background-color:#FFEEEE; border:1px solid #AAA;border-radius:5px;-webkit-border-radius:5px;","#radioid input":"vertical-align: -0.1em;","#newout .subject":"display:block; cursor:pointer;text-decoration:none; vertical-align:middle; width:36px; margin:0.2em; padding:0.1em 0.1em; color:#0044FF; font-size:90%; text-align:center; border:1px #aaa solid; background-color:#F2E0a2; border-radius:5px; -webkit-border-radius:5px;","#newout .radioerr":"text-align:center;color:#C00","#radioid span":"margin-left:0.3em","#newout #newres":"margin:0.4em 0 0.8em 0;padding:0.4em 0.6em;font-size:80%;line-height:1.3em;border:1px #AAA solid;background-color:#FFD;border-radius:5px;-webkit-border-radius:5px;","#container .ch1":"display:inline-block; vertical-align:middle; line-height:1.6em; font-size:100%; margin:0 0.5em 0 0; padding:0.2em 0.9em; text-decoration:none;cursor:pointer; background-color:#3390E4; color:#EEE; border-radius:5px;-webkit-border-radius:5px; box-shadow: 1px 1px 2px black;","#container .ch1:hover":"background-color:#E0B6E0;","#container .ch2":"vertical-align:middle; font-size:100%; text-align:center; font-weight:bold; margin:0.5em 0; padding:0.6em 0.2em; background-color:#DDDDEE;border-radius:5px;-webkit-border-radius:5px;",".hiscss":"text-align:left; margin:0.4em 0; padding:0.5em; line-height:1.2em; font-size:90%; border:2px #CCC solid; background-color:#e6e6FF; color:#111; border-radius:7px; -webkit-border-radius:7px;",".btncss1":"padding:0.2em 0.6em 0 0.6em; margin-top:0.5em; font-size:100%; background-color:#AFA; border-radius:7px; -webkit-border-radius:7px;",".btncss2":"position:absolute; z-index:2; top:auto"}),$it.SP&&$it.addCSS({"input[type=submit]":"padding: 0.5em;","#newout .posting":"font-size:120%;font-weight:bold; display:inline-block; padding: 0.5em 1.4em; margin-top:0.6em;","#newout #newres":"line-height:1.8em;"}),window.opera&&$it.addCSS({"#container img":"vertical-align: middle;","#container input":"padding:0.1em 0.7em;"}),$it.MSIE?$it.addCSS({input:"font-size:86%; margin-top:0.2em;pading:0em 0.2em;line-height:-1.3em; vertical-align: -0.4em;",select:"margin-top:0.2em;",textarea:"margin-bottom:0.2em;"}):$it.addCSS({"input,select,textarea":"margin:0.1em 0 0.2em 0em; padding:0 0.4em;border-radius:7px; -webkit-border-radius:7px;box-shadow: 1px 1px 3px silver;"}),$it._NEWA=$it.path._NEWA,u=$it.IM()||$it.FM(),u){try{i("inelem").style.display="none"}catch(f){}try{i("bgparts").style.display="none"}catch(f){}$it.addCSS($it.mobj.resize)}for(e={exec:u?$("#binf").remove():function(){try{$it.Replace(1)}catch(n){return function(){}}}(),event:u?function(){return window.parent.location.href=h.host?h.cpath:$it.path._INDEX,!1}:""},$("hr:eq(1)").remove(),e.exec,t=i("container").childNodes,n=0;t[n].nodeName!=="HR";n++)t[n].nodeName==="A"&&/一覧/i.test(t[n].textContent||t[n].innerText)?(t[n].className="ch1",t[n].title="レイジーフォーラム",t[n].onfocus=function(){this.blur()},t[n].onclick=e.event,t[n+1].parentNode.removeChild(t[n+1])):t[n].nodeName==="A"&&/┗/i.test(t[n-1].nodeValue)?(t[n].className="ch1",t[n].title=t[n].innerHTML,t[n].onfocus=function(){this.blur()},t[n-1].parentNode.removeChild(t[n-1]),/検索/i.test(t[n+2].textContent||t[n+2].innerText)&&(t[+n].parentNode.removeChild(t[+n]),--n)):t[n].nodeType===3&&/┗(.+)/i.test(t[n].nodeValue)&&(f=r("div"),f.className="ch2",f.innerHTML=RegExp.$1,t[n].parentNode.replaceChild(f,t[n]),t[n+1].parentNode.removeChild(t[n+1]))}function it(){var n="fsi",t="文字サイズ:",i=$("#font-chg");if(i.append('<a id="'+n+'" class="fsc" title="文字サイズの変更" href="javascript:void(0)">'+t+"<\/a>"),$it.checkCookie()){$it.charSize({id:n,char:t,name:$it._CSIZE_FLAG2,type:!1,rw:!1});i.find("a").on({focus:function(){$(this).blur()},click:function(){$it.charSize({id:n,char:t,name:$it._CSIZE_FLAG2,type:!1,rw:!0})}})}}function rt(){$("#newout").append($('<div class="post-guide">このボタンで新規投稿できます<br>※レスは各投稿欄の[レス投稿]ボタンで可能です<br><\/div>').append($("<input>",{type:"button",value:"投稿",title:"このボタンで新規投稿できます","class":"posting",on:{focus:function(){$(this).blur()},click:function(){location.href=/(\/(mbb|mb2)\/u\/[a-z]+\/\d+\/).*$/i.test(location.pathname)?RegExp.$1+"nm":"db-write.html"}}})))}function s(t){var w,b;$("#newout").append($('<div id="newres"><\/div>'));for(var k=n.get($it._USER_W_FLAG),p=". . .(続き)",d=". . .(閉じる)",f=i("container").childNodes,h,c,a=0,l="",v="",y="",s=0;s<f.length;s++){if(f[s].nodeValue===" :"&&(f[s+1].nodeName==="A"&&/mailto:/i.test(f[s+1].href)?(w=f[s+2],f[s+2].parentNode.removeChild(f[s+2]),h=f[s+1].cloneNode(!0),w=f[s+2],f[s+1].parentNode.removeChild(f[s+1]),f[s+1].parentNode.insertBefore(h.firstChild,f[s+1]),t||(c=r("span"),c.style.color="#AA00AA",c.innerHTML="&nbsp;[sage]<br>",f[s+1].parentNode.insertBefore(c,f[s+1]))):t||f[s+1].parentNode.insertBefore(r("br"),f[s+1]),!t)){for(f[s+0].parentNode.removeChild(f[s+0]),f[s-1].parentNode.insertBefore(o("No:"),f[s-1]),f[s+2].parentNode.insertBefore(o("Name:"),f[s+2]),h=s+3;f[h].nodeName!=="BR";h++);$it.MSIE||f[h+1].parentNode.removeChild(f[h+1]);f[h+1].parentNode.insertBefore(o("Date:"),f[h+1])}if(f[s].nodeName==="A"&&f[s].rel==="nofollow"&&(e=u("button",f[s].innerHTML,f[s].href),e.onclick=function(){location.href=this.title},f[s].parentNode.replaceChild(e,f[s]),f[s-1].parentNode.removeChild(f[s-1]),f[s].nodeValue==="]"&&f[s].parentNode.removeChild(f[s])),f[s].nodeName==="HR"&&(c=r("div"),c.className="line",f[s].parentNode.replaceChild(c,f[s])),f[s].nodeName==="IMG"&&(/i\/E6DD\./i.test(f[s].src)||/new001/i.test(f[s].src))){if(f[s].src=$it._NEWA,f[s].style.width="32px",f[s].style.height="16px",k=="")continue;for(h=t?3:4,c=s;f[c].nodeName!=="FONT";c++);l+=f[s-h].outerHTML+" "+f[c].innerHTML+" <a href='#c"+f[s-h].innerHTML+"'>"+f[s-1].innerHTML+"<\/a><br>";++a==5&&(v=l,l="")}}if(l===""&&a!==5)return n.get($it._USER_W_FLAG)!==""&&$("#newres").css({display:"none"}),!1;if(v&&(a!==5&&(v+='<span id="pos"><\/span><a id="resmsg" href="javascript:void(0);">'+p+"<\/a>"),y=l,l=v),$("#newres").html("新レス投稿者一覧: "+a+"<br>"+l),y){b=0;$("#resmsg").on({focus:function(){this.blur()},click:function(){(b^=1)?($("#pos").html(y),$(this).text(d)):($("#pos").html(""),$(this).text(p))}})}return!0}function w(){if(n.get("mf")=="")return $("#newout").append($('<div id="radioid" class="radiobtn"><\/div>')),1;var r,t={id1:"rd1",id2:"rd2",id3:"rec",file:$it.path._RADIO,CookieFlag:$it._HEADER_KEEP,CookieData:$it._HEADER_KIND,mess3:function(n){return"【"+n+"】に設定しました"},arr:["rd1","sel","1","checked","見出し1 ","rd2","sel","2","","見出し2 ","rec","sel","","","設定を長期記憶"],body:'<div id="radioid" class="radiobtn"><input type="radio" /><span><\/span><input type="radio" /><span><\/span><input type="checkbox" /><span><\/span><\/div>',guide:'<a id="help" title="見出しの説明です" href="javascript:void(0)" class="subject">説明<\/a>',mem6:"記憶される期間は2年間です",mem1:"記憶される期間は90日間です",err:'<div id="radioid" class="radioerr">※ブラウザのCookie(クッキー)が無効です。有効にすると見出し拡張機能が利用できます。<\/div>'};if(!$it.checkCookie())return $("#newout").append($(t.err)),1;$("#newres")[0]!=null?$("#newres").before($(t.body).append(t.guide)):$("#newout").append($(t.body).append(t.guide));$("#radioid input").each(function(){$(this).attr({id:r=t.arr.shift(),name:t.arr.shift(),value:t.arr.shift(),checked:t.arr.shift()}).focus(function(){$(this).blur()}).next().text(t.arr.shift())});$("#radioid,#help").on({focus:function(){return this.id=="help"&&this.blur(),!1},click:function(r){var u=r.target;if(u.id==="help")return $it.modal_open({url:t.file,text:null,width:330,height:0,align:"left",button:null,callback:null}),!1;switch(u.type){case"radio":if(n.get(t.CookieData)==u.value)break;n.set(t.CookieData,u.value,i(t.id3).checked?730:90);$it.modal_open({url:null,text:t.mess3(i(u.id).nextSibling.innerHTML),width:200,height:0,align:"center",button:null,callback:function(){location.reload()}});break;case"checkbox":n.set(t.CookieFlag,u.checked,u.checked?730:90);n.set(t.CookieData,n.get(t.CookieData),u.checked?730:90);$it.modal_open({url:null,text:u.checked?t.mem6:t.mem1,width:200,height:0,align:"center",button:null,callback:null})}}});return n.get(t.CookieFlag)===""&&(i(t.id3).checked="",n.set(t.CookieFlag,"false",90)),n.get(t.CookieData)===""&&(i(t.id1).checked="checked",i(t.id2).checked="",n.set(t.CookieData,"1",90),mode=1),i(t.id3).checked=n.get(t.CookieFlag)==="true"?"checked":"",(d=n.get(t.CookieData))=="2"?(i(t.id1).checked="",i(t.id2).checked="checked",mode=0):d=="1"&&(i(t.id1).checked="checked",i(t.id2).checked="",mode=1),mode}function ut(){$it.jsload($it.path._ENCODE);var n=ft();(ot($("textarea[name]")),$it.HasStorage())&&(et(),$it.hisRead($("#"+n[0]),$("#"+n[1])))}function ft(){var o,s,n;$it.MSIE||$it.addCSS({"input,textarea,select":"outline:0px none black;","input:focus[name=name],input:focus[name=email],input:focus[name=pass],textarea:focus[name],select:focus":"background-color:#f8FFf8;border: 2px #FA0 solid; box-shadow:rgba(53, 50, 150, 0.74) 0px 0px 6px 4px outside; border-radius:7px; -webkit-border-radius:7px;","input[type='text'],textarea,select":"margin:0; background-color:#dfdfff"});$it.SP&&$it.addCSS({textarea:"width:98%;"});$it.addCSS({"#container .whelp":"cursor:default; margin:0.4em 0.2em; padding:0.0em 0.2em; _padding:0.1em 0.4em;border:1px #0A0 solid;background-color:#FFA; font-size:"+($it.SP?"100%":"80%")+";border-radius:9px;-webkit-border-radius:9px;","#container .writehelp":"line-height:1.6em; margin:0.3em 0.2em; padding:0.4em 0.9em; font-size:80%; color:#333; background-color: #ffc; border-radius:7px; -webkit-border-radius:7px; box-shadow: 1px 1px 3px silver;",form:"line-height: 1.8em","form .mcount_mb":"z-index:2147483647; line-height:1.4em; font-size:14px; text-align:left; margin:0; padding:0.1em 0.4em; width:100%; border:1px #111 solid;background-color:#222;color:#eee;position: fixed; top: 0px; left:0;opacity: 0.89;-moz-transition: opacity 1s linear;-o-transition: opacity 1s linear;-webkit-transition: opacity 1s linear;","form .mnum_mb":"color:#ea0;font-size:16px;font-weight:bold;","form .mcount_pc":"z-index:2147483647; line-height:1.4em; font-size:85%; text-align:left; margin:0; padding:0em 0.2em; width:45%; border:1px #111 solid;background-color:#333;color:#fff;border-radius:7px; -webkit-border-radius:7px;opacity: 0.74;-moz-transition: opacity 1s linear;-o-transition: opacity 1s linear;-webkit-transition: opacity 1s linear;","form .mnum_pc":"color:#ea0;font-size:100%;font-weight:bold;","form .fbtn1":"display:none","form .fbtn2":"margin:0.3em 0; padding:0.1em 0; font-weight:bold; font-size:86%; color:#333; background:#e1e1e1; border-radius: 7px; width:260px; height:auto;","form .upresult":"display:none; width:90%; font-size:90%; margin:0.1em;padding:0.2em; border:1px #aaa solid; background:#ededed; line-height:1.3","form .onresult":"display:block;","form .offresult":"display:none;","form .tarea":"border: 2px #d00 dotted; box-shadow:rgba(53, 50, 150, 0.74) 0px 0px 6px 4px dotted;","form .warning":"margin:0.3em 0; line-height:1.2em; font-size:72%; color:#800"});var l=["初回あるいは前回で使用されたハンドル名(名前)を使ってください<br><b>【トリップが使用できます】<\/b><br>※成り済まし防止や同一名の識別に効果的です<br>(例)名前が「さくら」であれば⇒「さくら#ソメイヨシノ」と入力<br>「ソメイヨシノ」がトリップキーとなり、実際には自分が決めたお好きな文字を半角6文字(全角3文字)以上で入力してください<br>#は半角文字です<br>トリップキーは他人と被らないような推測されにくい文字が理想です","sage&nbsp;でスレッドがトップ(最上位置)に移動しません<br>スレッドを上げたくない時にお使いください<br>・盛り上がっているスレッドの邪魔をしたくない<br>・トップに移動させるほどではない時など","投稿本文を入力してください<br><b>【絵文字】<\/b><br>絵文字入力できます<br><b>【投稿履歴】(対応ブラウザはボタン表示)<\/b><br>あなたが前回投稿した履歴が3件まで確認できます<br>※投稿履歴機能バージョンアップ等により履歴が削除される場合があります<br><b>【アップロード】(対応ブラウザはボタン表示)<\/b><br>テキストファイル(*.txt)から本文に読み込みます(ドラッグ＆ドロップ対応)<br>予め作成しておいた文書を本文で使いたい時に便利です<br><b>【ダウンロード】(対応ブラウザはボタン表示)<\/b><br>本文をテキストファイルとして保存します<br>保存される文字コードはUTF-8となります<br><b style='color:#a00'>※アップロード／ダウンロードはお使いのブラウザの種類やバージョンによっては正しく動作しない場合があります<\/b>","好きなバンドは任意です。空欄でも大丈夫です","本文削除と本文編集を行う際に必要です<br>セキュリティの観点から最低8文字以上の半角英数字で入力してください<br>パスワードの使い回しを極力避けてサイト毎に異なるパスワードを用いることを強く勧めます"],h=["his","hisput"],e=c("hr")[1];if(e.parentNode.removeChild(e),/ﾚｽ投稿が完了しました。/i.test(i("container").innerHTML))return!1;var a=$it.HasStorage(),v=[/名前/i,/ｽﾚｯﾄﾞ/i,/本文/i,/好き/i,/編集/i],t=i("container").childNodes;for(n=0;n<t.length;n++)if(t[n].nodeName==="A"&&/(\?rc=)/i.test(t[n].href)){e=u("button","引用",t[n].href);e.onclick=/write\./i.test(location.pathname)?function(){alert("引用")}:function(){return location.href=this.title,!1};t[n+0].parentNode.replaceChild(e,t[n+0]);t[n-1].parentNode.removeChild(t[n-1]);t[n+0].parentNode.removeChild(t[n+0]);e=c("hr")[1];o=r("div");o.className="line";e.parentNode.replaceChild(o,e);break}for(t=i("container").getElementsByTagName("form")[0].childNodes,s=0,n=0;n<t.length;n++)if(t[n].nodeType===3&&v[s].test(t[n].nodeValue)){if(s===1)e=r("span"),o=u("button","sage入力","sageを入力できます"),o.onclick=function(){f("email")[0].value="sage"},e.appendChild(o),o=u("button","sage取消","sageを取消します"),o.onclick=function(){f("email")[0].value=""},e.appendChild(o),t[n+2].parentNode.insertBefore(e,t[n+2]),t[n+3].parentNode.insertBefore(r("br"),t[n+3]),f("email")[0].onchange=function(){this.value!==""&&this.value!=="sage"&&$it.modal_open({text:"'sage'または空白(空欄)にしてください",width:240,height:0,align:"center"})};else if(s===2){for(t[n+0].nodeValue=t[n+0].nodeValue.substr(0,t[n+0].nodeValue.length-1),e=u("button","絵文字","絵文字が入力できます"),e.onclick=/write\./i.test(location.pathname)?function(){alert("絵文字")}:goEmoji,t[n+1].parentNode.replaceChild(e,t[n+1]),t[n+2].parentNode.removeChild(t[n+2]),t[n+2].parentNode.insertBefore(r("span"),t[n+2]),a&&(e=u("button","投稿履歴","前回の投稿履歴です"),e.id=h[0],t[n+2].parentNode.insertBefore(e,t[n+2]),e=r("div"),e.id=h[1],t[n+5].parentNode.insertBefore(e,t[n+5])),st(t[n+6]);t[n].nodeName!=="BR";n++);--n}if(e=r("span"),e.id="h"+s,e.className="whelp",e.innerHTML="？",e.onfocus=function(){this.blur()},e.onmouseover=function(){this.style.backgroundColor="#Fa0";o=r("div");o.id="inf2"+this.id.substring(1);o.className="writehelp";o.innerHTML=l[this.id.substring(1)];i("inf"+this.id.substring(1)).appendChild(o)},e.onmouseout=function(){(this.style.backgroundColor="#FFa",e=i("inf2"+this.id.substring(1)),e!==null)&&e.parentNode.removeChild(e)},t[n+1].parentNode.insertBefore(e,t[n+1]),e=r("div"),e.id="inf"+s,t[n+2].parentNode.insertBefore(e,t[n+2]),t[n+3].parentNode.removeChild(t[n+3]),++s>=5)break}return h}function et(){var i=$it.his;$("input, textarea, select").on("keyup change",function(){$(window).on("beforeunload",function(n){return n.originalEvent.returnValue=i.sg._ERRM[3],i.sg._ERRM[3]})});$("input[name=smt],input[name=sbmt],input[name=prev],input[name=correct]").click(function(){var r,u,f;if($(window).off("beforeunload"),/連続投稿/i.test($("#container font:eq(0)").text()))return!1;if(r="",$("input[name=name]").val()==""&&(r+=i.sg._ERRM[0]),(t=$("[name=content]").val())==""&&(r+=i.sg._ERRM[1]),$("input[name=pass]").val()==""&&(r+=i.sg._ERRM[2]),r)return $it.modal_open({text:r,width:220,height:0,align:"left"}),!1;if(r=$(this).attr("name"),r!="prev"&&r!="correct"){for(t=t.replace(/\</gi,"&lt;"),t=t.replace(/\>/gi,"&gt;"),t=t.replace(/(\"|\'|\\|\f|\b|\t|\f|\r)/gi,"$1"),t=t.replace(/\n/gi,"<br>\n"),u={status:"1",name:$("[name=name]").val(),time:$it.Today(!0),thread:$("#container").find("a:eq(1)").attr("title"),content:t},(d=n.nget(i.sg._POSITION))==null&&(d="0"),i.sg._JSON_CHECK?n.nset(i.sg._DATA+d,JSON.stringify(u)):(n.nset(i.sg._NAME+d,u.name),n.nset(i.sg._TIME+d,u.time),n.nset(i.sg._THREAD+d,u.thread),n.nset(i.sg._CONTENT+d,u.content)),n.nset(i.sg._STATUS+d,u.status),d=parseInt(d,10),++d,d>=i.sg._MAXNUM&&(d="0"),n.nset(i.sg._POSITION,d),f=0;n.nget(i.sg._STATUS+f)!=null;f++);n.nset(i.sg._LENGTH,f)}})}function ot(n){var i='<div>入力文字数(改行あり|改行なし) <span id="mout"><\/span><\/div>',t=function(n,t){var i=n.val().length,r=(n.val().match(/\n/g)||[]).length;t.text(i+r+" | "+(i-r))};n.on({focus:function(){$it.SP&&$("#top_frame").css("display","none");$(this).before($(i).addClass($it.SP?"mcount_mb":"mcount_pc"));t($(this),$("#mout").addClass($it.SP?"mnum_mb":"mnum_pc"))},blur:function(){$it.SP?$("#top_frame").css("display","block")&&$(".mcount_mb").remove():$(".mcount_pc").remove()},"keyup change paste":function(){t($(this),$("#mout"))}})}function st(n){function o(n){if(n.length==0)return!1;var u=n[0];if(!u.type.match(/text/))return $it.modal_open({text:r[0],width:240,height:0,align:"center"}),!1;s(u,function(n){var e,o;if(n[0]=n[0].replace(/(\r\n|\r)/gi,"\n"),e=n[0].length,e>t.CHAR_MAXSIZE)return $(f).removeClass("onresult"),$(f).html("").addClass("offresult"),$it.modal_open({text:e-t.CHAR_MAXSIZE+r[1],width:240,height:0,align:"center"}),$(i).val(""),!1;o=t[0]+u.name+"<br>"+t[1]+u.size+"<br>"+t[2]+n[1]+"<br>"+t[3]+e;$(f).removeClass("offresult");$(f).html(o).addClass("onresult");setTimeout(function(){$(".upresult").html("").removeClass("onresult")},3e3);$(i).val(n[0])})}function s(n,t){var i=new FileReader;i.onabort=function(){alert("キャンセルされました")};i.onprogress=function(){};i.onloadstart=function(){};i.onload=function(n){t(h(n.target.result))};i.readAsArrayBuffer(n)}function h(n){var t=new Uint8Array(n),i=Encoding.detect(t),r,u;switch(i){case"UTF16":t=new Uint16Array(n);break;case"UTF32":t=new Uint32Array(n)}return r=Encoding.convert(t,"UNICODE"),u=Encoding.codeToString(r),[u,i]}var e;if($it.FAPI){var t={IEVER:11,CHAR_MAXSIZE:2e3,0:"<b>Filename：<\/b>",1:"<b>Filesize：<\/b>",2:"<b>CharCode：<\/b>",3:"<b>Textsize：<\/b>",name:"レイジーフォーラム本文-",btn:"保存",10:"予め作成した文書を使いたい時に便利です(2000文字まで)",11:"アップロード(ファイルから本文に読み込む)",20:"ファイルに保存できます",21:"ダウンロード(本文をファイルに保存)",30:"アップロード",31:"はお使いのブラウザの種類やバージョンによっては正しく動作しない場合があります"},r=["テキストファイルを選択してください"," 文字オーバー<br>文字数が多すぎます<br>※改行を含めた2000文字以内","本文が空欄です","本文をファイルに保存しますか？"],e="";$(n).before('<div><input type="file" class="fbtn1" accept=".txt"><button id="upload" class="fbtn2" title="'+t[10]+'">'+t[11]+"<\/button><\/div>");($it.MSIE>=t.IEVER||$it.FAPI_W)&&($(n).prev().append('<button id="download1" class="fbtn2" title="'+t[20]+'">'+t[21]+'<\/button><a id="download2"><\/a>'),e="/ダウンロード");$(n).prev().append($('<div class="warning">'+t[30]+e+t[31]+"<\/div>"));$(n).prev().append('<div class="upresult"><\/div>');var u="#download2",i="textarea[name]",f=".upresult";if($it.MSIE>=t.IEVER||$it.FAPI_W){$("#download1").on({focus:function(){this.blur()},click:function(){var n=$(i).val().length;return n==0?($it.modal_open({text:r[2],width:240,height:0,align:"center"}),!1):n>t.CHAR_MAXSIZE?($it.modal_open({text:r[1],width:240,height:0,align:"center"}),!1):($it.modal_open({text:r[3],width:240,height:0,align:"center",button:t.btn,callback:function(n){var n=$(u),t;n[0].fireEvent?n[0].fireEvent("onclick"):(t=document.createEvent("MouseEvents"),t.initEvent("click",!1,!0),n[0].dispatchEvent(t))}}),!1)}});$(u).on({click:function(){var r=t.name+(new Date).toLocaleString()+".txt",f,n;$(u).attr("download",r);f=$(i).val();n=new Blob([f],{type:"text/plain"});window.navigator.msSaveBlob?(window.navigator.msSaveBlob(n,r),window.navigator.msSaveOrOpenBlob(n,r)):$(u).attr("href",window.URL.createObjectURL(n))}})}$("#upload").on({focus:function(){$(this).blur()},click:function(){return $(".fbtn1").click(),!1}});$(".fbtn1").on({change:function(n){$(i).val("");var t=n.target.files;return o(t),!1}});$(i).on("drop",function(n){n.preventDefault();$(i).removeClass("tarea");var t=n.originalEvent.dataTransfer.files;return o(t),!1}).on("dragenter",function(){return $(i).addClass("tarea"),!1}).on("dragover",function(){return $(i).addClass("tarea"),!1}).on("dragleave",function(){return $(i).removeClass("tarea"),!1})}}var h=$it.$origin,n=$it.$storage,i=$it.$id,ht=$it.$class,c=$it.$TagName,f=$it.$Name,o=$it.$cText,r=$it.$ce,ct=$it.$rm,lt=$it.$Replace,at=$it.$Before,u=function(n,t,i){var u=r("input");return u.type=n,u.value=t,u.title=i,u.onfocus=function(){this.blur()},u},a,v,y;if($it.BC)return!1;var b=/\/\d+\/(;.+|dj.*|v.*)?$/i.test(location.pathname)||/writing[2]?\.html$/i.test(location.pathname),k=/\/(tse.*|se.*)$/i.test(location.pathname)||/db-write-se.html$/i.test(location.pathname),g=/\/(nt.*|nm.*|um.*|dt.*)$/i.test(location.pathname)||/write\.html$/i.test(location.pathname),nt=/\/\d+\/\d+$/i.test(location.pathname)||/up.html|writing[2]?\.html$/i.test(location.pathname),vt=/\/va.*$/i.test(location.pathname)||/image\.html$/i.test(location.pathname),l={mobj:{id:"radioid",ex:w,cf:"mf",off:"見出しOFF",on:"見出しON"},robj:{id:"newres",ex:s,cf:$it._USER_W_FLAG,off:"新投稿者リストOFF",on:"新投稿者リストON"}},a=1;$it.checkCookie()&&(a=n.get("sd")=="2"?0:1);tt();b?(rt(),v=w(),y=s(v)):nt||k?y=s(a):g&&ut();p(l.mobj);p(l.robj);it();$it.IM()&&$(window).scrollTop(Math.round($it.boxInfo.top($("#newout")[0])-10))};$it.addListener(window,$it.IM()||$it.FM()?"load":"DOMContentLoaded",$it.newcheck)