import { Select as _Select } from "@uikit/ds-select";
import { Component } from "@atomico/react/preact";
export const Select: Component<typeof _Select>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-select": Component<typeof _Select>;
   }
}