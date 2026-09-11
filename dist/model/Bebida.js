"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bebida {
    constructor(name, vol) {
        this.name = name;
        this.vol = vol;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getVol() {
        return this.vol;
    }
    setVol(vol) {
        this.vol = vol;
    }
    description() {
        return this.getName() + " " + this.getVol() + "ml \n";
    }
}
exports.default = Bebida;
