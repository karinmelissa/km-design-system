import { define } from "@atomico/storybook";
import { Checkbox } from "@karinmelissa/ds-checkbox";
import { html } from "atomico";
import { withActions } from "@storybook/addon-actions/decorator";

const { args, argTypes } = define(Checkbox, {
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
    label: { control: "text" },
    helperText: { control: "text" },
    labelPosition: { control: "select", options: ["left", "right"] },
    name: { control: "text" },
    value: { control: "text" },
  },
});

export default {
  title: "Atoms/Checkbox",
  component: "Checkbox",
  args,
  argTypes,
  parameters: {
    docs: { canvas: { sourceState: "shown" } },
    layout: "centered",
    actions: { handles: ["ChangeCheckbox"] },
  },
  decorators: [withActions],
  tags: ["autodocs"],
};

const Template = ({
  checked,
  disabled,
  indeterminate,
  label,
  helperText,
  labelPosition,
  name,
  value,
  ...props
}: typeof Checkbox.props) =>
  html`<ds-checkbox
    checked=${checked}
    disabled=${disabled}
    indeterminate=${indeterminate}
    label=${label}
    helper-text=${helperText}
    label-position=${labelPosition}
    name=${name}
    value=${value}
    ${{ ...props }}
  ></ds-checkbox>`;

export const Playground = Template.bind({});
Playground.args = {
  checked: false,
  disabled: false,
  indeterminate: false,
  label: "Accept terms and conditions",
  helperText: "You must accept to continue",
  labelPosition: "right",
  name: "terms",
  value: "accepted",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  label: "Unchecked checkbox",
  helperText: "",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Checked checkbox",
  helperText: "",
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
  label: "Indeterminate checkbox",
  helperText: "Some items are selected",
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
  label: "Disabled checkbox",
  helperText: "This option is unavailable",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  checked: true,
  disabled: true,
  label: "Disabled checked",
  helperText: "",
};

export const LabelLeft = Template.bind({});
LabelLeft.args = {
  checked: false,
  labelPosition: "left",
  label: "Label on the left",
  helperText: "Helper text below",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  checked: false,
  label: "Subscribe to newsletter",
  helperText: "We will send you weekly updates",
};
