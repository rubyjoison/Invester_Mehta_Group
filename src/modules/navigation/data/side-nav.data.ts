import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: '',
        items: ['dashboard'],
    },
    {
        text: '',
        items: ['layouts', 'fundRequest',
        /*'pages'*/],
    },/*
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    },*/
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Profile',
        submenu: [
            {
                text: 'Company Profile',
                link: '/companyprofile',
            } /*,
            {
                text: 'Fund Request',
                link: '/customer-update',
            },
            {
                text: 'Delete Customer',
                link: '/customer/customer-delete',
            },
            {
                text: 'Customer List',
                link: '/customer/customer-list',
            }
           ,
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            }*/,
        ],
    },
    fundRequest: {
        icon: 'columns',
        text: 'Fund Request',
        submenu: [           
            {
                text: 'Create Fund Request',
                link: '/fundrequest',
            },
            {
                text: 'View Fund Requests',
                link: '/fundrequest/viewfundrequest',
            },
            {
                text: 'Verification',
                link: '/fundrequest/submitverification',
            },
            {
                text: 'Verification List',
                link: '/fundrequest/verificationlist',
            }
            /*
            ,
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            }*/,
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Fund Request',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
