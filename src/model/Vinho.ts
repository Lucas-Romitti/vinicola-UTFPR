import Bebida from "./Bebida";

export default class Vinho extends Bebida {
    private kind: "tinto" | "espumante" | "branco" | "rosé";
    private flavour: "seco" | "suave";

    constructor (name: string, vol:number ,kind: "tinto" | "espumante" | "branco" | "rosé", flavour: "seco" | "suave"){
    super(name, vol);
    this.kind = kind;
    this.flavour = flavour;
    }

    public getKind(): string{
    return this.kind
    }

    public setKind(kind: "tinto" | "espumante" | "branco" | "rosé"): void {
        this.kind = kind
    }

    public getFlavour(): string{
    return this.flavour
    }

    public setFlavour(flavour: "seco" | "suave"): void {
        this.flavour = flavour
    }

    public description(): string{
        return "Vinho " + this.getKind() + " "  + this.getFlavour() + " " + this.getName() + " " + this.getVol() + "ml\n"

    }
}   