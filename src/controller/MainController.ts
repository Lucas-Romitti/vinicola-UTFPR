import Vinho from "../model/Vinho";
import Database from "../databases/Database";
import MainScreen from "../view/MainScreen";

export default class MainController {

    public database: Database = new Database
    
    constructor(){
        new MainScreen(this);
    }

    public getNewVinho(): Vinho{
        return new Vinho("", 0, "tinto", "seco");
    }

    public getAllBebidas(): string{
        return this.database.vinhos.join(", ")
    }
}