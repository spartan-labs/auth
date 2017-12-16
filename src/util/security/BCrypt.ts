import * as fs from 'fs';
import * as bcrypt from 'bcrypt-nodejs';

/*
 * Utilização da classe:
 * 1. Precisa instanciá-la, com a hash vinda da requisição para a verificação.
 * 2. Após a instancia, é preciso chamar o método verificar(), que retornara true se a
 *    hash anteoriormente passada for válida e false se não for.
 *
 * OBS: Para pegar o contexto da aplicação, utilizar o contexto.
*/
export default class BCrypt {
    private _contextHash: String;
    private _contexto: any;

    /*
    * O modulo manda a requisição com a hash de contexto encriptada
    */
    constructor(contextHash: String = "") {
        this._contextHash = contextHash;
    }

    /*
   * O módulo auth lê os contextos cadastrados no arquivo contexts.json
   */
    private lerContextos() {
        return JSON.parse(fs.readFileSync('./src/util/security/contexts.json', 'utf8'))
    }

    /*
   * Depois precisa chamar este método, que verifica se o contexto solicitado está cadastrado no arquivo contexts.json
   */
    public verificar() {
        let contextos = this.lerContextos().contexts;

        for (let i = 0; i < contextos.length; i++) {
            if (bcrypt.compareSync(contextos[i].name, this._contextHash) == true) {
                this._contexto = contextos[i];
                return true
            }
        }
        return false;
    }

    public construir(texto:String) {
        return bcrypt.hashSync(texto)
    }

    /*
       * Se precisar pegar o contexto depois, (para fazer o arquivo de configuração do banco, etc.)
       */
    get contexto(): any {
        return this._contexto;
    }
}