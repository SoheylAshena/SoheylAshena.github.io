(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis,T=_.trustedTypes,M=T?T.createPolicy("lit-html",{createHTML:r=>r}):void 0,U="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,W="?"+v,F=`<${W}>`,$=document,b=()=>$.createComment(""),w=r=>r===null||typeof r!="object"&&typeof r!="function",q=Array.isArray,G=r=>q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",E=`[ 	
\f\r]`,y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,B=/>/g,m=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,R=/"/g,z=/^(?:script|style|textarea|title)$/i,J=r=>(t,...s)=>({_$litType$:r,strings:t,values:s}),x=J(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),D=new WeakMap,f=$.createTreeWalker($,129);function V(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return M!==void 0?M.createHTML(t):t}const K=(r,t)=>{const s=r.length-1,i=[];let e,n=t===2?"<svg>":"",l=y;for(let d=0;d<s;d++){const o=r[d];let c,g,a=-1,u=0;for(;u<o.length&&(l.lastIndex=u,g=l.exec(o),g!==null);)u=l.lastIndex,l===y?g[1]==="!--"?l=P:g[1]!==void 0?l=B:g[2]!==void 0?(z.test(g[2])&&(e=RegExp("</"+g[2],"g")),l=m):g[3]!==void 0&&(l=m):l===m?g[0]===">"?(l=e??y,a=-1):g[1]===void 0?a=-2:(a=l.lastIndex-g[2].length,c=g[1],l=g[3]===void 0?m:g[3]==='"'?R:O):l===R||l===O?l=m:l===P||l===B?l=y:(l=m,e=void 0);const p=l===m&&r[d+1].startsWith("/>")?" ":"";n+=l===y?o+F:a>=0?(i.push(c),o.slice(0,a)+U+o.slice(a)+v+p):o+v+(a===-2?d:p)}return[V(r,n+(r[s]||"<?>")+(t===2?"</svg>":"")),i]};class H{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let n=0,l=0;const d=t.length-1,o=this.parts,[c,g]=K(t,s);if(this.el=H.createElement(c,i),f.currentNode=this.el.content,s===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(e=f.nextNode())!==null&&o.length<d;){if(e.nodeType===1){if(e.hasAttributes())for(const a of e.getAttributeNames())if(a.endsWith(U)){const u=g[l++],p=e.getAttribute(a).split(v),I=/([.?@])?(.*)/.exec(u);o.push({type:1,index:n,name:I[2],strings:p,ctor:I[1]==="."?Q:I[1]==="?"?X:I[1]==="@"?Y:k}),e.removeAttribute(a)}else a.startsWith(v)&&(o.push({type:6,index:n}),e.removeAttribute(a));if(z.test(e.tagName)){const a=e.textContent.split(v),u=a.length-1;if(u>0){e.textContent=T?T.emptyScript:"";for(let p=0;p<u;p++)e.append(a[p],b()),f.nextNode(),o.push({type:2,index:++n});e.append(a[u],b())}}}else if(e.nodeType===8)if(e.data===W)o.push({type:2,index:n});else{let a=-1;for(;(a=e.data.indexOf(v,a+1))!==-1;)o.push({type:7,index:n}),a+=v.length-1}n++}}static createElement(t,s){const i=$.createElement("template");return i.innerHTML=t,i}}function A(r,t,s=r,i){var l,d;if(t===S)return t;let e=i!==void 0?(l=s._$Co)==null?void 0:l[i]:s._$Cl;const n=w(t)?void 0:t._$litDirective$;return(e==null?void 0:e.constructor)!==n&&((d=e==null?void 0:e._$AO)==null||d.call(e,!1),n===void 0?e=void 0:(e=new n(r),e._$AT(r,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=e:s._$Cl=e),e!==void 0&&(t=A(r,e._$AS(r,t.values),e,i)),t}class Z{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=((t==null?void 0:t.creationScope)??$).importNode(s,!0);f.currentNode=e;let n=f.nextNode(),l=0,d=0,o=i[0];for(;o!==void 0;){if(l===o.index){let c;o.type===2?c=new N(n,n.nextSibling,this,t):o.type===1?c=new o.ctor(n,o.name,o.strings,this,t):o.type===6&&(c=new tt(n,this,t)),this._$AV.push(c),o=i[++d]}l!==(o==null?void 0:o.index)&&(n=f.nextNode(),l++)}return f.currentNode=$,e}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=(e==null?void 0:e.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=A(this,t,s),w(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):G(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&w(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:i}=t,e=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(V(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===e)this._$AH.p(s);else{const l=new Z(e,this),d=l.u(this.options);l.p(s),this.T(d),this._$AH=l}}_$AC(t){let s=D.get(t.strings);return s===void 0&&D.set(t.strings,s=new H(t)),s}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const n of t)e===s.length?s.push(i=new N(this.S(b()),this.S(b()),this,this.options)):i=s[e],i._$AI(n),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,s=this,i,e){const n=this.strings;let l=!1;if(n===void 0)t=A(this,t,s,0),l=!w(t)||t!==this._$AH&&t!==S,l&&(this._$AH=t);else{const d=t;let o,c;for(t=n[0],o=0;o<n.length-1;o++)c=A(this,d[i+o],s,o),c===S&&(c=this._$AH[o]),l||(l=!w(c)||c!==this._$AH[o]),c===h?t=h:t!==h&&(t+=(c??"")+n[o+1]),this._$AH[o]=c}l&&!e&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class X extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Y extends k{constructor(t,s,i,e,n){super(t,s,i,e,n),this.type=5}_$AI(t,s=this){if((t=A(this,t,s,0)??h)===S)return;const i=this._$AH,e=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==h&&(i===h||e);e&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const C=_.litHtmlPolyfillSupport;C==null||C(H,N),(_.litHtmlVersions??(_.litHtmlVersions=[])).push("3.1.4");const et=(r,t,s)=>{const i=t;let e=i._$litPart$;return e===void 0&&(i._$litPart$=e=new N(t.insertBefore(b(),null),null,void 0,{})),e._$AI(r),e};function st(){return x`<div
    class="fixed -z-50 h-screen w-full bg-gradient-to-tr from-black to-blue-950"
  ></div>`}function it(){return x` <div
      class="anim-nav-but relative left-5 top-5 flex h-8 w-12 flex-col items-center justify-center lg:hidden"
    >
      <div class="h-1 w-10 bg-white"></div>
      <div class="m-1 h-1 w-10 bg-white"></div>
      <div class="h-1 w-10 bg-white"></div>
    </div>
    <nav>
      <ul
        class="anim-nav fixed top-0 z-50 flex h-screen w-full scale-0 flex-col items-center bg-gradient-to-tr from-black to-blue-950 pt-9 text-3xl transition-all lg:static lg:flex lg:h-0 lg:scale-100 lg:flex-row lg:items-start lg:justify-around lg:bg-none lg:p-5 lg:text-lg lg:font-semibold"
      >
        <li class="s-nav-i">
          <a href="#soheyl">Soheyl</a>
        </li>
        <li class="s-nav-i">
          <a href="#skills">Skills</a>
        </li>
        <li class="s-nav-i">
          <a href="#other-skills">Other skills</a>
        </li>
        <li class="s-nav-i">
          <a href="#projects">Projects</a>
        </li>
        <li class="s-nav-i">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>`}function nt(){return x`<div
    class="mx-auto max-w-7xl whitespace-pre-line p-5 lg:flex lg:h-screen lg:items-center lg:justify-around"
    id="soheyl"
  >
    <img
      class="sslide-in sfade-in mx-auto w-72 rounded-full transition-all hover:scale-105 lg:mx-2 lg:w-96 lg:items-center"
      src="images/pic.jpg"
      alt="Avatar"
    />
    <div>
      <h1
        class="text-3xl font-bold transition-all hover:-translate-y-1 lg:text-6xl"
      >
        Soheyl Ashena
      </h1>
      <h3
        class="text-2xl font-thin transition-all hover:-translate-y-1 lg:text-4xl"
      >
        Front-End Developer
      </h3>
      <p
        id="soheyl-desc"
        class="transition-all hover:-translate-y-1 lg:max-w-2xl lg:text-xl"
      ></p>
    </div>

    <div></div>
  </div> `}function lt(){return x` <div
    id="skills"
    class="whitespace-pre-line bg-white p-5 text-blue-950 lg:h-screen"
  >
    <div class="lg:mx-auto lg:max-w-7xl">
      <h3 class="h3m lg:my-12 lg:text-left lg:text-6xl">Skills</h3>
      <div id="skill" class="flex justify-around text-center lg:flex-wrap">
        <div class="transition-all hover:-translate-y-1">
          <img class="h-16 lg:h-52" src="images/html.webp" alt="html" />
          <p class="font-bold lg:text-2xl">HTML</p>
        </div>
        <div class="transition-all hover:-translate-y-1">
          <img class="h-16 lg:h-52" src="images/css.png" alt="css" />
          <p class="font-bold lg:text-2xl">CSS</p>
        </div>
        <div class="transition-all hover:-translate-y-1">
          <img class="h-16 lg:h-52" src="images/js.png" alt="javasctipt" />
          <p class="font-bold lg:text-2xl">JavaScript</p>
        </div>
        <div class="transition-all hover:-translate-y-1">
          <img class="h-16 lg:h-52" src="images/ts.png" alt="typeSctipt" />
          <p class="font-bold lg:text-2xl">TypeScript</p>
        </div>
      </div>
      <p
        class="text-center font-semibold transition-all hover:-translate-y-1 lg:my-12 lg:text-xl"
        id="skills-desc"
      ></p>
    </div>
    <div></div>
  </div>`}function rt(){return x`<div
    class="whitespace-pre-line p-5 lg:mx-auto lg:h-screen lg:max-w-7xl"
    id="other-skills"
  >
    <h3 class="h3m lg:my-12 lg:text-left lg:text-6xl">Other skills</h3>
    <div class="flex justify-around text-center">
      <div class="transition-all hover:-translate-y-1">
        <img class="h-16 lg:h-52" src="images/tailwind.png" alt="tailwind" />
        <p class="font-bold lg:text-2xl">Tailwind</p>
      </div>
      <div class="transition-all hover:-translate-y-1">
        <img class="h-16 lg:h-52" src="images/git.png" alt="git" />
        <p class="font-bold lg:text-2xl">Git</p>
      </div>
    </div>
    <p
      class="text-center font-semibold transition-all hover:-translate-y-1 lg:my-12 lg:text-xl"
      id="other-skills-desc"
    ></p>
    <div></div>
  </div>`}function ot(){return x`<div
    class="whitespace-pre-line bg-white p-5 text-blue-950 lg:h-screen"
    id="projects"
  >
    <div class="mx-auto lg:max-w-7xl">
      <h3 class="h3m lg:my-12 lg:text-left lg:text-6xl">Projects</h3>
    </div>
    <div></div>
  </div> `}function at(){return[st(),it(),nt(),lt(),rt(),ot()]}et(at(),app);const ct=new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("sslide-in")&&t.target.classList.add("sslide-in-1"),t.target.classList.contains("sfade-in")&&t.target.classList.add("sfade-in-1"),t.target.classList.contains("width-str")&&t.target.classList.add("swidth-str-1"))})}),ht=document.querySelectorAll("*");ht.forEach(r=>ct.observe(r));document.getElementById("soheyl");const dt=document.getElementById("soheyl-desc");document.getElementById("edu-desc");document.getElementById("edu-title");const gt=document.getElementById("skills-desc"),ut=document.getElementById("other-skills-desc"),j={soheyl:{description:"I'm passionate about creating beautiful and user-friendly web experiences. As a front-end developer, I enjoy turning ideas into interactive websites and applications. My journey started with HTML, CSS, and JavaScript, I continue learning and improving myself everyday to become a professional developer."},education:{description:"I am really attracted computers and computer programming, So despite studing english language in university, I study a lot about computers and programming; I want to start my career in this path and continue growing.",titles:["English Translation: since 1402"]},skills:{description:"I started Web development with HTML and CSS, Then I started learning javaScrip."},otherSkills:{description:"I Learned SaSS and Git and some other useful tools; Currently i am learning 3rd-party frameworks like React and Tailwind."}};dt.textContent=j.soheyl.description;gt.textContent=j.skills.description;ut.textContent=j.otherSkills.description;const pt=document.querySelector(".anim-nav-but"),L=document.querySelector(".anim-nav");pt.addEventListener("click",()=>{L.classList.add("anim-nav-1")});L.addEventListener("click",()=>{L.classList.remove("anim-nav-1")});
