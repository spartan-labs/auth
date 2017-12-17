import * as express from 'express'
import * as bodyParser from 'body-parser';
import {UsuarioRoutes} from "./routes/UsuarioRoutes";
import {Contexto} from "./util/security/Contexto";


class App {
    express: any;

    constructor() {
        this.express = express();
        this.mountRoutes()
    }

    private mountRoutes(): void {
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(bodyParser.json());
        this.express.use('/:context/', Contexto.verificar);
        // for (let i = 0; i < Routes().length; i++) {
        //     this.express('/', Routes()[i]);
        // }
        UsuarioRoutes(this.express)

    }
}

export default new App().express
