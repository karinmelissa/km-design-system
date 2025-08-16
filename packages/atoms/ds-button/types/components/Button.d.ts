export declare const Button: import("atomico/types/dom").Atomico<{
    variant: "primary" | "secondary" | "tertiary";
    size: "lg" | "md" | "sm";
    state: "default" | "error" | "warning" | "success" | "info";
    disabled: boolean;
    href: string;
    loading: boolean;
    icon: boolean;
} & {
    name?: string;
    ariaLabel?: string;
}, {
    variant: "primary" | "secondary" | "tertiary";
    size: "lg" | "md" | "sm";
    state: "default" | "error" | "warning" | "success" | "info";
    disabled: boolean;
    href: string;
    loading: boolean;
    icon: boolean;
} & {
    name?: string;
    ariaLabel?: string;
}, {
    new (): HTMLElement;
    prototype: HTMLElement;
}>;
