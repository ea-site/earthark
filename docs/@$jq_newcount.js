/*
 * 新規投稿チェック(jQuery)
 *
 * LastUpdate:2015-04-01(水) v6.00
 */
//document.write('<script type="text/javascript" src="@jslib.js"></script>');
//document.write('<script type="text/javascript" src="proto.js"></script>');
$it.newcount = function(){
//$(function(){
  var $origin = $it.$origin;
  var $sg = $it.$storage;

  var $id  = $it.$id;
  var $class = $it.$class;
  var $TagName = $it.$TagName;
  var $Name = $it.$Name;
  var $cText = $it.cText;
  var $ce = $it.$ce;
  var $rm = $it.$rm;
  var $Replace = $it.$Replace;
  var $Before = $it.$Before;

  // debug_init();
  if( $it.BC ) return false;

var css ={
  css: { 
    //*** 新着通知
    //".test":"float:none",
    "#thread .gm":"float:right; width:16px; height:24px; background: url("+$it.path._GEAR_IMAGE+") no-repeat 0px 3px;",
	"#display": "margin:0; padding:0.3em;color:#555;font-size:70%;background-color:#E3E3EE;border:1px #aaa solid;border-radius:5px;-webkit-border-radius:5px;"+$it.gradi('#F1F1F1','#D0E0E0'),
	"#display .newcnt": "width:76px;  margin:0.1em 0; padding:0.1em 0.3em; background-color:#B2f2B4; text-align:center; float:left;",
	"#display .guide": "color:#0044FF; margin:0.1em 0; padding:0.1em 0.7em; background-color:#E0e011; border-left:1px #AAA solid; text-align:center; float:left;",
	"#display .fmcss": "color:#eee; margin:0.1em 0 0.2em 0.5em; padding:0.1em 0.7em; background-color:#00A090; border-radius:5px; -webkit-border-radius:5px; text-align:center; float:left;",
	"#display .rscss": "background-color:#2290E4;",

    //"#display .ckcss": pro,
    "#display .thsum": "color:#EE5500;",

    //**** ツールチップ ***

    "#container .tt1": 'position:relative; cursor:pointer;',
    "#container .plm": "z-index:1000;_line-height:1.5em; cursor: default; color: #FFF; white-space: nowrap; font-size:80%; position:absolute; top: 1.5em; left:3.4em; background-color: #2266FF; padding: 0.3em 0.6em; border-radius: 5px; box-shadow: 1px 1px 2px silver;",
	"#container .plm:after":"width: 100%; content:''; display: block; position: absolute; left: 0.5em; top: -8px; border-top:8px solid transparent; border-left:8px solid #2266FF;",

    "#display .tt2": 'position:relative; cursor:pointer;',
	"#display .tooltips": "z-index:10;_line-height:1.5em; cursor: default; color: #FFF; white-space: nowrap; font-size:100%; position:absolute; top: 2.4em; left:0.7em; background-color: #2266FF; padding: 0.4em 0.7em; border-radius: 5px; box-shadow: 1px 1px 2px silver;",
	"#display .tooltips:after": "width: 100%; content:''; display: block; position: absolute; left: 0.5em; top: -8px; border-top:8px solid transparent; border-left:8px solid #2266FF;",


    //*** スレッド一覧
    "#container #nop":"float:right;font-size:75%;background-position:-0px 7px",
    "#container #tht": "float:left; margin:0.2em 0.4em 0.3em 0; padding:0 0; font-size:90%; text-align:center; background-color:#B2f2B4;border-radius:5px;-webkit-border-radius:5px;",
    "#container .thcss": "color:#11BB11;",
    ".thcol": "font-size:90%;color:#FF3300;",

    //*** 機能ボタン
    "#thb .ta":"text-decoration:none; margin:0 0.3em 0 0; padding:0.0em 0.4em; font-size:80%; background-color:#FFFFCC; border:1px #BBB solid; border-radius:5px;-webkit-border-radius:5px;",
    "#thb a:hover" : "background-color:#FFEE44;",

    //*** 投稿履歴
    ".hiscss": 'text-align:left; margin:0.4em 0; padding:0.5em; line-height:1.2em; font-size:80%; border:2px #CCC solid; background-color:#e6e6FF; color:#111; border-radius:7px; -webkit-border-radius:7px;',
    ".btncss1": 'padding:0.2em 0.6em 0 0.6em; margin-top:0.5em; font-size:100%; background-color:#AFA; border-radius:7px; -webkit-border-radius:7px;',
    ".btncss2": 'position:absolute; z-index:2; top:auto'
  },
    //*** Opera 12.17以前
  opera: {
    "#display":"font-size:70%;margin:0.2em",
    "#display .guide": "margin:0.2em 0; padding:0.2em 0.7em;",
    "#display .newcnt": "margin:0.2em 0; padding:0.2em 0.3em;",
    "#display .fmcss": "margin:0.1em 0 0.2em 0.5em; padding:0.2em 0.7em;"
  }
/*
  //*** スマホ用 元[g/bg002.gif]
  mbcss: {
   ".glist":"margin:0;padding: 0;",
   ".glist ul":"list-style-type: none; margin: 0; padding: 0;",
   ".glist li":"float: left;width:91px; margin: 1px 2px 2px 2px; padding: 0;",
//   ".glist li":"float: left;width:91px; margin: 1px 1px 2px 1px; padding: 0; border:outset 2px #889944;",
   ".glist a":"display:inline-block; width:91px; height:1.3em; text-align:center; padding: 0.4em 0; color:#00AA00; font-weight:bold; background-color:#f2f2f2; background-image:url("+$it.path.mbbg1+"); border:1px #BBB solid; border-radius:16px;-webkit-border-radius:16px;",
   ".glist a:hover":"background-color:#FFFFDD; color: #111111; text-decoration: none; background-image:url("+$it.path.mbbg1+");"
  }
*/
};
var _th ={
  init_css: function(){
    $it.addCSS(css.css);
    if(window.opera) $it.addCSS(css.opera);
  },
  //*** <hr> to <div>置き換え
  linePlace: function(id, i){
    var d, e = $ce('div'),t = $id(id);
    while(i--){
      (d=e.cloneNode(true)).className = "line";
      $Replace( d, t.getElementsByTagName('hr')[0]);
    }
  },
  //*** インラインスタイルの値を取得する
  getStyle: function(e){
    return e.currentStyle || document.defaultView.getComputedStyle(e, '');
  },
  //*** Tag 非表示/表示
  dispCtrlTag: function(t, n){
    $TagName(t)[n].style.display = 'none';
  },
  //*** ID要素 非表示/表示
  dispCtrlId: function(b, f){
    for(var i; (i = b.shift()) !== undefined; ){
      try{
        $id(i).style.display = (f)? 'block':'none';
      }catch(e){
        continue;
      }
    }
  },
  //*** 非表示にする
  displayOff: function(){
    if($it.FM()){
      _th.dispCtrlId(this.idlist1, false);
      //_th.dispCtrlTag('hr', 1);
    }
  },

  css: css,
  ckData: {},
  EXP: '14',    // Cookie保持期間
  cookie: $it.checkCookie(),
  cflags: [$it._SIDE_MENU, $it._CSIZE_FLAG2, $it._SF],
  sflags: [$it._THREAD_IS, $it._THREAD_ACTIVE,$it._NEW_MENU_FLAG,$it._HEADER_FLAG, $it._USER_W_FLAG,$it._CSIZE_FLAG1,$it._HEADER_KIND,$it._HEADER_KEEP, $it._SG_ISIMGFLAG, $it._SG_GEAR_NAME, $it._SG_NEWIMG_NAME, $it._SG_LOADING_NAME],

  idlist1: ['pr', 'gd', 'contact', 'sb3g1', 'ac', 'mnavi','ana', 'bgparts','inelem'],
  idlist2: ['thon','thoff','help','btn2','btn3','btn4','btn5','thid'],
  //*** 新着件数メニュー表示ON/OFF
  nmctrl: {fg:$it._NEW_MENU_FLAG, id1:'display', id2: 'ncd', id3: 'nop', exp: 365},

  //*** スマホ用初期化
  //guide1: [$it.path.gd1,'案内', $it.path.gd2,'規約', $it.path.gd3,'対応機種','/mbb/u/earthark/nt','新ｽﾚ作成','/mbb/u/earthark/se','検索', '/mbb/u/earthark/','再読'],
  //guide2: '<div id="xnavi" class="glist"><ul></ul></div><div style="clear:both"></div>',

  //*** スレッド一覧見出し
  head: '<div id="tht"><span class="intht">$1</span></div><div id="nop" class="gm" style="display:none"></div><div id="thb" style="clear:both">',

  //*** 新着件数コントロール
  onhead: '<dl id="display" class="guide"></dl>',
  onbody: '<dd class="newcnt">新着件数: <span id="sum" class="thsum"></span></dd><dd id="thon" class="guide" dtext="新着通知の開始">有効</dd><dd id="thoff" class="guide" dtext="新着通知の停止">無効</dd><dd id="help" class="guide" dtext="詳しい説明">説明</dd>',
  onframe: '<dd id="btn2" class="fmcss" dtext="スレッドと投稿を同時表示(Type-A)">分割表示A</dd><dd id="btn3" class="fmcss" dtext="スレッドと投稿を同時表示(Type-B)">分割表示B</dd>',
  onfsreset: '<dd id="btn4" class="fmcss" dtext="文字サイズ">文字</dd><dd id="btn5" class="fmcss rscss" dtext="新着/設定リセット">リセット</dd><div id="ncd" class="gm"></div>',
  offcode: '<dd style="color:#D00" class="ckcss">※ブラウザのCookie(クッキー)が無効です。有効にすると新着通知機能が利用できます。</dd>',
  onclear: '<dd style="clear:both;"></dd>',
  //*** 新着ツールチップ
  cton:    '既に有効になっています',
  ctset:   '新着件数通知を有効にしました',
  ctoff:   '既に無効になっています',
  ctreset: '新着件数通知を無効にしました',
  ctremove:'新着件数をリセットします<br>[NEW]表示がある時は1件になります',
  ctmess:  '投稿後に削除またはロックされています',
  fmmenu1: '分割画面のスタイルで表示します<br>【画面一杯に表示します(Type-A)】',
  fmmenu2: '分割画面のスタイルで表示します<br>【スレッド真横に表示します(Type-B)】<br><br>現在、試験運用中です',
  fmbotton: '移行する',
  //*** 文字サイズ
  char: '文字:',

  //*** インラインフレーム
  inlinecd: '<td style="width:56%;"><iframe src="" id="tbinframe" frameborder="0" name="_inframe"></iframe></div>',
  inlinemsg: '<dd id="box6" class="fmcss" style="clear:both; width:7em; margin:0;cursor:pointer">標準に戻す</dl>',

  //*** [再読]ボタン
  reload: { cn:'ta', msg:'常に最新の状態で再読込します'},

  //*** リセット後オブジェクト
  cbox: Object.create({
    css: {
      ".select-reset":"text-align:left; margin-top:1em; line-height:1.8em",
      ".recss":"vertical-align:0.2em"
    },
    html: '<div class="select-reset"><input value="" name="ren1" id="re1" type="checkbox"> <span class="recss">設定情報もリセットする</span><br><input value="" name="ren2" id="re2" type="checkbox"> <span class="recss">投稿履歴もリセットする</span></div>',
    //*** リセット後メッセージ
    msg: {m1:'新着件数', m2:'設定情報', m3:'投稿履歴', m4:'をリセットしました'}
  }),

  is: null
};

//console.log(Object.getPrototypeOf(it));
//console.log(it.constructor.prototype);

  _th.init_css();

  //*** スマホ用初期化
  mbpcInit();

  //*** 新着件数コントール
  newControl();

  //*** 新着を抽出表示
  newExtraction();

  //**** 新着ツールチップ
  newToolstips();

  //**** 分割インナーフレーム
  innerFrame();
/****************************
 * スマホ用初期化           *
 ***************************/
function mbpcInit(){
  //*** ガイドリンクを削除
  var t = $id('thread').innerHTML;
  t = t.replace( /\[|\]\[|\]/gi, '');
  t = t.replace( /<font.*>|<\/font>/ig, '');
  t = t.replace( /(ｽﾚ.+\))<br>/i, _th.head);
  t = t.replace( /<BR>/i,'</div>');
  $id('thread').innerHTML = t;

  if($it.SP && ($it.getCookie($it._SF) == '' || $it.getCookie($it._SF) == '0')){
    $('#container a').eq(0).remove();
    $('#container a').eq(0).remove();
    $('#container a').eq(0).remove();
  }else{
  //*** PC/その他
    //*** トップページパス書き換え
    var p = function(){
      $(this).attr('href', (/.+\/(\w+\.\w+)$/i.test($(this).attr('href')), $origin.base + RegExp.$1));
    }
    p.apply($('.bg_td').find('a'));
    $('#mnavi').find('a').each(function(){ p.apply($(this)); });

    //*** ボタン形式に変更
    $('#thb').find('a').each(function(){
      $(this).attr('rel','nofollow');
      $(this).attr('class', _th.reload.cn);
      $(this).focus(function(){ $(this).blur();});
      if($(this).text() === '再読'){
        this.title = _th.reload.msg;
        this.href = location.pathname+'?v='+(new Date()).getTime();
      }
    });
    if(_th.cookie){ 
      $('#thb').append($('<a class="'+_th.reload.cn+'" rel="nofollow" id="top_btn" href="#" title="投稿した履歴">投稿履歴</a>'));
      var a = ['#top_btn', '#bp']
      $it.hisRead( $(a[0]), $(a[1]) );
    }
  }
  $id('tht').style.cssText = "width:"+($('#tht').find('span').width()+16)+"px";

  var t = (new Date()).getTime()+'';
  t = t.substring(0,8);
  $('#bp').html(
    $('<div class="guide">test</div>')).append($('<form action="http://9.tool.ms/mail.cgi?earthark" method="post">'+
    '<input type="hidden" name="id" value="earthark">'+
    '<input type="hidden" name="se" value="488Ia.7Y">'+
    '<input type="hidden" name="es" value="'+t+'">■email<br>'+
    '<input type="text" name="0" value=""><br><br>■件名 *<br>'+
    '<input type="text" name="1" value=""><br><br>■お名前(ハンドルネーム) *<br>'+
    '<input type="text" name="2" value=""><br><br>■メール本文 *<br>'+
    '<textarea name="cmt" rows=6 cols=50></textarea><br>'+
    '<input type="submit" value="送信"><br></form>'));
}
/****************************
 * 新着件数コントール       *
 ***************************/
