import { Alert as _Alert } from "@uikit/ds-alert";
import { Component } from "@atomico/react/preact";
export const Alert: Component<typeof _Alert>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-alert": Component<typeof _Alert>;
   }
}