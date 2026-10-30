export default class FilterError extends Error{
    constructor(message: string) {
        super(message);
        console.log("Não encontramos nenhum vinho com essas especificações")
    }
}