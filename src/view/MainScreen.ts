
import promptSync from 'prompt-sync';
import MainController from '../controller/MainController';

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
            option = Number(this.prompt("Digite:\n1. Para Cadastrar\n2. Para Listar\n3. Para sair\n"));
            switch(option){
                case 1:
                this.registerVinho()
                break;

                case 2:
                console.log(this.controller.getAllBebidas())
                break;

                default:
                console.log("Digite um número de 1 a 3")
                break;
            }
            console.clear()
        }

    }

    private registerVinho(){
        let vinho1 = this.controller.getNewVinho();
        vinho1.setName(this.prompt("Qual o nome do vinho?\n"));
        vinho1.setVol(Number(this.prompt("Qual o volume do vinho?\n")));
        let kind = Number((this.prompt("Qual o tipo do vinho? \n1.Tinto \n2.Espumante\n3.rosé\n4.branco\n")));
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
        let flavour = this.prompt("Qual o tipo do vinho?\n" + "1 - Seco\n" +"2 - Suave\n");
        if (flavour == "1") {
            vinho1.setFlavour("seco");
        } else if (flavour == "2") {
            vinho1.setFlavour("suave");
        }

        this.controller.database.vinhos.push(vinho1)

    }
    
    
}