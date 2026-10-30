"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainController_1 = __importDefault(require("../../controller/MainController"));
const ex = new MainController_1.default();
test("Teste de Filtro", () => {
    expect(ex.getFilterVinhos("suave")).toEqual([
        {
            name: 'Pergola',
            vol: 750,
            color: 1,
            flavour: 'suave'
        },
        {
            name: 'Del Piero',
            vol: 750,
            color: 1,
            flavour: 'suave'
        }
    ]);
});
