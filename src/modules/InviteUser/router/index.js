const ViewInvite = ()=> import("../views/InviteUser.vue");

const inviteRoutes = 
        {
            path:"/invite",
            name:"invite",
            component: ViewInvite
    }

export default inviteRoutes;