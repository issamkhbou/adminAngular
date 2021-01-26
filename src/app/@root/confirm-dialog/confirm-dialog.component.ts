import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  public title = 'Are you sure?';
  public message = 'Do you really want to remove this item?';
  public confirmButtonLabel = 'Confirm';
  public confirmButtonColor = 'accent';
  public cancelButtonLabel = 'Cancel';

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {
  }

}
