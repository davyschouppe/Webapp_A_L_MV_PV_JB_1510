import { Injectable } from '@angular/core';
import { Traject } from './traject/traject.model';
import { Locatie } from './traject-locaties-detail/locatie.model';
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

  addTraject(traject): Observable<Traject> {
    return this.http.post(`${this._appUrl}/trajecten`, traject)
      .map(res => res.json()).map(item => Traject.fromJSON(item));
  }
  addLocatie(locatie, id: string): Observable<Locatie> {
    return this.http.post(`${this._appUrl}/trajecten/${id}/locaties`, locatie)
      .map(res => res.json()).map(item => Locatie.fromJSON(item));
  }
}
