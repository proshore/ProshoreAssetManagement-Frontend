<script>
export default{
    methods:{
        reInviteMember(){
            console.log("reinvitation mail sent successfully");
            alert("Reinvitation mail sent successfully")
        },
        revokeMember(){
            console.log('revoked member Successfully')
            alert('Revoked member Successfully')
        }
    }
}
</script>

<template>
    
     <!-- <li class="dropdown bg-secondary" id="myDropdown"> -->
       <div class="container  d-flex justify-content-center">

           <button class="btn bg-warning dropdown-img"  data-bs-toggle="dropdown"></button>
           <ul class="dropdown-menu">
             <li> <a class="dropdown-item" href="#" @click="reInviteMember(/*data from the corresponding row*/)">Resend Invitation </a></li>
             <li> <a class="dropdown-item" href="#" @click="revokeMember(/*data from the corresponding row*/)"> Revoke Member </a></li>
             <li><a class="dropdown-item" href="#"> Delete Entry </a></li>
           </ul>
       </div>

       
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