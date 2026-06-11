import { jsx, jsxs } from 'atomico/jsx-runtime';
import { c, useProp, useEvent } from 'atomico';
import { CheckboxT } from './Checkbox.type.js';
import { checkboxStyle } from '../css/checkbox.style.js';

function CheckboxComponent({
  checked,
  disabled,
  indeterminate,
  label,
  helperText,
  labelPosition,
  name,
  value
}) {
  const [, setChecked] = useProp("checked");
  const [, setIndeterminate] = useProp("indeterminate");
  const dispatchChange = useEvent("ChangeCheckbox", {
    bubbles: true,
    composed: true
  });
  const handleClick = (e) => {
    e.stopPropagation();
    if (disabled) return;
    const next = indeterminate ? true : !checked;
    setChecked(next);
    setIndeterminate(false);
    dispatchChange({ checked: next, value, name });
  };
  const hasText = label || helperText;
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `ds-checkbox-wrapper${labelPosition === "left" ? " label-left" : ""}`,
      role: "checkbox",
      "aria-checked": indeterminate ? "mixed" : checked ? "true" : "false",
      "aria-disabled": disabled ? "true" : void 0,
      tabindex: disabled ? "-1" : "0",
      onclick: handleClick,
      onkeydown: (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleClick(e);
        }
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "ds-checkbox-box", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "ds-checkbox-icon ds-checkbox-icon--check",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 14 14",
              fill: "none",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M2 7L5.5 10.5L12 3.5",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "ds-checkbox-icon ds-checkbox-icon--indeterminate",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 14 14",
              fill: "none",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M2 7H12",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round"
                }
              )
            }
          )
        ] }),
        hasText && /* @__PURE__ */ jsxs("div", { className: "ds-checkbox-text", children: [
          label && /* @__PURE__ */ jsx("span", { className: "ds-checkbox-label", children: label }),
          helperText && /* @__PURE__ */ jsx("span", { className: "ds-checkbox-helper", children: helperText })
        ] })
      ]
    }
  ) });
}
CheckboxComponent.props = CheckboxT;
CheckboxComponent.styles = [checkboxStyle];
const Checkbox = c(CheckboxComponent);

export { Checkbox };
