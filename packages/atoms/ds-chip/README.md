# Chip - Web Component

<span>
  <img
    alt="Version"
    src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"
  />
</span>

Los chip son elementos interactivos que permiten al usuario seleccionar y deseleccionar tags. Este tiene como elementos un icono y texto.

## Tabla de Contenido

- [Instalación](#instalación)
- [Overview](#overview)
- [Frameworks](#frameworks)

## Instalación

```
npm install @uikit/ds-chip
```

## Overview

#### Propiedades

<table>
  <thead class="docblock-argstable-head">
    <tr>
      <th>
        <span>Nombre</span>
      </th>
      <th>
        <span>Descripción</span>
      </th>
      <th>
        <span>Tipo</span>
      </th>
      <th>
        <span>Valor por defecto</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="css-4lbn0a">
        <span class="css-in3yi3">aria-label</span>
      </td>
      <td>
        <div class="css-1f9domv">
          <div class="css-13nzt7e">
            <span class="css-o1d7ko">
              Es un atributo en HTML que se utiliza para proporcionar una
              etiqueta o descripción para un elemento
            </span>
          </div>
        </div>
      </td>
      <td>
        <div class="css-13nzt7e">
          <span class="css-o1d7ko">String</span>
        </div>
      </td>
      <td>
        <div class="css-13nzt7e">
          <span class="css-o1d7ko">"chip"</span>
        </div>
      </td>
    </tr>
    <tr>
      <td class="css-4lbn0a">
        <span class="css-in3yi3">selected</span>
      </td>
      <td>
        <div class="css-1f9domv">
          <div class="css-13nzt7e">
            <span class="css-o1d7ko">
              Se utiliza para establecer o devolver el estado selected del
              elemento. Si estableces selected = true , el elemento estará
              seleccionado; si estableces selected = false , el elemento no
              estará seleccionado. Este atributo irá alternándose a través del
              evento ´click´ true/false
            </span>
          </div>
        </div>
      </td>
      <td>
        <div class="css-13nzt7e">
          <span class="css-o1d7ko">Boolean</span>
        </div>
      </td>
      <td>
        <div class="css-13nzt7e">
          <span class="css-o1d7ko">false</span>
        </div>
      </td>
    </tr>
    <tr>
      <td class="css-4lbn0a">
        <span class="css-in3yi3">disabled</span>
      </td>
      <td>
        <div class="css-1f9domv">
          <div class="css-13nzt7e">
            <span class="css-o1d7ko">
              Se utiliza para establecer o devolver el estado disabled del
              elemento. Si estableces disabled = true , el elemento estará
              deshabilitado; si estableces disabled = false , el elemento estará
              habilitado.
            </span>
          </div>
        </div>
      </td>
      <td>
        <div class="css-13nzt7e">
          <span class="css-o1d7ko">Boolean</span>
        </div>
      </td>
      <td>
        <div class="css-13nzt7e">
          <span class="css-o1d7ko">false</span>
        </div>
      </td>
    </tr>
    <tr>
      <td class="css-4lbn0a">
        <span class="css-in3yi3">globals</span>
      </td>
      <td>
        <div class="css-1f9domv">
          <div class="css-13nzt7e">
            <span class="css-o1d7ko">
              Se utiliza para establecer o devolver el estado globals del
              elemento. Si estableces globals = true , el elemento usará la
              paleta de colores globals ; si estableces globals = false , el
              elemento usará la paleta de color previamente cargada en el sitio.
            </span>
          </div>
        </div>
      </td>
      <td>
        <div class="css-13nzt7e">
          <span class="css-o1d7ko">Boolean</span>
        </div>
      </td>
      <td>
        <div class="css-13nzt7e">
          <span class="css-o1d7ko">false</span>
        </div>
      </td>
    </tr>
  </tbody>
</table>

#### Eventos

<table >
  <thead class="docblock-argstable-head">
    <tr>
      <th>
        <span>Nombre</span>
      </th>
      <th>
        <span>Descripción</span>
      </th>
        <th>
        <span>Callback</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="css-4lbn0a">
        <span class="css-in3yi3">click</span>
      </td>
      <td>
        <div class="css-1f9domv">
          <div class="css-13nzt7e">
            <span class="css-o1d7ko">
              Evento que disparado por la acción 'click'
            </span>
          </div>
        </div>
      </td>
   <td>
   <td>

    ```ts
    {
      readonly bubbles: boolean;
      readonly cancelable: boolean;
      readonly composed: boolean;
      readonly currentTarget: EventTarget | null;
      readonly defaultPrevented: boolean;
      readonly eventPhase: number;
      readonly isTrusted: boolean;
      readonly srcElement: EventTarget;
      readonly target: EventTarget;
      readonly timeStamp: number;
      readonly type: string;
    }
      ```

   </td>
   </td>
    </tr>

  </tbody>
</table>

#### Slots

<table style={{ width: "100%" }}>
  <thead class="docblock-argstable-head">
    <tr>
      <th>
        <span>Nombre</span>
      </th>
      <th>
        <span>Descripción</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="css-4lbn0a">
        <span class="css-in3yi3">icon</span>
      </td>
      <td>
        <div class="css-1f9domv">
          <div class="css-13nzt7e">
            <span class="css-o1d7ko">
              Se utiliza para el renderizado de un icono en el lado izquierdo
              del chip
            </span>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

##### Ejemplo

```html
<span slot="icon" class="mdi mdi-account-circle-outline"></span>
```

<table style={{ width: "100%" }} >
  <thead class="docblock-argstable-head">
    <tr>
      <th>
        <span>Nombre</span>
      </th>
      <th>
        <span>Descripción</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="css-4lbn0a">
        <span class="css-in3yi3"></span>
      </td>
      <td>
        <div class="css-1f9domv">
          <div class="css-13nzt7e">
            <span class="css-o1d7ko">
             Se utiliza para el renderizado de texto u contenido del
              chip
            </span>
          </div>
        </div>
      </td>
    </tr>

  </tbody>
</table>

##### Ejemplo

```html
<span>Portabilidad no clientes</span>
```

# Frameworks

### Web Components

```

import "@uikit/ds-chip"
```

```html
<ds-chip selected="true" disabled="false" globals="false">
  <span> Chip Text</span>
</ds-chip>
```

### Angular

Ejemplo de un componente de angular basado en @uikit/ds-chip

#### chip.component.html

```html
<ds-chip
  [id]="id"
  [selected]="selected"
  [globals]="globals"
  [disabled]="disabled"
  [disabled]="disabled"
  [aria-label]="arialLabel"
  (click)="handleClick($event)">
  <ng-content icon></ng-content>
  <ng-content></ng-content>
</ds-chip>
```

#### chip.component.ts

```ts
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import "@uikit/ds-chip";
@Component({
  selector: "app-chip",
  templateUrl: "./chip.component.html",
  styleUrls: ["./chip.component.scss"],
})
export class ChipComponent implements OnInit {
  @Output("onClick") onClick: EventEmitter<CustomEvent> =
    new EventEmitter<CustomEvent>();
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() globals: boolean = false;
  @Input() arialLabel: string = "chip";
  @Input() id: string = "chip";
  ngOnInit() {}
  handleClick(e: Event) {
    this.onClick?.emit(e as CustomEvent);
  }
}
```
