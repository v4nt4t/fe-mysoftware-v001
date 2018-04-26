import { BaseEntity } from "../../../shared";

export class Mmenu implements BaseEntity{
    constructor(
        public id?:string,
        public kode?:string,
        public menu?:string,
        public objek?:string,
        public allowedf?:boolean,
        public urutan?:number,
        public mgroupmenu?:BaseEntity
    ){
        this.allowedf = false;
    }
}