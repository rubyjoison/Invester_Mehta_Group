import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/customer/directives';
import { Country } from '@modules/customer/models';
//import { CountryService } from '@modules/customer/services';
import { Observable } from 'rxjs';
import { RestApiService } from "../../../shared/rest-api.service";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'sb-view-fundrequest',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './view-fundrequest.component.html',
  styleUrls: ['view-fundrequest.component.scss'],
})
export class ViewFundRequestsTableComponent implements OnInit {
  @Input() profileCreateDetails = { firstName: '', lastName: '', emailId: '', dateOfBirth: '', address: '' }
  FundRequests: any = [];

  editField!: string;
  personList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
  @Input() pageSize = 4;

  countries$!: Observable<Country[]>;
  total$!: Observable<number>;
  sortedColumn!: string;
  sortedDirection!: string;

  @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

  constructor(
    // public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef,
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
    //  this.countryService.pageSize = this.pageSize;
    // this.countries$ = this.countryService.countries$;
    // this.total$ = this.countryService.total$;
    this.restApi.getFundRequests().subscribe((data: {}) => {
      this.FundRequests = data;
    })
  }

  onSort({ column, direction }: SortEvent) {
    //  this.sortedColumn = column;
    //  this.sortedDirection = direction;
    //  this.countryService.sortColumn = column;
    //   this.countryService.sortDirection = direction;
    this.changeDetectorRef.detectChanges();
  }

  checkDate() {
    const dateSendingToServer = new DatePipe('en-US').transform(this.profileCreateDetails.dateOfBirth, 'dd/MM/yyyy')
    console.log(dateSendingToServer);
  }
  createUserProfile() {
    //   this.date=new Date();
    //let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.restApi.createUserProfile(this.profileCreateDetails).subscribe((data: {}) => {
      this.router.navigate(['/dashboard'])
    })
  }

  getFundRequests() {
    //   this.date=new Date();
    //let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.restApi.getFundRequests().subscribe((data: {}) => {
      this.FundRequests = data;
    })
  }

  createFundRequest() {
    this.router.navigate(['/fundrequest'])

  }

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  private documentArray: Array<any> = [];
  private documentnewAttribute: any = {};

  addDocumentValue() {
    this.router.navigate(['/fundrequest'])
    //this.documentArray.push(this.documentnewAttribute)
    // this.documentnewAttribute = {};
  }

  deleteDocumentValue(index) {
    this.documentArray.splice(index, 1);
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

}
