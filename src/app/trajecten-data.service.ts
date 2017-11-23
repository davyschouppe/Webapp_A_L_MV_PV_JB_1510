import { Injectable } from '@angular/core';
import { Traject } from './traject/traject.model';
import { Locatie } from './traject-locaties-detail/locatie.model';
import { Afbeelding } from './traject-locaties-detail/afbeelding.model';
import { Afspraak } from './afspraken/afspraak.model';
import { Od } from './ods/od.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrajectenDataService {
  private _appUrl = 'http://localhost:4200/API/';
  private _trajecten = new Array<Traject>();

  constructor(private http: Http) { }

  get trajecten(): Observable<Traject[]> {
    return this.http.get(`${this._appUrl}/trajecten`)
      .map(response => response.json().map(item => Traject.fromJSON(item)));
  }

  getTraject(id): Observable<Traject> {
    return this.http.get(`${this._appUrl}/trajecten/${id}`)
      .map(response => response.json()).map(item => Traject.fromJSON(item));
  }

  deleteTraject(id: string) {
    console.log(id);
    return this.http.delete(`${this._appUrl}/trajecten/${id}`);
  }
  deleteLocatie(lid:string, tid: string) {
    console.log(tid + "/" + lid);
    return this.http.delete(`${this._appUrl}/trajecten/${tid}/locaties/${lid}`);
  }
  deleteAfbeelding(trajectid:string, locatieid: string, afbeeldingid: string) {
    console.log(trajectid + "/" + locatieid + "/" + afbeeldingid);
    return this.http.delete(`${this._appUrl}/trajecten/${trajectid}/locaties/${locatieid}/afbeeldingen/${afbeeldingid}`);
  }
  deleteAfspraak(trajectid:string, afspraakid: string) {
    console.log(trajectid + "/" + afspraakid);
    return this.http.delete(`${this._appUrl}/trajecten/${trajectid}/afspraken/${afspraakid}`);
  }
  deleteOd(trajectid:string, odid: string) {
    console.log(trajectid + "/" + odid);
    return this.http.delete(`${this._appUrl}/trajecten/${trajectid}/ontwikkelingsdoelen/${odid}`);
  }

  addTraject(traject): Observable<Traject> {
    return this.http.post(`${this._appUrl}/trajecten`, traject)
      .map(res => res.json()).map(item => Traject.fromJSON(item));
  }
  addLocatie(locatie, id: string): Observable<Locatie> {
    return this.http.post(`${this._appUrl}/trajecten/${id}/locaties`, locatie)
      .map(res => res.json()).map(item => Locatie.fromJSON(item));
  }
  addAfbeelding(trajectid: string, locatieid: string, afbeelding): Observable<Afbeelding> {
    return this.http.post(`${this._appUrl}/trajecten/${trajectid}/locaties/${locatieid}/afbeeldingen`, afbeelding)
      .map(res => res.json()).map(item => Afbeelding.fromJSON(item));
  }
  addAfspraak(afspraak, id: string): Observable<Afspraak> {
    return this.http.post(`${this._appUrl}/trajecten/${id}/afspraken`, afspraak)
      .map(res => res.json()).map(item => Afspraak.fromJSON(item));
  }
  addOd(od, id: string): Observable<Od> {
    return this.http.post(`${this._appUrl}/trajecten/${id}/ontwikkelingsdoelen`, od)
      .map(res => res.json()).map(item => Od.fromJSON(item));
  }
}
