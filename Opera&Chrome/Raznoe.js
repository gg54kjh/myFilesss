function Attributes(x, y) {                                          // -------------  Attributes ----------- //
     let a = document.elementFromPoint(x, y),
          atts = a.attributes,
          orgW = a.offsetWidth, orgH = a.offsetHeight,
          W = Math.round(a.getBoundingClientRect().width),
          H = Math.round(a.getBoundingClientRect().height),
          arr = [],
          orgs = (W!=orgW || H!=orgH) ? '&#x3010;' +orgW+ '&#xD7;' +orgH+ ' (before transf.)&#x3011;' : '';
     for(var i=0; i<atts.length; i++){
         arr.push('<b>' +atts[i].nodeName+ '</b>  ----  '+atts[i].nodeValue);
     }
     a.style.border = '1px red solid';  a.setAttribute('ramka', '');
     var dv=document.body.appendChild(document.createElement('div')); dv.className='mydiv_class';
dv.style.cssText=`position:fixed;background:azure;color:#484848;border:2px solid;padding:7px;max-width:98vw;
top:50%;left:50%;z-index:2147483647;margin-right:-50%;transform:translate(-50%,-50%); 
line-height:normal;max-height:100vh;overflow:auto`; 
      dv.ondblclick=()=>{
         dv.remove();
         a.style.border = '';
        if (a.style.length == '') a.removeAttribute('style');
      }
      dv.innerHTML = a.nodeName+ '&emsp;&ensp;' +W+ '&#xD7;' +H +orgs+ '<br><br>'+arr.join('<br>')
      document.oncontextmenu=''
}

function getTextContent(x_, y_) {                                   // -------------   Получение Text Content ------------- //
let txt, div, padding = '20px;';  let Y = y_,  X = x_  ,
   a = el = document.elementFromPoint(X, Y);
   a.style.border = '1px red solid';
   if (a.textContent != '') {
      if (a.matches('select'))
         txt = '[ ' + a.tagName + ' ]<br>' + a.textContent;
      else
         !a.value && (txt = '[ ' + a.tagName + ' ]<br><br>' + a.innerText);
   }
   if (a.value && !a.matches('select'))
      txt = '[ ' + a.tagName + ' ]*** Value<br><br>' + a.value;

   if (a.textContent == '' && !a.value && a.placeholder)
      txt = '[ ' + a.tagName + ' ]*** Placeholder<br><br>' + a.placeholder;

   if (a.textContent == '' && !a.value && !a.placeholder) {
      if (getComputedStyle(a).position == 'absolute' &&
         !document.elementsFromPoint(X, Y).some(x => x.tagName == 'IMG')) {
        var closest = function(el) {
            while (el) {
               if (el.textContent && el.textContent.match(/[А-Яа-я\w]+/)) {
                  break;
               }
               el = el.parentElement;
            }
            return '[ ' + el.tagName + ' ] target pos.=absolute, ' +
               'взят ближайш. родитель с текстом<br><br>' + el.innerText;
         };
         txt = closest(el).trim()
      } else txt = '[ ' + a.nodeName + ' ]<br><br>NO Textcontent!!';
   }
   div = document.body.appendChild(document.createElement('div'));
   div.id = 'txtcnt';
   div.className = 'mydiv_class _mydrg_';
   if (window.top != window.self) padding = '8px 12px;';
   div.style.cssText = 'position:absolute; background:#FFFCDD; z-index:2147483647; padding:' +
      padding + 'top:' + (Y - 123 + scrollY) + 'px; left:' + (X+10) + 'px;' +
      'border:1px solid; text-align:start; max-height:300px; word-wrap:break-word;' +
      'overflow-y:auto; line-height:normal !important; color:#000';
   setTimeout(() => {
      var rect = div.getBoundingClientRect(),
         raznY = rect.bottom - document.documentElement.clientHeight,
         oldTop = rect.top,
         raznX = rect.right - document.documentElement.clientWidth;
      if (window.top == window.self) {
         if (raznX > 0) {
            div.style.cssText += '; right:2px; left:unset; max-width:800px';
         }
         if (raznY > 0) {
            div.style.top = (oldTop - raznY + window.scrollY - 20) + 'px';
         }
      } else {
         if (rect.right > document.body.getBoundingClientRect().right)
            div.style.cssText += '; left:1px';
         var raznY_ = div.getBoundingClientRect().bottom - window.innerHeight;
         if (raznY_ > 0)
            div.style.top = parseInt(div.style.top) - raznY_ + 'px';
         if (parseInt(div.style.top) < 0)
            div.style.top = '1px';
         if (rect.height > document.documentElement.clientHeight)
            div.style.maxHeight = document.documentElement.clientHeight - 2 + 'px';
      }
   }, 0);
   div.innerHTML = txt.replaceAll('\n', '<br>');
   createProzr(div, a)
 }

