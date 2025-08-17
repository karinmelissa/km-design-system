import { Host, Props, c, css, useEffect, useEvent, useRef } from 'atomico';
function SelectOptionComponent({
	selected,
	label,
	value,
}: Props<typeof SelectOptionComponent.props>): Host<{
	onOptionClick: Event;
}> {
	const slotRef = useRef();
	const dispatchEventChange = useEvent('OptionClick', {
		bubbles: true,
		composed: true,
	});
	const handleClick = (e: Event) => {
		e.stopPropagation();
		dispatchEventChange();
	};
	useEffect(() => {
		if (selected) {
			dispatchEventChange();
		}
	}, []);
	return (
		<host onclick={(e) => handleClick(e)} shadowDom>
			<slot ref={slotRef}></slot> {label}
		</host>
	);
}
SelectOptionComponent.props = {
	key: { type: String, reflect: true, value: '' },
	value: { type: String, reflect: true, value: '' },
	label: { type: String, reflect: true, value: '' },
	selected: { type: Boolean, reflect: true, value: false },
};
SelectOptionComponent.styles = css`
	:host {
		display: list-item;
		list-style-type: disc; /* Use disc bullets, similar to an unordered list */
		text-align: -webkit-match-parent;
		//styleName: global/text/medium/regular;
		font: var(--ds-select-options-font);
		letter-spacing: 0rem;
		text-align: left;
		padding: 8px 16px;
		background: var(--ds-select-option-background-color);
		cursor: pointer;
	}
	:host(:hover) {
		background-color: var(--ds-select-option-background-color-hover);
	}
`;
export const SelectOption = c(SelectOptionComponent);
customElements.define('ds-select-option', SelectOption);
