/*
 * 初期化
 *
 * LastUpdate:2016-01-21(木) v6.20
 *
 * query: m = '' ユーザーエージェントをスマホ用
 *        j = '' 地震表示テスト
 *        t = '' 動作テスト用スクリプト
 */
//*** 汎用オブジェクト
//*** オブジェクト継承はObject.create(obj)を使う
var oc = function(o) {
  if ( ! o ) return {}
  var f = function() {};
  f.prototype = o;
  return new f();
}
Object.create = Object.create || oc;
//*** [0日3]
//*** [2016090508]
Date.prototype.toNowTime = function(){
  var ye = this.getFullYear();
  var mo = this.getMonth()+1; if (mo < 10) mo = "0" + mo;
  var da = this.getDate();    if (da < 10) da = "0" + da;
  var ho = this.getHours();   if (ho < 10) ho = "0" + ho;
  //var mi = this.getMinutes(); if (mi < 10) mi = "0" + mi;
  return ''+ye + ''+mo + ''+da+ ''+ho;
};
//*** [201609050823]
Date.prototype.toLocaleString = function(){
  return [
    this.getFullYear(),
    ('0'+(this.getMonth()+1)).slice(-2),
    ('0'+this.getDate()).slice(-2),
  ].join( '' ) + ('0'+this.getHours()).slice(-2) +  ('0'+this.getMinutes()).slice(-2); // + ('0'+this.getSeconds()).slice(-2);
};
/*
//*** [0日3]
Date.prototype.toNowTime = function(){
  var ye = this.getFullYear();
  var mo = this.getMonth()+1; if (mo < 10) mo = "0" + mo;
  var da = this.getDate();    if (da < 10) da = "0" + da;
  var ho = this.getHours();   if (ho < 10) ho = "0" + ho;
  //var mi = this.getMinutes(); if (mi < 10) mi = "0" + mi;
  return ye+mo+da+ho;
};
Date.prototype.toCountString = function(){
  var t = arguments[0];
  var b = 60*60*1000;
  var da = Math.floor(t/(24*b)); // 日
  var ho = Math.floor((t/b)%24); // 時
  var mi = Math.floor((t%b)/(60*1000)); // 分
  var se = Math.floor((t%b)%(60*1000)/1000); // 秒
  return da+'日' + ho+':' + mi+':' + se;
};
//*** [2016/09/05(月) 08:23]
Date.prototype.toString =  function(){
  return [
    this.getFullYear(),
    ('0'+(this.getMonth()+1)).slice(-2),
    ('0'+this.getDate()).slice(-2) + ['(日)','(月)','(火)','(水)','(木)','(金)','(土)'][this.getDay()]
  ].join( '/' ) + ' ' + ('0'+this.getHours()).slice(-2) + ':' + ('0'+this.getMinutes()).slice(-2);
};

  var d = new Date();
  console.log('toCountString:'+d.toCountString(60*60*1000*3));
  console.log('toNowTime:' + d.toNowTime());
  console.log('toString: ' + d.toString());
  console.log('toLocaleString: '+d.toLocaleString());
  console.log('toGMTString: '+ d.toGMTString());
  console.log('getTimezoneOffset' + d.getTimezoneOffset());
*/
//console.log(document.compatMode);
/*
//*** ClassName
if(document.getElementsByClassName == null){
  document.getElementsByClassName = function(name, target){
    console.log("IE");
    var result = [];
    var obj  = null;
    if(target && target.getElementsByTagName)
      obj = target.getElementsByTagName('*');
    if(!obj)
      obj = document.getElementsByTagName ? document.getElementsByTagName('*') : document.all;
    for(var i=0,n=$obj.length;i<n;i++){
      var check = obj[i].getAttribute('class') || obj[i].className;
      if( (new RegExp('(^|\\s)'+name+'(\\s|$)')).test(check)) result.push(obj[i]);
    }
    return result;
  }
}
*/
//*** メインオブジェクト
var $it = {
  //*** DOM省略定義
  $id: function(e){ return document.getElementById(e);},
  $class: function(e){ return document.getElementsByClassName(e);},
  $TagName: function(e){ return document.getElementsByTagName(e); },
  $Name: function(e){ return document.getElementsByName(e); },
  $cText: function(e){ return document.createTextNode(e); }, //*** createTextNode
  $ce: function(e){ return document.createElement(e); }, //**** createElement(e)
  $rm: function(e){ e.parentNode.removeChild(e); }, //*** removeChild(e)
  $Replace: function(d, e){ e.parentNode.replaceChild(d, e); }, //*** replaceChild
  $Before: function(d, e){ e.parentNode.insertBefore(d, e); }, //*** insertBefore
  $qa: function(e){ return document.querySelectorAll(e);},
  $q: function(e){ return document.querySelector(e);},
  /*****************************
  * スクリプトファイル振り分け *
  ******************************/
  $origin: $origin = (function(){
    /*************************
    * URLクエリーを取得する  *
    * 戻り値:オブジェクト    *
    *************************/
    var query = (function(){
      var result = {};
      if(1 < window.location.search.length){
        var query = window.location.search.substring(1);
        var p = query.split( '&' );
        for(var i=0; i < p.length; i++){
          var e = p[i].split( '=' );
//        var Name = decodeURIComponent(e[0]);
//        var Value = decodeURIComponent(e[1]);
          var Name = e[0];
          var Value = e[1];
          result[Name] = Value;
        }
      }
      return result;
    })();

function aaa(){
    //*** 外部ファイルからパスを読み込む(同期)
    (function loadJS(path,func){
      var e = document.createElement("script");
      e.setAttribute('src', path);
      e.setAttribute('type', 'text/javascript');
      document.getElementsByTagName('head')[0].appendChild(e);
      _call_Back_Function = function(callback){
        func(callback);
      }
      return;
    })('path.js', function(data){
      (function(){
        try{
          var path = data.path;
          if(path === 'undefined') throw('');
        }catch(e){
          setTimeout(arguments.callee, 0);
        }
        //*** コンテンツホスト
        //$it.path = (/\/(mbb|mb2)\/u\/[a-z]+\/.*/i.test(location.pathname))? path: '',
        $it.$origin.path = $origin.path = path;
        //*** 各種パス
        $it.path= {
          //文字コード変換ライブラリ
          _ENCODE: this.$origin.path+'js/encoding.js', 
          _TOP_LEFT: this.$origin.path+'g/bg001.gif',
          _TOP_RIGHT: this.$origin.path+'g/bg002.gif',
          _TOP_BODY: this.$origin.path+'g/bg003.gif',
          _INDEX: 'db-LazyForum.html',
          _BG_JSONP: this.$origin.path+'icondata.jsonp',
          _FAVICON: this.$origin.path+'g/f.ico',
          _BG1: this.$origin.path+'g/star02.gif',
          _BG2: this.$origin.path+'g/moyo04.gif',
          _BG3: this.$origin.path+'g/moyo06.gif',
          _BG4: this.$origin.path+'g/moyo05.gif',
          _IE7: 'http://dl.dropbox.com/u/122048445/ea/g/new001.gif',
          _QR_IMAGE: this.$origin.path+'g/QRcode.gif',
          // newcount.js
          _GEAR_IMAGE: this.$origin.path+'g/gear.png',
          _GD1: this.$origin.path+'ea_guide.html',
          _GD2: this.$origin.path+'ea_rule.html',
          _GD3: this.$origin.path+'ea_output.html',
          _GD4: this.$origin.path+'ea_gazou.html',
          _MB_BG1: this.$origin.path+'g/haikei.gif',
          _FRAME_BG: this.$origin.path+'g/moyo01.gif',
          _HELP: this.$origin.path+'ajax-help.html',
          _MENU: this.$origin.path+'g/menu48.png',
          _CLOSE_BTN: this.$origin.path+'g/close48.png',
          // newcheck.js
          _NEWA: this.$origin.path+'g/new001.gif',
          _RADIO: this.$origin.path+'ajax-radio.html'
        };
        console.log("url:"+$it.$origin.path);
        console.log("url:"+$it.path._HELP);
      })();
    });
}
    //--- Base Path ---
    //*** KISSr.com
    //var path = "http://earthark.kissr.com/";
    //*** Pancake.io
    //var path = "http://chicago-market-2588.pancakeapps.com/";
    //*** droppages.com
    //var path = "http://ea-site777.droppages.com/";
    //*** github.com
    var path = "https://ea-site.github.io/earthark/";
    //*** jQrery  ***
    //var jq = path+'js/jquery-1.12.4.min.js';
    //*** CDN:Microsoft
    //var jq = "http://code.jquery.com/jquery-1.11.3.min.js";
    //*** CDN:Jquery
    //var jq = "http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js";
    //*** CDN:Google
    var jq = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
    var jqs = '<script src="'+ jq +'"></script>';

    //10分毎に分割する
    var m = '0'+Math.floor((new Date()).getMinutes() / 10);
    var v = (location.search.length)? location.search : '?v='+(new Date()).toNowTime()+m;
    var x = (query.t === '')? '@' : '';
    var a = '<script type="text/javascript" src="';
    var b = '"></script>';

    if( /\/(mbb|mb2)\/u\/[a-z]+(\/.*)$/i.test(location.pathname) ){
      var j = path;
      var f = path+x+'$';
      var reg = (/(\/nt.*|\/se.*)/i.test(RegExp.$2))? new RegExp(RegExp.$1, "i") : reg = /\/\d+\/.*$/i;
    } else {
      var j = '';
      var f = '';
      var reg = /writ.+$/i;
    }
    //*** jQrery load ***
    document.write(jqs);
    document.write(a+f+(reg.test(location.pathname)? 'jq_newcheck.js':'jq_newcount.js')+v+b);
    document.write(a+f+'jq_birthday.js'+v+b);

    return {
      'update': v,
      'query': query,
      'base': path,
      //*** 外部ホスト true:host saver | false:local saver
      'host': /\/(mbb|mb2)\/u\/[a-z]+\/.*/i.test(location.pathname),
      //*** コンテンツホスト
      'path': (/\/(mbb|mb2)\/u\/[a-z]+\/.*/i.test(location.pathname))? path: '',
      //*** Cookie保存パス
      'cpath': /(\/(mb2|mbb)\/u\/[a-z]+\/).*/i.test(location.pathname)? RegExp.$1:(/(.+\/).+$/i.test(location.pathname)? RegExp.$1:'')
    }
  })(),
  //*** スマホ/スマホPC用フラグ(Cookie)
  _SF: "pc",
  _HEADER_FLAG: 'mf',   // 見出しON/OFF
  _HEADER_KIND: 'sd',   // 見出し種類
  _HEADER_KEEP: 'sf',   // 見出し長期保存
  _USER_W_FLAG: 'rf',   // 新投稿者リスト表示 ON/OFF
  _THREAD_IS: 'is_thread', // スレッド存在
  _THREAD_ACTIVE: 'active_thread', // スレッドアクティブ
  _SIDE_MENU: 'sm',     //サイドメニュー
  _NEW_MENU_FLAG:'gf',  // 新着メニューON/FF
  _CSIZE_FLAG1: 'ms',   // newcount:文字サイズ
  _CSIZE_FLAG2: 'mss',   // newcheck:文字サイズ
  _DMF: '',
  _SG_ISIMGFLAG: 'ea-isajaximg', // storage:base64チェック
  _SG_GEAR_NAME: 'ea-gear',  // 新着メニュー画像
  _SG_NEWIMG_NAME: 'ea-new', // [NEW]画像
  _SG_LOADING_NAME: 'ea-loading', // [NEW]画像

  _TOP_MENU_POS: 50,    //スマホ：トップ固定メニュー
  //this.BFLAG = 0,
  //*** ドロップダウンメニュー表示フラグ in Title
  _DF: 0,
  //*** 誕生日パーツ表示フラグ
  _BF: 0,
  //*** 緊急地震速報パーツID名とクラス名
  _JISHIN_ID1: 'ksn-main-con-jisin',
  _JISHIN_ID2: 'ksn-main-con-jisin-oblong',
  _JISHIN_CLASS: '.ksn-right-link',
  //*** 各種パス
  path: {
    //文字コード変換ライブラリ
    _ENCODE: this.$origin.path+'js/encoding.js', 
    _TOP_LEFT: this.$origin.path+'g/bg001.gif',
    _TOP_RIGHT: this.$origin.path+'g/bg002.gif',
    _TOP_BODY: this.$origin.path+'g/bg003.gif',
    _INDEX: 'db-LazyForum.html',
    _BG_JSONP: this.$origin.path+'icondata.jsonp',
    _FAVICON: this.$origin.path+'g/f.ico',
    _BG1: this.$origin.path+'g/star02.gif',
    _BG2: this.$origin.path+'g/moyo04.gif',
    _BG3: this.$origin.path+'g/moyo06.gif',
    _BG4: this.$origin.path+'g/moyo05.gif',
    _IE7: 'http://dl.dropbox.com/u/122048445/ea/g/new001.gif',
    _QR_IMAGE: this.$origin.path+'g/QRcode.gif',
    // newcount.js
    _GEAR_IMAGE: this.$origin.path+'g/gear.png',
    _GD1: this.$origin.path+'ea_guide.html',
    _GD2: this.$origin.path+'ea_rule.html',
    _GD3: this.$origin.path+'ea_output.html',
    _GD4: this.$origin.path+'ea_gazou.html',
    _MB_BG1: this.$origin.path+'g/haikei.gif',
    _FRAME_BG: this.$origin.path+'g/moyo01.gif',
    _HELP: this.$origin.path+'ajax-help.html',
    _MENU: this.$origin.path+'g/menu48.png',
    _CLOSE_BTN: this.$origin.path+'g/close48.png',
    // newcheck.js
    _NEWA: this.$origin.path+'g/new001.gif',
    _RADIO: this.$origin.path+'ajax-radio.html',
    _READING: this.$origin.path+'g/ajax-loader.gif'
  },

  MSIE: (navigator.userAgent.toLowerCase().indexOf('msie') >= 0 || navigator.userAgent.toLowerCase().indexOf('trident') >= 0)? parseInt(/(msie\s|rv:?)([\d\.]+)/.exec(navigator.userAgent.toLowerCase())[2]):0,
  NF: (navigator.userAgent.toLowerCase().indexOf("netfront") != -1),
  BC: (/browser\/(vf-)?netfront.+midp/i.test(navigator.userAgent.toLowerCase()) || navigator.userAgent.toLowerCase().indexOf("docomo") != -1),
  SP: (this.$origin.query.m == '') || (navigator.userAgent.toLowerCase().indexOf("mobile") != -1 || navigator.userAgent.toLowerCase().indexOf("iphone") != -1 || navigator.userAgent.toLowerCase().indexOf("android") != -1 || navigator.userAgent.toLowerCase().indexOf("ipad") != -1),
  FM: function(){ return (this.getCookie("sm") === '1') },
  IM: function(){ return (this.getCookie("mm") === '1') },
  //*** FILE APIが使えるかどうか
  FAPI: (window.File && window.FileReader && window.FileList && window.Blob),
  //*** FILE API:Writeが正常に使えるかどうか
  FAPI_W : /firefox/i.test(navigator.userAgent.toLowerCase()) || window.requestFileSystem || window.webkitRequestFileSystem,
  //*** スマホ用オブジェクト
  mobj: {
    _MSG: 'PC向け表示またはスマホ向け表示に切り替えられます',
    _MSGM: 'スマホ用表示に切り替える',
    _MSGP: 'PC用表示に切り替える',
    _JISHIN: '<!-- kusanone-net.com 地震速報 start --><script type="text/javascript" src="http://www.kusanone-net.com/kusanone-quake.js" charset="utf-8"></script><!-- kusanone-net.com 地震速報 end -->',
    _JISHIN_TEST: /(kusanone-quake)/i,
    css: {
      ".mbhead":"margin-bottom:4px;text-align:center;",
      ".mbinput":"margin:2px 0;padding:3px 3px;"
    },
    resize: {
      "textarea":"width:90%;",
      "body":"margin:0 auto;line-height:1.4em;",
      "#content_size":"margin:0;width:100%",

      "div.global_content":"width:100%; margin:0 auto;float:none;",
      ".main_content .box_left":" float:none; width:100%; margin:0.1em 0; border-radius:5px; -webkit-border-radius:5px;",
      ".bg_td":"border-radius:5px; -webkit-border-radius:5px;",
      ".main_content .box_right":"display:none;",
      ".main_content .box_body":"margin:0; padding:0.3em 0.3em;"
    }
  },
  //*** オブジェクトの位置情報確認
  boxInfo: {
    "scrollLeft" :(window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
    "scrollTop"  :(window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
    "innerWidth" : Math.round(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
    "innerHeight" : Math.round(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
    "offsetParent": function(e){ return e.offsetParent; },
    "offsetTop"   : function(e){ return e.offsetTop; },
    "offsetLeft"  : function(e){ return e.offsetLeft; },
    "offsetWidth" : function(e){ return e.offsetWidth; },
    "offsetHeight": function(e){ return e.offsetHeight },
    "top"   : function(e){ return Math.round(e.getBoundingClientRect().top); },
    "right" : function(e){ return Math.round(e.getBoundingClientRect().right); },
    "bottom": function(e){ return Math.round(e.getBoundingClientRect().bottom); },
    "left"  : function(e){ return Math.round(e.getBoundingClientRect().left); }
  },

  //*** JavaScriptロード
  jsload: function(path){
    var e = document.createElement("script");
    e.setAttribute('src', path);
    e.setAttribute('type', 'text/javascript');
    this.$TagName('head')[0].appendChild(e);
  },
  removeListener: function(elm, type, func){
    if(elm.addEventListener){
		elm.removeEventListener(type, func, false);
    }else if(elm.detachEvent){ // IE
		elm.detachEvent("on"+type, func);
	}
    return true;
  },
  addListener: function(elm, type, func){
    if(elm.addEventListener){
		elm.addEventListener(type, func, false);
    }else if(elm.attachEvent){ // IE
		if(type !== "DOMContentLoaded"){
			elm.attachEvent("on"+type, func);
		}else{
		  (function(){ // IE
			try {
				document.documentElement.doScroll("left");
			} catch(error){
				setTimeout(arguments.callee, 0);
				return;
			}
			func();
		  })();
		}
    }else{ // oth
		window.onload = func;
    }
    return true;
  },
  //*** HTMLロード後処理
  domloaded: function(id, func){
    if(window.attachEvent){
      (function(){
        try{
          document.documentElement.doScroll("left");
          if( $('div') ){};
        }catch(error){
	      setTimeout(arguments.callee, 0);
          return;
        }
        func();
      })();
    }else if(window.addEventListener){
      var $id = this.$id;
      (function(){
        try{
          //console.log($id('bwsput'));
          if( $id(id) == null ) throw('');
          //console.log("Enable!!");
        }catch(error){
	      setTimeout(arguments.callee, 0);
          return;
        }
        func();
      })();
    }else{
      window.onload = func;
    }
  },
  addCSS: function(mysheet, num){
	var sheet;

	if(typeof num !== 'undefined'){ 
		sheet = document.styleSheets[num];
	}

//	if(document.styleSheets.length){  // 最後のスタイルシートを取得
//	  	sheet = document.styleSheets[document.styleSheets.length - 1];
//	}
	else if(document.createStyleSheet){
		sheet = document.createStyleSheet(); // IE
	}else{
		var e = document.createElement('style');
		e.setAttribute('type', 'text/css');
		document.getElementsByTagName('head')[0].appendChild(e);
		sheet = e.sheet;
	}
    for(var selector in mysheet){
	  if(sheet.insertRule){
		sheet.insertRule(selector+'{'+mysheet[selector]+';}', sheet.cssRules.length);
	  }else{
        try{
		    sheet.addRule(selector, mysheet[selector]); // IE
        }catch(e){
            //console.log(selector+" :"+this.outerHTML);
        }
	  }
	}
  },
  Today: function(f){
    var dd = new Date();
    var ye = dd.getFullYear(); //    if (ye < 1900) ye += 1900;
    var mo = dd.getMonth()+1; if (mo < 10) mo = "0" + mo;
    var da = dd.getDate();    if (da < 10) da = "0" + da;
	var str = ye+'/'+mo+'/'+da+['(日)','(月)','(火)','(水)','(木)','(金)','(土)'][dd.getDay()];
	if(f == true){
      var ho = dd.getHours();   if (ho < 10) ho = "0" + ho;
	  var mi = dd.getMinutes(); if (mi < 10) mi = "0" + mi;
	  str += ' '+ho+':'+mi;
    }
    return(str);
  },
  //*** <tabl>削除 & 末尾<hr>置換⇒各リンクリスト
  Replace: function(n){
	var a=[], e, d, nd = document.getElementsByTagName("table")[n];
	e = nd.getElementsByTagName("a");
	for(var i=0; i<e.length; i++){
	  a[i]          = e[i].href;
	  a[i+e.length] = e[i].innerHTML;
	}
    nd.parentNode.removeChild(nd);
	nd = document.getElementById("thread").getElementsByTagName("hr");
	nd = nd[nd.length-1];
	d = document.createElement('div');
	d.id = "hd";
	d.style.cssText = "margin:0.6em 0 0.4em 0;";
	for(var j=a.length/2, i=0; i<j; i++){
	  e = document.createElement('a');
	  e.className = "ch1";
      e.style.fontSize = "100%";
	  e.href = a[i];
	  e.innerHTML = a[j+i];
//	  e.title = a[j+i];
	  e.title = "レイジーフォーラム";
	  e.onfocus = function(){this.blur();}
	  d.appendChild(e);
    }
    nd.parentNode.replaceChild(d, nd);
  },
  //*** グラディエーション処理
  gradi: function (st, ed){
    return (this.MSIE)? '':
      'background: linear-gradient('+st+','+ed+');'+
      'background: -webkit-linear-gradient('+st+','+ ed+');'+
      'background: -webkit-gradient(linear, left top, left bottom, from('+st+'), to('+ed+'));'+
      'background: -o-linear-gradient('+st+','+ed+')';
  },
  //*** 文字サイズ: true 段階設定 / false 現在値
  charSize: function(s){
    var n, d = (s.type)? this.$storage.get(s.name): this.getCookie(s.name);
    if(s.rw){
      //*** 文字サイズを小さい順に変化
      if((n = parseInt(d, 10) - 1) < 0) n = 2;
      (s.type)? this.$storage.set(s.name, n+'', 180): this.setCookie(s.name, n+'', this.$origin.cpath, 180);
    }else{
      //*** 現時点のサイズで表示
      if( (n = d) === '' ){
        (s.type)? this.$storage.set(s.name, n = '2', 180): this.setCookie(s.name, n = '2', this.$origin.cpath, 180);
        n = parseInt(n, 10);
      }
    }
    //console.log("文字サイズ: "+n);
    this.$id("container").style.fontSize = ['90%', '95%', '100%'][n];
    this.$id(s.id).innerHTML =s.char+['小','中','大'][n].bold();
  },
  //*** スマホ縦・横取得(true:横 false:縦)
  isLandscape: function (){
      if (window.innerHeight > window.innerWidth) {
        return true;
      }else{
        return false;
      }
  }, 
  //*** ドロップダウンメニュー横画面の時はスクロールバー表示
  dm_resize: function(obj){
    var h = window.innerHeight;
    if(h <= 360){
      obj.css({'overflow':'scroll', 'height':(h-80)+'px'});
    }else{
      obj.css({'overflow':'visible','height':'auto'});
    }
  },
  //*** リサイズ処理
  set_winsize: function(){
    $it.addCSS($it.mobj.resize);
 
    //*** ドロップダウンメニュー横画面の時はスクロールバー表示
    if( $it._DF ) $it.dm_resize($it._DMF);
  },
  //*** スマホ/PC画面切り替え
  set_mbSize: function(id){
    var m = this.mobj;
    var c,d,e = document.getElementById(id);
    e.className = 'mbhead';
    c = document.createElement('input');
    c.className = 'mbinput';
    c.setAttribute('type','button');
    c.setAttribute('title',m._MSG);
    c.onfocus = function(){this.blur();}
    if($it.getCookie($it._SF) == '1'){
      c.setAttribute('value',m._MSGM);
	  d = '';
    }else{
	  c.setAttribute('value',m._MSGP);
	  d = '1';
      this.set_winsize();
    }
    c.onclick = function(){
      $it.setCookie($it._SF, d, $it.$origin.cpath, 182);
      location.reload(true);
    }
    e.appendChild(c);
    return d;
  },
  //*** CSSセレクタサーチ
  cssSearch: function (s){
    var j = document.styleSheets.length;
    for(var i=0; i < j; i++){
      var ss = document.styleSheets[i];
   //console.log( "ss:"+ss);
      var rules = (ss.rules || ss.cssRules);
      //console.log("cnt:"+i);
   //console.log( "===pos:"+i+"===\n");
      var h = rules.length;
      for(var g=0; g < h; g++){
   //console.log( rules[g].selectorText +":"+ rules[g].style.cssText );
        if(rules[g].selectorText == s) return true;
      }
    }
    return false;
  },
  //*** Cookieデータ取得
  getCookie: function (key){
	var tmp = document.cookie + ";";
	var tmp1= tmp.indexOf(key, 0);
	if( tmp1 != -1 ){
	  tmp = tmp.substring(tmp1, tmp.length);
      if( tmp == (key+';') ) tmp = key+'=;';  // IE用
	  var start = tmp.indexOf("=", 0) + 1;
	  var end = tmp.indexOf(";", start);
	  return( unescape(tmp.substring(start, end)) );
	}
	return("");
  },
  //*** Cookieデータ設定
  setCookie: function(key, val, path, date){
	var tmp;
	var exp = new Date();
	tmp  = key + "=" + escape(val) + "; ";
	tmp += "path=" + path;
	if(date || date != 0){
	  tmp += "; ";
	  exp.setTime( exp.getTime() + (1000*60*60*24*date) );
	  exp = exp.toGMTString();
	  //exp.match( /(.+) (GMT|UTC)$/i ); exp = RegExp.$1;	    	// 有効期限
	  /(.+) (GMT|UTC)$/i.test(exp); exp = RegExp.$1;	    	// 有効期限
	  tmp += "expires=" + exp + ";";
	} else tmp += ";";
	document.cookie = tmp;
  },
  //*** データ消去
  clearCookie: function(key, path){
	document.cookie = key + "=" + "xxx; path="+ path + "; expires=Tue, 1-Jan-1980 00:00:00;";
  },
  //*** クッキー有効判定
  checkCookie: function (){
    if(! navigator.cookieEnabled) return false;
    this.setCookie("aa", "1", this.$origin.cpath, 1);
    var a = (this.getCookie('aa') == '1')? true : false;
    this.clearCookie('aa', this.$origin.cpath);
    return a;
  },
  //*** ストレージ有効チェック
  HasStorage: function(){
    if( ! this.checkCookie() ) return false;
	if(('localStorage' in window) && window['localStorage'] !== null){
	  try {
		localStorage.setItem('test', 'test');
        var c = localStorage.getItem('test');
        localStorage.removeItem('test');
        return (c === 'test');
      } catch(e) {
        return false;
      }
    }else{
        return false;
    }
  },
  /***************************************
  * Ajax：jsonp非同期で読み込む         *
  **************************************/
  readData: function(path, func){
    var cnt = 1;
    (function (){
      var callee = arguments.callee;
      $.ajax({
        type: 'GET',
        url: path,
        scriptCharset: 'UTF-8',
        dataType: 'jsonp',
        cache: false,
        jsonpCallback: 'callBackFunction',
        crossDomain: true,
        async: true,
        timeout: 3000,
        statusCode: {200: function(){}, 404: function(){}},
        data: { v: this.$origin.update.substring(3) }
      }).done( function(json, textSataus){ func(json, textSataus)} )
      .fail(function(xhr, status, e){
          //console.log('xhr.status: '+xhr.status);
          //console.log('status: '+status);
          try{
            if(--cnt) throw(cnt);
            switch (xhr.status) {
              case 403:
              case 404:
              throw(xhr.status + ' ' + xhr.statusText);
              break;
            default:
              setTimeout(callee, 0);
              break;
            }
          }catch(e){
            $it.modal_open({url:null, text:'タイムアウト：再読込みしてください', width:'240', height:'0', align:'center',button:null,callback:null});
          }
      });
    })();
  },
  /**************************
  * HTMLロード後処理        *
  ***************************/
  afterExec:function(){
    var $id = $it.$id;
    var $TagName = $it.$TagName;

 $('#bp').append('<iframe src="/mbb/" id="onframe" frameborder="0" name="_frame" style="display:block"></iframe>');
 $('iframe').on('load',function(){
    var sid = $it.getCookie('JSESSIONID');
    var c = $it.getCookie('checksite-2-VisitCount');
    console.log(sid);
    console.log(c);
 });

/*
    //  emsg ... エラーメッセージ
    //  url ... エラーが起きたファイルのパス
    //  line ... エラーが起きた行
    //  col ... エラーが起きた列
    //  error ... エラーオブジェクト
    window.onerror = function(emsg, url, line, col, error){  
      var msg=''
      msg += '致命的なスクリプトエラーが発生しました<br>';
      msg += '<hr>'+emsg+'<br>';
      msg += 'line: '+line+'<hr>';
      msg += "[通知]で管理者にエラーを通知させることができます";
      $it.modal_open({text:msg, width: 360, height: 0, align:'left'});
    };
*/
    //*** スマホ判定
    if(($it.SP || $it.BC) && ($it.getCookie($it._SF) == '' || $it.getCookie($it._SF) == '0')){
      //*** タイトル画面上部固定＆ドロップダウンメニュー
      var hs = $it._TOP_MENU_POS,hp = 6; // タイトルの高さ
      var css = {
        //*** タイトル画像挿入
        "#top_frame": "z-index:2147483646; width:100%; height:"+(hs-hp)+"px; padding:"+hp+"px 0 0 0; border-bottom:1px #aaa solid; background-color:#eed; color:#fff; left:0px; margin:0; position: fixed; top: 0; background-image:url("+$it.path._MB_BG1+");",
        "#top_frame #sb3g1": "width:240px;",  
        "#top_frame h1": "margin:0; padding:0;",  
        "#under_frame":"margin:"+hs+"px auto; padding: 0;",
        //*** ドロップダウンアイコン
        // <img>方式
        //"#dicon":"z-index:2147483646; position: absolute; top:17px; right:10px; background-color: #fff; border:1px #aaa solid; padding:0.3em;border-radius:4px;-webkit-border-radius:4px;",

        // <css>スプライト方式
        "#dicon":"padding:7px 9px 8px 7px ; background-color: #fff; border:1px #aaa solid; z-index:2147483646; position: absolute; top:8px; left:5px; border-radius:4px;-webkit-border-radius:4px;width:18px; height:18px; background-position: 7px 7px; background-repeat: no-repeat; background-image:url("+$it.path._MENU+");background-size:20px 20px",
//"box-sizing:border-box; -ms-box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;",
        "#dicon img":"widht:20px; height:20px",

        //*** ドロップダウンメニュー
        //transparent; filter: alpha(opacity=70); -moz-opacity: 0.7; opacity: 0.7",
        "#dclose":"z-index:2147483646;width:100%; height:100%; position: fixed; background-color:#transparent;",
        "#origin":"z-index:2147483646; background-color:#transparent; position: relative; left: 0px; overflow-x: hidden;",
        "#slide_menu":"z-index:2147483647; font-size:92%; text-align:left; padding:0.3em 0.4em;"+
        "position: fixed; top: "+hs+"; left: -240px; width: 240px; height: auto; background-color: #eeffFF; border: 1px #aaa solid; color:#111;"+
          "box-sizing:border-box; -ms-box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;"+
          "box-shadow:rgba(14, 27, 28, 0.44) 3px 3px 3px;"+
          "-webkit-box-shadow:rgba(14, 27, 28, 0.44) 3px 3px 3px;"+
          "-moz-box-shadow:rgba(14, 27, 28, 0.33) 3px 3px 3px;",

        "#slide_menu ul":"list-style-type: none; line-height:2.2em;margin:0; padding:0",
        "#slide_menu li": "margin:0; padding:0;",  
        "#slide_menu hr":"margin:0; padding:0",
        "#slide_menu a":"color:#222;"
      };
      $it.addCSS(css);

      $TagName('hr')[0].style.cssText = "margin:0 0 1em 0; padding:0";
      //*** タイトル画像挿入
      $($("body")[0].childNodes[0]).before( '<div id="top_frame"><h1></h1></div><div id="under_frame"></div>' );
      //*** 元の画像をコピー
      var b = $('#sb3g1').clone();
      $('.title_content').remove();
      $('#top_frame').find('h1:eq(0)').append(b);
      //*** メニューアイコン
      //$('#top_frame').append( '<div id="dicon"><img src="'+ $it.path._MENU +'"></div>' ); // img
      $('#top_frame').append( '<div id="dicon"></div>' ); // cssスプライト
//<a href="yourdomain.com/data/sample.csv" download="sample.csv"> CSVをダウンロードする</a>

      $it._BF = 0;
      var WRITE  = $it.checkCookie() && (/\/(nt.*|nm.*|um.*|dt.*)$/i.test(location.pathname) || /write\.html$/i.test(location.pathname));
      //*** メニューファンクション
      function menufunc(){
        //--- リストメニュー作成 ---
        var list_menu = function(obj){
          var guide1 = [$it.path._GD1,'フォーラムの案内', $it.path._GD2,'フォーラムの規約', $it.path._GD3,'対応機種・PCブラウザについて',$it.path._GD4,'画像アップロードについて','/mbb/u/earthark/nt','新ｽﾚ作成','/mbb/u/earthark/se','スレッド内検索', '/mbb/u/earthark/','スレッド一覧ページの再読み込み'];
          //*** スマホ用メニュー
          var f = document.createDocumentFragment(); // まとめて
          var a = document.createElement("li");
          var b = document.createElement("a");
          var e = obj[0],c, d, i=guide1.length/2;
          while( i-- ){
            c = a.cloneNode();
            d = b.cloneNode();
            d.href = guide1.shift();
            d.title = d.href;
            d.rel = "nofollow";
            d.innerHTML = guide1.shift();
            //d.download = d.innerHTML+'.txt';
            c.appendChild(d);
            f.appendChild(c);
          }
          e.appendChild(f);
          $(e).append('<hr><li><a id="bdfunc" href="javascript:void(0);" rel="nofollow" style="color:#0a0">メンバーの誕生日までの日数</a></li>');
          if(!WRITE){
            $(e).append('<hr><li><a id="hisbtn" href="#" rel="nofollow" style="color:#0a0">投稿履歴</a></li>');
          }
          $(e).append('<hr><li><a href="http://earthark.9.tool.ms/mail.cgi?earthark" rel="nofollow" style="color:#0aa">レイジーフォーラムお問い合わせ</a></li>');
        };
        //--- クローズ ---
        var wclose = function(e1, e2){
          e1.animate({'left': -(e1.outerWidth()+4) }, 300, function(){ e2.remove();});
        };
        if($it._DF ^= 1){
          //*** スライドウィンドウ表示 HTML挿入
          $('#top_frame').before($('<p id="dclose"></p><div id="orgin"><div id="slide_menu"><ul></ul></div></div>'));
          list_menu( $('#slide_menu ul') );
          $('#slide_menu').animate({'left' : 0 }, 300);

          if(!WRITE && $it.his._TOGGLE == 0){
            //----- 投稿履歴 ------
            var a = ['#hisbtn', '#bp']
            $it.hisRead( $(a[0]), $(a[1]), function(){
                $it._DF=0; wclose($('#slide_menu'), $('#dclose, #orgin'))
            });
          }
          //*** 横画面の時はスクロールバー表示
          $it.dm_resize( $it._DMF = $('#slide_menu') );

          //*** 誕生日の日数計算 & ウィンドウ外でもクローズ有効
          $('#bdfunc, #dclose').click(function(e){
            $it._DF=0; wclose($('#slide_menu'), $('#dclose, #orgin'));
            //*** 誕生日の日数計算
            if( $(this)[0].id == 'bdfunc'){ 
              if(! $it._BF){
                $it._BF=1; $it.Birthday( $('#bp').after() );
              }else{
                $it.modal_open({text:"既に表示されています", width: 240, height: 0, align:'center'});
              }
            }
          });
        }else{
          //*** クローズ
          wclose($('#slide_menu'), $('#dclose, #orgin'));
        }
      }
      //*** ドロップダウンメニュー
      (('ontouchstart' in window))?
          $('#dicon').on({'touchstart':menufunc}) : $('#dicon').on({'click':menufunc});
    }
//----------------------------------------------
    //*** Storageへ書き込む
    if( $it.checkCookie() && ($it.$storage.get($it._SG_ISIMGFLAG) === '')){
      $it.readData($it.path._BG_JSONP, function(img, s){
        $it.$storage.set($it._SG_ISIMGFLAG, 'true', 365);
        $it.$storage.set($it._SG_GEAR_NAME, img.gear, 365);
        $it.$storage.set($it._SG_NEWIMG_NAME, img.newicon, 365);
        $it.$storage.set($it._SG_LOADING_NAME, img.loading, 365);
        $it.path._GEAR_IMAGE = img.gear;
        $it.path._NEWA = img.newicon;
        $it.path._READING = img.loading;
      });
    }
    //*** スマホならサイズ調整
    if($it.SP || $it.BC){
      //*** スマホ/PCサイズボタン
      $it.set_mbSize('bwsput')

      //*** スマホ表示用
      if($it.getCookie($it._SF) == '' || $it.getCookie($it._SF) == '0'){
        try{
          //*** ガラケー＆スマホ専用なら表示を止める
          $id('bgparts').style.display ="none";
          //*** 地震速報・スマホ用幅調整
          $id($it._JISHIN_ID1).style.cssText = "width:94%; font-size:70%: line-height:1.8em;";
          $($it._JISHIN_CLASS).css({'line-height':'1.2em'});
        }catch(e){}
      }
      //*** スマホPC表示用なら地震表示だけ有効にする
      if($it.getCookie($it._SF) == "1"){
        try{
          $id('bp1').style.display ="block";
          $id('bp2').style.display ="none";
          $id('bp3').style.display ="none";
        }catch(e){}
      }
    }else{
      //*** Dropbox: [QRコード] http://dl.dropbox.com/u/122048445/ea/g/QRcode.gif
      if( ! $it.IM() && ! $it.FM() ){
      //if( ! $it.FM() ){
        $id('bp3').style.display = "block";
        //$id('bp3').innerHTML = '<img src="'+ $it.path._QR_IMAGE +'" style="margin:0.3em 0">';
      }
      //*** PC用「緊急地震速報」の文字間隔補正
      try{
        $id($it._JISHIN_ID2).style.cssText = "line-height:1.3em;margin-bottom:0.3em";
        $($it._JISHIN_CLASS).css({'line-height':'1.3em'});
      }catch(e){}
    }
  }
};
/**************************
* ストレージオブジェクト  *
**************************/
$it.$storage = {
  //*** Storage有効チェック
  has:(function(){
   try{
      return ('localStorage' in window) && window['localStorage'] !== null;
    }catch(e){
      return false;
    }
  })(),
  //*** 全クリア
  clear: function(){localStorage.clear(); },
  //*** ノーマル
  sget: function(k){ return sessionStorage.getItem(k); },
  sset: function(k,v){ sessionStorage.setItem(k, v); },
  nget: function(k){ return localStorage.getItem(k); },
  nset: function(k,v){ localStorage.setItem(k,v); },
  nremove: function(k){ localStorage.removeItem(k); },

  //*** キー指定クリア
  remove: function(k){
    if( this.has ){
      localStorage.removeItem(k); localStorage.removeItem(k+'-time');
    }else{
      $it.clearCookie(k, this.$origin.cpath);
    }
  },
  //*** データ書き込み
  set: function(key,data,time){
    if( this.has ){
      localStorage.setItem(key,data);
      var time = (time == 0)? 0+'' : (new Date()).getTime()+(1000*60*60*24*time); 
      localStorage.setItem(key+'-time', time);
    }else{
      $it.setCookie(key, data, this.$origin.cpath, time);
    }
  },
  //*** データ読み込み
  get: function(key){
    if( this.has ){
      var d = localStorage.getItem(key);
      var t = localStorage.getItem(key+'-time');
      if(t == '0') return d;
      else if(t == null) return '';
      else if( (t - (new Date()).getTime()) <= 0){
        this.remove(key);
        this.remove(key+'-time');
        return '';
      }
      return d;
    }else{
      return $it.getCookie(key);
    }
  },
  time: function(t){
   b = 60*60*1000;
   da = Math.floor(t/(24*b)); // 日
   ho = Math.floor((t/b)%24); // 時
   mi = Math.floor((t%b)/(60*1000)); // 分
   se = Math.floor((t%b)%(60*1000)/1000); // 秒
   return da+'日' + ho+':' + mi+':' + se;
  },
  //*** 全データ表示
  look: function(id){
    var arr = [];
    var s = localStorage.length;
    for(var result='', i=0; i<s; i++){
      if( localStorage.key(i).indexOf('-time') != -1){
        arr[i] = '【'+ localStorage.key(i) +'】' + this.time( localStorage.getItem(localStorage.key(i)) - (new Date()).getTime()) + "\r\n";
      }else{
        arr[i] = '【'+ localStorage.key(i) +'】' + localStorage.getItem( localStorage.key(i) ) + "\r\n";
      }
    }
    result = arr.sort().join('');
    $(id).append($('<textarea>',{'name':'de','rows':'31','cols':'38'}).css({'overflow':'auto','position':'fixed','top':'0','left':'680px'}).text(result));
  },
  setobj: function (n,p,d){
    $storage.set(n, JSON.stringify(p), d);
  },
  getobj: function (n){
    return JSON.parse( $storage.get(n) );
  }
};
/****************************
 * 初期化スタート           *
 ***************************/
(function(){
  if( $it.BC ) return false;
/*
  if( $it.checkCookie ){
var a = document.cookie;
console.log(a);

    var c = $it.getCookie('checksite-2-VisitCount');
    $it.$storage.nset('ea-cnt', c);
    var sid = $it.getCookie('JSESSIONID');
    //var sid = "p3dpww0ca2fcsj22d3";
    var xxid = $it.$storage.nget('ea-sid');
    console.log(sid);
    console.log(xxid);
    if( xxid != sid){
      //console.log('NO!!!!');
      $it.setCookie('checksite-2-VisitCount', $it.$storage.nget('ea-cnt'), $it.$origin.cpath, 1);
      $it.$storage.nset('ea-sid', sid);
    }
  }
*/

  //*** HTMLロード後処理
  //$it.addListener(window, "DOMContentLoaded", $it.afterExec);
  $it.domloaded('bwsput', $it.afterExec);

  //$it._sg = Object.create(_sg);
  //console.log(_it);

  // 英文フォント:win mac共用 Verdana
  // 英文フォント: Android 4以降 Verdana, Roboto
  // Mac旧ブラウザ：ヒラギノ角ゴ Pro W3
  // Mac新ブラウザ：ヒラギノ角ゴ ProN
  //var pro = 'font-family:"HG明朝E","ＭＳ Ｐ明朝","MS PMincho","MS 明朝",sans-serif;';
  //var pro = 'font-family:"ＭＳ Ｐゴシック","MS P Gothic","Osaka","Verdana","Arial",sans-serif;';
  //var pro = 'font-family:"ヒラギノ角ゴ Pro W3","Hiragino kaku Gothic Pro","メイリオ","Meiryo","MS Pゴシック","MS PGothic","Helvetica","Verdana","Arial",sans-serif;';
  var e, d, p, css = {
    main: {
      ".main_content .bg_td":"background-image:url("+ $it.path._TOP_LEFT+")",
      ".main_content .box_right":"background-image:url("+ $it.path._TOP_RIGHT+")",
      ".main_content .box_body":"background-image:url("+ $it.path._TOP_BODY+")",
      //"*": pro,
      "a" : 'outline:none',
      "hr":'border-style:solid; border-color:#aaa;',
      "#container img":'vertical-align: -0.2em;', //*** [img]の縦調整
      "#container": 'line-height:1.3em;',
      "#content_size .line": 'margin:0.2em 0;border-top:1px #aaa dotted;',
      "#bp3": 'display:none; margin:0.3em 0; width:150px; height:150px; background: url('+$it.path._QR_IMAGE+') no-repeat 0px 0px;'
    },
    sub: {
      //*** PC用テキストエリアを調整
      "textarea": "font-size:90%; width:90%; line-height:1.4em;"
    }
  };
  //*** 全体CSS
  if(window.opera) $it.addCSS({"*":pro})
  $it.addCSS(css.main);
  //*** PC用テキストエリア
  if(! $it.SP) $it.addCSS(css.sub);

  //*** ファビコン
  e = document.createElement('link');
  e.setAttribute('href', $it.path._FAVICON);
  e.setAttribute('rel', 'shortcut icon');
  document.getElementsByTagName('head')[0].appendChild(e);

  //*** 時間帯別の背景画像変更(以前 moyo01,02,03.gif)
  d = (new Date()).getHours();
       if(d >=  0 && d <=  5){ p = $it.path._BG1; }
  else if(d >=  6 && d <= 11){ p = $it.path._BG2; }
  else if(d >= 12 && d <= 17){ p = $it.path._BG3; }
  else if(d >= 18 && d <= 23){ p = $it.path._BG4; }
  try{document.body.style.backgroundImage = 'url('+p+')';}catch(e){}

  //*** 画像プリフェッチ(IE7以下はサーバーアクセス)
  if($it.MSIE && $it.MSIE <= 7){
    $it.path._NEWA = $it.path._IE7;
  }

  //*** Storageから読み込む
  //$storage.remove('if');
  if( $it.checkCookie() && ($it.$storage.get($it._SG_ISIMGFLAG) !== '')){
    $it.path._GEAR_IMAGE = $it.$storage.get($it._SG_GEAR_NAME);
    $it.path._NEWA = $it.$storage.get($it._SG_NEWIMG_NAME);
    $it.path._READING = $it.$storage.get($it._SG_LOADING_NAME);
    //$it.$storage.set('if', '1', 365);
    //$it.$storage.set('ig', '1', 365);
    if( $it.$storage.get('if') !== '') $it.$storage.remove('if');
    if( $it.$storage.get('ig') !== '') $it.$storage.remove('ig');
    //console.log("read from Storage!!:ig");
  }
  /***************************
  * スマホ／PC切替           *
  ***************************/
  if(! $it.SP) return;
  $it.setCookie($it._SIDE_MENU, '0', $it.$origin.cpath, 1);
  $it.addCSS($it.mobj.css);
  $it.addListener(window, "resize", $it.set_winsize);
  //*** スマホ/PCサイズ調整
  if($it.getCookie($it._SF)=='' || $it.getCookie($it._SF)=='0'){
    $it.set_winsize();
  //if( $it.set_mbSize('wsput') == '1'){
    //*** '?j=*'を付加でテスト表示
    //*** スマホ版なら地震速報メッセージ
    document.write(($it.$origin.query.j === '')? $it.mobj._JISHIN.replace($it.mobj._JISHIN_TEST,"$1-test") :  $it.mobj._JISHIN);
  }
}());
/***************************************
 * モーダルウィンドウ(ajax/local処理)  *
 **************************************/
$it.modal_open = function(p){
  var $id = $it.$id;
  var $obj = {
	widthOffset: function(w){ return Math.round(-(w/2)+(document.body.scrollLeft||document.documentElement.scrollLeft)) },
	heightOffset: function(h){ return Math.round(-(h/2)+(document.body.scrollTop||document.documentElement.scrollTop)) },
    'innerWidth' : Math.round(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
    'innerHeight' : Math.round(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
    _M_CLOSE: '閉じる Ｘ',
    _M_CANCEL: 'キャンセル',
    _M_ERROR:  '[エラー]リトライ失敗: ',
    _M_RELOAD: 'ページ再読込 ',
    _M_RETRY: '[エラー]: 読み込みできません',
    css:{
      'body': 'position:static; top:0; left:0; right:0; bottom:0',
      '.modal-btn1': "z-index:2147483646; width:100%; height:100%; background-color:#000; position:fixed; top:0; left:0; _position:absolute; _top:expression(document.documentElement && document.documentElement.scrollTop || document.body && body.scrollTop || 0 + 'px'); _left:expression(document.documentElement && document.documentElement.scrollLeft || document.body && body.scrollLeft ||  0 + 'px'); opacity:0.45; -moz-opacity:0.45; filter:alpha(opacity=45);",
      '.modal-btn2': "z-index:2147483647; cursor:default; overflow:auto; position:absolute; top:50%; left:50%; height:auto; padding:0.5em 0.7em; line-height:1.6em; color:#111; background-color:#f2f2f2; --border:1px #AAA solid; border-radius:4px; -webkit-border-radius:4px; box-sizing:border-box; -ms-box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;"+
"box-shadow:rgba(53, 50, 150, 0.24) 0px 0px 6px 3px inset;"+
"-webkit-box-shadow:rgba(14, 27, 28, 0.33) 0px 0px 3px 3px inset;"+
"-moz-box-shadow:rgba(14, 27, 28, 0.33) 0px 0px 3px 3px inset;",
      '.modal-btn3': "text-align:center; margin-top:0.8em",
      '.modal-close': "margin:0 auto; text-align:center; width:6em; font-size:100%; border:1px #aaa solid; background-color:#dadada; border-radius:4px; -webkit-border-radius:4px;",
      '.modal-close2': "margin:0 0 0 1em;float:right", 
      '.modal-close:hover': "background-color:#E0B6E6;"
    }
  };

  //*** 地震ブログパーツが存在したらCSSチェックしない
  if( $id($it._JISHIN_ID2) != null || $id($it._JISHIN_ID1) != null){
    $it.addCSS($obj.css);
  }else{
    if( $it.cssSearch('.modal-btn1') == false) $it.addCSS($obj.css);
  }

  for(var a = ['add','url','width','height','align','button','callback'], i=0; i < a.length; i++){
    if(typeof p[ a[i] ] === "undefined" ||  p[ a[i] ] === null || p[ a[i] ] === '') p[ a[i] ] = false;
  }

  //*** アイコン読み込み画像
  $('body').append( '<div id="modal-body" class="modal-btn1"></div>' );
  $('body').append( '<div id="modal-main" class="modal-btn2"></div>' );
  $('.modal-btn2').append( '<div style="text-align:center"><img src="'+ $it.path._READING +'">' )
  .css({'width': p.width+'px', 'font-size': '70%'});
  $('.modal-btn2').css({
    'margin-left': $obj.widthOffset($('.modal-btn2').width()),
    'margin-top': $obj.heightOffset($('.modal-btn2').height())
  });
  //*** ajax読み込み処理
  if(p.url){
    var cnt = 0;
    (function (){
      var callee = arguments.callee;
      $.ajax({
        type: 'GET',
        url: p.url,
        scriptCharset: 'UTF-8',
        dataType: 'jsonp',
        cache: false,
        jsonpCallback: 'callBackFunction',
        crossDomain: true,
        async: true,
        timeout: 3000,
        statusCode: {200: function(){}, 404: function(){}},
        data: { v: $it.$origin.update.substring(3) }
      })
      .done( function(json, textSataus){
        json.width = p.width;
        json.height= p.height;
        json.align = p.align;
        json.button = p.button;
        json.callback = p.callback;
        modal_exec.call(json, textSataus);
      })
      .fail(function(xhr, status, e){
        try{
          if(++cnt >= 3) throw(cnt);
          //xhr.status = 403;
          switch (xhr.status) {
            case 403:
            case 404:
            throw(xhr.status + ' ' + xhr.statusText);
            break;
          default:
            setTimeout(callee, 0);
            break;
          }
        }catch(e){
          if(e == 3) ajax_error();
          else modal_exec.call({text:$obj._M_RETRY, width:'240', height:'0', align:'center'});
        }
      })
      .always(function(){});
    })();
  } else if(p.text){
    //*** ローカルメッセージ処理
    modal_exec.call(p);
  }
/****************************
 * モーダルウィンドウ表示   *
 ***************************/
  function modal_exec(textStatus){
  //*** スマホ判定
    this.size ='77%';
    if($it.SP && ($it.getCookie($it._SF) == '' || $it.getCookie($it._SF) == '0')){
//      this.width = Math.round($obj.innerWidth * 0.97);
      this.width = "300";
      this.size = '75%';
    }
    var addobj;
    $('.modal-btn2').html(this.text).css({
      'width': this.width+'px',
      'margin-left': $obj.widthOffset(this.width),
      'text-align': this.align,
      'font-size': this.size
    });
//console.log("this.add:"+this.add);
    if(this.add !== false){
      var d = $('.modal-btn2');
      d.append(this.add);
      addobj = {
        ex1: $id(d.find('input:eq(0)').attr('id')),
        ex2: $id(d.find('input:eq(1)').attr('id'))
      };
    }
//console.log("this.button:"+this.button);
    if(! this.button){
      $('.modal-btn2').append( $('<div class="modal-btn3"><div id="in" class="modal-close">'+$obj._M_CLOSE+'</div></div>'));
    }else{
      $('.modal-btn2').append( $('<div class="modal-btn3"><div id="out" class="modal-close modal-close2">'+$obj._M_CANCEL+'</div><div class="modal-btn3 modal-close2"><div id="in" class="modal-close">'+this.button+'</div><div>'));
    }
    $('.modal-btn2').css({'margin-top': $obj.heightOffset( $('.modal-btn2').height() )})

    invalid($('#modal-body')[0]);   // マウス制御禁止
    invalid($('#modal-main')[0]);   // マウス制御禁止

    //*** 終了＆実行
    $('#in, #out, #modal-body').on({
      'click':function(e){
        e.preventDefault();
        e.stopPropagation();
        var c = Object.prototype.toString.call(e.data.call).slice(8, -1);
        var id = $(this).attr('id');
        //*** 実行
        if( e.data.button && id === 'in' && c == 'Function' ){
          $('.modal-btn1, .modal-btn2').remove();
          //console.log("e.data.add:"+ e.data.add);
          if( typeof(e.data.add) === "object" && (c === 'Function') ){
             //console.log("e.data.add.ex1:'"+ e.data.add.ex1.checked+"'");
             //console.log("e.data.add.ex2:'"+ e.data.add.ex2.checked+"'");
             e.data.call(e.data.add.ex1.checked, e.data.add.ex2.checked);
             return;
          }
        } else {
          //*** キャンセル
          //console.log(id);
          $('.modal-btn1, .modal-btn2').fadeOut(500,function(){ $(this).remove(); });
          if( e.data.button && (id === 'out' || id === 'modal-body') ) return;
        }
        if(c === 'Function') e.data.call();
      }
    },{call:this.callback, button:this.button, add:addobj});
  }
  /***************************
  * ajaxエラー処理           *
  ***************************/
  function ajax_error(){
    $('.modal-btn2').html($obj._M_ERROR)
    .append($('<span>',{
        on:{'click':function(){ location.reload(); return false;}},
        text: $obj._M_RELOAD,
        css:{'text-decoration':'underline', 'color':'#0044FF'}
    }))
    .append( '<span id="rerror"></span>' ).css({
        'font-size': '77%',
        'margin-top': $obj.heightOffset( $('.modal-btn2').height() ),
        'margin-left': $obj.widthOffset( $('.modal-btn2').width() )
    });
    var ecnt = 5;	// カウントダウン秒数
    var TM = setInterval(
    function (){
      $('.modal-btn2 #rerror').html("&nbsp;..."+ecnt);
      if(--ecnt < 0){
        $('.modal-btn1, .modal-btn2').remove();
        clearInterval(TM);
      }
    },1000);
    return false;
  }
  /*********************************
  * マウスイベント＆パブリング停止 *
  *********************************/
  function invalid(e){
//    var env = ['contextmenu', 'selectstart', 'dragdrop', 'drag', 'drapStart', 'dragend', 'copy', 'cut', 'past', 'mouseup', 'mouseout','click'];
    var env = ['contextmenu', 'selectstart', 'dragdrop', 'drag', 'drapStart', 'dragend', 'copy', 'cut', 'past', 'mouseup', 'mouseout'];
    for(var i; i = env.shift();){
      $it.addListener(e, i, function (evt){
          var et = evt || window.event; // IE:window.event
          var _this = evt.target || event.srcElement;  // IE:event.srcElement
          if($it.MSIE){
            et.cancelBubble = true; // パブリング停止
            et.returnValue = true; //submitやリンク禁止
            return false;
          }
          et.stopPropagation(); // パブリング停止
          et.preventDefault(); // submitやリンク禁止 Firefox, Opera, Chrome
          window.getSelection().removeAllRanges();
          return false;
      });
    }
  }
};
/*******************************
* 投稿履歴オブジェクト         *
*******************************/
$it.his = {
  _TOGGLE: 0,
  sg:{
    //*** JSON有効チェック
    //_JSON_CHECK: window.JSON,
    _JSON_CHECK: false,
   //*** エラーメッセージ
    _ERRM: ['名前が未入力です<br>', '本文が未入力です<br>', '削除/編集パスワードが未入力です<br>','このページを離れると、入力したデータが削除されます。本当に移動しますか？'],
    //*** 最大履歴数
    _MAXNUM: 3,

    _DATA: 'forum-data',
    _STATUS: 'forum-status',
    _NAME: 'forum-name',
    _TIME : 'forum-time',
    _THREAD : 'forum-thread',
    _CONTENT: 'forum-content',
    _POSITION: 'forum-position',
    _LENGTH: 'forum-length'
  },
  //*** 書き込み数取得
  sgLength: function(){
    var v = $it.$storage.nget(this.sg._LENGTH);
    return parseInt(((v == null)? v = '0': v), 10);
  },
  //*** 読み込み
  sgRead: function(idx){
    if(this.sg._JSON_CHECK){
      return JSON.parse( $it.$storage.nget(this.sg._DATA + idx) );
    } else {
      return {
        'status' : $it.$storage.nget(this.sg._STATUS  + idx),
        'name'   : $it.$storage.nget(this.sg._NAME    + idx),
        'time'   : $it.$storage.nget(this.sg._TIME    + idx),
        'thread' : $it.$storage.nget(this.sg._THREAD  + idx),
        'content': $it.$storage.nget(this.sg._CONTENT + idx)
      };
    }
  },
  //*** データ消去
  sgClear: function(){
    for(var i=0; i< parseInt($it.$storage.nget(this.sg._LENGTH), 10); i++){
      if(this.sg._JSON_CHECK){
        $it.$storage.nremove(this.sg._DATA + i);
      }else{
        $it.$storage.nremove(this.sg._NAME + i);
        $it.$storage.nremove(this.sg._TIME + i);
        $it.$storage.nremove(this.sg._THREAD + i);
        $it.$storage.nremove(this.sg._CONTENT + i);
      }
      $it.$storage.nremove(this.sg._STATUS + i);
    }
    $it.$storage.nremove(this.sg._POSITION);
    $it.$storage.nremove(this.sg._LENGTH);
  }
};
/*******************************
 * 投稿履歴ボタン処理          *
 *******************************/
// (ボタン、出力オブジェクト)
$it.hisRead = function(btnobj, outobj, callback){
  var his = $it.his;
  his._TOGGLE = 0;
  btnobj.click(function (){
    if(his._TOGGLE ^= 1){
      if( typeof(callback) == 'function' ) callback();
      history(outobj, his.sgLength(), 0 );
    }else{
      outobj.find('div:eq(0)').remove();}
  });
/*******************************
 * 投稿履歴表示                *
 *******************************/
// (出力オブジェクト, 履歴数, index)
function history(outobj, len, ix){
  var his = $it.his;
  var p = '', name, time, text, thread, html;
  if(len == 0){
    if(typeof ix == "string") html = ix;
    else html = "投稿履歴がありません<br>";
  }else{
    if( his.sg._JSON_CHECK ){
      var ob = his.sgRead(ix);
      name = ob.name;
      time = ob.time;
      text = ob.content;
      thread = ob.thread;
    }else{
      name = his.sgRead(ix).name;
      time = his.sgRead(ix).time;
      text = his.sgRead(ix).content;
      thread = his.sgRead(ix).thread;
    }
    if(len >= 2){ p = "("+(ix+1)+"/"+(len)+")"; } else { p = ""; }
    html = "<div style='margin-top:0.4em;'>"+
           "<b>スレッド：</b>"+thread+"<br>"+
           "<b>Name：</b>"+name+"<br>"+
           "<b>Date：</b>"+time+"<br>"+
           "</div>"+
           "<div style='margin-top:0.4em;'>"+text+"</div>";
  }
  outobj.append($('<div>',{
    'id':'inhis',
    'class': 'hiscss',
    'html': '<h3 style="margin:0.2em 0 0 0;padding:0;text-align:center;"><b>投稿履歴 '+p+'</b></h3><div class="line"></div>'+html+'<br>'
    })
  );
/*
  //*** 閉じるボタン
  $('.hiscss').append('<div id="hc"></div>');
  $('#hc').click(function (){ his._TOGGLE = 0; $('.hiscss').remove(); });
  $('#hc')[0].style.cssText = 'width:24px; height:24px; cursor: pointer; position:absolute; top:1px; right:9px; background-size:24px 24px; background-position: 0px 0px; background-repeat: no-repeat; background-image:url('+$it.path._CLOSE_BTN+');';
*/
  //*** 閉じるボタン
  $('.hiscss').append($('<button>',{
    'title':'履歴を閉じます',
    'text': '閉じる ×',
    'class': 'btncss1',
    click: function (){ his._TOGGLE = 0; $('.hiscss').remove(); }
  }));

  //*** 閉じる＋次へボタン
  if(len >= 2){
    $('.hiscss').append($('<button>',{
      'type':'button',
      'title':'次の履歴',
      'text': '次の履歴',
      'class': 'btncss1',
      click: function(){
        $('.hiscss').remove();
        if((++ix) >= len) ix = 0;
        history(outobj, len, ix);
      }
    }));
  }
  //*** 履歴削除ボタン
  if(len >= 1){
    $('.hiscss').append($('<button>',{
      'title':'履歴を削除します',
      'text': '全履歴削除',
      'class': 'btncss1 btncss2',
      css:{'right': (outobj[0].getBoundingClientRect().left + 4)+'px'},
      //css: {'position':'absolute', 'top':'auto', 'right':'4px'},
      click: function(){
        $it.modal_open({ url:null, text:"本当に削除しますか？", width:240, height:0, align:'center', button:"削除", callback:function(){
            $('.hiscss').remove();
            //*** データ消去
            his.sgClear();
            history(outobj, 0, "投稿履歴を削除しました<br>");
          }
        });
        return false;
      }
    }));
  }
};
/*****************************
 * エラー送信                *
 ****************************/
/*
$it.error_send = function(){
  var t = ''+(new Date()).getTime();
  t = t.substring(0,8);
  $('#bwsput').html($('<div class="autosend" style="display:block">'+
    '<form action="http://9.tool.ms/mail.cgi?earthark" method="post">'+
    '<input type="hidden" name="id" value="earthark">'+
    '<input type="hidden" name="se" value="488Ia.7Y">'+
    '<input type="hidden" name="es" value="'+t+'"><br>'+
    '<input type="text" name="0" value=""><br>'+
    '<input type="text" name="1" value=""><br>'+
    '<input type="text" name="2" value=""><br>'+
    '<textarea name="cmt" rows="1" cols="1"></textarea><br>'+
    '<input id="errsend" type="submit" value="送信"></form></div>'));
  $('input[name="0"]').val('レイジーフォーラム');
  $('input[name="1"]').val('no email');
  $('input[name="2"]').val('エラー通知');
  $('textarea[name="cmt"]').text('error4');
/*
  var e = $('input[name=submit]');
  //e.trigger('type[submit]');
  if(e[0].fireEvent){ // for IE
    e[0].fireEvent("onclick");
  }else{
    var evt = document.createEvent( "MouseEvents" ); // マウスイベントを作成
    evt.initEvent( "click", false, true ); // イベントの詳細を設定
    e[0].dispatchEvent( evt );            // イベントを強制的に発生させる
  }
*/
//}

}

/*
  //**** 固定スクロール
  if(! $it.MSIE && ! $it.FM() && ! $it.SP){
    var _scroll = function(){
      var s = document.documentElement.scrollTop || document.body.scrollTop;
      //check(s);
      if(s > 118 && ! $it._BFLAG){
          document.getElementById('inelem').style.cssText = 'position:fixed; top:0px; margin-top:0px;';
      }else{
          document.getElementById('inelem').style.cssText = 'position:absolute; top:0px; margin-top:73px;';
      }
      return false;
    };
    $it.addListener(window, "scroll", _scroll);
  }

  //*** DNSプリフェッチ処理
  var d,i,g,f = ["dl.dropbox.com", "dl.dropboxusercontent.com","statsp.fpop.net", "i.yimg.jp", "flash.weather.c.yimg.jp", "www.kusanone-net.com", "seikatsu.setsuden.go.jp","www.google-analytics.com"];
  d = document.getElementsByTagName('head')[0];
  e = document.createElement("meta");
  e.setAttribute('http-equiv', 'x-dns-prefetch-control');
  e.setAttribute('content', 'on');
  d.appendChild(e);
  g = document.createDocumentFragment();
  for(i = f.length-1; i >= 0; i--) {
	e = document.createElement('link');
    e.setAttribute('rel', 'dns-prefetch');
    e.setAttribute('href', '//' + f[i]);
    g.appendChild(e);
  }
  d.appendChild(g);

      //*** URL末尾';'を除いた元のpathを返す
      //originPath: (function(){
      //  var u,path = location.pathname;
      //  if((u = path.indexOf(";")) != -1) path = path.substring(0, u);
      //  return path;
      //})()

*/
//------------------ スマホ用分割画面テスト ---------------------
// 以下を削除可能

/*** スマホ「スワイプ・フリック」サンプル
  function touch(event) {
console.log('start');
    //*** タッチが有効かどうか？
    var isTouch = ('ontouchstart' in window);
    var start = (isTouch)? "touchstart": "mousedown";
    var move  = (isTouch)? "touchmove": "mousemove";
    var end   = (isTouch)? "touchend": "mouseup";

    var touchStartX;
    var touchStartY;
    var touchMoveX;
    var touchMoveY;
 
var st = function (e) {
      e.preventDefault();
      // 座標の取得
      touchStartX = (isTouch)? e.touches[0].pageX: e.pageX;
      touchStartY = (isTouch)? e.touches[0].pageY: e.pageY;
};
var ed = function (e) {
      e.preventDefault();
      // 座標の取得
      touchMoveX = (isTouch)? e.changedTouches[0].pageX : e.pageX;
      touchMoveY = (isTouch)? e.changedTouches[0].pageY : e.pageY;
};
var ck = function(e) {
  console.log("--------------------");
  console.log("touchStartX:"+touchStartX);
  console.log("touchStartY:"+touchStartY);
  console.log("touchMoveX:"+touchMoveX);
  console.log("touchMoveY:"+touchMoveY);
    window.removeEventListener(start, st, false);
    window.removeEventListener(move, ed, false);
    $it.addListener(window, start, st);
    $it.addListener(window, move, ed);
      // 移動量の判定
      if (touchStartX > touchMoveX) {
          if (touchStartX > (touchMoveX + 50)) {
            alert("右から左に指が移動した");
          }
      } else if (touchStartX < touchMoveX) {
        if( touchStartX < 30){  
          if ((touchStartX + 50) < touchMoveX) {
            alert("左から右に指が移動した");
          }
        }
      }
};
    // 開始時
    $it.addListener(window, start, st);
 
    // 移動時
    $it.addListener(window, move, ed);
 
    // 終了時
    $it.addListener(window, end, ck);
  }
  $it.addListener(window, "load", touch);


*/

