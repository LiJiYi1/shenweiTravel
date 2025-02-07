

const login=()=>import('@/views/login/loginComponent.vue')
const notFound = () => import('@/views/404/404Component.vue')
//主页和大屏
const homeBigScreen=()=>import('@/views/bigScreen&home/indexComponent.vue')
const home=()=>import('@/views/bigScreen&home/home/homeComponet.vue')
const bigScreen =()=>import('@/views/bigScreen/bigScreen.vue')
//权限管理
const permission=()=>import('@/views/permission/permissionCharge.vue')
const userCharge=()=>import('@/views/permission/uersCharge.vue')
const roleCharge = () => import('@/views/permission/roleCharge.vue')
const menuCharge = () => import('@/views/permission/menuCharge.vue')
//商品管理
//一级路由
const goodsCharge=()=>import('@/views/goods/goodsCharge.vue')
//二级路由
const SKUCharge=()=>import('@/views/goods/SKUCharge.vue')
const attributeCharge = () => import('@/views/goods/attributeCharge.vue')
const SPUCharge = () => import('@/views/goods/SPUCharge.vue')
const brandCharge =()=>import('@/views/goods/brandCharge.vue')
const route=[
    {
        path: '/login',
        component: login,
        name: 'login'//命名--用于权限控制
    },
    {
        path:'/',
        redirect:'/login',
    },
    {
        path: '/404',
        component: notFound,
        name: '404',//404的路由
        meta: {
            icon: 'HomeFilled',
            title: '首页'
        }
    },
    {
        path: '/bigScreen',
        component: bigScreen,
        name: 'bigScreen',//其他路由
        meta: {
            icon: 'Monitor',
            title: '大屏'
        }
    },
    {
        path:'/home&bigScreen',
        name:"home&bigScreen",
        component:homeBigScreen,
        children:[
      
            {
                path: '/home',
                component: home,
                name: 'home',//主页的路由
                meta: {
                    icon: 'HomeFilled',
                    title: '首页'
                },

            },
        ]
    },
    {
        path:"/permission",
        component:permission,
        name:'permission',
        meta: {
            icon: 'Lock',
            title: '权限管理'
        },
        redirect:'/permission/userCharge',
        children:[
        {
        path:'/permission/userCharge',
        component:userCharge,
        name:'用户管理',
                meta: {
                    icon: 'User',
                    title: '用户管理'
                }
        },
        {
        path: '/permission/roleCharge',
        component: roleCharge,
        name:'角色管理',
            meta: {
                icon: 'UserFilled',
                title: '角色管理'
            }
        },
        {
        path: '/permission/menuCharge',
        component: menuCharge,
        name:"菜单管理",
            meta: {
                icon: 'Menu',
                title: '菜单管理'
            }
        },
      
    ]
    },
    {
        path: "/goodsCharge",
        component: goodsCharge,
        name: 'goodsCharge',
        meta: {
            icon: 'ShoppingBag',
            title: '商品管理'
        },
        redirect:'/goodsCharge/brandCharge',
        children: [
        
            {
                path: '/goodsCharge/attributeCharge',
                component: attributeCharge,
                name: '属性管理',
                meta: {
                    icon: 'QuestionFilled',
                    title: '属性管理'
                }
            },
            {
                path: '/goodsCharge/SKUCharge',
                component: SKUCharge,
                name: 'SKU管理',
                meta: {
                    icon: 'Menu',
                    title: 'SKU管理'
                }
            },
            {
                path: '/goodsCharge/SPUCharge',
                component:SPUCharge,
                name: "SPU管理",
                meta: {
                    icon: 'Menu',
                    title: 'SPU管理'
                }
            },
            {
                path: '/goodsCharge/brandCharge',
                component: brandCharge,
                name: "品牌管理",
                meta: {
                    icon: 'ShoppingCart',
                    title: '品牌管理'
                }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'//其他路由
    }
]
export {route}