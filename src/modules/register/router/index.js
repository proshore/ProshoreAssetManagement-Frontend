const ViewRegister = ()=> import("../views/ViewRegister.vue");
const ViewResetPassword = ()=> import("../views/ViewResetPassword.vue");
const registerRoutes =[
  {
    path:"/register",
    name:"register",
    component: ViewRegister,
    //check if the token is valid
    // beforeEnter: () => {
    //     const isInvited = true;
    //     if (!isInvited) {
    //       return false;
    //     }
    // }
},
{
  path:"/reset-password",
  name:"reset-password",
  component:ViewResetPassword
}
]
        

export default registerRoutes;