const ViewRegister = ()=> import("../views/ViewRegister.vue");

const registerRoutes = 
        {
            path:"/register",
            name:"register",
            component: ViewRegister

    }

export default registerRoutes;