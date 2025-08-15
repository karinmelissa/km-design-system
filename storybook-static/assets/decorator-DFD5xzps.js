import{o as Q,h as L,c as Z,u as k}from"./decorator-Ct-5yTx8.js";import{v as oo}from"./v4-CtRu48qb.js";const S={global:{},alias:{[String.name]:"text",[Number.name]:"number",[Boolean.name]:"boolean",[Object.name]:"object",[Array.name]:"object",default:"text"},match:[{regExp:/^color/,control:"color",and:String},{regExp:/\w+Color/,control:"color",and:String},{regExp:/^date/,control:"date"},{regExp:/\w+Date/,control:"date"}]},j={};function to(r,...o){const t=(r.raw||r).reduce((s,l,e)=>s+l+(o[e]||""),"");return j[t]=j[t]||ro(t)}function ro(r){if(Q.sheet){const o=new CSSStyleSheet;return o.replaceSync(r),o}else{const o=document.createElement("style");return o.textContent=r,o}}const eo=0,m=1,O=2,x=3,C=4,_=5,w=6,N=0,so=2,z=3,H=4,K=_,no=w,W=(r,o,t,s)=>{let l;o[0]=0;for(let e=1;e<o.length;e++){const d=o[e++],c=o[e]?(o[0]|=d?1:2,t[o[e++]]):o[++e];d===z?s[0]=c:d===H?s[1]=Object.assign(s[1]||{},c):d===K?(s[1]=s[1]||{})[o[++e]]=c:d===no?s[1][o[++e]]+=c+"":d?(l=r.apply(c,W(r,c,t,["",null])),s.push(l),c[0]?o[0]|=2:(o[e-2]=N,o[e]=l)):s.push(c)}return s},lo=function(r){let o=m,t="",s="",l=[0],e,d;const c=n=>{o===m&&(n||(t=t.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(N,n,t):o===x&&(n||t)?(l.push(z,n,t),o=O):o===O&&t==="..."&&n?l.push(H,n,0):o===O&&t&&!n?l.push(K,0,!0,t):o>=_&&((t||!n&&o===_)&&(l.push(o,0,t,d),o=w),n&&(l.push(o,n,0,d),o=w)),t=""};for(let n=0;n<r.length;n++){n&&(o===m&&c(),c(n));for(let a=0;a<r[n].length;a++)e=r[n][a],o===m?e==="<"?(c(),l=[l],o=x):t+=e:o===C?t==="--"&&e===">"?(o=m,t=""):t=e+t[0]:s?e===s?s="":t+=e:e==='"'||e==="'"?s=e:e===">"?(c(),o=m):o&&(e==="="?(o=_,d=t,t=""):e==="/"&&(o<_||r[n][a+1]===">")?(c(),o===x&&(l=l[0]),o=l,(l=l[0]).push(so,0,o),o=eo):e===" "||e==="	"||e===`
`||e==="\r"?(c(),o=O):t+=e),o===x&&t==="!--"&&(o=C,l=l[0])}return c(),l},ao=new Map;function Mo(r){let o=ao;return o=W(L,o.get(r)||(o.set(r,o=lo(r)),o),arguments,[]),o.length>1?o:o[0]}const I=(r,o)=>S.match.find(({regExp:t,and:s})=>t.test(r)?s?o===s:!0:!1);function $o(r,o){const t={...o,argTypes:{},args:{...o==null?void 0:o.args}},{props:s}=r,l=Object.entries(s).map(([e,d])=>[e,typeof d=="object"&&d!=null?d:{type:d}]).reduce((e,[d,c])=>{const{type:n,value:a}=c,b=I(d,n),f=(b==null?void 0:b.control)||S.alias[(n==null?void 0:n.name)||"default"],v=typeof a=="function"&&n!==Function?a():n===Boolean&&!a?!1:a;return{...e,[d]:{control:f,defaultValue:v,type:n}}},{});return t.argTypes=[S.global,o==null?void 0:o.argTypes].reduce((e,d)=>{if(!d)return e;let c=Object.entries(d);return d===S.global&&(c=c.filter(([n])=>n in s)),c.reduce((n,[a,b])=>{var f,v,g,i,h,E,D,R;if(b===!1)delete n[a];else{const u=n[a],T=/on(.+)/.test(a)&&!l[a]?"Events":a.startsWith("--")?"CSS custom properties":void 0,{category:G=((f=u==null?void 0:u.table)==null?void 0:f.category)||T,defaultValue:F=(g=(v=u==null?void 0:u.table)==null?void 0:v.defaultValue)==null?void 0:g.summary,...p}=b;let{description:q=u==null?void 0:u.description}=b,{control:X=(u==null?void 0:u.control)||((i=I(a))==null?void 0:i.control)}=b||{};const J={category:G,type:{...(h=u==null?void 0:u.table)==null?void 0:h.type,...(E=p==null?void 0:p.table)==null?void 0:E.type},defaultValue:{summary:F,...(D=u==null?void 0:u.table)==null?void 0:D.defaultValue,...(R=p==null?void 0:p.table)==null?void 0:R.defaultValue}};return{...n,[a]:{...u,...p,description:q,control:X,table:J}}}return n},e)},t.argTypes),Object.entries(l).forEach(([e,{control:d,defaultValue:c,type:n}])=>{var f,v,g,i,h,E;if(((f=t.argTypes)==null?void 0:f[e])===!1)return;const a=(v=t.argTypes)==null?void 0:v[e];t.argTypes[e]={...t.argTypes[e],control:(a==null?void 0:a.control)||d,type:(a==null?void 0:a.type)||n,table:{...a==null?void 0:a.table,type:{...(g=a==null?void 0:a.table)==null?void 0:g.type,summary:(n==null?void 0:n.name)||"Any"},defaultValue:{...(i=a==null?void 0:a.table)==null?void 0:i.defaultValue,summary:((E=(h=a==null?void 0:a.table)==null?void 0:h.defaultValue)==null?void 0:E.summary)||c}}};const b=e in t.args?t.args[e]:c;b!=null&&(t.args[e]=b)}),t}const y=(r,o,t)=>(o==null?o={key:t}:o.key=t,L(r,o)),M=y,co=r=>{const o={primary:`:host {
            --ds-button--border-width: 0px;
            --ds-button--background: var(--ds-primary-color-60);
            --ds-button--background-hover: var(--ds-primary-color-90);
            --ds-button--background-active: var(--ds-primary-color-40);
            --ds-button--background-focus: var(--ds-primary-color-60);
            --ds-button--background-disabled: var(--ds-globals-color-neutrals-30);
            --ds-button--color: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--color-focus: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--color-active: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--color-hover: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--border-color-focus: var(--ds-primary-color-80);
            --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
            --ds-button--color-disabled: var(--ds-globals-color-neutrals-60);
            --ds-button--height-xl:52px;
            --ds-button--height-lg:48px;
            --ds-button--height-sm:32px;
          }`,secondary:`:host {
            --ds-button--background: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--background-hover: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--background-active:  var(--ds-primary-color-30);
            --ds-button--background-focus:  var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--background-disabled:  var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--color: var(--ds-primary-color-50);
            --ds-button--color-hover: var(--ds-primary-color-70);
            --ds-button--color-active: var(--ds-primary-color-80);
            --ds-button--color-focus: var(--ds-primary-color-70);
            --ds-button--color-disabled: var(--ds-globals-color-neutrals-50);
            --ds-button--border-width: var(--ds-globals-stroke-2, 0.125rem);
            --ds-button--border-color: var(--ds-globals-color-neutrals-30);
            --ds-button--border-color-hover: var(--ds-brand-color-);
            --ds-button--border-color-active: var(--ds-primary-color-60);
            --ds-button--border-color-focus: var(--ds-primary-color-80);
            --ds-button--border-color-disabled: var(--ds-globals-color-neutrals-30);
            --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
            --ds-button--height:40px; 
            --ds-button--height-xl:52px;
            --ds-button--height-lg:48px;
            --ds-button--height-sm:32px;
          }`,tertiary:`:host {
          --ds-button--border-width: 0px;
          --ds-button--text-decoration: underline;
          --ds-button--background: transparent;
          --ds-button--color: var(--ds-primary-color-60);
          --ds-button--color-hover: var(--ds-primary-color-80);
          --ds-button--color-active: var(--ds-primary-color-40);
          --ds-button--color-focus: var(--ds-primary-color-70);
          --ds-button--color-disabled: var(--ds-globals-color-neutrals-50,#87878A;);
          --ds-button--border-color-focus: var(--ds-primary-color-70);
          --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
          --ds-button--height:40px;
          --ds-button--height-xl:52px;
          --ds-button--height-lg:48px;
          --ds-button--height-sm:32px;
              }`};return o[r]?o[r]:{}},uo=(r,o)=>{const t={primary:`:host {
            --ds-button--border-width: 0px;
            --ds-button--background: var(--ds-globals-color-${o}-300);
            --ds-button--background-hover: var(--ds-globals-color-${o}-200);
            --ds-button--background-active: var(--ds-globals-color-${o}-100);
            --ds-button--background-focus: var(--ds-globals-color-${o}-300);
            --ds-button--background-disabled: var(--ds-globals-color-neutral-400,#CECED90);
            --ds-button--color: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--border-color-focus: var(--ds-globals-color-${o}-100);
            --ds-button--color-disabled: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--color-focus: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--color-active: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--color-hover: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
        }`,secondary:`:host {
            --ds-button--background: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--background-hover: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--background-active: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--background-focus: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--background-disabled:  var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--color: var(--ds-globals-color-${o}-300);
            --ds-button--color-disabled: var(--ds-globals-color-neutral-400,#CECED90);
            --ds-button--color-focus: var(--ds-globals-color-${o}-300);
            --ds-button--color-hover: var(--ds-globals-color-${o}-200);
            --ds-button--color-active: var(--ds-globals-color-${o}-100);
            --ds-button--border-color-focus: var(--ds-globals-color-${o}-100);
            --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
            --ds-button--border-width: var(--ds-globals-stroke-2, 0.125rem);
            --ds-button--border-color-active:  var(--ds-globals-color-${o}-100);
            --ds-button--border-color-disabled: var(--ds-globals-color-neutral-400,#CECED90);
        }`};return t[r]?t[r]:{}},bo=(r,o)=>[`:host {
            --background : var(--ds-button--background);
            --background-hover : var(--ds-button--background-hover);
            --background-active : var(--ds-button--background-active);
            --background-focus : var(--ds-button--background-focus);
            --background-disabled : var(--ds-button--background-disabled);
            --color: var(--ds-button--color);
            --color-hover: var(--ds-button--color-hover);
            --color-active: var(--ds-button--color-active);
            --color-focus: var(--ds-button--color-focus);
            --color-disabled: var(--ds-button--color-disabled);
            --border-radius: var(--ds-globals-border-radius-400);
            --border-style:solid;
            --border-width: var(--ds-button--border-width);
            --border-color: var(--ds-button--border-color);
            --border-width-focus: var(--ds-button--border-width-focus);
            --border-color-focus: var(--ds-button--border-color-focus);
            --padding-top: 0;
            --padding-bottom: 0;
            --padding-right: var(--spacing-s-3);
            --padding-left: var(--spacing-s-3);
            --min-height: 32px;
            --font-family: var(--ds-font-family);
        }`,o!="default"&&r!="tertiary"?uo(r,o):co(r)];function P({variant:r,size:o,state:t,disabled:s}){const l=k(),e=k(),d=k();return k(),M("host",{shadowDom:!0,children:[y("style",{children:bo(r,t)}),M("button",{className:`button-size__${o}`,disabled:s,children:[y("slot",{ref:l,name:"start"}),y("span",{className:"label",children:y("slot",{ref:d})}),y("slot",{ref:e,name:"end"})]})]})}P.props={ariaLabel:String,name:String,variant:{type:String,reflect:!0,value:()=>"primary"},size:{type:String,reflect:!0,value:()=>"medium"},state:{type:String,reflect:!0,value:()=>"default"},disabled:{type:Boolean,reflect:!0,value:!1},expand:{type:String,reflect:!0,value:"block"}};P.styles=[to`/*
    * Prefixed by https://autoprefixer.github.io
    * PostCSS: v8.3.6,
    * Autoprefixer: v10.3.1
    * Browsers: last 4 version
    */

    button {
      background-color: var(--background);
      color: var(--color);
      border-radius: var(--border-radius,32px);
      border-style: var(--border-style);
      border-width: var(--border-width);
      border-color: var(--border-color);
      text-align: center; 
      vertical-align: middle;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      gap: 0.75rem;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      box-sizing:border-box;

      .label{
      line-height: 24px;
      font-size: 16px;
      font-weight: 500;
      }
    }

    button:enabled {
      cursor: pointer;
    }
    button:active {
      color: var(--color-active);
      background: var(--background-active);
      border-color: var(--border-color-active);
    }
    button:focus-visible {
      color: var(--color-focus);
      background: var(--background-focus);
      border: var(--border-width-focus) solid var(--border-color-focus);
      outline: none;
    }
    button:disabled {
      background-color: var(--background-disabled);
      color: var(--color-disabled);
      cursor: not-allowed;
      border: none;
    }
    button:hover:enabled:not(:active)  {
      background-color: var(--background-hover);
      color: var(--color-hover);
      border-color: var(--border-color-hover);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([variant="text"]) button:disabled {
      --background-disabled: transparent;
    }
    :host([variant="text"]) button:hover(:not, :disabled) {
      background-color: var(--background-hover);
      color: var(--color-hover);
      opacity: 0.5;
    }
    :host([expand="full"]) button {
      width: 100%;
    }

    :host([variant="outlined"]) button,
    :host([variant="text"]) button {
      --background: "transparent";
      --color: var(--ds-color-text);
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
      display: block;
    }

    .button-size__small{
      padding-top: 8px;
      padding-right: 16px;
      padding-bottom: 8px;
      padding-left: 16px;
    }

    .button-size__medium{
      padding-top: 12px;
      padding-right: 24px;
      padding-bottom: 12px;
      padding-left: 24px;
    }

    .button-size__large{
      padding-top: 16px;
      padding-right: 32px;
      padding-bottom: 16px;
      padding-left:32px;
    }`];const io=Z(P);customElements.define("ds-button",io);const{addons:fo}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:vo}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:$}=__STORYBOOK_MODULE_GLOBAL__;var go="actions",ho="storybook/actions",po=`${ho}/action-event`,A={depth:10,clearOnStoryChange:!0,limit:50},Y=(r,o)=>{let t=Object.getPrototypeOf(r);return!t||o(t)?t:Y(t,o)},mo=r=>!!(typeof r=="object"&&r&&Y(r,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof r.persist=="function"),yo=r=>{if(mo(r)){let o=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),s=t==null?void 0:t.value;return typeof s=="object"&&(s==null?void 0:s.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(s.constructor.prototype)}),o}return r},Eo=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?oo():Date.now().toString(36)+Math.random().toString(36).substring(2);function _o(r,o={}){let t={...A,...o},s=function(...l){var f,v;if(o.implicit){let g=(f="__STORYBOOK_PREVIEW__"in $?$.__STORYBOOK_PREVIEW__:void 0)==null?void 0:f.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(g){let i=!((v=globalThis==null?void 0:globalThis.FEATURES)!=null&&v.disallowImplicitActionsInRenderV8),h=new vo({phase:g.phase,name:r,deprecated:i});if(i)console.warn(h);else throw h}}let e=fo.getChannel(),d=Eo(),c=5,n=l.map(yo),a=l.length>1?n:n[0],b={id:d,count:0,data:{name:r,args:a},options:{...t,maxDepth:c+(t.depth||3),allowFunction:t.allowFunction||!1}};e.emit(po,b)};return s.isAction=!0,s.implicit=o.implicit,s}var ko=(...r)=>{let o=A,t=r;t.length===1&&Array.isArray(t[0])&&([t]=t),t.length!==1&&typeof t[t.length-1]!="string"&&(o={...A,...t.pop()});let s=t[0];(t.length!==1||typeof s=="string")&&(s={},t.forEach(e=>{s[e]=e}));let l={};return Object.keys(s).forEach(e=>{l[e]=_o(s[e],o)}),l};const{makeDecorator:Oo,useEffect:xo}=__STORYBOOK_MODULE_PREVIEW_API__,{global:So}=__STORYBOOK_MODULE_GLOBAL__;var{document:B,Element:V}=So,wo=/^(\S+)\s*(.*)$/,Ao=V!=null&&!V.prototype.matches,Po=Ao?"msMatchesSelector":"matches",U=(r,o)=>{if(r[Po](o))return!0;let t=r.parentElement;return t?U(t,o):!1},Do=(r,...o)=>{let t=r(...o);return Object.entries(t).map(([s,l])=>{let[e,d,c]=s.match(wo)||[];return{eventName:d,handler:n=>{(!c||U(n.target,c))&&l(n)}}})},Ro=(r,...o)=>{let t=B&&B.getElementById("storybook-root");xo(()=>{if(t!=null){let s=Do(r,...o);return s.forEach(({eventName:l,handler:e})=>t.addEventListener(l,e)),()=>s.forEach(({eventName:l,handler:e})=>t.removeEventListener(l,e))}},[t,r,o])},Bo=Oo({name:"withActions",parameterName:go,skipIfNoParametersOrOptions:!0,wrapper:(r,o,{parameters:t})=>(t!=null&&t.handles&&Ro(ko,...t.handles),r(o))});export{io as B,M as a,to as c,$o as d,Mo as h,y as j,Bo as w};
