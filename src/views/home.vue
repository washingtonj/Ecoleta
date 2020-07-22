<template>
  <div id="home">
    <div class="container">
      <Header btext="Registre um ponto de coleta" feather="login" to="register" />
      <main>
        <h1>Seu marketplace de coleta de resíduos</h1>
        <strong>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</strong>
        <Button @click.native="modal = !modal" btext="Encontre um ponto de coleta" btype="icon" />
      </main>
    </div>

    <Modal id="modal" :show="modal" @closeModal="modal = $event">
      <div class="modal-body">
        <div class="label">
          <h1>Selecione o local</h1>
          <XIcon class="icon" @click="modal = false" color="red" />
        </div>
        <div class="data">
          <select name="state" id="selectState">
            <option value="Default" disabled>Selecione um estado.</option>
            <option v-for="(state, index) in states.data" :key="index" :value="state">{{ state }}</option>
          </select>
          <Button btext="Pesquisar" bsize="md" @click="toResults" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { XIcon } from "vue-feather-icons";

import { api } from "../services/api";

export default {
  name: "Home",
  components: {
    Header,
    Button,
    Modal,
    XIcon
  },
  data: function() {
    return {
      modal: false,
      states: [],
      selectedState: ""
    };
  },
  methods: {
    loadingStates() {
      api.get("states").then(data => {
        this.states = data;
      });
    },
    toResults() {
      const stateSelected = document.querySelector("#selectState").value;
      this.$router.push({ path: "results", query: { state: stateSelected } });
    }
  },
  beforeMount() {
    this.loadingStates();
  }
};
</script>



<style>
#home {
  height: 100vh;
  background: url("~@/assets/background.png") no-repeat;
  background-position: 35vw bottom;
}

#home .container {
  width: 90%;
  max-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
#home .container main {
  max-width: 560px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#home .container main h1 {
  font-family: "Ubuntu", sans-serif;
  font-size: 54px;
  margin-top: 0;
}
#home main strong {
  font-size: 24px;
  font-weight: normal;
  line-height: 38px;
  margin: 25px auto;
}

@media (min-width: 1700px) {
  #home {
    background-position-x: 45vw;
  }
}

@media (max-width: 900px) {
  #home {
    background-position-x: 70vw;
  }
  #home .container {
    align-items: center;
    text-align: center;
  }
  #home header a {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
  }
  #home main {
    align-items: center;
  }
}

@media (max-height: 760px) {
  #home {
    background-position-y: 100px;
  }
}

/* Modal Styles */

 .modal-body .label {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
 .modal-body .label .icon {
  cursor: pointer;
}
 .modal-body .label h1 {
  color: white;
}

.modal-body .data {
  display: flex;
  flex-direction: column;
  width: 360px;

}

.modal-body .data select {
  margin-bottom: 5px;
  height: 50px;
  border-radius: 8px;
  padding: 0 10px;
  outline: 0;
}
</style>

