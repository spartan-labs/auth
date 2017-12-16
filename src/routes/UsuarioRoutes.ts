import * as express from 'express'

import UsuarioController from "../controllers/UsuarioController";
import BCrypt from "../util/security/BCrypt";

const router = express.Router();
let usuarioCtrl = new UsuarioController();

router.get('/:context', (req, res) => {
    let bcrypt = new BCrypt();
    return res.json({hash: `Hash de ${req.params.context} ${bcrypt.construir(req.params.context)}`});
});


router.post('/:context/login', (req, res) => {
    let bcrypt = new BCrypt(req.get("Authorization"));

    if (bcrypt.verificar()) {
        if (bcrypt.contexto.name == req.params.context) {
            return res.json(usuarioCtrl.retreaveAll());
        }
    }
    return res.json({mensagem: "nao autorizado, fora do contexto"})
});

router.get('/welcome', (req, res) => {
    return res.json({message: "bem-vindo"});

});

export function UsuarioRoutes() {
    return router;
}