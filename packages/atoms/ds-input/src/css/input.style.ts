import { css } from 'atomico';

export const InputHostStyle = css`
	:host {
		/* Font family */
		--ds-input--font-family: var(--ds-globals-font-family-primary);

		/* default label and helper color */
		--ds-input-text-color: var(--ds-globals-color-neutrals-70);

		/* default icon color */
		--ds-input-icon-color: var(--ds-globals-color-neutrals-70);

		/* default input style*/
		--ds-input--border-color: var(--ds-globals-color-neutrals-50);
		--ds-input--border-width: var(--ds-globals-stroke-1, 0.063rem);
		--ds-input--border-style: solid;
		--ds-input--border-radius: var(--ds-globals-border-radius-50, 0.25rem);
		--ds-input-background-color: var(--ds-globals-color-neutrals-70);
		--ds-input--font-size: var(--ds-globals-font-size-16, 1rem);
		--ds-input--font-weight: var(--ds-globals-font-weight-regular-40);
		--ds-input--font-color-placeholder: var(--ds-globals-color-neutrals-40);
		--ds-input--font-color: var(--ds-globals-color-neutrals-80);
		--ds-input--font-line-height: var(
			--ds-globals-font-line-height-24,
			1.5rem
		);
		--ds-input--min-width: 320px;
		--ds-input--height: 48px;
		--ds-input--label-width: 294px;

		/* Focus input style*/
		--ds-input--border-width-focus: var(--ds-globals-stroke-2, 0.125rem);
		--ds-input--border-color-focus: var(--ds-globals-color-neutrals-10);

		/* Hover */
		--ds-input--border-color-hover: var(--ds-globals-color-neutrals-10);
		--ds-input-background-color-hover: var(--ds-globals-color-neutrals-70);
		--ds-input-width: 320px;

		/* disabled input */
		--ds-input-border-color-disabled: var(--ds-globals-color-neutrals-40);
		--ds-input-icon-color-disabled: var(--ds-globals-color-neutrals-40);

		--ds-input-text-color-disabled: var(--ds-globals-color-neutrals-30);

		/* placeholder font color in success and error state*/
		--ds-input--font-color-state: var(--ds-globals-color-neutrals-20);

		/*Input other tokens*/
		--ds-input--letter-spacing-8: var(--ds-globals-spacing-100, 0.5rem);
		--ds-input--gap: var(--ds-globals-spacing-100, 0.5rem);
		--ds-input--spacing-40: var(--ds-globals-spacing-500, 2.5rem);
		--ds-input--spacing-24: var(--ds-globals-spacing-300, 1.5rem);
		--ds-input--spacing-4: var(--ds-globals-spacing-50, 0.25rem);
		--ds-input--spacing-16: var(--ds-globals-spacing-200, 1rem);
		--ds-input--spacing-0: var(--ds-globals-spacing-0, 0rem);
		--ds-input--spacing-12: var(--ds-globals-spacing-150, 0.75rem);
		--ds-input--spacing-32: var(--ds-globals-spacing-400, 2rem);
	}

	:host([disabled]) {
		cursor: not-allowed;
		pointer-events: visible;
		user-select: none;
	}

	:host([state='error']) {
		/*label y helper color */
		--ds-input-text-color-error: var(--ds-globals-color-error-30);

		/* default input style*/
		--ds-input--border-color-error: var(--ds-input--border-width)
			var(--ds-input--border-style) var(--ds-globals-color-error-30);
		--ds-input-border-color-focus-error: var(--ds-input--border-width-focus)
			var(--ds-input--border-style) var(--ds-input--border-color-error);
	}

	:host([state='success']) {
		/*label color */
		--ds-input-text-color-success: var(--ds-globals-color-success-40);

		/* default input style*/
		--ds-input--border-color-success: var(--ds-input--border-width)
			var(--ds-input--border-style) var(--ds-globals-color-success-30);
		--ds-input-border-color-focus-success: var(--ds-input--border-width-focus)
			var(--ds-input--border-style) var(--ds-input--border-color-success);
	}
`;

