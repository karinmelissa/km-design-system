import { Input as _Input } from "@unity/uny-input";
import { Component } from "@atomico/react";
export const Input: Component<typeof _Input>;
declare namespace JSX {
   interface IntrinsicElements{
      "uny-input": Component<typeof _Input>;
   }
}