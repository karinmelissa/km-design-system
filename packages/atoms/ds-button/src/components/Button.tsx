import {
  c, useRef, css, useProp, Props,
} from "atomico";
import { customProperties } from "../button.style";

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function ButtonComponent({ variant, size, state ,disabled }: Props<typeof ButtonComponent>) {

  const refSlotIconLeft = useRef();
  const refSlotIconRight = useRef();
  const refSlotContent = useRef();
  const buttonOutRef = useRef();


  //Compruebo si existen los slot para poder condicionar estilos
  /* const slotIcon = useSlot(refSlotIcon);
    const slotContent = useSlot(refSlotContent); */


  return (
    <host shadowDom>
      <style>{customProperties(variant, state)}</style>
      <button
        className={`button-size__${size}`}
        disabled={disabled}>
        <slot ref={refSlotIconLeft} name="start"></slot>
        <span className="label">
          <slot ref={refSlotContent}></slot>
        </span>
        <slot ref={refSlotIconRight} name="end"></slot>
      </button>
    </host>
  );
}

ButtonComponent.props = {
  ariaLabel: String,
  name: String,
  variant: {
    type: String,
    reflect: true,
    value: (): "primary" | "secondary" | "tertiary" => "primary",
  },
  size: {
    type: String,
    reflect: true,
    value: (): "large" | "medium" | "small" => "medium",
  },
  state: {
    type: String,
    reflect: true,
    value: (): "default" | "error" | "warning" | "success"  | "info" => "default",
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  expand: {
    type: String,
    reflect: true,
    value: "block",
  },
};

/* Acá manejamos los estilos que no dependen de una variable para realizar al */
ButtonComponent.styles = [
  css`
    /*
    * Prefixed by https://autoprefixer.github.io
    * PostCSS: v8.3.6,
    * Autoprefixer: v10.3.1
    * Browsers: last 4 version
    */

    button {
      background-color: var(--background);
      color: var(--color);
      border-radius: var(--border-radius,32px);
      border-style: var(--border-style);
      border-width: var(--border-width);
      border-color: var(--border-color);
      text-align: center; 
      vertical-align: middle;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      gap: 0.75rem;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      box-sizing:border-box;

      .label{
      line-height: 24px;
      font-size: 16px;
      font-weight: 500;
      }
    }

    button:enabled {
      cursor: pointer;
    }
    button:active {
      color: var(--color-active);
      background: var(--background-active);
      border-color: var(--border-color-active);
    }
    button:focus-visible {
      color: var(--color-focus);
      background: var(--background-focus);
      border: var(--border-width-focus) solid var(--border-color-focus);
      outline: none;
    }
    button:disabled {
      background-color: var(--background-disabled);
      color: var(--color-disabled);
      cursor: not-allowed;
      border: none;
    }
    button:hover:enabled:not(:active)  {
      background-color: var(--background-hover);
      color: var(--color-hover);
      border-color: var(--border-color-hover);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([variant="text"]) button:disabled {
      --background-disabled: transparent;
    }
    :host([variant="text"]) button:hover(:not, :disabled) {
      background-color: var(--background-hover);
      color: var(--color-hover);
      opacity: 0.5;
    }
    :host([expand="full"]) button {
      width: 100%;
    }

    :host([variant="outlined"]) button,
    :host([variant="text"]) button {
      --background: "transparent";
      --color: var(--ds-color-text);
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
      display: block;
    }

    .button-size__small{
      padding-top: 8px;
      padding-right: 16px;
      padding-bottom: 8px;
      padding-left: 16px;
    }

    .button-size__medium{
      padding-top: 12px;
      padding-right: 24px;
      padding-bottom: 12px;
      padding-left: 24px;
    }

    .button-size__large{
      padding-top: 16px;
      padding-right: 32px;
      padding-bottom: 16px;
      padding-left:32px;
    }
  `,
];

export const Button = c(ButtonComponent);
