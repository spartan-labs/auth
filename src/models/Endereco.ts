class Endereco {
    private _rua: String;
    private _numero: String;
    private _cidade: String;
    private _estado: String;
    private _pais:String;


    get rua(): String {
        return this._rua;
    }

    set rua(value: String) {
        this._rua = value;
    }

    get numero(): String {
        return this._numero;
    }

    set numero(value: String) {
        this._numero = value;
    }

    get cidade(): String {
        return this._cidade;
    }

    set cidade(value: String) {
        this._cidade = value;
    }

    get estado(): String {
        return this._estado;
    }

    set estado(value: String) {
        this._estado = value;
    }

    get pais(): String {
        return this._pais;
    }

    set pais(value: String) {
        this._pais = value;
    }
}