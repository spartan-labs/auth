import BCrypt from "../util/security/BCrypt";
import {UsuarioService} from '../service/UsuarioService';

export class UsuarioController {

    static login = function (req, res) {
        return res.json(new UsuarioService(req.params.context).validar(req.body))
    };

    static faz = function (req, res) {
        return res.json(new BCrypt().construir(req.params.context))
    }
}