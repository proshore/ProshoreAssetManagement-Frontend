const ViewLogin = ()=> import("../views/ViewLogin.vue");
const ForgotPassword = ()=> import("../views/ViewForgotPassword.vue")
const SentMail = ()=> import("../views/SentMail.vue")
const ViewResetPassword = ()=> import("../views/ViewResetPassword.vue")
const loginRoutes = [
        {
            path:"/",
            name:"login",
            component: ViewLogin
    },
    {
        path:"/forgotpassword",
        name:"forgotpassword",
        component:ForgotPassword
    },
    {
        path:"/sentmail",
        name:"sentmail",
        component:SentMail
    },
    {
        path:"/resetpassword",
        name:"resetpassword",
        component:ViewResetPassword,
        meta: {
            mailForm: true,
          }
    }
   

]

export default loginRoutes;