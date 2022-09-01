<script>
    export default{
        name:"InviteUser",
    }

</script>

<template>
<!-- Button trigger modal -->
<button type="button" class="btn invite-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Invite member
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
     <div class="title">
      <div class="title-left">
         <div class="modal-header">
            <img class="plus-stroke" src="../../../assets/plus-stroke.png" alt=""/>
            <div class="invite-new-member">Invite new member</div>
            <!-- <p class="add-new-member">Add a new member to Proshore</p> -->
          </div> 
        
            
          
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
      
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="text" aria-describedby="emailHelp" placeholder="Username">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="test@test.com">
          </div>
          <label for="username" class="form-label">Role</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select a Role</option>
            <option value="1">Employee</option>
            <option value="2">Vendor</option>
          </select>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success" role="button" data-cy="submit">Send Invitation</button>
      </div>
    </div>
  </div>
</div>
</template>

<style>
@font-face{
  font-family: "Reader Trial-Bold";
  font-style: normal;
  font-weight: 900;
  src: url("https://fonts.animaapp.com/ReaderTrial-Bold") format("opentype");
}

@font-face{
  font-family: "Reader Trial-Medium";
  font-style: normal;
  font-weight: 500;
  src: url("https://fonts.animaapp.com/ReaderTrial-Medium") format("opentype");
}
@font-face{
  font-family: "Reader Trial-Regular";
  font-style: normal;
  font-weight: 400;
  src: url("https://fonts.animaapp.com/ReaderTrial-Regular") format("opentype");
}
.invite-button{
  background-color: #FA6731!important;
  border:none!important;
  color:white !important;
}

.container{
  align-items: flex-start;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100vh;
  min-height: 500px;
  min-width: 564px;
  padding:0px 16px;
  width:100%;
}
.title{
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;  
}

.title-left{
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: min-content;
  width: min-content;
  
}

.modal-header{
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: min-content;
  width: min-content;
}
.plus-stroke{
  height: 24px;
  min-width: 24px;
}
.invite-new-member{
  margin-left: 10px;
  color: #3852DA;
  font-family: "Reader Trial-Medium";
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.15px;
  line-height: 24px;
  margin-top: -1px;
  min-width: 152px;
  white-space: nowrap;
}
.add-new-member{
  color: red;
  font-family: "Reader Trial-Regular";
  font-size: 12;
  font-weight: 400;
  letter-spacing: 0.15px;
  line-height: 24px;
  margin-top: -1px;
  min-width: 152px;
  white-space: nowrap;
}

.btn-close{
 align-items: flex-start;
 background-color: white;
 border-radius: 4px;
 display: flex;
 gap: 8px;
 width: min-content;
}

</style>