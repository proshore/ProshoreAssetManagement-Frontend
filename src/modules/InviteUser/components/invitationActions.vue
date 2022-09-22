<script>
import { reInviteUser, revokeUser } from "../services";
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        contact:{
          type:String,
          required:true
        }
        
    },
    methods: {
      bodyData(){
        return   {
                  token:"1bxXVTgMmdgiClqXZ8Rdmg",
                  data:{
                    name: this.name,
                    email: this.email,
                }}
              
      },
        async reInviteMember() {
            try {
                const response = await reInviteUser(this.bodyData());
                //display message coming from response
                console.log(response.data)
            }
            catch (error) {
                console.error("error:", error.message);
            }
        },
        async revokeMember() {
            try {
                const response = await revokeUser(this.bodyData());
                //display message coming from response
                console.log(response.data);

            }
            catch (error) {
              //error message
                console.error("error:", error);
            }
        },
    },
};
</script>

<template>
  <!-- <li class="dropdown bg-secondary" id="myDropdown"> -->
  <div class="btn-group dropstart">
    <button
    class="btn three-dot-btn  d-flex justify-content-center align-items-center"
    data-cy="invitation-action-toggle-btn"
    data-bs-toggle="dropdown"
  ><i class="bi bi-three-dots-vertical" style="color:#FA6731; font-size: 1.5rem;"></i></button>
  <div class="dropdown-menu">
    <li >
      <a
        class="dropdown-item  "
        href="#"
        data-cy="resend-invitation-link"
        @click="reInviteMember({name:name,email:email})"
        > 
        <i class="bi bi-send me-4" style="color:#CED4DA"></i>Resend Invitation
      </a>
    </li>
    <li>
      <a
        class="dropdown-item text-danger "
        href="#"
        data-cy="revoke-invitation-link"
        data-bs-toggle="modal"
        :data-bs-target="'#_'+contact"
      >
      <i class="bi bi-dash-square-fill me-4" style="color:#FA6731"></i>Revoke Member
      </a>
    </li>
    <li>
      <a class="dropdown-item text-danger  " href="#" data-cy="delete-invitation-link">
        <i class="bi bi-trash3-fill me-4" style="color:#FA6731"></i>Delete Entry
      </a>
    </li>
  </div>
  </div>
  

  <!-- Conformation box -->
  <div class="modal fade" :id="'_'+contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title  m-auto ps-5" id="exampleModalLongTitle">Are you sure?</h5>
        <button type="button" class="btn close conformation-box-close-btn second-button-color" data-bs-dismiss="modal" data-cy="conformation-box-close-btn" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex justify-content-center">
        <p class="w-75 text-center">Do you want to revoke the invitation of <b>{{name}}</b> ? Once revoked it cannot be undone.</p>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn conformation-box-no-btn second-button-color" data-cy="conformation-box-no-btn" data-bs-dismiss="modal">No</button>
        <button type="button" class="btn conformation-box-yes-btn text-white button-color" data-cy="conformation-box-yes-btn" @click="revokeMember"  data-bs-dismiss="modal" >Yes</button>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>
.three-dot-btn {
  border:none !important
}
.dropdown-menu {
  /* position: relative !important; */
  /* display: inline; */
  float: right;
}
.modal-header, .modal-footer{
  border:none !important;
}
.modal-title{
  color:#FA6731;
  font-size: 30px;
}
.btn{
  padding: 10px 16px !important;
}
.conformation-box-no-btn{
  background: #FFFFFF;
border: 1px solid #FA6731;
border-radius: 4px;
}

.conformation-box-yes-btn{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
  background: #FA6731;
border-radius: 4px;
}
.conformation-box-close-btn{
  border: 1px solid #CED4DA;
border-radius: 4px;
}
</style>
