abstract class Pessoa {

    private _nome:String;
    private _cpf:String;
    private _nascimento:String;
    private _endereco:Endereco;


    get nome(): String {
        return this._nome;
    }

    set nome(value: String) {
        this._nome = value;
    }

    get cpf(): String {
        return this._cpf;
    }

    set cpf(value: String) {
        this._cpf = value;
    }

    get nascimento(): String {
        return this._nascimento;
    }

    set nascimento(value: String) {
        this._nascimento = value;
    }

    get endereco(): Endereco {
        return this._endereco;
    }

    set endereco(value: Endereco) {
        this._endereco = value;
    }
}