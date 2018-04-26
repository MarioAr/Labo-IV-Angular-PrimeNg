import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerModule } from 'primeng/spinner';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { SliderModule} from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { StepsModule } from 'primeng/steps';
import { ProgressBarModule } from 'primeng/progressbar';
const modulos = [
  SpinnerModule,
  CalendarModule,
  MenubarModule,
  CarouselModule,
  TableModule,
  SliderModule,
  DropdownModule,
  MultiSelectModule,
  StepsModule,
  ProgressBarModule
];
@NgModule({
  imports: modulos,
  exports: modulos,
  declarations: []
})
export class ImportsModule { }
