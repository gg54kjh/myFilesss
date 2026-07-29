function Coord() {
var d = document,
    x, div = d.body.appendChild(d.createElement("div")); div.id = "Coor";

function yy(s) {
    if (s.shiftKey) {
        if (!d.querySelector('#coor_')) {
            x = d.body.appendChild(div.cloneNode(true));
            x.id = 'coor_';
            x.className = "mydiv_class"
        } else x.remove()
    }
    if (s.keyCode == 27) {
        div.remove();
        x?.remove();
        d.removeEventListener("mousemove", zz, !0);
        d.removeEventListener("keydown", yy)
    }
};

function zz(e) {
    div.innerHTML = `${e.clientX},${e.clientY}<hr>${e.pageX},${e.pageY}`
    document.querySelectorAll('#Coor,#coor_').forEach(it=>it.style.cssText=`position:fixed;background:#fff;z-index:2147483647;padding:4px 8px;border:1px solid black;top:${e.clientY}px;left:${e.clientX}px`)
}
d.addEventListener("mousemove", zz, !0);
d.addEventListener("keydown", yy)
}

function Vremya() {
var dc = document;
 var stl = document.createElement('style');
 dc.body.insertAdjacentHTML('beforeend', `
      <div id="my_vr"><span id="clock1"></span><br><span id="clock2"></span></div>` )
 var div = dc.getElementById('my_vr'), clk1 = dc.getElementById('clock1'),
      clk2 = dc.getElementById('clock2');  getVremya(); div.style.cssText=`padding:3px 10px;border:6px groove;position:fixed;top:150px; right:3px;background:azure; color:#000; z-index:2147483647; text-align:center`;
  document.querySelector('#my_vr #clock1').style.cssText='font-size:22px'; 
  document.querySelector('#my_vr #clock2').style.cssText='font-size:30px;font-weight:700';
  createProzr(div);
 function getVremya(){ 
     var dt = new Date(),
           x=dt.toLocaleString('ru', {
               year: 'numeric',
               month: 'long',
               day: 'numeric'
           }),
     weekday= [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ] [ dt.getDay() ],
     time=dt.toString().split(' ')[4];
     clk1.innerHTML = weekday +'  '+ x;
     clk2.innerHTML = time
  }       
  var int = setInterval(()=>{
      if(!dc.getElementById('my_vr'))  {
          clearInterval(int) ; int = null
      } else  getVremya();
  }, 500);
  dc.body.addEventListener('mousedown', function mnn(e) {
            if (!div.contains(e.target)) {
                div.remove();  e.currentTarget.removeEventListener('mousedown', mnn);  clearInterval(int); int = null
  } } )
}

function RemoveSticky() {
    var els = document.querySelectorAll('*'), fl = 0;
    document.body.addEventListener('click', remSt)
    setTimeout(()=>{
      document.body.removeEventListener('click', remSt)
    }, 1800)
    for(var i=0; i<els.length; i++) {
      if(getComputedStyle(els[i]).position=='fixed')
        els[i].style.setProperty('display', 'none', 'important');
      if(els[i].nodeName=='NAV') els[i].remove();
      if (els[i].shadowRoot)
        els[i].shadowRoot.innerHTML+='<style>:host{display:none !important}</style>'
    }
    function remSt(e){
      if(e.button!=0) return;
      for(var i=0; i<els.length; i++)
        if(getComputedStyle(els[i], null).position=='sticky')
          els[i].remove();
      document.body.removeEventListener('click', remSt)
  }
}

