const getStateToken = (variant, state) => {
  const tokens = {
    primary: `:host {
            --ds-button--border-width: 0px;
            --ds-button--background: var(--ds-globals-color-${state}-300);
            --ds-button--background-hover: var(--ds-globals-color-${state}-200);
            --ds-button--background-active: var(--ds-globals-color-${state}-100);
            --ds-button--background-focus: var(--ds-globals-color-${state}-300);
            --ds-button--background-disabled: var(--ds-globals-color-neutral-400,#CECED90);
            --ds-button--color: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--border-color-focus: var(--ds-globals-color-${state}-100);
            --ds-button--color-disabled: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--color-focus: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--color-active: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--color-hover: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
        }`,
    secondary: `:host {
            --ds-button--background: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--background-hover: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--background-active: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--background-focus: var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--background-disabled:  var(--ds-globals-color-neutral-700,#ffffff);
            --ds-button--color: var(--ds-globals-color-${state}-300);
            --ds-button--color-disabled: var(--ds-globals-color-neutral-400,#CECED90);
            --ds-button--color-focus: var(--ds-globals-color-${state}-300);
            --ds-button--color-hover: var(--ds-globals-color-${state}-200);
            --ds-button--color-active: var(--ds-globals-color-${state}-100);
            --ds-button--border-color-focus: var(--ds-globals-color-${state}-100);
            --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
            --ds-button--border-width: var(--ds-globals-stroke-2, 0.125rem);
            --ds-button--border-color-active:  var(--ds-globals-color-${state}-100);
            --ds-button--border-color-disabled: var(--ds-globals-color-neutral-400,#CECED90);
        }`
  };
  return tokens[variant] ? tokens[variant] : {};
};

export { getStateToken };
