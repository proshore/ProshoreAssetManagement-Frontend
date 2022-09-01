<script>
import {reInviteUser,revokeUser} from '../services'
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
    methods:{
        async reInviteMember(){
            try{
               const response = await reInviteUser(/*user data*/)
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
               const response = await revokeUser(/*user data*/)
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
           <button class="btn dropdown-img"  data-bs-toggle="dropdown"></button>
           <ul class="dropdown-menu">
             <li> <a class="dropdown-item" href="#" @click="reInviteMember(/*data from the corresponding row*/)">Resend Invitation </a></li>
             <li> <a class="dropdown-item" href="#" @click="revokeMember(/*data from the corresponding row*/)"> Revoke Member </a></li>
             <li><a class="dropdown-item" href="#"> Delete Entry </a></li>
           </ul>
      

       
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