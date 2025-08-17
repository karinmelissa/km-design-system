import { define } from "@atomico/storybook";
import { Select } from "@uikit/ds-select";
import { html } from "atomico";
import { withActions } from "@storybook/addon-actions/decorator";

const { args, argTypes } = define(Select, {
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    disabled: { control: "boolean" },
    value: { control: "text" },
    state: {
      control: "select",
      options: ["default", "success", "warning", "info", "error"],
    },
    required: { control: "boolean" },
    isOpen: { control: "boolean" },
    isFilterable: { control: "boolean" },
    error: { control: "boolean" },
    options: { control: "object" },
    variant: {
      control: "select",
      options: ["string", "number"],
    },
  },
});

export default {
  title: "Atoms/Select",
  component: "Select",
  args: {
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper text",
    disabled: false,
    value: "",
    state: "default",
    required: false,
    isOpen: false,
    isFilterable: false,
    error: false,
    variant: "string",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
  argTypes,
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
    actions: {
      handles: ["ChangeSelect", "SearchSelect"],
    },
  },
  decorators: [withActions],
  tags: ["autodocs"],
};

const Template = ({
  label,
  placeholder,
  helperText,
  disabled,
  value,
  state,
  required,
  isOpen,
  isFilterable,
  error,
  variant,
  options,
  ...props
}: typeof Select.props & {
  label?: string;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  value?: string;
  state?: string;
  required?: boolean;
  isOpen?: boolean;
  isFilterable?: boolean;
  error?: boolean;
  variant?: string;
  options?: Array<{ label: string; value: string; selected?: boolean }>;
}) => html`<ds-select
  label=${label}
  placeholder=${placeholder}
  helper-text=${helperText}
  disabled=${disabled}
  value=${value}
  state=${state}
  required=${required}
  is-open=${isOpen}
  is-filterable=${isFilterable}
  error=${error}
  variant=${variant}
  options=${options}
  ${{ ...props }}
></ds-select>`;

export const Playground = Template.bind({});
Playground.args = {
  label: "Label",
  placeholder: "Placeholder",
  helperText: "Helper text",
  disabled: false,
  value: "",
  state: "default",
  required: false,
  isOpen: false,
  isFilterable: false,
  error: false,
  variant: "string",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
};

export const Filterable = Template.bind({});
Filterable.args = {
  isFilterable: true,
  label: "Filterable Select",
  options: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ],
};

export const NumberVariant = Template.bind({});
NumberVariant.args = {
  variant: "number",
  label: "Number Select",
  options: [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ],
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  label: "Error Select",
  helperText: "This is an error message",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Disabled Select",
  placeholder: "Can't select",
};