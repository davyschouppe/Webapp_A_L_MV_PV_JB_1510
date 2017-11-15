import { Injectable } from '@angular/core';
import {Od} from './ods/od.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OdsDataService {
  private _appUrl = 'http://localhost:4200/API/ontwikkelingsdoelen/';
  private _ods = new Array<Od>();

  constructor(private http: Http) {
    // console.log(this._ods);
  }

  get ods(): Observable<Od[]> {
    return this.http.get(this._appUrl).map(response =>
      response.json().map(item =>
        new Od(item.nr, item.beschrijving, item._id)
      )
    );
  }
  deleteOd(id: string) {
    return this.http.delete('http://localhost:4200/API/ontwikkelingsdoelen/' + id);
  }

  addOd(od): Observable<Od> {
    return this.http.post(this._appUrl, od).map(res => res.json()).map(item => Od.fromJSON(item));

  editOd(od: Od) {
    console.log(od);
    return this.http.put('http://localhost:4200/API/ontwikkelingsdoelen/' + od.id, od.toJSON());
  }
}
