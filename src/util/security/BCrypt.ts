import * as fs from 'fs';
import * as bcrypt from 'bcrypt-nodejs';

class BCrypt {
    private contextHash: String;
    private _contexto: String;

    constructor(contextHash: String) {
        this.contextHash = contextHash;
    }

    private lerContextos() {
        return JSON.parse(fs.readFileSync('./contexts.json', 'utf8'))
    }

    public verificar() {
        let contextos = this.lerContextos().contexts;
        let r = false;

        for (let i = 0; i < contextos.length; i++) {
            if (bcrypt.compareSync(contextos[i].module, this.contextHash) == true) {
                this._contexto = contextos[i];
                return true
            }
        }
        return false;
    }


    get contexto(): String {
        return this._contexto;
    }
}