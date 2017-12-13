export default class Usuario {
    private _nome:String;
    private _email:String;
    private _senha:String;


    constructor(usuario) {
        this._nome = usuario.nome;
        this._email = usuario.email;
        this._senha = usuario.senha;
    }

    get nome(): String {
        return this._nome;
    }

    set nome(value: String) {
        this._nome = value;
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