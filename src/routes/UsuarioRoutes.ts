import UsuarioController from "../controllers/UsuarioController";
import BCrypt from "../util/security/BCrypt";

const usuarioCtrl = new UsuarioController();



export function UsuarioRoutes(app) {

    app.route('/:context/login')
        .post(usuarioCtrl.login)
        .get(usuarioCtrl.faz);

}