<template>
  <div v-if="type == 'search'" v-show="show" id="modal">
    <div class="label">
      <h1>Pesquisar</h1>
      <XIcon class="icon" @click="closeModal" color="red" />
    </div>
    <div class="data">
      <label for="uf">UF</label>
      <input type="text" name="UF" />
      <label for="city">Cidade</label>
      <input type="text" name="city" />
    </div>
    <Button btext="Pesquisar" bsize="md" />
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
import Button from '@/components/Button'

export default {
  name: "Modal",
  props: ["show", "type"],
  components: {
    XIcon,
    Button
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', false)
    }
  }
};
</script>

<style>
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

#modal .label {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

#modal .label .icon {
  cursor: pointer;
}

#modal .label h1 {
  color: white;
  margin-right: 180px;
}

#modal .data {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}

#modal .data label {
  color: gainsboro;
  font-weight: 100;
  margin-bottom: 2px;
}

#modal .data input {
  width: 360px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 0 10px;
  outline: 0;
}
</style>