const AlertT = {
  title: {
    type: String,
    reflect: true,
    value: () => ""
  },
  show: {
    type: Boolean,
    reflect: true,
    value: true
  },
  type: {
    type: String,
    reflect: true,
    value: () => "success"
  },
  closeButton: {
    type: Boolean,
    reflect: true,
    value: false
  }
};

export { AlertT };
