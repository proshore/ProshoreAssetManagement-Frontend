const ViewRegister = ()=> import("../views/ViewRegister.vue");

const registerRoutes =[
  {
    path:"/register/:token",
    name:"register",
    component: ViewRegister,
    meta: {
      mailForm: true,
    }
    //check if the token is valid
    // beforeEnter: () => {
    //     const isInvited = true;
    //     if (!isInvited) {
    //       return false;
    //     }
    // }
}
]
        

export default registerRoutes;