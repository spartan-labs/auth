import {
    IsEmail,MaxLength,
    MinLength
} from "class-validator";

export default class Usuario {
    @MaxLength(100, {
        message: "Email grande. O tamanho maximo é $constraint1 caracteres."
    })
    @IsEmail({}, {message: "Email em formato incorreto"})
    private _email: String;

    @MinLength(6, {
        message: "Senha curta. O tamanho minimo é $constraint1 caracteres."
    })
    @MaxLength(40, {
        message: "Senha grande. O tamanho maximo é $constraint1 caracteres."
    })
    private _senha: String;

    constructor(Usuario) {
        this._senha = Usuario.senha;
        this.email = Usuario.email;
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