import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {Outil} from '../../models/outil.model';
import {Events} from '../../models/Events.model';
import {MemberService} from '../../services/member.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../@root/confirm-dialog/confirm-dialog.component';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit , OnDestroy {
  /** Subject that emits when the component has been destroyed. */
    // tslint:disable-next-line:variable-name
  protected _onDestroy = new Subject<void>();
  displayedColumns: string[] = ['id', 'titre', 'date', 'lieu', 'edit' , 'delete'];
  public dataSource = new MatTableDataSource<Events>();
  constructor(
    private memberService: MemberService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fetchDataSource();

  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  fetchDataSource(): void {
    this.memberService.getEvents().then(data => {
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
        this.memberService.removeEventById(id).then(() => {
            this.fetchDataSource();
          }


        );
      }
    });
  }


}