function newControl(){
  //*** <hr>5番目削除
  $rm( $TagName('hr')[5] );

  //*** 新着制御ボタン
  $('hr').eq(1).replaceWith( $(_th.onhead).html( (_th.cookie? _th.onbody : _th.offcode) ));
  // var h ='<dl id="display" class="guide">'+(_th.cookie? _th.onbody : _th.offcode)+'</dl>';
  // _th.replace($TagName('hr')[1], h);
  //_th.replace($TagName('hr')[1], _th.html(_th.onhead, (_th.cookie? _th.onbody : _th.offcode)));

  if(! _th.cookie) return;

  var e = $('#display');
  //var e = _th.qs('#display');
  if(!$it.SP){
     //*** 独立・分割フレームボタン
     e.append( _th.onframe);
  }
  //*** 文字サイズボタン・リセットボタン
  e.append( _th.onfsreset);
  e.append( _th.onclear);

  //*** スマホは段落する
  if($it.SP && ($it.getCookie($it._SF) == '' || $it.getCookie($it._SF) == '0')){
    $('.newcnt').css('float','none');
    $('#help').css({'border-right':'1px #AAA solid'});
  }

  //*** 文字サイズ
  $it.charSize({id:'btn4', char:_th.char, name:$it._CSIZE_FLAG1, type:true, rw:false});

  //*** 新着件数メニュー表示ON/OFF
  newCtrlFunc();

  if(! $it.IM() && $it.FM()){
   _th.dispCtrlTag('hr', 4);
   sideMenu();
  }
}
/****************************
 *  新着を抽出表示          *
 ***************************/
