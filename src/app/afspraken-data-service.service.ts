import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {Afspraak} from './afspraken/afspraak.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AfsprakenDataServiceService {
  private _appUrl = '/API/afspraken/';
  private _afspraken = new Array<Afspraak>();

  constructor(private http: Http, private auth: AuthenticationService) {
    // console.log(this._ods);
  }

  get afspraken(): Observable<Afspraak[]> {
    return this.http.get(this._appUrl).map(response =>
      response.json().map(item =>
        new Afspraak(item.icon, item.beschrijving, item._id)
      )
    );
  }

  editAfspraak(afspraak) {
      return this.http.put('/API/afspraken/' + afspraak.id, afspraak.toJSON(), { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
    }

  addAfspraak(afspraak): Observable<Afspraak> {
    return this.http.post(this._appUrl, afspraak, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(res => res.json()).map(item => Afspraak.fromJSON(item));
  }

  deleteAfspraak(id: string) {
    return this.http.delete('/API/afspraken/' + id);
  }
}
