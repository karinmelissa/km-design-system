import { Modal as _Modal } from "@uikit/ds-modal";
import { Component } from "@atomico/react/preact";
export const Modal: Component<typeof _Modal>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-modal": Component<typeof _Modal>;
   }
}