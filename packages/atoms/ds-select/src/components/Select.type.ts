export const SelectT = {
	required: {
		type: Boolean,
		reflect: true,
		value: (): boolean => false
	},
	variant: {
		type: String,
		reflect: true,
		value: (): 'string' | 'number' => 'string'
	},
	ariaLabel: {
		type: String,
		reflect: true,
		value: 'select'
	},
	label: {
		type: String,
		reflect: true,
		value: (): string | null => null
	},

	helperText: {
		type: String || null,
		reflect: true,
		value: (): string | null => ''
	},
	isOpen: {
		type: Boolean,
		reflect: true,
		value: (): boolean => false
	},
	error: {
		type: Boolean,
		reflect: true,
		value: (): boolean => false
	},
	disabled: {
		type: Boolean,
		reflect: true,
		value: false
	},
	options: {
		type: Array,
		reflect: true,
		value: (): Array<{
			value: string;
			label: string;
			selected?: boolean;
		}> => []
	},
	isFilterable: {
		type: Boolean,
		reflect: true,
		value: (): boolean => false
	},
	placeholder: {
		type: String,
		reflect: true,
		value: (): string => 'Placeholder'
	},
	value: {
		type: String,
		reflect: true,
		value: (): string => ''
	}
};
