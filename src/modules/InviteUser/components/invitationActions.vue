<script>
import {reInviteUser,revokeUser} from '../services'
import ConformationBox from './conformationBox.vue';
export default{
    props:{
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    },
    components:{
    ConformationBox
},
    methods:{
        async reInviteMember(){
            try{
               const response = await reInviteUser({name:this.name, email:this.email})
               //display message coming from response
                console.log("reinvitation mail sent successfully");
            alert("Reinvitation mail sent successfully")
            }
            catch(error){
                alert("error msg:",error.message)
                console.log("error:",error.message);
            }
           
        },
        async revokeMember(){
            
             try{
               const response = await revokeUser({name:this.name, email:this.email})
               //display message coming from response
               console.log('revoked member Successfully')
                alert('Revoked member Successfully')
            }
           catch(error){
               
                alert("error msg:",error.message)
                console.log("error:",error);
            }
            
        }
    }
}
</script>

<template>
    
     <!-- <li class="dropdown bg-secondary" id="myDropdown"> -->
           <button class="btn dropdown-img" data-cy="invitation-action-toggle-btn"  data-bs-toggle="dropdown"></button>
           <ul class="dropdown-menu">
             <li> <a class="dropdown-item" href="#" data-cy="resend-invitation-link" @click="reInviteMember(/*data from the corresponding row*/)" >Resend Invitation </a></li>
             <li> <a class="dropdown-item" href="#" data-cy="revoke-invitation-link" @click="revokeMember(/*data from the corresponding row*/)" data-toggle="modal" data-target="#exampleModalCenter"> Revoke Member </a></li>
             <li><a class="dropdown-item" href="#" data-cy="delete-invitation-link"> Delete Entry </a></li>
           </ul>
           <ConformationBox/>
      

       
    <!-- </li> -->
</template>

<style scoped>
    .dropdown-img{
        height:30px !important;
        width:20px !important;
        background-image: url('@/assets/actionIcon.svg');
         background-size: 100% 100%;
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        background-position: center;
        position: relative;
    }
    .dropdown-menu{
        /* position: relative !important; */
        /* display: inline; */
        float: right;
    }
</style>