
export interface Crew {
    id?:number;
    firstName?:string;
    lastName?:string;
    nationality?:string;
    title?:string;
    certificates?:Array<Certificate>;
}

export interface Certificate{
    id?:number;
    name?:string;
    date?:string;
}