# Button Web Component

Componente Button construido como Web Component usando [Atomico](https://atomico.gitbook.io/doc/).

## Versión

**Actual:** 1.0.0

### Notas de cambios (Changelog)

- v1.0.0: Versión inicial del componente Button.

---

## Estructura del componente

Un Web Component en este sistema se compone de los siguientes archivos principales:

- **src/components/Button.tsx**  
  Lógica y definición del componente Button.
  - **src/components/Button.test.ts**  
  Test unitarios de componente (vitest).
- **src/button.style.ts**  
  Definición de tokens CSS y estilos personalizados para variantes, estados y tamaños.
- **src/css/button.tokens.ts**  
  Tokens de estilos base para el botón (colores, bordes, etc).
- **src/index.tsx**  
  Punto de entrada del componente, define el custom element.
- **package.json**  
  Configuración del paquete, scripts y dependencias.


---

## Ejemplo de uso básico

```js
import { Button } from "@uikit/ds-button";

<Button variant="primary" size="medium">
  Click me
</Button>
```

O en HTML directamente:

```html
<ds-button variant="primary" size="medium">
    Click me
</ds-button>
 ```


## Personzalización
Puedes modificar variantes, tamaños y estados usando las props del componente:

- variant: "primary" | "secondary" | "tertiary"
- size: "small" | "medium" | "large"
- state: "default" | "error" | "warning" | "success" | "info"
- disabled: true | false

## ¿Cómo funciona?

- El componente se define usando la función c de Atomico.
- Los estilos se gestionan mediante tokens CSS y propiedades personalizadas, permitiendo fácil personalización y soporte para temas.
- El archivo button.style.ts permite sobreescribir tokens para variantes y estados.
- El componente es reutilizable y puede integrarse en cualquier proyecto compatible con Web Components.

## Notas para desarrolladores
- Mantén la estructura modular para facilitar la escalabilidad y reutilización.
- Usa tokens para todos los estilos críticos, permitiendo la personalización por tema.
- Documenta los cambios en la sección de changelog para futuras referencias.