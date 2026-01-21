import { define } from "@atomico/storybook";
import { Button } from '@karinmelissa/ds-button';
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
      options: ["sm", "md", "lg"],
    },
    state: {
      control: "select",
      options: ["default","success", "warning","info","error"],
    },
    disabled:{
      control: "boolean",
    },
     loading:{
      control: "boolean",
    },
    href:{
      control: "text",
      description: "If provided, the button will render as an anchor tag.",
    }
  },
})

export default {
  title: "Atoms/Button",
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
  tags: ['autodocs'],
};

const Template  = ({
  slotIconStart,
  slotIconEnd,
  textLabel,
  state,
  variant,
  size,
  disabled,
  loading,
  href,
  ...props
}: typeof Button.props & {
  slotIconStart:string;
  slotIconEnd:string;
  textLabel:string;
  variant:string;
  size:string;
  state?:string;
  diabled?:boolean;
  loading?:boolean;
  href?:string;
}) => html`<ds-button 
  state=${state}
  variant=${variant}
  size=${size}
  disabled=${disabled}
  loading=${loading}
  href=${href}
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

export const  Error = Template.bind({});

Error.args = {
  disabled: false,
  state: "error",
  slotIconStart:'',
  slotIconEnd:'',
  textLabel:'State Button'
};

export const  Info = Template.bind({});

Info.args = {
  disabled: false,
  state: "info",
  slotIconStart:'',
  slotIconEnd:'',
  textLabel:'State Button'
};

export const  Warning = Template.bind({});

Warning.args = {
  disabled: false,
  state: "warning",
  slotIconStart:'',
  slotIconEnd:'',
  textLabel:'State Button'
};


