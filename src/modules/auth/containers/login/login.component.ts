import { ChangeDetectionStrategy, Component, OnInit,Input } from '@angular/core';
import { RestApiService } from "../../../shared/rest-api.service";
import { Router } from '@angular/router';
@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    @Input() userDetails = {username: '', password: ''}
    constructor(
        public restApi: RestApiService, 
        public router: Router
    ) {}
    ngOnInit() {}

    authenticateUser() {
        this.restApi.authenticateUser(this.userDetails).subscribe((data: {}) => {
          this.router.navigate(['/dashboard'])
        })
      }
}
