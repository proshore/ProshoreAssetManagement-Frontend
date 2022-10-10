import { createRouter, createWebHistory } from "vue-router";

import registerRoutes from "@/modules/register/router";
import loginRoutes from "@/modules/login/router";
import inviteRoutes from "@/modules/InviteUser/router";
import accountRoutes from "@/modules/account/router";
import teamRoutes from "@/modules/team/router"
import assetsRoutes from "@/modules/assets/router"
import requestedAssetRoutes from "@/modules/assets/requestedAssets/router"
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
      //redirect: "dashboard/team/invitations",
      children: [
        ...teamRoutes,
      ...assetsRoutes,
      ...requestedAssetRoutes
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

export default router;
