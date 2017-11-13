import { Od } from '../ods/od.model';
import { Afspraak } from '../afspraken/afspraak.model';
import { Locatie } from '../traject-locaties-detail/locatie.model';

export class Traject {

    private _id: string;
    private _naam: string;
    private _ods: Od[];
    private _afspraken: Afspraak[];
    private _locaties: Locatie[];

    constructor(_id: string, naam: string, ods: Od[], afspraken: Afspraak[], locaties: Locatie[]) {
        this._id = _id;
        this._naam = naam;
        this._ods = ods;
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
        return this._ods;
    }
    set ods(ods: Od[]) {
        this._ods = ods;
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
}