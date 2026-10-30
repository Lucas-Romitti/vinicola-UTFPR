import MainController from "../../controller/MainController";

const ex: MainController = new MainController();
test("Teste de Filtro", () => {
    expect(ex.getFilterVinhos("suave")).toEqual([
    { 
        name: 'Pergola',
        vol: 750,
        color: 1,
        flavour: 'suave' 
    },
    {
        name: 'Del Piero',
        vol: 750,
        color: 1,
        flavour: 'suave'
    }
])
})