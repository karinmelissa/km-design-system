## Historial de cambios

Si la versión publicada es por ejemplo la 1.0.0 la versión MAYOR cuando realizas un cambio incompatible en el API, =>
2.0.0 la versión MINOR cuando añades funcionalidad que compatible con versiones anteriores, y => 1.1.0 la versión PATCH
cuando reparas errores compatibles con versiones anteriores. => 1.0.1

### Versión <1.1.0>

Tipo : MINOR
Descripción de cambios : Migración a paleta v2 OKLCH. Se reemplazan los valores hex de los colores de marca (theme1–4) y feedback (success/error/warning/info) por valores perceptuales OKLCH. Se agregan tokens de escala tipográfica v2 (--ds-text-*, --ds-leading-*, --ds-tracking-*), gradientes de marca OKLCH (--ds-gradient-*) y capa semántica de dark mode (--ds-color-*) vía [data-mode="dark"] y prefers-color-scheme. Los nombres de variables CSS existentes se mantienen sin cambios; los archivos v2/*.css continúan disponibles como exportación independiente.
Fecha deploy : 13/06/2026

### Versión <>

Tipo : PATCH, MINOR, MAYOR Descripción de cambios : Se realiza ... Fecha deploy : dd/mm/yyyy

### Versión <1.0.0>

Tipo : 