import{c as g,j as t,a as i,w as h,d as x,h as b}from"./decorator-Cq3a69x5.js";import{c as y,u as c}from"./decorator-BnApuim8.js";import"./index-Cya4LmDE.js";import"./v4-CtRu48qb.js";import"./index-CfOrKyLd.js";function d({title:n,subtitle:o,onClose:l,open:a}){const r=c(),s=c();return a?t("host",{shadowDom:!0,children:i("div",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[i("div",{className:"modal__header",children:[t("h4",{id:"modal-title",children:n}),t("ds-button",{variant:"tertiary",class:"modal__close","aria-label":"Cerrar",onclick:l,icon:!0,children:t("svg",{slot:"end",xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 1024 1024",children:t("path",{d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})})})]}),i("div",{className:"modal__content",children:[o&&t("p",{className:"modal__subtitle",children:o}),t("slot",{ref:s})]}),t("div",{className:"modal__footer",children:t("slot",{ref:r,name:"footer"})})]})}):null}d.props={title:{type:String,reflect:!0,value:()=>"Modal Title"},subtitle:{type:String,reflect:!0,value:()=>""},open:{type:Boolean,reflect:!0,value:!0},onClose:Function};d.styles=[g`.modal {
            padding:20px;
            min-width: 260px;
            max-width: 600px;
            margin: auto;
            background: var(--ds-globals-color-neutrals-0);
            border-radius: 12px;
            display: flex;
            border: 1px solid var(--ds-globals-color-neutrals-30);
            flex-direction: column;
            font-family: var(--ds-globals-font-family-primary, inherit);
        }
        .modal__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            h4{ 
                font-weight: 700;
                font-size: 24px;
                margin: 0;
            }
        }
        .modal__subtitle{ 
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
        }
        .modal__close {
            background: none;
            border: none;
            font-size: 1.5rem;
            line-height: 1;
            cursor: pointer;
            margin-left: 1rem;
        }
        .modal__content {
            margin-bottom: 16px;
        }
        .modal__footer {
            height:80px;
            border-top: 1px solid #eee;
            text-align: right;
            display: flex;
            flex-direction: row;
            align-items: end;
        }
            
        ::slotted([slot="footer"]){
            display: flex;
            justify-content: flex-end;
            width: 100%;
            gap:8px;
        }`];const f=y(d);customElements.define("ds-modal",f);const{args:_,argTypes:v}=x(f,{argTypes:{state:{control:"select",options:["default","success","warning","info","error"]},title:{control:"text"},Subtitle:{control:"text"}}}),F={title:"Componentes/Modal",component:"Modal",args:_,argTypes:v,parameters:{docs:{canvas:{sourceState:"shown"}},layout:"centered",actions:{handles:["click"]}},decorators:[h]},w=({textContent:n,state:o,title:l,subtitle:a,slotFooter:r,...s})=>b`<ds-Modal 
title=${l}
subtitle=${a}
  state=${o}
  innerHTML="${n+r}"
  ${{...s}}></ds-Modal>`,e=w.bind({});e.args={textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",title:"Modal Title",subtitle:"Modal Subtitle",slotFooter:`<div slot="footer">
            <ds-button variant="secondary">Cancel</ds-button>
            <ds-button variant="primary">Save</ds-button>
        </div>`};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
  textContent,
  state,
  title,
  subtitle,
  slotFooter,
  ...props
}: typeof Modal.props & {
  textContent: string;
  state?: string;
  title?: string;
  subtitle?: string;
  slotFooter?: string;
}) => html\`<ds-Modal 
title=\${title}
subtitle=\${subtitle}
  state=\${state}
  innerHTML="\${textContent + slotFooter}"
  \${{
  ...props
}}></ds-Modal>\``,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const L=["Playground"];export{e as Playground,L as __namedExportsOrder,F as default};