function LocalList() {
    var dv = document.createElement('div'); dv.id = 'bookm'; dv.className = 'mydiv_class mydrg';
    document.body.append(dv);
    dv.innerHTML = `
<a class="ln">&bull; Universal decoder</a>&nbsp;<span>>>></span>
    <a target="_blank" href="http://www.codenet.ru/services/urlencode-urldecode/">dir</a><br>
<a class="ln">&bull; HTML entity</a>&nbsp;<span>>>></span>
    <a target="_blank" href="https://mothereff.in/html-entities">dir</a><br>
<a class="ln">&bull; keyboard-events</a>&nbsp;<span>>>></span>
    <a target="_blank" href="https://codeshack.io/keyboard-event-tester/">dir</a><br>
<a class="ln">&bull; rgb-to-hex converter</a>&nbsp;<span>>>></span><br>
<a class="ln">&bull; Hebrew Keyboard</a>&nbsp;<span>>>></span>
    <a target="_blank" href="https://www.branah.com/hebrew">dir</a><br>
<a class="ln">&bull; Calculator</a>&nbsp;<span>>>></span><br>
<a class="ln">&bull; Base64 encoder/decoder</a>&nbsp;<span>>>></span>
    <a target="_blank" href="https://mothereff.in/base64#vents">dir</a><br>
<a class="ln">&bull; Types of GM_xmlhttpRequest</a><br>
<a class="ln">&bull; Tampermonkey methods</a><br>
<div id="betw">&nbsp;</div>
<div id="right">
<a class="ln">&bull; Bookmarks</a>
<br>
<a class="ln">&bull; Plugins</a>
<br>
<a class="ln">&bull; Collapse</a>
<br>
<a  class="ln" onclick="javascript:childs=document.querySelectorAll('li[class*=&quot;b-leaf-actions-expandchilds&quot;],[class*=&quot;2mdspost-comment-actions__item--expand&quot;]');for(i=0;i<40;i++)childs[i]?.children[0].click();void 0">&bull; Collapse new design</a>
<br>
<a class="ln">&bull; Change font</a>
 </div>
<div id="zakr">CLOSE</div>`
document.querySelector('#bookm').style.cssText=`position:fixed; top:20px; left:650px; background:snow; z-index:20000; border: 5px oldlace groove; padding: 0 10px; z-index: 20000; line-height: 1.45; text-align: left`;
document.querySelectorAll('#bookm a').forEach(s=>s.style.cssText=`color: #000; cursor: pointer; margin-right: 1rem; text-decoration:none`);
document.querySelector('#bookm #betw').style.cssText=`position: absolute; display:inline-block; top:0; right:0; height:40%; width: 19px; background-color: #000`;
document.querySelector('#bookm #right').style.cssText=`position: absolute; background-color: snow; white-space: nowrap; padding: 0 8px 6px; border:1px solid; top:10px; display:none`;
document.querySelectorAll('#bookm #right  a').forEach(s=>s.style.cssText+='margin: 0');
document.querySelector('#bookm #zakr').style.cssText=`text-align: center; background: red; color: white; cursor: default; margin-top:10px`;
setTimeout(()=>{
  setMover();
  document.querySelector('#bookm #zakr').onclick=()=>document.querySelector('#bookm').remove();
  ln = document.querySelectorAll('#bookm a.ln');    
  sp = document.querySelectorAll('#bookm span');
  ln[0].onclick=()=>{
    //  open('https://warm-brioche-096a0d.netlify.app/universal_decoder.html', '', 'width=610, height=659, top=10, left=10')
        open('https://skilder.neocities.org/Universal_decoder', '', 'width=610, height=659, top=10, left=10')  
  }
  sp[0].onclick=()=>GM_o('file:///C:/My%20Downloads/F+/Universal%20decoder.html')

  ln[1].onclick=()=>{
      //open('https://warm-brioche-096a0d.netlify.app/html_entity_good.html', '',  'width=685, height=708, top=10, left=10')
        open('https://skilder.neocities.org/HTML_entity_Good', '',  'width=672, height=630, top=10, left=10')   
  }
  sp[1].onclick=()=>GM_o('file:///C:/My%20Downloads/F+/HTML_entity_Good.html')

  ln[2].onclick=()=>{
       open('https://warm-brioche-096a0d.netlify.app/keyboard-events.html', '', 'width=680, height=528, top=45, left=150')
  }
  sp[2].onclick=()=>GM_o('file:///C:/My%20Downloads/F+/keyboard-events.htm')

  ln[3].onclick=()=>{
     // open('https://warm-brioche-096a0d.netlify.app/rgb-to-hex_color_converter.html', '', 'width=500, height=320, top=50, left=380')
      open('http://moemesto.ru/dazy/file/15257691/qqqq%20%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.htm', '', 'width=500, height=265, top=50, left=380')
      //Параметры актуальные для файла rgb-to-hex.txt в папке GM_files_Chrome -> 'width=500, height=265, top=50, left=380' 
  }
  sp[3].onclick=()=>GM_o('file:///C:/My%20Downloads/F+/rgb-to-hex_color_converter.html')

  ln[4].onclick=()=>{
      open('https://warm-brioche-096a0d.netlify.app/hebrew_keyboard.html', '', 'width=600, height=404, top=10, left=10')
  }
  sp[4].onclick=()=>GM_o('file:///C:/My%20Downloads/F+/Hebrew%20Keyboard_85.htm')

  ln[5].onclick=()=>{
      open('https://warm-brioche-096a0d.netlify.app/calculator.html', '', 'width=556, height=547, top=70, left=376')
  }
  sp[5].onclick=()=>GM_o('file:///C:/My%20Downloads/F+/Calculator.html')
   
  ln[6].onclick=()=>{
      open('https://warm-brioche-096a0d.netlify.app/base64 encoder_decoder.html', '', 'width=608, height=708, top=10, left=10')
  } 
  sp[6].onclick=()=>GM_o('file:///C:/My%20Downloads/F+/Base64_encoder_decoder_mothereff.html')
  
  ln[7].onclick=()=>GM_o('https://wiki.greasespot.net/GM.xmlHttpRequest#Bare_Minimum');
  ln[8].onclick=()=>GM_o('https://www.tampermonkey.net/documentation.php')
  ln[9].onclick=()=>GM_o('file:///C:/My%20Downloads/JSs/Bookm..html');
  ln[10].addEventListener('click', function() {
    function R(w) {
      try {
        var d = w.document,j, i, t, T, N, b, r = 1,C;
        for (j = 0; t = ["object", "embed", "applet", "iframe","video"][j]; ++j) {
          T = d.getElementsByTagName(t);
          for (i = T.length - 1; (i + 1) && (N = T[i]); --i)
            if (j != 3 || !R((C = N.contentWindow) ? C : N.contentDocument.defaultView)) {
              b = d.createElement("div");
              b.style.width = N.width;
              b.style.height = N.height;
              b.innerHTML = "<del>" + (j == 3 ? "third-party " + t : t) + "</del>";
              N.parentNode.replaceChild(b, N);
            }
         }
      } catch (E) {r = 0}
      return r
   }
   R(self);
   var i, x;
   for (i = 0; x = frames[i]; ++i) R(x)
  })
  ln[11].addEventListener('click', function() {
    var commentboxes = document.querySelectorAll('a[onclick^="ExpanderEx.make"]');
    for (var z = 0; z < commentboxes.length; z++) {
      if (commentboxes[z].getAttribute('onclick') && ~commentboxes[z].getAttribute('onclick').indexOf('ExpanderEx.make') || ~commentboxes[z].textContent.indexOf('Expand'))
         setTimeout((function(box) {
           return function() {
             box.click()
           }
        })(commentboxes[z]), 500)
    }
  })
  ln[13].addEventListener('click', ()=> {
     var d=document,els=d.querySelectorAll('p,li,td,article,a div, a span,h1,h2,h3,h4,h5,h6');d.body.insertAdjacentHTML('beforeend',`<table id="myTB"class="mydiv_class"><tr><td>verdana</td><td>arial</td><td>open sans</td><td>ms reference sans serif</td><td>reset</td><td id="cls_">Close</td></tr></table>`);v=p=>{for(var w of els)w.style.setProperty('font-family',p,'important')};td=[...d.querySelectorAll('#myTB td')];td.forEach(function(it){it.onclick=function(){v(this.innerHTML)}});td.at(-2).onclick=()=>v('');td.at(-1).onclick=()=>d.querySelector('#myTB').remove(); d.querySelector('#bookm').remove();d.querySelector('#myTB').style.cssText='position:fixed;top:15px;max-width:fit-content;left:15px;z-index:99999;background:azure;outline:ridge 8px';
d.querySelectorAll('#myTB td').forEach(s=>s.style.cssText='padding:5px 25px;cursor:default;text-align:center;border:1px solid');d.querySelector('#myTB #cls_').style.cssText+=';background:red;color:white'
  })
}, 1000);
  function setMover() {
    var d = document.querySelector('#bookm'),
        el = d.querySelector('#right'), betw = d.querySelector('#betw'), tm1, tm2;
    el.style.left = d.offsetWidth - betw.offsetWidth + 'px';
    betw.onmouseover=n=>{
        tm1=setTimeout(()=>{
          el.style.display=='none' ? el.style.display='inline-block' : "";
          if (el.getBoundingClientRect().right>visualViewport.width) {
             d.style.left = parseInt(d.style.left) - (el.getBoundingClientRect().right-visualViewport.width) +'px';
             d.style.transition = "all 0.3s";  setTimeout(()=>d.style.transition = "", 500)
       } }, 300)
    }
    betw.onmouseleave=()=>clearTimeout(tm1);
    el.onmouseleave=g=>tm2=setTimeout(()=> {el.style.display='none'}, 300) ;
    el.onmouseover=()=>clearTimeout(tm2);
  }
  function GM_xml(url, param) {
       GM.xmlHttpRequest({
           method: "GET",
           url: url,
           onload: function(response) {
               let ip = response.responseText,
               w=open('', '', param); 
               w.document.write(ip)
       }  })
  }
  function GM_o(url) {GM_openInTab(url, {active: true})}
  Drag()
}

