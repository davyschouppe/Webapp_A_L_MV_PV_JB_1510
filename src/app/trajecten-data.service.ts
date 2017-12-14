import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Traject } from './traject/traject.model';
import { Locatie } from './traject-locaties-detail/locatie.model';
import { Afbeelding } from './traject-locaties-detail/afbeelding.model';
import { Afspraak } from './afspraken/afspraak.model';
import { Od } from './ods/od.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrajectenDataService {
  private _appUrl = '/API';
  private _trajecten = new Array<Traject>();

  constructor(private http: Http, private auth: AuthenticationService) { }

  get trajecten(): Observable<Traject[]> {
    //console.log(`${this._appUrl}/trajecten`);
    return this.http.get(`${this._appUrl}/trajecten`)
      .map(response => response.json().map(item => Traject.fromJSON(item)));
  }

  getTraject(id): Observable<Traject> {
    return this.http.get(`${this._appUrl}/trajecten/${id}`)
      .map(response => response.json()).map(item => Traject.fromJSON(item));
  }

  deleteTraject(id: string) {
    // console.log(id);
    return this.http.delete(`${this._appUrl}/trajecten/${id}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
  }
  deleteLocatie(lid:string, tid: string) {
    // console.log(tid + "/" + lid);
    return this.http.delete(`${this._appUrl}/trajecten/${tid}/locaties/${lid}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
  }
  deleteAfbeelding(trajectid:string, locatieid: string, afbeeldingid: string) {
    // console.log(trajectid + "/" + locatieid + "/" + afbeeldingid);
    return this.http.delete(`${this._appUrl}/trajecten/${trajectid}/locaties/${locatieid}/afbeeldingen/${afbeeldingid}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
  }
  deleteAfspraak(trajectid:string, afspraakid: string) {
    // console.log(trajectid + "/" + afspraakid);
    return this.http.delete(`${this._appUrl}/trajecten/${trajectid}/afspraken/${afspraakid}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
  }
  deleteOd(trajectid:string, odid: string) {
    // console.log(trajectid + "/" + odid);
    return this.http.delete(`${this._appUrl}/trajecten/${trajectid}/ontwikkelingsdoelen/${odid}`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
  }

  addTraject(traject): Observable<Traject> {
    return this.http.post(`${this._appUrl}/trajecten`, traject, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item => Traject.fromJSON(item));
  }
  addLocatie(locatie, id: string): Observable<Locatie> {
    return this.http.post(`${this._appUrl}/trajecten/${id}/locaties`, locatie, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item => Locatie.fromJSON(item));
  }
  uploadAfbeelding(trajectid: string, locatieid: string, afbeelding): Observable<Afbeelding> {
    return this.http.post(`${this._appUrl}/trajecten/${trajectid}/locaties/${locatieid}/afbeeldingen`, afbeelding, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item => Afbeelding.fromJSON(item));
  }
  addAfspraak(afspraak, id: string): Observable<Afspraak> {
    return this.http.post(`${this._appUrl}/trajecten/${id}/afspraken`, afspraak, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item => Afspraak.fromJSON(item));
  }
  addOd(od, id: string): Observable<Od> {
    return this.http.post(`${this._appUrl}/trajecten/${id}/ontwikkelingsdoelen`, od, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(res => res.json()).map(item => Od.fromJSON(item));
  }
}
