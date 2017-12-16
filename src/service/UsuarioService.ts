export class UsuarioService {

    private _context;

    constructor(context:any) {
        this._context = context;
    }

    validar(){
        return {msg: "validou"}
    }
}