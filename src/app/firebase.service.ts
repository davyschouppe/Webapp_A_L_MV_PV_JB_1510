import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  private _leerlingen: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getLeerlingen() {
    this._leerlingen = this.db.list('leerlingen').valueChanges();
    console.log(this._leerlingen);
    return this._leerlingen;
  }

}
