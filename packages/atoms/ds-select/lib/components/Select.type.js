const SelectT = {
  required: {
    type: Boolean,
    reflect: true,
    value: () => false
  },
  variant: {
    type: String,
    reflect: true,
    value: () => "string"
  },
  ariaLabel: {
    type: String,
    reflect: true,
    value: "select"
  },
  label: {
    type: String,
    reflect: true,
    value: () => null
  },
  helperText: {
    type: String || null,
    reflect: true,
    value: () => ""
  },
  isOpen: {
    type: Boolean,
    reflect: true,
    value: () => false
  },
  error: {
    type: Boolean,
    reflect: true,
    value: () => false
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false
  },
  options: {
    type: Array,
    reflect: true,
    value: () => []
  },
  isFilterable: {
    type: Boolean,
    reflect: true,
    value: () => false
  },
  placeholder: {
    type: String,
    reflect: true,
    value: () => "Placeholder"
  },
  value: {
    type: String,
    reflect: true,
    value: () => ""
  }
};

export { SelectT };
