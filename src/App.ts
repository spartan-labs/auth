import * as express from 'express'
import * as bodyParser from 'body-parser';
import * as JsonStatus from 'json-status';
import {UsuarioRoutes} from "./routes/UsuarioRoutes";
import {Contexto} from "./util/security/Contexto";


class App {
    express: any;

    constructor() {
        this.express = express();
        this.mountMiddlewares();
        this.mountRoutes()
    }

    private mountMiddlewares(): void {
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use(bodyParser.json());
        this.express.use(
            JsonStatus.connectMiddleware({
                namespace : "status",
                onError : function(data){
                    console.log("error: ", data.type, data.message, data.detail);
                }
            })
        );
        this.express.use('/:context/', Contexto.verificar);
    }

    private mountRoutes(): void {
        UsuarioRoutes(this.express)
    }
}

export default new App().express
