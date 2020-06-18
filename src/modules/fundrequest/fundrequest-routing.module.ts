/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { TablesModule } from './fundrequest.module';

/* Containers */
import * as tablesContainers from './containers';

/* Guards */
import * as tablesGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: tablesContainers.FundRequestComponent,
        data: {
            title: 'Create Fund Request',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Tables',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'viewfundrequest',
        canActivate: [],
        component: tablesContainers.ViewFundRequestComponent,
        data: {
            title: 'View Fund Requests',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'View Fund Request',
                    active: true,
                },
            ],
        } as SBRouteData,
    },    
    {
        path: 'updatefundrequest',
        canActivate: [],
        component: tablesContainers.UpdateFundRequestComponent,
        data: {
            title: 'Update Fund Request',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'View Fund Request',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'submitverification',
        canActivate: [],
        component: tablesContainers.SubmitVerificationComponent,
        data: {
            title: 'Verification',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Verification',
                    active: true,
                },
            ],
        } as SBRouteData,
    }
    ,
    {
        path: 'verificationlist',
        canActivate: [],
        component: tablesContainers.VerificationListComponent,
        data: {
            title: 'Verification List',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Verification List',
                    active: true,
                },
            ],
        } as SBRouteData,
    }
    
];

@NgModule({
    imports: [TablesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TablesRoutingModule {}

