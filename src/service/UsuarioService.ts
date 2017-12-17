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
                console.log("validation failed. errors: ", errors);
            } else {
                console.log("validation succeed");
            }
        })
        return {msg: "validou"}
    }
}