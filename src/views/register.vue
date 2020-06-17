<template>
  <div id="register">
    <Header btext="Voltar para home" feather="arrowleft" to="/" />
    <main>
      <div class="container">
        <div class="label">
          <h1>Cadastro do ponto de coleta</h1>
          <h3>Dados da entidade</h3>
        </div>
        <div class="data">
          <form>
            <div class="field">
              <label for="name">Nome da entidade</label>
              <input type="text" name="name" />
            </div>
            <div class="field-group">
              <div class="field">
                <label for="cep">CEP</label>
                <input v-model="CEP" @blur="getCEP" type="text" name="cep" />
              </div>
              <div class="field">
                <label for="city">Cidade</label>
                <input :value="InfoCEP.localidade" type="text" name="city" readonly="{true}" />
              </div>
            </div>
            <div class="field-group">
              <div class="field">
                <label for="address">Endereço</label>
                <input :value="InfoCEP.logradouro" type="text" name="address" readonly="{true}" />
              </div>
              <div class="field">
                <label for="number">Numero</label>
                <input type="text" name="number" />
              </div>
            </div>
          </form>
        </div>
        <div class="label type-description-flex">
          <h1>Ítens de coleta</h1>
          <p>Selecione um ou mais ítens abaixo.</p>
        </div>
        <div class="data">
          <div class="items-grid">
            <li class @click="selected" data-id="lamps">
              <img src="../assets/lampadas.png" alt="Lampada" />
              <span>Lâmpadas</span>
            </li>
            <li class @click="selected" data-id="baterrys">
              <img src="../assets/baterias.png" alt="Pilhas e Baterias" />
              <span>Pilhas e Baterias</span>
            </li>
            <li class @click="selected" data-id="papers">
              <img src="../assets/papeis-papelao.png" alt="Papéis e Papelão" />
              <span>Papéis e Papelão</span>
            </li>
            <li class @click="selected" data-id="eletronics">
              <img src="../assets/eletronicos.png" alt="Resíduos Eletrônicos" />
              <span>Resíduos Eletrônicos</span>
            </li>
            <li class @click="selected" data-id="organics">
              <img src="../assets/organicos.png" alt="Resíduos Orgânicos" />
              <span>Resíduos Orgânicos</span>
            </li>
            <li class @click="selected" data-id="oil">
              <img src="../assets/oleo.png" alt="Óleo de Cozinha" />
              <span>Óleo de Cozinha</span>
            </li>
          </div>
        </div>
        <Button btext="Enviar minhas informações" />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
import Button from "../components/Button";

import ViaCEP from "../services/api";

export default {
  name: "Register",
  data: function() {
    return {
      selectedItem: [],
      CEP: "",
      InfoCEP: {}
    };
  },
  components: {
    Header,
    Button
  },
  methods: {
    selected(e) {
      e.target.classList.toggle("selected");

      const dataID = e.target.getAttribute("data-id");
      const index = this.selectedItem.indexOf(dataID);

      index === -1
        ? this.selectedItem.push(dataID)
        : this.selectedItem.splice(index, 1);
    },

    async getCEP() {
      if (this.CEP.length == 8) {
        this.InfoCEP = await ViaCEP.get(`${this.CEP}/json/`).then(
          element => element.data
        );
      }
    }
  }
};
</script>

<style>
#register {
  width: 90%;
  max-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

#register .container {
  width: 75%;
  max-width: 900px;
  background-color: white;
  margin: 60px auto;
  border-radius: 10px;
  padding: 25px 40px;
}

#register .label {
  margin: 30px auto;
}

#register .label h3 {
  margin-top: 5px;
}

#register .type-description-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#register .data {
  margin-bottom: 30px;
}

#register .data form {
  margin: 15px auto;
}

#register .field {
  display: flex;
  flex-direction: column;
  flex: 1;
}

#register .field-group {
  display: flex;
  flex-direction: row;
}

#register .field-group .field + .field {
  margin-left: 10px;
}

#register label {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #6c6c80;
  margin-bottom: 5px;
}

#register input {
  height: 56px;
  background-color: #f0f0f5;
  border: 0;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

#register .items-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

#register .items-grid li {
  background-color: #f5f5f5;
  list-style: none;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  height: 180px;
  padding: 32px 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  cursor: pointer;
}

#register .items-grid li span {
  margin-top: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  color: var(--title-color);
}

#register .items-grid li.selected {
  background: #e1faec;
  border: 2px solid #34cb79;
}

#register .items-grid li img,
#register .items-grid li span {
  pointer-events: none;
}

#register .buttom {
  margin: auto;
}

</style>