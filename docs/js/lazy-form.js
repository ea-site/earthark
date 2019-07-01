  function _addListener(elm, type, func){ elm.addEventListener(type, func, false); }
  var e = function(p){return document.getElementById(p)};
  e('s0').onfocus = function(){if(e('error').innerHTML) e('error').innerHTML = '';}
  e('s0').onblur = function(){
    if( /@/i.test(this.value) && this.value.length > 8){
        e('error').innerHTML = "よろしければ【配信登録】または【配信解除】をクリックしてください";
    }
  }
  e('s1').onclick = ck;
  e("s2").onclick = ck;
  function ck(){
    var m = e('s0').value;
    var el = e('error');
    if(!m){
      el.innerHTML = "メールアドレスは必須です";
      return false;
    }
    if(! /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(m)) {
      el.innerHTML = "正しいメールアドレスを入力してください";
      return false;
    }
    return true;
  }
