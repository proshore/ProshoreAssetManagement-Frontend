const ViewAssets = () => import("../views/ViewAssets.vue")
const ViewAssetsList = () => import("../views/ViewAssetsList.vue")
const assetsRoutes=[
    {
        path:'assets',
        name:'assets',
        component:ViewAssets,
        meta: {
            requiresAuth: true,
          },
        // redirect:'assets/assetslist',
        children:[
            {
            path:'assetslist',
            name:'assetslist',
            component:ViewAssetsList
        }
          
        ]
    }
]



export default assetsRoutes