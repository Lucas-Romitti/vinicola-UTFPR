"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estoque_1 = __importDefault(require("../Estoque"));
const EstoqueCM_1 = __importDefault(require("../EstoqueCM"));
const EstoqueRS_1 = __importDefault(require("../EstoqueRS"));
const exE = new Estoque_1.default(100, 70, 70, 100);
const exCM = new EstoqueCM_1.default(exE, false);
const exRS = new EstoqueRS_1.default(exE, true);
exCM.setEstoqueRS(exRS);
exRS.setEstoqueCM(exCM);
exRS.setPratos(40);
test("Teste de Estoque no Casa Magda", () => {
    expect(exCM.getPratos()).toBe(60);
});
