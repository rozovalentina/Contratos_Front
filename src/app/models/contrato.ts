export interface contrato {
    id: number; 
    identificador: string;
    valor: number;
    nombreContratante: string;
    documentoContratante: string;
    nombreContratantista: string;
    documentoContratantista: string;
    fechaInicial: string; // Fecha como string para compatibilidad.
    fechaFinal: string;
}
