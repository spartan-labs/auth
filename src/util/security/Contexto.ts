import BCrypt from "./BCrypt";

export class Contexto {

    static verificar(req, res, next) {
        let header = req.get("Authorization");
        let bcrypt = new BCrypt(header);

        if (bcrypt.verificar()) {
            if (bcrypt.contexto.name == req.params.context) {
                // let usuarioCtrl = new UsuarioController(bcrypt.contexto);
                // usuarioCtrl.login();
               return next();
            }
        }
       return res.json({mensagem: "nao autorizado, fora do contexto"})
    }
}