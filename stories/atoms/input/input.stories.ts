import { define } from "@atomico/storybook";
import { Input } from "@karinmelissa/ds-input";
import { html } from "atomico";
import { withActions } from "@storybook/addon-actions/decorator";

const { args, argTypes } = define(Input, {
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number", "email", "url"],
    },
    placeholder: {
      control: "text",
    },
    label: {
      control: "text",
    },
    helperMessage: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    value: {
      control: "text",
    },
    state: {
      control: "select",
      options: ["default", "success", "warning", "info", "error"],
    },
    autocapitalize: {
      control: "text",
    },
  },
});

export default {
  title: "Atoms/Input",
  component: "Input",
  args,
  argTypes,
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
    actions: {
      handles: ["OnChange", "OnInput"],
    },
  },
  decorators: [withActions],
  tags: ["autodocs"],
};

const Template = ({
  slotIconStart,
  slotIconEnd,
  label,
  placeholder,
  helperMessage,
  type,
  value,
  disabled,
  state,
  ...props
}: typeof Input.props & {
  slotIconStart?: string;
  slotIconEnd?: string;
  label?: string;
  placeholder?: string;
  helperMessage?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  state?: string;
}) => html`<ds-input
  type=${type}
  label=${label}
  placeholder=${placeholder}
  helperMessage=${helperMessage}
  value=${value}
  state=${state}
  disabled=${disabled}
  ${{ ...props }}
>
  ${slotIconStart ? html`<span slot="start">${slotIconStart}</span>` : ""}
  ${slotIconEnd ? html`<span slot="end">${slotIconEnd}</span>` : ""}
</ds-input>`;

export const Playground = Template.bind({});
Playground.args = {
  type: "text",
  label: "Username",
  placeholder: "Enter your username",
  helperMessage: "This is a helper message",
  value: "",
  disabled: false,
  state: "default",
  slotIconStart: "",
  slotIconEnd: "",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  label: "Password",
  placeholder: "Enter your password",
  helperMessage: "Click the eye icon to show/hide",
};

export const Success = Template.bind({});
Success.args = {
  type: "text",
  label: "Success input",
  state: "success",
  placeholder: "This input is in success state",
};


export const Error = Template.bind({});
Error.args = {
  type: "text",
  label: "Error input",
  state: "error",
  placeholder: "This input is in error state",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  label: "Disabled input",
  placeholder: "Can't type here",
  disabled: true,
};
