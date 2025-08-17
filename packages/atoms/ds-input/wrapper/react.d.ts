import { Input as _Input } from "@uikit/ds-input";
import { Component } from "@atomico/react";
export const Input: Component<typeof _Input>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-input": Component<typeof _Input>;
   }
}