export class Afbeelding {

    private _id: string;
    private _link: string;

    static fromJSON(json): Afbeelding {
        const rec = new Afbeelding(json.link);
        rec._id = json._id;
        return rec;
    }

    constructor(link: string) {
        this._link = link;
    }

    get link(): string {
        return this._link;
    }
    get id(): string {
        return this._id;
    }

    toJSON() {
        return {
            _id: this._id,
            link: this._link
        }
    }
}