function Zakladki() {
if (document.querySelector('#zakl')) return;
var str = ` 
<div id="zakl" class="mydiv_class mydrg"><meta charset="utf-8" />
    <div id="lft">
      <div ur="file:///C:/My Downloads/F+/Online JavaScript beautifier.htm">Online JS beautifier.htm</div><br>
      <div ur="file:///C:/My Portable Soft/Ace_Editor/ace-builds-master/ACE-JS.html">ACE - JS</div><br>
      <div ur="file:///C:/My Portable Soft/MyCodemirror/CodeMirror-HTML.html">Codemirror HTML</div><br>
      <div id='zap'>Zap colors</a></div><br> 
      <div id="quora">Quora remove blur</div><br>
      <div ur="https://www.youtube.com/@sergey_auslender">Ауслендер Youtube.</div><br>
      <div ur="file:///C:/My%20Downloads/F+/StrokesPlus%20Help.html">S+</div>
      <hr>
      <div id="fontsize">+++++</div><br>
      <div id="vs">View Scripts</div><br>
      <div id="vi">View All Images</div>                  
   </div>
   <div id="rigt">
        <div id="ip2">My IP-2</div><br>  
        <div id="ip3">My IP-3</div><br> 
        <div ur="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default">Песочница как на puzzleweb</div><br>
        <div id="ttl">Change document title</div><br>
        <div id="mult">-= Multcloud  OLD version =-</div><br>        
        <div ur="file:///C:/Documents%20and%20Settings/home/Documents/Сниппеты%20Firefox%2085.txt">Сниппеты 85</div><br>
        <div ur="file:///C:/Documents%20and%20Settings/home/Documents/Сниппеты%20для%20Firefox.txt">Снипп.</div>
        <hr>
        <div id="pinfo">Pinfo</div><br>
        <div id="as">Allow Text Selection</div><br>
        <div id="rchild">Remove Children</div>
    
    </div>

</div>`;
document.body.insertAdjacentHTML('beforeend', str);
document.querySelector('#zakl').style.cssText = `position:fixed; top:0; left:550px; display: flex; background:ghostwhite; z-index:99999; border:1px solid; border-radius:7px; padding:8px 0 `;
document.querySelectorAll('#zakl div').forEach(it=>it.style.cssText=`display:inline-block; margin-bottom:2px; padding:2px 13px; font-size:20px; color:black; text-align:left`);
document.querySelectorAll('#zakl a').forEach(it=>it.style.cssText='color:black; text-decoration:none');
document.querySelectorAll('#zakl hr').forEach(it=>it.style.cssText='margin: 0 0 .3rem 0');

var els = document.querySelectorAll('#zakl #lft div, #zakl #lft a, #zakl #rigt div, #zakl #rigt a');
function menter(e) {
   e.target.style.cssText += '; color:blue; cursor:pointer'
}
function mleave(e) {
  e.target.style.color=''; e.target.style.cursor=''
}
els.forEach(it=>{
  it.addEventListener('mouseenter', menter); 
  it.addEventListener('mouseleave', mleave)
})

let z = document.querySelector('#zakl'), zs = document.querySelectorAll('#zakl div[ur]');
document.addEventListener('mousedown', fgh=w=>{
  if (w.button==0 && !z.contains(w.target)) { z.remove(); document.removeEventListener('mousedown', fgh) }
});
for (let s of zs)
  s.onclick=()=>{GM_openInTab(s.getAttribute('ur'), {active: true}); z.remove()};
document.querySelector('#zap').onclick=e=>{
    var newSS, styles = '*:not(canvas){background:white !important;color:black !important } :link,:link *,:link:hover{color:#2518B5 !important}:visited,:visited *,:visited:hover{color:#940099 !important}';
    newSS = document.createElement('link');
    newSS.rel = 'stylesheet';
    newSS.href = 'data:text/css,' + escape(styles);
    document.getElementsByTagName('head')[0].appendChild(newSS)
}
document.querySelector('#quora').onclick=e=>{
var d=document,els=d.getElementsByTagName('*');for(var g of els){let cs=getComputedStyle,st=g.style;if(location.hostname=='www.quora.com'){st.position=='fixed'&&(st.display='none');st.position=='sticky'&&(st.position='static');g.matches('[class*="_overlay"]')&&g.remove();cs(g).maskImage!='none'&&(st.maskImage='none')}if(cs(g).filter!='none'){st.filter='none'}if(location.hostname=='context.reverso.net'){d.getElementById('blocked-results-banner').remove();for(var d of d.querySelectorAll('[class$="blocked"]')){d.style.filter='none'}}if(location.hostname=='www.instagram.com'){for(let r of document.querySelectorAll('#trns_ ~ div'))r.remove();d.getElementById('scrollview').style.cssText+=';position:relative; overflow-y:scroll'}if(location.href.startsWith('https://shrib.com/#')){d.getElementById('umInfo').style.display='none';d.querySelector('textarea[name="t"]').removeAttribute('disabled')}if(location.hostname=='web.archive.org')d.querySelector('#wm-ipp-base').style.display='none';else{var b=cs(d.body).position=='fixed'?';position:static !important;':'',a='overflow:unset !important';d.documentElement.style.cssText+=a;d.body.style.cssText+=b+a;if(cs(g).position=='fixed'&&cs(g).width>='100vw'&&cs(g).height>='100vh')g.remove()}}
}
document.querySelector('#fontsize').onclick=e=> {
(()=>{var p=document.getElementsByTagName('*'),s=(document.body.fntsz==1)?4:2;for(let g of p){if(!g.style.fontSize||parseInt(g.style.fontSize)<20)g.style.setProperty('font-size','20px','important');g.style.setProperty('font-size',(parseInt(g.style.fontSize)+s)+'px','important');g.style.lineHeight=1.4};document.body.fntsz=1})()
}
document.querySelector('#pinfo').onclick=e=> {
    GM_op('file:///C:/My%20Downloads/JSs/Iz-zakladok.txt', 'pinfo')
}
document.querySelector('#as').onclick=e=> {
    GM_op('file:///C:/My%20Downloads/JSs/Iz-zakladok-2.txt', 'as') 
}
document.querySelector('#rchild').onclick=e=> {
    GM_op('file:///C:/My%20Downloads/JSs/Iz-zakladok-2.txt', 'remchildren')
}

document.querySelector('#vs').onclick=e=> {
    GM_op('file:///C:/My%20Downloads/JSs/Iz-zakladok.txt', 'vs')
}
document.querySelector('#vi').onclick=e=> {
    GM_op('file:///C:/My%20Downloads/JSs/Iz-zakladok.txt', 'vi')
}
document.querySelector('#ip2').onclick=e=> GM_op('https://www.showmyip.com/', 2)
document.querySelector('#ip3').onclick=e=> GM_op('https://www.bennetrichter.de/tools/ip/', 3)
document.querySelector('#ttl').onclick=()=>document.title = '123';
document.querySelector('#mult').onclick=()=>{
var d=document;d.querySelectorAll('.el-table__body-wrapper')[2].scrollBy(-1000,0);d.body.insertAdjacentHTML('beforeend','<style id="multStyle">.delete-btns-hide{display:block !important}.el-checkbox{visibility:visible !important}</style>');setTimeout(()=>{d.querySelector('.delete-btn').onclick=()=>d.querySelector('#multStyle')?.remove()},1500)
}
Drag();
function GM_op(url, x) {
GM.xmlHttpRequest({
  method: "GET",
  url: url,
  onload: function(response) {
    ip=response.responseText;
    if (x==2) {
       ip = ip.match(/<table class="iptab">[\s\S]+?<\/table>/);
       w = open('', '', 'width=670,height=550,resizable');
       st = '<style>.iptab tr:nth-of-type(odd){background-color:#F7F4F3}.iptab{border-collapse:collapse}.iptab td{border:1px    solid;padding:4px;vertical-align:baseline}</style>';
       w.document.write(st + ip);
       w.document.close()
     }
     if (x==3) {
        ip = ip.match(/<table[\s\S]*?<\/table>/);
        w = open('', '', 'width=500,height=305,resizable');
        w.document.write('<div style="display:flex;justify-content:center;height:100%;align-items:center">' + ip[0].replace(/<img.*?">/, '') + '</div>');
         w.document.close()
      }
      if (x=='pinfo') {
          ip = ip.match(/@@Pinfo([\S\s]+?)@@/);
          eval(ip[1]) 
      }
      if (x=='as') {
          ip = ip.match(/window\.\_NoHijackHandlers[\s\S]*?'beforeend', styles/);  ip_ = "javascript:(()=>{if(" + ip[0] + ")})()";
          eval(ip_) 
      }
      if (x=='vs') {  
          ip = ip.match(/s=document.getElementsByTagName\('SCRIPT'\)[\S\s]*?void 0/);
          eval(ip[0])
      } 
      if (x=='vi') { 
          ip = "(function()" + ip.match(/{! function[\S\s]*?baguetteBox.run/)[0] + `(".gallery", { });  </scr'+'ipt> ');}()})()`;
          eval(ip)  
      } 
      if (x=='remchildren') {
          ip = '(()=>' + 
            ip.match(/{var c=1;document\.body\.addEventListener[\S\s]*?};document\.body\.removeEventListener(?!'keydown',ck)/)[0] +
              "}}})()";
          document.querySelector('#zakl').remove();
          eval(ip);
      }
  }
});
}
}
