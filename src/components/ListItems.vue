<template>
  <li class @click="toggle" data-id="lamps">
    <img :src="require(`../assets/${icon}.png`)" alt="Lampada" />
    <span>{{label}}</span>
  </li>
</template>

<script>
export default {
  name: "Items",
  props: ["icon", "label"],
  methods: {
    toggle(e) {
      e.target.classList.toggle("selected");
      this.$emit("click", this.label);
    }
  }
};
</script>


<style scoped>
li {
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

li span {
  margin-top: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  color: var(--title-color);
}

li.selected {
  background: #e1faec;
  border: 2px solid #34cb79;
}

li img,
li span {
  pointer-events: none;
}
</style>