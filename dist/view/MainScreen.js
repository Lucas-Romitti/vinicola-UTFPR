"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class MainScreen {
    constructor(controller) {
        this.prompt = (0, prompt_sync_1.default)();
        this.controller = controller;
        this.OpenFisrtScreen();
    }
    OpenFisrtScreen() {
        let option = 0;
        while (option != 4) {
            console.log("Digite:\n1. Para Cadastrar\n2. Para Listar\n3. Para Filtrar\n4. Para sair");
            option = Number(this.prompt("> "));
            switch (option) {
                case 1:
                    this.registerVinho();
                    break;
                case 2:
                    console.log(this.controller.getVinhosDescription(this.controller.getAllVinhos()));
                    break;
                case 3:
                    console.log(this.controller.getVinhosDescription(this.controller.getFilterVinhos(this.setFilter())));
                    break;
                case 4:
                    console.clear();
                    break;
                default:
                    console.log("Digite um número de 1 a 4");
                    break;
            }
        }
    }
    registerVinho() {
        let vinho1 = this.controller.getNewVinho();
        let a, b;
        console.log("O vinho é espumante ou frisante?\n1 - Sim\n2 - Não");
        a = Number((this.prompt("> ")));
        if (a === 1 || a === 2) {
            console.log("Insira o tipo:\n1 - Espumante\n 2 - Frisante");
            b = Number(this.prompt("> "));
            if (b === 1) {
                vinho1.setKind("espumante");
            }
            else if (b === 2) {
                vinho1.setKind("frisante");
            }
        }
        console.log("Qual o nome do vinho?");
        vinho1.setName(this.prompt("> "));
        console.log("Qual o volume do vinho? Em ml");
        vinho1.setVol(Number(this.prompt("> ")));
        console.log("Qual a cor do vinho? \n1 - Tinto \n2 - Rosé\n3 - Branco");
        let color = Number((this.prompt("> ")));
        switch (color) {
            case 1:
                vinho1.setColor("tinto");
                break;
            case 2:
                vinho1.setColor("rosé");
                break;
            case 3:
                vinho1.setColor("branco");
                break;
            default:
                console.log("Insira um número válido");
        }
        console.log("Qual o sabor do vinho?\n1 - Seco\n2 - Suave");
        let flavour = Number(this.prompt("> "));
        switch (flavour) {
            case 1:
                vinho1.setFlavour("seco");
                break;
            case 2:
                vinho1.setFlavour("suave");
                break;
            default:
                console.log("Insira um número válido");
        }
        this.controller.database.vinhos.push(vinho1);
    }
    setFilter() {
        let filter;
        let n;
        console.log("1. Pesquisar por: Nome/Tipo/Sabor\n2. Pesquisar por: Volume");
        n = Number(this.prompt("> "));
        if (n === 1) {
            console.log("Insira o Nome/Cor/Sabor");
            filter = this.prompt("> ").toLowerCase();
        }
        else {
            console.log("Insira o Volume");
            filter = Number(this.prompt("> "));
        }
        return filter;
    }
}
exports.default = MainScreen;
