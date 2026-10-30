import Estoque from "./Estoque";
import EstoqueRS from "./EstoqueRS";

export default class EstoqueCM extends Estoque {
    public pratosdefined: boolean;
    private estoque: Estoque;
    private  estoqueRS?: EstoqueRS;

    constructor(estoque: Estoque, pratosdefined: boolean) {
        super(estoque.getPratos(), estoque.getCopos(), estoque.getTacas(), estoque.getTalheres())
        this.estoque = estoque;
        this.pratosdefined = pratosdefined;
    }

    public setEstoqueRS(estoqueRS: EstoqueRS): void {
        this.estoqueRS = estoqueRS; 
    }

    public getEstoqueRS(){
        return this.estoqueRS
    }

    public getPratosDefined(): boolean{
        return this.pratosdefined
    }

    public setPratosDefined(valor: boolean){
        this.pratosdefined = valor
    }

    public getPratos(): number {
        const estoqueRS = this.getEstoqueRS();
        if(this.getPratosDefined()){
            return super.getPratos()
        }
        if(estoqueRS !==  undefined){
            return this.estoque.getPratos() - estoqueRS.getPratos();
        }
            return 0   
    }
    
}