function KeyboardEvents() {                                                 // ---------------- Keyboard Events --------------- //
let q = `
<div id="kbev" class="mydiv_class mydrg">
  <form id="form" onsubmit="return false">
      <input value="keyCode >key" type="button"><br>
      <input value="Hex >Dec" type="button">
      <input id="conv" type="text">
      <input value="Dec >Hex" type="button">
      <input value="C L O S E" type="button"><br>
      <input value="charCode >key" type="button"> 
     <br>
    <input placeholder="Press key here!" id="kinput" size=25 type="text" autofocus="">
    <input value="Clear All" type="button">
    <textarea id="area"></textarea>
  </form>
</div> `
document.body.insertAdjacentHTML('beforeend', q);
document.querySelectorAll('#kbev input[type="button"]').forEach(it=>it.style.cssText='all: revert');
document.querySelector('#kbev').style.cssText=`
 position:fixed; top:0; left:100px; background:white; z-index:99999; border: 1px solid; padding: 4px `;
document.querySelector('#kinput').style.cssText=`max-width: 490px; box-sizing: border-box`;
document.querySelector('#conv').style.cssText=`max-width: 200px;  box-sizing: border-box; padding: 3px 0 1px 6px`;
document.querySelector('#area').style.cssText=`
  width: 600px; box-sizing: border-box; height: 189px; border: 1px solid black; display: block `;
document.querySelector('[value="C L O S E"]').style.cssText+= '; float: right';
document.querySelectorAll('[value="keyCode >key"], [value="charCode >key"]').forEach(it=>it.style.cssText+=`;margin-left:140px; margin-bottom:3px `);

 setTimeout(()=> {
    var kinput = document.getElementById('kinput');  kinput.focus();
    var area = document.getElementById('area'); 
    function handle(e) {
       var lastTime;
       var text = e.type +
          ' keyCode=' + e.keyCode +
          ' which=' + e.which +
          ' key=' + e.key +
          ' code=' + e.code +
          (e.shiftKey ? ' +shift' : '') +
          (e.ctrlKey ? ' +ctrl' : '') +
          (e.altKey ? ' +alt' : '') +
          (e.metaKey ? ' +meta' : '') + "\n";
       if (area.value && Date.now() - lastTime > 250) {
           area.value += new Array(81).join('-') + '\n';
       }
       lastTime = Date.now();
       area.value += text;
    }
   
    function decimalToHexString()  { 
         var outp = document.querySelector('#conv'); 
         var number =  Number(outp.value);
         if (number < 0)  { number = 0xFFFFFFFF + number + 1; }
              outp.value = number.toString(16).toUpperCase();
    } 
    
    function hexStringtoDecimal() {
         var outp = document.querySelector('#conv');
         outp.value = parseInt( outp.value, 16)
    }

    function charCodeToLetter(){
       var outp = document.querySelector('#conv');
       outp.value = String.fromCharCode(outp.value) 
    }
    
   function keyCodeToName(){
        var outp = document.querySelector('#conv');
        var str = {
8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause/Break only keyup", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "стрелка влево", 38: "стрелка вверх", 39: "стрелка вправо", 40: "стрелка вниз", 44: "PrintScreen only keyup", 45: "Insert", 46: "Delete", 91: "левая Windows", 92: "правая Windows", 93: "Applications", 96: "NumPad 0", 97: "NumPad 1", 98: "NumPad 2", 99: "NumPad 3", 100: "NumPad 4", 101: "NumPad 5", 102: "NumPad 6", 103: "NumPad 7", 104: "NumPad 8", 105: "NumPad 9", 106: "NumPad *", 107: "NumPad +", 108: "NumPad  Enter", 109: "NumPad -", 110: "NumPad .", 111: "NumPad /", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 186: ";:", 187: "=+", 188: ",<", 189: "-_", 190: ".>", 191: "/?", 192: "`~", 219: "[{", 220: "\\", 221: "]}", 222: "\'", 48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9, 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z"
        }
       outp.value = str[outp.value];
  }
kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;
document.querySelector('[value="Dec >Hex"]').onclick = decimalToHexString;
document.querySelector('[value="keyCode >key"]').onclick = keyCodeToName;
document.querySelector('[value="charCode >key"]').onclick = charCodeToLetter;
document.querySelector('[value="Hex >Dec"]').onclick = hexStringtoDecimal;  
document.querySelector('[value="C L O S E"]').onclick =()=>document.getElementById('kbev').remove(); 
 document.querySelector('[value="Clear All"]').onclick = function() {
    area.value = ''; this.previousElementSibling.value = ''; kinput.focus();document.querySelector('#conv').value=''
 };  Drag()   
}, 1000)
}

function UrlDecoder() {                                                                 // ----------------- Url Decoder ---------------- //
let dv = document.createElement("div"); dv.id = 'urldcdr'; dv.className = 'mydiv_class';
let br =()=>document.createElement("br");
let b =()=> document.createElement("button");
let textarea = document.createElement("textarea");  textarea.id = 'txtar';
textarea.ondblclick=()=>textarea.select();
let bt1 = b(); bt1.innerHTML='DECODE'; bt1.onclick=()=>textarea.value=DecodeURI(textarea.value);
let bt2 = b(); bt2.innerHTML='ENCODE'; bt2.onclick=
()=>textarea.value=encodeURIComponent(textarea.value);
let bt3 = b(); bt3.innerHTML='Entity Dec.'; bt3.onclick=
()=>{
   let tx = document.createElement("textarea");
   tx.innerHTML = DecodeURI(textarea.value);
   textarea.value = tx.value
}
let bt4 = b(); bt4.innerHTML=' Entity Enc.'; bt4.onclick = function() {textarea.value = enc(textarea.value)};
function enc(str) {
   return Array.from(str).map(c => {
      const code = c.charCodeAt(0);
      if (
         (code >= 48 && code <= 57) || // 0-9
         (code >= 65 && code <= 90) || // A-Z
         (code >= 97 && code <= 122) || // a-z
         code === 32  //<<-- добавлен код пробела
      ) {
         return c;
      }
      // Для всех остальных — кодируем
      return `&#${code};`;
   }).join('');
}
let bt5 = b(); bt5.innerHTML = 'Base64'; bt5.onclick = () => {
     window.open('https://skilder.neocities.org/Base64_encoder_decoder_mothereff', '', 'width=500, height=550');
     dv.remove();
  }
let bt6 = b(); bt6.innerHTML = 'RGB<>HEX'; bt6.onclick = 
()=>{ dv.remove(); runRgbHex() }
let clear = b(); clear.innerHTML='=CLEAR='; clear.onclick=
()=>{textarea.value = ''; textarea.focus()}
let btcls = b(); btcls.id = 'btcls'; btcls.innerHTML='CLOSE'; btcls.onclick=()=>dv.remove();
dv.append(textarea, br(), bt1, bt2, clear, btcls, br(), bt3, bt4, bt5, bt6);
document.body.appendChild(dv);
document.querySelector('#urldcdr').style.cssText='position: fixed; top:0; left:1px; z-index:2147483647; background:white';
document.querySelector('#urldcdr #btcls').style.cssText='all: revert; width: 48%';
document.querySelector('#txtar').style.cssText='padding-left:7px; border:none; width:1140px; min-height:unset !important; height:150px !important; background:azure; color:#000';
document.querySelectorAll('#urldcdr button:not(#btcls)').forEach(it=>it.style.cssText='all: revert; width: 17%')

textarea.focus(); 
    
function DecodeURI(str) { 
   try {
     return decodeURIComponent(str);
   } catch (e) {}
   return str.replace(/(?:%[\dA-F]{2})+/g, function(s) {
     var rest = "";
     do {
         try {
              return decodeURIComponent(s) + rest;
         } catch (e) {}
         // Strip last %NN and try decode again
          rest = s.slice(-3) + rest;
          s = s.slice(0, -3);
         }
            while (s.length >= 3);
            return s + rest;
        });
    }
function runRgbHex() {
let s = `
  <div id="rgbconv" class="mydiv_class mydrg">
   <p><br></p>
<form name="rgb"> 
   <input id="in0" value="hex to rgb" type="button">
  <div>
    <div id="colorSample">
       &nbsp;
   </div>
   <input id="in1" type="text">
   <input id="in4" type="text" name="hex">
 </div>
 <input id="in5" value="rgb to hex" type="button">
 <input id="in2" value=" Clear " type="button">
</form>
<input id="shablon" type="text">
<p><br></p>
</div> `
document.body.insertAdjacentHTML('beforeend', s);
Drag();
document.querySelector('#rgbconv').style.cssText= `position:fixed; top:0; left:350px; background:white; 
z-index:99999; border: solid 2px; padding-right: 30px `;
document.querySelectorAll('#rgbconv input[type="button"]').forEach(it=>it.style.cssText='all: revert');
document.querySelectorAll('#rgbconv input[type="text"]').forEach(it=>it.style.cssText='background:#fff !important; color:#000 !important');
document.querySelector('#in1').style.cssText += '; position: relative; width: 8rem; text-align: center';
document.querySelector('#in4').style.cssText='width: 8rem';
document.querySelectorAll('#rgbconv #in0, #rgbconv #in2, #rgbconv #in5').forEach(it=>it.style.cssText += '; position: relative; left: 100px;');
document.querySelector('#rgbconv #in5').style.cssText +='; margin-top:3px';
document.querySelector('#rgbconv form>#in0+div').style.cssText = 'flex; margin: 3px 0 1px 0';
document.querySelector('#colorSample').style.cssText='position: relative; top: 2px; display:inline-block; border: 1px solid; width: 40px';
document.querySelector('#shablon').style.cssText='position: relative; left: 0px; bottom: 0px; width: 40px; height: 25px; border: 1px solid';

let shablon = document.querySelector('#shablon');
function hexToRgb() {
   hex = document.querySelector('#in1').value.replace('#', '').replace('0x', '');
   var bigint = parseInt(hex, 16);
   var r = (bigint >> 16) & 255;
   var g = (bigint >> 8) & 255;
   var b = bigint & 255;
   document.querySelector('[name="hex"]').value = r + ", " + g + ", " + b;
   let backCol = "rgb(" +r + ",  " + g + ",  " + b+ ")";  
   shablon.style.backgroundColor = document.querySelector('#colorSample').style.backgroundColor=backCol  
}
document.querySelector('#in0').onclick = hexToRgb;
document.querySelector('#in2').onclick =()=> {
    document.getElementById('in1').value=''; 
    document.getElementsByName('hex')[0].value=''; 
    shablon.style.background = document.getElementById('colorSample').style.background=''
}
document.querySelector('#in5').onclick = function() {
    let val=document.getElementById('in1').value;
    let R=val.split(',')[0].replace(/\D/g, ''); 
    let G=val.split(',')[1];
    let B=val.split(',')[2].replace(/\D/g, '');
    function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
    function toHex(n) {
       n = parseInt(n,10);
       if (isNaN(n)) return '00';
       n = Math.max(0,Math.min(n,255));
       return '0123456789ABCDEF'.charAt((n-n%16)/16) + '0123456789ABCDEF'.charAt(n%16)
    }
    document.getElementsByName('hex')[0].value='#  ' +rgbToHex(R,G,B);  shablon.style.background = 
    document.getElementById('colorSample').style.background='#' +rgbToHex(R,G,B)
} }

}


