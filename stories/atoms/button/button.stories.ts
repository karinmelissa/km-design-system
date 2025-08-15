import { define } from "@atomico/storybook";
import { Button } from '@uikit/ds-button';
import { html } from "atomico";
import { withActions } from '@storybook/addon-actions/decorator';

const { args, argTypes } = define(Button, {
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    state: {
      control: "select",
      options: ["default","success", "warning","info","error"],
    },
  },
})

export default {
  title: "Atomos/Button",
  component: "Button",
  args,
  argTypes,
  parameters:{
    docs: {
      canvas: { sourceState: "shown"},
    },
    layout: "centered",
     actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
};

const Template  = ({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  ...props
}: typeof Button.props & {
  slotIconStart:string;
  slotIconEnd:string;
  textLabel:string;
  variant:string;
  size:string;
  state?:string;
}) => html`<ds-button 
  state=${state}
  variant=${variant}
  size=${size}
  innerHTML="${slotIconStart + " " + textLabel +"" + slotIconEnd}"
  ${{ ...props }}></ds-button>`;
;

export const Playground = Template.bind({});
Playground.args ={
  disabled: false,
  slotIconStart:'',
  slotIconEnd:'',
  textLabel:'Button',
};

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  slotIconStart:'',
  slotIconEnd:'',
  textLabel:'Primary Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  disabled: false,
  variant: "secondary",
  slotIconStart:'',
  slotIconEnd:'',
  textLabel:'Secondary Button'
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  disabled: false,
  variant: "tertiary",
  slotIconStart:'',
  slotIconEnd:'',
  textLabel:'Tertiary Button'
};


export const Success = Template.bind({});

Success.args = {
  disabled: false,
  state: "success",
  slotIconStart:'',
  slotIconEnd:'',
  textLabel:'State Button'
};
