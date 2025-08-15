import { c, css, useRef } from 'atomico';
import '@uikit/ds-button';

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function ModalComponent({ title, subtitle, state, onClose, open }) {
    const refSlotFooter = useRef();
    const refSlotContent = useRef();

    // Si open es false, no renderiza el modal
    if (!open) return null;

    return (
        <host shadowDom>
            <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div className="modal__header">

                    <h4 id="modal-title">{title}</h4>
                    <ds-button
                        variant="tertiary"
                        class="modal__close"
                        aria-label="Cerrar"
                        onclick={onClose}
                    >
                        ×
                    </ds-button>
                </div>
                <div className="modal__content">
                    {subtitle && <p className="modal__subtitle">{subtitle}</p>}
                    <slot ref={refSlotContent}></slot>
                </div>
                <div className="modal__footer">
                    <slot ref={refSlotFooter} name="footer"></slot>
                </div>
            </div>
        </host>
    );
}

ModalComponent.props = {
    title: {
        type: String,
        reflect: true,
        value: (): string => "Modal Title",
    },
    subtitle: {
        type: String,
        reflect: true,
        value: (): string => "",
    },
    state: {
        type: String,
        reflect: true,
        value: (): "default" | "error" | "warning" | "success" | "info" => "default",
    },
    open: {
        type: Boolean,
        reflect: true,
        value: true, // El modal está abierto por defecto
    },
    onClose: Function,
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

export const Modal = c(ModalComponent);