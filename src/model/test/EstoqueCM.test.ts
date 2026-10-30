import Estoque from "../Estoque";
import EstoqueCM from "../EstoqueCM";
import EstoqueRS from "../EstoqueRS";

const exE: Estoque = new Estoque(100, 70, 70, 100)
const exCM: EstoqueCM = new EstoqueCM(exE, false)
const exRS: EstoqueRS = new EstoqueRS(exE, true)
exCM.setEstoqueRS(exRS)
exRS.setEstoqueCM(exCM)
exRS.setPratos(40)

test("Teste de Estoque no Casa Magda", () =>{
    expect(exCM.getPratos()).toBe(
        60
    )
} )