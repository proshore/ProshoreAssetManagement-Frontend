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
      // try{
      //   const response = await axios.get(`http://localhost:3000/invited_users`);
      //   this.invitations = response.data;
      // }catch(e){
      //   console.error(e);
      // }
    },
    computed:{
        styleRole(){
          return role =>{
          console.log('role:',role);
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
  },
};
</script>
<template>
  <div class="invitation-container p-4 mt-4 mx-4">
    <div class="row px-3">
      <div class="col-4">
        <form class="form-inline d-flex">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn search-btn my-2 my-sm-0 mx-2" type="submit">
            Search
          </button>
        </form>
      </div>
      <div class="col-8 d-flex justify-content-end">
        <InviteUser />
      </div>
    </div>
    <div class="row mt-4 px-4">
      <table
        class="table table-borderless border table-hover table-md bg-white"
      >
        <thead class="thead-light">
          <tr>
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
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ invitation.name }}</td>
            <td>{{ invitation.email }}</td>
            <td>{{ invitation.contact }}</td>
            <td :class="`role ${styleRole(invitation.role)}`">
              {{ invitation.role }}
            </td>
            <td>
              <div :class="`status ${styleStatus(invitation.status)}`">
                {{ invitation.status }}
              </div>
            </td>
            <td>
              <InvitationActions
                :name="invitation.name"
                :email="invitation.email"
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
.search-btn {
  background-color: #fa6731 !important;
  color: #e9ecef;
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
}
.status-expired {
  background-color: #ffeded;
  color: #ff4f4f;
}
.status-pending {
  background-color: #fff4da !important;
  color: #ffca48;
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