import { createRouter, createWebHistory } from "vue-router";
import getToken from "../utils/getToken";
import registerRoutes from "@/modules/register/router";
import loginRoutes from "@/modules/login/router";
import inviteRoutes from "@/modules/InviteUser/router";
import accountRoutes from "@/modules/account/router";
import teamRoutes from "@/modules/team/router"
import assetsRoutes from "@/modules/assets/router"
import myAssetRoutes from "@/modules/assets/requestedAssets/router"
// const ViewHome = () => import('@/views/ViewHome.vue')
const ViewDashBoard = () => import("@/components/DashBoard.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //     {
    //         path:"/",
    //         name:"home",
    //         component: ViewHome
    // },
    {
      path: "/dashboard",
      name: "dashboard",
      component: ViewDashBoard,
      meta: {
        requiresAuth: true,
      },
      redirect: "dashboard/team/invitations",
      children: [
        ...teamRoutes,
      ...assetsRoutes,
      ...myAssetRoutes
      ],
    },
    ...registerRoutes,
    ...loginRoutes,
    ...accountRoutes,
  //   {
  //     path: '/:catchAll(.*)',
  //     name: 'ErrorPage',
  //     component: ErrorPage
  //  }
  ],
  
});
router.beforeEach((to, from) => {
  const isLoggedIn = getToken()
  
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
 
    
    if (to.meta.requiresAuth && isLoggedIn === undefined ) {
      // this route requires auth, check if logged in
    // if not, redirect to login page.
      return { name: "login", 
       // save the location we were at to come back later
      query: { next: to.fullPath } };
    } else if (isLoggedIn && !to.meta.requiresAuth) {
      return { name: "dashboard" };
    }
})
export default router;