import { c } from 'atomico';

/**
 *
 * @param {import("atomico").Props<input.props>} props
 */
function InputComponent({ ...props }) {
    return (
        <host shadowDom>
            <input></input>
        </host>
    );
}

InputComponent.props = {};

InputComponent.styles = [];

export const Input = c(InputComponent);
