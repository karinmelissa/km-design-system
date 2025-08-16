import{c as j,a as f,j as l,w as Q,d as X,h as w}from"./decorator-Cq3a69x5.js";import{a as Y,b as A,i as q,e as F,P as ee,f as te,c as se,u as re}from"./decorator-BnApuim8.js";import"./v4-CtRu48qb.js";import"./index-CfOrKyLd.js";class W extends Array{constructor(s,n){let e=!0;const o=i=>{try{n(i,this,e)}finally{e=!1}};super(void 0,o,n),o(s)}}const ne=t=>{const s=Y();return A((n=new W(t,(e,o,i)=>{e=q(e)?e(o[0]):e,e!==o[0]&&(o[0]=e,i||s())}))=>n)},oe=t=>{const{current:s}=F();if(!(t in s))throw new ee(s,`For useProp("${t}"), the prop does not exist on the host.`,t);return A((n=new W(s[t],(e,o)=>{e=q(e)?e(s[t]):e,s[t]=e}))=>(n[0]=s[t],n))},I=(t,s={})=>{const n=F();return n[t]||(n[t]=(e=s.detail)=>te(n.current,{type:t,...s,detail:e})),n[t]},le=j`:host{--ds-input--font-family: var(--ds-globals-font-family-primary);--ds-input-text-color: var(--ds-globals-color-neutral-20);--ds-input-icon-color: var(--ds-globals-color-neutral-20);--ds-input--border-color: var(--ds-globals-color-neutral-30);--ds-input--border-width: var(--ds-globals-stroke-1, .063rem);--ds-input--border-style: solid;--ds-input--border-radius: var(--ds-globals-border-radius-50, .25rem);--ds-input-background-color: var(--ds-globals-color-neutral-70);--ds-input--font-size: var(--ds-globals-font-size-16, 1rem);--ds-input--font-weight: var(--ds-globals-font-weight-regular-40);--ds-input--font-color-placeholder: var(--ds-globals-color-neutral-30);--ds-input--font-color: var(--ds-globals-color-neutral-10);--ds-input--font-line-height: var( --ds-globals-font-line-height-24, 1.5rem );--ds-input--min-width: 320px;--ds-input--height: 48px;--ds-input--label-width: 294px;--ds-input--border-width-focus: var(--ds-globals-stroke-2, .125rem);--ds-input--border-color-focus: var(--ds-globals-color-neutral-10);--ds-input--border-color-hover: var(--ds-globals-color-neutral-10);--ds-input-background-color-hover: var(--ds-globals-color-neutral-70);--ds-input-width: 320px;--ds-input-border-color-disabled: var(--ds-globals-color-neutral-40);--ds-input-icon-color-disabled: var(--ds-globals-color-neutral-40);--ds-input-text-color-disabled: var(--ds-globals-color-neutral-30);--ds-input--font-color-state: var(--ds-globals-color-neutral-20);--ds-input--letter-spacing-8: var(--ds-globals-spacing-100, .5rem);--ds-input--gap: var(--ds-globals-spacing-100, .5rem);--ds-input--spacing-40: var(--ds-globals-spacing-500, 2.5rem);--ds-input--spacing-24: var(--ds-globals-spacing-300, 1.5rem);--ds-input--spacing-4: var(--ds-globals-spacing-50, .25rem);--ds-input--spacing-16: var(--ds-globals-spacing-200, 1rem);--ds-input--spacing-0: var(--ds-globals-spacing-0, 0rem);--ds-input--spacing-12: var(--ds-globals-spacing-150, .75rem);--ds-input--spacing-32: var(--ds-globals-spacing-400, 2rem)}:host([disabled]){cursor:not-allowed;pointer-events:visible;user-select:none}:host([state="error"]){--ds-input-text-color-error: var(--ds-globals-color-error-30);--ds-input--border-color-error: var(--ds-input--border-width) var(--ds-input--border-style) var(--ds-globals-color-error-30);--ds-input-border-color-focus-error: var(--ds-input--border-width-focus) var(--ds-input--border-style) var(--ds-input--border-color-error)}:host([state="success"]){--ds-input-text-color-success: var(--ds-globals-color-success-30);--ds-input--border-color-success: var(--ds-input--border-width) var(--ds-input--border-style) var(--ds-globals-color-success-30);--ds-input-border-color-focus-success: var(--ds-input--border-width-focus) var(--ds-input--border-style) var(--ds-input--border-color-success)}`,ae=j`:host(){font-size:16px;line-height:var(--ds-globals-font-line-height-24);font-family:var(--ds-globals-font-family-primary);text-align:left}.input-wrapper{box-sizing:border-box;position:relative;display:flex;width:var(--ds-input--min-width);height:var(--ds-input--height);flex-direction:column}.input-container{box-sizing:border-box;display:flex;align-items:center;width:100%;height:100%}.helper-container{box-sizing:border-box;width:var(--ds-input--min-width);padding:var(--ds-input--spacing-4) var(--ds-input--spacing-16);display:flex;justify-content:flex-start;align-items:center}.font-small-style{box-sizing:border-box;font-family:var(--ds-input--font-family);font-size:var(--ds-globals-font-size-12);line-height:var(--ds-globals-font-line-height-16, 1rem);font-weight:var(--ds-input--font-weight);color:var(--ds-input-text-color);text-align:left}input{height:100%;width:100%;box-sizing:border-box;outline:none;border:0;font-family:var(--ds-input--font-family);background-color:transparent;font-weight:var(--ds-input--font-weight);color:var(--ds-input--font-color);font-size:var(--ds-input--font-size);line-height:var(--ds-input--font-line-height);text-overflow:ellipsis}input::placeholder{color:var(--ds-input--font-color-placeholder)}input[type=password]:not(:placeholder-shown){padding:var(--ds-input--spacing-4) var(--ds-input--letter-spacing-8) var(--ds-input--spacing-0) var(--ds-input--spacing-16);gap:var(--ds-input--gap);letter-spacing:var(--ds-input--letter-spacing-8);color:var(--ds-input--font-color);font-family:var(--ds-input--font-family) "pass"}::slotted([slot="start"]),::slotted([slot="end"]),.icons-svg{font-size:var(--ds-input--spacing-24);width:max-content;height:max-content;color:var(--ds-input-icon-color);padding:0 4px 4px}::slotted([slot="start"]){right:unset;left:8px}:host([state="error"]) .font-small-style{color:var(--ds-input-text-color-error)}:host([state="success"]) .font-small-style{color:var(--ds-input-text-color-success)}:host([state="success"]) input::placeholder,:host([state="error"]) input::placeholder{color:var(--ds-input--font-color-state)}:host([disabled]) .font-small-style{color:var(--ds-input-text-color-disabled)}:host([disabled]) ::slotted([slot="start"]),:host([disabled]) ::slotted([slot="end"]),:host([disabled]) input::placeholder,.icons-svg{color:var(--ds-input-icon-color-disabled)}fieldset{padding:0 8px 8px;box-sizing:border-box;position:relative;display:flex;width:var(--ds-input--min-width);height:var(--ds-input--height);align-items:flex-start;border-radius:var(--ds-input--border-radius);border-width:var(--ds-input--border-width);border:1px var(--ds-input--border-style) var(--ds-input--border-color)}fieldset:hover{border:var(--ds-input--border-style) var(--ds-input--border-color-hover);border-width:var(--ds-input--border-width)}legend{max-width:var(--ds-input--label-width);box-sizing:border-box;pointer-events:none;padding:0 4px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host([disabled]) fieldset{border:var(--ds-input--border-style) var(--ds-input-border-color-disabled);border-width:var(--ds-input--border-width);cursor:not-allowed;pointer-events:visible;user-select:none}:host([state="error"]) fieldset:focus-within{border:var(--ds-input--border-style) var(--ds-input-text-color-error);border-width:var(--ds-input--border-width-focus)}:host([state="error"]) fieldset{border:var(--ds-input--border-color-error);color:var(--ds-input--font-color-state)}:host([state="success"]) fieldset:focus-within{border:var(--ds-input--border-style) var(--ds-input-text-color-success);border-width:var(--ds-input--border-width-focus)}:host([state="success"]) fieldset{border:var(--ds-input--border-color-success);color:var(--ds-input--font-color-state)}fieldset:focus-within{border:var(--ds-input--border-style) var(--ds-input--border-color-focus);border-width:var(--ds-input--border-width-focus);outline:none}div.icon-end{width:32px;height:35px}input{padding:1px 4px}`,ie={label:{type:String,reflect:!0,value:()=>"Label"},helperMessage:{type:String,reflect:!0,value:()=>"Text message"},inputId:{type:String,reflect:!0,value:()=>"input1"},type:{type:String,reflect:!0,value:()=>"text"},state:{type:String,reflect:!0,value:()=>"default"},disabled:{type:Boolean,reflect:!0,value:!1},placeholder:{type:String,reflect:!0,value:()=>"Placeholder"},value:{type:String,reflect:!0,value:()=>""},name:{type:String,reflect:!0},dirname:{type:String,reflect:!0},pattern:{type:String,reflect:!0},required:{type:Boolean,reflect:!0},readOnly:{type:Boolean,reflect:!0},autocomplete:{type:String,reflect:!0,value:()=>"on"},autofocus:{type:Boolean,reflect:!0},form:{type:HTMLFormElement,reflect:!0},maxLength:{type:Number,reflect:!0},minLength:{type:Number,reflect:!0},size:{type:Number,reflect:!0},autocapitalize:{type:String,reflect:!0,value:()=>"on"},inputMode:{type:String,reflect:!0},spellcheck:{type:Boolean,reflect:!0}};function $({type:t,placeholder:s,state:n,disabled:e,label:o,helperMessage:i,autocapitalize:m,...r}){const[x,v]=oe("value"),[y,R]=ne(!1),U=re(null),V=I("OnInput",{bubbles:!e,composed:!0}),G=I("OnChange",{bubbles:!e,composed:!0}),J=a=>{a.stopPropagation(),a.stopImmediatePropagation();const d=a.target.value;v(d),G(d)},K=a=>{a.stopPropagation(),a.stopImmediatePropagation();const d=a.target.value;v(d),V(d)};return f("host",{shadowDom:!0,ref:U,children:[l("div",{className:"input-wrapper",children:f("fieldset",{children:[l("legend",{className:e?"font-small-style disabled":"font-small-style",children:o}),f("div",{children:[" ",l("slot",{name:"start"})]}),l("input",{type:t==="password"?y?"text":"password":t,label:o,id:r.inputId,value:r.value,placeholder:s,disabled:e,name:r.name,dirName:r.dirname,pattern:r.pattern,required:r.required,readOnly:r.readOnly,autocomplete:r.autocomplete,autofocus:r.autofocus,form:r.form,maxLength:r.maxLength,minLength:r.minLength,autocapitalize:m,inputMode:r.inputMode,spellcheck:r.spellcheck,size:r.size,onchange:a=>J(a),oninput:a=>K(a)}),t==="password"?l("div",{className:"icon-end",onclick:()=>R(!y),children:y&&!e?l("svg",{width:"24",height:"24",viewBox:"0 0 22 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M11 2C14.79 2 18.17 4.13 19.82 7.5C18.17 10.87 14.79 13 11 13C7.21 13 3.83 10.87 2.18 7.5C3.83 4.13 7.21 2 11 2ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 5C12.38 5 13.5 6.12 13.5 7.5C13.5 8.88 12.38 10 11 10C9.62 10 8.5 8.88 8.5 7.5C8.5 6.12 9.62 5 11 5ZM11 3C8.52 3 6.5 5.02 6.5 7.5C6.5 9.98 8.52 12 11 12C13.48 12 15.5 9.98 15.5 7.5C15.5 5.02 13.48 3 11 3Z",fill:e?"#CECED9":"#49494D"})}):l("svg",{width:"24",height:"24",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M11 4C14.79 4 18.17 6.13 19.82 9.5C19.23 10.72 18.4 11.77 17.41 12.62L18.82 14.03C20.21 12.8 21.31 11.26 22 9.5C20.27 5.11 16 2 11 2C9.73 2 8.51 2.2 7.36 2.57L9.01 4.22C9.66 4.09 10.32 4 11 4ZM9.93 5.14L12 7.21C12.57 7.46 13.03 7.92 13.28 8.49L15.35 10.56C15.43 10.22 15.49 9.86 15.49 9.49C15.5 7.01 13.48 5 11 5C10.63 5 10.28 5.05 9.93 5.14ZM1.01 1.87L3.69 4.55C2.06 5.83 0.77 7.53 0 9.5C1.73 13.89 6 17 11 17C12.52 17 13.98 16.71 15.32 16.18L18.74 19.6L20.15 18.19L2.42 0.449997L1.01 1.87ZM8.51 9.37L11.12 11.98C11.08 11.99 11.04 12 11 12C9.62 12 8.5 10.88 8.5 9.5C8.5 9.45 8.51 9.42 8.51 9.37ZM5.11 5.97L6.86 7.72C6.63 8.27 6.5 8.87 6.5 9.5C6.5 11.98 8.52 14 11 14C11.63 14 12.23 13.87 12.77 13.64L13.75 14.62C12.87 14.86 11.95 15 11 15C7.21 15 3.83 12.87 2.18 9.5C2.88 8.07 3.9 6.89 5.11 5.97Z",fill:e?"#CECED9":"#49494D"})})}):l("div",{className:"icon-end",children:l("slot",{name:"end"})})]})}),l("div",{className:"helper-container",children:f("span",{className:"font-small-style",children:[" ",i," "]})})]})}$.props=ie;$.styles=[le,ae];const _=se($);customElements.define("uny-input",_);const{args:de,argTypes:pe}=X(_,{argTypes:{type:{control:"select",options:["text","password","number","email","url"]},placeholder:{control:"text"},label:{control:"text"},helperMessage:{control:"text"},disabled:{control:"boolean"},value:{control:"text"},state:{control:"select",options:["default","success","warning","info","error"]},autocapitalize:{control:"text"}}}),be={title:"Atomos/Input",component:"Input",args:de,argTypes:pe,parameters:{docs:{canvas:{sourceState:"shown"}},layout:"centered",actions:{handles:["OnChange","OnInput"]}},decorators:[Q],tags:["autodocs"]},b=({slotIconStart:t,slotIconEnd:s,label:n,placeholder:e,helperMessage:o,type:i,value:m,disabled:r,state:x,...v})=>w`<ds-input
  type=${i}
  label=${n}
  placeholder=${e}
  helperMessage=${o}
  value=${m}
  state=${x}
  ?disabled=${r}
  ${{...v}}
>
  ${t?w`<span slot="start">${t}</span>`:""}
  ${s?w`<span slot="end">${s}</span>`:""}
</ds-input>`,p=b.bind({});p.args={type:"text",label:"Username",placeholder:"Enter your username",helperMessage:"This is a helper message",value:"",disabled:!1,state:"default",slotIconStart:"",slotIconEnd:""};const c=b.bind({});c.args={type:"password",label:"Password",placeholder:"Enter your password",helperMessage:"Click the eye icon to show/hide"};const u=b.bind({});u.args={type:"number",label:"Age",placeholder:"Enter your age"};const g=b.bind({});g.args={type:"text",label:"Email",placeholder:"Enter your email",helperMessage:"We will never share your email."};const h=b.bind({});h.args={type:"text",label:"Disabled input",placeholder:"Can't type here",disabled:!0};var C,M,E;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  label,
  placeholder,
  helperMessage,
  type,
  value,
  disabled,
  state,
  ...props
}: typeof Input.props & {
  slotIconStart?: string;
  slotIconEnd?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  state?: string;
}) => html\`<ds-input
  type=\${type}
  label=\${label}
  placeholder=\${placeholder}
  helperMessage=\${helperMessage}
  value=\${value}
  state=\${state}
  ?disabled=\${disabled}
  \${{
  ...props
}}
>
  \${slotIconStart ? html\`<span slot="start">\${slotIconStart}</span>\` : ""}
  \${slotIconEnd ? html\`<span slot="end">\${slotIconEnd}</span>\` : ""}
</ds-input>\``,...(E=(M=p.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var S,z,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  label,
  placeholder,
  helperMessage,
  type,
  value,
  disabled,
  state,
  ...props
}: typeof Input.props & {
  slotIconStart?: string;
  slotIconEnd?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  state?: string;
}) => html\`<ds-input
  type=\${type}
  label=\${label}
  placeholder=\${placeholder}
  helperMessage=\${helperMessage}
  value=\${value}
  state=\${state}
  ?disabled=\${disabled}
  \${{
  ...props
}}
>
  \${slotIconStart ? html\`<span slot="start">\${slotIconStart}</span>\` : ""}
  \${slotIconEnd ? html\`<span slot="end">\${slotIconEnd}</span>\` : ""}
</ds-input>\``,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var P,N,k;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  label,
  placeholder,
  helperMessage,
  type,
  value,
  disabled,
  state,
  ...props
}: typeof Input.props & {
  slotIconStart?: string;
  slotIconEnd?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  state?: string;
}) => html\`<ds-input
  type=\${type}
  label=\${label}
  placeholder=\${placeholder}
  helperMessage=\${helperMessage}
  value=\${value}
  state=\${state}
  ?disabled=\${disabled}
  \${{
  ...props
}}
>
  \${slotIconStart ? html\`<span slot="start">\${slotIconStart}</span>\` : ""}
  \${slotIconEnd ? html\`<span slot="end">\${slotIconEnd}</span>\` : ""}
</ds-input>\``,...(k=(N=u.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var O,Z,D;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  label,
  placeholder,
  helperMessage,
  type,
  value,
  disabled,
  state,
  ...props
}: typeof Input.props & {
  slotIconStart?: string;
  slotIconEnd?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  state?: string;
}) => html\`<ds-input
  type=\${type}
  label=\${label}
  placeholder=\${placeholder}
  helperMessage=\${helperMessage}
  value=\${value}
  state=\${state}
  ?disabled=\${disabled}
  \${{
  ...props
}}
>
  \${slotIconStart ? html\`<span slot="start">\${slotIconStart}</span>\` : ""}
  \${slotIconEnd ? html\`<span slot="end">\${slotIconEnd}</span>\` : ""}
</ds-input>\``,...(D=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:D.source}}};var B,T,H;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  label,
  placeholder,
  helperMessage,
  type,
  value,
  disabled,
  state,
  ...props
}: typeof Input.props & {
  slotIconStart?: string;
  slotIconEnd?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  state?: string;
}) => html\`<ds-input
  type=\${type}
  label=\${label}
  placeholder=\${placeholder}
  helperMessage=\${helperMessage}
  value=\${value}
  state=\${state}
  ?disabled=\${disabled}
  \${{
  ...props
}}
>
  \${slotIconStart ? html\`<span slot="start">\${slotIconStart}</span>\` : ""}
  \${slotIconEnd ? html\`<span slot="end">\${slotIconEnd}</span>\` : ""}
</ds-input>\``,...(H=(T=h.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ve=["Playground","Password","Number","WithHelperMessage","Disabled"];export{h as Disabled,u as Number,c as Password,p as Playground,g as WithHelperMessage,ve as __namedExportsOrder,be as default};
