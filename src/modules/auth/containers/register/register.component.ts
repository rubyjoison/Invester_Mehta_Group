import { ChangeDetectionStrategy, Component, OnInit ,Input} from '@angular/core';
import { RestApiService } from "../../../shared/rest-api.service";
import { Router } from '@angular/router';



@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})

export class RegisterComponent implements OnInit {
    @Input() userCreateDetails = {firstName: '', lastName: '',emailId:'',username:'',password:'',confirmPassword:''}

    constructor(
        public restApi: RestApiService, 
        public router: Router
    ) {}
    ngOnInit() {}

    registerUser() {
        this.restApi.registerUser(this.userCreateDetails).subscribe((data: {}) => {
          this.router.navigate(['/dashboard'])
        })
      }
}
