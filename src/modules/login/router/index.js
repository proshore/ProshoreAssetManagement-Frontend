const ViewLogin = ()=> import("../views/ViewLogin.vue");

const loginRoutes = 
        {
            path:"/login",
            name:"login",
            component: ViewLogin
    }

export default loginRoutes;