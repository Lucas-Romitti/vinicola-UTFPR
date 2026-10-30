import Estoque from "./Estoque";
import EstoqueCM from "./EstoqueCM";

export default class EstoqueRS extends Estoque {
    private pratosdefined: boolean;
    private estoque: Estoque;
    private estoqueCM?: EstoqueCM;

    constructor(estoque: Estoque, pratosdefined: boolean) {
        super(estoque.getPratos(), estoque.getCopos(), estoque.getTacas(), estoque.getTalheres())
        this.estoque = estoque;
        this.pratosdefined = pratosdefined;
    }

    public setEstoqueCM(estoqueCM: EstoqueCM): void {
        this.estoqueCM = estoqueCM; 
    }

    public getEstoqueCM(){
        return this.estoqueCM
    }

    
    public getPratosDefined(): boolean{
        return this.pratosdefined
    }

    public setPratosDefined(valor: boolean){
        this.pratosdefined = valor
    }

    public getPratos(): number {
        const estoqueCM = this.getEstoqueCM();
        if(this.getPratosDefined()){
            return super.getPratos()
        }
        if(estoqueCM !==  undefined){
            return this.estoque.getPratos() - estoqueCM.getPratos();
        }
            return 0   
    }
}