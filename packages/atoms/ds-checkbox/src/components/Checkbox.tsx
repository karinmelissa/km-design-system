import { c, css, Props, useProp, useEvent, Host } from 'atomico';
import { CheckboxT } from './Checkbox.type';
import { checkboxStyle } from '../css/checkbox.style';

function CheckboxComponent({
	checked,
	disabled,
	indeterminate,
	label,
	helperText,
	labelPosition,
	name,
	value,
}: Props<typeof CheckboxComponent.props>): Host<{ onChange: CustomEvent }> {
	const [, setChecked] = useProp('checked');
	const [, setIndeterminate] = useProp('indeterminate');

	const dispatchChange = useEvent('ChangeCheckbox', {
		bubbles: true,
		composed: true,
	});

	const handleClick = (e: Event) => {
		e.stopPropagation();
		if (disabled) return;
		const next = indeterminate ? true : !checked;
		setChecked(next);
		setIndeterminate(false);
		dispatchChange({ checked: next, value, name });
	};

	const hasText = label || helperText;

	return (
		<host shadowDom>
			<div
				className={`ds-checkbox-wrapper${labelPosition === 'left' ? ' label-left' : ''}`}
				role="checkbox"
				aria-checked={indeterminate ? 'mixed' : checked ? 'true' : 'false'}
				aria-disabled={disabled ? 'true' : undefined}
				tabindex={disabled ? '-1' : '0'}
				onclick={handleClick}
				onkeydown={(e: KeyboardEvent) => {
					if (e.key === ' ' || e.key === 'Enter') {
						e.preventDefault();
						handleClick(e);
					}
				}}
			>
				<div className="ds-checkbox-box">
					{/* checkmark icon */}
					<svg
						className="ds-checkbox-icon ds-checkbox-icon--check"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 14 14"
						fill="none"
					>
						<path
							d="M2 7L5.5 10.5L12 3.5"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					{/* indeterminate icon */}
					<svg
						className="ds-checkbox-icon ds-checkbox-icon--indeterminate"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 14 14"
						fill="none"
					>
						<path
							d="M2 7H12"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>

				{hasText && (
					<div className="ds-checkbox-text">
						{label && <span className="ds-checkbox-label">{label}</span>}
						{helperText && <span className="ds-checkbox-helper">{helperText}</span>}
					</div>
				)}
			</div>
		</host>
	);
}

CheckboxComponent.props = CheckboxT;

CheckboxComponent.styles = [checkboxStyle];

export const Checkbox = c(CheckboxComponent);
