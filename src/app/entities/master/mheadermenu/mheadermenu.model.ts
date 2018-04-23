import { BaseEntity } from "../../../shared";

export class Mheadermenu implements BaseEntity{
    constructor(
        public id?:string,
        public kode?:string,
        public headermenu?:string,
        public allowedf?:boolean
    ){
        this.allowedf = false;
    }
}