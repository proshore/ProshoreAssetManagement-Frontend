<script>
import BaseAlert from "@/components/BaseAlert.vue";
import axios from "axios";
export default {
  name: "InviteUser",
  data() {
    return {
        asset:'',
        type:'',
        stock_quantity:null,
        condition:'',
        status:'',
        bought_date:null,
        add_asset:[],
    };
  },
  methods: {
    
    formData() {
      return {
        asset:this.asset,
        type:this.type,
        stock_quantity:this.stock_quantity,
        condition:this.condition,
        status:this.status,
        bought_date:this.bought_date,
      };
    },
    async handleSubmit() {
      
      try {
        const response = await axios.post("http://localhost:3000/add_assets");
        this.add_asset = response.data;
      } catch (err) {
      }
    },
  },
};

</script>

<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn invite-button button-color px-4 py-2"
      data-cy="invite-btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="handleSubmit"
    >
      <i class="bi bi-plus-lg me-2" style="font-size: 1.5rem"></i>
  
      Add Asset
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="add-a-dialog-box screen">
            <div class="title">
              <div class="title-left">
                <div class="header-frame">
                  <img
                    src="@/assets/images/plus-stroke.png"
                    alt=""
                    class="plus-stroke"
                  />
                  <div class="invite-new-member">Add your Asset</div>
                </div>
                <p class="add-a-new-member-to-proshore">
                  Add a new asset to your asset list
                </p>
              </div>
              <div class="close-button">
                <button
  
                  class="close-rectangle"
  
                  type="button"
                  data-cy="close-invite-btn"
                  data-bs-dismiss="modal"
                >
                  <img src="@/assets/images/x-lg.png" alt="" class="x-lg" />
                </button>
              </div>
  
            </div>
              
            <div class="input-frame">
  
              <div class="input-with-label">
                <div class="label">Asset Name</div>
                <input
                  type="text"
                  placeholder="Asset Name"
                  class="input-text"
                  v-model=" asset"
                  data-cy="asset-name"
                  writeonly="true"
                />
              </div>
              <div class="input-with-label">
                <div class="label">Asset Type</div>
                <input
                  type="email"
                  placeholder="Asset type"
                  class="input-text"
                  v-model="type"
                  data-cy="asset-type"
  
                />
              </div>
              <div class="input-with-label">
                <div class="label">Stock Quantity</div>
                <input
                  type="number"
                  placeholder="Stock Quantity"
                  class="input-text"
                  v-model="stock_quantity"
                  data-cy="stock-quantity"
                />
              </div>
              <div class="input-with-label">
                <div class="label">Condition</div>
                <input
                  type="text"
                  placeholder="Condition"
                  class="input-text"
                  v-model="condition"
                  data-cy="condition"
                />
              </div>
              <div class="input-with-label">
                <div class="label">Status</div>
                <input
                  type="text"
                  placeholder="Status"
                  class="input-text"
                  v-model="status"
                  data-cy="status"
                />
              </div>
              <div class="input-with-label">
                <div class="label">Bought Date</div>
                <input
                  type="date"
                  placeholder="Bought Date"
                  class="input-text"
                  v-model="bought_date"
                  data-cy="bought-date"
                />
              </div>
              
            </div>
            <div class="button-frame">
              <div class="outline-button">
                <button
                  class="primary button"
                  type="button"
                  data-cy="invite-cancel-btn"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
              <div class="invite-button">
                <button
                  class="primary-1 button-1 button-color"
                  data-cy="invite-send-btn"
                  @click="handleSubmit"
                >
                  Add Asset
                </button>
  
              </div>
            </div>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Poppins:wght@200;300&family=Roboto+Slab:wght@300&display=swap");
  
  /* font-family: 'Poppins', sans-serif; */
  .add-a-dialog-box {
    align-items: center;
    background-color: white;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 1000px;
    min-height: 500px;
    max-width: 564px;
    min-width: 300px;
    padding: 0px 16px;
    width: 100%;
  }
  .input-frame {
    align-items: flex-start;
    align-self: stretch;
    border-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .input-with-label {
    align-items: flex-start;
    align-self: stretch;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .label {
    letter-spacing: 0.1px;
    line-height: 21px;
    margin-top: -1px;
    white-space: nowrap;
  }
  .input-text {
    align-items: center;
    align-self: stretch;
    background-color: white;
    border: 1px solid;
    border-color: gray;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
  }
  .title {
    align-items: flex-start;
    align-self: stretch;
    border-style: none;
    display: flex;
    justify-content: space-between;
    padding: 16px 0px;
  }
  .title-left {
    align-items: flex-start;
    border: 1px none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .header-frame {
    align-items: flex-start;
    border: 1px none;
    display: flex;
    gap: 8px;
  }
  .plus-stroke {
    height: 24px;
    min-width: 24px;
  }
  .invite-new-member {
    color: #c852da;
    font-size: 16px;
    letter-spacing: 0.15px;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    margin-top: -1px;
    white-space: nowrap;
  }
  .add-a-new-member-to-proshore {
    color: gray;
    letter-spacing: 0.15px;
    font-size: 14px;
    line-height: 21px;
    white-space: nowrap;
  }
  .close-button {
    align-items: flex-start;
    background-color: white;
    border: 1 px solid;
    border-color: gray;
    border-radius: 4px;
    display: flex;
    gap: 8px;
  }
  .close-rectangle {
    background-color: white;
    align-items: flex-start;
    border: 1px solid #ced4da;
    border-radius: 4px;
    display: flex;
    gap: 8px;
    padding: 13px;
  }
  .x-lg {
    height: 11.2px;
    margin-bottom: -0.8px;
    margin-left: -0.8px;
    margin-right: -0.8px;
    margin-top: -0.8px;
    min-width: 11.2px;
  }
  .button-frame {
    align-items: center;
    align-self: stretch;
    border: 1px none;
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    padding: 16px 0px;
  }
  .outline-button {
    align-items: flex-start;
    border: 1px none;
    display: flex;
  }
  .button {
    align-items: center;
    background-color: white;
    border: 1px solid;
    border-color: gray;
    border-radius: 4px;
    display: flex;
    gap: 16px;
    justify-content: center;
    padding: 12px 16px;
  }
  .primary {
    color: #fa6731;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    line-height: 20px;
    margin-top: -1px;
    min-width: 56px;
    text-align: center;
    white-space: nowrap;
  }
  .invite-button {
    align-items: center;
    border: 1px none;
    box-shadow: 0px 6px 20px #fa673180;
    display: flex;
    justify-content: center;
  }
  .button-1 {
    align-items: center;
    background-color: #fa6731;
    font-size: 16px;
    border: 1px none;
    border-radius: 4px;
    display: flex;
    gap: 16px;
    justify-content: center;
    padding: 10px 16px;
  }
  .primary-1 {
    color: white;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    line-height: 24px;
    margin-top: -1px;
    min-width: 133px;
    text-align: center;
    white-space: nowrap;
  }
  .invite-button {
    border: 1px none;
    background-color: red;
    color: white;
  }
  </style>