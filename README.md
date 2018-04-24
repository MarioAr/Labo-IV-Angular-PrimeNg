# Templates

Proyecto de ejemplo de inclusion de PrimeNg.

## Instalación y configuración de [PrimeNg](https://www.primefaces.org/primeng)
1. Instalar PrimeNg:
```
npm install primeng --save
```
2. Instalar font-awesome:
```
npm install font-awesome --save
```
3. Agregar los estilos en el archivo .angular-cli.json:
```
styles; [
  "../node_modules/font-awesome/css/font-awesome.min.css",
  "../node_modules/primeng/resources/themes/omega/theme.css",
  "../node_modules/primeng/resources/primeng.min.css"
]
 ```
4. Importar las animaciones(en app.modules.ts) que son necesarias para ciertos componentes primeng:
```
import {BrowserAnimationsModule} from  @angular/platform-browser/animations';
```
5. Agregar el modulo al array imports:
```
imports: [
    BrowserModule,
    BrowserAnimationsModule
  ]
 ```
## Utilizacion de componenetes PrimeNg
Los pasos siguientes aplican para la mayoria de los componentes PrimeNg.
1. Importar el componente en el modulo principal:
```
import { SpinnerModule } from 'primeng/spinner';
```
2. Agregar el modulo en el array de dependencias:
```
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SpinnerModule
  ]
  ```
3. Agregar el componente de PrimeNg en mi componente:
```
<p-spinner size="30"></p-spinner>
```
## Creacion de un modulo exclusivo para importacion de PrimeNg
A veces es conveniente para mantener la claridad del codigo, separar la aplicacion en varios modulos. En este caso podemos tener un modulo exclusivo para las importaciones de PrimeNg.
1. Crear un modulo:
```
ng g module modulos/imports
```
2. Quitar todas las importaciones de PrimeNg del modulo principal.
3. Agregar todos los modulos de PrimeNg en los array imports y exports del modulo creado **ImportsModule**.
```
imports: [
    SpinnerModule,
    CalendarModule
  ]
exports: [
    SpinnerModule,
    CalendarModule
  ]
  ```
  4. Importar el modulo creado en el modulo principal (app.modules.ts):
 ```
  import { ImportsModule } from './modulos/imports/imports.module';
 ```
 5. Agregar el modulo en el array imports:
 ```
   imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImportsModule,
  ],
 ```
