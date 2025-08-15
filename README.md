# Design System UI Kit 

UI Kit pattern library based on Web Components

- Atomico con Shadow DOM.
- Vite para bulding.
- Web Test Runner/atomico-dom para test.
- Storybook para documentación.
- Styled dictionary para tokens.
- Npm Workspaces para administración de MonoRepo Multipackages.

⚠️ ⚠️ **IMPORTANTE** ⚠️ ⚠️: Para poder usar npm workspaces se debe tener instalada la **versión 7 de npm.**
Para consultar la versión de Node que posee actualmente ejecutar ` node -v ` en su terminal.
Para actualizar la versión de Node puede realizarlo via Homebrew con `brew upgrade node ` o con el administrador de paquetes de node `sudo n latest`

## Instalación

En la **raiz del proyecto** ejecutamos:</strong>

````
npm install --workspaces
````

### Levantar un paquete en modo desarrollo

`````
npm run start <path-to-packages> // <path-to-packages> => packages/ds-button
`````

### Build

#### Exports
Generará los archivos de exportación ( production ) para ser consumidos desde alguna app.

`````
<!-- Exports de un componente -->
npm run build:exports <path-to-packages> // <path-to-packages> => packages/ds-button

<!-- Exports de todos los componentes -->
npm run exports-all
`````

`````
<!-- Build de un componente -->
npm run build <path-to-packages> // <path-to-packages> => packages/ds-button

<!-- Build de todos los componentes -->
npm run build-all
`````

### Storybook
Storybook nos permitirá publicar la documentación asociada a nuestros web componente, encontraremos aqui instrucciones de instalación, detalles de la funcionalidad de nuestro componente, atributos, propiedades, eventos y propiedades css asociadas.

`````
npm run storybook
`````

### Chromatic
-- TODO -- 
Chromatic es una herramienta que nos permite realizar los test de regresión visual de nuestros componentes.
Se debe realizar siempre previo a un release a master, con el fin de comprobar en conjunto con el equipo de diseño que los componentes cumplen con los estandares de diseño y que no se ha pasado a llevar algun estilo que ya estaba aprobado. 
`````
npm run chromatic
`````

### Agregar dependencias a un paquete
Al trabajar con npm workspaces, para que las dependencias queden correctamente compartidas deben ser instaladas desde la raiz apuntando al paquete al cual se desean instalar, para mas información leer sobre <a href="https://docs.npmjs.com/cli/v7/using-npm/workspaces">npm workspaces</a> 

`````

npm run install <name-dependency> -w <path-to-package>

<!-- Ejemplo: Instalar una dependencia llamada 'dep' en el paquete ds-button -->
npm run install dep -w packages/ds-button
`````


### Test
- WIP - 

Los test están ambientados siguiendo las recomendaciones de uso de Web con: 
    - <a href="https://modern-web.dev/docs/test-runner/overview/"> Web Test Runner </a>,
    - <a href="https://open-wc.org/docs/testing/helpers/"> open-wc/testing </a>
    - esm-chai

Para ejecutar los test con coverage en todos los paquetes, ejecutar :

`````
npm run test-all 
`````

Para correr los test con coverage en un paquete en particular ejecutar :
`````
npm run test:coverage -w <path-to-package> 
`````

Para correr los test en *** modo watch ***  en un paquete en particular ejecutar :
`````
npm run test:watch -w <path-to-package>
`````

