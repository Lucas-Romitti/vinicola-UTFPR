
import promptSync from 'prompt-sync';
import MainController from '../controller/MainController';
import Database from '../databases/Database';

export default class MainScreen {

    private prompt = promptSync();

    private controller: MainController;

    constructor(controller: MainController){
        this.controller = controller;
        this.OpenFisrtScreen()
    }

    private OpenFisrtScreen(): void{
        let option = 0;
        while(option != 3){
            console.log("Digite:\n1. Para Cadastrar\n2. Para Listar\n3. Para sair")
            option = Number(this.prompt("> "));
            switch(option){
                case 1:
                this.registerVinho()
                break;

                case 2:
                console.log(this.controller.getAllVinhos())
                break;

                case 3:
                console.clear();
                break;


                default:
                console.log("Digite um número de 1 a 3")
                break;
            }
        }

    }

    private registerVinho(){
        let vinho1 = this.controller.getNewVinho();
        console.log("Qual o nome do vinho?");
        vinho1.setName(this.prompt("> "));
        console.log("Qual o volume do vinho? Em ml")
        vinho1.setVol(Number(this.prompt("> ")));
        console.log("Qual o tipo do vinho? \n1 - Tinto \n2 - Espumante\n3 - Rosé\n4 - Branco")
        let kind = Number((this.prompt("> ")));
        switch(kind){
            case 1:
                vinho1.setKind("tinto")
                break;

            case 2:
                vinho1.setKind("espumante")
                break;

            case 3:
                vinho1.setKind("rosé")
                break;

            case 4:
                vinho1.setKind("branco")
                break;

            default:
                console.log("Insira um número válido")
            
        }
        console.log("Qual o sabor do vinho?\n" + "1 - Seco\n" +"2 - Suave")
        let flavour = Number(this.prompt("> "));
        switch (flavour) {
            case 1:
            vinho1.setFlavour("seco");
            break;

            case 2:
            vinho1.setFlavour("suave");
            break;

            default:
                console.log("Insira um número vá")
        }

        this.controller.database.vinhos.push(vinho1)

    }
    
    
}