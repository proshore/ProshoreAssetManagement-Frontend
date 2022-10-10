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
           :to="{ name: 'list-requested-assets' }"
           data-cy="requested-assets-tab-link"
           class="dashboard-menu"
         >
           Requested Assets
         </RouterLink>
       </div>
       

       <div id="container">
         <RouterView></RouterView>
         <!--Nested Router view -->
         <!-- responds to the button click of the corresponding section -->
       </div>
     </div>
</template>