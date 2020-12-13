import { isConstructorDeclaration } from 'typescript';

export class Avantage {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(name: string){
        this.name = name;
    }
}