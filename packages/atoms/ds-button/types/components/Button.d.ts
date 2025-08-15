export declare const Button: import("atomico/types/dom").Atomico<{
    variant: "tertiary" | "primary" | "secondary";
    size: "large" | "medium" | "small";
    state: "default" | "error" | "warning" | "success" | "info";
    disabled: boolean;
    expand: string;
} & {
    name?: string;
    ariaLabel?: string;
}, {
    variant: "tertiary" | "primary" | "secondary";
    size: "large" | "medium" | "small";
    state: "default" | "error" | "warning" | "success" | "info";
    disabled: boolean;
    expand: string;
} & {
    name?: string;
    ariaLabel?: string;
}, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
