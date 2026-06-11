import { Button as _Button } from "@karinmelissa/ds-button";
import { Component } from "@atomico/react/preact";
export const Button: Component<typeof _Button>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-button": Component<typeof _Button>;
   }
}