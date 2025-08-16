# Tokens

Para generar los tokens executar :

````
npm run build
````

Para instalar los tokens en un paquete en desarrollo :
````
npm install @uikit/ds-tokens -w packages/ds-button
````

Para consumir los tokens en mis componentes :

```
import { c, css } from "atomico";
import tokens from '@uikit/ds-tokens';

Component.styles = [
    tokens,
    css`
        button {
            background-color: var(--ds-globals-color-primary);
        }
    `
]
```

## Uso y creación de distintas paletas de colores (`brandColor`)

El sistema de tokens permite definir y consumir múltiples paletas de colores de marca, facilitando la personalización de temas para distintos productos o marcas.

### ¿Cómo crear una nueva paleta de colores?

1. **Crea una carpeta para tu tema**  
   Dentro de `tokens/brandsColors/`, crea una carpeta con el nombre de tu nueva paleta (por ejemplo, `theme2`).

2. **Agrega archivos de definición**  
   Dentro de la carpeta de tu tema, agrega archivos como `color.json` y `brand.json` siguiendo la estructura de los temas existentes.  
   Ejemplo de estructura:
   ```
   tokens/
     brandsColors/
       theme1/
         color.json
         brand.json
       theme2/
         color.json
         brand.json
   ```

3. **Define los colores base en `color.json`**  
   Aquí defines los valores hexadecimales de los colores para tu tema:
   ```json
   {
     "ds": {
       "theme2": {
         "primary": {
           "10": { "value": "#E0F7FA" },
           "20": { "value": "#B2EBF2" }
           // ...
         }
       }
     }
   }
   ```

4. **Mapea los tokens en `brand.json`**  
   Aquí referencias los colores definidos en `color.json` usando la sintaxis `{ds.theme2.primary.10}`:
   ```json
   {
     "ds": {
       "primary": {
         "color": {
           "10": { "value": "{ds.theme2.primary.10}", "group": "brands" }
           // ...
         }
       }
     }
   }
   ```

### ¿Cómo consumir una paleta específica?

Al construir los tokens (`npm run build`), se generarán los archivos CSS y JS correspondientes a cada paleta definida.  
Puedes importar los tokens globales en tus componentes como se muestra en el ejemplo principal, y los valores de las variables CSS cambiarán según la paleta seleccionada.

### Ejemplo de estructura de carpetas

```
tokens/
  brandsColors/
    theme1/
      color.json
      brand.json
    theme2/
      color.json
      brand.json
```

### Notas

- Puedes crear tantas paletas como necesites, solo repite el proceso anterior para cada una.
- Asegúrate de mantener la misma estructura de archivos y referencias para que el sistema de build genere correctamente los tokens.
