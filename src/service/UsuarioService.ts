import Usuario from "../models/Usuario";
import {validate} from "class-validator";
import {error} from "util";

export class UsuarioService {

    private _context;

    constructor(context: any) {
        this._context = context;
    }

   validar(value: Object) {
        let pessoa = new Usuario(value);
        validate(pessoa).then(errors => {
            if (errors.length > 0) {
                let mensagem = [];
                errors.forEach(function (a) {
                    for (let inc in a.constraints) {
                        mensagem.push(a.constraints[inc])
                    }
                });
                console.log({msg:mensagem});
                return {msg: mensagem}
            }
            return {msg: "validou"}
        })
    }
}