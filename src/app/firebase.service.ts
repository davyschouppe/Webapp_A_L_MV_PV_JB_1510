import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  private _leerlingen: Observable<any[]>;
  private _leerling: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this._leerlingen = this.db.list('leerlingen').valueChanges();
  }

  getLeerlingen() {
    console.log(this._leerlingen);
    return this._leerlingen;
  }

  getLeerling(id) {
    this._leerling = this.db.object('leerlingen/' + id).valueChanges();
    console.log(this._leerling);
    return this._leerling;
  }
}
