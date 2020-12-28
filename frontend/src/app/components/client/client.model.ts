export interface Client {
    id?: number;
    nome: string;
    endereco: {
        logradouro: string;
        numero: number;
        cidade: string;
        estado: string;
    },
    telefone: string;
    pessoa_contato: string;
    pessoa: string;
    preferencial: boolean;
}