import Estoque from "./Estoque";
import EstoqueCM from "./EstoqueCM";

export default class EstoqueRS extends Estoque {
    private estoque: Estoque;
    private estoqueCM: EstoqueCM;

    constructor(estoque: Estoque, estoqueCM: EstoqueCM, pratos:number, copos:number, tacas:number, talheres:number) {
        super(pratos, copos, tacas, talheres);
        this.estoque = estoque;
        this.estoqueCM = estoqueCM;
    }

    override getPratos(): number {
        return this.estoque.getPratos() - this.estoqueCM.getPratos();
    }
}