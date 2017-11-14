import { Afbeelding } from './afbeelding.model';

export class Locatie {

  private _id: string;
  private _naam: string;
  private _afbeeldingen: Afbeelding[];

  static fromJSON(json): Locatie {
    const rec = new Locatie(json.naam, json.afbeeldingen);
    rec._id = json._id;
    return rec;
  }

  constructor(naam: string, afbeeldingen?: Afbeelding[]) {
    this._naam = naam;
    this._afbeeldingen = afbeeldingen;
  }

  get naam(): string {
    return this._naam;
  }
  set naam(naam: string) {
    this._naam = naam;
  }
  get afbeeldingen(): Afbeelding[] {
    return this._afbeeldingen;
  }
  set afbeeldingen(fotos: Afbeelding[]) {
    this._afbeeldingen = fotos;
  }
  get id(): string {
    return this._id;
  }

  toJSON() {
    return {
      _id: this._id,
      naam: this._naam,
      afbeeldingen: this._afbeeldingen,
    }
  }
}