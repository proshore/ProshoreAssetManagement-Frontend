const ViewRegister = ()=> import("../views/ViewRegister.vue");

const registerRoutes = 
        {
            path:"/register",
            name:"register",
            component: ViewRegister,
            beforeEnter: () => {
                const isInvited = true;
                if (!isInvited) {
                  return false;
                }
            }
    }

export default registerRoutes;