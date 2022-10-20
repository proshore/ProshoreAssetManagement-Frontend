import ViewAssets from '../../views/ViewAssets.vue'
import ViewMyAssetList from '../views/ViewMyAssetList.vue'
const myAssetRoutes = [
    {
      path: "my-assets",
      name: "my-assets",
      component: ViewAssets,
      children: [
        {
          path: "list-my-assets",
          name: "list-my-assets",
          component: ViewMyAssetList,
        },
      ],
    },
  ];

  export default myAssetRoutes