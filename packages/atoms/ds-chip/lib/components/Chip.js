import { jsx, jsxs } from 'atomico/jsx-runtime';
import { c, useRef, useProp, useEvent } from 'atomico';
import { chipStyle } from '../css/chip.style.js';
import { ChipPropsType } from './Chip.type.js';

function ChipComponent({
  selected,
  disabled,
  ariaLabel
}) {
  const refSlotContent = useRef();
  const refSlotIcon = useRef();
  const [, setSelected] = useProp("selected");
  const dispatchEventClick = useEvent("ClickChip", {
    bubbles: !disabled,
    composed: true
  });
  const handleClick = (e) => {
    e.stopPropagation();
    const newStatus = !selected;
    setSelected(newStatus);
    dispatchEventClick();
  };
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "uny-chip-wrapper" + (!disabled && selected ? " selected" : "") + (disabled ? " disabled" : ""),
      tabindex: disabled ? "-1" : "0",
      disabled,
      role: "button",
      onclick: !disabled && handleClick,
      "aria-label": (selected ? "Close" : "Open") + " " + ariaLabel,
      children: [
        /* @__PURE__ */ jsx(
          "slot",
          {
            ref: refSlotIcon,
            className: "uny-chip-slot-icon",
            name: "icon"
          }
        ),
        /* @__PURE__ */ jsx("slot", { ref: refSlotContent, className: "uny-chip-slot-label" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "uny-chip-x-button",
            style: { display: selected ? "flex" : "none" },
            "aria-label": (selected ? "Close" : "Open") + " " + ariaLabel,
            type: "button",
            "aria-expanded": "false",
            children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                children: [
                  /* @__PURE__ */ jsx("g", { "clip-path": "url(#clip0_2361_3585)", children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M12.6663 4.2735L11.7263 3.3335L7.99967 7.06016L4.27301 3.3335L3.33301 4.2735L7.05967 8.00016L3.33301 11.7268L4.27301 12.6668L7.99967 8.94016L11.7263 12.6668L12.6663 11.7268L8.93967 8.00016L12.6663 4.2735Z",
                      fill: "inherit"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_2361_3585", children: /* @__PURE__ */ jsx("rect", { width: "16", height: "16", fill: "inherit" }) }) })
                ]
              }
            )
          }
        )
      ]
    }
  ) });
}
ChipComponent.props = ChipPropsType;
ChipComponent.styles = [chipStyle];
const Chip = c(ChipComponent);

export { Chip };
