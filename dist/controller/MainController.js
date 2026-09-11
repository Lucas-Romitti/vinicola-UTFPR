"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vinho_1 = __importDefault(require("../model/Vinho"));
const Database_1 = __importDefault(require("../databases/Database"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class MainController {
    constructor() {
        this.database = new Database_1.default;
        new MainScreen_1.default(this);
    }
    getNewVinho() {
        return new Vinho_1.default("", 0, "tinto", "seco");
    }
    getAllBebidas() {
        return this.database.vinhos.join(", ");
    }
}
exports.default = MainController;
