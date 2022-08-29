import { createRouter, createWebHistory} from 'vue-router'


import registerRoutes from "@/modules/register/router" 
import loginRoutes from "@/modules/login/router"

const ViewHome = () => import('@/views/ViewHome.vue')
const ViewDashBoard = () => import('@/components/DashBoard.vue')

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component: ViewHome
    },
    {
        path:"/dashboard",
        name:"dashboard",
        component: ViewDashBoard
    },
    registerRoutes,
    loginRoutes
        
    ]
});

export default router;