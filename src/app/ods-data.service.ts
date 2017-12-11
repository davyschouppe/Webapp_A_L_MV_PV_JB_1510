import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {Od} from './ods/od.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OdsDataService {
  private _appUrl = '/API/ontwikkelingsdoelen/';
  private _ods = new Array<Od>();

  constructor(private http: Http, private auth: AuthenticationService) {
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
    return this.http.delete('/API/ontwikkelingsdoelen/' + id);
  }

  addOd(od): Observable<Od> {
    return this.http.post(this._appUrl, od, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(res => res.json()).map(item => Od.fromJSON(item));
  }

  editOd(od: Od) {
    return this.http.put('/API/ontwikkelingsdoelen/' + od.id, od.toJSON(), { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
  }
}
