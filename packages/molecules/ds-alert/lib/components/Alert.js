import { jsx, jsxs } from 'atomico/jsx-runtime';
import { c, useProp, useRef, useEvent } from 'atomico';
import { AlertT } from './Alert.type.js';
import { customProperties, alertStyle } from '../css/alert.style.js';
import { useSlot } from '@atomico/hooks/use-slot';

function AlertComponent({
  type,
  title,
  closeButton,
  ...props
}) {
  const [open, setOpen] = useProp("show");
  const alertRef = useRef();
  const refSlotButton = useRef();
  const slotButton = useSlot(refSlotButton);
  const dispatchEvent = useEvent("CloseAlert", {
    bubbles: true,
    composed: true,
    detail: props.show
  });
  const Icon_alert = {
    success: () => /* @__PURE__ */ jsx(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12.1416 2C6.6216 2 2.1416 6.48 2.1416 12C2.1416 17.52 6.6216 22 12.1416 22C17.6616 22 22.1416 17.52 22.1416 12C22.1416 6.48 17.6616 2 12.1416 2ZM12.1416 20C7.7316 20 4.1416 16.41 4.1416 12C4.1416 7.59 7.7316 4 12.1416 4C16.5516 4 20.1416 7.59 20.1416 12C20.1416 16.41 16.5516 20 12.1416 20ZM16.7316 7.58L10.1416 14.17L7.5516 11.59L6.1416 13L10.1416 17L18.1416 9L16.7316 7.58Z",
            fill: "#3C763D"
          }
        )
      }
    ),
    error: () => /* @__PURE__ */ jsx(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
            fill: "#E60D2E"
          }
        )
      }
    ),
    warning: () => /* @__PURE__ */ jsx(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z",
            fill: "#8A6D3B"
          }
        )
      }
    ),
    info: () => /* @__PURE__ */ jsx(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z",
            fill: "#31708F"
          }
        )
      }
    )
  };
  const handleCloseAlert = (e) => {
    e.preventDefault();
    dispatchEvent();
    setOpen(false);
  };
  if (slotButton.length > 0) {
    if (slotButton[0].children[0]?.attributes.getNamedItem("variant").value !== "ghost") slotButton[0].children[0].setAttribute("state", type);
    if (slotButton[0].children[1]?.attributes.getNamedItem("variant").value !== "ghost") slotButton[0].children[1].setAttribute("state", type);
    if (slotButton[0].children[2]?.attributes.getNamedItem("variant").value !== "ghost") slotButton[0].children[2].setAttribute("state", type);
  }
  return /* @__PURE__ */ jsxs("host", { shadowDom: true, ref: alertRef, children: [
    /* @__PURE__ */ jsx("style", { children: customProperties(type) }),
    open ? /* @__PURE__ */ jsxs("div", { className: "alert-wrapper", children: [
      /* @__PURE__ */ jsxs("div", { className: "header", children: [
        /* @__PURE__ */ jsxs("div", { className: "title-wrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "title-icon", children: Icon_alert[type]() }),
          /* @__PURE__ */ jsx("label", { children: title })
        ] }),
        closeButton ? /* @__PURE__ */ jsx("div", { className: "close-icon", onclick: handleCloseAlert, children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M19.1416 6.41L17.7316 5L12.1416 10.59L6.5516 5L5.1416 6.41L10.7316 12L5.1416 17.59L6.5516 19L12.1416 13.41L17.7316 19L19.1416 17.59L13.5516 12L19.1416 6.41Z",
                fill: "#49494D"
              }
            )
          }
        ) }) : ""
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content", children: [
        /* @__PURE__ */ jsx("slot", { name: "content" }),
        /* @__PURE__ */ jsx("slot", { name: "content-button", ref: refSlotButton })
      ] })
    ] }) : ""
  ] });
}
AlertComponent.props = AlertT;
AlertComponent.styles = [alertStyle];
const Alert = c(AlertComponent);

export { Alert };
