import{c as h,j as t,a as s,w as x,d as b,h as y}from"./decorator-DFD5xzps.js";import{c as _,u as c}from"./decorator-Ct-5yTx8.js";import"./v4-CtRu48qb.js";import"./index-CfOrKyLd.js";function i({title:n,subtitle:o,state:d,onClose:l,open:a}){const r=c(),g=c();return a?t("host",{shadowDom:!0,children:s("div",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[s("div",{className:"modal__header",children:[t("h4",{id:"modal-title",children:n}),t("ds-button",{variant:"tertiary",class:"modal__close","aria-label":"Cerrar",onclick:l,children:"×"})]}),s("div",{className:"modal__content",children:[o&&t("p",{className:"modal__subtitle",children:o}),t("slot",{ref:g})]}),t("div",{className:"modal__footer",children:t("slot",{ref:r,name:"footer"})})]})}):null}i.props={title:{type:String,reflect:!0,value:()=>"Modal Title"},subtitle:{type:String,reflect:!0,value:()=>""},state:{type:String,reflect:!0,value:()=>"default"},open:{type:Boolean,reflect:!0,value:!0},onClose:Function};i.styles=[h`.modal {
            padding:20px;
            min-width: 260px;
            max-width: 600px;
            margin: auto;
            background: var(--ds-globals-color-neutrals-0);
            border-radius: 12px;
            display: flex;
            border: 1px solid var(--ds-globals-color-neutrals-30);
            flex-direction: column;
            font-family: inherit;
        }
        .modal__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            h4{
                font-family: Figtree;
                font-weight: 700;
                font-size: 24px;
                margin: 0;
            }
        }
        .modal__subtitle{
           font-family: Figtree;
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
        }`];const f=_(i);customElements.define("ds-modal",f);const{args:v,argTypes:M}=b(f,{argTypes:{state:{control:"select",options:["default","success","warning","info","error"]},title:{control:"text"},Subtitle:{control:"text"}}}),T={title:"Componentes/Modal",component:"Modal",args:v,argTypes:M,parameters:{docs:{canvas:{sourceState:"shown"}},layout:"centered",actions:{handles:["click"]}},decorators:[x]},w=({textContent:n,state:o,title:d,subtitle:l,slotFooter:a,...r})=>y`<ds-Modal 
title=${d}
subtitle=${l}
  state=${o}
  innerHTML="${n+a}"
  ${{...r}}></ds-Modal>`,e=w.bind({});e.args={textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",title:"Modal Title",subtitle:"Modal Subtitle",slotFooter:`<div slot="footer">
            <ds-button variant="secondary">Cancel</ds-button>
            <ds-button variant="primary">Save</ds-button>
        </div>>`};var m,u,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}}></ds-Modal>\``,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const j=["Playground"];export{e as Playground,j as __namedExportsOrder,T as default};
