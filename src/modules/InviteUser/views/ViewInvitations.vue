<script>
    import InviteUser from '../components/InviteUser.vue'
    export default{
        components:[
        InviteUser
        ]
    }
</script>
<template>
    <div class="invitation-container p-4 mt-4 mx-4 border ">
        <div class="row px-3">
            <div class="col-4 ">
                <form class="form-inline d-flex">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Search</button>
  </form>
  <InviteUser/>
            </div>
        </div>
        <div class="row mt-4 px-4">
            <table class="table table-borderless border table-hover table-md">
  <thead class="thead-light bg-light">
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Member Full Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Role</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <!-- The rows will be dynamically generated according to invitationslist data -->
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>1</td>
      <td>Pending</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>1</td>
      <td>Pending</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>1</td>
      <td>Pending</td>
    </tr>
    
  </tbody>
</table>
        </div>
    </div>
</template>

<style scoped>
.thead-light{
    height:50px !important;
    vertical-align: middle;
}
</style>