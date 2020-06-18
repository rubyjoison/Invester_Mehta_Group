import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-viewfundrequest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './viewfundrequest.component.html',
    styleUrls: ['viewfundrequest.component.scss'],
})
export class ViewFundRequestComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
