import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-submitverification',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './submitverification.component.html',
    styleUrls: ['submitverification.component.scss'],
})
export class SubmitVerificationComponent implements OnInit {

    profileId = 100
  profileCreateDetails: any = {};
    constructor() {}
    ngOnInit() {}
}
