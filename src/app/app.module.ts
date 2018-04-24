import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { SpinnerModule } from 'primeng/spinner';
// import { CalendarModule } from 'primeng/calendar';
import { ImportsModule } from './modulos/imports/imports.module';
import { AppComponent } from './app.component';
import { InputComponent } from './componentes/input/input.component';
import { HomeComponent } from './componentes/home/home.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { GrillaComponent } from './componentes/grilla/grilla.component';
import { GrillaResponsiveComponent } from './componentes/grilla-responsive/grilla-responsive.component';
import { CompComponent } from './componentes/comp/comp.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },  
  { path: 'componentes',      component: CompComponent,
    children: [
      { path: 'tabla', component: TablaComponent },
      { path: 'grilla', component: GrillaComponent },
      { path: 'grillaResponsive', component: GrillaResponsiveComponent }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    TablaComponent,
    GrillaComponent,
    GrillaResponsiveComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    // SpinnerModule,
    // CalendarModule
    ImportsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
