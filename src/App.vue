<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&family=Ubuntu:wght@700&display=swap");
:root {
  --title-color: #322153;
  --primary-color: #34cb79;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "roboto", sans-serif;
}

body {
  background: #f0f0f5;
}

a {
  text-decoration: none;
}

h1 {
  font-family: Ubuntu, sans-serif;
  color: var(--title-color);
}
</style>
