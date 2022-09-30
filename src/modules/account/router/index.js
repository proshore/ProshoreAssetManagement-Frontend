import logout from "../utils/logout";
const accountRoutes = [
{
    path: "/logout",
    name: "logout",
    beforeEnter:[logout],
  },
];

export default accountRoutes;