import { c, css, useRef } from 'atomico';
import '@karinmelissa/ds-button';

/**
 *
 * @param {import("atomico").Props<button.props>} props
 */
function ModalComponent({ title, subtitle, onClose, open }) {
    const refSlotFooter = useRef();
    const refSlotContent = useRef();

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
                        icon
                    >
                    <svg slot="end" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 1024 1024"><path d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/></svg>
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
    open: {
        type: Boolean,
        reflect: true,
        value: true,
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
            font-family: var(--ds-globals-font-family-primary, inherit);
        }
        .modal__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            h4{ 
                font-weight: 700;
                font-size: 24px;
                margin: 0;
            }
        }
        .modal__subtitle{ 
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