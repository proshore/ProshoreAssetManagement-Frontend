<script>
//used for testing
import axios from "axios";
export default {
  components: [],
  data() {
    return {
      requested_assets: [],
    };
  },
  components: {},
  async created() {
    //this block is used for testing
    try {
      const response = await axios.get(
        `http://localhost:3000/requested_assets`
      );
      this.requested_assets = response.data;
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    styleStatus() {
      return (status) => {
        if (status.toLowerCase() === "available") {
          return "status-available";
        }
        if (status.toLowerCase() === "unavailable") {
          return "status-unavailable";
        }
      };
    },
    styleDotIcon() {
      return (status) => {
        if (status.toLowerCase() === "available") {
          return "status-available-icon";
        }
        if (status.toLowerCase() === "unavailable") {
          return "status-unavailable-icon";
        }
      };
    },
  },
};
</script>
<template>
  <div class="request-asset-container p-4 mt-4 mx-4">
    <div class="row px-3">
      <div class="col-4">
        <form class="form-inline d-flex">
          <input
            class="form-control form-control-lg mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            data-cy="requested-asset-search-field"
          />
          <button
            class="btn my-2 px-3 my-sm-0 mx-2 button-color"
            type="submit"
            data-cy="requested-asset-search-btn"
          >
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div class="col-8 d-flex justify-content-end">
        <InviteUser />
      </div>
    </div>
    <div class="row mt-4 px-4">
      <table
        class="table table-borderless border table-hover table-sm bg-white regular-font"
      >
        <thead class="thead-light">
          <tr class="text-center">
            <th scope="col">S.N</th>
            <th scope="col">Requested Asset</th>
            <th scope="col">Type</th>
            <th scope="col">Requested Date</th>
            <th scope="col">Requested Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody v-for="(rasset, index) in requested_assets" :key="index">
          <!-- The rows will be dynamically generated according to invitationslist data -->
          <tr class="text-center">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ rasset.requested_asset }}</td>
            <td>{{ rasset.type }}</td>
            <td>{{ rasset.requested_date }}</td>
            <td>{{ rasset.requested_amount }}</td>
            <td>
              <div :class="`status ${styleStatus(rasset.status)}`">
                <div
                  class="status-icon me-2"
                  :class="` ${styleDotIcon(rasset.status)}`"
                ></div>
                {{ rasset.status }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.request-asset-container {
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

.status {
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  width: fit-content;
}
.status-icon {
  height: 8px;
  width: 8px;
  border-radius: 50%;
}
.status-unavailable {
  background-color: #ffeded;
  color: black !important;
}
.status-unavailable-icon {
  background-color: #ff4f4f !important;
}
.status-available {
  background-color: #fff4da !important;
  color: black !important;
}
.status-available-icon {
  background-color: #ffca48;
}
tr {
  vertical-align: middle;
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
.status-availabel {
  background-color: #ffeded;
  color: #ff4f4f;
}
.status-unavailabel {
  background-color: #fff4da;
  color: #ffca48;
}
</style>
