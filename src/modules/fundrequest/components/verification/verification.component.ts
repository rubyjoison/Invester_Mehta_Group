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
//import * as shajs from 'sha.js';
//import * as sha512 from '@angular/core';
import {sha} from 'hash.js';

@Component({
  selector: 'sb-verification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './verification.component.html',
  styleUrls: ['verification.component.scss'],
})
export class VerificationTableComponent implements OnInit {
  // @Input() verificationDetails = {id: '', companyName: '',description:'',publicEntity:'',fundReference:''}
  profileCreateDetails: any = {};
  id = '100';
  hashedPassword ='';
  profileId = 100
  verificationDetails: any = {};
  fundRequestDetails:any={};


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
    public router: Router,
    ///public sha:Sha256
  ) { }

  ngOnInit() {
    //  this.countryService.pageSize = this.pageSize;
    // this.countries$ = this.countryService.countries$;
    // this.total$ = this.countryService.total$;
    this.restApi.getUserProfile(this.profileId).subscribe((data: {}) => {
      this.profileCreateDetails = data;
    });
  }

  onSort({ column, direction }: SortEvent) {
    //  this.sortedColumn = column;
    //  this.sortedDirection = direction;
    //  this.countryService.sortColumn = column;
    //   this.countryService.sortDirection = direction;
    this.changeDetectorRef.detectChanges();
  }

  checkDate() {
    // const dateSendingToServer = new DatePipe('en-US').transform(this.fundRequestDetails.dateOfBirth, 'dd/MM/yyyy')
    // console.log(dateSendingToServer);
  }
  createUserProfile() {
    //   this.date=new Date();
    //let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    this.restApi.createUserProfile(this.profileCreateDetails).subscribe((data: {}) => {
      this.router.navigate(['/dashboard'])
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

  createVerification() {
    this.profileCreateDetails.id = '100';
    this.verificationDetails.emailId=this.profileCreateDetails.emailId;
    this.verificationDetails.address1=this.profileCreateDetails.address1;
    this.verificationDetails.address2=this.profileCreateDetails.address2;
    this.verificationDetails.address3=this.profileCreateDetails.address3;
    this.verificationDetails.contactPerson=this.profileCreateDetails.contactPerson;
    this.verificationDetails.contactNumber=this.profileCreateDetails.contactNumber;
    this.verificationDetails.companyName=this.profileCreateDetails.name;
    this.verificationDetails.taxId=this.profileCreateDetails.taxId;
    this.verificationDetails.dateOfBirth=this.profileCreateDetails.dateOfBirth;
    this.verificationDetails.publicEntity='Blackstone Group';
    this.verificationDetails.status='Documentation Submitted/Awaiting Verification';
    //this.hashedPassword = this.profileCreateDetails.firstName;
   //sha512('Message to hash');
   //console.log('neeee');
  // console.log(sha.sha256().update('ruby','hex').digest('hex'));   
  this.verificationDetails.address1=this.profileCreateDetails.address1;
  this.profileCreateDetails.status='Documentation Submitted/Awaiting Verification';
  this.profileCreateDetails.fundReference = 'BLKS-FND-1004532';
  this.profileCreateDetails.companyName = this.profileCreateDetails.name;
  this.profileCreateDetails.publicEntity='Blackstone Group';

  this.restApi.updateFundRequest(100,this.profileCreateDetails).subscribe((data: {}) => {
   // this.router.navigate(['/fundrequest/viewfundrequest'])
   this.restApi.createVerification(this.verificationDetails).subscribe((data: {}) => {
    this.router.navigate(['/fundrequest/viewfundrequest'])
  })
  })
   

   
   
  }

  createVerification1() {
    this.profileCreateDetails.id = '100';
    this.verificationDetails.emailId=this.profileCreateDetails.emailId;
    this.verificationDetails.address1=this.profileCreateDetails.address1;
    this.verificationDetails.address2=this.profileCreateDetails.address2;
    this.verificationDetails.address3=this.profileCreateDetails.address3;
    this.verificationDetails.contactPerson=this.profileCreateDetails.contactPerson;
    this.verificationDetails.contactNumber=this.profileCreateDetails.contactNumber;
    this.verificationDetails.companyName=this.profileCreateDetails.name;
    this.verificationDetails.taxId=this.profileCreateDetails.taxId;
    this.verificationDetails.dateOfBirth=this.profileCreateDetails.dateOfBirth;
    this.verificationDetails.publicEntity='Blackstone Group';
    this.verificationDetails.status='Application Acknowledged/Documentation Requested';
    //this.hashedPassword = this.profileCreateDetails.firstName;
   //sha512('Message to hash');
   //console.log('neeee');
  // console.log(sha.sha256().update('ruby','hex').digest('hex'));   
  this.verificationDetails.address1=this.profileCreateDetails.address1;
      this.restApi.createVerification(this.verificationDetails).subscribe((data: {}) => {
      this.router.navigate(['/fundrequest/viewfundrequest'])
    })
   
  }

  cancelFundRequest() {
    //   this.date=new Date();
    //let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    //  this.restApi.createUserProfile(this.profileCreateDetails).subscribe((data: {}) => {
    this.router.navigate(['/fundrequest/viewfundrequest'])
    //   })
  }

  

}
