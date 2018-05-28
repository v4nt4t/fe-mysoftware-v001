import { BaseEntity } from "../../shared";

export class Mmenuuser implements BaseEntity{
    constructor(
        public id?:string,
        public muser?:BaseEntity,
        public mmenu?:BaseEntity,
        public allowedf?:boolean
    ){
        this.allowedf = false;
    }
}
