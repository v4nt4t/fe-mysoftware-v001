import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { AlertModule } from "ngx-bootstrap";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule,
        AngularFontAwesomeModule,
        AlertModule.forRoot()
    ],
    exports:[
        FormsModule,
        CommonModule,
        RouterModule,
        AngularFontAwesomeModule,
        AlertModule
    ]
})
export class SharedLibModule {}
