import { ColorVinho } from "../enum/CorVinho";
import Vinho from "../Vinho";

const ex: Vinho = new Vinho("Randon", 1000, ColorVinho.TINTO, "suave");

test("Teste de descrição de vinho", () =>{
    expect(ex.getDescription()).toBe(
        "Vinho TINTO suave Randon 1000ml\n"
    )
} )