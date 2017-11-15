export class Od {

  private _id: string;
  private _nr: number;
  private _beschrijving: string;

  static fromJSON(json): Od {
    const rec = new Od(json.nr, json.beschrijving, json._id);
    return rec;
  }

  constructor(nr: number, beschrijving: string, _id?: string) {
    this._id = _id;
    this._nr = nr;
    this._beschrijving = beschrijving;
  }

  get beschrijving(): string {
    return this._beschrijving;
  }
  set beschrijving(beschrijving: string) {
    this._beschrijving = beschrijving;
  }
  get nr(): number {
    return this._nr;
  }
  set nr(nr: number) {
    this._nr = nr;
  }
  get id(): string {
    return this._id;
  }

  toJSON() {
    return {
      nr: this._nr,
      beschrijving: this._beschrijving,
      _id: this._id,
    };
  }
}
