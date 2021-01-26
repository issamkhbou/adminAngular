import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Member} from '../../models/member.model';
import {MemberService} from '../../services/member.service';
import {MatDialog} from '@angular/material/dialog';
import {Subject} from 'rxjs';
import {ConfirmDialogComponent} from '../@root/confirm-dialog/confirm-dialog.component';
import {takeUntil} from 'rxjs/operators';
import {Outil} from '../../models/outil.model';

declare var require: any;
const FileSaver = require('file-saver');
@Component({
  selector: 'app-outil-list',
  templateUrl: './outil-list.component.html',
  styleUrls: ['./outil-list.component.scss']
})
export class OutilListComponent implements OnInit  , OnDestroy {
  /** Subject that emits when the component has been destroyed. */
    // tslint:disable-next-line:variable-name
  protected _onDestroy = new Subject<void>();
  displayedColumns: string[] = ['id', 'date', 'source', 'edit' , 'delete'];
  public dataSource = new MatTableDataSource<Outil>();
  constructor(
    private memberService: MemberService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fetchDataSource();

  }
  downloadPdf(pdfUrl: string, pdfName: string ): void {

    FileSaver.saveAs(pdfUrl, pdfName);
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  fetchDataSource(): void {
    this.memberService.getOutils().then(data => {
      this.dataSource.data = data;
      console.log(this.dataSource);
    });
  }
  onRemoveAccount(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.componentInstance.confirmButtonColor = 'warn';

    dialogRef.afterClosed().pipe(takeUntil(this._onDestroy)).subscribe(isDeleteConfirmed => {
      console.log('removing: ', isDeleteConfirmed);
      if (isDeleteConfirmed) {
        this.memberService.removeOutilById(id).then(() => {
            this.fetchDataSource();
          }


        );
      }
    });
  }

}
