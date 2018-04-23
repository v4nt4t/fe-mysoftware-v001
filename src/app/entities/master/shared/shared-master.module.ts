import { NgModule } from "@angular/core";
import { AlertModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { 
    ButtonaddMasterComponent, 
    PesanMasterComponent, 
    ItemCountMasterComponent
} from "./";
import { RouterModule } from "@angular/router";


@NgModule({
    imports:[
        AlertModule.forRoot(),
        BrowserModule,
        AngularFontAwesomeModule,
        RouterModule
    ],
    declarations:[
        PesanMasterComponent,
        ButtonaddMasterComponent,
        ItemCountMasterComponent
    ],
    exports:[
        PesanMasterComponent,
        ButtonaddMasterComponent,
        ItemCountMasterComponent
    ]
})
export class SharedMasterModule{}