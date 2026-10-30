"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estoque {
    constructor(pratos, copos, tacas, talheres) {
        this.pratos = pratos;
        this.copos = copos;
        this.tacas = tacas;
        this.talheres = talheres;
    }
    setPratos(pratos) {
        this.pratos = pratos;
    }
    getPratos() {
        return this.pratos;
    }
    setCopos(copos) {
        this.copos = copos;
    }
    getCopos() {
        return this.copos;
    }
    setTacas(tacas) {
        this.tacas = tacas;
    }
    getTacas() {
        return this.tacas;
    }
    setTalheres(talheres) {
        this.talheres = talheres;
    }
    getTalheres() {
        return this.talheres;
    }
    getListagem() {
        return `${this.pratos} Pratos\n${this.copos} Copos\n${this.tacas} Tacas\n${this.talheres} Talheres\n`;
    }
}
exports.default = Estoque;
