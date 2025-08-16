import { Type } from "atomico";
import { AutocompleteMode ,InputModeType } from "./types";

export const InputT = {
  label: {
    type: String,
    reflect: true,
    value: (): string => 'Label',
  },
  helperMessage: {
    type: String,
    reflect: true,
    value: (): string => 'Text message',
  },
  inputId: {
    type: String,
    reflect: true,
    value: (): string => 'input1',
  },
  type: {
    type: String,
    reflect: true,
    value: (): "text" | "password" => "text",
  },
  state: {
    type: String,
    reflect: true,
    value: (): "default" | "error" | "success" => "default",
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  placeholder: {
    type: String,
    reflect: true,
    value: (): string => 'Placeholder',
  },
  value: {
    type: String,
    reflect: true,
    value: (): string => "",
  },
  name: {
    type: String,
    reflect: true,
  },
  dirname: {
    type: String,
    reflect: true,
  },
  pattern: {
    type: String,
    reflect: true,
  },
  required: {
    type: Boolean,
    reflect: true,
  },
  readOnly: {
    type: Boolean,
    reflect: true,
  },
  autocomplete:{
     type: String as Type<AutocompleteMode>,
    reflect: true,
    value: () => "on",
  },
  autofocus: {
    type: Boolean,
    reflect: true,
  },
  form: {
    type: HTMLFormElement,
    reflect: true,
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
    value: (): "none"| "sentence" | "words"| "characters" | "on" | "off"   => "on",
  },
  inputMode:{
    type: String as Type<InputModeType>,
    reflect: true,
  },
  spellcheck:{
    type: Boolean,
		reflect: true,
  },
}