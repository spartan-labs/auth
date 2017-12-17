import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";

export default class Usuario {

    @IsEmail()
    private _email: String;

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