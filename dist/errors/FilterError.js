"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FilterError extends Error {
    constructor(message) {
        super(message);
        console.log("Não encontramos nenhum vinho com essas especificações");
    }
}
exports.default = FilterError;
