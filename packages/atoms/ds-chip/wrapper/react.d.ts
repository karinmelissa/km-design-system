import { Chip as _Chip } from "@karinmelissa/ds-chip";
import { Component } from "@atomico/react";
export const Chip: Component<typeof _Chip>;
declare namespace JSX {
   interface IntrinsicElements{
      "ds-chip": Component<typeof _Chip>;
   }
}