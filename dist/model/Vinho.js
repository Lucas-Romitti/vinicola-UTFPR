"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bebida_1 = __importDefault(require("./Bebida"));
class Vinho extends Bebida_1.default {
    constructor(name, vol, kind, flavour) {
        super(name, vol);
        this.kind = kind;
        this.flavour = flavour;
    }
    getKind() {
        return this.kind;
    }
    setKind(kind) {
        this.kind = kind;
    }
    getFlavour() {
        return this.flavour;
    }
    setFlavour(flavour) {
        this.flavour = flavour;
    }
    description() {
        return "Vinho " + this.getKind() + " " + this.getFlavour() + " " + this.getName() + " " + this.getVol() + "ml\n";
    }
}
exports.default = Vinho;
