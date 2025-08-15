import{w as h,d as H,B as M,h as P}from"./decorator-DFD5xzps.js";import"./decorator-Ct-5yTx8.js";import"./v4-CtRu48qb.js";import"./index-CfOrKyLd.js";const{args:w,argTypes:_}=H(M,{argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["small","medium","large"]},state:{control:"select",options:["default","success","warning","info","error"]}}}),q={title:"Atomos/Button",component:"Button",args:w,argTypes:_,parameters:{docs:{canvas:{sourceState:"shown"}},layout:"centered",actions:{handles:["click"]}},decorators:[h]},o=({slotIconStart:y,slotIconEnd:x,textLabel:z,state:E,variant:f,size:B,...T})=>P`<ds-button 
  state=${E}
  variant=${f}
  size=${B}
  innerHTML="${y+" "+z+x}"
  ${{...T}}></ds-button>`,t=o.bind({});t.args={disabled:!1,slotIconStart:"",slotIconEnd:"",textLabel:"Button"};const n=o.bind({});n.args={disabled:!1,slotIconStart:"",slotIconEnd:"",textLabel:"Primary Button"};const s=o.bind({});s.args={disabled:!1,variant:"secondary",slotIconStart:"",slotIconEnd:"",textLabel:"Secondary Button"};const a=o.bind({});a.args={disabled:!1,variant:"tertiary",slotIconStart:"",slotIconEnd:"",textLabel:"Tertiary Button"};const r=o.bind({});r.args={disabled:!1,state:"success",slotIconStart:"",slotIconEnd:"",textLabel:"State Button"};var e,i,c;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var m,I,S;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(S=(I=a.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var $,L,v;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  ...props
}: typeof Button.props & {
  slotIconStart: string;
  slotIconEnd: string;
  textLabel: string;
  variant: string;
  size: string;
  state?: string;
}) => html\`<ds-button 
  state=\${state}
  variant=\${variant}
  size=\${size}
  innerHTML="\${slotIconStart + " " + textLabel + "" + slotIconEnd}"
  \${{
  ...props
}}></ds-button>\``,...(v=(L=r.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const C=["Playground","Primary","Secondary","Tertiary","Success"];export{t as Playground,n as Primary,s as Secondary,r as Success,a as Tertiary,C as __namedExportsOrder,q as default};
