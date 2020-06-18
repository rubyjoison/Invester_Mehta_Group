import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
      //  let currentUser = this.authenticationService.currentUserValue;
       // if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                //    'Content-Type':  'application/xml'
                Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydWJ5am9pc29uIiwiZXhwIjoxNTkwMDg4NDE3LCJpYXQiOjE1OTAwNzA0MTd9.akhd_-GOZkXxDHbSZxsbpU4g51Ny_OM-olJ_1ncq_vFSxT5kuNr-LpFaC7JJXwFra1wXuPp09qZ6eFjazb5ifw'

                }
            });
      //  }

      
        return next.handle(request);
    }
}