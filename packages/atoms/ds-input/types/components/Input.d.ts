export declare const Input: import("atomico/types/dom").Atomico<{
    label: string;
    helperMessage: string;
    inputId: string;
    type: "text" | "password";
    state: "default" | "error" | "success";
    disabled: boolean;
    placeholder: string;
    value: string;
    autocomplete: string;
    autocapitalize: "off" | "on" | "none" | "sentence" | "words" | "characters";
    onChangeInput: (event: CustomEvent<any>) => any;
    onInputChange: (event: CustomEvent<any>) => any;
} & {
    name?: string;
    dirname?: string;
    pattern?: string;
    required?: boolean;
    readOnly?: boolean;
    autofocus?: boolean;
    form?: HTMLFormElement;
    maxLength?: number;
    minLength?: number;
    size?: number;
    inputMode?: import("./types").InputModeType;
    spellcheck?: boolean;
}, {
    label: string;
    helperMessage: string;
    inputId: string;
    type: "text" | "password";
    state: "default" | "error" | "success";
    disabled: boolean;
    placeholder: string;
    value: string;
    autocomplete: string;
    autocapitalize: "off" | "on" | "none" | "sentence" | "words" | "characters";
    onChangeInput: (event: CustomEvent<any>) => any;
    onInputChange: (event: CustomEvent<any>) => any;
} & {
    name?: string;
    dirname?: string;
    pattern?: string;
    required?: boolean;
    readOnly?: boolean;
    autofocus?: boolean;
    form?: HTMLFormElement;
    maxLength?: number;
    minLength?: number;
    size?: number;
    inputMode?: import("./types").InputModeType;
    spellcheck?: boolean;
}, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
