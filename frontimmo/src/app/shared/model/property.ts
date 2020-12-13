import { from } from 'rxjs';
import {Type} from 'src/app/shared/model/type'
import {Avantage} from 'src/app/shared/model/avantage'
import {Keyword} from 'src/app/shared/model/keyword'
export class Property {
    id: number;
    title:string;
    price: number;
    sector: string;
    numberroom: number;
    picture: string;
    description: string;
    TypeId: number;
    Avantages: Avantage[];
    Keywords: Keyword[];
    createdAt: Date;
    updatedAt: Date;

}
