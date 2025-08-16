import {
  c, useRef, css, Props,
} from "atomico";
import { customProperties } from "../button.style";

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function ButtonComponent({ variant, size, state, disabled, href, loading, icon }: Props<typeof ButtonComponent>) {

  const refSlotIconLeft = useRef();
  const refSlotIconRight = useRef();
  const refSlotContent = useRef();

  const Tag = href ? "a" : "button";
  const isDisabled = disabled || loading;

  return (
    <host shadowDom>
      <style>{customProperties(variant, state)}</style>
      <Tag
        className={`button-size__${size} ${loading ? "is-loading" : ""} ${icon ? "button--icon" : ""}`} disabled={!href ? isDisabled : undefined}
        href={href || undefined}
        aria-busy={loading}
      >
        {loading ? (
          <span className="spinner"></span>
        ) : (
          <>
            {icon ? (
              <>
                <slot ref={refSlotIconLeft} name="start"></slot>
                <slot ref={refSlotIconRight} name="end"></slot>
              </>
            ) : (
              <>
                <slot ref={refSlotIconLeft} name="start"></slot>
                <span className="label">
                  <slot ref={refSlotContent}></slot>
                </span>
                <slot ref={refSlotIconRight} name="end"></slot>
              </>
            )}
          </>
        )}
      </Tag>
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
    value: (): "lg" | "md" | "sm" => "md",
  },
  state: {
    type: String,
    reflect: true,
    value: (): "default" | "error" | "warning" | "success" | "info" => "default",
  },
  disabled: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  href: {
    type: String,
    reflect: true,
    value: "",
  },
  loading: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  icon: { type: Boolean, reflect: true, value: false }
};

/* Estilos */
ButtonComponent.styles = [
  css`
    button,
    a {
      background-color: var(--background);
      color: var(--color);
      border-radius: var(--border-radius, 32px);
      border-style: var(--border-style);
      border-width: var(--border-width);
      border-color: var(--border-color);
      text-align: center;
      vertical-align: middle;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      text-decoration: none;
      position: relative;
      font-family: var(--ds-globals-font-family-primary, inherit);
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;

      .label {
        font: inherit;
      }
    }

    button:enabled,
    a:enabled {
      cursor: pointer;
    }

    button:active,
    a:active {
      color: var(--color-active);
      background: var(--background-active);
      border-color: var(--border-color-active);
    }

    button:focus-visible,
    a:focus-visible {
      color: var(--color-focus);
      background: var(--background-focus);
      border: var(--border-width-focus) solid var(--border-color-focus);
      outline: none;
    }

    button:disabled,
    a[aria-busy="true"] {
      background-color: var(--background-disabled);
      color: var(--color-disabled);
      border-color: var(--border-color-disabled);
      border-width: var(--border-width-disabled, 0px);
      cursor: not-allowed;
      pointer-events: none;
    }

    button:hover:enabled:not(:active),
    a:hover:not([aria-busy="true"]) {
      background-color: var(--background-hover);
      color: var(--color-hover);
      border-color: var(--border-color-hover);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
    display: block;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px ;
    height: 16px;
    flex-shrink: 0;
    color: inherit;
    fill: currentColor; 
    }
    .button-size__sm {
      padding: 8px 16px;
    }

    .button-size__md {
      padding: 12px 24px;
    }

    .button-size__lg {
      padding: 16px 32px;
    }

     .button--icon.button-size__sm {
     padding: 8px;
   }
   .button--icon.button-size__md {
     padding: 12px;
   }

   .button--icon.button-size__lg {
     padding: 16px;
   }

    .spinner {
      border: 2px solid var(--color-disabled, #ccc);
      border-top: 2px solid var(--color, #000);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,
];

export const Button = c(ButtonComponent);
