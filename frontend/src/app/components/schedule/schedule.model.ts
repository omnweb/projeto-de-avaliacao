import { Client } from './../client/client.model';
export interface Schedule {
    id?: number
    cliente: Client,
    data: string,
    hora: string,
    motivo: string,
    status: string,
    resultado: string
}