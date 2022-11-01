<script>
import BaseAlert from "@/components/BaseAlert.vue";
import { requestAsset } from "../services";

export default {
  name: "RequestAsset",
  data() {
    return {
      name: {
        value: "",
        error: "",
      },
      category: {
        value: "select a category",
      },
      isNewProduct: {
        value:false,
      },
      submission: {
        message: "",
        isVerified: false,
      },
    };
  },
  components: {
    BaseAlert,
  },
  methods: {
    formData() {
      return {
        name: this.name.value,
        category: this.category.value,
        isNewProduct: this.isNewProduct.value,
      };
    },
    validateField(field) {
      console.log('entered func');
      if (field === "name") {
        if (this.name.value.length <  3){
          this.name.error = "asset name should be more than three letters long";
          console.log(this.name.value.length);
        }
        else{
        this.name.error = ""
      }
      }
      
    },
    async handleSubmit() {
      if (!this.name.value ) {
        return (this.submission.message = "Field must not be empty");
      }
      if (this.name.error ) {
        return (this.submission.message =
          "Some fields are not filled properly");
      }
      if(this.category.value === "select a category"){
        return (this.submission.message =
          "Please select a category");
      }
      this.submission.message = "Sorry, you cannot request an asset right now"
      // try {
      //   const response = await requestAsset(this.formData());
      //   this.submission.isVerified = true;
      //   return (this.submission.message = "Requested Successfully");
      // } catch (err) {
      //   this.submission.message = err;
      // }
    },
  },
};
</script>

<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn request-asset-button button-color px-4 py-2"
    data-cy="request-asset-btn"
    data-bs-toggle="modal"
    data-bs-target="#requestModal"
    style="font-size: 1.2rem"
  >
  <i class="bi bi-plus-lg me-2" style="font-size: 1.5rem"></i>
    Request Asset
  </button>
  <!-- Modal -->
  <div
    class="modal fade"
    id="requestModal"
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
                <div class="request-asset">Request Asset</div>
              </div>
              <p class="request-an-asset">
                Fill the form to request an asset
              </p>
            </div>
            <div class="close-button">
              <button
                class="close-rectangle second-button-color"
                type="button"
                data-cy="close-request-asset-btn"
                data-bs-dismiss="modal"
              >
                <img src="@/assets/images/x-lg.png" alt="" class="x-lg" />
              </button>
            </div>
          </div>
          <div class="row w-100 d-flex justify-content-center">
            <BaseAlert :submission="submission" />
          </div>
          <!-- <form @submit.prevent="handleSubmit"> -->
          <div class="input-frame">
            <div class="input-with-label">
              <div class="label">Asset Name</div>
              <input
                type="text"
                placeholder="Asset Name"
                class="input-text"
                v-model="name.value"
                @keyup="validateField('name')"
                data-cy="request-asset-name"
              />
              <div
                v-if="name.error"
                class="form-text text-danger"
                v-text="name.error"
              ></div>
            </div>
            
            <div class="input-with-label">
              <div class="label">Category</div>
              <select
                class="input-text"
                aria-label="Default select example"
                v-model="category.value"
                data-cy="request-asset-select-box"
              >
                <!-- role list is provided from backend for proper implementation -->
                <option value="select a category" selected>Select a Category</option>
                <option data-cy="request-asset-category-electronics" value="electronics">
                  Electronics
                </option>
                <option data-cy="request-asset-category-axxessories" value="accessories">
                  Accessories
                </option>
                <option data-cy="request-asset-category-parts-and-individual-components" value="Parts & individual components">
                  Parts & individual components
                </option>
                <option data-cy="request-asset-category-daily-necessities" value="daily necessities">
                  Daily Necessities
                </option>
              </select>
            </div>
            <div class="input-with-label">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                  data-cy="request-asset-checkbox"
                  @change="isNewProduct.value = !isNewProduct.value"
                />
                <label class="form-check-label ckeck-box" for="gridCheck1">
                  <small>Brand New</small>
                </label>
              </div>
            </div>
          </div>
          <div class="button-frame">
            <div class="">
              <button
                class="btn second-button-color"
                type="button"
                data-cy="request-asset-cancel-btn"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
            <div class="">
              <button
                class="btn button-color"
                data-cy="request-asset-send-btn"
                @click="handleSubmit"
              >
                Request
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
/* font-family: 'Poppins', sans-serif; */
.add-a-dialog-box {
  align-items: flex-start;
  background-color: white;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  min-height: 500px;
  min-width: 564px;
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
.request-asset {
  color: #c852da;
  font-size: 16px;
  letter-spacing: 0.15px;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}
.request-an-asset {
  color: gray;
  letter-spacing: 0.15px;
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
.request-asset-button {
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
.request-asset-button {
  border: 1px none;
  background-color: red;
  color: white;
}
</style>