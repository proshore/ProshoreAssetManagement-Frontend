import { createRouter, createWebHistory} from 'vue-router'

import registerRoutes from "@/modules/register/router" 
import loginRoutes from "@/modules/login/router"
import inviteRoutes from "@/modules/InviteUser/router"

const ViewHome = () => import('@/views/ViewHome.vue')

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component: ViewHome
    },
    registerRoutes,
    loginRoutes,
    inviteRoutes
        
    ]
});

export default router;