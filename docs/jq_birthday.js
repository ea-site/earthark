$it.Birthday=function(n){var i=$it.SP&&($it.getCookie($it._SF)==""||$it.getCookie($it._SF)=="0"),f={"#bcl":"position:relative;","#bcl div":"width:24px; height:24px; cursor: pointer; position:absolute; top:5px; right:5px; background-position: 0px 0px; background-repeat: no-repeat; background-image:url("+$it.path._CLOSE_BTN+");background-size:24px 24px;","#btop":"z-index:2147483647; font-size:78%;margin:0px 0px 0px 0;padding:0;margin-top:0.3em;padding:6px 5px;  width:160px; border:1px #AAA solid;background-color:#F1FFFF;overflow:hidden;border-radius:7px;-moz-border-radius:7px;-webkit-border-radius:7px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;color:#111; text-align:left","#btop .in_top":"padding:4px 4px;background-color:#EEEEFF;text-align:center;font-weight:bold;","#btop .in_title":"padding:4px 4px;background-color:#FFF6FF;text-align:center;font-weight:bold;","#btop .in_title2":"height:18px;margin-bottom:4px;padding:2px 2px 0 2px;background-color:#DFF;border:1px #888888 solid;","#btop dd":'font-family:Osaka-mono,"Osaka－等幅",Consolas,"Courier New","Courier",Monaco,"ＭＳ ゴシック","MS Gothic",monospace;cursor: default; margin:0;padding:0;line-height:1.3em;',"#btop a":"text-decoration:none;","#btop .bircalc":"margin:0.3em 0;padding:0.2em;border:1px #abe solid;background-color:#FFFFDD;border-radius:5px;-moz-border-radius:5px;-webkit-order-radius:5px;","#btop .line":"border-top:1px #AAA solid;margin:3px 0;","#btop .pon":"margin:0;padding:2px 4px;border:1px #AABBEE solid;background-color:#DDFFEE;color:#111111; border-radius:5px;-webkit-border-radius:5px;","#btop .poff":"_display:inline","#btop .tpon":"z-index:1; position: absolute;top:0.5em; left:0.9em;margin:0;padding:0.3em 0.5em;background-color:#2266FF;color:#f1f1f1; border-radius:5px;-webkit-border-radius:5px;","#btop .tpon:after":'width: 100%; content: ""; display: block; position: absolute; left: 0.5em; top: -8px; border-top:8px solid transparent; border-left:8px solid #2266FF;',"#btop #bir_id":"line-height:1.6em;"},r;$it.cssSearch("#bcl")==!1&&$it.addCSS(f);var t={"井上俊次":{month:5,day:15,text:"1960年5月15日生れ"},"田中宏幸":{month:8,day:25,text:"1960年8月25日生れ<br>(2006年9月1日永眠)"},"影山ヒロノブ":{month:2,day:18,text:"1961年2月18日生れ"},"樋口宗孝":{month:12,day:24,text:"1958年12月24日生れ<br>(2008年11月30日永眠)"},"高崎晃":{month:2,day:22,text:"1961年2月22日生れ"},"貴智明":{month:1,day:19,text:"1964年1月19日生れ"},"阿部たくみ":{month:9,day:29,text:"1961年9月29日生れ"},"田村重治":{month:1,day:23,text:"1964年1月23日生れ"},"和田眞人":{month:11,day:9,text:"1960年11月9日生れ"}},u=function(n,t){var i={};i.text="誕生日";i.len=i.text.length;i.flag=!0;var f,e,r,u=(u=(r=new Date).getYear())<1900?u+=1900:u,s=new Date(u,r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds()),o=new Date(u,n-1,t,00,00,00);return(s.getTime()-o.getTime()>0&&(o=new Date(u+1,n-1,t)),s.getMonth()==o.getMonth()&&s.getDate()==o.getDate())?i:(f=o.getTime()-s.getTime(),e=36e5,i.da=Math.floor(f/(24*e)),i.ho=Math.floor(f/e%24),i.mi=Math.floor(f%e/6e4),i.se=Math.floor(f%e%6e4/1e3),i.flag=!i.da&&!i.ho&&!i.mi&&!i.se,i.text=i.da||i.ho?i.da?i.da+1+"日後":i.ho+"時間"+i.mi+"分後":i.mi+"分後",i.len=i.text.length,i)},e=function(n){var r,i,t,u;if(typeof n!="string")return!1;for(r=[1,2,3,4,5,6,7,8,9,0],i=["１","２","３","４","５","６","７","８","９","０"],t=0;t<i.length;t++)u=new RegExp(i[t],"gm"),n=n.replace(u,r[t]);return!/\d{4}/i.test(n)||!/(\d\d)(\d\d)/i.test(n)?!1:(n=(new Date).getMonth()+1>RegExp.$1?(new Date).getFullYear()+1:(new Date).getFullYear(),!function(n,t,i){var r=new Date(n,t-1,i);return r==null||r.getFullYear()!=n||r.getMonth()+1!=t||r.getDate()!=i?!1:!0}(n,RegExp.$1,RegExp.$2))?!1:{year:n,month:RegExp.$1,day:RegExp.$2}},o=function(){var r="",n,f,e,o;i&&(r+='<div id="bcl"><div><\/div><\/div>\n');r+='\n<dd class="in_top">'+$it.Today()+"<\/dd>\n";r+='<dd class="in_title">誕生日まで何日後？<\/dd>\n';for(f in t){for(n=u(t[f].month,t[f].day),5-n.len==1?n.text="&nbsp;"+n.text:5-n.len==2&&(n.text="&nbsp;&nbsp;"+n.text),n.text=n.flag?n.text.fontcolor("red"):n.text,e="",o=0;o<8-f.length;o++)e+="　";r+="<dd id="+f+">"+f+e+n.text+"<\/dd>\n"}return r+='<div class="line"><\/div>\n',r+='<a id="calc" href="javascript:void(0);" title="誕生日算出">あなたの誕生日は後何日？<\/a>\n',r+'<div id="PutCalc"><\/div>\n'};n.append('<dl id="btop">'+o()+"<\/dl>");$("#btop dd[id]").on({mouseenter:function(){$(this).css("background-color","#88FFAA");$(this).append($('<div style="position:relative;top:0;left:0"><div class="tpon">'+t[$(this).attr("id")].text+"<\/div><\/div>"))},mouseout:function(){$(this).css("background-color","").find("div").remove()}});if(i){$("#btop").css({width:"100%","font-size":"95%",margin:"0 auto;"});$("#btop dd").css("line-height","1.8em");$("#bcl").find("div").on({focus:function(){$(this).blur()},click:function(){$("#btop").remove();$it._BF=0}})}r=0;$("a#calc").on({mouseover:function(){$(this).css("color","#EE5500")},mouseout:function(){$(this).css("color","#0044FF")},focus:function(){$(this).blur()},click:function(){var n,t;if(r^=1)n="",n+='<form id="in" name="form1" action="#" method="post">\n',n+="<b>誕生日までの日数計算<\/b><br>\n",n+="数字4桁で入力します<br>\n",n+="１桁月日は0を頭に付加<br>\n",n+="参考例:0102<br>\n",n+='<input id="bir_id" name="bir" type="text" value="" size="4" maxlength="4">\n',n+='<input id="st" type="submit" value="決定">\n',n+="<\/from>",n+='<div id="result" class="in_title2"><\/div>\n',n+="◇任意の月日入力で現在日時から「何日後？」を計算します<br>\n",n+="◇あなた以外の利用者には表示されません<br>\n",n+="◇【スマートフォン対応】<br>\n",$("#PutCalc").css("display","block").addClass("bircalc").html(n);else return $("#PutCalc").css("display","inline").removeClass("bircalc").html(""),!1;i||$(window).scrollTop($("#btop").height());$("#st").on("focus",function(){$(this).blur()});$it.MSIE&&$("#st").css({margin:"0 0.1em",padding:"0 0.2em","font-size":"100%","line-height":"1.3em"});$("#in").on("submit",function(){if(t=e($('[name="bir"]').val())){var n=u(t.month,t.day);$("#result").html(n.flag?n.text.fontcolor("red"):n.text)}else $("#result").text("入力の誤りです!!");return $('[name="bir"]').val(""),!1});return!1}})},function(){if(!$it.FM()&&!$it.BC&&(!$it.SP||$it.getCookie($it._SF)!=""&&$it.getCookie($it._SF)!="0")){$("#content_size").append('<div id="inelem" style="margin:73px 0 0 0;float:left">\n<div id="year"><\/div>\n<div id="tit"><\/div>\n');$("#inelem").append('<a href="http://setsuden.go.jp/?pc=toden target="_blank"><img src="http://seikatsu.setsuden.go.jp/power_graph/toden/blog160.gif" border="0" width="160" height="300">');$it.Birthday($("#inelem"));var i=new Date,n=i.getMonth()+1,t=i.getDate();if((n==12||n==1)&&(n!=1||!(t>=4))){if(n==12&&(t==24||t==25)&&($("body").css("background-image","url("+$origin.path+"g/xmas-back.jpg)"),$("#sb3g1").attr("src",$origin.path+"g/xmas-title.jpg")),$it.addCSS({".newyear":"width:158px;_width:160px;margin-bottom:4px;padding:6px 0px;border:2px #DDD solid;overflow:hidden;color:#FFFFFF;background-color:#7777EE;line-height:1.6em;text-align:center;border-radius:7px;-webkit-border-radius:7px;"}),n==1&&t<=3){$("#sb3g1").attr("src",$origin.path+"g/a-happy-new-year.jpg");$("#year").addClass("newyear");$("#year").html("<b>謹賀新年<\/b><br>本年もフォーラムを<br>よろしくお願いします");return}setInterval(function(){var t=(y=i.getYear())<1900?y+=1901:y+1,n=function(n,t,i,r,u,f){var o,s,e={},h=new Date,c=new Date(n,t-1,i,r,u,f);return o=c.getTime()-h.getTime(),s=36e5,e.da=Math.floor(o/(24*s)),e.ho=Math.floor(o/s%24),e.mi=Math.floor(o%s/6e4),e.se=Math.floor(o%s%6e4/1e3),e.flag=!e.da&&!e.ho&&!e.mi&&!e.se,e.dc=e.da+"日"+e.ho+"時間"+e.mi+"分"+e.se+"秒",e}(t,01,01,00,00,00);$("#year").addClass("newyear");$("#year").html(t+"年まで<br>"+n.da+"日"+n.ho+"時間"+n.mi+"分"+(n.se<10?"0"+n.se:n.se)+"秒<br>")},1e3)}}}()