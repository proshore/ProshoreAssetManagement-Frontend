import { createRouter, createWebHistory} from 'vue-router'

import loginRoutes from "../modules/login/router" 
import inviteRoutes from "../modules/inviteUser/router"

const ViewHome = () => import('../views/ViewHome.vue')

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component: ViewHome
    },
    loginRoutes,
    inviteRoutes
        
    ]
});

export default router;