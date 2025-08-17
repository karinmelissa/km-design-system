import { SelectOption as _SelectOption } from "@uikit/ds-select/components/SelectOption";
import { Component } from "@atomico/react";
export const SelectOption: Component<typeof _SelectOption>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-select-option": Component<typeof _SelectOption>;
   }
}