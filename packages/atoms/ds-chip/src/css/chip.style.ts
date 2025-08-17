import { css } from 'atomico';

export const chipStyle = css`
	:host {
		/*  */
		/*  */
		--ds-chips-background: var(--ds-primary-color-30);
		--ds-chips-icon-color: var(--ds-primary-color-60);
		--ds-chips-label-color: var(--ds-primary-color-60);
		--ds-chips-skip-color: var(--ds-primary-color-60);
		/*  selected */
		--ds-chips-background-selected: var(--ds-primary-color-20);
		--ds-chips-icon-color-selected: var(--ds-primary-color-60);
		--ds-chips-label-color-selected: var(--ds-primary-color-60);
		--ds-chips-skip-color-selected: var(--ds-primary-color-60);
		/* hover */
		--ds-chips-background-hover: var(--ds-primary-color-40);
		--ds-chips-icon-color-hover: var(--ds-primary-color-20);
		--ds-chips-label-color-hover: var(--ds-primary-color-20);
		--ds-chips-skip-color-hover: var(--ds-primary-color-20);
		/* pressed */
		--ds-chips-background-pressed: var(--ds-primary-color-50);
		--ds-chips-icon-color-pressed: var(--ds-primary-color-20);
		--ds-chips-label-color-pressed: var(--ds-primary-color-20);
		--ds-chips-skip-color-pressed: var(--ds-primary-color-20);
		/* disabled */
		--ds-chips-background-disabled: var(--ds-globals-color-neutrals-40);
		--ds-chips-icon-color-disabled: var(--ds-globals-color-neutrals-70);
		--ds-chips-label-color-disabled: var(--ds-globals-color-neutrals-70);
		--ds-chips-skip-color-disabled: var(--ds-globals-color-neutrals-70);
		/*  */
		--ds-chips-label-font-family: var(--ds-globals-font-family-primary);
		--ds-chips-label-font-size: var(--ds-globals-font-size-14);
		--ds-chips-label-font-weight: var(--ds-globals-font-weight-semibold-600);
		--ds-chips-label-line-height: var(--ds-globals-font-line-height-24);
	}

	/* Caption/Semibold */

	.ds-chip-wrapper {
		display: inline-flex;
		padding: 4px 8px;
		justify-content: center;
		align-items: center;
		width: max-content;
		cursor: pointer;
		pointer-events: all;
		gap: 8px;
		user-select: none;
		border-radius: var(--ds-globals-border-radius-250, 20px);
		background: var(--ds-chips-background);
	}
	.ds-chip-x-button {
		/* Reset de márgenes y relleno */
		margin: 0;
		padding: 0;
		/* Reset de bordes */
		border: none;
		border-radius: 0;
		/* Reset de apariencia del botón */
		background-color: transparent;
		/* Reset de cursor */
		cursor: pointer;
		outline: none;
		display: flex;
		width: 16px;
		height: 16px;
		justify-content: center;
		align-items: center;
	}
	.ds-chip-x-button > span,
	.ds-chip-x-button > svg {
		color: var(--ds-chips-skip-color);
		fill: var(--ds-chips-skip-color);
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		align-content: center;
		flex-direction: row;
	}
	::slotted(*),
	.ds-chip-slot-label {
		color: var(--ds-chips-label-color);
		/* Caption/Semibold */
		pointer-events: none;
		display: block;
		/*  */

		font-family: var(--ds-chips-label-font-family);
		font-size: var(--ds-chips-label-font-size);
		font-style: normal;
		font-weight: var(--ds-chips-label-font-weight);
		line-height: var(--ds-chips-label-line-height);
		user-select: none;
		/* TOKENS POR COMPONENTE */
	}
	::slotted([slot='icon']) {
		width: 16px;
		height: 16px;

		line-height: normal;
		font-size: 1rem;
		display: flex;
		text-align: center;
		align-self: center;
		justify-content: center;
		flex-shrink: 0;
		color: var(--ds-chips-icon-color) !important;
		fill: var(--ds-chips-icon-color) !important;
	}
	/* selected */
	.ds-chip-wrapper.selected {
		background: var(--ds-chips-background-selected);
	}
	.ds-chip-wrapper.selected ::slotted(*),
	.ds-chip-wrapper.selected .ds-chip-slot-label {
		color: var(--ds-chips-label-color-selected);
	}
	.ds-chip-wrapper.selected ::slotted([slot='icon']) {
		color: var(--ds-chips-icon-color-selected) !important;
		fill: var(--ds-chips-icon-color-selected) !important;
	}
	.ds-chip-wrapper.selected .ds-chip-x-button > span {
		color: var(--ds-chips-skip-color-selected);
	}
	/* hover */
	.ds-chip-wrapper:hover {
		background: var(--ds-chips-background-hover);
	}

	.ds-chip-wrapper:hover ::slotted(*),
	.ds-chip-wrapper:hover .ds-chip-slot-label {
		color: var(--ds-chips-label-color-hover);
	}
	.ds-chip-wrapper:hover ::slotted([slot='icon']) {
		color: var(--ds-chips-icon-color-hover) !important;
		fill: var(--ds-chips-icon-color-hover) !important;
	}
	.ds-chip-wrapper:hover .ds-chip-x-button > svg {
    color: var(--ds-chips-skip-color-hover);
}
	/* pressed  */
	.ds-chip-wrapper:active {
		background: var(--ds-chips-background-pressed);
	}
	.ds-chip-wrapper:active ::slotted(*),
	.ds-chip-wrapper:active .ds-chip-slot-label {
		color: var(--ds-chips-label-color-pressed);
	}
	.ds-chip-wrapper:active ::slotted([slot='icon']) {
		color: var(--ds-chips-icon-color-pressed) !important;
		fill: var(--ds-chips-icon-color-pressed) !important;
	}
	.ds-chip-wrapper:active .ds-chip-x-button > span {
		color: var(--ds-chips-skip-color-pressed);
		fill: var(--ds-chips-skip-color-pressed);
	}

	/* focused */
	.ds-chip-wrapper:target,
	.ds-chip-wrapper:focus-visible {
		border-radius: 20px;
		outline: 4px solid var(--ds-chips-border-primary-focused);
		border: none;
	}

	/* disabled */
	:host([disabled]) {
		cursor: not-allowed;
	}
	.ds-chip-wrapper.disabled {
		pointer-events: none;
		background: var(--ds-chips-background-disabled);
		cursor: not-allowed;
	}
	.ds-chip-wrapper.disabled ::slotted(*),
	.ds-chip-wrapper:disabled .ds-chip-slot-label {
		color: var(--ds-chips-label-color-disabled);
	}
	.ds-chip-wrapper.disabled ::slotted([slot='icon']) {
		color: var(--ds-chips-icon-color-disabled) !important;
		fill: var(--ds-chips-icon-color-disabled) !important;
	}

	.ds-chip-wrapper.disabled .ds-chip-x-button  > svg {
    color: var(--ds-chips-skip-color-disabled);
}
`;
