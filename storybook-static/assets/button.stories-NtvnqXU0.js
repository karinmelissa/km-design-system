import{w as G,d as J,h as K}from"./decorator-Cq3a69x5.js";import{B as N}from"./index-Cya4LmDE.js";import"./decorator-BnApuim8.js";import"./v4-CtRu48qb.js";import"./index-CfOrKyLd.js";const{args:Q,argTypes:R}=J(N,{argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["sm","md","lg"]},state:{control:"select",options:["default","success","warning","info","error"]},disabled:{control:"boolean"},loading:{control:"boolean"},href:{control:"text",description:"If provided, the button will render as an anchor tag."}}}),nn={title:"Atomos/Button",component:"Button",args:Q,argTypes:R,parameters:{docs:{canvas:{sourceState:"shown"}},layout:"centered",actions:{handles:["click"]}},decorators:[G],tags:["autodocs"]},n=({slotIconStart:_,slotIconEnd:A,textLabel:W,state:k,variant:O,size:j,disabled:q,loading:C,href:D,...F})=>K`<ds-button 
  state=${k}
  variant=${O}
  size=${j}
  disabled=${q}
  loading=${C}
  href=${D}
  innerHTML="${_+" "+W+A}"
  ${{...F}}></ds-button>`,t=n.bind({});t.args={disabled:!1,slotIconStart:"",slotIconEnd:"",textLabel:"Button"};const s=n.bind({});s.args={disabled:!1,slotIconStart:"",slotIconEnd:"",textLabel:"Primary Button"};const a=n.bind({});a.args={disabled:!1,variant:"secondary",slotIconStart:"",slotIconEnd:"",textLabel:"Secondary Button"};const e=n.bind({});e.args={disabled:!1,variant:"tertiary",slotIconStart:"",slotIconEnd:"",textLabel:"Tertiary Button"};const o=n.bind({});o.args={disabled:!1,state:"success",slotIconStart:"",slotIconEnd:"",textLabel:"State Button"};const r=n.bind({});r.args={disabled:!1,state:"error",slotIconStart:"",slotIconEnd:"",textLabel:"State Button"};const i=n.bind({});i.args={disabled:!1,state:"info",slotIconStart:"",slotIconEnd:"",textLabel:"State Button"};const l=n.bind({});l.args={disabled:!1,state:"warning",slotIconStart:"",slotIconEnd:"",textLabel:"State Button"};var d,c,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
  diabled?: boolean;
  loading?: boolean;
  href?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  disabled=\${disabled}
  loading=\${loading}
  href=\${href}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var g,p,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
  diabled?: boolean;
  loading?: boolean;
  href?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  disabled=\${disabled}
  loading=\${loading}
  href=\${href}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var $,I,f;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
  diabled?: boolean;
  loading?: boolean;
  href?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  disabled=\${disabled}
  loading=\${loading}
  href=\${href}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(f=(I=a.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var m,S,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
  diabled?: boolean;
  loading?: boolean;
  href?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  disabled=\${disabled}
  loading=\${loading}
  href=\${href}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(h=(S=e.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var L,v,x;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
  diabled?: boolean;
  loading?: boolean;
  href?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  disabled=\${disabled}
  loading=\${loading}
  href=\${href}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var E,z,y;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
  diabled?: boolean;
  loading?: boolean;
  href?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  disabled=\${disabled}
  loading=\${loading}
  href=\${href}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(y=(z=r.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var B,T,H;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
  diabled?: boolean;
  loading?: boolean;
  href?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  disabled=\${disabled}
  loading=\${loading}
  href=\${href}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(H=(T=i.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var M,w,P;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
  diabled?: boolean;
  loading?: boolean;
  href?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  disabled=\${disabled}
  loading=\${loading}
  href=\${href}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(P=(w=l.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const tn=["Playground","Primary","Secondary","Tertiary","Success","Error","Info","Warning"];export{r as Error,i as Info,t as Playground,s as Primary,a as Secondary,o as Success,e as Tertiary,l as Warning,tn as __namedExportsOrder,nn as default};
