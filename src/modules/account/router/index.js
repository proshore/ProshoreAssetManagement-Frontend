import logout from "../utils/logout";
const accountsRoutes = [
{
    path: "/logout",
    name: "logout",
    beforeEnter: [logout],
  },
];

export default accountsRoutes;