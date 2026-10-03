export default class Estoque {
    private pratos:number;
    private copos:number;
    private tacas:number;
    private talheres:number;

    constructor(pratos:number, copos:number, tacas:number, talheres:number){
        this.pratos = pratos;
        this.copos = copos;
        this.tacas = tacas;
        this.talheres = talheres;
    }

    public setPratos(pratos: number){
        this.pratos = pratos;
    }

    public getPratos(): number{
        return this.pratos
    }

    public setCopos(copos: number){
        this.copos = copos;
    }

    public getCopos(): number{
        return this.copos
    }
    
    public setTacas(tacas: number){
        this.tacas = tacas;
    }

    public getTacas(): number{
        return this.tacas
    }
    
    public setTalheres(talheres: number){
        this.talheres = talheres;
    }

    public getTalheres(): number{
        return this.talheres
    }

    public getListagem(): string{
        return `${this.pratos} Pratos\n${this.copos} Copos\n${this.tacas} Tacas\n${this.talheres} Talheres\n`
    }






    //fazer o estoque de itens do casa magda e raio de sol separados~
}