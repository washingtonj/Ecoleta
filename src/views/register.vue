<template>
  <div>
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
              <FormInput label="Nome da Entidade" @change="data.point = $event.target.value" />
              <div class="field-group">
                <FormInput label="CEP" @change="getCEP" />
                <FormInput label="Numero" @change="data.number = $event.target.value" />
              </div>
              <div class="field-group">
                <FormInput label="Logradouro" :value="data.address " />
                <FormInput label="Cidade" :value="addrConcat" />
              </div>
            </form>
          </div>
          <div class="label type-description-flex">
            <h1>Ítens de coleta</h1>
            <p>Selecione um ou mais ítens abaixo.</p>
          </div>
          <div class="data">
            <div class="items-grid">
              <ListItems
                v-for="item in items"
                :key="item.id"
                :label="item.label"
                :icon="item.icon"
                @click="selectedItem"
              />
            </div>
          </div>
          <Button btext="Enviar minhas informações" bsize="md" @click="postData()" />
        </div>
      </main>
    </div>

    <Modal :show="modalShow">
      <div class="modal-body">
        <img src="@/assets/check.png" alt="Succes" />
        <h1>Enviado com sucesso!</h1>
      </div>
    </Modal>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Button from "@/components/Button";
import ListItems from "@/components/ListItems";
import FormInput from "@/components/FormInput";
import Modal from "@/components/Modal";
import { api, viacep } from "@/services/api";

export default {
  name: "Register",

  data: function() {
    return {
      items: [
        { label: "Lâmpadas", icon: "lampadas", id: "lamp" },
        { label: "Pilhas e Baterias", icon: "baterias", id: "battery" },
        { label: "Papéis e Papelão", icon: "papeis-papelao", id: "papers" },
        {
          label: "Resíduos Eletrônicos",
          icon: "eletronicos",
          id: "eletronics"
        },
        { label: "Resíduos Orgânicos", icon: "organicos", id: "organics" },
        { label: "Óleo de Cozinha", icon: "oleo", id: "oil" }
      ],

      data: {
        point: "",
        image:
          "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80",
        wastype: [],
        address: "",
        state: "",
        city: "",
        number: ""
      },
      InfoCEP: {},
      selectedItems: [],
      modalShow: false
    };
  },

  components: {
    Header,
    Button,
    ListItems,
    FormInput,
    Modal
  },

  computed: {
    addrConcat() {
      if (!!this.data.city && !!this.data.state) {
        return `${this.data.city} - ${this.data.state}`;
      }
      return "";
    }
  },

  methods: {
    async getCEP(event) {
      const cep = event.target.value;
      if (cep.length == 8) {
        await viacep.get(`${cep}/json/`).then(element => {
          this.data = {
            ...this.data,
            address: element.data.logradouro,
            state: element.data.uf,
            city: element.data.localidade
          };
        });
      }
    },

    selectedItem(event) {
      const index = this.data.wastype.indexOf(event);
      index === -1
        ? this.data.wastype.push(event)
        : this.data.wastype.splice(index, 1);
    },

    async postData() {
      const inputsVerify = Object.values(this.data).filter(e => e.length <= 0);
      if (inputsVerify.length <= 0) {
        const data = {
          ...this.data,
          wastype: this.data.wastype.splice(",").join(", "),
          address: `${this.data.address}, ${this.data.number}`
        };

        await api.post("/points/create", data).then(() => {
          this.modalShow = true
          setTimeout(() => history.back(), 5000) 
        });
      } else {
        alert("Preencha todos os campos");
      }
    }
  }
};
</script>

<style scoped>
#register {
  width: 90%;
  max-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

#register .container {
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

#register .field-group {
  display: flex;
  flex-direction: row;
}

#register .field-group .field + .field {
  margin-left: 8px;
}

#register .items-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

#register .button {
  margin: auto;
}

.modal-body img {
  width: 100px;
  align-self: center;
}
.modal-body h1 {
  color: var(--primary-color);
}
</style>