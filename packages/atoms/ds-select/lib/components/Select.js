import { jsxs, jsx } from 'atomico/jsx-runtime';
import { c, useRef, useProp, useState, useEvent, useEffect } from 'atomico';
import { selectHostVartStyle, selectStyle } from '../css/select.style.js';
import { SelectT } from './Select.type.js';
import { useSelectDropdownNewPositionHook, useClickListenerEffect } from './hooks.js';
import { SelectOption } from './SelectOption.js';

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
}) {
  const selectRef = useRef();
  const selecOptionstRef = useRef();
  const hostRef = useRef();
  const [, setSelectedValue] = useProp("value");
  const [, setIsOpen] = useProp("isOpen");
  const [, setPlaceholder] = useProp("placeholder");
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState(
    "includes"
  );
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    boundary: "below"
  });
  const optionsStyle = ({ isOpen: isOpen2, position: position2 }) => ({
    zIndex: 1,
    display: isOpen2 && "block" || "none",
    left: position2.left + -2 + "px",
    top: position2.top + (position2.top < 0 ? -2 : 2) + "px",
    right: "-2px",
    borderRadius: position2.boundary == "below" ? "0px 0px 4px 4px" : "4px 4px 0px 0px"
  });
  const dispatchEventChange = useEvent("ChangeSelect", {
    bubbles: !disabled,
    composed: true
  });
  const dispatchEventSearch = useEvent("SearchSelect", {
    bubbles: !disabled,
    composed: true
  });
  const setOptionSelected = ({ someValue }) => {
    const selectedOption = options.filter(
      (option) => option.value === someValue
    );
    if (selectedOption && selectedOption.length > 0) {
      const { label: label2 } = selectedOption[0];
      setPlaceholder(label2);
      setSearchValue("");
    }
  };
  const handleSelectChange = (e) => {
    e instanceof Event && e.stopPropagation();
    e instanceof InputEvent && e.preventDefault();
    setSelectedValue((oldValue) => {
      if (oldValue && oldValue === e.target.value)
        return oldValue;
      setOptionSelected({ someValue: e.target.value });
      return e.target.value;
    });
    setIsOpen(false);
  };
  const handleSelectClick = (e) => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (isOpen) {
      setSearchValue("");
    }
  };
  const handleClickOutside = (event) => {
    if (hostRef.current && event.composedPath() && !event.composedPath().includes(hostRef.current)) {
      setIsOpen(false);
      setSearchValue("");
    }
  };
  const onInput = (e) => {
    setIsOpen((oldIsOpen) => oldIsOpen ? oldIsOpen : true);
    const value2 = variant === "string" ? e.target?.value : e.target?.valueAsNumber;
    setSearchValue(value2.toString());
  };
  const onBeforeInput = (evt) => variant !== "string" && isNumberKey(evt) && limitNumber({ event: evt, searchValue, setSearchValue, options });
  const onKeyDown = (e) => {
    const $options = getOptions();
    const element = Array.from(
      selecOptionstRef.current.querySelectorAll(
        "ds-select-option"
      )
    ).filter((el) => el.textContent.includes($options[0].label))[0];
    if (e.key === "Enter" && isOpen && $options.length > 0) {
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
    variant === "number" && setSearchType("startsWith");
  }, [variant]);
  const getOptions = () => !isFilterable ? options : options.filter(
    (option) => option.label.toLowerCase()[searchType](searchValue && searchValue.toLowerCase())
  );
  return /* @__PURE__ */ jsxs("host", { shadowDom: true, ref: hostRef, children: [
    /* @__PURE__ */ jsxs("div", { id: "input-wrapper", className: "input-wrapper", children: [
      label && label.length > 0 && /* @__PURE__ */ jsx("label", { htmlFor: "input-wrapper", children: label }),
      /* @__PURE__ */ jsx(
        "svg",
        {
          class: "icon",
          style: `	transform: ${isOpen ? " rotate(180deg) " : "none"}  ;`,
          onclick: handleSelectClick,
          width: "12",
          height: "8",
          viewBox: "0 0 12 8",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z",
              fill: "inherit"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "input-wrapper",
          "arial-label": ariaLabel,
          ref: selectRef,
          disabled,
          className: `${isOpen ? "isOpen " : ""}
				${value && value.length > 0 ? "has-value " : ""}
				${position.boundary === "below" ? "below" : ""}`,
          type: isFilterable ? variant === "string" ? "select" : "number" : "button",
          inputmode: variant === "string" ? "text" : "numeric",
          onbeforeinput: onBeforeInput,
          onkeydown: onKeyDown,
          oninput: onInput,
          onclick: handleSelectClick,
          placeholder,
          value: isFilterable ? searchValue : placeholder,
          required
        }
      )
    ] }),
    helperText && helperText.length > 0 && /* @__PURE__ */ jsx("span", { className: "helper-text", children: helperText }),
    /* @__PURE__ */ jsx(
      "ul",
      {
        ref: selecOptionstRef,
        className: "options-list",
        style: optionsStyle({
          isOpen,
          position
        }),
        children: getOptions().map((option, index) => /* @__PURE__ */ jsx(
          SelectOption,
          {
            id: index.toString(),
            value: option.value,
            selected: option.selected,
            onOptionClick: handleSelectChange,
            children: option.label
          }
        ))
      }
    )
  ] });
}
SelectComponent.props = SelectT;
SelectComponent.styles = [selectHostVartStyle, selectStyle];
const Select = c(SelectComponent);
function isNumberKey(event) {
  const inputType = event.inputType;
  const data = event.data;
  if (inputType === "insertText" && (data === "e" || data === "E")) {
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
}) => {
  const $searchValue = Number(searchValue + event.data);
  if ($searchValue > Number(
    options.reduce(
      (max, obj) => Number(obj.label) > Number(max.label) ? obj : max
    ).label
  )) {
    setSearchValue(searchValue);
    event.preventDefault();
  }
};

export { Select };
