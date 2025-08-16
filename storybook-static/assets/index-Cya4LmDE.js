import{c as h,u as n,F as e}from"./decorator-BnApuim8.js";import{a as b,j as t,c as k}from"./decorator-Cq3a69x5.js";const m=r=>{const o=`
    :host {
      --ds-button--border-width: 0px;
      --ds-button--border-color: transparent;
      --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
      --ds-button--border-color-focus: var(--ds-primary-color-70);
      --ds-button--background: transparent;
      --ds-button--background-hover: transparent;
      --ds-button--background-active: transparent;
      --ds-button--background-focus: transparent;
      --ds-button--background-disabled: transparent;
      --ds-button--color: var(--ds-primary-color-50);
      --ds-button--color-hover: var(--ds-primary-color-70);
      --ds-button--color-active: var(--ds-primary-color-40);
      --ds-button--color-focus: var(--ds-primary-color-60);
      --ds-button--color-disabled: var(--ds-globals-color-neutrals-50);
      --ds-button--text-decoration: none;
    }`,s={primary:`
      ${o}
      :host {
        --ds-button--border-width: 0px;
        --ds-button--background: var(--ds-primary-color-40);
        --ds-button--background-hover: var(--ds-primary-color-50);
        --ds-button--background-active: var(--ds-primary-color-60);
        --ds-button--background-focus: var(--ds-primary-color-50);
        --ds-button--background-disabled: var(--ds-globals-color-neutrals-10);
        --ds-button--color: var(--ds-globals-color-neutrals-0);
        --ds-button--color-hover: var(--ds-globals-color-neutrals-0);
        --ds-button--color-active: var(--ds-globals-color-neutrals-0);
        --ds-button--color-focus: var(--ds-globals-color-neutrals-0);
        --ds-button--color-disabled: var(--ds-globals-color-neutrals-60);
        --ds-button--border-color: transparent;
      }`,secondary:`
      ${o}
    :host {
      --ds-button--background: var(--ds-globals-color-neutrals-0);
      --ds-button--background-hover: var(--ds-globals-color-neutrals-0);
      --ds-button--background-active: var(--ds-globals-color-neutrals-10);
      --ds-button--background-focus: var(--ds-globals-color-neutrals-0);
      --ds-button--background-disabled: var(--ds-globals-color-neutrals-0);
      --ds-button--color: var(--ds-primary-color-40);
      --ds-button--color-hover: var(--ds-primary-color-60);
      --ds-button--color-active: var(--ds-primary-color-70);
      --ds-button--color-focus: var(--ds-primary-color-50);
      --ds-button--color-disabled: var(--ds-globals-color-neutrals-50);
      --ds-button--border-width: var(--ds-globals-stroke-2, 0.125rem);
      --ds-button--border-color: var(--ds-primary-color-40);
      --ds-button--border-color-hover: var(--ds-primary-color-60);
      --ds-button--border-color-active: var(--ds-primary-color-70);
      --ds-button--border-color-disabled: var(--ds-globals-color-neutrals-30); 
    }`,tertiary:`
      ${o}
      :host {
        --ds-button--border-width: 0px;
        --ds-button--background: transparent;
        --ds-button--background-hover: transparent;
        --ds-button--background-active: transparent;
        --ds-button--background-focus: transparent;
        --ds-button--background-disabled: transparent;
        --ds-button--color: var(--ds-primary-color-40);
        --ds-button--color-hover: var(--ds-primary-color-60);
        --ds-button--color-active: var(--ds-primary-color-70);
        --ds-button--color-focus: var(--ds-primary-color-70);
        --ds-button--color-disabled: var(--ds-globals-color-neutrals-50);
      }`};return s[r]?s[r]:o},y=(r,o)=>{const s=`
    :host {
      --ds-button--border-width: 0px;
      --ds-button--border-color: transparent;
      --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
      --ds-button--border-color-focus: var(--ds-globals-color-${o}-50);
      --ds-button--background: transparent;
      --ds-button--background-hover: transparent;
      --ds-button--background-active: transparent;
      --ds-button--background-focus: transparent;
      --ds-button--background-disabled: transparent;
      --ds-button--color: var(--ds-globals-color-${o}-30);
      --ds-button--color-hover: var(--ds-globals-color-${o}-20);
      --ds-button--color-active: var(--ds-globals-color-${o}-10);
      --ds-button--color-focus: var(--ds-globals-color-${o}-30);
      --ds-button--color-disabled: var(--ds-globals-color-neutrals-40);
      --ds-button--text-decoration: none;
    }`,a={primary:`
      ${s}
      :host {
        --ds-button--background: var(--ds-globals-color-${o}-30);
        --ds-button--background-hover: var(--ds-globals-color-${o}-40);
        --ds-button--background-active: var(--ds-globals-color-${o}-50);
        --ds-button--background-focus: var(--ds-globals-color-${o}-30);
        --ds-button--background-disabled: var(--ds-globals-color-neutrals-10);
        --ds-button--color: var(--ds-globals-color-neutrals-0);
        --ds-button--color-hover: var(--ds-globals-color-neutrals-10);
        --ds-button--color-active: var(--ds-globals-color-neutrals-0);
        --ds-button--color-focus: var(--ds-globals-color-neutrals-0);
        --ds-button--color-disabled: var(--ds-globals-color-neutrals-60);
      }`,secondary:`
      ${s}
      :host {
        --ds-button--background: var(--ds-globals-color-neutrals-0);
        --ds-button--background-hover: var(--ds-globals-color-neutrals-0);
        --ds-button--background-active: var(--ds-globals-color-neutrals-10);
        --ds-button--background-focus: var(--ds-globals-color-neutrals-0);
        --ds-button--background-disabled: var(--ds-globals-color-neutrals-0);
        --ds-button--color: var(--ds-globals-color-${o}-30);
        --ds-button--color-hover: var(--ds-globals-color-${o}-40);
        --ds-button--color-active: var(--ds-globals-color-${o}-50);
        --ds-button--color-focus: var(--ds-globals-color-${o}-30);
        --ds-button--color-disabled: var(--ds-globals-color-neutrals-40);
        --ds-button--border-width: var(--ds-globals-stroke-2, 0.125rem);
        --ds-button--border-color: var(--ds-globals-color-${o}-30);
        --ds-button--border-color-hover: var(--ds-globals-color-${o}-40);
        --ds-button--border-color-active: var(--ds-globals-color-${o}-50);
        --ds-button--border-color-disabled: var(--ds-globals-color-neutrals-40);
      }`,tertiary:`
      ${s}
      :host {
        --ds-button--background: transparent;
        --ds-button--background-hover: transparent;
        --ds-button--background-active: transparent;
        --ds-button--background-focus: transparent;
        --ds-button--background-disabled: transparent;
        --ds-button--color: var(--ds-globals-color-${o}-30);
        --ds-button--color-hover: var(--ds-globals-color-${o}-40);
        --ds-button--color-active: var(--ds-globals-color-${o}-50);
        --ds-button--color-focus: var(--ds-globals-color-${o}-30);
        --ds-button--color-disabled: var(--ds-globals-color-neutrals-40);
        --ds-button--text-decoration: underline;
      }`};return a[r]?a[r]:s},x=(r,o)=>[`:host {
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
            --border-color-disabled: var(--ds-button--border-color-disabled);
            --border-width-disabled: var(--ds-button--border-width);
            --padding-top: 0;
            --padding-bottom: 0;
            --padding-right: var(--spacing-s-3);
            --padding-left: var(--spacing-s-3);
            --min-height: 32px;
            --font-family: var(--ds-font-family);
        }`,o!="default"?y(r,o):m(r)];function c({variant:r,size:o,state:s,disabled:a,href:l,loading:d,icon:u}){const i=n(),v=n(),g=n(),p=l?"a":"button",f=a||d;return b("host",{shadowDom:!0,children:[t("style",{children:x(r,s)}),t(p,{className:`button-size__${o} ${d?"is-loading":""} ${u?"button--icon":""}`,disabled:l?void 0:f,href:l||void 0,"aria-busy":d,children:d?t("span",{className:"spinner"}):t(e,{children:u?b(e,{children:[t("slot",{ref:i,name:"start"}),t("slot",{ref:v,name:"end"})]}):b(e,{children:[t("slot",{ref:i,name:"start"}),t("span",{className:"label",children:t("slot",{ref:g})}),t("slot",{ref:v,name:"end"})]})})})]})}c.props={ariaLabel:String,name:String,variant:{type:String,reflect:!0,value:()=>"primary"},size:{type:String,reflect:!0,value:()=>"md"},state:{type:String,reflect:!0,value:()=>"default"},disabled:{type:Boolean,reflect:!0,value:!1},href:{type:String,reflect:!0,value:""},loading:{type:Boolean,reflect:!0,value:!1},icon:{type:Boolean,reflect:!0,value:!1}};c.styles=[k`button,
    a {
      background-color: var(--background);
      color: var(--color);
      border-radius: var(--border-radius, 32px);
      border-style: var(--border-style);
      border-width: var(--border-width);
      border-color: var(--border-color);
      text-align: center;
      vertical-align: middle;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      text-decoration: none;
      position: relative;
      font-family: var(--ds-globals-font-family-primary, inherit);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;

      .label {
        font: inherit;
      }
    }

    button:enabled,
    a:enabled {
      cursor: pointer;
    }

    button:active,
    a:active {
      color: var(--color-active);
      background: var(--background-active);
      border-color: var(--border-color-active);
    }

    button:focus-visible,
    a:focus-visible {
      color: var(--color-focus);
      background: var(--background-focus);
      border: var(--border-width-focus) solid var(--border-color-focus);
      outline: none;
    }

    button:disabled,
    a[aria-busy="true"] {
      background-color: var(--background-disabled);
      color: var(--color-disabled);
      border-color: var(--border-color-disabled);
      border-width: var(--border-width-disabled, 0px);
      cursor: not-allowed;
      pointer-events: none;
    }

    button:hover:enabled:not(:active),
    a:hover:not([aria-busy="true"]) {
      background-color: var(--background-hover);
      color: var(--color-hover);
      border-color: var(--border-color-hover);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
    display: block;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px ;
    height: 16px;
    flex-shrink: 0;
    color: inherit;
    fill: currentColor; 
    }
    .button-size__sm {
      padding: 8px 16px;
    }

    .button-size__md {
      padding: 12px 24px;
    }

    .button-size__lg {
      padding: 16px 32px;
    }

     .button--icon.button-size__sm {
     padding: 8px;
   }
   .button--icon.button-size__md {
     padding: 12px;
   }

   .button--icon.button-size__lg {
     padding: 16px;
   }

    .spinner {
      border: 2px solid var(--color-disabled, #ccc);
      border-top: 2px solid var(--color, #000);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`];const $=h(c);customElements.define("ds-button",$);export{$ as B};
