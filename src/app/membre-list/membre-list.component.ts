import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member.model';
import { ConfirmDialogComponent } from '../@root/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Etudiant } from '../../models/etudiant.model';
import { EnseignantChercheur } from '../../models/enseignantChercheur.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
declare var require: any;
const FileSaver = require('file-saver');
@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.scss'],
})
export class MembreListComponent implements OnInit, OnDestroy {
  /** Subject that emits when the component has been destroyed. */
  // tslint:disable-next-line:variable-name
  protected _onDestroy = new Subject<void>();

  displayedColumns: string[] = [
    'id',
    'cin',
    'nom',
    'cv',
    'dateNaissance',
    'email',
    'details',
  ];
  displayedColumns2: string[] = [
    'id',
    'cin',
    'nom',
    'cv',
    'dateNaissance',
    'email',
    'sujet',
    'diplome',
    'edit',
    'delete',
  ];
  displayedColumns3: string[] = [
    'id',
    'cin',
    'nom',
    'cv',
    'dateNaissance',
    'email',
    'etablissement',
    'grade',
    'edit',
    'delete',
  ];
  radioSelected: string = 'all';
  //dataSource: Member[] = [];
  public dataSource = new MatTableDataSource<Member>();
  public dataSource2 = new MatTableDataSource<Etudiant>();
  public dataSource3 = new MatTableDataSource<EnseignantChercheur>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private memberService: MemberService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchDataSource();
    this.fetchDataSource2();
    this.fetchDataSource3();
  }
  downloadPdf(pdfUrl: string, pdfName: string): void {
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };
  public doFilter2 = (value: string) => {
    this.dataSource2.filter = value.trim().toLocaleLowerCase();
  };
  public doFilter3 = (value: string) => {
    this.dataSource3.filter = value.trim().toLocaleLowerCase();
  };

  selectChangeHandler(event: any): string {
    //update the ui
    console.log(this.radioSelected);
    return (this.radioSelected = this.radioSelected.valueOf());
  }

  selectChangeHandlerToStudents() {
    this.radioSelected = 'etd';
    console.log(this.radioSelected);
    
  }

  selectChangeHandlerToTeachers() {
    this.radioSelected = 'ens';
    console.log(this.radioSelected);

  }

  selectChangeHandlerToAllMembers() {
    this.radioSelected = 'all';
    console.log(this.radioSelected);

  }
  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  fetchDataSource(): void {
    this.memberService.getAllMembers().then((data) => {
      this.dataSource.data = data;
      console.log(this.dataSource);
    });
  }
  fetchDataSource2(): void {
    this.memberService.getAllEtudiantsMembers().then((data) => {
      this.dataSource2.data = data;
    });
  }
  fetchDataSource3(): void {
    this.memberService.getAllEnseniantMembers().then((data) => {
      this.dataSource3.data = data;
    });
  }
  onRemoveAccount(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.componentInstance.confirmButtonColor = 'warn';

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._onDestroy))
      .subscribe((isDeleteConfirmed) => {
        console.log('removing: ', isDeleteConfirmed);
        if (isDeleteConfirmed) {
          this.memberService.removeMemberById(id).then(() => {
            this.fetchDataSource();
          });
        }
      });
  }
  onRemoveAccount2(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.componentInstance.confirmButtonColor = 'warn';

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._onDestroy))
      .subscribe((isDeleteConfirmed) => {
        console.log('removing: ', isDeleteConfirmed);
        if (isDeleteConfirmed) {
          this.memberService.removeMemberById(id).then(() => {
            this.fetchDataSource();
            this.fetchDataSource2();
          });
        }
      });
  }
  onRemoveAccount3(id: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      hasBackdrop: true,
      disableClose: false,
    });

    dialogRef.componentInstance.confirmButtonColor = 'warn';

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._onDestroy))
      .subscribe((isDeleteConfirmed) => {
        console.log('removing: ', isDeleteConfirmed);
        if (isDeleteConfirmed) {
          this.memberService.removeMemberById(id).then(() => {
            this.fetchDataSource();
            this.fetchDataSource3();
          });
        }
      });
  }
}
