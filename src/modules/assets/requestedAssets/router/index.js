import ViewAssets from '../../views/ViewAssets.vue'
import ViewRequestedList from '../views/ViewRequestedList.vue'
const requestedAssetRoutes = [
    {
      path: "requested-assets",
      name: "requested-assets",
      component: ViewAssets,
      children: [
        {
          path: "list-requested-assets",
          name: "list-requested-assets",
          component: ViewRequestedList,
        },
      ],
    },
  ];

  export default requestedAssetRoutes