import * as fs from 'fs'

export class JSONReader {
    private _path:string

    constructor(path:string) {
        this._path = path;
        return JSON.parse(fs.readFileSync(path, 'utf8'))
    }


    get path(): String {
        return this._path;
    }
}