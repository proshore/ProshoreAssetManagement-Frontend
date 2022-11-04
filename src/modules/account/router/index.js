import logout from "../utils/logout";
const accountRoutes = [
{
    path: "/logout",
    name: "logout",
    meta: {
      requiresAuth: true,
    },
    beforeEnter:[logout],
  },
];

export default accountRoutes;