import Usuario from "../models/Usuario";

export default class UsuarioDAO {

   static retreaveAll() {
       let usuario1:Usuario = new Usuario({
            nome: 'Marcio',
            email: 'marciioluucas@gmail.com',
            senha: '1231'
        });

        let usuario2:Usuario = new Usuario({
            nome: 'Lucas',
            email: 'lulucasfabio@gmail.com',
            senha: '1231'
        });

        return [usuario1, usuario2]

    }
}