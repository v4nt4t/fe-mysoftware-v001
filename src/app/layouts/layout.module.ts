import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SharedLibModule } from "../shared/shared-lib.module";
import { SharedModule } from "../shared/shared.module";
import { 
    LeftsidebarComponent, 
    FooterComponent, 
    NavbarComponent, 
    ErrorpageComponent 
} from "./";
import { CollapseModule } from "ngx-bootstrap";

@NgModule({
    imports:[
        SharedLibModule,
        SharedModule,
        CollapseModule.forRoot()
    ],
    declarations:[
        NavbarComponent,
        FooterComponent,
        LeftsidebarComponent,
        ErrorpageComponent
    ],
    providers:[

    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}