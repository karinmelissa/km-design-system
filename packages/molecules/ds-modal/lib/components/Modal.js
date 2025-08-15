import { c, useRef, css } from 'atomico';
import { jsx, jsxs } from 'atomico/jsx-runtime';
import '@uikit/ds-button';

function ModalComponent({ title, subtitle, state, onClose, open }) {
  const refSlotFooter = useRef();
  const refSlotContent = useRef();
  if (!open) return null;
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsxs("div", { className: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title", children: [
    /* @__PURE__ */ jsxs("div", { className: "modal__header", children: [
      /* @__PURE__ */ jsx("h4", { id: "modal-title", children: title }),
      /* @__PURE__ */ jsx(
        "ds-button",
        {
          variant: "tertiary",
          class: "modal__close",
          "aria-label": "Cerrar",
          onclick: onClose,
          children: "×"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "modal__content", children: [
      subtitle && /* @__PURE__ */ jsx("p", { className: "modal__subtitle", children: subtitle }),
      /* @__PURE__ */ jsx("slot", { ref: refSlotContent })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "modal__footer", children: /* @__PURE__ */ jsx("slot", { ref: refSlotFooter, name: "footer" }) })
  ] }) });
}
ModalComponent.props = {
  title: {
    type: String,
    reflect: true,
    value: () => "Modal Title"
  },
  subtitle: {
    type: String,
    reflect: true,
    value: () => ""
  },
  state: {
    type: String,
    reflect: true,
    value: () => "default"
  },
  open: {
    type: Boolean,
    reflect: true,
    value: true
    // El modal está abierto por defecto
  },
  onClose: Function
};
ModalComponent.styles = [
  css`
        .modal {
            padding:20px;
            min-width: 260px;
            max-width: 600px;
            margin: auto;
            background: var(--ds-globals-color-neutrals-0);
            border-radius: 12px;
            display: flex;
            border: 1px solid var(--ds-globals-color-neutrals-30);
            flex-direction: column;
            font-family: inherit;
        }
        .modal__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            h4{
                font-family: Figtree;
                font-weight: 700;
                font-size: 24px;
                margin: 0;
            }
        }
        .modal__subtitle{
           font-family: Figtree;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
        }
        .modal__close {
            background: none;
            border: none;
            font-size: 1.5rem;
            line-height: 1;
            cursor: pointer;
            margin-left: 1rem;
        }
        .modal__content {
            margin-bottom: 16px;
        }
        .modal__footer {
            height:80px;
            border-top: 1px solid #eee;
            text-align: right;
            display: flex;
            flex-direction: row;
            align-items: end;
        }
            
        ::slotted([slot="footer"]){
            display: flex;
            justify-content: flex-end;
            width: 100%;
            gap:8px;
        }
    `
];
const Modal = c(ModalComponent);

export { Modal };
