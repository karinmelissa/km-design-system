import {
	c,
	Props,
	useEvent,
	useState,
	Host,
	useProp,
	useRef,
	useEffect
} from 'atomico';
import { InputHostStyle, InputStyle } from '../css/input.style';
import { InputT } from './Input.type';

function InputComponent({
	type,
	placeholder,
	state,
	disabled,
	label,
	helperMessage,
	autocapitalize,
	...props
}: Props<typeof InputComponent>): Host<{
	onChangeInput: CustomEvent;
	onInputChange: CustomEvent;
}> {
	const [value, setValue] = useProp('value');
	const [visible, setVisible] = useState<boolean>(false);
	const inputRef = useRef(null);

	const inputEvent = useEvent('OnInput', {
		bubbles: !disabled,
		composed: true
	});

	const changeEvent = useEvent('OnChange', {
		bubbles: !disabled,
		composed: true
	});

	const handleChangeInput = (e) => {
		e.stopPropagation();
		e.stopImmediatePropagation();
		const input = (e.target as HTMLInputElement).value;
		setValue(input);
		changeEvent(input);
		// console.log("event onchange handleChangeInput......", e)
	};

	const handleOnInput = (e: Event) => {
		e.stopPropagation();
		e.stopImmediatePropagation();
		const input = (e.target as HTMLInputElement).value;
		setValue(input);
		inputEvent(input);
		// console.log("event onchange handleOnInput......", e)
	};

	return (
		<host shadowDom={true} ref={inputRef}>
			<div className="input-wrapper">
				<fieldset>
					<legend
						className={
							disabled ? 'font-small-style disabled' : 'font-small-style'
						}
					>
						{label}
					</legend>
					<div>
						{' '}
						<slot name="start"></slot>
					</div>
					<input
						type={type === 'password' ? (!visible ? 'password' : 'text') : type}
						label={label}
						id={props.inputId}
						value={props.value}
						placeholder={placeholder}
						disabled={disabled}
						name={props.name}
						dirName={props.dirname}
						pattern={props.pattern}
						required={props.required}
						readOnly={props.readOnly}
						autocomplete={props.autocomplete}
						autofocus={props.autofocus}
						form={props.form}
						maxLength={props.maxLength}
						minLength={props.minLength}
						autocapitalize={autocapitalize}
						inputMode={props.inputMode}
						spellcheck={props.spellcheck}
						size={props.size}
						onchange={(e: Event) => handleChangeInput(e)}
						oninput={(e: Event) => handleOnInput(e)}
					/>
					{type === 'password' ? (
						<div className="icon-end" onclick={() => setVisible(!visible)}>
							{visible && !disabled ? (
								<svg
									width="24"
									height="24"
									viewBox="0 0 22 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11 2C14.79 2 18.17 4.13 19.82 7.5C18.17 10.87 14.79 13 11 13C7.21 13 3.83 10.87 2.18 7.5C3.83 4.13 7.21 2 11 2ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 5C12.38 5 13.5 6.12 13.5 7.5C13.5 8.88 12.38 10 11 10C9.62 10 8.5 8.88 8.5 7.5C8.5 6.12 9.62 5 11 5ZM11 3C8.52 3 6.5 5.02 6.5 7.5C6.5 9.98 8.52 12 11 12C13.48 12 15.5 9.98 15.5 7.5C15.5 5.02 13.48 3 11 3Z"
										fill={disabled ? '#CECED9' : '#49494D'}
									/>
								</svg>
							) : (
								<svg
									width="24"
									height="24"
									viewBox="0 0 22 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11 4C14.79 4 18.17 6.13 19.82 9.5C19.23 10.72 18.4 11.77 17.41 12.62L18.82 14.03C20.21 12.8 21.31 11.26 22 9.5C20.27 5.11 16 2 11 2C9.73 2 8.51 2.2 7.36 2.57L9.01 4.22C9.66 4.09 10.32 4 11 4ZM9.93 5.14L12 7.21C12.57 7.46 13.03 7.92 13.28 8.49L15.35 10.56C15.43 10.22 15.49 9.86 15.49 9.49C15.5 7.01 13.48 5 11 5C10.63 5 10.28 5.05 9.93 5.14ZM1.01 1.87L3.69 4.55C2.06 5.83 0.77 7.53 0 9.5C1.73 13.89 6 17 11 17C12.52 17 13.98 16.71 15.32 16.18L18.74 19.6L20.15 18.19L2.42 0.449997L1.01 1.87ZM8.51 9.37L11.12 11.98C11.08 11.99 11.04 12 11 12C9.62 12 8.5 10.88 8.5 9.5C8.5 9.45 8.51 9.42 8.51 9.37ZM5.11 5.97L6.86 7.72C6.63 8.27 6.5 8.87 6.5 9.5C6.5 11.98 8.52 14 11 14C11.63 14 12.23 13.87 12.77 13.64L13.75 14.62C12.87 14.86 11.95 15 11 15C7.21 15 3.83 12.87 2.18 9.5C2.88 8.07 3.9 6.89 5.11 5.97Z"
										fill={disabled ? '#CECED9' : '#49494D'}
									/>
								</svg>
							)}
						</div>
					) : (
						<div className="icon-end">
							<slot name="end"></slot>
						</div>
					)}
				</fieldset>
			</div>
			<div className="helper-container">
				<span className="font-small-style"> {helperMessage} </span>
			</div>
		</host>
	);
}

InputComponent.props = InputT;

/* Acá manejamos los estilos que no dependen de una variable para realizar al */
InputComponent.styles = [InputHostStyle, InputStyle];

export const Input = c(InputComponent);
