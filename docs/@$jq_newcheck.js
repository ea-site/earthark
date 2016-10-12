/*
 * 文字サイズ変更＆新規投稿者表示(jQuery)
 *
 *  * LastUpdate:2015-03-09(月) v5.00
 */
$it.newcheck = function(){
//$(function newcheck(){
  var $origin = $it.$origin;
  var $sg = $it.$storage;

  var $id  = $it.$id;
  var $class = $it.$class;
  var $TagName = $it.$TagName;
  var $Name = $it.$Name;
  var $cText = $it.$cText;
  var $ce = $it.$ce;
  var $rm = $it.$rm;
  var $Replace = $it.$Replace;
  var $Before = $it.$Before;
  //*** <input>オブジェクト ***
  var $input = function(t, v, te){
    var e = $ce("input");
    e.type  = t;
    e.value = v;
    e.title = te;
    e.onfocus = function(){this.blur();}
    return e;
  };
  //*** 不具合解消：文字カラーコード：#EEEEEE → #111111
/*
  $('#container font').each(function(){
    $(this).attr('color', $(this).attr('color').replace(/\#EEEEEE/i, "#111111"));
  });
*/
  //*** ガラケーならリターン
  if($it.BC) return false;

  var MESSAGE = (/\/\d+\/(;.+|dj.*|v.*)?$/i.test(location.pathname) || /writing[2]?\.html$/i.test(location.pathname));
  var SEARCH = (/\/(tse.*|se.*)$/i.test(location.pathname) || /db-write-se.html$/i.test(location.pathname));
  var WRITE  = (/\/(nt.*|nm.*|um.*|dt.*)$/i.test(location.pathname) || /write\.html$/i.test(location.pathname));
  var SINGLE = (/\/\d+\/\d+$/i.test(location.pathname) || /up.html|writing[2]?\.html$/i.test(location.pathname));
  var IMAGE  = (/\/va.*$/i.test(location.pathname) || /image\.html$/i.test(location.pathname));

  //*** 機能オブジェクト
  var func_obj ={
    mobj:{
      id:'radioid',
      ex: headerExec,
      cf: $it._HEADER_FLAG,
      off:'見出しOFF',
      on:'見出しON'
    },
    robj:{
      id:'newres',
      ex: bodyExec,
      cf: $it._USER_W_FLAG,
      off:'新投稿者リストOFF',
      on:'新投稿者リストON'
    }
  };
  //$sg.remove(func_obj.mobj.cf);
  //$sg.remove(func_obj.robj.cf);

  //*** 初期化(リンク装飾／文字サイズ調整)
  initExec();
  if( MESSAGE ){
    //*** 投稿ボタン処理
    bottomExec();
    //*** 見出し処理
    headerExec(); // m=1:従来ヘッダ / m=0:拡張ヘッダ 
    //*** 新規投稿者の表示
    bodyExec();
  }else if(SINGLE || SEARCH){
    //*** 新規投稿者の表示
    bodyExec();
  }else if( WRITE ){
    //*** 投稿フォーム処理
    writeExec();
  }
  funcSwitch(func_obj.mobj);
  funcSwitch(func_obj.robj);
  fontChange();

  if($it.IM()) $(window).scrollTop( Math.round( $it.boxInfo.top( $('#newout')[0] )-10 ) );

  //*** ページ内スクロール微調整
  if(! $it.SP) return;
  $('#newres a').on({
    'click': function(evt){
      if( ! /^#(.+)/i.test($(this).attr('href')) ) return;
      $(window).on({
        'scroll': function(){
          $(window).scrollTop( $(window).scrollTop() - 50 );
          $(window).off();
        }
      });
    }
  });
/**************************************
 * 機能切り替え
 *************************************/
function funcSwitch(obj){
  var func = {
    a:'<div><a href="javascript:void(0)">',
    b:'</a></div>',
    css: {'text-align':'right','border':'none','background-color':'transparent'},
    css2: {'text-align':'right'},
    headerSet: function(obj){
      $('#'+obj.id).html('').css(this.css).append( $(this.a+obj.on+this.b).find('a').on({
        focus: function(){ $(this).blur(); },
        click: function(){
          $(this).parent().remove();
          $sg.set(obj.cf, '1', 90);
          obj.ex();
          func.headerReset(obj);
          return;
        }
      }));
    },
    headerReset: function(obj){
      $('#'+obj.id).append( $(this.a+ obj.off +this.b).css(this.css2) );
      $('#'+obj.id).find('a:last').on({
        focus : function(){$(this).blur();},
        click : function(){ $sg.set(obj.cf, '', 90); func.headerSet(obj); }
      });
    }
  };
  ( $sg.get(obj.cf) == '' )? func.headerSet( obj) : func.headerReset( obj );
}
/**************************************
 * 初期化(リンク装飾／文字サイズ調整) *
 *************************************/
//'#efefef','#D0f3f3'
function initExec(){
  $it.addCSS({
    //*** 文字サイズ vertical-align:middle;
	"#font-chg": "margin:0 4px;text-align:right;",
	"#font-chg .fsc": "font-size:75%; cursor:pointer;  margin:0; margin:0.2em 0; padding:0 0.7em; font-weight:normal; border:1px #088 solid;background-color:#00A090;color:#EEE;text-decoration: none;border-radius:5px; -webkit-border-radius:5px; box-shadow: 1px 1px 2px black;",
    "#font-chg a:hover": "background-color:#E0B6E0;",

    //*** 文字サイズ
    ".sw": "font-size:80%;margin:0.1em 0; padding:0 0.6em; font-weight:normal; border:1px #088 solid;background-color:#00A090;color:#EEE;border-radius:5px; -webkit-border-radius:5px; box-shadow: 1px 1px 2px black;",
    "#fcg a:hover": "background-color:#E0B6E0; text-decoration:none;",

    //*** 投稿ガイド枠
	"#newout .post-guide": "line-height:2.0em;text-align:center;font-size:85%;margin:0.2em 0 0.6em 0;padding:0.4em;background-color:#DFEEFF; border-radius:7px; -webkit-border-radius:7px;"+$it.gradi('#e9e9e9','#D0e1e1'),
	"#newout .posting": "font-size:100%;display:inline-block; margin:0.4em 0;padding:3px 6px;",
    
    //*** 見出しボタン
	"#newout #radioid": "font-size:90%; margin:0 0 0.5em 0;padding:0.2em 0.4em; background-color:#FFEEEE; border:1px solid #AAA;border-radius:5px;-webkit-border-radius:5px;",
    "#radioid input": "vertical-align: -0.1em;",
    "#newout .subject": "display:block; cursor:pointer;text-decoration:none; vertical-align:middle; width:36px; margin:0.2em; padding:0.1em 0.1em; color:#0044FF; font-size:90%; text-align:center; border:1px #aaa solid; background-color:#F2E0a2; border-radius:5px; -webkit-border-radius:5px;",
//    "#newout #radioid a:hover": "background-color:#E0B6E0;",
    "#newout .radioerr": "text-align:center;color:#C00",
    "#radioid span": "margin-left:0.3em",

    //*** 新レス投稿者
	"#newout #newres": "margin:0.4em 0 0.8em 0;padding:0.4em 0.6em;font-size:80%;line-height:1.3em;border:1px #AAA solid;background-color:#FFD;border-radius:5px;-webkit-border-radius:5px;",

     //*** ガイドリンク
	"#container .ch1":"display:inline-block; vertical-align:middle; line-height:1.6em; font-size:100%; margin:0 0.5em 0 0; padding:0.2em 0.9em; text-decoration:none;cursor:pointer; background-color:#3390E4; color:#EEE; border-radius:5px;-webkit-border-radius:5px; box-shadow: 1px 1px 2px black;",
    "#container .ch1:hover": "background-color:#E0B6E0;",
	"#container .ch2":"vertical-align:middle; font-size:100%; text-align:center; font-weight:bold; margin:0.5em 0; padding:0.6em 0.2em; background-color:#DDDDEE;border-radius:5px;-webkit-border-radius:5px;",

    //*** 履歴
    ".hiscss": 'text-align:left; margin:0.4em 0; padding:0.5em; line-height:1.2em; font-size:90%; border:2px #CCC solid; background-color:#e6e6FF; color:#111; border-radius:7px; -webkit-border-radius:7px;',
    ".btncss1": 'padding:0.2em 0.6em 0 0.6em; margin-top:0.5em; font-size:100%; background-color:#AFA; border-radius:7px; -webkit-border-radius:7px;',
    ".btncss2": 'position:absolute; z-index:2; top:auto'

  });
  if($it.SP){
    $it.addCSS({
      "input[type=submit]":"padding: 0.5em;",
      "#newout .posting":"font-size:120%;font-weight:bold; display:inline-block; padding: 0.5em 1.4em; margin-top:0.6em;",      "#newout #newres": "line-height:1.8em;"
    });
  }
  if(window.opera){
	$it.addCSS({
      "#container img":"vertical-align: middle;",
      "#container input": "padding:0.1em 0.7em;"
    });
                }
  if($it.MSIE){
    $it.addCSS({
      "input": "font-size:86%; margin-top:0.2em;pading:0em 0.2em;line-height:-1.3em; vertical-align: -0.4em;",
      "select": "margin-top:0.2em;",
      "textarea": "margin-bottom:0.2em;"
    });
  }else{
    $it.addCSS({
      //**** [input,textarea,select]背景色と影を装飾
      "input,select,textarea": "margin:0.1em 0 0.2em 0em; padding:0 0.4em;border-radius:7px; -webkit-border-radius:7px;box-shadow: 1px 1px 3px silver;"
    });
  }
  $it._NEWA = $it.path._NEWA;

  var frameflag = $it.IM() || $it.FM();
  if(frameflag){
    try{$id("inelem").style.display ="none";}catch(e){}
    try{$id("bgparts").style.display ="none";}catch(e){}
    $it.addCSS( $it.mobj.resize );
  }
  var _smmode = {
    exec: (frameflag)? $('#binf').remove() : (function(){ try{ $it.Replace(1);}catch(e){ return function(){}}})(),
    event:(frameflag)? function(){
        window.parent.location.href = ($origin.host)? $origin.cpath: $it.path._INDEX;
        return false;
    }:''
  };
  //*** <hr>削除
  $('hr:eq(1)').remove();

  //*** <tabl>削除 & 末尾<hr>置換⇒各リンクリスト
  _smmode.exec;

  //emc();
  //*** ガイドリンク
  for(var e,nd = $id("container").childNodes, i=0; nd[i].nodeName !== 'HR'; i++){
    //*** 戻るリンク(1)
    if(nd[i].nodeName === 'A' && /一覧/i.test(nd[i].textContent||nd[i].innerText)){
      nd[i].className = "ch1";
//      nd[i].title = nd[i].innerHTML;
      nd[i].title = "レイジーフォーラム";
      nd[i].onfocus = function(){this.blur();}
      nd[i].onclick = _smmode.event;
      nd[i+1].parentNode.removeChild(nd[i+1]);
    //*** 戻るリンク(2)
    }else if(nd[i].nodeName === 'A' && /┗/i.test(nd[i-1].nodeValue)){
      nd[i].className = "ch1";
      nd[i].title = nd[i].innerHTML;
      nd[i].onfocus = function(){this.blur();}
      nd[i-1].parentNode.removeChild(nd[i-1]);
      //*** 戻るリンク(3)
      if( /検索/i.test(nd[i+2].textContent||nd[i+2].innerText) ){
         nd[i-0].parentNode.removeChild(nd[i-0]);
         --i;
      }
    //*** スレッドタイトル
    }else if(nd[i].nodeType === 3 && /┗(.+)/i.test(nd[i].nodeValue)){
      e = $ce("div");
      e.className = "ch2";
      e.innerHTML = RegExp.$1;
      nd[i].parentNode.replaceChild(e, nd[i]);
      nd[i+1].parentNode.removeChild(nd[i+1]);
    }
  }
}
/****************************
 * 文字サイズ変更           *
 ***************************/
function fontChange(){
  var id = 'fsi', m = '文字サイズ:', e = $('#font-chg');
  //e = $('div .ch2').prev().replaceWith('<div id="ppp" style="@@float:right"></div>');
  //e = $('#ppp');
  e.append('<a id="'+id+'" class="fsc" title="文字サイズの変更" href="javascript:void(0)">'+m+'</a>');
  //*** クッキー有効チェック
  if( $it.checkCookie() ){
  $it.charSize({id:id, char:m, name:$it._CSIZE_FLAG2, type:false, rw:false});
    e.find('a').on({
      focus: function(){$(this).blur();},
      click: function(){
        $it.charSize({id:id, char:m, name:$it._CSIZE_FLAG2, type:false, rw:true});
      }
    });
  }
}
/****************************
 * 投稿ボタン処理           *
 ***************************/
function bottomExec(){
  $('#newout').append($('<div class="post-guide">このボタンで新規投稿できます<br>※レスは各投稿欄の[レス投稿]ボタンで可能です<br></div>')
  .append( $('<input>',{
    'type' : 'button',
    'value': '投稿',
    'title': 'このボタンで新規投稿できます',
    'class': 'posting',
    'on':{
      'focus': function(){$(this).blur()},
      'click': function(){
         location.href = ( /(\/(mbb|mb2)\/u\/[a-z]+\/\d+\/).*$/i.test(location.pathname) )? RegExp.$1+'nm': 'db-write.html';
      }
    }
  })));
}
/****************************
 * 新規投稿者の表示         *
 ***************************/
function bodyExec(m){
  // m=1:従来ヘッダ / m=0:拡張ヘッダ
  m = ($sg.get($it._HEADER_KIND) == 2)? 0: 1;

  $('#newout').append( $('<div id="newres"></div>') );
  var rf = $sg.get($it._USER_W_FLAG);
  var op = '. . .(続き)';
  var cd = '. . .(閉じる)';
  for(var nd=$id("container").childNodes, c, d, nnn=0, tx='', tx2='',ex='', i=0; i < nd.length; i++){
    if(nd[i].nodeValue === ' :'){
      if(nd[i+1].nodeName === 'A' && /mailto:/i.test(nd[i+1].href)){
        //*** ヘッダー:デフォルト or 拡張兼用 [sage]処理
        var a = nd[i+2];
        nd[i+2].parentNode.removeChild(nd[i+2]);
        c = nd[i+1].cloneNode(true);
        a = nd[i+2];
        nd[i+1].parentNode.removeChild(nd[i+1]);
        nd[i+1].parentNode.insertBefore(c.firstChild, nd[i+1]);

        if(!m){
          d = $ce("span");
          d.style.color = "#AA00AA";
          d.innerHTML = "&nbsp;[sage]<br>";
          nd[i+1].parentNode.insertBefore(d, nd[i+1]);
        }
      }else{
        if(!m) nd[i+1].parentNode.insertBefore($ce("br"), nd[i+1]);
      }
      if(!m){
        nd[i+0].parentNode.removeChild(nd[i+0]);
        nd[i-1].parentNode.insertBefore($cText("No:"), nd[i-1]);
        nd[i+2].parentNode.insertBefore($cText("Name:"), nd[i+2]);
        for(c = i+3; nd[c].nodeName !== 'BR'; c++);
        if(! $it.MSIE) nd[c+1].parentNode.removeChild(nd[c+1]);
        nd[c+1].parentNode.insertBefore($cText("Date:"), nd[c+1]);
       }
    }
    //*** ボタン形式
    if(nd[i].nodeName === 'A' && nd[i].rel === 'nofollow'){
      e = $input("button", nd[i].innerHTML, nd[i].href);
      e.onclick = function (){ location.href = this.title; }
      nd[i].parentNode.replaceChild(e, nd[i]);
      nd[i-1].parentNode.removeChild(nd[i-1]);
      if(nd[i].nodeValue === ']') nd[i].parentNode.removeChild(nd[i]);
      //*** <hr>置換
    }
    //*** <hr>→<div>置き換え
    if(nd[i].nodeName === "HR"){
      d = $ce("div");
      d.className = "line";
      nd[i].parentNode.replaceChild(d, nd[i]);
    }
//data:image
    //*** [new]アイコン変換 ＆ 新レス投稿者一覧
    if(nd[i].nodeName === 'IMG' && (/(i\/E6DD\.|data:image)/i.test(nd[i].src) || /new001/i.test(nd[i].src)) ){
      nd[i].src = $it._NEWA;
      nd[i].style.width = "32px";
      nd[i].style.height= "16px";
      if(rf == ''){
        continue;
      }
      c = (m)? 3:4;
      for(d = i; nd[d].nodeName !== 'FONT'; d++);
      tx += nd[i-c].outerHTML+' '+nd[d].innerHTML+' <a href=' + "'#c"+nd[i-c].innerHTML+"'"+ '>'+ nd[i-1].innerHTML +'</a><br>';
      if(++nnn == 5){
        tx2 = tx;
        tx  = '';
      }
    }
  }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//tx = ''; nnn = 0;
  if(tx === '' && nnn !== 5 ){
    if( $sg.get($it._USER_W_FLAG) !== '' ){
      $('#newres').css({'display':'none'});
    }
    return false;
  }
  if(tx2){
    if(nnn !== 5) tx2 += '<span id="pos"></span><a id="resmsg" href="javascript:void(0);">'+ op +'</a>';
    ex = tx;
    tx = tx2;
  }
  $('#newres').html( '新レス投稿者一覧: '+ nnn +'<br>'+tx  );

  //*** 省略表示(Open/close)
  //tx2: 続きあり
  //ex: 続きのリスト(HTMLコード)
  if(ex){
    var mf= 0;
    $('#resmsg').on({
      'focus': function(){this.blur();},
      'click': function(){
        if(mf ^= 1){
          $('#pos').html(ex);
          $(this).text(cd);
        }else{
          $('#pos').html('');
          $(this).text(op);
        }
      }
    });
  }
  return true;
}
/****************************
 * 見出し処理               *
 ***************************/
function headerExec(){
  if( $sg.get($it._HEADER_FLAG) == ''){
    $('#newout').append( $('<div id="radioid" class="radiobtn"></div>') );
    return;
  }
  //
  //*** 投稿見出しの選択
  //
  var e, c, id = {
    'id1':'rd1', 'id2':'rd2', 'id3':'rec',
    'file': $it.path._RADIO,
    'CookieFlag': $it._HEADER_KEEP,
    'CookieData': $it._HEADER_KIND,
    'mess3': function (m){ return '【'+ m +'】に設定しました'; },
    'arr': [
      'rd1', 'sel', '1', 'checked', '見出し1 ', 
      'rd2', 'sel', '2', '',        '見出し2 ',
      'rec', 'sel',  '', '', '設定を長期記憶'
    ],
    'body': '<div id="radioid" class="radiobtn"><input type="radio" /><span></span><input type="radio" /><span></span><input type="checkbox" /><span></span></div>',
    'guide': '<a id="help" title="見出しの説明です" href="javascript:void(0)" class="subject">説明</a>',
    'mem6': '記憶される期間は2年間です',
    'mem1': '記憶される期間は90日間です',
    'err': '<div id="radioid" class="radioerr">※ブラウザのCookie(クッキー)が無効です。有効にすると見出し拡張機能が利用できます。</div>'
  };
  //*** クッキー有効チェック
  if(! $it.checkCookie() ){
    $('#newout').append( $(id.err) );
    return 1;
  }
  //$('#newout').append( $(id.body).append(id.guide) );
//@@@@@@@@@@@@@@@@@
  if( $('#newres')[0] != null ){
    $('#newres').before( $(id.body).append(id.guide) );
  }else{
    $('#newout').append( $(id.body).append(id.guide) );
  }
//@@@@@@@@@@@@@@@@@
  $('#radioid input').each(function(){
    $(this).attr({
      'id': c = id.arr.shift(),
      'name': id.arr.shift(),
      'value': id.arr.shift(),
      'checked': id.arr.shift()
     }).focus(function(){$(this).blur()}).next().text(id.arr.shift());
  });
  $('#radioid,#help').on({
    'focus': function(){ if(this.id == 'help') this.blur(); return false; },
    'click': function(evt){
      var e = evt.target;
      if(e.id === 'help'){
        $it.modal_open({url:id.file, text:null, width:330, height:0, align:'left', button:null,callback:null});
        return false;
      }
      switch( e.type ){
        case "radio":
          if($sg.get(id.CookieData) == e.value) break;
          $sg.set(id.CookieData, e.value, (($id(id.id3).checked)? 730: 90));
          $it.modal_open({url:null, text:id.mess3($id(e.id).nextSibling.innerHTML), width:200, height:0, align:'center', button:null, callback:function(){location.reload();} });
          break;
        case "checkbox":
          $sg.set(id.CookieFlag, e.checked, ((e.checked)? 730: 90));
          $sg.set(id.CookieData, $sg.get(id.CookieData), ((e.checked)? 730: 90));
          $it.modal_open({url:null, text:(e.checked)? id.mem6 : id.mem1, width:200, height:0, align:'center', button:null,callback:null});
          break;
        }
    }
  });
  if( $sg.get(id.CookieFlag) === '' ){
    $id(id.id3).checked = '';
    $sg.set(id.CookieFlag, 'false', 90);
  }
  if( $sg.get(id.CookieData) === '' ){
    $id(id.id1).checked = 'checked';
    $id(id.id2).checked = '';
    $sg.set(id.CookieData, '1', 90);
  }
  $id(id.id3).checked = ($sg.get(id.CookieFlag) === 'true')? 'checked':'';
  if((d =$sg.get(id.CookieData)) == '2'){
    $id(id.id1).checked = '';
    $id(id.id2).checked = 'checked';
  } else if(d == '1'){
    $id(id.id1).checked = 'checked';
    $id(id.id2).checked = '';
  }
}
/****************************
 * 投稿フォーム処理         *
 ***************************/
function writeExec(){
  //*** 文字コード変換ライブラリロード
  $it.jsload( $it.path._ENCODE );
  //*** フォーム装飾
  var a = writeDeco();
  //*** 入力文字数カウント
  charCountExec( $('textarea[name]') );
  //*** 投稿ページ内の履歴登録・表示
  if( !$it.HasStorage() ) return;
  hisWrite();
  $it.hisRead( $('#'+a[0]), $('#'+a[1]) );
}
/****************************
 * 投稿フォーム装飾         *
 ***************************/
function writeDeco(){
  if(! $it.MSIE){
    $it.addCSS({
      //*** Safari用
      "input,textarea,select": "outline:0px none black;",
      //*** [input],[select],[textarea]のフォーカス時に枠色と背景色と影を装飾
      "input:focus[name=name],input:focus[name=email],input:focus[name=pass],textarea:focus[name],select:focus": "background-color:#f8FFf8;border: 2px #FA0 solid; box-shadow:rgba(53, 50, 150, 0.74) 0px 0px 6px 4px outside; border-radius:7px; -webkit-border-radius:7px;",
      //*** [input],[select],[textarea]背景色
      "input[type='text'],textarea,select":"margin:0; background-color:#dfdfff"
    });
  }
  if( $it.SP){
    //*** スマホ用テキストエリア調整
    $it.addCSS({
      "textarea": "width:98%;"
    });
  }
  $it.addCSS({
    //**** フォーラム：使い方アイコン
	"#container .whelp": 'cursor:default; margin:0.4em 0.2em; padding:0.0em 0.2em; _padding:0.1em 0.4em;border:1px #0A0 solid;background-color:#FFA; font-size:'+(($it.SP)? "100%":"80%")+';border-radius:9px;-webkit-border-radius:9px;',
    //**** フォーラム：使い方説明
	"#container .writehelp": 'line-height:1.6em; margin:0.3em 0.2em; padding:0.4em 0.9em; font-size:80%; color:#333; background-color: #ffc; border-radius:7px; -webkit-border-radius:7px; box-shadow: 1px 1px 3px silver;',
/*
    //*** 履歴
    ".hiscss": 'text-align:left; margin:0.4em 0; padding:0.5em; line-height:1.2em; font-size:90%; border:2px #CCC solid; background-color:#e6e6FF; color:#111; border-radius:7px; -webkit-border-radius:7px;',
    ".btncss1": 'padding:0.2em 0.6em 0 0.6em; margin-top:0.5em; font-size:100%; background-color:#AFA; border-radius:7px; -webkit-border-radius:7px;',
    ".btncss2": 'position:absolute; z-index:2; top:auto',
*/
    "form": "line-height: 1.8em",
    // 入力文字カウント - Mobile
    "form .mcount_mb": "z-index:2147483647; line-height:1.4em; font-size:14px; text-align:left; margin:0; padding:0.1em 0.4em; width:100%; border:1px #111 solid;background-color:#222;color:#eee;"+
    "position: fixed; top: 0px; left:0;"+
    "opacity: 0.89;"+
    "-moz-transition: opacity 1s linear;"+
    "-o-transition: opacity 1s linear;"+
    "-webkit-transition: opacity 1s linear;",
    "form .mnum_mb": "color:#ea0;font-size:16px;font-weight:bold;",
    // 入力文字カウント - PC
    "form .mcount_pc": "z-index:2147483647; line-height:1.4em; font-size:85%; text-align:left; margin:0; padding:0em 0.2em; width:45%; border:1px #111 solid;background-color:#333;color:#fff;"+
    "border-radius:7px; -webkit-border-radius:7px;"+
    "opacity: 0.74;"+
    "-moz-transition: opacity 1s linear;"+
    "-o-transition: opacity 1s linear;"+
    "-webkit-transition: opacity 1s linear;",
    "form .mnum_pc": "color:#ea0;font-size:100%;font-weight:bold;",
    // アップロード＆ダウンロード
    "form .fbtn1": "display:none", // 3388ff
    "form .fbtn2": "margin:0.3em 0; padding:0.1em 0; font-weight:bold; font-size:86%; color:#333; background:#e1e1e1; border-radius: 7px; width:260px; height:auto;",
//    "form .fbtn2": "margin:0.1em; padding:0.4em 0 0.1em 0; font-weight:bold; font-size:86%; color:#333; background:#e2e2e2; border-radius: 7px; width:260px; height:auto;text-shadow:1px #111; text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);",
    "form .upresult": "display:none; width:90%; font-size:90%; margin:0.1em;padding:0.2em; border:1px #aaa solid; background:#ededed; line-height:1.3",
    "form .onresult": "display:block;",
    "form .offresult": "display:none;",
    "form .tarea" : "border: 2px #d00 dotted; box-shadow:rgba(53, 50, 150, 0.74) 0px 0px 6px 4px dotted;",
    "form .warning": "margin:0.3em 0; line-height:1.2em; font-size:72%; color:#800"
  });
  var helpmsg = [
    "初回あるいは前回で使用されたハンドル名(名前)を使ってください<br><b>【トリップが使用できます】</b><br>※成り済まし防止や同一名の識別に効果的です<br>(例)名前が「さくら」であれば⇒「さくら#ソメイヨシノ」と入力<br>「ソメイヨシノ」がトリップキーとなり、実際には自分が決めたお好きな文字を半角6文字(全角3文字)以上で入力してください<br>#は半角文字です<br>トリップキーは他人と被らないような推測されにくい文字が理想です",
    "sage&nbsp;でスレッドがトップ(最上位置)に移動しません<br>スレッドを上げたくない時にお使いください<br>・盛り上がっているスレッドの邪魔をしたくない<br>・トップに移動させるほどではない時など",
    "投稿本文を入力してください<br><b>【絵文字】</b><br>絵文字入力できます<br><b>【投稿履歴】(対応ブラウザはボタン表示)</b><br>あなたが前回投稿した履歴が3件まで確認できます<br>※投稿履歴機能バージョンアップ等により履歴が削除される場合があります<br><b>【アップロード】(対応ブラウザはボタン表示)</b><br>テキストファイル(*.txt)から本文に読み込みます(ドラッグ＆ドロップ対応)<br>予め作成しておいた文書を本文で使いたい時に便利です<br><b>【ダウンロード】(対応ブラウザはボタン表示)</b><br>本文をテキストファイルとして保存します<br>保存される文字コードはUTF-8となります<br><b style='color:#a00'>※アップロード／ダウンロードはお使いのブラウザの種類やバージョンによっては正しく動作しない場合があります</b>",
    "好きなバンドは任意です。空欄でも大丈夫です",
    "本文削除と本文編集を行う際に必要です<br>セキュリティの観点から最低8文字以上の半角英数字で入力してください<br>パスワードの使い回しを極力避けてサイト毎に異なるパスワードを用いることを強く勧めます"];
  //*** 投稿履歴ボタンID、出力ID
  var hisarray = ['his', 'hisput'];

  var e = $TagName("hr")[1];
  e.parentNode.removeChild(e);

  //*** 投稿完了処理
  if( /ﾚｽ投稿が完了しました。/i.test($id('container').innerHTML) ) return false;
/*
<input type="text" name="name" size="14" maxlength="48" value="" ><br>
ｽﾚｯﾄﾞ位置(sageでｽﾚｯﾄﾞ固定) 省略可<br>
<input type="text" name="email" size="14" maxlength="64" value="" ><br>
  $("input[name=name]")[0].placeholder = "111111111111";
*/
  //*** Storage有効チェック
  var TrueStorage = $it.HasStorage();
  var tab = [/名前/i, /ｽﾚｯﾄﾞ/i, /本文/i, /好き/i, /編集/i];
  var nd = $id("container").childNodes;
  for(var d,i=0;i < nd.length;i++){
    if( !(nd[i].nodeName === 'A' &&  /(\?rc=)/i.test(nd[i].href)) ) continue;
    e = $input("button", "引用", nd[i].href);
    if( /write\./i.test(location.pathname) ){
      e.onclick = function(){alert("引用");}
    }else{
      e.onclick = function(){location.href = this.title; return false;}
    }
    nd[i+0].parentNode.replaceChild(e, nd[i+0]);
    nd[i-1].parentNode.removeChild(nd[i-1]);
    nd[i+0].parentNode.removeChild(nd[i+0]);
    e = $TagName("hr")[1];
    d = $ce("div");
    d.className = "line";
    e.parentNode.replaceChild(d, e);
    break;
  }
  nd = $id("container").getElementsByTagName("form")[0].childNodes;

  for(var j=0,i=0; i<nd.length; i++){
    if(!(nd[i].nodeType === 3 && tab[j].test(nd[i].nodeValue))) continue;

    if(j === 1){
      e = $ce("span");
      d = $input("button", "sage入力", "sageを入力できます");
      d.onclick = function(){$Name("email")[0].value = "sage";}
      e.appendChild(d);
      d = $input("button", "sage取消", "sageを取消します");
      d.onclick = function(){$Name("email")[0].value = '';}
      e.appendChild(d);
      nd[i+2].parentNode.insertBefore(e, nd[i+2]);
      nd[i+3].parentNode.insertBefore($ce("br"), nd[i+3]);
      $Name("email")[0].onchange = function(){
        if( this.value === '') return;
        if( this.value !== 'sage'){
            $it.modal_open({text:"'sage'または空白(空欄)にしてください", width:240, height:0, align:'center'});
        }
      }
    }else if(j === 2){
      nd[i+0].nodeValue = nd[i+0].nodeValue.substr(0, nd[i+0].nodeValue.length-1);
      e = $input("button", "絵文字", "絵文字が入力できます");
      if( /write\./i.test(location.pathname) ){
        e.onclick = function(){ alert("絵文字"); }
      }else{
        e.onclick = goEmoji;
      }
      nd[i+1].parentNode.replaceChild(e, nd[i+1]);
      nd[i+2].parentNode.removeChild(nd[i+2]);
/*
      if(! $it.SP){
        var tog = 0;
        e = $input("button", "横拡大", "横に伸ばします");
        e.onclick = function(){
          if(tog ^= 1){
            this.value = "戻す";
            $Name("content")[0].style.width = '100%';
          }else{
            this.value = "横拡大";
            $Name("content")[0].style.width = '90%';
          }
          return false;
        }
        nd[i+2].parentNode.insertBefore(e, nd[i+2]);
      }
*/
      //ダミー
      nd[i+2].parentNode.insertBefore($ce('span'), nd[i+2]);
      //*** 履歴
      if( TrueStorage ){
        e = $input("button", "投稿履歴", "前回の投稿履歴です");
        e.id = hisarray[0];
        nd[i+2].parentNode.insertBefore(e, nd[i+2]);
        e = $ce("div");
        e.id = hisarray[1];
        nd[i+5].parentNode.insertBefore(e, nd[i+5]);
      }
//*** アップロード＆ダウンロード＆ドラッグ＆ドロップ処理
      //nd[i+5].parentNode.insertBefore(e, nd[i+3]);
      readwriteFile(nd[i+6]);
//------------------------------------------------
      //*** textareaをスキップ
      for(; nd[i].nodeName !== 'BR'; i++){} --i;
    }
    //
    //*** 使い方ヘルプ
    //
    e = $ce("span");
    e.id = 'h'+j;
    e.className = 'whelp';
    e.innerHTML = "？";
    e.onfocus = function(){this.blur();}
    e.onmouseover = function (){
      this.style.backgroundColor = "#Fa0";
      d = $ce('div');
      d.id = "inf2"+this.id.substring(1);
      d.className = "writehelp";
      d.innerHTML = helpmsg[this.id.substring(1)];
      $id('inf'+this.id.substring(1)).appendChild(d);
    }
    e.onmouseout = function (){
      this.style.backgroundColor = "#FFa";
      e = $id("inf2"+this.id.substring(1));
      if(e === null) return;
      e.parentNode.removeChild(e);
    }
    nd[i+1].parentNode.insertBefore(e, nd[i+1]);
    e = $ce('div');
    e.id = 'inf'+j;
    nd[i+2].parentNode.insertBefore(e, nd[i+2]);
    nd[i+3].parentNode.removeChild(nd[i+3]);    // <br>

    if(++j >= 5) break;
  }
  return hisarray;
}
/*******************************
 * 投稿履歴・登録              *
 *******************************/
function hisWrite(){
  var his = $it.his;
  $('input, textarea, select').on('keyup change', function(){
    $(window).on('beforeunload', function(e){
      e.originalEvent.returnValue = his.sg._ERRM[3];
      return his.sg._ERRM[3];
    });
  });
  $("input[name=smt],input[name=sbmt],input[name=prev],input[name=correct]").click(function(){
    $(window).off('beforeunload');
    //*** 投稿エラーチェック
    if( /連続投稿/i.test( $('#container font:eq(0)').text() ) ) return false;
    var e = '';
    //*** 空チェック
    if($("input[name=name]").val() == '') e += his.sg._ERRM[0];
    if((t = $("[name=content]").val()) == '') e += his.sg._ERRM[1];
    if($("input[name=pass]").val() == '') e += his.sg._ERRM[2];
    if(e){
      $it.modal_open({text:e, width:220, height:0, align:'left'});
      return false;
    }
    //*** 確認＆訂正は履歴を無視
    var e = $(this).attr('name');
    if(e == 'prev' || e == 'correct') return;

    t = t.replace(/\</gi, '&lt;');
    t = t.replace(/\>/gi, '&gt;');
    t = t.replace(/(\"|\'|\\|\f|\b|\t|\f|\r)/gi, '\$1');
    t = t.replace(/\n/gi, '<br>\n');
    var _dat = {
      'status' : '1',
      'name'   : $('[name=name]').val(),
      'time'   : $it.Today(true),
      'thread' : $("#container").find('a:eq(1)').attr('title'),
      'content': t
    };

    //*** 書き込み位置
    if((d = $sg.nget(his.sg._POSITION)) == null) d = '0';
    if( his.sg._JSON_CHECK ){
      $sg.nset(his.sg._DATA + d, JSON.stringify(_dat));
    }else{
      $sg.nset(his.sg._NAME    + d,    _dat.name);
      $sg.nset(his.sg._TIME    + d,    _dat.time);
      $sg.nset(his.sg._THREAD  + d,  _dat.thread);
      $sg.nset(his.sg._CONTENT + d, _dat.content);
    }
    $sg.nset(his.sg._STATUS  + d,  _dat.status);
    d = parseInt(d, 10);
    ++d; if(d >= his.sg._MAXNUM) d = '0';
    $sg.nset(his.sg._POSITION, d);

    //*** 書き込み数
    for(var i=0; $sg.nget(his.sg._STATUS + i) != null; i++){}
    $sg.nset(his.sg._LENGTH, i);
  });
}
/************************
 * 入力文字数カウント   *
 ************************/
function charCountExec(obj){
  var html = '<div>入力文字数(改行あり|改行なし) <span id="mout"></span></div>';
  //カウント
  var getcnt = function(obj, e){
    var len = obj.val().length;
    var s = (obj.val().match(/\n/g)||[]).length;
    e.text( (len+s) +" | "+ (len-s));
  };
  obj.on({
    "focus": function(){
      if($it.SP) $('#top_frame').css('display','none');
      $(this).before($(html).addClass(($it.SP)? 'mcount_mb':'mcount_pc'));
      getcnt($(this), $('#mout').addClass(($it.SP)? 'mnum_mb':'mnum_pc'));
    },
    "blur": function(){
      ($it.SP)? $('#top_frame').css('display','block') && $('.mcount_mb').remove():$('.mcount_pc').remove();
    },
    "keyup change paste": function() {
      getcnt($(this), $('#mout'));
    }
  });
}
/************************************************
 * ローカルファイル読み込み＆保存＆ドラッグ処理 *
 ***********************************************/
function readwriteFile(elem){
  //*** File API有効チェック
  if( ! $it.FAPI ) return; // 対応してない
  var obj = {
    IEVER: 11,
    CHAR_MAXSIZE: 2000, // 受け入れる文字数
    0:'<b>Filename：</b>',
    1:'<b>Filesize：</b>',
    2:'<b>CharCode：</b>',
    3:'<b>Textsize：</b>',
    name: 'レイジーフォーラム本文-',
    btn: '保存',
    10:'予め作成した文書を使いたい時に便利です(2000文字まで)',
    11:'アップロード(ファイルから本文に読み込む)',
    20:'ファイルに保存できます',
    21:'ダウンロード(本文をファイルに保存)',
    30:'アップロード',
    31:'はお使いのブラウザの種類やバージョンによっては正しく動作しない場合があります'
    //'<b>MIMEタイプ：</b>'
    //'<b>最終更新日時：</b>'
  };
  var err = [
    'テキストファイルを選択してください',
    ' 文字オーバー<br>文字数が多すぎます<br>※改行を含めた2000文字以内',
    '本文が空欄です',
    '本文をファイルに保存しますか？'
  ];

  var mes = '';
  // ボタン
  $(elem).before( '<div><input type="file" class="fbtn1" accept=".txt"><button id="upload" class="fbtn2" title="'+obj[10]+'">'+obj[11]+'</button></div>' );
  if(($it.MSIE >= obj.IEVER) || $it.FAPI_W){
    $(elem).prev().append( '<button id="download1" class="fbtn2" title="'+obj[20]+'">'+obj[21]+'</button><a id="download2"></a>' );
    var mes = "/ダウンロード";
  }
  // 忠告
  $(elem).prev().append($('<div class="warning">'+obj[30]+ mes +obj[31]+'</div>'));
  // 結果
  $(elem).prev().append('<div class="upresult"></div>');

  // アップロードID
  var dl1 = '#download1';
  var dl2 = '#download2';
  // アップロードボタン
  var upLoad = '#upload';
  // テキストエリア＆ドラッグ＆ドロップ
  var textArea = 'textarea[name]';
  // ファイル読み込み結果
  var result = '.upresult';
  //-----------------------------
  // ダウンロード処理
  //-----------------------------
  //*** File API:Writerが正常に使えるか？
  if(($it.MSIE >= obj.IEVER) || $it.FAPI_W){
    //*** ダウンロード確認
    $(dl1).on({
      focus: function(){this.blur();},
      click: function(){
        var s = $(textArea).val().length;
        if(s == 0){
          $it.modal_open({ text:err[2], width:240, height:0, align:'center'});
          return false;
        }else if( s > obj.CHAR_MAXSIZE){
          $it.modal_open({ text:err[1], width:240, height:0, align:'center'});
          return false;
        }
        $it.modal_open({ text:err[3], width:240, height:0, align:'center', button:obj.btn, callback:
          function(e){
            //強制クリック
            var e = $(dl2);
            //e.trigger('click');
            if(e[0].fireEvent){ // for IE
              e[0].fireEvent("onclick");
            }else{
	          var evt = document.createEvent( "MouseEvents" ); // マウスイベントを作成
	          evt.initEvent( "click", false, true ); // イベントの詳細を設定
	          e[0].dispatchEvent( evt );            // イベントを強制的に発生させる
            }
          }
        });
        return false;
      }
    });
    //*** ダウンロード
    $(dl2).on({
      'click': function(){
        var fname = obj.name+(new Date()).toLocaleString() + ".txt";
        $(dl2).attr("download", fname);
        var content = $(textArea).val();
        var blob = new Blob([ content ], { "type" : "text/plain" });
        if (window.navigator.msSaveBlob) { 
          window.navigator.msSaveBlob(blob, fname); 
          // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
          window.navigator.msSaveOrOpenBlob(blob, fname); 
        } else {
          $(dl2).attr('href', window.URL.createObjectURL(blob));
        }
      }
    });
  }
  //-----------------------------
  // アップロード処理
  //-----------------------------
  //*** ファイル選択
  $(upLoad).on({
    'focus': function(){$(this).blur();},
    'click':function(e){ $('.fbtn1').click(); return false; }
  });
  $('.fbtn1').on({
    'change': function(e){
      $(textArea).val('');
      var file, files = e.target.files;
      uploadExec(files);
      return false;
    }
  });

  //*** ドラッグ＆ドロップ
  $(textArea).on('drop', function(e){
    e.preventDefault();
    $(textArea).removeClass('tarea');
    // ファイル情報を取得
	var files = e.originalEvent.dataTransfer.files;
    uploadExec(files);
    return false;
  }).on('dragenter', function(){ $(textArea).addClass('tarea'); return false; })
    .on('dragover', function(){ $(textArea).addClass('tarea'); return false;  })
    .on('dragleave', function(){ $(textArea).removeClass('tarea'); return false; });

  //*** アップロード処理
  function uploadExec(files){
    if(files.length == 0) return false;
    var file = files[0];
    if(!file.type.match(/text/)){
      $it.modal_open({text:err[0], width:240, height:0, align:'center'});
      return false;
    }
    //ファイル読み込み
    upload(file, function(body){
      //改行コード統一
      body[0] = body[0].replace(/(\r\n|\r)/gi, '\n');
      var c = body[0].length;
      if(c > obj.CHAR_MAXSIZE){
        $(result).removeClass('onresult');
        $(result).html('').addClass('offresult');
        $it.modal_open({text:(c - obj.CHAR_MAXSIZE)+err[1], width:240, height:0, align:'center'});
        $(textArea).val('');
        return false;
      }
      //var data = 'ファイル名：' + escape(file.name) + '<br>\n' +
      var data = obj[0] + file.name + '<br>'+
                 obj[1] + file.size + '<br>'+
                 obj[2] + body[1]+ '<br>'+
                 obj[3] + c;
      $(result).removeClass('offresult');
      $(result).html(data).addClass('onresult'); // 表示
      setTimeout(function(){ $(".upresult").html('').removeClass('onresult');}, 3000);
      //テキストエリアへ転送
      $(textArea).val(body[0]);
    });
  }

  //*** ファイル読み込み
  //return; [text, charCode]
  function upload(file, func){
    var reader = new FileReader();
    reader.onabort = function(e) {
      alert('キャンセルされました');
    };
    reader.onprogress = function(e){}
    reader.onloadstart = function(e){};
    reader.onload = function(e){
      func( encodeString(e.target.result) ); // コールバック
    }
    reader.readAsArrayBuffer(file);
    //reader.readAsText(file, "UTF-8");
    //reader.readAsDataURL(file);
  }
  //*** 文字コード変換 
  function encodeString(str) {
    var array = new Uint8Array(str);
    var m = Encoding.detect(array);
    switch (m) {
    case 'UTF16':
        array = new Uint16Array(str);
        break;
    case 'UTF32':
        array = new Uint32Array(str);
        break;
    }
    var unicodeArray = Encoding.convert(array, 'UNICODE');
    var text = Encoding.codeToString(unicodeArray);
    return [text, m];
  }
}
};
$it.addListener(window, (($it.IM() || $it.FM())? "load":"DOMContentLoaded"), $it.newcheck);

/*
<style>
  #progress_bar {
    margin: 10px 0;
    padding: 3px;
    border: 1px solid #000;
    font-size: 14px;
    clear: both;
    opacity: 0;
    -moz-transition: opacity 1s linear;
    -o-transition: opacity 1s linear;
    -webkit-transition: opacity 1s linear;
  }
  #progress_bar.loading {
    opacity: 1.0;
  }
  #progress_bar .percent {
    background-color: #99ccff;
    height: auto;
    width: 0;
  }
</style>

<input type="file" id="files" name="file" />
<button onclick="abortRead();">Cancel read</button>
<div id="progress_bar"><div class="percent">0%</div></div>

<script>
  var reader;
  var progress = document.querySelector('.percent');

  function abortRead() {
    reader.abort();
  }

  function errorHandler(evt) {
    switch(evt.target.error.code) {
      case evt.target.error.NOT_FOUND_ERR:
        alert('File Not Found!');
        break;
      case evt.target.error.NOT_READABLE_ERR:
        alert('File is not readable');
        break;
      case evt.target.error.ABORT_ERR:
        break; // noop
      default:
        alert('An error occurred reading this file.');
    };
  }

  function updateProgress(evt) {
    // evt is an ProgressEvent.
    if (evt.lengthComputable) {
      var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
      // Increase the progress bar length.
      if (percentLoaded < 100) {
        progress.style.width = percentLoaded + '%';
        progress.textContent = percentLoaded + '%';
      }
    }
  }

  function handleFileSelect(evt) {
    // Reset progress indicator on new file selection.
    progress.style.width = '0%';
    progress.textContent = '0%';

    reader = new FileReader();
    reader.onerror = errorHandler;
    reader.onprogress = updateProgress;
    reader.onabort = function(e) {
      alert('File read cancelled');
    };
    reader.onloadstart = function(e) {
      document.getElementById('progress_bar').className = 'loading';
    };
    reader.onload = function(e) {
      // Ensure that the progress bar displays 100% at the end.
      progress.style.width = '100%';
      progress.textContent = '100%';
      setTimeout("document.getElementById('progress_bar').className='';", 2000);
    }

    // Read in the image file as a binary string.
    reader.readAsBinaryString(evt.target.files[0]);
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
</script>
--------------

// 読み込みエラー時の処理
		reader.addEventListener('error', function(e) {
			// エラーコードに対応するメッセージを準備
			var errors = ['','指定のファイルが見つかりません。','読み込み権限がありません。','処理が中断されました。','読み込み中にエラーが発生しました。','ファイルサイズが大きすぎます。']
			// エラーコードに応じてメッセージを表示
			alert(errors[reader.error.code]);
		}, true);
--------------
※ただし、SafariではFileReaderオブジェクトを、Internet Explorer 10ではreadAsBinaryStringメソッドをサポートしていません。
count = 0;
function test(){
    var a;
      count++;
      var percentLoaded = Math.round((count / 100) * 100);
      if (percentLoaded < 100) {
          $('.kkkk')[0].style.width = percentLoaded + '%';
          $('.kkkk')[0].textContent = percentLoaded + '%';
      }else{
        clearTimeout(a);
        $('.kkkk')[0].style.display = "none";
        count = 0;
        return;
      }
      a = setTimeout(test, 20);
}

*/