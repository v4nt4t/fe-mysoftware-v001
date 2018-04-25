import { NgModule } from "@angular/core";


import { ButtonaddComponent } from "./button/button-add.component";
import { PesanComponent } from "./message/pesan-master.component";
import { SharedLibModule } from "./shared-lib.module";
import { ItemCountComponent } from "./util/item-count.component";

@NgModule({
    imports:[
        SharedLibModule
    ],
    declarations:[
        ItemCountComponent,
        ButtonaddComponent,
        PesanComponent
    ],
    exports:[
        ItemCountComponent,

        ButtonaddComponent,
        PesanComponent
    ]
})
export class SharedCommonModule{ } 