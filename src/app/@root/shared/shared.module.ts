import { NgModule } from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmDialogModule} from '../confirm-dialog/confirm-dialog.module';



@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ConfirmDialogModule,

  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ConfirmDialogModule,
  ]
})
export class SharedModule { }
