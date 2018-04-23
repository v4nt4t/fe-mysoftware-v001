import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-buttonadd-master',
    template: `<button type="button"
                    class="btn btn-position-add btn-custom-circle btn-info"
                    [routerLink]="[link]"
                    title="Tambahan Data">
                    <fa name="pencil" size = "2x"></fa>
                </button>`
})
export class ButtonaddMasterComponent implements OnInit{

    @Input() link: string;

    constructor(){}

    ngOnInit(){

    }

}