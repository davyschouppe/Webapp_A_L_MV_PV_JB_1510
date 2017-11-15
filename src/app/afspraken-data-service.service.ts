import { Injectable } from '@angular/core';
import {Afspraak} from './afspraken/afspraak.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AfsprakenDataServiceService {
  private _appUrl = 'http://localhost:4200/API/afspraken/';
  private _afspraken = new Array<Afspraak>();

  constructor(private http: Http) {
    // console.log(this._ods);
  }

  get afspraken(): Observable<Afspraak[]> {
    return this.http.get(this._appUrl).map(response =>
      response.json().map(item =>
        new Afspraak(item._id, item.icon, item.beschrijving)
      )
    );
  }
  deleteAfspraak(id: string) {
    return this.http.delete('http://localhost:4200/API/afspraken/' + id);
  }
}