export const InputStyle = css`
	:host() {
		font-size: 16px;
		line-height: var(--ds-globals-font-line-height-24);
		font-family: var(--ds-globals-font-family-primary);
    text-align: left;
	}
	.input-wrapper {
		box-sizing: border-box;
		position: relative;
		display: flex;
		width: var(--ds-input--min-width);
		height: var(--ds-input--height);
		flex-direction: column;
	}

	.input-container {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.helper-container {
		box-sizing: border-box;
		width: var(--ds-input--min-width);
		padding: var(--ds-input--spacing-4) var(--ds-input--spacing-16);
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.font-small-style {
		box-sizing: border-box;
		font-family: var(--ds-input--font-family);
		font-size: var(--ds-globals-font-size-12);
		line-height: var(--ds-globals-font-line-height-16, 1rem);
		font-weight: var(--ds-input--font-weight);
		color: var(--ds-input-text-color);
    text-align: left;
	}

	input {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		outline: none;
		border: 0;
		font-family: var(--ds-input--font-family);
		background-color: transparent;
		font-weight: var(--ds-input--font-weight);
		color: var(--ds-input--font-color);
		font-size: var(--ds-input--font-size);
		line-height: var(--ds-input--font-line-height);
		text-overflow: ellipsis;
	}

	input::placeholder {
		color: var(--ds-input--font-color-placeholder);
	}

	input[type='password']:not(:placeholder-shown) {
		padding: var(--ds-input--spacing-4) var(--ds-input--letter-spacing-8)
			var(--ds-input--spacing-0) var(--ds-input--spacing-16);
		gap: var(--ds-input--gap);
		letter-spacing: var(--ds-input--letter-spacing-8);
		color: var(--ds-input--font-color);
		font-family: var(--ds-input--font-family) 'pass';
	}

	::slotted([slot='start']),
	::slotted([slot='end']),
	.icons-svg {
		padding: 4px;
		font-size: var(--ds-input--spacing-24);
		width: max-content;
		height: max-content;
		color: var(--ds-input-icon-color);
		padding: 4px;
		padding-top: 0px;
	}

	::slotted([slot='start']) {
		right: unset;
		left: 8px;
	}

	::slotted([slot='end']),
	.icons-svg {
		/* left: unset;
		right: 8px; */
	}

	:host([state='error']) .font-small-style {
		color: var(--ds-input-text-color-error);
	}

	:host([state='success']) .font-small-style {
		color: var(--ds-input-text-color-success);
	}

	:host([state='success']) input::placeholder,
	:host([state='error']) input::placeholder {
		color: var(--ds-input--font-color-state);
	}

	:host([disabled]) .font-small-style {
		color: var(--ds-input-text-color-disabled);
	}

	:host([disabled]) ::slotted([slot='start']),
	:host([disabled]) ::slotted([slot='end']),
	:host([disabled]) input::placeholder,
	.icons-svg {
		color: var(--ds-input-icon-color-disabled);
	}

	/*USANDO FIELDSET*/
	fieldset {
		padding: 0px 8px 8px;
		box-sizing: border-box;
		position: relative;
		display: flex;
		width: var(--ds-input--min-width);
		height: var(--ds-input--height);
		align-items: flex-start;
		align-items: flex-start;
		border-radius: var(--ds-input--border-radius);
		border-width: var(--ds-input--border-width);
		border: 1px var(--ds-input--border-style) var(--ds-input--border-color);
	}

	fieldset:hover {
		border: var(--ds-input--border-style) var(--ds-input--border-color-hover);
		border-width: var(--ds-input--border-width);
	}

	legend {
		max-width: var(--ds-input--label-width);
		box-sizing: border-box;
		pointer-events: none;
		padding: 0px 4px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	:host([disabled]) fieldset {
		border: var(--ds-input--border-style)
			var(--ds-input-border-color-disabled);
		border-width: var(--ds-input--border-width);
		cursor: not-allowed;
		pointer-events: visible;
		user-select: none;
	}

	:host([state='error']) fieldset:focus-within {
		border: var(--ds-input--border-style) var(--ds-input-text-color-error);
		border-width: var(--ds-input--border-width-focus);
	}

	:host([state='error']) fieldset {
		border: var(--ds-input--border-color-error);
		color: var(--ds-input--font-color-state);
	}

	:host([state='success']) fieldset:focus-within {
		border: var(--ds-input--border-style) var(--ds-input-text-color-success);
		border-width: var(--ds-input--border-width-focus);
	}

	:host([state='success']) fieldset {
		border: var(--ds-input--border-color-success);
		color: var(--ds-input--font-color-state);
	}

	fieldset:focus-within {
		border: var(--ds-input--border-style) var(--ds-input--border-color-focus);
		border-width: var(--ds-input--border-width-focus);
		outline: none;
	}
	div.icon-end {
		width: 32px;
		height: 35px;
	}
	input {
		padding: 1px 4px;
	}
`;
