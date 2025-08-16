import{j as e,M as o}from"./index-B9F6s2QH.js";import{useMDXComponents as n}from"./index-BuqIpguO.js";import"./iframe-CPWy_cg2.js";import"./index-BeP9Fpg5.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(i){const t={br:"br",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Introduction/UI Kit Design System"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(t.h1,{id:"design-system-demo",children:"Design System Demo"}),e.jsxs(t.p,{children:["Welcome to the ",e.jsx(t.strong,{children:"UI Kit Design System"})," demo.",e.jsx(t.br,{}),`
`,"This library is built entirely with ",e.jsx(t.strong,{children:"custom Web Components"}),", allowing us to create a truly tailored look and feel for any website or digital product."]}),e.jsx(t.p,{children:"By using Web Components, we ensure that each element is:"}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Encapsulated and reusable across projects"}),`
`,e.jsx(t.li,{children:"Framework-agnostic, so it works in any tech stack"}),`
`,e.jsx(t.li,{children:"Easy to theme for multiple brands"}),`
`]}),e.jsx("hr",{})]}),e.jsxs("div",{className:"sb-section",children:[e.jsxs("div",{className:"sb-section-item",children:[e.jsx("img",{src:"UI-Cover.png",alt:"UI Kit Cover"}),e.jsx("hr",{})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsxs(t.p,{children:["Our design system supports ",e.jsx(t.strong,{children:"multi-brand theming"}),".",e.jsx(t.br,{}),`
`,"Each brand has its own ",e.jsx(t.strong,{children:"dedicated color palette"})," and visual identity, implemented through separate theme stylesheets."]}),e.jsxs(t.p,{children:["You can switch between themes directly in Storybook using our ",e.jsx(t.strong,{children:"theme selector"}),", which dynamically applies the correct stylesheet for the selected brand."]}),e.jsx("img",{className:"sb-themes-image",src:"themes-storybook.png",alt:"Theme selector in Storybook"})]})]})]}),`
`,e.jsx("style",{children:`
    .sb-container {
      margin-bottom: 48px;
    }
    .sb-themes-image {
      width: 50%;
      margin: auto;
    }
    .sb-section {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
    img {
      object-fit: cover;
    }
    .sb-section-title {
      margin-bottom: 32px;
    }
    .sb-section a:not(h1 a, h2 a, h3 a) {
      font-size: 14px;
    }
    .sb-section-item, .sb-grid-item {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .sb-section-item-heading {
      padding-top: 20px !important;
      padding-bottom: 5px !important;
      margin: 0 !important;
    }
    .sb-section-item-paragraph {
      margin: 0;
      padding-bottom: 10px;
    }
    .sb-chevron {
      margin-left: 5px;
    }
    .sb-features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 32px 20px;
    }
    .sb-socials {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    .sb-socials p {
      margin-bottom: 10px;
    }
    .sb-explore-image {
      max-height: 32px;
      align-self: flex-start;
    }
    .sb-addon {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      background-color: #EEF3F8;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      background: #EEF3F8;
      height: 180px;
      margin-bottom: 48px;
      overflow: hidden;
    }
    .sb-addon-text {
      padding-left: 48px;
      max-width: 240px;
    }
    .sb-addon-text h4 {
      padding-top: 0px;
    }
    .sb-addon-img {
      position: absolute;
      left: 345px;
      top: 0;
      height: 100%;
      width: 200%;
      overflow: hidden;
    }
    .sb-addon-img img {
      width: 650px;
      transform: rotate(-15deg);
      margin-left: 40px;
      margin-top: -72px;
      box-shadow: 0 0 1px rgba(255, 255, 255, 0);
      backface-visibility: hidden;
    }
    @media screen and (max-width: 800px) {
      .sb-addon-img {
        left: 300px;
      }
    }
    @media screen and (max-width: 600px) {
      .sb-section {
        flex-direction: column;
      }
      .sb-features-grid {
        grid-template-columns: repeat(1, 1fr);
      }
      .sb-socials {
        grid-template-columns: repeat(2, 1fr);
      }
      .sb-addon {
        height: 280px;
        align-items: flex-start;
        padding-top: 32px;
        overflow: hidden;
      }
      .sb-addon-text {
        padding-left: 24px;
      }
      .sb-addon-img {
        right: 0;
        left: 0;
        top: 130px;
        bottom: 0;
        overflow: hidden;
        height: auto;
        width: 124%;
      }
      .sb-addon-img img {
        width: 1200px;
        transform: rotate(-12deg);
        margin-left: 0;
        margin-top: 48px;
        margin-bottom: -40px;
        margin-left: -24px;
      }
    }
  `})]})}function c(i={}){const{wrapper:t}={...n(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as default};
