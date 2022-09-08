<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "DashBoard",
};
</script>

<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar-->
    <div class="border-end bg-white" id="sidebar-wrapper">
      <div class="sidebar-frame">
        <img class="logo-frame" src="@/assets/proshorelogoo.png" alt="" />
        <div class="panel">
          <div class="upper-panel">
            <div class="manage-panels">
              <div class="panels">
                <img src="" alt="" />
                <div class="dashboard">Team</div>
              </div>
            </div>
          </div>
          <div class="upper-panels">
            <div class="panels-1">
              <img src="0" alt="" />
              <div class="dashboard-1">Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content wrapper-->
    <div id="page-content-wrapper">
      <!-- Top navigation-->
      <nav class="navbar navbar-expand-lg border-bottom border-3">
        <div class="container-fluid">
          <p class="h2">Team</p>
          <button
            data-cy="navbar-toggle-button"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" data-cy="navbar-notifcations-link" href="#!"
                  >Notifications</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  data-cy="navbar-account-dropdown"
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Account</a
                >
                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    data-cy="navbar-account-profile-link"
                    class="dropdown-item"
                    href="#!"
                    >Profile</a
                  >
                  <a
                    data-cy="navbar-account-logout-link"
                    class="dropdown-item"
                    href="#!"
                    >Logout</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Page content-->
      <div class="container-fluid">
        <div id="btn">
          <RouterLink :to="{ name: 'employees' }"
            ><button
              type="button"
              data-cy="employees-tab-btn"
              class="btn btn-success"
            >
              Employees
            </button></RouterLink
          >
          <RouterLink :to="{ name: 'vendors' }"
            ><button
              type="button"
              data-cy="vendors-tab-btn"
              class="btn btn-success"
            >
              Vendors
            </button></RouterLink
          >
          <RouterLink :to="{ name: 'invitations' }"
            ><button
              type="button"
              data-cy="invitations-tab-btn"
              class="btn btn-success"
            >
              Invitations
            </button></RouterLink
          >
        </div>
        <div id="container">
          <RouterView></RouterView>
          <!--Nested Router view -->
          <!-- responds to the button click of the corresponding section -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#wrapper {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
  background-color: #e9ecef;
}

body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
  margin-left: 0;
}
#btn {
  margin-top: 3rem;
}
#btn button {
  margin: 0.3rem;
}
@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  body.sb-sidenav-toggled #wrapper #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.sidebar-frame {
  align-items: flex-start;
  align-self: stretch;
  background-color: white;
  box-shadow: 4px 4px 25px #00000008;
  display: flex;
  flex-direction: column;
  width: 250px;
}

.panel {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
}
.upper-panel {
  align-self: stretch;
  display: flex;
  flex-direction: column;
}

.manage-panels {
  padding: 0px 16px;
}

.panels {
  align-items: center;
  background-color: #feefea;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 16px;
}

.dashboard {
  color: black;
  letter-spacing: 0.15px;
  line-height: 6px;
  margin-top: -1px;
  min-width: 42px;
  white-space: nowrap;
}

.panels-icons {
  height: 24px;
  min-width: 24px;
}

.panels-1 {
  gap: 16px;
  padding: 8px 32px;
}

.dashboard-1 {
  color: black;
  letter-spacing: 0.15px;
  line-height: 24px;
  margin-top: 700px;
  min-width: 67px;
  white-space: nowrap;
}

.logo-frame {
  align-self: stretch;
  height: 64px;
  min-width: 250px;
}
</style>