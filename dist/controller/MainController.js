"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vinho_1 = __importDefault(require("../model/Vinho"));
const Database_1 = __importDefault(require("../databases/Database"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
let vinhox = new Vinho_1.default("Pergola", 750, "tinto", "suave");
let vinhoy = new Vinho_1.default("Del Piero", 750, "tinto", "suave");
let vinhoz = new Vinho_1.default("Collina", 750, "rosé", "seco");
class MainController {
    constructor() {
        this.database = new Database_1.default;
        this.database.vinhos.push(vinhox, vinhoy, vinhoz);
        new MainScreen_1.default(this);
    }
    getNewVinho() {
        return new Vinho_1.default("", 0, "tinto", "seco");
    }
    getAllVinhos() {
        return this.database.vinhos;
    }
    getVinhosDescription(array) {
        let msg = "";
        array.forEach(vinho => {
            msg += vinho.description();
        });
        return msg;
    }
    getFilterVinhos(a) {
        if (a === "seco" || a === "suave") {
            return this.database.vinhos.filter(b => b.getFlavour() === a);
        }
        else if (a === "tinto" || a === "espumante" || a === "branco" || a === "rosé") {
            return this.database.vinhos.filter(b => b.getKind() === a);
        }
        else if (typeof a === "string") {
            return this.database.vinhos.filter(b => b.getName().trim().toLowerCase() === a.trim().toLowerCase());
        }
        else if (typeof a === "number") {
            return this.database.vinhos.filter(b => b.getVol() === a);
        }
        return [];
    }
}
exports.default = MainController;
