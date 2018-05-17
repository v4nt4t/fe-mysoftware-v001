import { BaseEntity } from "../../shared";

export class Muser implements BaseEntity{
    constructor(
        public id?:string,
        public login?:string,
        public firstName?:string,
        public lastName?:string,
        public email?:string,
        public imageUrl?:string,
        public activated?:boolean
    ){
        this.activated = false;
    }

}