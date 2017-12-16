export default class Usuario extends Pessoa {

    private _email: String;
    private _senha: String;

    constructor(_nome: String, _cpf: String, _nascimento: String, _endereco: Endereco, _email: String, _senha: String) {
        super();
        Object.assign(this, _nome, _cpf, _nascimento, _endereco, _email, _senha)
    }

    get email(): String {
        return this._email;
    }

    set email(value: String) {
        this._email = value;
    }

    get senha(): String {
        return this._senha;
    }

    set senha(value: String) {
        this._senha = value;
    }
}