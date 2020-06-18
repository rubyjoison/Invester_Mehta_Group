import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, ReplaySubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../shared/user';
import { Authenticate } from '../shared/authenticate';
import { Profile } from './profile';
import { FundRequest } from './fundrequest';
import { Verification } from './verification';




@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:9081';
  investorapiURL = 'http://vmf48.southeastasia.cloudapp.azure.com:8081';
  //fundmanagerapiURL = 'http://vmf48.southeastasia.cloudapp.azure.com:9081';
  blockchainurl = 'http://vmfalcon.southindia.cloudapp.azure.com:8080/api/';

  constructor(public http: HttpClient) {

  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      // 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydWJ5am9pc29uIiwiZXhwIjoxNTkwMDg4NDE3LCJpYXQiOjE1OTAwNzA0MTd9.akhd_-GOZkXxDHbSZxsbpU4g51Ny_OM-olJ_1ncq_vFSxT5kuNr-LpFaC7JJXwFra1wXuPp09qZ6eFjazb5ifw'



    })
  }

  httpOptions1 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5200',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      // 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydWJ5am9pc29uIiwiZXhwIjoxNTkwMDg4NDE3LCJpYXQiOjE1OTAwNzA0MTd9.akhd_-GOZkXxDHbSZxsbpU4g51Ny_OM-olJ_1ncq_vFSxT5kuNr-LpFaC7JJXwFra1wXuPp09qZ6eFjazb5ifw'



    })
  }
  authenticateUser(authenticate): Observable<Authenticate> {
    return this.http.post<Authenticate>(this.investorapiURL + '/authenticate', JSON.stringify(authenticate),
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }





  // HttpClient API post() method => Create employee
  registerUser(userCreateDetails): Observable<User> {
    return this.http.post<User>(this.investorapiURL + '/registeruser', JSON.stringify(userCreateDetails),
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getUserProfile(id): Observable<Profile> {
    return this.http.get<Profile>(this.investorapiURL + '/userprofile/' + id,
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  
  uploadFile(profileCreateDetails): Observable<Profile> {
    return this.http.post<Profile>(this.investorapiURL + '/uploadFile/', JSON.stringify(profileCreateDetails),
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createUserProfile(profileCreateDetails): Observable<Profile> {
    return this.http.post<Profile>(this.investorapiURL + '/userprofile/create', JSON.stringify(profileCreateDetails),
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateUserProfile(profileCreateDetails): Observable<Profile> {
    return this.http.post<Profile>(this.investorapiURL + '/userprofile/create', JSON.stringify(profileCreateDetails),
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  createFundRequest(profileCreateDetails): Observable<FundRequest> {
    return this.http.post<FundRequest>('http://vmf48.southeastasia.cloudapp.azure.com:9081/fundrequest/create', JSON.stringify(profileCreateDetails),
      this.httpOptions1)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  updateFundRequest(id,profileCreateDetails): Observable<FundRequest> {
    return this.http.put<FundRequest>('http://vmf48.southeastasia.cloudapp.azure.com:9081/fundrequest/' + id , JSON.stringify(profileCreateDetails),
      this.httpOptions1)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getFundRequests(): Observable<FundRequest> {
    return this.http.get<FundRequest>('http://vmf48.southeastasia.cloudapp.azure.com:9081' + '/fundrequest/',
      this.httpOptions1)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getFundRequest(id): Observable<FundRequest> {
    return this.http.get<FundRequest>('http://vmf48.southeastasia.cloudapp.azure.com:9081' + '/fundrequest/'+id,
      this.httpOptions1)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
 /* createVerification(profileCreateDetails): Observable<Verification> {
    return this.http.post<Verification>(this.blockchainurl + 'FundManager', JSON.stringify(profileCreateDetails),
      this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }*/

  createVerification(profileCreateDetails): Observable<Verification> {
    return this.http.post<Verification>('http://vmf48.southeastasia.cloudapp.azure.com:9081' + '/verification/create', JSON.stringify(profileCreateDetails),
      this.httpOptions1)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   // window.alert(errorMessage);
    return throwError(errorMessage);
  }

}