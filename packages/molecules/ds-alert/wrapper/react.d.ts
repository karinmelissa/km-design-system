import { Alert as _Alert } from "@karinmelissa/ds-alert";
import { Component } from "@atomico/react";
export const Alert: Component<typeof _Alert>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-alert": Component<typeof _Alert>;
   }
}