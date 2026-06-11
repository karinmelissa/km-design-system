import { Checkbox as _Checkbox } from "@karinmelissa/ds-checkbox/index2";
import { Component } from "@atomico/react/preact";
export const Checkbox: Component<typeof _Checkbox>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-checkbox": Component<typeof _Checkbox>;
   }
}