function newExtraction(){
  //*** <hr> to <div>line置換
  _th.linePlace('container', 3);

  //***[設定]直後の<hr>を削除
  try{ $rm($TagName('hr')[1]); }catch(e){};
  
  if(! _th.cookie) return;

  if($sg.get($it._THREAD_IS) === ''){
    $sg.set($it._THREAD_IS, "lazy", _th.EXP);
	$sg.set($it._THREAD_ACTIVE, "on", _th.EXP);
  }
  //*** 現在の選択色を設定
  exchange();

  //*** 新着を抽出処理
  newExtractionExec();
}
//*** 現在の選択色を設定
function exchange(){
  if($sg.get($it._THREAD_ACTIVE) === 'on'){
    $id('thon').style.backgroundColor = 'EB1';
    $id('thoff').style.backgroundColor = '#E0DD11';
  }else{
    $id('thon').style.backgroundColor = '#E0DD11';
    $id('thoff').style.backgroundColor = '#EB1';
  }
}
// a：新着通知の有効:on/無効:off(Cookie)
// ath:スレッドNo.
// act:投稿数
// n:新規投稿数
// cnt:新規投稿総数
// 戻り値:cnt
function newExtractionExec(){
  //console.time('timer');
  //var startTime = new Date();

  var re2 = /E6D9\.gif/i;
  //var re1 = /^<a href=".*\/mbb\/u\/.+\/(\d+)\/">.+\((\d+)\)<\/a>$|^<a href=".*db-wr/i;
  var re1 = /\/(\d+)\/.+\((\d+)\)<\/a>$|db-w/i;

  var e = $id("container").childNodes;
  //var e = $id("inAnchor").childNodes;

  var f = document.createElement('span');
  f.name = "sta";
  f.className = "thcss";
  f.innerHTML = "-&nbsp;";
  var g = document.createElement('span');
  g.id = "thid"
  g.name = "sta";
  g.className = "thcol";

  for(var a=( _th.cookie )? ($sg.get($it._THREAD_ACTIVE) === 'on'): false, c, b, d,i=0, j=e.length, n, ath, act, cnt=0; i < j; i++){
    if( ! re1.test(e[i].outerHTML)) continue;

    ath = 'th'+RegExp.$1;
    act = _th.ckData[ath] = RegExp.$2;
    e[i].previousSibling.parentNode.replaceChild( (a)? f.cloneNode(true):document.createTextNode('●'), e[i].previousSibling );
    c = e[i].nextSibling;
    //*** 投稿無し
    if(c.nodeName === 'BR'){ $sg.set(ath, 'T'+act, _th.EXP); continue; }

    //*** [key] or [new]の処理
    if( re2.test(c.src) ){
      if( c.nextSibling.nodeName === 'BR' ) continue;
      c.nextSibling.nextSibling.src = $it.path._NEWA; //[new]⇒画像置換;   // <img>
    }else{
      c.nextSibling.src = $it.path._NEWA; //[new]⇒画像置換;   // <img>
      c.nextSibling.style.width = "32px";
      c.nextSibling.style.height= "16px";
    }
    if(!a) continue;

    if((b = $sg.get(ath)) === '') $sg.set(ath, b = 'T'+(act-1), _th.EXP);

    d = g.cloneNode(true);
    d.innerHTML  =
    (function(){
      if((n = act - b.substr(1)) <= 0){
        $sg.set(ath, 'T'+act, _th.EXP);
        return '# ';
      }else{
        cnt += n;
        return n+' ';
      }
    })();
    e[i].previousSibling.parentNode.replaceChild(d, e[i].previousSibling);
  }
  $id('sum').innerHTML = (a)? cnt: '×';

  //var endTime = new Date();
  //console.log("Time:"+ (endTime - startTime));
  //console.timeEnd('timer');
}
/****************************
 * 新着ツールチップ         *
 ***************************/
