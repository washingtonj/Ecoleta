<template>
  <div v-if="type == 'search'" v-show="show" id="modal">
    <div class="modal-body">
      <div class="label">
        <h1>Selecione o local</h1>
        <XIcon class="icon" @click="closeModal" color="red" />
      </div>
      <div class="data">
        <div class="inputs">
          <label for="uf">UF</label>
          <input type="text" name="UF" />
        </div>
        <div class="inputs">
          <label for="city">Cidade</label>
          <input type="text" name="city" />
        </div>
      </div>
      <Button btext="Pesquisar" bsize="md" />
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
import Button from "@/components/Button";

export default {
  name: "Modal",
  props: ["show", "type"],
  components: {
    XIcon,
    Button
  },
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
  width: 360px;
}
#modal .modal-body .label {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
#modal .modal-body .label .icon {
  cursor: pointer;
}
#modal .modal-body .label h1 {
  color: white;
}
#modal .modal-body .data .inputs {
  width: 100%;
  flex-direction: column;
  padding-bottom: 20px;
}
#modal .modal-body .data .inputs + .inputs{
  width: 80px;
  margin-left: 10px;
}
#modal .modal-body .data .inputs label {
  color: gainsboro;
  font-weight: 100;
  margin-bottom: 2px;
  padding-left: 5px;
}
#modal .modal-body .data .inputs input {
  height: 50px;
  border-radius: 8px;
  padding: 0 10px;
  outline: 0;
}

</style>