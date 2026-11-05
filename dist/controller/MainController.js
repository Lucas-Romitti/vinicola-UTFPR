"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vinho_1 = __importDefault(require("../model/Vinho"));
const Database_1 = __importDefault(require("../databases/Database"));
const CorVinho_1 = require("../model/enum/CorVinho");
const FilterError_1 = __importDefault(require("../errors/FilterError"));
let vinhox = new Vinho_1.default("Pergola", 750, CorVinho_1.ColorVinho.TINTO, "suave");
let vinhoy = new Vinho_1.default("Del Piero", 750, CorVinho_1.ColorVinho.TINTO, "suave");
let vinhoz = new Vinho_1.default("Collina", 750, CorVinho_1.ColorVinho.ROSE, "seco");
class MainController {
    constructor() {
        this.database = new Database_1.default;
        this.database.vinhos.push(vinhox, vinhoy, vinhoz);
    }
    getNewVinho() {
        return new Vinho_1.default("", 0, CorVinho_1.ColorVinho.TINTO, "seco");
    }
    getAllVinhos() {
        return this.database.vinhos;
    }
    getVinhosDescription(array) {
        let msg = "";
        array.forEach(vinho => {
            msg += vinho.getDescription();
        });
        return msg;
    }
    getFilterVinhos(a) {
        let array = [];
        if (a === "seco" || a === "suave") {
            array = this.database.vinhos.filter(b => b.getFlavour() === a);
        }
        else if (a === CorVinho_1.ColorVinho[1] || a === CorVinho_1.ColorVinho[2] || a === CorVinho_1.ColorVinho[3]) {
            array = this.database.vinhos.filter(b => b.getColor() === a);
        }
        else if (typeof a === "string") {
            array = this.database.vinhos.filter(b => b.getName().trim().toLowerCase() === a.trim().toLowerCase());
        }
        else if (typeof a === "number") {
            array = this.database.vinhos.filter(b => b.getVol() === a);
        }
        if (array.length === 0) {
            throw new FilterError_1.default("");
        }
        return array;
    }
}
exports.default = MainController;
