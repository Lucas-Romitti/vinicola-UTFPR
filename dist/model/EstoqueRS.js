"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estoque_1 = __importDefault(require("./Estoque"));
class EstoqueRS extends Estoque_1.default {
    constructor(estoque, pratosdefined) {
        super(estoque.getPratos(), estoque.getCopos(), estoque.getTacas(), estoque.getTalheres());
        this.estoque = estoque;
        this.pratosdefined = pratosdefined;
    }
    setEstoqueCM(estoqueCM) {
        this.estoqueCM = estoqueCM;
    }
    getEstoqueCM() {
        return this.estoqueCM;
    }
    getPratosDefined() {
        return this.pratosdefined;
    }
    setPratosDefined(valor) {
        this.pratosdefined = valor;
    }
    getPratos() {
        const estoqueCM = this.getEstoqueCM();
        if (this.getPratosDefined()) {
            return super.getPratos();
        }
        if (estoqueCM !== undefined) {
            return this.estoque.getPratos() - estoqueCM.getPratos();
        }
        return 0;
    }
}
exports.default = EstoqueRS;
