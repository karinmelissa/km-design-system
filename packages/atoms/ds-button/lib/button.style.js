import { getToken } from './css/button.tokens.js';
import { getStateToken } from './css/button.state.tokens.js';

const customProperties = (variant, state) => {
  return [
    `:host {
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
        }`,
    state != "default" && variant != "tertiary" ? getStateToken(variant, state) : getToken(variant)
  ];
};

export { customProperties };