function newToolstips(){
  if(! _th.cookie) return;
  //*** ツールチップ表示
  for(var col, s = _th.idlist2, id=[], j=s.length, i=0; i<j; i++) id[i] = '#'+s[i];
  $(id.join(',')).on({
    'mouseover': function(){
      col = $(this).css('background-color');
      if($(this).attr('id') === s[7]){
        if($(this).text().substr(0,1) !== '#') return;
        $(this).addClass("tt1").css('color','#0044FF').append( $( '<div>'+ _th.ctmess +'</div>' ).addClass("plm").show('slow'));
      }else{
        $(this).addClass("tt2").css('background-color','#E6B0E6').append( $( '<div>'+ $(this).attr("dtext")+'</div>' ).addClass("tooltips").show('slow'));
      }
    },
    'mouseout': function(){
      if($(this).attr('id') === s[7]){
        $(this).css({'color':'#FF3300'});
      }else{
        $(this).css({'background-color':col});
      }
      $(this).find('div').remove();
      //*** 現在の選択色を設定
      exchange();
    },
    'click': function(){
        switch($(this).attr('id')){
        case s[0]: return evntConsole.call(['on', _th.cton, _th.ctset]);
        case s[1]: return evntConsole.call(['off', _th.ctoff, _th.ctreset]);
        case s[2]: return $it.modal_open({url: $it.path._HELP,text: null, width: 380, height: 0, align:'left', button: null, callback: null});
          break;
        //*** 分割表示A
        case s[3]: return $it.modal_open({ url:null, text:_th.fmmenu1, width:240, height:0, align:'center', button:_th.fmbotton, callback:sideMenu});
          break;
        //*** 分割表示B
        case s[4]: return $it.modal_open({ url:null, text:_th.fmmenu2, width:240, height:0, align:'center', button:_th.fmbotton, callback:function(){innerFrameMove()}});
          break;
        //*** 文字サイズ変更
        case s[5]:
          $it.charSize({id:this.id, char:'文字:', name:$it._CSIZE_FLAG1,type:true, rw:true});
          break;
        //*** 新着件数・設定クリア
        case s[6]:
          return evntConsole.call(['clr', _th.ctremove]);
      }
    }
  });
}
/****************************
 * インナーフレーム判定     *
 ***************************/
