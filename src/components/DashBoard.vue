<script>


export default {
    name: "DashBoard",
    data() {
        return {
            notificationCount: 2,
        };
    },
   
};
</script>

<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar-->
    <div class="border-end bg-white" id="sidebar-wrapper">
      <div class="sidebar-frame ">
        <img
          class="logo-frame position-fixed"
          src="@/assets/images/proshorelogoo.png"
          alt=""
        />
        <div class="panel position-fixed mt-5">
          <div class="upper-panel">
            <div class="manage-panels " >
              <RouterLink
                class="text-decoration-none panel-link "
                tabindex= "1"
                data-cy="team-section-link"
                :to="{ name: 'team' }"
              >
                <div class="panels mb-2 ">
                  <div
                    class="
                      dashboard
                      d-flex
                      align-items-center
                      bold-font
                      mt-1
                      ms-2
                    "
                  >
                    <i
                      class="bi bi-person-fill me-4"
                      style="
                        color: #fa6731;
                        font-size: 1.4rem;
                        margin-bottom: 5px;
                      "
                    ></i>
                    Team
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
          
          <div class="upper-panel">
            <div class="manage-panels">
              <RouterLink
                class="text-decoration-none panel-link"
                tabindex="1"
                data-cy="assets-section-link"
                :to="{ name: 'assets' }"
              >
                <div class="panels">
                  <div
                    class="
                      dashboard
                      d-flex
                      align-items-center
                      bold-font
                      mt-1
                      ms-2
                    "
                  >
                    <i
                      class="bi bi-bank me-4"
                      style="
                        color: #fa6731;
                        font-size: 1.4rem;
                        margin-bottom: 5px;
                      "
                    ></i>
                    Assets
                  </div>
                </div>
              </RouterLink>
              
            </div>
          </div>
          <footer>
            <div class="upper-panels">
            <div class="panels-1">
              <div class="dashboard  d-flex align-items-center bold-font" style="color:#6C757D"><i class="bi bi-gear-fill me-4" style="color:#6C757D; font-size: 1.4rem;"></i>Settings</div>
            </div>
          </div>
          </footer>
        </div>
      </div>
    </div>
    <!-- Page content wrapper-->
    <div id="page-content-wrapper">
      <!-- Top navigation-->
      <nav class="navbar navbar-expand-lg border-bottom border-3">
        <div class="container-fluid">
          <p class="h4 bold-font">Team</p>
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
                  ><div class="notification-count" :v-if="notificationCount">
                    {{ notificationCount }}
                  </div>
                  <i class="bi bi-bell" style="font-size: 1.5rem"></i
                ></a>
              </li>
              <li class="nav-item d-flex mx-2 align-items-center">
                <div class="dropdown dropstart">
                  <div
                  class="navbar-account-icon d-flex align-items-center justify-content-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-cy="navbar-account-dropdown">
                    <i class="bi bi-person-circle hover-effect" style="font-size: 1.8rem"></i>
                  </div>
                 
                 
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        data-cy="navbar-account-profile-link"
                        class="dropdown-item d-flex align-items-center"
                        href="#!"
                        ><i
                          class="bi bi-person-circle me-3"
                          style="color: #fa6731; font-size: 1.4rem"
                        ></i
                        >Profile</a
                      >
                    </li>
                    <div class="dropdown-divider"></div>
                    <li>
                      <RouterLink
                        data-cy="navbar-account-logout-link"
                        class="dropdown-item d-flex align-items-center"
                        :to="{ name: 'logout' }"
                        ><i
                          class="bi bi-box-arrow-right me-3"
                          style="color: #fa6731; font-size: 1.4rem"
                        ></i
                        >Logout</RouterLink
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Page content-->
      <RouterView></RouterView>
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
.hover-effect{
  transition: 0.8s
}
.hover-effect:hover{
  color: #862112
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
  width:240px;
  margin-bottom: 10px;
}

.manage-panels {
  padding: 0px 16px;
}

.panels {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #feefea;
  border-radius: 40px;
  gap: 12px;
  padding: 8px 16px;
  transition: 0.8s;
}
.panels:hover {
  background-color: #862112;
}
.panels:hover .dashboard {
  color: white;
}

.panels[tabindex]:focus {
    background-color: #862112 ;
}

.dashboard {
  color: #fa6731;
  letter-spacing: 0.15px;
  line-height: 6px;
  margin-top: -1px;
  min-width: 42px;
  white-space: nowrap;
}

.dashboard-menu {
  border: none;
  padding: 15px;
  text-decoration: none;
  color: black;
}
.dashboard-menu:hover {
  color: #fa6731;
}
.router-link-exact-active {
  border-radius: 5px;
  color: white;
  background-color: #fa6731;
}

.router-link-exact-active:hover {
  color: white;
}
.navbar-account-icon {
  border-radius: 50%;
  color: #fa6731;
}
.nav-link {
  position: relative;
}
.notification-count {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: 0;
  top: 0;
  color: white;
  text-align: center;
  font-size: 10px;
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

footer{
  position: fixed;
  bottom: 0;
  
}


</style>