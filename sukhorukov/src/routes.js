import {ProfileContainer} from 'containers/ProfileContainer'
import {Error} from 'components/error'
import {MessengerContainer} from 'containers/MessengerContainer'

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerContainer
    },
    {
        path: '/profile',
        exact: true,
        component: ProfileContainer
    },
    {
        path: '/chat/:id([0-9]+)',
        exact: true,
        component: MessengerContainer
    },
    {
        path: '*',
        exact: false,
        component: Error
    },
]
