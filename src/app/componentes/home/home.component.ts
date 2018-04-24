import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Object[];

  msgs: Object[];
  constructor() {
    this.msgs = [];
        this.cars = [
            {vin: 'r3278r2', year: 2010, brand: 'cage', color: 'Black'},
            {vin: 'jhto2g2', year: 2015, brand: 'daredevil', color: 'White'},
            {vin: 'h453w54', year: 2012, brand: 'fist', color: 'Blue'},
            {vin: 'g43gwwg', year: 1998, brand: 'ironman', color: 'White'},
            {vin: 'gf45wg5', year: 2011, brand: 'Jessica_Jones', color: 'Red'},
            {vin: 'gf45wg5', year: 2011, brand: 'mho', color: 'Red'}
        ];
  }

  ngOnInit() {
  }
  selectCar(car: Object) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car['vin']});
  }
}
