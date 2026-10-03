export default abstract class Bebida {
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

    public getQtt(): number{
        return this.qtt
    }

    public setQtt(qtt:number): void{
        this.qtt = qtt;
    }

    public getVol(): number{
        return this.vol
    }

    public setVol(vol:number): void{
        this.vol = vol;
    }

    abstract getDescription(): {}
}