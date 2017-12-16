import * as express from 'express'
import * as bodyParser from 'body-parser';
import {UsuarioRoutes} from "./routes/UsuarioRoutes";


class App {
    express: any;

    constructor() {
        this.express = express();
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = UsuarioRoutes();
        this.express.use(bodyParser.json())
        this.express.use('/', router);
    }
}
export default new App().express
