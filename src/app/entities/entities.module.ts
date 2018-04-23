import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { TransactionModule } from './transaction/transaction.module';
import { MasterModule } from './master/master.module';


@NgModule({
  imports: [
    // CommonModule,
    TransactionModule,
    MasterModule
  ],
  declarations: []
})
export class EntitiesModule { }
