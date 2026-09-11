export default class Bebida {
    private name:string;
    private qtt!:number; //coloca como metodo pra setar?
    private vol:number;

    constructor(name:string, vol:number){
        this.name =  name;
        this.vol = vol
    }

    public getName(): string{
        return this.name
    }

    public setName(name:string): void{
        this.name = name;
    }

    public getVol(): number{
        return this.vol
    }

    public setVol(vol:number): void{
        this.vol = vol;
    }

    public description(): string{
        return this.getName() + " " + this.getVol() + "ml \n"
    }

}