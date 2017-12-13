import * as express from 'express'
import {UsuarioRoutes} from "./routes/UsuarioRoutes";


class App {
    express: any;

    constructor() {
        this.express = express();
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = UsuarioRoutes();

        this.express.use('/usuario', router);
    }
}

export default new App().express
