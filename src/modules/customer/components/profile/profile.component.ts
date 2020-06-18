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
import { CountryService } from '@modules/customer/services';
import { Observable } from 'rxjs';
import { RestApiService } from "../../../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'sb-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit {
  //  @Input() profileCreateDetails = {firstName: '', lastName: '',emailId:'',dateOfBirth:'',address:'',id:''}
  //id = this.actRoute.snapshot.params['id'];
  id = 100
  profileCreateDetails: any = {};
  fundRequestDetails: any = {};
  showVerified=false;
  verificatiomStatus='';
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
    public countryService: CountryService,
    private changeDetectorRef: ChangeDetectorRef,
    public restApi: RestApiService,
    public router: Router,
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.countryService.pageSize = this.pageSize;
    this.countries$ = this.countryService.countries$;
    this.total$ = this.countryService.total$;
    this.restApi.getUserProfile(this.id).subscribe((data: {}) => {
      this.profileCreateDetails = data;
    });
    this.restApi.getFundRequest(this.id).subscribe((data: {}) => {
      this.fundRequestDetails = data;
      //this.verificatiomStatus = this.fundRequestDetails.status; 
      if(this.fundRequestDetails.status=== 'Verification Complete')
      {
        this.showVerified = true;
      }
    });


  }

  onSort({ column, direction }: SortEvent) {
    this.sortedColumn = column;
    this.sortedDirection = direction;
    this.countryService.sortColumn = column;
    this.countryService.sortDirection = direction;
    this.changeDetectorRef.detectChanges();
  }

  checkDate() {
    const dateSendingToServer = new DatePipe('en-US').transform(this.profileCreateDetails.dateOfBirth, 'dd/MM/yyyy')
    console.log(dateSendingToServer);
  }
  createUserProfile() {
    this.profileCreateDetails.id = '100';
    this.restApi.createUserProfile(this.profileCreateDetails).subscribe((data: {}) => {
    })
  }

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  private documentArray: Array<any> = [];
  private documentnewAttribute: any = {};

  addDocumentValue() {
    this.documentArray.push(this.documentnewAttribute)
    this.documentnewAttribute = {};
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

  cancelUserProfile() {
    this.router.navigate(['/fundrequest/viewfundrequest'])
  }

}
