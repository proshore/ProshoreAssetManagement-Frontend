const ViewAssets = () => import("../views/ViewAssets.vue")
const ViewAssetsList = () => import("../views/ViewAssetsList.vue")
const assetsRoutes=[
    {
        path:'assets',
        name:'assets',
        component:ViewAssets,
        redirect:{name:"assetslist"},
        meta: {
            requiresAuth: true,
          },
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