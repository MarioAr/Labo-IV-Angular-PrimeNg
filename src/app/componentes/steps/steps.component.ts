import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepsComponent implements OnInit {

  items: MenuItem[];
  activeIndex; // = 0;
  valor = 0;
  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Instalar',
      command: (event: any) => {
        this.valor = 25;
        this.activeIndex = 0;
        }
      },
      {
          label: 'Estilos',
          command: (event: any) => {
            this.valor = 50;
            this.activeIndex = 1;
          }
      },
      {
          label: 'Importar',
          command: (event: any) => {
            this.valor = 75;
            this.activeIndex = 2;
          }
      },
      {
        label: 'Dependencias',
        command: (event: any) => {
          this.valor = 100;
          this.activeIndex = 3;
        }
    }
    //   {
    //       label: 'Confirmation',
    //       command: (event: any) => {
    //           this.activeIndex = 3;
    //           this.msgs.length = 0;
    //           this.msgs.push({severity: 'info', summary: 'Last Step', detail: event.item.label});
    //       }
    //   }
    ];
  }

}
