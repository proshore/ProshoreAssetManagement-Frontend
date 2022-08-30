const reInvite =import('../utils/reInvite')

const ViewInvite = ()=> import("../components/InviteUser.vue");

const inviteRoutes = [
        {
            path:"/invite",
            name:"invite",
            component: ViewInvite
    }
    ,
    
]

export default inviteRoutes;