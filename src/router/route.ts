const login=()=>import('@/views/login/loginComponent.vue')
const home=()=>import('@/views/home/homeComponet.vue')
const notFound = () => import('@/views/404/404Component.vue')
const route=[
    {
        path: '/login',
        component: login,
        name: 'login'//命名--用于权限控制
    },
    {
        path: '/',
        component: home,
        name: 'home'//主页的路由
    },
    {
        path: '/404',
        component: notFound,
        name: '404'//404的路由
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'//其他路由
    }
]
export {route}