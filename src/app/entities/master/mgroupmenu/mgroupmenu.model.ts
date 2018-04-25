import { BaseEntity } from "../../../shared";

export class Mgroupmenu implements BaseEntity{
    constructor(
        public id?:string,
        public kode?:string,
        public groupmenu?:string,
        public allowedf?:boolean,
        public urutan?:number,
        public mheadermenu?:BaseEntity
    ){
        this.allowedf = false;
    }
}