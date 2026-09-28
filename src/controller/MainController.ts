import Vinho from "../model/Vinho";
import Database from "../databases/Database";
import MainScreen from "../view/MainScreen";
import { number } from "@inquirer/prompts";

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

    public getAllVinhos(): Vinho[]{
        return this.database.vinhos
    }

    public getVinhosDescription(array: Vinho[]): string{
        let msg = ""
        array.forEach(vinho => {
            msg += vinho.description()
        });
        return msg
    }

    public getFilterVinhos(name: string): Vinho[];
    public getFilterVinhos(kind: "tinto" | "espumante" | "branco" | "rosé"): Vinho[];
    public getFilterVinhos(flavour: "seco" | "suave"): Vinho[];
    public getFilterVinhos(vol: number): Vinho[];
    public getFilterVinhos(a: string | number): Vinho[];
    public getFilterVinhos(a: string | number): Vinho[]{
        if (a === "seco" || a === "suave"){
            return this.database.vinhos.filter(b => b.getFlavour() === a)
        }
        else if(a === "tinto" || a === "espumante" || a === "branco" || a === "rosé" ){
            return this.database.vinhos.filter(b => b.getKind() === a)
        }
        else if(typeof a === "string"){
            return this.database.vinhos.filter(b => b.getName().trim().toLowerCase() === a.trim().toLowerCase())
        }
        else if(typeof a === "number"){
            return this.database.vinhos.filter(b => b.getVol() === a)
        }
        return []
    }

}