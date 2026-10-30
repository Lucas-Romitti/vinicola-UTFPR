export default interface IEstoque {
    pratos:number;
    copos:number;
    tacas:number;
    talheres:number;

    getListagem(): string;
}