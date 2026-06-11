const CheckboxT = {
  checked: {
    type: Boolean,
    reflect: true,
    value: false
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false
  },
  indeterminate: {
    type: Boolean,
    reflect: true,
    value: false
  },
  label: {
    type: String,
    reflect: true,
    value: ""
  },
  helperText: {
    type: String,
    reflect: true,
    value: ""
  },
  labelPosition: {
    type: String,
    reflect: true,
    value: () => "right"
  },
  name: {
    type: String,
    reflect: true,
    value: ""
  },
  value: {
    type: String,
    reflect: true,
    value: ""
  }
};

export { CheckboxT };
