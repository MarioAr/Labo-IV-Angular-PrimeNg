# Templates

Proyecto de ejemplo de inclusion de PrimeNg.

## Instalcion y configuracion de PrimeNg
1- Instalar primeng
npm install primeng --save
2- Instalar font-awesome
npm install font-awesome --save
3- Agrego los estilos en el .angular-cli.json
  "../node_modules/font-awesome/css/font-awesome.min.css",
  "../node_modules/primeng/resources/themes/omega/theme.css",
  "../node_modules/primeng/resources/primeng.min.css"
4- Importo las animaciones(en app.modules.ts) que son necesarias para ciertos componentes primeng.
import {BrowserAnimationsModule} from  @angular/platform-browser/animations';
5- Agrego el modulo al array improts
imports: [
    BrowserModule,
    CheckboxModule
  ]
## Utilizacion de componenetes PrimeNg
Los pasos siguientes aplican para la mayoria de los componentes PrimeNg
1- Importo el componente en el modulo principal
https://www.primefaces.org/primeng/#/spinner
import { SpinnerModule } from 'primeng/spinner';
2- Agrego el modulo en el array de dependencias
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SpinnerModule
  ]
3- Agrego el componente de PrimeNg en mi componente
<p-spinner size="30"></p-spinner>

## Creacion de un modulo exclusivo para importacion de PrimeNg
A veces es conveniente para mantener la claridad del codigo separar la aplicacion en varios modulos. En este caso podemos tener un modulo exclusivo para las importaciones de PrimeNg
1- Creo un modulo
ng g module modulos/imports
2- Quito todas las importaciones de PrimeNg del modulo principal
3- Agrego todas los modulos de PrimeNg en los array imports y exports del modulo creado ImportsModule.
imports: [
    SpinnerModule,
    CalendarModule
  ]
exports: [
    SpinnerModule,
    CalendarModule
  ]