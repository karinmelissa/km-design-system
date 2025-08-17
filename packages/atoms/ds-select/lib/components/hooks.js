import { useState, useEffect } from 'atomico';

async function useSelectDropdownNewPositionHook({
  selectRef,
  selecOptionstRef,
  isOpen,
  searchValue
}) {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    boundary: "below"
  });
  const handleScroll = () => {
    generateOptionsWrapperNewPositionObject({
      selectRef,
      selecOptionstRef
    }).then((newPosition) => {
      if (newPosition !== null)
        setPosition((oldPosition) => {
          if (oldPosition.boundary !== newPosition.boundary) return newPosition;
          return oldPosition;
        });
    });
  };
  useEffect(() => {
    calculateSelectSpace({ selectRef, selecOptionstRef }).then(({ rect }) => {
      setPosition({
        top: rect.height,
        left: 0,
        boundary: "below"
      });
    });
    handleScroll();
    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  useEffect(() => {
    calculateSelectSpace({ selectRef, selecOptionstRef }).then(
      ({ rect, rectOptions }) => {
        setPosition({
          top: rect.height,
          left: 0,
          boundary: "below"
        });
        if (selecOptionstRef.current.children.length <= 0) return;
        if (position && position.boundary === "above") {
          setPosition({
            top: -rectOptions.height,
            left: 0,
            boundary: "above"
          });
        }
        if (position && position.boundary === "below" || searchValue.length == 0) {
          generateOptionsWrapperNewPositionObject({
            selectRef,
            selecOptionstRef
          }).then((newPosition) => {
            if (newPosition !== null) setPosition(newPosition);
          });
        }
      }
    );
  }, [searchValue]);
  return position;
}
const generateOptionsWrapperNewPositionObject = async ({
  selectRef,
  selecOptionstRef
}) => {
  if (selectRef.current && selecOptionstRef.current) {
    const {
      rect,
      rectOptions,
      spaceBelowWithOptionsHeight,
      spaceAbove,
      spaceAboveWithOptionsHeight
    } = await calculateSelectSpace({ selectRef, selecOptionstRef });
    return spaceAbove > spaceBelowWithOptionsHeight && !(0 > spaceAboveWithOptionsHeight) ? {
      top: -rectOptions.height,
      left: 0,
      boundary: "above"
    } : 0 > spaceAboveWithOptionsHeight ? { top: rect.height, left: 0, boundary: "below" } : null;
  }
};
const calculateSelectSpace = async ({ selectRef, selecOptionstRef }) => {
  const rect = await selectRef.current.getBoundingClientRect();
  const rectOptions = await selecOptionstRef.current.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const componentHeight = rect.height + rectOptions.height;
  const spaceBelowWithOptionsHeight = windowHeight - componentHeight;
  const spaceAbove = rect.top;
  const spaceAboveWithOptionsHeight = spaceAbove - rectOptions.height;
  return {
    rect,
    rectOptions,
    spaceBelowWithOptionsHeight,
    spaceAbove,
    spaceAboveWithOptionsHeight
  };
};
const useClickListenerEffect = ({ isOpen, callback }) => {
  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("click", (e) => callback(e));
    return () => {
      document.removeEventListener("click", (e) => callback(e));
    };
  }, [isOpen]);
};

export { generateOptionsWrapperNewPositionObject, useClickListenerEffect, useSelectDropdownNewPositionHook };
