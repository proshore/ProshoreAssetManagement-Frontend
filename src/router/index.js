import { createRouter, createWebHistory} from 'vue-router'

import loginRoutes from "../modules/login/router" 

const ViewHome = () => import('../views/ViewHome.vue')

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component: ViewHome
    },
    loginRoutes
        
    ]
});

export default router;