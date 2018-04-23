import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-item-count',
  template: `
    <div class="info">
    {{dataAwal}} - {{dataAkhir}} dari {{totalItems}} data.
    </div>
  `
})
export class ItemCountMasterComponent implements OnChanges {

  dataAwal: number;
  dataAkhir: number;
    
  @Input('page')
  _page: number;
  
  @Input('itemsPerPage')
  _itemsPerPage: number;
  
  @Input('totalItems')
  _totalItems: number;
  
  get name(): number {return this._page;}
  get itemsPerPage(): number {return this._itemsPerPage;}
  get totalItems(): number {return this._totalItems;}
  
  constructor() { }

 	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  	
        let itemsPerPage = (this._page - 1) * this._itemsPerPage;
        if(itemsPerPage == 0){
            this.dataAwal = 1;
        }else{
            this.dataAwal = (this._page - 1) * this._itemsPerPage + 1;
        }
        
        let totalPages = this._page * this._itemsPerPage;
        if(totalPages < this._totalItems){
            this.dataAkhir = this._page * this._itemsPerPage;
        } else{
            this.dataAkhir = this._totalItems;
        }
        
  }
}