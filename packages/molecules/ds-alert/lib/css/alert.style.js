import { css } from 'atomico';

const customProperties = (type) => {
  return [
    ` :host {
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        /* Font family */
        --ds-alert--font-family: var(--ds-globals-font-family-primary);
        --ds-alert--font-color:var(--ds-globals-color-neutral-20);

       /*Border default*/
        --ds-alert--border-width: 0px;

      /*Body styles*/
        --ds-alert--background-color:var(--ds-globals-color-${type}-20);
        --ds-icon--start-color: var(--ds-globals-color-${type}-30);
        --ds-icon--close-color: var(--ds-globals-color-neutral-20);

        /*title font styles*/
        --ds-alert--title-font-size: var(--ds-globals-font-size-16,16px);
        --ds-alert--title-font-weight: var(--ds-globals-font-weight-regular-400);
        --ds-alert--title-line-height: var(--ds-globals-font-line-height-24,24px);
        --ds-alert--title-font: var(--ds-alert--title-font-weight) var(--ds-alert--title-font-size)/var(--ds-alert--title-line-height) var(--ds-alert--font-family);

        /*content font styles*/
        --ds-alert--content-font-size: var(--ds-globals-font-size-14,14px);
        --ds-alert--content-font:var(--ds-alert--title-font-weight) var(--ds-alert--content-font-size)/var(--ds-alert--title-line-height) var(--ds-alert--font-family);

        /*Margin and padding*/
        --ds-alert--spacing-8:var(--ds-globals-spacing-100,0.5rem);
        --ds-alert--spacing-24:var(--ds-globals-spacing-300,1.5rem);
        --ds-alert--spacing-16:var(--ds-globals-spacing-200,1rem);
        --ds-alert--spacing-4:var(--ds-globals-spacing-50,0.25rem);
        --ds-alert--spacing-0:var(--ds-globals-spacing-0,0rem);
        --ds-alert--gap-element:var(--ds-alert--spacing-4);
  
        --ds-alert--min-width-desktop: 320px;
        --ds-alert--min-width-mobile: 280px; 
      }
    `
  ];
};
const alertStyle = css`.alert-wrapper{width:100%;display:flex;flex-direction:column;height:auto;background:var(--ds-alert--background-color);border-radius:var(--ds-alert--spacing-8);padding:var(--ds-alert--spacing-8) var(--ds-alert--spacing-16);box-sizing:border-box;margin-bottom:var(--ds-alert--spacing-4)}.header{width:100%;display:flex;justify-content:space-between;align-items:center}.title-wrapper{display:flex;align-items:center}.title-icon{display:flex;margin-right:var(--ds-alert--spacing-8)}.close-icon{display:flex;margin-left:var(--ds-alert--spacing-8);cursor:pointer}label{font:var(--ds-alert--title-font);color:var(--ds-alert--font-color)}::slotted(*){display:flex;text-decoration-line:unset!important;text-decoration:unset!important}::slotted([slot="content"]){font:var(--ds-alert--content-font);color:var(--ds-alert--font-color);padding-top:var(--ds-alert--spacing-8)}::slotted([slot="content-button"]){width:auto;display:flex;justify-content:space-around;float:right;padding-top:var(--ds-alert--spacing-8);gap:var(--ds-alert--spacing-8)}@media only screen and (width <= 576px){::slotted([slot="content-button"]){width:100%;display:flex;flex-direction:column-reverse}}`;

export { alertStyle, customProperties };
