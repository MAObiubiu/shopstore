import Vue from 'vue'
import Router from 'vue-router'

import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
import xiangqing from '@/views/xiangqing'
import beizi from '@/views/beizi'
Vue.use(Router);

const routes = [{
        path: '/',
        name: 'GoodsList',
        component: GoodsList
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/goods',
        name: 'GoodsList',
        component: GoodsList
    },
    {
        path: '/address',
        name: 'Address',
        component: Address
    },
    {
        path: '/orderConfirm',
        name: 'OrderConfirm',
        component: OrderConfirm
    },
    {
        path: '/orderSuccess',
        name: 'OrderSuccess',
        component: OrderSuccess
    },
    {
        path: '/xiangqing',
        name: 'xiangqing',
        component: xiangqing
    },
    {
        path: '/beizi',
        name: 'beizi',
        component: beizi
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router