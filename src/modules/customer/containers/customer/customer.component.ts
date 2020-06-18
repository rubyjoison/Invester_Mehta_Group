import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-companyprofile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './customer.component.html',
    styleUrls: ['customer.component.scss'],
})
export class TablesComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
