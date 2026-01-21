import { define } from "@atomico/storybook";
import { Modal } from '@karinmelissa/ds-modal';
import { html } from "atomico";
import { withActions } from '@storybook/addon-actions/decorator';

const { args, argTypes } = define(Modal, {
  argTypes: {
    state: {
      control: "select",
      options: ["default","success", "warning","info","error"],
    },
    title: {
      control: "text",}
    ,
    Subtitle: {
      control: "text",}

  },
})

export default {
  title: "Molecules/Modal",
  component: "Modal",
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
  textContent,
  state,
  title,
  subtitle,
  slotFooter,
  ...props
}: typeof Modal.props & {
  textContent:string;
  state?:string;
  title?:string;
  subtitle?:string;
  slotFooter?:string;
}) => html`<ds-Modal 
title=${title}
subtitle=${subtitle}
  state=${state}
  innerHTML="${textContent + slotFooter}"
  ${{ ...props }}></ds-Modal>`;
;

export const Playground = Template.bind({});
Playground.args ={
  textContent:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  title:'Modal Title',
  subtitle:'Modal Subtitle',
  slotFooter:`<div slot="footer">
            <ds-button variant="secondary">Cancel</ds-button>
            <ds-button variant="primary">Save</ds-button>
        </div>`,
};