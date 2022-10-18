<template>
     <div class="container-fluid mt-5" style="font-size: 1.2rem">
        <div id="btn regular-font">
          <RouterLink
            :to="{ name: 'employees' }"
            data-cy="employees-tab-link"
            class="dashboard-menu"
          >
            Employees
          </RouterLink>
          <RouterLink
            :to="{ name: 'vendors' }"
            data-cy="vendors-tab-link"
            class="dashboard-menu"
          >
            Vendors
          </RouterLink>
          <RouterLink
            :to="{ name: 'invitations' }"
            data-cy="invitations-tab-link"
            class="dashboard-menu"
          >
            Invitations
          </RouterLink>
        </div>
        <div id="container">
          <RouterView></RouterView>
          <!--Nested Router view -->
          <!-- responds to the button click of the corresponding section -->
        </div>
      </div>
</template>