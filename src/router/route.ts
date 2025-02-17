//引入能切换语言的文字
const login=()=>import('@/views/login/loginComponent.vue')
const notFound = () => import('@/views/404/404Component.vue')
//主页和大屏
const homeBigScreen=()=>import('@/views/bigScreen&home/indexComponent.vue')
const home=()=>import('@/views/bigScreen&home/home/homeComponet.vue')
const bigScreen =()=>import('@/views/bigScreen/bigScreen.vue')
//酒店路由
const Hotel = () => import('@/views/Hotel/hotelComponent.vue')
const Domestic = () => import('@/views/Hotel/Domestic/DomesticHotel.vue')
const Overseas= () => import('@/views/Hotel/Overseas/OverseasHotel.vue')
//飞机票路由
const airTicket=()=>import('@/views/Air ticket/AirTicket.vue')
const DomesticAir=()=>import('@/views/Air ticket/DomesticAir/DomesticAir.vue')
const InternationalAir = () => import('@/views/Air ticket/InternationalAir/InternationalAir.vue')
//火车票路由
const trainTicket = () => import('@/views/Train ticket/TrainTicket.vue')
const DomesticTrain = () => import('@/views/Train ticket/DomesticTrain/DomesticTrain.vue')
const InternationalTrain = () => import('@/views/Train ticket/InternationalTrain/InternationalTrain.vue')
//汽车船票
const busBoat = () => import('@/views/busBoat/busBoat.vue')
const bus = () => import('@/views/busBoat/bus/busTicket.vue')
const boat = () => import('@/views/busBoat/boat/boatTicket.vue')
//门票活动
const ticket = () => import('@/views/ticket/ticketComponent.vue')
//租车
const RentCar = () => import('@/views/RentCar/RentCar.vue')
//旅游
const travel = () => import('@/views/travel/travelComponent.vue')
//全球购
const Global = () => import('@/views/global Shopping/globalShopping.vue')
const exchange=()=>import('@/views/global Shopping/exchangeMoney/exchangeMoney.vue')
const UnionPay=()=>import('@/views/global Shopping/UnionPay/UnionPay.vue')
const purChase=()=>import('@/views/global Shopping/Purchase/PurchaseComponent.vue')
//关于
const about=()=>import('@/views/about/aboutComponent.vue')
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
                    title: '首页',
                    Entitle:'Home'
                },

            },
        ]
    },
    {
     path:'/hotel',
     name:"hotel",
     component:Hotel,
     redirect:"/hotel/Demostic",
     children:[
      {
             path: '/hotel/Demostic',
             name: "Demostic",
             component: Domestic ,
             meta: {
                 icon: 'MapLocation',
                 title: '国内酒店',
                 Entitle: "Domestic hotels"
             }
      },
      {
         path: '/hotel/Overseas',
         name: "Overseas",
          component: Overseas,
          meta: {
              icon: 'Location',
              title: '海外酒店',
              Entitle: " Overseas hotels"
          }
         },
         

     ],
     meta: {
         icon: 'OfficeBuilding',
         title: '酒店',
         Entitle:"Hotel"
     }
    },
    {
        path: '/airTicket',
        name: "airTicket",
        component: airTicket,
        redirect:"/airTicket/DomesticAir",
        children:[
            {
                path: '/airTicket/DomesticAir',
                name: "DomesticAir",
                component: DomesticAir,
                meta:{
                    title:'国内',
                    Entitle:"Domestic",
                    icon: 'MapLocation',
                }
            },
            {
                path: '/airTicket/InternationalAir',
                name: "InternationalAir",
                component: InternationalAir,
                meta: {
                    title: '国际/中国港澳台',
                    Entitle: "International/China Hong Kong Macao Taiwan",
                    icon: 'Location',
                }
            }
        ],
        meta: {
            icon: 'Promotion',
            title: '飞机票',
            Entitle:"Air Ticket"
        }
    },
    {
        path: '/trainTicket',
        name: "trainTicket",
        component: trainTicket,
        redirect:"/trainTicket/DomesticTrain",
        children: [
            {
                path: '/trainTicket/DomesticTrain',
                name: "DomesticTrain",
                component: DomesticTrain,
                meta: {
                    title: '国内火车票',
                    Entitle: "Domestic train ticket",
                    icon: 'MapLocation',
                }
            },
            {
                path: '/trainTicket/InternationalTrain',
                name: "InternationalTrain",
                component: InternationalTrain,
                meta: {
                    title: '境外火车票',
                    Entitle: "Overseas train ticket",
                    icon: 'Location',
                }
            }
        ],
        meta: {
            icon: 'Van',
            title: '火车票',
            Entitle: "Train Ticket"
        }
    },
    {
        path: '/busBoat',
        name: "busBoat",
        component: busBoat,
        redirect:"/busBoat/bus",
        children: [
            {
                path: '/busBoat/bus',
                name: "bus",
                component: bus,
                meta: {
                    title: '汽车票',
                    Entitle: "Bus ticket",
                    icon: 'Guide',
                }
            },
            {
                path: '/busBoat/boat',
                name: "boat",
                component: boat,
                meta: {
                    title: '船票',
                    Entitle: "Boat ticket",
                    icon: 'Ship',
                }
            }
        ],
        meta: {
            icon: 'Ship',
            title: '汽车/船票',
            Entitle:"Bus ticket/Boat ticket"
        }
    },
    {
        path: '/ticket',
        name: "ticket",
        component: ticket,
        meta: {
            icon: 'Ticket',
            title: '门票.活动',
        }
    },
    {
        path: '/RentCar',
        name: "RentCar",
        component: RentCar,
        meta: {
            icon: 'Bicycle',
            title: '用车',
        }
    },
    {
        path: '/travel',
        name: "travel",
        component: travel,
        meta: {
            icon: 'Flag',
            title: '旅游',
        }
    },
    {
        path: '/Global',
        name: "Global",
        component: Global,
        redirect:'/Global/purChase',
        meta: {
            icon: 'ShoppingBag',
            title: '全球购',
            Entitle:'Global shopping'
        },
        children: [
            {
                path: '/Global/exchangeMoney',
                name: "exchangeMoney",
                component: exchange,
                meta: {
                    icon: 'Wallet',
                    title: '外币兑换',
                    Entitle:'Foreign exchange'
                }
            },
            {
                path: '/Global/UnionPay',
                name: "UnionPay",
                component: UnionPay,
                meta: {
                    icon: 'WalletFilled',
                    title: '银联特惠',
                    Entitle: 'UnionPay special offers'
                }
            },
            {
                path: '/Global/purChase',
                name: "purChase",
                component: purChase,
                meta: {
                    icon: 'WalletFilled',
                    title: '名店购',
                    Entitle: 'Famous store purchase'
                }
            },
        ],
    },
    {
        path: '/about',
        name: "about",
        component: about,
        meta: {
            icon: 'Menu',
            title: '关于神威',
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'any'//其他路由
    }
]
export {route}