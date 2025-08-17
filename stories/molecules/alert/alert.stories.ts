import { define } from "@atomico/storybook";
import { Alert } from "@uikit/ds-alert";
import { html } from "atomico";
import { withActions } from "@storybook/addon-actions/decorator";

const { args, argTypes } = define(Alert, {
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "info", "warning"],
    },
    title: {
      control: "text",
    },
    show: {
      control: "boolean",
    },
    closeButton: {
      control: "boolean",
    },
    slotContent: {
      control: "text",
      description: "HTML for slot='content'",
    },
    slotContentButton: {
      control: "text",
      description: "HTML for slot='content-button'",
    },
  },
});

export default {
  title: "Molecules/Alert",
  component: "Alert",
  args,
  argTypes,
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
    actions: {
      handles: ["CloseAlert"],
    },
  },
  decorators: [withActions],
};

const Template = ({
  type,
  title,
  show,
  closeButton,
  slotContent,
  slotContentButton,
  ...props
}: typeof Alert.props & {
  slotContent?: string;
  slotContentButton?: string;
}) => html`<ds-alert
  type=${type}
  title=${title}
  show=${show}
  close-button=${closeButton}
  innerHTML="${slotContent || ""}${slotContentButton || ""}"
  ${{ ...props }}
></ds-alert>`;

export const Playground = Template.bind({});
Playground.args = {
  type: "success",
  title: "Alert Success",
  show: true,
  closeButton: true,
  slotContent: `<div slot="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>`,
  slotContentButton: `<div slot="content-button">
    <ds-button variant="secondary" size="sm">Botón 2</ds-button>
    <ds-button variant="primary" size="sm">Botón 1</ds-button>
  </div>`,
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  title: "Alert Error",
  show: true,
  closeButton: true,
  slotContent: `<div slot="content">
    This is an error alert with some description.
  </div>`,
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  title: "Alert Info",
  show: true,
  slotContent: `<div slot="content">
    Informational alert message.
  </div>`,
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  title: "Alert Warning",
  show: true,
  slotContent: `<div slot="content">
    Warning alert message.
  </div>`,
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  type: "success",
  title: "Alert with Buttons",
  show: true,
  slotContent: `<div slot="content">
    Alert with action buttons.
  </div>`,
  slotContentButton: `<div slot="content-button">
    <ds-button variant="ghost" size="sm">Botón 3</ds-button>
    <ds-button variant="secondary" size="sm">Botón 2</ds-button>
    <ds-button variant="primary" size="sm">Botón 1</ds-button>
  </div>`,
};