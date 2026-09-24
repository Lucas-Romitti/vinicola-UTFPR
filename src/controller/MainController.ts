import Vinho from "../model/Vinho";
import Database from "../databases/Database";
import MainScreen from "../view/MainScreen";

let vinhox = new Vinho("Pergola", 750, "tinto", "suave");
let vinhoy = new Vinho("Del Piero", 750, "tinto", "suave");
let vinhoz = new Vinho("Collina", 750, "rosé", "seco");


export default class MainController {

    public database: Database = new Database
    
    constructor(){
        this.database.vinhos.push(vinhox, vinhoy, vinhoz);
        new MainScreen(this);
    }

    public getNewVinho(): Vinho{
        return new Vinho("", 0, "tinto", "seco");
    }

    public getAllVinhos(): string{
        let msg = ""
        this.database.vinhos.forEach(vinho => {
            msg += vinho.description()
        });
        return msg
    }

    public searchVinhos(name: string): Vinho[];
    public searchVinhos(kind: "tinto" | "espumante" | "branco" | "rosé"): Vinho[];
    public searchVinhos(type: "seco" | "suave"): Vinho[]{
        if(type == "seco" || type == "suave"){
            return this.database.vinhos.forEach(type (
                //termina essa cagada ( é pra pesquisar vinhos por tipo)
            ))
        }
    }
}