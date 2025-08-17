import { c, useRef, useProp, Props, useEvent, Host } from 'atomico';
import { chipStyle } from '../css/chip.style';
import { ChipPropsType } from './Chip.type';

function ChipComponent({
	selected,
	disabled,
	ariaLabel,
}: Props<typeof ChipComponent.props>): Host<{
	onClick: Event;
}> {
	const refSlotContent = useRef();
	const refSlotIcon = useRef();
	const [, setSelected] = useProp('selected');
	const dispatchEventClick = useEvent('ClickChip', {
		bubbles: !disabled,
		composed: true,
	});

	const handleClick = (e: Event) => {
		e.stopPropagation();
		const newStatus = !selected;
		setSelected(newStatus);
		dispatchEventClick();
	};

	return (
		<host shadowDom>
			<div
				className={
					'ds-chip-wrapper' +
					(!disabled && selected ? ' selected' : '') +
					(disabled ? ' disabled' : '')
				}
				tabindex={disabled ? '-1' : '0'}
				disabled={disabled}
				role="button"
				onclick={!disabled && handleClick}
				aria-label={(selected ? 'Close' : 'Open') + ' ' + ariaLabel}
			>
				<slot
					ref={refSlotIcon}
					className="ds-chip-slot-icon"
					name="icon"
				></slot>
				<slot ref={refSlotContent} className="ds-chip-slot-label"></slot>
				<div
					className="ds-chip-x-button"
					style={{ display: selected ? 'flex' : 'none' }}
					aria-label={(selected ? 'Close' : 'Open') + ' ' + ariaLabel}
					type="button"
					aria-expanded="false"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
					>
						<g clip-path="url(#clip0_2361_3585)">
							<path
								d="M12.6663 4.2735L11.7263 3.3335L7.99967 7.06016L4.27301 3.3335L3.33301 4.2735L7.05967 8.00016L3.33301 11.7268L4.27301 12.6668L7.99967 8.94016L11.7263 12.6668L12.6663 11.7268L8.93967 8.00016L12.6663 4.2735Z"
								fill="currentColor"
							/>
						</g>
						<defs>
							<clipPath id="clip0_2361_3585">
								<rect width="16" height="16" fill="currentColor" />
							</clipPath>
						</defs>
					</svg>
				</div>
			</div>
		</host>
	);
}

ChipComponent.props = ChipPropsType;

/* Acá manejamos los estilos que no dependen de una variable para realizar al */
ChipComponent.styles = [chipStyle];

export const Chip = c(ChipComponent);
