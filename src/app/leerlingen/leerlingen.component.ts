import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-leerlingen',
  templateUrl: './leerlingen.component.html',
  styleUrls: ['./leerlingen.component.css'],
  providers: [ FirebaseService ]
})
export class LeerlingenComponent implements OnInit {
  leerlingen: any[];

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.getLeerlingen().subscribe(items => {
      this.leerlingen = items;
    });
  }

}
