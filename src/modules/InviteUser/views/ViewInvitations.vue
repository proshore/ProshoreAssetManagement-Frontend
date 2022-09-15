<script>
    import InviteUser from '../components/InviteUser.vue'
    import InvitationActions from '../components/invitationActions.vue';
    import axios from 'axios'
    export default{
    components: [
        InviteUser,
        InvitationActions
    ],
    data() {
        return {
            invitations: []
        };
    },
    components: { InvitationActions,InviteUser },
    async created(){
      try{
        const response = await axios.get(`https://6319958e8e51a64d2be7568b.mockapi.io/invitedUsers`);
        this.invitations = response.data;
      }catch(e){
        console.error(e);
      }
    },
    computed:{
        styleRole(){
          return role =>{
          if (role.toLowerCase() == "employee") {
            return "role-employee"
          }
          if (role.toLowerCase() =="vendor") {
            return "role-vendor"
          }
        }
        },
        styleStatus(){
      return status =>{
        if (status.toLowerCase() =="pending"){
          return "status-pending"
        }
        if (status.toLowerCase() == "expired") {
          return "status-expired";
        }
      };
    },
    styleDotIcon(){
      return status =>{
        if (status.toLowerCase() =="pending"){
          return "status-pending-icon"
        }
        if (status.toLowerCase() == "expired") {
          return "status-expired-icon";
        }
      }
    }
  },
};
</script>
<template>
  <div class="invitation-container p-4 mt-4 mx-4">
    <div class="row px-3">
      <div class="col-4">
        <form class="form-inline d-flex">
          <input
            class="form-control form-control-lg mr-sm-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn my-2 px-3 my-sm-0 mx-2 button-color" type="submit">
            <i class="bi bi-search" ></i>
          </button>
        </form>
      </div>
      <div class="col-8 d-flex justify-content-end">
        <InviteUser />
      </div>
    </div>
    <div class="row mt-4 px-4">
      <table
        class="table table-borderless border table-hover table-sm bg-white"
      >
        <thead class="thead-light ">
          <tr class="text-center">
            <th scope="col">S.N</th>
            <th scope="col">Member Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Contact Number</th>
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
            <td>{{ invitation.contact }}</td>
            <td :class="`role ${styleRole(invitation.role)}`">
              {{ invitation.role }}
            </td>
            <td >
              
              <div :class="`status ${styleStatus(invitation.status)}`">
                <div class=" status-icon me-2" :class="` ${styleDotIcon(invitation.status)}`"></div> {{ invitation.status }}
              </div>
            </td>
            <td >
              <InvitationActions
                :name="invitation.name"
                :email="invitation.email"
                :contact="invitation.contact"
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
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  width: fit-content;
}
.status-icon{
  height:8px;
  width:8px;
  border-radius:50%;
}
.status-expired {
  background-color: #ffeded;
  color: black !important;
}
.status-expired-icon{
 background-color:#FF4F4F;
}
.status-pending {
  background-color: #fff4da !important;
  color: black !important;
}
.status-pending-icon{
  background-color:#FFCA48;
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
.status-expired {
  background-color: #ffeded;
  color: #ff4f4f;
  
}
.status-pending {
  background-color: #fff4da;
  color: #ffca48;
}
</style>