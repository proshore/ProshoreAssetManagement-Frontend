<script>
import InviteUser from "../components/InviteUser.vue";
import InvitationActions from "../components/invitationActions.vue";
import { invitationList } from "../services";
import { useToast } from "vue-toastification"
//used for testing
import axios from "axios";
export default {
  components: [InviteUser, InvitationActions],
  data() {
    return {
      invitations: [],
    };
  },
  components: { InvitationActions, InviteUser },
  mounted() {
    this.getInvitationList();
    //hello
  },
  computed: {
    styleRole() {
      return (role) => {
        const lowerCaseRole = role.toLowerCase();
        if (lowerCaseRole === "employee") {
          return "role-employee";
        }
        if (lowerCaseRole === "vendor") {
          return "role-vendor";
        }
      };
    },
    styleStatus() {
      return (status) => {
        const lowerCaseStatus = status.toLowerCase();

        if (lowerCaseStatus === "pending") {
          return "status-pending";
        }
        if (lowerCaseStatus === "expired") {
          return "status-expired";
        }
        
      };
    },
    styleDotIcon() {
      return (status) => {

        const lowerCaseStatus = status.toLowerCase()
        if ( lowerCaseStatus === "pending") {
          return "status-pending-icon";
        }
        if (lowerCaseStatus === "expired") {
          return "status-expired-icon";
        }
        
      };
    },
  },
  methods: {
    async getInvitationList() {
      const toast = useToast();
      try {
        //spinner implementation
        window.emitter.emit('changeSpinnerActiveStatus',true)
        const response = await invitationList();
        this.invitations = response.data.data.invited_users;
        window.emitter.emit('changeSpinnerActiveStatus',false)
      } catch (e) {
        // toast message
        window.emitter.emit('changeSpinnerActiveStatus',false)
        toast.error("Something went wrong")
        
      }
 
      return;
    },
    refreshInvitationList() {
      this.getInvitationList();
    },
  },
};
</script>
<template>
  <div class="invitation-container p-4 mt-4 mx-4">
    <div class="row px-3">
      <div class="col-4">
        <form class="form-inline d-flex">
          <input
            class="form-control form-control-lg mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            data-cy="invitations-search-field"
          />
          <button
            class="btn my-2 px-3 my-sm-0 mx-2 button-color"
            type="submit"
            data-cy="invitation-search-btn"
          >
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div class="col-8 d-flex justify-content-end">
        <InviteUser @inviteMember="refreshInvitationList"/>
      </div>
    </div>
    <div class="row mt-4 px-4">
      <table
        class="
          table 
          table-borderless
          border
          table-hover
          bg-white
          regular-font
        "
      >
        <thead class="thead-light">
          <tr class="text-center">
            <th scope="col">S.N</th>
            <th scope="col">Member Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-for="(invitation, index) in invitations" :key="index">
          <!-- The rows will be dynamically generated according to invitationslist data -->
          <tr class="text-center">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ invitation.name }}</td>
            <td>{{ invitation.email }}</td>
            <td :class="`role ${styleRole(invitation.role.name)}`">
              {{ invitation.role.name }}
            </td>
            <td class="d-flex justify-content-center align-items-end py-4">
              <div :class="`status ${styleStatus(invitation.status)}`">
                <div
                  class="status-icon me-2"
                  :class="` ${styleDotIcon(invitation.status)}`"
                ></div>
                {{ invitation.status }}
              </div>
            </td>
            <td>
              <InvitationActions
                :name="invitation.name"
                :email="invitation.email"
                :contact="invitation.contact"
                :id="invitation.id"
                @updateInvite="refreshInvitationList"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.invitation-container {
  background-color: white;
  border-radius: 5px;
}

.thead-light {
  height: 50px !important;
  vertical-align: middle;
  background-color: #e9ecef !important;
}
tr {
  vertical-align: middle;
}
.role {
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.25px;
}
.role-employee {
  color: #3852da;
}
.role-vendor {
  color: #0b102c;
}
.status { 
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  width: fit-content;
  font-weight: 700;
  
}
.status-icon {
  height: 8px;
  width: 8px;
  border-radius: 50%;
}
.status-expired {
  background-color: #ffeded;
  color: black ;
}
.status-expired-icon {
  background-color: #ff4f4f;
}
.status-pending {
  background-color: #fff4da ;
  color: black ;
}
.status-pending-icon {
  background-color: #ffca48;
}
tr {
  vertical-align: middle;
}
.role {
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.25px;
}
.role-employee {
  color: #3852da;
}
.role-vendor {
  color: #0b102c;
}

</style>