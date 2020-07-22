<template>
  <div id="results">
    <Header btext="Voltar para home" feather="arrowleft" to="/" />
    <main>
      <h4>
        <strong v-if="points.length > 1">{{points.length}} pontos encontrados</strong>
      </h4>
      <div class="cards">
        <div v-for="(point, index) in points" :key="index" class="card">
          <img :src="point.image" :alt="point.point" />
          <h1>{{point.point}}</h1>
          <h3>{{point.wastype}}</h3>
          <p>
            {{point.address}}
            <br />
            {{point.city}} - {{point.state}}
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { api } from "../services/api"

export default {
  name: "Results",
  data() {
    return {
      points: []
    };
  },
  methods: {
    async getInformations() {
      await api
        .get(`/points?state=${this.$route.query.state}`)
        .then(e => this.points = e.data);
    }
  },
  beforeMount() {
    this.getInformations();
  },
  components: {
    Header
  }
};
</script>

<style>
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