<template>
  <div id="results">
    <Header btext="Voltar para home" feather="arrowleft" to="/" />
    <main>
      <h4>
        <strong v-if="points.length > 1">{{points.length}} pontos encontrados</strong>
      </h4>
      <div class="cards">
        <div v-for="(point, index) in points" :key="index" class="card">
          <img :src="point.picURL" :alt="point.pointName" />
          <h1>{{point.pointName}}</h1>
          <h3>{{point.wastype}}</h3>
          <p>
            {{point.address}}
            <br />
            {{point.cad}}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Results",
  data() {
    return {
      points: [
        {
          pointName: "Colecteria",
          picURL:
            "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80",
          wastype: "Resíduo Eletrônicos, Lâmpadas",
          address: "Guilherme Gemballa, 127",
          cad: "Rio do Sul, SC"
        },
        {
          pointName: "Colecteria",
          picURL:
            "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80",
          wastype: "Resíduo Eletrônicos, Lâmpadas",
          address: "Guilherme Gemballa, 127",
          cad: "Rio do Sul, SC"
        }
      ]
    };
  },
  components: {
    Header
  }
};
</script>

<style>
#results::after {
  content: "";
  position: fixed;
  background: white;
  top: 260px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
}

#results {
  width: 90%;
  max-width: 1100px;

  margin: 0 auto;
}

#results main {
  margin: 48px;
}

#results main h4 {
  font-weight: normal;
  font-family: Roboto, sans-serif;

  margin-bottom: 32px;
}

#results main .cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 24px;
}

#results main .card img {
  width: 100%;
  height: 150px;

  object-fit: cover;

  border-radius: 8px 8px 0 0;
}

#results main .card h1 {
  margin-top: 32px;

  font-size: 36px;
  line-height: 41px;
  color: #322153;
}

#results main .card h3 {
  margin: 24px 0;

  font-family: Roboto;
  font-weight: bold;

  font-size: 24px;
  line-height: 34px;

  color: var(--primary-color);
}

#results main .card p {
  font-size: 16px;
  line-height: 26px;

  color: #6c6c80;
}
</style>