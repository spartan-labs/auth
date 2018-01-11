import * as rethink from 'rethinkdb'
import * as fs from "fs";

export default class UsuarioDAO {

    static retreaveAll() {
        let conf = JSON.parse(fs.readFileSync('./src/util/security/contexts.json', 'utf8'));
        console.log(conf.contexts[0].bd);
        return "funcionou"
    }
}