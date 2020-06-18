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
    <Modal :show="modal" type="search" @closeModal="modal = $event" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Button from '@/components/Button'
import Modal from '@/components/Modal'

export default {
  name: "Home",
  components: {
    Header,
    Button,
    Modal
  },
  data: function() {
    return {
      modal: false
    }
  },
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


</style>

