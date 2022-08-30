import { createRouter, createWebHistory} from 'vue-router'


import registerRoutes from "@/modules/register/router" 
import loginRoutes from "@/modules/login/router"

const ViewHome = () => import('@/views/ViewHome.vue')
const ViewDashBoard = () => import('@/components/DashBoard.vue')
const InvitationsList = () => import('@/modules/InviteUser/components/invitationsList.vue')
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
        component: ViewDashBoard,
        children:[
            {
                path:'employees',
                name:'employees',

            },
            {
                path:'vendors',
                name:'vendors',
            },
            {
                path:'invitations',
                name:'invitations',
                component:InvitationsList
            }
        ]
    },
    registerRoutes,
    loginRoutes
        
    ]
});

export default router;