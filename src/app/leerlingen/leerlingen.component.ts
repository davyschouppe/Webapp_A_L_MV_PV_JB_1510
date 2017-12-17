import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-leerlingen',
  templateUrl: './leerlingen.component.html',
  styleUrls: ['./leerlingen.component.css'],
  providers: [ FirebaseService ]
})
export class LeerlingenComponent implements OnInit {
  // leerlingen = new Array<Object>();
  leerlingen: any;

  constructor(private _firebaseService: FirebaseService) {
    // this.leerlingen = [{'fname': 'Jef', 'lname': 'Braem'},
    // {'fname': 'Davy', 'lname': 'Schouppe'},
    // {'fname': 'Dimmy', 'lname': 'Maenhout'},
    // {'fname': 'Jorit', 'lname': 'Vergalle'},
    // {'fname': 'Brent', 'lname': 'Meuleman'},
    // {'fname': 'Bastian', 'lname': 'De Vilder'},
    // {'fname': 'Brend', 'lname': 'Simons'},
    // {'fname': 'Stijn', 'lname': 'Waumans'},
    // {'fname': 'Thomas', 'lname': 'Aelbrecht'}
    // ]
  }

  ngOnInit() {
    this._firebaseService.getLeerlingen().subscribe(items => {
      this.leerlingen = items;
      console.log(this.leerlingen);
    });
  }

}
