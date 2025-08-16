const InputT = {
  label: {
    type: String,
    reflect: true,
    value: () => "Label"
  },
  helperMessage: {
    type: String,
    reflect: true,
    value: () => "Text message"
  },
  inputId: {
    type: String,
    reflect: true,
    value: () => "input1"
  },
  type: {
    type: String,
    reflect: true,
    value: () => "text"
  },
  state: {
    type: String,
    reflect: true,
    value: () => "default"
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false
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
  },
  name: {
    type: String,
    reflect: true
  },
  dirname: {
    type: String,
    reflect: true
  },
  pattern: {
    type: String,
    reflect: true
  },
  required: {
    type: Boolean,
    reflect: true
  },
  readOnly: {
    type: Boolean,
    reflect: true
  },
  autocomplete: {
    type: String,
    reflect: true,
    value: () => "on"
  },
  autofocus: {
    type: Boolean,
    reflect: true
  },
  form: {
    type: HTMLFormElement,
    reflect: true
  },
  maxLength: {
    type: Number,
    reflect: true
  },
  minLength: {
    type: Number,
    reflect: true
  },
  size: {
    type: Number,
    reflect: true
  },
  autocapitalize: {
    type: String,
    reflect: true,
    value: () => "on"
  },
  inputMode: {
    type: String,
    reflect: true
  },
  spellcheck: {
    type: Boolean,
    reflect: true
  }
};

export { InputT };
