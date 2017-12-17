import BCrypt from "./BCrypt";

export class Contexto {

    static verificar(req, res, next) {
        let header = req.get("Authorization");
        let bcrypt = new BCrypt(header);

        if (bcrypt.verificar()) {
            if (bcrypt.contexto.name == req.params.context) {
                return next();
            }
        }
        return res.status.unauthenticated("Não autorizado, fora do contexto");
    }
}