function innerFrame(){
  if(! _th.cookie || $it.IM() == '') return;
  innerFrameMove();
}
/****************************
 * インナーフレーム処理     *
 ***************************/
function innerFrameMove(){
  $it.setCookie('mm', '1', $origin.cpath, 1);
  //console.log("入る前:mm: "+$it.getCookie("mm"));
  $(window).scrollTop( Math.round($it.boxInfo.offsetHeight($('#thread')[0])) );
  $('.newcnt').css('float','none'); // 段落させる
  _th.dispCtrlId(['btn2', 'btn3','btn4'], false);

  $('table:eq(2)').find('tr:eq(0)').append(_th.inlinecd);
  $('#tbinframe').attr('src', addTaget('_inframe')).css({ width:'100%', height : Math.round($('table tr:eq(2)').height()) });
  $('#ncd').after(_th.inlinemsg);

  $('#box6').click(function(){
    $it.clearCookie('mm', $origin.cpath);
    //console.log( "切替後:mm: "+$it.getCookie("mm") );
    addTaget('_top');
    $('table tr:eq(2)').find('td:eq(1)').remove();
    $('.newcnt').css('float','left'); // フロート
    _th.dispCtrlId(['btn2', 'btn3','btn4'], true);
    $('#box6').remove();
    return false;
  });
}
/******************************
 * 新着件数メニュー表示ON/OFF *
 *****************************/
function newCtrlFunc(){
  //this.nmctrl = {fg:'gf', id1:'display', id2: 'ncd', id3: 'nop', exp: 365};
  $id(_th.nmctrl.id2).onclick = function(e){
    $sg.set(_th.nmctrl.fg, '', _th.nmctrl.exp);
    newCtrlFunc();
  }
  if($sg.get(_th.nmctrl.fg) === '1') return;
  _th.dispCtrlId([_th.nmctrl.id1], false);
  _th.dispCtrlId([_th.nmctrl.id3], true);
  $id(_th.nmctrl.id3).onclick = function(e){
    $sg.set(_th.nmctrl.fg, '1', _th.nmctrl.exp);
    _th.dispCtrlId([_th.nmctrl.id1], true);
    _th.dispCtrlId([_th.nmctrl.id3], false);
  }
}
/***************************
 * <a>にターゲット属性付加 *
 ***************************/
function addTaget(name){
  var re1=/\/(\d+)\//i, re2=/writing[\d]?\./i;
  $('#container a').filter(function(index){
    return re1.test($(this).attr('href')) || re2.test($(this).attr('href'));
  }).attr('target',name);
  $('#thb').find('a:eq(0)').attr('target',name); // 新スレ作成
  $('#thb').find('a:eq(1)').attr('target',name); // 検索
  return $('[target='+name+']:eq(2)').attr('href');
}
/*******************************
 * Cookie・Storageデータクリア *
 *******************************/
/*
  //*** リセット後オブジェクト
  cbox: Object.create({
    css: {
      ".select-reset":"text-align:left; margin-top:1em; line-height:1.8em",
      ".recss":"vertical-align:0.2em"
    },
    html: '<div class="select-reset"><input value="" name="ren1" id="re1" type="checkbox"> <span class="recss">設定情報もリセットする</span><br><input value="" name="ren2" id="re2" type="checkbox"> <span class="recss">投稿履歴もリセットする</span></div>',
    //*** リセット後メッセージ
    msg: {m1:'新着件数', m2:'設定情報', m3:'投稿履歴', m4:'をリセットしました'}
  }),
*/
function evntConsole(f){
  // スレッドデータ消去
  if(this[0] == "clr"){ 
    //*** チェックボックス・コールバック
    var clearExec = function(a, b){
      var n=[0,0], hs = {
        DATA: 'forum-data',
        STATUS:'forum-status',
        NAME: 'forum-name',
        TIME :'forum-time',
        THREAD :'forum-thread',
        CONTENT: 'forum-content',
        POSITION: 'forum-position',
        LENGTH: 'forum-length'
      };
      //*** 新着件数をリセット
      var c, k = _th.sflags;
      if($sg.has){
        $sg.remove(k.shift());
        $sg.remove(k.shift());
        for(key in _th.ckData) {console.log(key); $sg.remove(key);}
      }
      if(a){
        if($sg.has){
          while( c = k.shift() ) $sg.remove(c);
        }
        for(k = _th.cflags; c = k.shift();) $it.clearCookie(c, $origin.cpath);
        /*
        console.log("--------");
        console.log("mm: "+$it.getCookie("mm"));
        console.log("sm: "+$it.getCookie("sm"));
        console.log("mss: "+$it.getCookie("mss"));
        console.log("sp: "+$it.getCookie($it._SF));
        console.log("--------");
        */
        n[0] = 1;
      }
      if($sg.has && b){
        //*** 投稿履歴消去
        $it.his.sgClear();
        n[1] = 1;
      }
      var a = _th.cbox.msg;
      var t = a.m1+a.m4;
      if(n[0]) t += '<br>'+a.m2+a.m4;
      if(n[1]) t += '<br>'+a.m3+a.m4;
      $it.modal_open({text: t, width:200, height:0, align:'center'});

      //*** 現在の選択色を設定
      exchange();
      //*** 新着を抽出処理
      newExtractionExec();
      //*** 新着件数メニュー表示ON/OFF
      newCtrlFunc();

	  //location.reload();
      return;
    };
    //*** 地震ブログパーツが存在したらCSSチェックしない
    if( $id($it.jishin_id2) != null || $id($it.jishin_id1) != null){
        $it.addCSS(_th.cbox.css);
    }else{
      //console.log( cssSearch('.select-reset') );
      if( $it.cssSearch('.select-reset') == false) $it.addCSS(_th.cbox.css);
    }
    $it.modal_open({add:_th.cbox.html, url:null, text:this[1], width:260, height:0, align:'center', button:"リセット", callback:clearExec});

  }else{
    // 機能ON/OFF
    if($sg.get($it._THREAD_ACTIVE) === this[0]){ 
      $it.modal_open({text: this[1], width:200, height:0, align:'center', callback:null});
    }else{
      $sg.set($it._THREAD_ACTIVE, this[0], _th.EXP);
      $it.modal_open({text: this[2], width:200, height:0, align:'center'});
      newExtractionExec();
    }
  }
}
/****************************
 * サイドメニュー           *
 ****************************/
