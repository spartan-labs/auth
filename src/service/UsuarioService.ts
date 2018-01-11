import Usuario from "../models/Usuario";
import {validate} from "class-validator";
import UsuarioDAO from "../dao/UsuarioDAO";

export class UsuarioService {

    private _context;

    constructor(context: any) {
        this._context = context;
    }

    validar(value: Object, callback) {
        let pessoa = new Usuario(value);
        let mensagem: any = [];
        let tipo = "success";
        return validate(pessoa).then(errors => {
            if (errors.length > 0) {
                errors.forEach(function (a) {
                    for (let inc in a.constraints) {
                        mensagem.push(a.constraints[inc]);
                    }
                });
                tipo = "error";
            }
            mensagem = UsuarioDAO.retreaveAll();
            callback({type: tipo, msg: mensagem})
        });

    }
}