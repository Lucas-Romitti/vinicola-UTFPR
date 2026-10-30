"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estoque_1 = __importDefault(require("./Estoque"));
class EstoqueCM extends Estoque_1.default {
    constructor(estoque, pratosdefined) {
        super(estoque.getPratos(), estoque.getCopos(), estoque.getTacas(), estoque.getTalheres());
        this.estoque = estoque;
        this.pratosdefined = pratosdefined;
    }
    setEstoqueRS(estoqueRS) {
        this.estoqueRS = estoqueRS;
    }
    getEstoqueRS() {
        return this.estoqueRS;
    }
    getPratosDefined() {
        return this.pratosdefined;
    }
    setPratosDefined(valor) {
        this.pratosdefined = valor;
    }
    getPratos() {
        const estoqueRS = this.getEstoqueRS();
        if (this.getPratosDefined()) {
            return super.getPratos();
        }
        if (estoqueRS !== undefined) {
            return this.estoque.getPratos() - estoqueRS.getPratos();
        }
        return 0;
    }
}
exports.default = EstoqueCM;
