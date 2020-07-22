<template>
  <div class="field">
    <label :for="label">{{label}}</label>
    <input type="text" :name="label" :value="value" @change="valueChange" />
  </div>
</template>

<script>
export default {
  name: "FormInputs",
  props: {
    label: { type: String },
    value: { type: String, default: "" },
    verify: { type: Boolean, default: false }
  },
  methods: {
    valueChange(event) {
      this.$emit("change", event);
    }
  }
};
</script>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  flex: 1;
}

label {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #6c6c80;
  margin-bottom: 5px;
}

input {
  height: 56px;
  background-color: #f0f0f5;
  border: 0;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  outline: none;
}

input.notInserted {
  border: 2px solid red;
}
</style>