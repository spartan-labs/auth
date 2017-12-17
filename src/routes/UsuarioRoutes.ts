import {UsuarioController} from "../controllers/UsuarioController";

export function UsuarioRoutes(app) {

    app.route('/:context/login')
        .post(UsuarioController.login)
        .get(UsuarioController.faz);

}