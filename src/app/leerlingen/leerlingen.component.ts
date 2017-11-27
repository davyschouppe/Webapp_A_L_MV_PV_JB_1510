import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leerlingen',
  templateUrl: './leerlingen.component.html',
  styleUrls: ['./leerlingen.component.css']
})
export class LeerlingenComponent implements OnInit {
  leerlingen = new Array<Object>();

  constructor() {
    this.leerlingen = [{'fname': 'Jef', 'lname': 'Braem'},
    {'fname': 'Davy', 'lname': 'Schouppe'},
    {'fname': 'Dimmy', 'lname': 'Maenhout'},
    {'fname': 'Jorit', 'lname': 'Vergalle'},
    {'fname': 'Brent', 'lname': 'Meuleman'},
    {'fname': 'Bastian', 'lname': 'De Vilder'},
    {'fname': 'Brend', 'lname': 'Simons'},
    {'fname': 'Stijn', 'lname': 'Waumans'},
    {'fname': 'Thomas', 'lname': 'Aelbrecht'}
    ]
  }

  ngOnInit() {
  }

}
