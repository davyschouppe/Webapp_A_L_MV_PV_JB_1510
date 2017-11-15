export class Afspraak {

  private _id: string;
  private _icon: string;
  private _beschrijving: string;

  static fromJSON(json): Afspraak {
    const rec = new Afspraak(json._id, json.icon, json.beschrijving);
    return rec;
  }

  constructor(_id: string, icon: string, beschrijving: string) {
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
  get icon(): string {
    return this._icon;
  }
  set icon(icon: string) {
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
