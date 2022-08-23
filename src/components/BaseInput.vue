<script>

export default {
  
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
   
  },
};
</script>

<template>
  <div class="mb-4">
    <label :for="name" class="form-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @keyup="this.$emit('field-changed')"
      @input="(event) => $emit('update:modelValue', event.target.value)"
      data-cy
    />
    <div v-if="error" class="form-text text-danger" v-text="error"></div>
  </div>
</template>