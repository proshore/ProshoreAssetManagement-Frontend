<template>
    <div class="container-fluid mt-5" style="font-size: 1.2rem">
       <div id="btn regular-font">
         <RouterLink
           :to="{ name: 'assetslist' }"
           data-cy="assets-tab-link"
           class="dashboard-menu"
         >
           Assets
         </RouterLink>
         <RouterLink
           :to="{ name: 'list-my-assets' }"
           data-cy="my-assets-tab-link"
           class="dashboard-menu"
         >
           My Assets
         </RouterLink>
       </div>
       

       <div id="container">
         <RouterView></RouterView>
       </div>
     </div>
</template>