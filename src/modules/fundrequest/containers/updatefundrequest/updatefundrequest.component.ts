import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-updatefundrequest',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './updatefundrequest.component.html',
    styleUrls: ['updatefundrequest.component.scss'],
})
export class UpdateFundRequestComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
