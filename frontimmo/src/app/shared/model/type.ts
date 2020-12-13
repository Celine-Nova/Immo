export class Type {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;

    
    constructor(name: string){
        this.name = name;
    }
}
