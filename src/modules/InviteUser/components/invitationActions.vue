<script>
import { reInviteUser, revokeUser } from "../services";
import { useToast } from "vue-toastification"
export default {
  data(){
    return {
      modalInvoker:{
        text:"",
        method: null
    }
    }
  
  },
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
          // required:true
        },
        id:{
          type:Number,
          required:true
        }
        
    },
    emits: ['deleteInvite'],
    methods: {
      bodyData(){
        return   {
                    id:this.id,
                    name: this.name,
                    email: this.email,
                }
              
      },
        async reInviteMember() {
          const toast = useToast();
            try {
                const response = await reInviteUser(this.bodyData());
                toast.success(`reinvited ${this.name} successfully`);
                
            }
            catch (error) {
              toast.error(`Something went wrong`);
            }
        },
        async revokeMember() {
          const toast = useToast();
            try {
                const response = await revokeUser(this.bodyData());
                toast.success(`revoked ${this.name} successfully`);
                this.$emit('updateInvite')
            }
            catch (error) {
              toast.error(`User Cannot Be Revoked`);
            }
        },
        async deleteMember(){
          const toast = useToast();
          try{
            // const response = await deleteUser(this.id);
            // if (response.data.status === true){
              const response = await axios.delete(
          `https://6319958e8e51a64d2be7568b.mockapi.io/invitedUsers/${this.id}`   // used only for testing
        );
              this.$emit('updateInvite')
            // }
            //show success message in toast
            toast.success(`deleted ${this.name} successfully`);
          }
          catch(error){
            //toast message
            toast.error(`Something went wrong`);
          }
        },
        setInvoker(event){
          if (event.target.id === "revoke")
          {
            this.modalInvoker.text = 'revoke'
            this.modalInvoker.method = this.revokeMember
          }
          if (event.target.id === "delete"){
            this.modalInvoker.text = 'delete'
            this.modalInvoker.method = this.deleteMember   
          }
            
        }
        
        }
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
        :data-bs-target="'#_'+id.toString()"
        id ='revoke'
        @click="(event)=>setInvoker(event)"
      >
      <i class="bi bi-dash-square-fill me-4" style="color:#FA6731" ></i>Revoke Member
      </a>
    </li>
    <li>
      <a class="dropdown-item text-danger  " href="#" data-cy="delete-invitation-link"  data-bs-toggle="modal"
        :data-bs-target="'#_'+id.toString()" id="delete" @click="(event)=>setInvoker(event)">
        <i class="bi bi-trash3-fill me-4" style="color:#FA6731" ></i>Delete Entry
      </a>
    </li>
  </div>
  </div>
  

  <!-- Conformation box -->
  <div class="modal fade" :id="'_'+id.toString()" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title  m-auto ps-5" id="exampleModalLongTitle">Are you sure?</h5>
        <button type="button" class="btn close conformation-box-close-btn second-button-color" data-bs-dismiss="modal" data-cy="conformation-box-close-btn" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-flex justify-content-center">
        <p class="w-75 text-center">Do you want to {{modalInvoker.text}} the invitation of <b>{{name}}</b> ? Once {{`${modalInvoker.text}d`}} it cannot be undone.</p>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn conformation-box-no-btn second-button-color" data-cy="conformation-box-no-btn" data-bs-dismiss="modal">No</button>
        <button type="button" class="btn conformation-box-yes-btn text-white button-color" data-cy="conformation-box-yes-btn" @click="modalInvoker.method"  data-bs-dismiss="modal" >Yes</button>
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
