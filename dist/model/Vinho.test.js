"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vinho_1 = __importDefault(require("./Vinho"));
const ex = new Vinho_1.default("Randon", 1000, "tinto", "suave");
test("Teste de descrição de vinho", () => {
    expect(ex.getDescription()).toBe("Vinho tinto suave Randon 1000ml\n");
});
