import Vinho from "../model/Vinho";
import Database from "../databases/Database";
import MainScreen from "../view/MainScreen";
import { number } from "@inquirer/prompts";
import { ColorVinho } from "../model/enum/CorVinho";
import FilterError from "../errors/FilterError";

let vinhox = new Vinho("Pergola", 750, ColorVinho.TINTO, "suave");
let vinhoy = new Vinho("Del Piero", 750, ColorVinho.TINTO, "suave");
let vinhoz = new Vinho("Collina", 750, ColorVinho.ROSE, "seco");


export default class MainController {

    public database: Database = new Database
    
    constructor(){
        this.database.vinhos.push(vinhox, vinhoy, vinhoz);
    }

    public getNewVinho(): Vinho{
        return new Vinho("", 0, ColorVinho.TINTO, "seco");
    }

    public getAllVinhos(): Vinho[]{
        return this.database.vinhos
    }

    public getVinhosDescription(array: Vinho[]): string{
        let msg = ""
        array.forEach(vinho => {
            msg += vinho.getDescription()
        });
        return msg
    }

    public getFilterVinhos(name: string): Vinho[];
    public getFilterVinhos(vol: number): Vinho[];
    public getFilterVinhos(a: string | number): Vinho[];
    public getFilterVinhos(a: string | number): Vinho[]{
        let array: Vinho[] = [];

            if (a === "seco" || a === "suave"){
                array =  this.database.vinhos.filter(b => b.getFlavour() === a)
            }
            else if(a === ColorVinho[1] || a === ColorVinho[2] || a === ColorVinho[3] ){
                array = this.database.vinhos.filter(b => b.getColor() === a)
            }
            else if(typeof a === "string"){
                array = this.database.vinhos.filter(b => b.getName().trim().toLowerCase() === a.trim().toLowerCase())
            }
            else if(typeof a === "number"){
                array = this.database.vinhos.filter(b => b.getVol() === a)
            }

            if(array.length === 0) {
            throw new FilterError("")
            }

            return array
        }

    }
