import {
	c,
	useRef,
	useProp,
	Props,
	useEvent,
	Host,
	useState,
	useEffect
} from 'atomico';
import { selectHostVartStyle, selectStyle } from '../css/select.style';
import { SelectT } from './Select.type';
import {
	NewPositionT,
	useSelectDropdownNewPositionHook,
	useClickListenerEffect
} from './hooks';

import { SelectOption } from './SelectOption';

function SelectComponent({
	disabled,
	ariaLabel,
	helperText,
	value,
	label,
	isOpen,
	required,
	options,
	isFilterable,
	placeholder,
	variant
}: Props<typeof SelectComponent.props>): Host<{
	onChangeSelect: Event;
	onSearchSelect: Event;
}> {
	const selectRef = useRef();
	const selecOptionstRef = useRef();
	const hostRef = useRef();
	const [, setSelectedValue] = useProp('value');
	const [, setIsOpen] = useProp('isOpen');

	const [, setPlaceholder] = useProp('placeholder');
	const [searchValue, setSearchValue] = useState('');
	const [searchType, setSearchType] = useState<'includes' | 'startsWith'>(
		'includes'
	);
	const [position, setPosition] = useState<NewPositionT>({
		top: 0,
		left: 0,
		boundary: 'below'
	});
	const optionsStyle = ({ isOpen, position }) => ({
		zIndex: 1,
		display: (isOpen && 'block') || 'none',
		left: position.left + -2 + 'px',
		top: position.top + (position.top < 0 ? -2 : 2) + 'px',
		right: '-2px',
		borderRadius:
			position.boundary == 'below' ? '0px 0px 4px 4px' : '4px 4px 0px 0px'
	});
	const dispatchEventChange = useEvent('ChangeSelect', {
		bubbles: !disabled,
		composed: true
	});
	const dispatchEventSearch = useEvent('SearchSelect', {
		bubbles: !disabled,
		composed: true
	});
	const setOptionSelected = ({ someValue }) => {
		const selectedOption = options.filter(
			(option) => option.value === someValue
		);
		if (selectedOption && selectedOption.length > 0) {
			const { label } = selectedOption[0];
			setPlaceholder(label);
			setSearchValue('');
		}
	};
	const handleSelectChange = (e: any) => {
		e instanceof Event && e.stopPropagation();
		e instanceof InputEvent && e.preventDefault();
		setSelectedValue((oldValue) => {
			if (oldValue && oldValue === (e.target as HTMLInputElement).value)
				return oldValue;
			setOptionSelected({ someValue: (e.target as HTMLInputElement).value });
			return (e.target as HTMLInputElement).value;
		});
		setIsOpen(false);
	};
	const handleSelectClick = (e: Event) => {
		if (disabled) return;
		setIsOpen(!isOpen);
		if (isOpen) {
			setSearchValue('');
		}
	};
	const handleClickOutside = (event) => {
		if (
			hostRef.current &&
			event.composedPath() &&
			!event.composedPath().includes(hostRef.current)
		) {
			setIsOpen(false);
			setSearchValue('');
		}
	};
	const onInput = (e: Event) => {
		setIsOpen((oldIsOpen) => (oldIsOpen ? oldIsOpen : true));
		const value =
			variant === 'string'
				? (e.target as HTMLInputElement)?.value
				: (e.target as HTMLInputElement)?.valueAsNumber;
		setSearchValue(value.toString());
	};

	const onBeforeInput = (evt: InputEvent) =>
		variant !== 'string' &&
		isNumberKey(evt) &&
		limitNumber({ event: evt, searchValue, setSearchValue, options });

	const onKeyDown = (e: KeyboardEvent) => {
		const $options = getOptions();
		const element = Array.from(
			(selecOptionstRef.current as Element).querySelectorAll(
				'ds-select-option'
			)
		).filter((el) => el.textContent.includes($options[0].label))[0];
		if (e.key === 'Enter' && isOpen && $options.length > 0) {
			handleSelectChange({
				...e,
				target: element
			});
		}
	};

	useSelectDropdownNewPositionHook({
		selectRef,
		selecOptionstRef,
		isOpen,
		searchValue
	}).then((newPosition) => {
		setPosition(newPosition);
	});
	useClickListenerEffect({ isOpen, callback: handleClickOutside });
	useEffect(() => {
		dispatchEventSearch();
	}, [searchValue]);
	useEffect(() => {
		setOptionSelected({ someValue: value });
		dispatchEventChange();
	}, [value]);
	useEffect(() => {
		variant === 'number' && setSearchType('startsWith');
	}, [variant]);
	const getOptions = (): typeof options =>
		!isFilterable
			? options
			: options.filter((option) =>
					option.label
						.toLowerCase()
						[searchType](searchValue && searchValue.toLowerCase())
			  );
	return (
		<host shadowDom ref={hostRef}>
			<div id="input-wrapper" className="input-wrapper">
				{/* <fieldset id="input-wrapper"> */}
				{label && label.length > 0 && (
					<label htmlFor="input-wrapper">{label}</label>
				)}
				<svg
					class="icon"
					style={`	transform: ${isOpen ? ' rotate(180deg) ' : 'none'}  ;`}
					onclick={handleSelectClick}
					width="12"
					height="8"
					viewBox="0 0 12 8"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
						fill="inherit"
					/>
				</svg>
				<input
					id="input-wrapper"
					arial-label={ariaLabel}
					ref={selectRef}
					disabled={disabled}
					className={`${isOpen ? 'isOpen ' : ''}
				${value && value.length > 0 ? 'has-value ' : ''}
				${position.boundary === 'below' ? 'below' : ''}`}
					type={
						isFilterable
							? variant === 'string'
								? 'select'
								: 'number'
							: 'button'
					}
					inputmode={variant === 'string' ? 'text' : 'numeric'}
					onbeforeinput={onBeforeInput}
					onkeydown={onKeyDown}
					oninput={onInput}
					onclick={handleSelectClick}
					placeholder={placeholder}
					value={isFilterable ? searchValue : placeholder}
					required={required}
				></input>
				{/* </fieldset> */}
			</div>
			{helperText && helperText.length > 0 && (
				<span className="helper-text">{helperText}</span>
			)}
			<ul
				ref={selecOptionstRef}
				className="options-list"
				style={optionsStyle({
					isOpen,
					position
				})}
			>
				{getOptions().map((option, index) => (
					<SelectOption
						id={index.toString()}
						value={option.value}
						selected={option.selected}
						onOptionClick={handleSelectChange}
					>
						{option.label}
					</SelectOption>
				))}
			</ul>
		</host>
	);
}

SelectComponent.props = SelectT;

SelectComponent.styles = [selectHostVartStyle, selectStyle];

export const Select = c(SelectComponent);

//
function isNumberKey(event) {
	const inputType = event.inputType;
	const data = event.data;
	// Verificar si la entrada es de tipo "insertText" y el texto es "e" o "E"
	if (inputType === 'insertText' && (data === 'e' || data === 'E')) {
		// Evitar la inserción del texto
		event.preventDefault();
		return false;
	}
	return true;
}
const limitNumber = ({
	event,
	searchValue,
	setSearchValue,
	options
}: {
	event: InputEvent;
	searchValue: string;
	setSearchValue: Function;
	options: Array<{ value: string; label: string }>;
}) => {
	const $searchValue = Number(searchValue + event.data);
	if (
		$searchValue >
		Number(
			options.reduce((max, obj) =>
				Number(obj.label) > Number(max.label) ? obj : max
			).label
		)
	) {
		setSearchValue(searchValue);
		event.preventDefault();
	}
};
