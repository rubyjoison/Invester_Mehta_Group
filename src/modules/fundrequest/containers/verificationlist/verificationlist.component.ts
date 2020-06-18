import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-verificationlist',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './verificationlist.component.html',
    styleUrls: ['verificationlist.component.scss'],
})
export class VerificationListComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
