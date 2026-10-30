import Bebida from "./Bebida";
import { ColorVinho } from "./enum/CorVinho";

export default class Vinho extends Bebida {
    private kind!: "espumante" | "frisante";
    private color: ColorVinho;
    private flavour: "seco" | "suave";

    constructor (name: string, vol:number ,color: ColorVinho, flavour: "seco" | "suave"){
    super(name, vol);
    this.color = color;
    this.flavour = flavour;
    }

    public getColor(): string {
    return ColorVinho[this.color]
    }

    public setColor(color: ColorVinho): void {
        this.color = color
    }

    public getFlavour(): string{
    return this.flavour
    }

    public setFlavour(flavour: "seco" | "suave"): void {
        this.flavour = flavour
    }

    public getKind(){
        return this.kind
    }

    public setKind(kind: "espumante" | "frisante" ){
        this.kind = kind
    }

    public getDescription(): string{
        if(this.getKind() == "espumante"){
            return "Vinho Espumante " + this.getColor() + " "  + this.getFlavour() + " " + this.getName() + " " + this.getVol() + "ml\n"
        }
        else if(this.getKind() == "frisante"){
            return "Vinho Frisante " + this.getColor() + " "  + this.getFlavour() + " " + this.getName() + " " + this.getVol() + "ml\n"
        }
        return "Vinho " + this.getColor() + " "  + this.getFlavour() + " " + this.getName() + " " + this.getVol() + "ml\n"

    }
}   