const ViewTeam = () => import("@/modules/team/views/ViewTeam.vue")
const ViewInvitations = () => import("@/modules/InviteUser/views/ViewInvitations.vue");
const teamRoutes = [
    {
        path: "team",
        name: "team",
        component: ViewTeam,
        redirect:{name:"invitations"},

        children: [
          {
            path: "invitations",
            name: "invitations",
            component: ViewInvitations,
          },
          {
            path: "employees",
            name: "employees",
          },
          {
            path: "vendors",
            name: "vendors",
          },
        ],
      },


]

export default teamRoutes;