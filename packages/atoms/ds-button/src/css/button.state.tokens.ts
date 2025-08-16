export const getStateToken = (variant: string, state: string) => {
  const baseTokens = `
    :host {
      --ds-button--border-width: 0px;
      --ds-button--border-color: transparent;
      --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
      --ds-button--border-color-focus: var(--ds-globals-color-${state}-50);
      --ds-button--background: transparent;
      --ds-button--background-hover: transparent;
      --ds-button--background-active: transparent;
      --ds-button--background-focus: transparent;
      --ds-button--background-disabled: transparent;
      --ds-button--color: var(--ds-globals-color-${state}-30);
      --ds-button--color-hover: var(--ds-globals-color-${state}-20);
      --ds-button--color-active: var(--ds-globals-color-${state}-10);
      --ds-button--color-focus: var(--ds-globals-color-${state}-30);
      --ds-button--color-disabled: var(--ds-globals-color-neutrals-40);
      --ds-button--text-decoration: none;
    }`;

  const tokens = {
    primary: `
      ${baseTokens}
      :host {
        --ds-button--background: var(--ds-globals-color-${state}-30);
        --ds-button--background-hover: var(--ds-globals-color-${state}-40);
        --ds-button--background-active: var(--ds-globals-color-${state}-50);
        --ds-button--background-focus: var(--ds-globals-color-${state}-30);
        --ds-button--background-disabled: var(--ds-globals-color-neutrals-10);
        --ds-button--color: var(--ds-globals-color-neutrals-0);
        --ds-button--color-hover: var(--ds-globals-color-neutrals-10);
        --ds-button--color-active: var(--ds-globals-color-neutrals-0);
        --ds-button--color-focus: var(--ds-globals-color-neutrals-0);
        --ds-button--color-disabled: var(--ds-globals-color-neutrals-60);
      }`,
    secondary: `
      ${baseTokens}
      :host {
        --ds-button--background: var(--ds-globals-color-neutrals-0);
        --ds-button--background-hover: var(--ds-globals-color-neutrals-0);
        --ds-button--background-active: var(--ds-globals-color-neutrals-10);
        --ds-button--background-focus: var(--ds-globals-color-neutrals-0);
        --ds-button--background-disabled: var(--ds-globals-color-neutrals-0);
        --ds-button--color: var(--ds-globals-color-${state}-30);
        --ds-button--color-hover: var(--ds-globals-color-${state}-40);
        --ds-button--color-active: var(--ds-globals-color-${state}-50);
        --ds-button--color-focus: var(--ds-globals-color-${state}-30);
        --ds-button--color-disabled: var(--ds-globals-color-neutrals-40);
        --ds-button--border-width: var(--ds-globals-stroke-2, 0.125rem);
        --ds-button--border-color: var(--ds-globals-color-${state}-30);
        --ds-button--border-color-hover: var(--ds-globals-color-${state}-40);
        --ds-button--border-color-active: var(--ds-globals-color-${state}-50);
        --ds-button--border-color-disabled: var(--ds-globals-color-neutrals-40);
      }`,
    tertiary: `
      ${baseTokens}
      :host {
        --ds-button--background: transparent;
        --ds-button--background-hover: transparent;
        --ds-button--background-active: transparent;
        --ds-button--background-focus: transparent;
        --ds-button--background-disabled: transparent;
        --ds-button--color: var(--ds-globals-color-${state}-30);
        --ds-button--color-hover: var(--ds-globals-color-${state}-40);
        --ds-button--color-active: var(--ds-globals-color-${state}-50);
        --ds-button--color-focus: var(--ds-globals-color-${state}-30);
        --ds-button--color-disabled: var(--ds-globals-color-neutrals-40);
        --ds-button--text-decoration: underline;
      }`,
  };

  return tokens[variant] ? tokens[variant] : baseTokens;
};