function sideMenu(){
//alert('標準:'+document.documentElement.clientWidth); //標準モード
//alert('互換:'+document.body.clientHeight);      // 互換モード
  var css = {
    main:{
      //*** スレッド一覧
      '#content_size' : 'float:none;',
	  '#thread':'z-index:1; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;',
      '#container #thb': 'margin:0.4em 0;',
      '#container a' : 'padding:0; line-height:1.2em;',
	  '#container a:link': 'color:#0055FF;text-decoration:none;',
	  '#container a:visited': 'color:#0055FF;text-decoration:none;',
	  '#container a:hover': 'background-color:#FFEE66;text-decoration:none;',
      '#container':'width:100%;',
      //*** 見出し
	  "#setframe .framehead": 'background-color:#EEEEFF;border:2px #CCC solid; border-radius:7px;-webkit-border-radius:7px;margin:0; padding:0.5em 0;-moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;'+$it.gradi('white', '#DDD_DFF'),
      "#setframe .selecthead": 'cursor: default; width:9em; vertical-align:middle; padding:0.4em 0.6em; text-align:center; margin:0 auto; color:#FFF; font-weight:bold; font-size:100%; background-color:#FFF; border-radius:4px; -webkit-border-radius:4px;background-color:#60A0D0; box-shadow: 1px 1px 2px black;'
    },
    mainIE:{
	  '#display': 'font-size:70%;'
    }
  };
  if($it.MSIE) $it.addCSS(css.mainIE);
  $it.addCSS(css.main);

  //*** サイドメニュー有効フラグ
  $it.setCookie($it._SIDE_MENU, '1', $origin.cpath, 1);
  
  //*** 非表示にする
  _th.displayOff();

  //*** 分割表示/文字サイズボタンを非表示
  _th.dispCtrlId(['btn2', 'btn3','btn4'], false);

  //*** 背景画像変更
  $(window).scrollTop(0);
  $('body').css('background-image', 'url('+$it.path._FRAME_BG+')');

  //*** トップ位置取得
  $('hr:first').replaceWith('<div style="border-top:1px #aaa solid; margin:0; padding:0"></div>');
  var ptop  = $('div:first').offset().top+1;
  var pleft = $('#content_size').offset().left;
  var wsize = 360;

  $('#setframe').append('<div id="box" class="framehead"><div id="chk" class="selecthead" title="通常画面へ戻る">通常画面へ戻る</div>');

  var setcss = function(p1, p2, p3, p4){
    return {'position':'absolute', 'top':p3, 'left':p4, 'width':p1,'height':p2};
  };

  $('#box').css(setcss(wsize+'px', 'auto', ptop, pleft));

  $('#chk').on({
    'mouseover': function(){ $(this).css('background-color','#80D0E0'); },
    'mouseout': function() { $(this).css('background-color','#60A0D0'); },
    'click': function(){
    /*
    $it.addCSS({
      'table': 'width:100%',
      '#content_size':'width:932px;margin:0 auto;text-align:left;',
      '#container a:link' :'text-decoration:none;',
      '#container a:visited':'text-decoration:none;',
      '#container a:hover':'background-color:transparent;text-decoration:underline'
    });
    $('#onframe').attr('src', '');
    $('#box').remove();

    $id('setframe').innerHTML = '';
    _th.dispCtrlId(['btn2', 'btn3','btn4'], true);
    _th.dispCtrlId(['pr','gd','contact','inelem','bgparts','sb3g1','ac', 'mnavi','ana'], true);
    $id('thread').style.width  = _th.is[0];
    $id('thread').style.height = _th.is[1];
    $id('thread').style.position = _th.is[2];
    $id('thread').style.top = _th.is[3];
    $id('thread').style.left = _th.is[4];
    */
      $it.clearCookie($it._SIDE_MENU, $origin.cpath);
	  location.reload();
	  return false;
     }
  });
  //e = _th.getStyle( $('#thread')[0] );
  //_th.is = [e.width, e.height, e.position, e.top, e.left];

  //*** スレッド一覧
  $('#thread').css(setcss(wsize+'px', $it.boxInfo.innerHeight - 8 - (ptop - $it.boxInfo.scrollTop) - $it.boxInfo.offsetHeight($('#box')[0])+'px', $it.boxInfo.bottom($('#box')[0])+2, pleft));

  // フレーム内は$('#onframe').contents();で取得する
  //var fr = $('#onframe').contents();

  //*** インラインフレーム表示
  var wsize = $it.boxInfo.right($('#content_size')[0]) - $it.boxInfo.right($('#thread')[0]);
  var pleft = $it.boxInfo.right($('#thread')[0]) + 2;
  (function framePut(w, atop, aleft){
    $('#onframe').attr({
      //*** <a>にターゲット属性付加
      'src': addTaget('_frame'),
      'width': w,
      'height': $it.boxInfo.innerHeight - 8 - (ptop - $it.boxInfo.scrollTop),
      'frameBorder': '0',
      'scrolling': 'auto',
      'style': 'display:block; position:absolute; border-radius:7px; -webkit-border-radius:7px; top:'+ atop +'; left:'+ aleft
    }).on('load', function(){
      //*** ロード完了処理
      var e = $('#thread')[0];
      if(e == '' || e == null) return;
      //*** スタイル属性の値を取得する
      e = _th.getStyle(e);
      e = e.borderTopWidth+' '+e.borderTopStyle+' '+e.borderTopColor;
      var a=1*2, b=$('#thread')[0].style, c=0, d = setInterval(function(){
        b.border = (c = ~c)? e:'3px #0A0 solid';
        if( a-- ) return;
        b.border = e;
        clearInterval(d);
      }, 200);
      return false;
    });
  })(wsize, ptop, pleft);
}
};
$it.addListener(window, "DOMContentLoaded", $it.newcount);

  //window._frame.location.href = path;
  //ajaxload(path);
