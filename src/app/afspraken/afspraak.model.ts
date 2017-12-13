import { Afbeelding } from '../traject-locaties-detail/afbeelding.model';

export class Afspraak {

  private _id: string;
  private _icon: Afbeelding;
  private _beschrijving: string;

  static fromJSON(json): Afspraak {
    const rec = new Afspraak(Afbeelding.fromJSON(json.icon), json.beschrijving);
    rec._id = json._id;
    return rec;
  }

  constructor(icon: Afbeelding, beschrijving: string, _id?: string) {
    this._id = _id;
    this._icon = icon;
    this._beschrijving = beschrijving;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }
  set beschrijving(beschrijving: string) {
    this._beschrijving = beschrijving;
  }
  get icon(): Afbeelding {
    return this._icon;
  }
  set icon(icon: Afbeelding) {
    this._icon = icon;
  }
  get id(): string {
    return this._id;
  }

  toJSON() {
    return {
      _id: this._id,
      icon: this._icon,
      beschrijving: this._beschrijving
    };
  }
}
