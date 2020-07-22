<template>
  <div class="button" :class="bsize" @click="$emit('click', $event)">
    <div v-if="btype === 'icon'">
      <SearchIcon />
    </div>
    <p>{{btext}}</p>
  </div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";

export default {
  name: "Button",
  components: {
    SearchIcon
  },
  props: ["btext", "btype", "bsize"]
};
</script>

<style>
.button {
  width: 100%;
  max-width: 360px;
  height: 72px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background: var(--primary-color);
  transition: 400ms;
  color: white;
  border: 0;
}

.md {
  height: 50px;
}

.button:hover {
  background-color: #2fb86e;
  cursor: pointer;
}

.button div {
  display: flex;
  place-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 100%;
  width: 20%;
  background-color: #2FB86E;
}

.button p {
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
}
</style>