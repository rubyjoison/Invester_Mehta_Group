import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-customer-update',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './customer-update.component.html',
    styleUrls: ['customer-update.component.scss'],
})
export class CustomerUpdateComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