//***********************************************************************************
/*
  //
  //*** 定義済みスタイル取得
  //
  var childFrame = function(e){
    e = e.contentWindow || e.contentDocument;
    return (e.document)? e.document:e;
  };
  //
  //*** ボータイベント
  //
  //
  //*** ajax非同期
  //
  function ajaxload(uri){
    //var url = 'getajax.php?url=http://www.perfume-web.jp/';
    var url = uri;
    var xmlHttp;

    if (!window.XMLHttpRequest){
	  XMLHttpRequest = function () {
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch (e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch (e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch (e) {}
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch (e) {}
	    throw new Error('This browser does not support XMLHttpRequest.');
	  };
    }
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, true);
    xmlHttp.setRequestHeader('Content-Type' , 'text/html; charset=Windows-31J');
    try{ xmlHttp.overrideMimeType('text/plain; charset=shift_jis') }catch(e){}
    xmlHttp.onreadystatechange = function res(){
	  if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        e = $ce('textarea');
        e.name = 'de';
        e.rows = '30';
        e.cols = '80';
        e.innerHTML = xmlHttp.responseText;
        e.style.cssText = 'z-index:100;overflow:auto; position:absolute; top:0; left:100px;';
        $id('wsput').appendChild(e);
		//document.getElementById('ajaxid').firstChild.nodeValue = xmlHttp.responseText;
	  }
	  if(xmlHttp.readyState == 4 && xmlHttp.status == 0){
        e = $ce('textarea');
        e.name = 'de';
        e.rows = '40';
        e.cols = '40';
        e.innerHTML = xmlHttp.responseText;
        e.style.cssText = 'overflow:auto; position:absolute; top:110px; left:600px;';
        $id('wsput').appendChild(e);
		//document.getElementById('ajaxid').firstChild.nodeValue = xmlHttp.responseText;
	  }
    };
    xmlHttp.send(null);
  }
  //
  //*** ウィンドウ表示
  //
  function putwin(wsize){
	//var wsize = 500;
	var hsize = $it.boxInfo.innerHeight - 8 - (ptop - $it.boxInfo.scrollTop);
	var ptop = screen.availHeight - $it.boxInfo.innerHeight - $it.boxInfo.scrollTop;
	var pleft = $it.boxInfo.right($id('content_size')) - wsize+4;
	var para = 'width='+wsize+',height='+hsize+',left='+pleft+',top='+ptop+', directories=no, location=no, resizable=yes, titlebar=no, location=no, scrollbars=yes, toolbar=no, menubar=no, status=no';
	swin = open('', '_frame', para);
    swin.location.href = path;
	swin.focus();
	swin.onblur = function(){swin.focus();}
	//swin.onblur = swin.focus();
	//swin.onfocus = function(){this.blur();}
    _onfocus = function(evt){
      var evt = evt || window.event; // IE:window.event
	  var obj = evt.target || event.srcElement;  // IE:event.srcElement
	  if(swin != null && swin != ''){
	    if(!swin.closed){
		  swin.focus();
	    }
	  }
    };
    $it.addListener($TagName('body')[0], 'click', _onfocus);
  }


  $("#container").on({
    'keydown': function(e){
      alert( e );
      var keycode = e.which; 
      switch(keycode){
        case 40:
            alert("↓");
            break;
        case 38:
            alert("↑");
            break;
        }
        // イベントの上位伝播を防止 
        e.preventDefault(); 
        e.stopPropagation(); 
      }
  });
*/
/*
m=0;
s=0;
  window.document.onkeyup = function(e) {
  var ac = this.getElementById("container").getElementsByTagName("a");

    switch(e.which){
      case 40:
        if(s == 0) return;
        if(m == s) return;
        
        s = m;
        ac = ac[7+m];
        ac.style.cssText = "border:1px solid #080";
        ac.focus();
        ++m;
        //alert("↓");
        break;
      case 38:
        alert("↑");
        break;
    }
    // イベントの上位伝播を防止 
    e.preventDefault(); 
    e.stopPropagation(); 
  };
*/
/*
  //---------------------------------------------
  // [Navigation Timing API]のテスト
  //---------------------------------------------
  //  windows.performance.navigation.typeの値は、
  //  1 :リロードを行ってページを読み込んだことを示す。
  //  2 :ブラウザーの進む・戻るといったヒストリー情報を使ってページを読み込んだ場合。
  //  0 :それ以外の場合、例えばクリックや直接URLを打ち込んだりしてページにたどり着いた場合。
  var performance = window.performance;
  if(performance) {
    var timing = performance.timing;
    console.log("リダイレクト: " + performance.navigation.redirectCount);
    console.log("ロードタイプ: " + performance.navigation.type);
    console.log("リダイレクト: " + (timing.redirectEnd - timing.redirectStart));
    console.log("アプリケーション・キャッシュ: " + (timing.domainLookupStart - timing.fetchStart));
    console.log("DNS取得時間: " + (timing.domainLookupEnd - timing.domainLookupStart));
    console.log("TCP接続時間: " + (timing.connectEnd - timing.connectStart));
    console.log("リクエスト時間: " + (timing.responseStart - timing.requestStart));
    console.log("レスポンス時間: " + (timing.responseEnd - timing.responseEnd));
    console.log("DOMの構築時間: " + (timing.domComplete - timing.domLoading));
    console.log("onLoadイベント: " + (timing.loadEventEnd - timing.loadEventStart));
  }
*/
  //ctdown();
