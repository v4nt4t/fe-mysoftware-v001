import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { TransactionModule } from './transaction/transaction.module';
import { MasterModule } from './master/master.module';


@NgModule({
  imports: [
    // CommonModule,
    TransactionModule,
    MasterModule
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntitiesModule { }
