import BCrypt from "../util/security/BCrypt";
import {UsuarioService} from '../service/UsuarioService';

export default class UsuarioController {

    login = function (req, res) {
        return res.json(new UsuarioService(req.params.context).validar())
    }

    faz = function (req, res) {
        return res.json(new BCrypt().construir(req.params.context))
    }
}