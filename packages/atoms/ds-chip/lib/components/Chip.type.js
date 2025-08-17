const ChipPropsType = {
  ariaLabel: {
    type: String,
    reflect: true,
    value: "chip"
  },
  selected: {
    type: Boolean,
    reflect: true,
    value: () => false
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false
  }
};

export { ChipPropsType };
