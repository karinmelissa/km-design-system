export const ChipPropsType = {
	ariaLabel: {
		type: String,
		reflect: true,
		value: 'chip',
	},
	selected: {
		type: Boolean,
		reflect: true,
		value: (): boolean => false,
	},
	disabled: {
		type: Boolean,
		reflect: true,
		value: false,
	},
};
