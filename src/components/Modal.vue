<template>
  <div id="modal" v-show="show">
    <div class="modal-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "Modal",
  props: ["show", "type"],

  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    }
  }
};
</script>

<style>
#modal * {
  display: flex;
  box-sizing: border-box;
}
#modal {
  background-color: #0e0a14ef;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 400ms;
}
#modal .modal-body {
  flex-direction: column;
}

</style>