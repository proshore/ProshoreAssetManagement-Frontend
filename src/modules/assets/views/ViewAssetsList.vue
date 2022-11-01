<script>
import axios from "axios";
import RequestAsset from '../components/RequestAsset.vue';
import { useToast } from "vue-toastification"
import AddAsset from "./AddAsset.vue";
export default {
  components: {
      AddAsset,
      RequestAsset
  },
  data() {
    return {
      assets: [],
    };
  },
  async created() {
    const toast = useToast();
    try {
       //spinner implementation
       window.emitter.emit('changeSpinnerActiveStatus',true)
      const response = await axios.get(
        `https://6319958e8e51a64d2be7568b.mockapi.io/assetslist`
      );
      this.assets = response.data;
       window.emitter.emit('changeSpinnerActiveStatus',false)
    } catch (e) {
      toast.error("Something went wrong")
    }
  },
  computed: {
    styleCondition() {
      return (condition) => {
        const conditionLowerCase = condition.toLowerCase()
        if (conditionLowerCase === "brand new") {
          return "condition-new";
        }
        if (conditionLowerCase === "refurbished") {
          return "condition-refurbished";
        }
        if (conditionLowerCase === "used") {
          return "condition-used";
        }
      };
    },
    styleStatus() {
      return (status) => {
        const statusLowerCase = status.toLowerCase()
        if (statusLowerCase === "available") {
          return "status-available";
        }
        if (statusLowerCase=== "requested") {
          return "status-requested";
        }
        if (statusLowerCase === "active") {
          return "status-active";
        }
      };
    },
    styleDotIcon() {
      return (status) => {
        const statusLowerCase = status.toLowerCase()
        if (statusLowerCase === "available") {
          return "status-available-icon";
        }
        if (statusLowerCase === "requested") {
          return "status-requested-icon";
        }
        if (statusLowerCase === "active") {
          return "status-active-icon";
        }
      };
    },
  },
};
</script>
<template>
  <div class="view-assets-container p-4 mt-4 mx-4">
    <div class="row px-3">
      <div class="col-4">
        <form class="form-inline d-flex">
          <input
            class="form-control form-control-lg mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            data-cy="assets-search-field"
          />
          <button
            class="btn my-2 px-3 my-sm-0 mx-2 button-color"
            type="submit"
            data-cy="assets-search-btn"
          >
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div class="col-3 offset-2 d-flex justify-content-end">
      <AddAsset/>
      </div>
      <div class="col-3 d-flex justify-content-center">
        <RequestAsset/>
      </div>
      
      </div>
    <div class="row mt-4 px-4">
      <table
        class="
          table
          w-100
          bg-white
          table-borderless
          border
          table-hover
          regular-font
        "
      >
        <thead class="thead-light">
          <tr class="text-center">
            <th scope="col">S.N</th>
            <th scope="col">Asset</th>
            <th scope="col">Type</th>
            <th scope="col">Stock Quantity</th>
            <th scope="col">Condition</th>
            <th scope="col">Status</th>
            <th scope="col">Bought Date</th>
          </tr>
        </thead>
        <!-- <tbody v-for="(invitation, index) in invitations" :key="index"> -->
          <!-- The rows will be dynamically generated according to invitationslist data -->
          <!-- <tr class="text-center"> -->
            <!-- <th scope="row">{{ index + 1 }}</th> -->
            <!-- <td>{{ invitation.name }}</td> -->
            <!-- <td>{{ invitation.email }}</td> -->
            <!-- <td>{{ invitation.contact }}</td> -->
            <!-- <td :class="`role ${styleRole(invitation.role)}`"> -->
              <!-- {{ invitation.role }} -->
            <!-- </td> -->
            <!-- <td > -->
              
              <!-- <div :class="`status ${styleStatus(invitation.status)}`"> -->
                <!-- <div class=" status-icon me-2" :class="` ${styleDotIcon(invitation.status)}`"></div> {{ invitation.status }} -->
              <!-- </div> -->
            <!-- </td> -->
            <!-- <td > -->
              <!-- <InvitationActions -->
                <!-- :name="invitation.name" -->
                <!-- :email="invitation.email" -->
                <!-- :contact="invitation.contact" -->
              <!-- /> -->
            <!-- </td> -->
          <!-- </tr> -->
        <!-- </tbody> -->
        <tbody v-for="(asset, index) in assets" :key="asset.id">
          <!-- The rows will be dynamically generated according to assetslist data -->
          <tr class="text-center">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ asset.name }}</td>
            <td>{{ asset.type }}</td>
            <td>{{ asset.stockQuantity }}</td>
            <td :class="`condition ${styleCondition(asset.condition)}`">
              {{ asset.condition }}
            </td>
            <td>
              <div :class="`status ${styleStatus(asset.status)}`">
                <div
                  class="status-icon me-2"
                  :class="` ${styleDotIcon(asset.status)}`"
                ></div>
                {{ asset.status }}
              </div>
            </td>
            <td>{{ asset.boughtDate }}</td>
          </tr>
        </tbody> -->
      </table>
    </div>
  </div>
</template>

<style scoped>
.view-assets-container {
  background-color: white;
  border-radius: 5px;
}

.thead-light {
  height: 50px ;
  vertical-align: middle;
  background-color: #e9ecef;
  width: 100%;
}
tr {
  vertical-align: middle;
}
.condition {
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.25px;
}
.condition-new {
  color: #097969;
}
.condition-refurbished {
  color: #ffbf00;
}
.condition-used {
  color: #e97451;
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
.status-available {
  background-color: #98fb98;
  color: #008000;
}
.status-available-icon {
  background-color: #008000;
}
.status-active {
  background-color: #fff4da;
  color: #ff4f4f;
}
.status-active-icon {
  background-color: #ff4f4f;
}
.status-requested {
  background-color: #ffea00;
  color: #8b8000;
}
.status-requested-icon {
  background-color: #8b8000;
}
tr {
  vertical-align: middle;
}
.condition {
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.25px;
}
.condition-employee {
  color: #3852da;
}
.condition-vendor {
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
  font-weight: 700;
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