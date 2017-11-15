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
        new Od(item._id, item.nr, item.beschrijving)
      )
    );
  }
  deleteOd(id: string) {
    console.log(id);
    return this.http.delete('http://localhost:4200/API/ontwikkelingsdoelen/' + id);
  }
  editOd(od: Od) {
    console.log(od);
    return this.http.put('http://localhost:4200/API/ontwikkelingsdoelen/' + od.id, od.toJSON());
  }
}
