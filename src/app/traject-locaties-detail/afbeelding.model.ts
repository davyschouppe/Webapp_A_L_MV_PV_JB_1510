export class Afbeelding {

    private _link: string;

    constructor(link: string) {
        this._link = link;
    }

    get link(): string {
        return this._link;
    }
}