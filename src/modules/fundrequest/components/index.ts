import { NgBootstrapTableComponent } from './create-fundrequest/create-fundrequest.component';
import { ViewFundRequestsTableComponent } from './view-fundrequest/view-fundrequest.component';
import { UpdateFundRequestTableComponent } from './update-fundrequest/update-fundrequest.component';
import { VerificationTableComponent } from './verification/verification.component';
import { VerificationListTableComponent } from './verificationInfolist/verificationInfolist.component';


import { SortIconComponent } from './sort-icon/sort-icon.component';

export const components = [NgBootstrapTableComponent, SortIconComponent,
    ViewFundRequestsTableComponent,UpdateFundRequestTableComponent,
    VerificationTableComponent,VerificationListTableComponent];

export * from './create-fundrequest/create-fundrequest.component';
export * from './update-fundrequest/update-fundrequest.component';
export * from './view-fundrequest/view-fundrequest.component';
export * from './verification/verification.component';
export * from './verificationInfolist/verificationInfolist.component';
export * from './sort-icon/sort-icon.component';
