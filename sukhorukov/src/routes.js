import {Profile} from 'pages/Profile'
import {Error} from 'pages/Error'
import {App} from 'components/app'

export const routes = [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/profile/:name',
        exact: true,
        component: Profile
    },
    {
        path: '/chat/:id([0-9]+)',
        exact: true,
        component: App
    },
    {
        path: '*',
        exact: false,
        component: Error
    },
]