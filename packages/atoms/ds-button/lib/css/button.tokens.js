const getToken = (variant) => {
  const tokens = {
    primary: `:host {
            --ds-button--border-width: 0px;
            --ds-button--background: var(--ds-primary-color-60);
            --ds-button--background-hover: var(--ds-primary-color-90);
            --ds-button--background-active: var(--ds-primary-color-40);
            --ds-button--background-focus: var(--ds-primary-color-60);
            --ds-button--background-disabled: var(--ds-globals-color-neutrals-30);
            --ds-button--color: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--color-focus: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--color-active: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--color-hover: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--border-color-focus: var(--ds-primary-color-80);
            --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
            --ds-button--color-disabled: var(--ds-globals-color-neutrals-60);
            --ds-button--height-xl:52px;
            --ds-button--height-lg:48px;
            --ds-button--height-sm:32px;
          }`,
    secondary: `:host {
            --ds-button--background: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--background-hover: var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--background-active:  var(--ds-primary-color-30);
            --ds-button--background-focus:  var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--background-disabled:  var(--ds-globals-color-neutrals-0,#ffffff);
            --ds-button--color: var(--ds-primary-color-50);
            --ds-button--color-hover: var(--ds-primary-color-70);
            --ds-button--color-active: var(--ds-primary-color-80);
            --ds-button--color-focus: var(--ds-primary-color-70);
            --ds-button--color-disabled: var(--ds-globals-color-neutrals-50);
            --ds-button--border-width: var(--ds-globals-stroke-2, 0.125rem);
            --ds-button--border-color: var(--ds-globals-color-neutrals-30);
            --ds-button--border-color-hover: var(--ds-brand-color-);
            --ds-button--border-color-active: var(--ds-primary-color-60);
            --ds-button--border-color-focus: var(--ds-primary-color-80);
            --ds-button--border-color-disabled: var(--ds-globals-color-neutrals-30);
            --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
            --ds-button--height:40px; 
            --ds-button--height-xl:52px;
            --ds-button--height-lg:48px;
            --ds-button--height-sm:32px;
          }`,
    tertiary: `:host {
          --ds-button--border-width: 0px;
          --ds-button--text-decoration: underline;
          --ds-button--background: transparent;
          --ds-button--color: var(--ds-primary-color-60);
          --ds-button--color-hover: var(--ds-primary-color-80);
          --ds-button--color-active: var(--ds-primary-color-40);
          --ds-button--color-focus: var(--ds-primary-color-70);
          --ds-button--color-disabled: var(--ds-globals-color-neutrals-50,#87878A;);
          --ds-button--border-color-focus: var(--ds-primary-color-70);
          --ds-button--border-width-focus: var(--ds-globals-stroke-4, 0.25rem);
          --ds-button--height:40px;
          --ds-button--height-xl:52px;
          --ds-button--height-lg:48px;
          --ds-button--height-sm:32px;
              }`
  };
  return tokens[variant] ? tokens[variant] : {};
};

export { getToken };
