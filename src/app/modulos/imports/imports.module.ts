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

let modulos = [
  SpinnerModule,
    CalendarModule,
    MenubarModule,
    CarouselModule,
    TableModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule
]
@NgModule({
  imports: modulos,
  exports: modulos,
  declarations: []
})
export class ImportsModule { }
