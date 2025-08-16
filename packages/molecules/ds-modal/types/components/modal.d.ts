import '@uikit/ds-button';
export declare const Modal: import("atomico/types/dom").Atomico<{
    title: string;
    subtitle: string;
    open: boolean;
} & {
    onClose?: import("atomico/types/schema").FillFunction;
}, {
    title: string;
    subtitle: string;
    open: boolean;
} & {
    onClose?: import("atomico/types/schema").FillFunction;
}, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
