import { css } from 'atomico';

const checkboxStyle = css`
	:host {
		/* box - default */
		--ds-checkbox--box-background: var(--ds-globals-color-neutrals-0);
		--ds-checkbox--box-border-color: var(--ds-globals-color-neutrals-50);
		--ds-checkbox--box-border-width: var(--ds-globals-stroke-2, 2px);
		--ds-checkbox--box-border-radius: var(--ds-globals-border-radius-50, 4px);
		--ds-checkbox--box-size: 20px;
		/* box - checked */
		--ds-checkbox--box-background-checked: var(--ds-primary-color-40);
		--ds-checkbox--box-border-color-checked: var(--ds-primary-color-40);
		/* box - indeterminate */
		--ds-checkbox--box-background-indeterminate: var(--ds-primary-color-40);
		--ds-checkbox--box-border-color-indeterminate: var(--ds-primary-color-40);
		/* box - hover */
		--ds-checkbox--box-border-color-hover: var(--ds-primary-color-50);
		--ds-checkbox--box-background-hover: var(--ds-globals-color-neutrals-0);
		/* box - active/pressed */
		--ds-checkbox--box-background-active: var(--ds-primary-color-10);
		--ds-checkbox--box-border-color-active: var(--ds-primary-color-60);
		/* box - checked + hover */
		--ds-checkbox--box-background-checked-hover: var(--ds-primary-color-50);
		--ds-checkbox--box-border-color-checked-hover: var(--ds-primary-color-50);
		/* box - checked + active */
		--ds-checkbox--box-background-checked-active: var(--ds-primary-color-60);
		--ds-checkbox--box-border-color-checked-active: var(--ds-primary-color-60);
		/* box - disabled */
		--ds-checkbox--box-background-disabled: var(--ds-globals-color-neutrals-20);
		--ds-checkbox--box-border-color-disabled: var(--ds-globals-color-neutrals-40);
		/* box - checked + disabled */
		--ds-checkbox--box-background-checked-disabled: var(--ds-globals-color-neutrals-40);
		--ds-checkbox--box-border-color-checked-disabled: var(--ds-globals-color-neutrals-40);
		/* icon */
		--ds-checkbox--icon-color: var(--ds-globals-color-neutrals-0);
		--ds-checkbox--icon-color-disabled: var(--ds-globals-color-neutrals-60);
		/* label */
		--ds-checkbox--label-color: var(--ds-globals-color-neutrals-80);
		--ds-checkbox--label-color-disabled: var(--ds-globals-color-neutrals-50);
		--ds-checkbox--label-font-family: var(--ds-globals-font-family-primary);
		--ds-checkbox--label-font-size: var(--ds-globals-font-size-14);
		--ds-checkbox--label-font-weight: var(--ds-globals-font-weight-regular-400);
		--ds-checkbox--label-line-height: var(--ds-globals-font-line-height-20);
		/* helper text */
		--ds-checkbox--helper-color: var(--ds-globals-color-neutrals-60);
		--ds-checkbox--helper-color-disabled: var(--ds-globals-color-neutrals-40);
		--ds-checkbox--helper-font-size: var(--ds-globals-font-size-12);
		--ds-checkbox--helper-line-height: var(--ds-globals-font-line-height-16);
		/* focus ring */
		--ds-checkbox--focus-ring-color: var(--ds-primary-color-70);
		--ds-checkbox--focus-ring-width: var(--ds-globals-stroke-4, 4px);
		/* gap */
		--ds-checkbox--gap: 8px;

		display: inline-flex;
		cursor: pointer;
	}

	:host([disabled]) {
		cursor: not-allowed;
		pointer-events: none;
	}

	.ds-checkbox-wrapper {
		display: inline-flex;
		flex-direction: row;
		align-items: flex-start;
		gap: var(--ds-checkbox--gap);
		user-select: none;
		cursor: pointer;
	}

	.ds-checkbox-wrapper.label-left {
		flex-direction: row-reverse;
	}

	/* ── box ── */
	.ds-checkbox-box {
		position: relative;
		flex-shrink: 0;
		width: var(--ds-checkbox--box-size);
		height: var(--ds-checkbox--box-size);
		border-radius: var(--ds-checkbox--box-border-radius);
		border: var(--ds-checkbox--box-border-width) solid var(--ds-checkbox--box-border-color);
		background: var(--ds-checkbox--box-background);
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		transition: background 0.15s ease, border-color 0.15s ease;
	}

	/* hover */
	.ds-checkbox-wrapper:hover .ds-checkbox-box {
		background: var(--ds-checkbox--box-background-hover);
		border-color: var(--ds-checkbox--box-border-color-hover);
	}

	/* active/pressed */
	.ds-checkbox-wrapper:active .ds-checkbox-box {
		background: var(--ds-checkbox--box-background-active);
		border-color: var(--ds-checkbox--box-border-color-active);
	}

	/* checked */
	:host([checked]) .ds-checkbox-box {
		background: var(--ds-checkbox--box-background-checked);
		border-color: var(--ds-checkbox--box-border-color-checked);
	}

	/* checked + hover */
	:host([checked]) .ds-checkbox-wrapper:hover .ds-checkbox-box {
		background: var(--ds-checkbox--box-background-checked-hover);
		border-color: var(--ds-checkbox--box-border-color-checked-hover);
	}

	/* checked + active */
	:host([checked]) .ds-checkbox-wrapper:active .ds-checkbox-box {
		background: var(--ds-checkbox--box-background-checked-active);
		border-color: var(--ds-checkbox--box-border-color-checked-active);
	}

	/* indeterminate */
	:host([indeterminate]) .ds-checkbox-box {
		background: var(--ds-checkbox--box-background-indeterminate);
		border-color: var(--ds-checkbox--box-border-color-indeterminate);
	}

	/* disabled */
	:host([disabled]) .ds-checkbox-box {
		background: var(--ds-checkbox--box-background-disabled);
		border-color: var(--ds-checkbox--box-border-color-disabled);
	}

	/* checked + disabled */
	:host([checked][disabled]) .ds-checkbox-box,
	:host([indeterminate][disabled]) .ds-checkbox-box {
		background: var(--ds-checkbox--box-background-checked-disabled);
		border-color: var(--ds-checkbox--box-border-color-checked-disabled);
	}

	/* ── icons inside box ── */
	.ds-checkbox-icon {
		display: none;
		color: var(--ds-checkbox--icon-color);
		width: 14px;
		height: 14px;
		flex-shrink: 0;
	}

	:host([checked]) .ds-checkbox-icon--check {
		display: block;
	}

	:host([indeterminate]) .ds-checkbox-icon--indeterminate {
		display: block;
	}

	:host([disabled]) .ds-checkbox-icon {
		color: var(--ds-checkbox--icon-color-disabled);
	}

	/* ── focus ring ── */
	.ds-checkbox-wrapper:focus-visible .ds-checkbox-box,
	.ds-checkbox-box:focus-visible {
		outline: var(--ds-checkbox--focus-ring-width) solid var(--ds-checkbox--focus-ring-color);
		outline-offset: 2px;
	}

	/* ── text area ── */
	.ds-checkbox-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.ds-checkbox-label {
		display: block;
		color: var(--ds-checkbox--label-color);
		font-family: var(--ds-checkbox--label-font-family);
		font-size: var(--ds-checkbox--label-font-size);
		font-weight: var(--ds-checkbox--label-font-weight);
		line-height: var(--ds-checkbox--label-line-height);
	}

	:host([disabled]) .ds-checkbox-label {
		color: var(--ds-checkbox--label-color-disabled);
	}

	.ds-checkbox-helper {
		display: block;
		color: var(--ds-checkbox--helper-color);
		font-family: var(--ds-checkbox--label-font-family);
		font-size: var(--ds-checkbox--helper-font-size);
		line-height: var(--ds-checkbox--helper-line-height);
	}

	:host([disabled]) .ds-checkbox-helper {
		color: var(--ds-checkbox--helper-color-disabled);
	}

	/* hide empty text container */
	.ds-checkbox-text:empty {
		display: none;
	}
`;

export { checkboxStyle };
