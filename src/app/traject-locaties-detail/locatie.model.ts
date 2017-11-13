import { Afbeelding } from './afbeelding.model';

export class Locatie {

  private _id: string;
  private _fotos: Afbeelding[];
  private _beschrijving: string;

  constructor(_id: string, fotos: Afbeelding[], beschrijving: string) {
    this._id = _id;
    this._fotos = fotos;
    this._beschrijving = beschrijving;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }
  set beschrijving(beschrijving: string) {
    this._beschrijving = beschrijving;
  }
  get fotos(): Afbeelding[] {
    return this._fotos;
  }
  set fotos(fotos: Afbeelding[]) {
    this._fotos = fotos;
  }
  get id(): string {
    return this._id;
  }
}