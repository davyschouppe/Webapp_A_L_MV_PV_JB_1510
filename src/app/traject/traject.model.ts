import { Od } from '../ods/od.model';
import { Afspraak } from '../afspraken/afspraak.model';
import { Locatie } from '../traject-locaties-detail/locatie.model';

export class Traject {

    private _id: string;
    private _naam: string;
    private _ontwikkelingsdoelen: Od[];
    private _afspraken: Afspraak[];
    private _locaties: Locatie[];

    static fromJSON(json): Traject {
        const rec = new Traject(json.naam, json.ontwikkelingsdoelen, json.afspraken, json.locaties);
        rec._id = json._id;
        return rec;
    }

    constructor(naam: string, ods?: Od[], afspraken?: Afspraak[], locaties?: Locatie[]) {
        this._naam = naam;
        this._ontwikkelingsdoelen = ods;
        this._afspraken = afspraken;
        this._locaties = locaties;
    }
    get naam(): string {
        return this._naam;
    }
    set naam(naam: string) {
        this._naam = naam;
    }

    get ods(): Od[] {
        return this._ontwikkelingsdoelen;
    }
    set ods(ods: Od[]) {
        this._ontwikkelingsdoelen = ods;
    }

    get afspraken(): Afspraak[] {
        return this._afspraken;
    }
    set afspraken(afspraken: Afspraak[]) {
        this._afspraken = afspraken;
    }

    get locaties(): Locatie[] {
        return this._locaties;
    }
    set locaties(locaties: Locatie[]) {
        this._locaties = locaties;
    }

    get id(): string {
        return this._id;
    }

    toJSON() {
        return {
            _id: this._id,
            naam: this._naam,
            ontwikkelingsdoelen: this._ontwikkelingsdoelen,
            afspraken: this._afspraken,
            locaties: this._locaties
        }
    }
}