/*
  //--------------------------------------------
  // カウントダウン
  //--------------------------------------------
  function ctdown(){
  if( ! $it.checkCookie() ) return;
  var date_calc = function(obj){
    //var year = ((y=(new Date()).getYear()) < 1900)? y += 1900: y;
    var ct={}, a, b;
    var nday = new Date();
    var xday = new Date(obj.year, obj.month-1, obj.day, obj.hour, obj.minute, obj.second);
    a = xday.getTime() - nday.getTime();
    b = 60*60*1000;
    ct.da = Math.floor(a/(24*b)); // 日
    ct.ho = Math.floor((a/b)%24); // 時
    ct.mi = Math.floor((a%b)/(60*1000)); // 分
    ct.se = Math.floor((a%b)%(60*1000)/1000); // 秒
    ct.flag = (!ct.da && !ct.ho && !ct.mi && !ct.se);
    ct.dc = ct.da+'日' + ct.ho+'時間' + ct.mi+'分' + ct.se+'秒';
    return(ct);
  };
  var date_html = '<tr><td id="ctct"><div class="tt1">〈hiroboh forever2015〉9/1 19時開演まで</div><div class="tt2"></div></td></tr>';
  var xd = {year:2015, month:9, day:1, hour:19, minute:0, second:0};
  //var xd = {year:2015, month:8, day:29, hour:22, minute:11, second:0};
  var dt = new Date(), mo = dt.getMonth()+1, da = dt.getDate();

  if(  mo !== 8 && mo !== 9
    || mo === 8 && da < 24
    || mo === 9 && da > 1
    || date_calc(xd).da < 0 ) return;

  //*** カウントダウン表示
  $('table tr:eq(2)').before(date_html);
  //*** インターバル
  var itm = setInterval(
    function (){
      // 指定日時からダウンカウント
      var tm = date_calc(xd);
      $('#ctct').find('div:eq(1)').text( ((tm.da)? tm.da+'日': '') + tm.ho+':' + ((tm.mi < 10)? '0'+tm.mi:tm.mi) +':' + ((tm.se < 10)? '0'+tm.se:tm.se) );
      if(tm.flag) clearInterval(itm);
    }
  ,1000);
  }
*/
/*
  var nor = 'font-family:Osaka-mono,"Osaka－等幅",Consolas,"Courier New","Courier",Monaco,"ＭＳ ゴシック","MS Gothic",monospace;';
  $it.addCSS({
	'#bd': 'font-size:78%;',
	'#bd .btop': 'margin-top:0.3em;padding:6px 5px;  width:160px; border:1px #AAA solid;background-color:#F1FFFF;overflow:hidden;border-radius:7px;-moz-border-radius:7px;-webkit-border-radius:7px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; -ms-box-sizing: border-box; box-sizing: border-box;',
	'#bd .in_top': 'padding:4px 4px;background-color:#EEEEFF;text-align:center;font-weight:bold;',
	'#bd .in_title': 'padding:4px 4px;background-color:#FFF6FF;text-align:center;font-weight:bold;',
	'#bd .in_title2': 'height:18px;margin-bottom:4px;padding:2px 2px 0 2px;background-color:#DFF;border:1px #888888 solid;',
	'#bd dd': nor + 'cursor: default; margin:0;padding:0;line-height:1.3em;',

    '#bd a': 'text-decoration:none;',
	'#bd .bircalc': 'margin:0.3em 0;padding:0.2em;border:1px #abe solid;background-color:#FFFFDD;border-radius:5px;-moz-border-radius:5px;-webkit-order-radius:5px;',

	'#bd .line': 'border-top:1px #AAA solid;margin:3px 0;',

	'#bd .pon': 'margin:0;padding:2px 4px;border:1px #AABBEE solid;background-color:#DDFFEE;color:#111111; border-radius:5px;-webkit-border-radius:5px;',
	'#bd .poff': '_display:inline',

	'#bd .tpon': 'z-index:1; position: absolute;top:0.5em; left:0.9em;margin:0;padding:0.3em 0.5em;background-color:#2266FF;color:#f1f1f1; border-radius:5px;-webkit-border-radius:5px;',
	'#bd .tpon:after': 'width: 100%; content: ""; display: block; position: absolute; left: 0.5em; top: -8px; border-top:8px solid transparent; border-left:8px solid #2266FF;'
	//'#bd #bir_id':'line-height:1.6em;'
  });
  $('table:eq(2)').before('<div id="bd"></div>');
  birthday( $('#bd') );
/*
var Perfume = function(){
  this.member = {
    name1: 'あ～ちゃん',
    name2: 'かしゆか',
    name3: 'のっち'
  };
};
Perfume.prototype.group = function(){
  console.log(this.member.name1);
  console.log(this.member.name2);
  console.log(this.member.name3);
}
var m = Object.create(new Perfume);
m.group = function(){
  console.log('mikiko');
} 
console.log(m.member.name2);
*/
