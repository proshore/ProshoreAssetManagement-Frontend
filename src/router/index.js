import { createRouter, createWebHistory} from 'vue-router'

import registerRoutes from "@/modules/register/router" 

const ViewHome = () => import('@/views/ViewHome.vue')

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component: ViewHome
    },
    registerRoutes
        
    ]
});

export default router;