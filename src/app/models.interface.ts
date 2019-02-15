export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: number;
}


export interface Certificate {
    id: number;
    user_id: User;
    alias: string;
    password: string;
    entidad_emisora: string;
    numero_de_serie: string;
    subject: string;
    caducidad: Date;
    id_orga: string;
    nombre_cliente: string;
    repositorio: string;
    contacto_renovacion: string;
    observaciones: string;
    integration_list: string;
    
}

export interface JiraUser {
    id: number;
    user_id: number;
    username: string;
    password: string;
    url: string;
    project: string;
    component: string;
    description: string;
}
