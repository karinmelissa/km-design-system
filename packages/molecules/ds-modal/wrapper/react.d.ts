import { Modal as _Modal } from "@karinmelissa/ds-modal";
import { Component } from "@atomico/react";
export const Modal: Component<typeof _Modal>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-modal": Component<typeof _Modal>;
   }
}