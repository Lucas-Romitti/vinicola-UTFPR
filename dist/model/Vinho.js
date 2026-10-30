"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bebida_1 = __importDefault(require("./Bebida"));
const CorVinho_1 = require("./enum/CorVinho");
class Vinho extends Bebida_1.default {
    constructor(name, vol, color, flavour) {
        super(name, vol);
        this.color = color;
        this.flavour = flavour;
    }
    getColor() {
        return CorVinho_1.ColorVinho[this.color];
    }
    setColor(color) {
        this.color = color;
    }
    getFlavour() {
        return this.flavour;
    }
    setFlavour(flavour) {
        this.flavour = flavour;
    }
    getKind() {
        return this.kind;
    }
    setKind(kind) {
        this.kind = kind;
    }
    getDescription() {
        if (this.getKind() == "espumante") {
            return "Vinho Espumante " + this.getColor() + " " + this.getFlavour() + " " + this.getName() + " " + this.getVol() + "ml\n";
        }
        else if (this.getKind() == "frisante") {
            return "Vinho Frisante " + this.getColor() + " " + this.getFlavour() + " " + this.getName() + " " + this.getVol() + "ml\n";
        }
        return "Vinho " + this.getColor() + " " + this.getFlavour() + " " + this.getName() + " " + this.getVol() + "ml\n";
    }
}
exports.default = Vinho;
