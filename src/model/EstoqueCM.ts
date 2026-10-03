import Estoque from "./Estoque";
import EstoqueRS from "./EstoqueRS";

export default class EstoqueCM extends Estoque {
    private estoque: Estoque;
    private estoqueRS: EstoqueRS;

    constructor(estoque: Estoque, estoqueRS: EstoqueRS, pratos:number, copos:number, tacas:number, talheres:number) {
        super(pratos, copos, tacas, talheres);
        this.estoque = estoque;
        this.estoqueRS = estoqueRS;
    }

    override getPratos(): number {
        return this.estoque.getPratos() - this.estoqueRS.getPratos();
    }
}