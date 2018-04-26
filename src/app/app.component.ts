import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  constructor( private router: Router) {

  }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        // routerLink: ['/home']
        command: e => {
          this.router.navigateByUrl('/home');
        }
      },
      {
        label: 'PrimeNG',
        items: [
            {
              label: 'Modulo',
              command: e => {
                this.router.navigateByUrl('/primeng/modulos');
              }
            }
        ]
      },
      {
        label: 'Componentes',
        items: [{
                label: 'Grillas',
                icon: 'fa-plus',
                items: [
                    {
                      label: 'Responsive',
                      command: e => {
                        this.router.navigateByUrl('/componentes/grillaResponsive');
                      }
                    },
                    {label: 'No Responsive'},
                ]
            },
            {
              label: 'Tabla',
              command: e => {
                this.router.navigateByUrl('/componentes/tabla');
              }
            }
        ]
      },
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'fa-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'fa-edit',
          items: [
              {label: 'Undo', icon: 'fa-mail-forward'},
              {label: 'Redo', icon: 'fa-mail-reply'}
          ]
      }
    ];
  }
}
