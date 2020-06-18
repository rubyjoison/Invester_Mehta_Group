import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-fundrequest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './fundrequest.component.html',
    styleUrls: ['fundrequest.component.scss'],
})
export class FundRequestComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
