import * as express from 'express'
import UsuarioController from "../controllers/UsuarioController";

const router = express.Router();
let usuarioCtrl = new UsuarioController();

router.get('/', (req, res) => {
    return res.json(usuarioCtrl.retreaveAll());
});

router.get('/:context/login', (req, res) => {
    return res.json(usuarioCtrl.retreaveAll());
});

router.get('/welcome', (req, res) => {
    return res.json({message: "bem-vindo"});

});

export function UsuarioRoutes() {
    return router;
}