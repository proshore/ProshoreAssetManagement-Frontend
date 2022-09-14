<script>
export default {
  props: {
    submission: {
      type: Object,
      required: true,
    },
  },
  methods: {
    styleData() {
      return {
        color: `${!this.submission.isVerified ? "#ff4d4d" : "#00e600"}`,
        // borderWidth: "2px",
        // borderStyle: "solid",
        // borderColor: `${!this.submission.isVerified ? '#ff4d4d' : '#00e600'}`,
        backgroundColor: `${
          !this.submission.isVerified ? "#ffcccc" : "#ccffcc"
        }`,
      };
    },
  },
};
</script>

<template>
  <span
    class="alert-message"
    v-if="submission.message"
    v-text="submission.message"
    :style="styleData()"
  ></span>
</template>

<style scoped>
.alert-message {
  display: block;
  font-weight: 400;
  padding: 0.4rem 1.2rem;
  margin: 0.8rem 0;
  text-align: center;
}
</style>
