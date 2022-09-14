const ViewLogin = ()=> import("../views/ViewLogin.vue");
const ForgotPassword = ()=> import("../views/ViewForgotPassword.vue")
const SentMail = ()=> import("../views/SentMail.vue")

const loginRoutes = [
        {
            path:"/login",
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
    }
   

]

export default loginRoutes;