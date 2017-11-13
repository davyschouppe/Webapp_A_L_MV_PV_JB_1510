import { Injectable } from '@angular/core';
import { Traject } from './traject/traject.model';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrajectenDataService {
  private _appUrl = 'http://localhost:4200/API/trajecten/';
  private _trajecten = new Array<Traject>();

  constructor(private http: Http) {}

  get trajecten(): Observable<Traject[]> {
    return this.http.get(this._appUrl).map(response =>
      response.json().map(item =>
        new Traject(item._id, item.naam, item.ontwikkelingsdoelen, item.afspraken, item.locaties)
      )
    );
  }
  deleteTraject(id: string) {
    console.log(id);
    return this.http.delete('http://localhost:4200/API/trajecten/' + id);
  }
  addTraject(traject: Traject) {
    console.log('added: ' + traject.naam);
    return this.http.post('http://localhost:4200/API/trajecten/', traject);
  }
}
