<script>
    export default{
        name:"InviteUser",
    }

</script>

<template>
    <div class="container p-5">
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Invite member
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title text-primary" id="exampleModalLabel">Invite new member<br><p class="h6">Add a new member to proshore</p></h4>
        
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
</div>
</template>

<style>


</style>