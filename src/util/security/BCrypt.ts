import * as fs from 'fs';
import * as bcrypt from 'bcrypt-nodejs';

class BCrypt {
    private contextHash: String;
    private _contexto: String;

    /*
    * O modulo manda a requisição com a hash de contexto encriptada
    */
    constructor(contextHash: String) {
        this.contextHash = contextHash;
    }

    /*
   * O módulo auth lê os contextos cadastrados no arquivo contexts.json
   */
    private lerContextos() {
        return JSON.parse(fs.readFileSync('./contexts.json', 'utf8'))
    }

    /*
   * Depois precisa chamar este método, que verifica se o contexto solicitado está cadastrado no arquivo contexts.json
   */
    public verificar() {
        let contextos = this.lerContextos().contexts;

        for (let i = 0; i < contextos.length; i++) {
            if (bcrypt.compareSync(contextos[i].module, this.contextHash) == true) {
                this._contexto = contextos[i];
                return true
            }
        }
        return false;
    }

    /*
       * Se precisar pegar o contexto depois, (para fazer o arquivo de configuração do banco, etc.)
       */
    get contexto(): String {
        return this._contexto;
    }
}