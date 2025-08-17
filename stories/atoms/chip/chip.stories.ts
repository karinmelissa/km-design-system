import { define } from "@atomico/storybook";
import { Chip } from "@uikit/ds-chip";
import { html } from "atomico";
import { withActions } from "@storybook/addon-actions/decorator";

const { args, argTypes } = define(Chip, {
  argTypes: {
    selected: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for the chip",
    },
    slotIcon: {
      control: "text",
      description: "HTML for icon slot (e.g. <span class='mdi mdi-account'></span>)",
    },
    slotLabel: {
      control: "text",
      description: "Label text for the chip",
    },
  },
});

export default {
  title: "Atoms/Chip",
  component: "Chip",
  args,
  argTypes,
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
    layout: "centered",
    actions: {
      handles: ["ClickChip"],
    },
  },
  decorators: [withActions],
  tags: ["autodocs"],
};

const Template = ({
  selected,
  disabled,
  ariaLabel,
  slotIcon,
  slotLabel,
  ...props
}: typeof Chip.props & {
  slotIcon?: string;
  slotLabel?: string;
}) => html`<ds-chip
  selected=${selected}
  disabled=${disabled}
  aria-label=${ariaLabel}
  innerHTML="${slotIcon || ""} <span>${slotLabel || "Chip"}</span>"
  ${{ ...props }}
></ds-chip>`;

export const Playground = Template.bind({});
Playground.args = {
  selected: false,
  disabled: false,
  ariaLabel: "Example chip",
  slotIcon: "<span slot='icon' class='mdi mdi-account-circle-outline'></span>",
  slotLabel: "Chip example",
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  disabled: false,
  ariaLabel: "Selected chip",
  slotIcon: "<span slot='icon' class='mdi mdi-account-circle-outline'></span>",
  slotLabel: "Selected Chip",
};

export const Disabled = Template.bind({});
Disabled.args = {
  selected: false,
  disabled: true,
  ariaLabel: "Disabled chip",
  slotIcon: "<span slot='icon' class='mdi mdi-account-circle-outline'></span>",
  slotLabel: "Disabled Chip",
};

export const SelectedDisabled = Template.bind({});
SelectedDisabled.args = {
  selected: true,
  disabled: true,
  ariaLabel: "Selected and disabled chip",
  slotIcon: "<span slot='icon' class='mdi mdi-account-circle-outline'></span>",
  slotLabel: "Selected & Disabled Chip",
};