import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfilesComponent, profilesRoute } from "./";


@NgModule({
   imports:[
    RouterModule.forChild([profilesRoute])
   ],
   declarations:[
        ProfilesComponent
   ]
})
export class ProfilesModule { }